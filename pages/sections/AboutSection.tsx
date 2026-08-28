import React from 'react';
import { Icon } from '../icons';
import { useReveal } from '../hooks';
import { ABOUT_IMAGE } from '../data';
import { useAbout } from '../dataI18n';
import { useT } from '../i18n';

export const AboutSection: React.FC = () => {
  const left = useReveal('left');
  const right = useReveal('right');
  const ABOUT = useAbout();
  const t = useT();

  return (
    <section id="about" className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Background ornaments */}
      <div className="absolute inset-0" />
      <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none float-slow gpu" />
      <div className="absolute inset-0 bg-dots-warm opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl pointer-events-none float-lg gpu" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <div ref={right.ref} className={`relative order-2 lg:order-1 ${right.className}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100 group">
              <img
                src={ABOUT_IMAGE}
                alt="Students at MLD Memorial Sansthan"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              {/* Frame accent */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl border-2 border-brand-orange/40 -z-0" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-3 md:-right-6 float-slow z-10">
              <div className="bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white rounded-3xl px-6 py-5 shadow-2xl text-center pulse-glow">
                <div className="text-4xl font-serif font-bold">{ABOUT.badgeValue}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-widest">
                  {ABOUT.badgeLabel}
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-brand-orange-light -z-10" />
          </div>

          {/* Content */}
          <div ref={left.ref} className={`order-1 lg:order-2 ${left.className}`}>
            <span className="section-label mb-3">{t('about.label', ABOUT.label)}</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-light-textPrimary leading-tight mt-2">
              {ABOUT.heading}
            </h2>
            <span className="orange-divider mt-5" />
            <p className="mt-6 text-light-textSecondary text-base md:text-lg leading-relaxed">
              {ABOUT.paragraph}
            </p>

            {/* Values */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ABOUT.features.map((f, i) => (
                <div
                  key={f.label}
                  className="group flex items-center gap-3 bg-[#F7F3EE] rounded-xl px-4 py-3 hover:bg-brand-orange-light hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-orange/10 transition-all duration-500"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white text-brand-orange shadow-sm group-hover:bg-brand-orange group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon id={f.icon} size={18} />
                  </span>
                  <span className="font-medium text-sm text-light-textPrimary group-hover:text-brand-orange-dark transition-colors">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
