import React from 'react';
import { Icon } from '../icons';
import { useInView, useCountUp } from '../hooks';
import { HERO, STATS } from '../data';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://picsum.photos/seed/mld-hero/1920/1280"
          alt="MLD students on campus"
          className="w-full h-full object-cover kenburns"
        />
        <div className="absolute inset-0 hero-overlay" />
        {/* Decorative blobs */}
        <div className="absolute top-20 -left-24 h-80 w-80 rounded-full bg-brand-orange/30 blur-3xl float-slow" />
        <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-brand-orange-dark/30 blur-3xl float-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 w-full pt-28 pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-3 hero-badge text-brand-orange-light bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-7 rise">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            {HERO.badge}
          </span>

          {/* Heading */}
          <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] rise" style={{ animationDelay: '120ms' }}>
            {HERO.headingLine1}
            <br />
            <span className="text-orange-gradient">{HERO.headingLine2}</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl rise" style={{ animationDelay: '240ms' }}>
            {HERO.subheading}
          </p>

          {/* CTAs */}
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
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white border-2 border-white/30 hover:bg-white hover:text-slate-900 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Notice ticker */}
          <div className="mt-10 inline-flex items-center gap-3 bg-white/10 backdrop-blur px-5 py-3 rounded-2xl rise" style={{ animationDelay: '480ms' }}>
            <span className="inline-flex items-center gap-2 text-brand-orange-light text-xs font-bold uppercase tracking-widest">
              <Icon id="sparkles" size={16} /> Announcement
            </span>
            <span className="text-white text-sm md:text-base font-medium border-l border-white/20 pl-4">
              {HERO.notice}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
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
    <div className="text-center">
      <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-brand-orange-light text-brand-orange mb-4">
        <Icon id={icon} size={24} />
      </div>
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
    <section id="stats" ref={ref} className="relative bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-14 md:py-16">
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
