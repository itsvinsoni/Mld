import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useInView, useCountUp } from './hooks';

/* ===================== CountUpStat (animated stat number) ===================== */
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

/* ===================== ScrollProgress (top progress bar) ===================== */
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

/* ===================== useTilt (3D tilt on hover) ===================== */
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

/* ===================== TextReveal (word-by-word reveal) ===================== */
export const TextReveal: React.FC<{
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}> = ({ text, className = '', delay = 0, stagger = 50, as: As = 'span' }) => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2 });
  const words = text.split(' ');
  return (
    <As ref={ref as any} className={`word-reveal ${className}`} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="word" style={{ animationDelay: `${delay + i * stagger}ms`, marginRight: '0.25em' }}>
          {w}
        </span>
      ))}
      {/* InView fallback: trigger animation by forcing re-render via key when in view */}
      <span style={{ display: 'none' }}>{inView ? '' : ''}</span>
    </As>
  );
};

/* ===================== Magnetic (button that follows cursor) ===================== */
export const Magnetic: React.FC<{
  children: React.ReactNode;
  strength?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  onClick?: React.MouseEventHandler;
  href?: string;
  target?: string;
  rel?: string;
}> = ({ children, strength = 0.3, className = '', as: As = 'div', ...rest }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      setPos({ x, y });
    };
    const onLeave = () => setPos({ x: 0, y: 0 });
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);
  const Tag = As as any;
  return (
    <Tag
      ref={ref as any}
      className={className}
      {...rest}
      style={{ ...((rest as any).style || {}), transform: `translate(${pos.x}px, ${pos.y}px)`, transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1)' }}
    >
      {children}
    </Tag>
  );
};

/* ===================== BackToTop ===================== */
export const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="back-top fixed bottom-6 right-6 z-50 inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white shadow-2xl shadow-brand-orange/40 hover:shadow-brand-orange/60 hover:scale-110 transition-all duration-300 pulse-ring"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
};

/* ===================== AuroraBg (rich animated gradient background) ===================== */
export const AuroraBg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`absolute inset-0 aurora ${className}`} aria-hidden="true" />
);

/* ===================== FloatingOrbs (decorative) ===================== */
export const FloatingOrbs: React.FC<{ count?: number; className?: string }> = ({ count = 2, className = '' }) => {
  const orbs = Array.from({ length: count });
  const colors = [
    'from-brand-orange/30 to-brand-orange-dark/10',
    'from-amber-300/25 to-orange-500/10',
    'from-rose-300/20 to-orange-400/10',
  ];
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      {orbs.map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-gradient-to-br blur-3xl ${colors[i % colors.length]} ${i % 2 === 0 ? 'float-xl' : 'float-lg'}`}
          style={{
            width: 320 + i * 80,
            height: 320 + i * 80,
            top: `${10 + i * 30}%`,
            left: `${(i % 2) * 60 + 5}%`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}
    </div>
  );
};

/* ===================== RevealOnScroll (wrapper) ===================== */
export const Reveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'up' | 'left' | 'right' | 'scale' | 'fade';
}> = ({ children, className = '', delay = 0, variant = 'up' }) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  const animClass =
    variant === 'left' ? 'slide-right'
    : variant === 'right' ? 'slide-left'
    : variant === 'scale' ? 'scale-in'
    : variant === 'fade' ? 'fade-up'
    : 'rise';
  return (
    <div
      ref={ref}
      className={`${inView ? animClass : 'opacity-0'} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ===================== Stagger children reveal ===================== */
export const Stagger: React.FC<{
  children: React.ReactNode[];
  className?: string;
  baseDelay?: number;
  step?: number;
}> = ({ children, className = '', baseDelay = 0, step = 80 }) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          className={inView ? 'rise' : 'opacity-0'}
          style={{ animationDelay: `${baseDelay + i * step}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

/* ===================== useScrollSpy (active section) ===================== */
export function useScrollSpy(ids: string[], offset = 120) {
  const [active, setActive] = useState<string>('');
  useEffect(() => {
    const onScroll = () => {
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top - offset <= 0 && r.bottom > offset) {
            current = id;
          }
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids.join('|'), offset]);
  return active;
}

/* ===================== CustomCursor (desktop only) ===================== */
export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on devices with a fine pointer (desktop)
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(pointer: fine) and (hover: hover)');
    setEnabled(mq.matches);
    const onChange = () => setEnabled(mq.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let dotX = 0, dotY = 0, ringX = 0, ringY = 0;
    let mx = 0, my = 0;
    let raf = 0;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', onMove);
    const loop = () => {
      dotX += (mx - dotX) * 0.7;
      dotY += (my - dotY) * 0.7;
      ringX += (mx - ringX) * 0.18;
      ringY += (my - ringY) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const isLink = t.closest('a, button, [data-hover]');
      if (ringRef.current) {
        if (isLink) ringRef.current.classList.add('cursor-grow');
        else ringRef.current.classList.remove('cursor-grow');
      }
    };
    document.addEventListener('mouseover', onOver);
    return () => document.removeEventListener('mouseover', onOver);
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{ position: 'fixed', top: 0, left: 0, width: 6, height: 6, borderRadius: '50%', background: '#F97316', pointerEvents: 'none', zIndex: 9999, mixBlendMode: 'difference' }}
      />
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        style={{ position: 'fixed', top: 0, left: 0, width: 32, height: 32, borderRadius: '50%', border: '1.5px solid #F97316', pointerEvents: 'none', zIndex: 9998, transition: 'width 0.3s, height 0.3s, border-color 0.3s' }}
      />
      <style>{`
        .custom-cursor-ring.cursor-grow { width: 56px !important; height: 56px !important; border-color: rgba(249,115,22,0.4); background: rgba(249,115,22,0.08); }
        @media (pointer: fine) and (hover: hover) { html, body { cursor: none; } a, button, [data-hover] { cursor: none; } }
      `}</style>
    </>
  );
};

/* ===================== Preloader (initial shimmer) ===================== */
export const Preloader: React.FC<{ done: boolean }> = ({ done }) => {
  if (done) return null;
  return (
    <div className="fixed inset-0 z-[200] bg-[#F7F3EE] flex flex-col items-center justify-center pointer-events-none">
      <div className="relative">
        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-dark flex items-center justify-center text-white font-serif font-bold text-2xl shadow-2xl shadow-brand-orange/40 pulse-glow">
          M
        </div>
        <div className="absolute -inset-2 rounded-3xl border-2 border-brand-orange/30 ring-spin" />
      </div>
      <div className="mt-6 w-32 h-1 rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full w-1/2 bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-full shimmer" style={{ backgroundSize: '200% 100%' }} />
      </div>
    </div>
  );
};
