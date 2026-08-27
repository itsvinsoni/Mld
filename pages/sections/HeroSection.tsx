import React from 'react';
import { Icon } from '../icons';
import { useInView, useCountUp } from '../hooks';
import { HERO, STATS, HERO_IMAGES } from '../data';

const HeroSection: React.FC = () => {
  const heroImg = HERO_IMAGES[0];
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden bg-slate-900 text-white">
      {/* Real MLD campus photo background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="MLD Memorial Sansthan campus"
          className="w-full h-full object-cover"
        />
        {/* Subtle dark overlay for legibility */}
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-slate-900/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 w-full pt-32 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-white mb-6 rise">
            <span className="w-8 h-px bg-brand-orange" />
            {HERO.badge}
          </span>

          <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] rise" style={{ animationDelay: '120ms' }}>
            {HERO.headingLine1}
            <br />
            <span className="text-orange-gradient">{HERO.headingLine2}</span>
          </h1>

          <p className="mt-6 text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl rise" style={{ animationDelay: '240ms' }}>
            {HERO.subheading}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 rise" style={{ animationDelay: '360ms' }}>
            <a
              href="/institutions"
              className="btn-orange inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base"
            >
              Explore Our Institutions
              <Icon id="arrow-right" size={18} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white border-2 border-white/40 hover:bg-white hover:text-slate-900 transition-colors"
            >
              Contact Us
            </a>
          </div>

        </div>
      </div>

      <button
        onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[11px] uppercase tracking-widest">{HERO.scrollHint}</span>
        <Icon id="chevron-down" size={22} className="animate-bounce" />
      </button>
    </section>
  );
};

const StatItem: React.FC<{ value: number; suffix: string; label: string; icon: React.ComponentProps<typeof Icon>['id']; start: boolean }> = ({
  value,
  suffix,
  label,
  icon,
  start,
}) => {
  const count = useCountUp(value, 1800, start);
  return (
    <div className="text-center group">
      <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-brand-orange-light text-brand-orange mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors">
        <Icon id={icon} size={24} />
      </span>
      <div className="stat-number text-4xl md:text-5xl font-bold tabular-nums">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-wide">{label}</div>
    </div>
  );
};

const StatsStrip: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  return (
    <section id="stats" ref={ref} className="relative bg-white border-y border-slate-100 py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {STATS.map((stat) => (
            <StatItem
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              start={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { HeroSection, StatsStrip };
