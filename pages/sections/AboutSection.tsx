import React from 'react';
import { Icon } from '../icons';
import { useReveal } from '../hooks';
import { ABOUT, ABOUT_IMAGE } from '../data';

export const AboutSection: React.FC = () => {
  const left = useReveal('left');
  const right = useReveal('right');

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <div ref={right.ref} className={`relative order-2 lg:order-1 ${right.className}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
              <img
                src={ABOUT_IMAGE}
                alt="Students at MLD Memorial Sansthan"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-3 md:-right-6 float-slow">
              <div className="bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white rounded-3xl px-6 py-5 shadow-2xl text-center">
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
            <span className="section-label mb-3">About Us</span>
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
                  className="flex items-center gap-3 bg-[#F7F3EE] rounded-xl px-4 py-3 hover:bg-brand-orange-light hover:-translate-y-0.5 transition-all"
                >
                  <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white text-brand-orange shadow-sm">
                    <Icon id={f.icon} size={18} />
                  </span>
                  <span className="font-medium text-sm text-light-textPrimary">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
