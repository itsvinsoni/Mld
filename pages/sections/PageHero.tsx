import React, { useEffect, useRef, useState } from 'react';

export const PageHero: React.FC<{
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  align?: 'center' | 'left';
  breadcrumb?: { label: string; href: string }[];
}> = ({ label, title, subtitle, image, align = 'center', breadcrumb }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let mx = 50, my = 50;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width) * 100;
      my = ((e.clientY - r.top) / r.height) * 100;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setMouse({ x: mx, y: my });
        raf = 0;
      });
    };
    el.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      el.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <section ref={ref} className="relative pt-32 md:pt-40 pb-16 overflow-hidden text-white">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover kenburns will-change-transform" />
        <div className="absolute inset-0 bg-slate-900/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-slate-900/65" />
        {/* Mouse-follow glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(500px circle at ${mouse.x}% ${mouse.y}%, rgba(249,115,22,0.22), transparent 60%)`,
          }}
        />
        {/* Orbs */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-orange/25 blur-3xl pointer-events-none float-slow gpu" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl pointer-events-none float-lg gpu" />
      </div>
      <div
        className={`relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 ${
          align === 'center' ? 'text-center' : ''
        }`}
      >
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className={`mb-4 flex items-center gap-2 text-sm text-white/70 ${align === 'center' ? 'justify-center' : ''} rise`} style={{ animationDelay: '0ms' }}>
            {breadcrumb.map((b, i) => (
              <React.Fragment key={i}>
                {i > 0 && <IconSep />}
                {i === breadcrumb.length - 1 ? (
                  <span className="text-white/95 font-medium">{b.label}</span>
                ) : (
                  <a href={b.href} className="hover:text-brand-orange transition-colors">{b.label}</a>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
        <span className={`section-label mb-4 rise text-white ${align === 'center' ? 'justify-center' : ''}`} style={{ animationDelay: '60ms' }}>
          <span className="block w-8 h-px bg-brand-orange" />
          {label}
          {align === 'center' ? <span className="block w-8 h-px bg-brand-orange" /> : null}
        </span>
        <h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight rise"
          style={{ animationDelay: '160ms' }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className={`mt-5 text-white/85 text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} rise`}
            style={{ animationDelay: '260ms' }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
};

const IconSep: React.FC = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
