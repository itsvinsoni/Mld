import React, { useEffect, useRef, useState } from 'react';
import { Icon } from './icons';
import { useT } from './i18n';

export const NotFoundPage: React.FC = () => {
  const t = useT();
  const ref = useRef<HTMLDivElement | null>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setMouse({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);
  return (
    <section ref={ref} className="relative pt-40 pb-24 min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background orbs + mouse-follow glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, rgba(249,115,22,0.18), transparent 60%)`,
        }}
      />
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-brand-orange/15 blur-3xl float-slow gpu" />
      <div className="absolute inset-0 bg-dots-warm opacity-50 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-amber-400/15 blur-3xl float-lg gpu" />
      <div className="absolute inset-0" />

      <div className="relative mx-auto max-w-2xl px-4 text-center">
        <div className="relative inline-block">
          <div className="text-orange-gradient font-serif text-[8rem] md:text-[10rem] font-bold leading-none scale-in" style={{ animationDelay: '0ms' }}>
            404
          </div>
          <div className="absolute -top-4 -right-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-dark flex items-center justify-center text-white shadow-xl pulse-glow">
            <Icon id="search" size={20} />
          </div>
        </div>
        <h1 className="mt-2 font-serif text-3xl md:text-4xl font-bold text-light-textPrimary rise" style={{ animationDelay: '200ms' }}>
          {t('notFound.heading', 'Page Not Found')}
        </h1>
        <p className="mt-4 text-light-textSecondary text-lg max-w-md mx-auto rise" style={{ animationDelay: '320ms' }}>
          {t('notFound.sub', "The page you're looking for doesn't exist or has moved.")}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 rise" style={{ animationDelay: '440ms' }}>
          <a href="/" className="btn-orange group inline-flex items-center gap-2 px-6 py-3 rounded-full text-base">
            <Icon id="home" size={18} />
            {t('notFound.home', 'Back to Home')}
            <Icon id="arrow-right" size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/institutions"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-semibold text-slate-700 border-2 border-slate-200 hover:border-brand-orange hover:bg-brand-orange-light hover:text-brand-orange-dark transition-all duration-300"
          >
            {t('insts.viewAll', 'View Institutions')}
            <Icon id="arrow-right" size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
