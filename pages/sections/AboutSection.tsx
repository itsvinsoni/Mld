import React from 'react';
import { Icon } from '../icons';
import { useReveal } from '../hooks';
import { ABOUT } from '../data';

export const AboutSection: React.FC = () => {
  const left = useReveal('left');
  const right = useReveal('right');

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <div ref={right.ref} className={`relative order-2 lg:order-1 ${right.className}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hero-gradient aspect-[4/3]">
              <div className="absolute inset-0 hero-grid opacity-30" />
              <div className="absolute -top-10 -left-10 h-44 w-44 rounded-full bg-brand-orange/30 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-brand-orange-dark/30 blur-3xl" />
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <span className="inline-flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest">
                  <Icon id="sparkles" size={16} className="text-orange-300" /> Shaping Futures
                </span>
                <div className="glass rounded-3xl p-6">
                  <span className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-brand-orange text-white mb-4">
                    <Icon id="graduation" size={28} />
                  </span>
                  <div className="font-serif text-white text-3xl md:text-4xl font-bold">
                    Education that <span className="text-orange-gradient">transforms lives</span>
                  </div>
                </div>
              </div>
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
