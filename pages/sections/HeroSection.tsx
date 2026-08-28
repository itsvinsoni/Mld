import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '../icons';
import { useInView, useCountUp } from '../hooks';
import { useT } from '../i18n';
import { HERO, STATS, HERO_IMAGES } from '../data';
import { Magnetic, CountUpStat, TextReveal, Reveal, Stagger, FloatingOrbs } from '../effects';

const HeroSection: React.FC = () => {
  const heroImg = HERO_IMAGES[0];
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setMouse({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-slate-900 text-white"
    >
      {/* Real MLD campus photo — parallax + kenburns */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt={t('brand.name', 'MLD Memorial Sansthan')}
          className="w-full h-full object-cover kenburns"
          style={{ transform: `translate3d(0, ${scrollY * 0.25}px, 0) scale(1.1)` }}
        />
        {/* Overlays for legibility */}
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-slate-900/70" />
        {/* Mouse-follow glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, rgba(249,115,22,0.25), transparent 60%)`,
          }}
        />
        {/* Decorative dots + orbs */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-orange/30 blur-3xl pointer-events-none float-slow" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl pointer-events-none float-lg" />
        <div className="absolute top-1/3 right-1/4 h-40 w-40 rounded-full bg-amber-400/15 blur-3xl pointer-events-none float-xl" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 w-full pt-32 pb-24">
        <div className="max-w-3xl">
          <div className="rise" style={{ animationDelay: '0ms' }}>
            <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-white mb-6 px-3.5 py-1.5 rounded-full glass border border-white/20 backdrop-blur-md">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-orange pulse-dot" />
              {t('hero.badge', HERO.badge)}
            </span>
          </div>

          <h1
            className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] rise"
            style={{ animationDelay: '120ms' }}
          >
            <span className="block">
              <TextReveal text={t('hero.line1', HERO.headingLine1)} as="span" delay={120} stagger={45} />
            </span>
            <span className="text-orange-gradient block">
              <TextReveal text={t('hero.line2', HERO.headingLine2)} as="span" delay={420} stagger={45} />
            </span>
          </h1>

          <p
            className="mt-6 text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl rise"
            style={{ animationDelay: '700ms' }}
          >
            {t('hero.sub', HERO.subheading)}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 rise" style={{ animationDelay: '850ms' }}>
            <Magnetic strength={0.25} as="a" href="/institutions" className="btn-orange inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base">
              {t('hero.ctaPrimary', 'Explore Our Institutions')}
              <Icon id="arrow-right" size={18} />
            </Magnetic>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white border-2 border-white/40 hover:bg-white hover:text-slate-900 transition-all duration-300 hover:gap-3 hover:-translate-y-0.5 hover:shadow-xl"
            >
              {t('hero.ctaSecondary', 'Contact Us')}
              <Icon id="arrow-right" size={16} />
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-white/80 text-sm rise" style={{ animationDelay: '1000ms' }}>
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-white/15 backdrop-blur-sm">
                <Icon id="shield" size={14} className="text-brand-orange" />
              </span>
              {t('hero.trust1', 'Govt. Recognised')}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-white/15 backdrop-blur-sm">
                <Icon id="award" size={14} className="text-brand-orange" />
              </span>
              {t('hero.trust2', 'Council Approved')}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-white/15 backdrop-blur-sm">
                <Icon id="users" size={14} className="text-brand-orange" />
              </span>
              {t('hero.trust3', '7+ Institutions')}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll-down cue */}
      <button
        onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors group"
        aria-label={t('hero.scrollDown', 'Scroll down')}
      >
        <span className="text-[11px] uppercase tracking-widest">{t('hero.scroll', HERO.scrollHint)}</span>
        <span className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/30 group-hover:border-white group-hover:bg-white/10 transition-all group-hover:-translate-y-0.5">
          <Icon id="chevron-down" size={20} className="animate-bounce" />
        </span>
      </button>

      {/* Side reveal strip */}
      <div className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-10">
        <div className="w-px h-12 bg-white/20" />
        <span className="text-white/60 text-[10px] uppercase tracking-widest rotate-90 origin-center">MLD · 2025</span>
        <div className="w-px h-12 bg-white/20" />
      </div>
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
      className="text-center group p-6 rounded-3xl transition-all duration-500 hover:bg-brand-orange-light/50 hover:-translate-y-3 hover:shadow-2xl hover:shadow-brand-orange/20 border border-transparent hover:border-brand-orange/30"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-brand-orange-light text-brand-orange mb-4 transition-all duration-500 group-hover:bg-brand-orange group-hover:text-white group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-brand-orange/40">
        <Icon id={icon} size={26} />
      </span>
      <div className="stat-number text-4xl md:text-5xl font-bold tabular-nums transition-transform duration-500 group-hover:scale-110">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-wide group-hover:text-brand-orange-dark transition-colors">{label}</div>
    </div>
  );
};

const StatsStrip: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 });
  return (
    <section id="stats" ref={ref} className="relative bg-white border-y border-slate-100 py-14 md:py-20 overflow-hidden">
      {/* Background ornaments */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,0.08) 1px, transparent 1px)', backgroundSize: '26px 26px' }}
      />
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none float-xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl pointer-events-none float-lg" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <div key={stat.id} className={inView ? 'rise' : 'opacity-0'} style={{ animationDelay: `${i * 120}ms` }}>
              <StatItem
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
                start={inView}
                delay={i * 120}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { HeroSection, StatsStrip };
