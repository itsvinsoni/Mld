import React from 'react';
import { Icon } from '../icons';
import { useInView, useCountUp } from '../hooks';
import { HERO, STATS } from '../data';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden hero-gradient">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 hero-grid opacity-40" />

      {/* Decorative floating orbs */}
      <div className="absolute top-24 -left-20 h-80 w-80 rounded-full bg-brand-orange/30 blur-3xl float-slow" />
      <div className="absolute bottom-16 right-0 h-96 w-96 rounded-full bg-brand-orange-dark/30 blur-3xl float-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 h-40 w-40 rounded-full bg-white/10 blur-2xl float-slow" style={{ animationDelay: '3s' }} />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 w-full pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div className="max-w-xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2.5 hero-badge text-white bg-white/10 glass px-4 py-2 rounded-full mb-7 rise">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              {HERO.badge}
            </span>

            <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] rise" style={{ animationDelay: '120ms' }}>
              {HERO.headingLine1}
              <br />
              <span className="text-orange-gradient">{HERO.headingLine2}</span>
            </h1>

            <p className="mt-6 text-white/85 text-lg md:text-xl leading-relaxed rise" style={{ animationDelay: '240ms' }}>
              {HERO.subheading}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4 rise" style={{ animationDelay: '360ms' }}>
              <a href="/institutions" className="btn-orange inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base">
                Explore Our Institutions
                <Icon id="arrow-right" size={18} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white border-2 border-white/25 hover:bg-white hover:text-slate-900 transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Announcement */}
            <div className="mt-10 inline-flex items-center gap-3 glass px-5 py-3 rounded-2xl rise" style={{ animationDelay: '480ms' }}>
              <span className="inline-flex items-center gap-2 text-orange-300 text-xs font-bold uppercase tracking-widest">
                <Icon id="sparkles" size={16} /> Announcement
              </span>
              <span className="text-white text-sm md:text-base font-medium border-l border-white/20 pl-4">
                {HERO.notice}
              </span>
            </div>
          </div>

          {/* Right — highlight cards */}
          <div className="hidden lg:grid grid-cols-2 gap-5">
            <div className="glass rounded-3xl p-6 float-slow">
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-brand-orange text-white mb-4">
                <Icon id="graduation" size={24} />
              </span>
              <div className="font-serif text-white text-3xl font-bold">5000+</div>
              <div className="mt-1 text-white/70 text-sm">Students Educated</div>
            </div>
            <div className="glass rounded-3xl p-6 mt-10 float-slow" style={{ animationDelay: '1.5s' }}>
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-white/15 text-white mb-4">
                <Icon id="building" size={24} />
              </span>
              <div className="font-serif text-white text-3xl font-bold">6+</div>
              <div className="mt-1 text-white/70 text-sm">Institutions</div>
            </div>
            <div className="glass rounded-3xl p-6 float-slow" style={{ animationDelay: '3s' }}>
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-brand-orange text-white mb-4">
                <Icon id="award" size={24} />
              </span>
              <div className="font-serif text-white text-3xl font-bold">20+</div>
              <div className="mt-1 text-white/70 text-sm">Years of Legacy</div>
            </div>
            <div className="glass rounded-3xl p-6 mt-10 float-slow" style={{ animationDelay: '4s' }}>
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-white/15 text-white mb-4">
                <Icon id="users" size={24} />
              </span>
              <div className="font-serif text-white text-3xl font-bold">50+</div>
              <div className="mt-1 text-white/70 text-sm">Expert Faculty</div>
            </div>
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
      <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-white/20 text-white mb-4">
        <Icon id={icon} size={24} />
      </div>
      <div className="text-white text-4xl md:text-5xl font-bold tabular-nums">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-white/80 uppercase tracking-wide">{label}</div>
    </div>
  );
};

const StatsStrip: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  return (
    <section id="stats" ref={ref} className="relative stat-band py-14 md:py-16">
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
