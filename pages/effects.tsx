import React, { useEffect, useRef, useState } from 'react';
import { useInView, useCountUp } from './hooks';

/* ----------------------- CountUpStat (animated stat number) ----------------------- */
export const CountUpStat: React.FC<{
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}> = ({ value, suffix = '', prefix = '', duration = 1800, className = '' }) => {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const n = useCountUp(value, duration, inView);
  return (
    <span ref={ref} className={`stat-number tabular-nums ${className}`}>
      {prefix}
      {n.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
};

/* ----------------------- ScrollProgress (top progress bar) ----------------------- */
export const ScrollProgress: React.FC = () => {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      setW(pct);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return <div className="scroll-progress" style={{ width: `${w}%` }} aria-hidden="true" />;
};

/* ----------------------- useTilt (3D tilt on hover) ----------------------- */
export function useTilt<T extends HTMLElement = HTMLDivElement>(max = 6) {
  const ref = useRef<T | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      const rx = (0.5 - y) * max;
      const ry = (x - 0.5) * max;
      setStyle({ transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)` });
    };
    const onLeave = () => setStyle({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)' });
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [max]);
  return { ref, style };
}
