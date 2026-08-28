import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '../icons';
import { useInView, useCountUp } from '../hooks';
import { useT } from '../i18n';
import { HERO, STATS, HERO_IMAGES } from '../data';

const HeroSection: React.FC = () => {
  const heroImg = HERO_IMAGES[0];
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden bg-slate-900 text-white">
      {/* Real MLD campus photo background — parallax + kenburns */}
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          src={heroImg}
          alt={t('brand.name', 'MLD Memorial Sansthan')}
          className="w-full h-full object-cover kenburns"
          style={{ transform: `translate3d(0, ${scrollY * 0.25}px, 0) scale(1.08)` }}
        />
        {/* Overlays for legibility */}
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-slate-900/70" />
        {/* Decorative dots + glow */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-orange/25 blur-3xl pointer-events-none float-slow" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-orange/15 blur-3xl pointer-events-none float-lg" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 w-full pt-32 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-white mb-6 rise">
            <span className="w-8 h-px bg-brand-orange" />
            {t('hero.badge', HERO.badge)}
          </span>

          <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] rise" style={{ animationDelay: '120ms' }}>
            {t('hero.line1', HERO.headingLine1)}
            <br />
            <span className="text-orange-gradient">{t('hero.line2', HERO.headingLine2)}</span>
          </h1>

          <p className="mt-6 text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl rise" style={{ animationDelay: '240ms' }}>
            {t('hero.sub', HERO.subheading)}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 rise" style={{ animationDelay: '360ms' }}>
            <a
              href="/institutions"
              className="btn-orange magnetic inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base"
            >
              {t('hero.ctaPrimary', 'Explore Our Institutions')}
              <Icon id="arrow-right" size={18} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white border-2 border-white/40 hover:bg-white hover:text-slate-900 transition-all duration-300 hover:gap-3"
            >
              {t('hero.ctaSecondary', 'Contact Us')}
              <Icon id="arrow-right" size={16} />
            </a>
          </div>

        </div>
      </div>

      <button
        onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors group"
        aria-label={t('hero.scrollDown', 'Scroll down')}
      >
        <span className="text-[11px] uppercase tracking-widest">{t('hero.scroll', HERO.scrollHint)}</span>
        <span className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/30 group-hover:border-white group-hover:bg-white/10 transition-all">
          <Icon id="chevron-down" size={20} className="animate-bounce" />
        </span>
      </button>
    </section>
  );
};

const StatItem: React.FC<{ value: number; suffix: string; label: string; icon: React.ComponentProps<typeof Icon>['id']; start: boolean; delay: number }> = ({
  value,
  suffix,
  label,
  icon,
  start,
  delay,
}) => {
  const count = useCountUp(value, 1800, start);
  return (
    <div
      className="text-center group p-5 rounded-2xl transition-all duration-500 hover:bg-brand-orange-light/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-orange/10"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-brand-orange-light text-brand-orange mb-4 transition-all duration-500 group-hover:bg-brand-orange group-hover:text-white group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-brand-orange/40">
        <Icon id={icon} size={24} />
      </span>
      <div className="stat-number text-4xl md:text-5xl font-bold tabular-nums transition-transform duration-500 group-hover:scale-105">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-wide group-hover:text-brand-orange-dark transition-colors">{label}</div>
    </div>
  );
};

const StatsStrip: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  return (
    <section id="stats" ref={ref} className="relative bg-white border-y border-slate-100 py-14 md:py-16 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,0.08) 1px, transparent 1px)', backgroundSize: '26px 26px' }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <StatItem
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              start={inView}
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { HeroSection, StatsStrip };
