import React from 'react';
import { AboutSection } from './sections/AboutSection';
import { StatsStrip } from './sections/HeroSection';
import { ContactCta } from './shared/ContactCta';
import { Icon } from './icons';
import { ABOUT } from './data';

export const AboutPage: React.FC = () => {
  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute top-20 -right-24 h-80 w-80 rounded-full bg-brand-orange/20 blur-3xl float-slow" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
          <span className="section-label mb-4">
            <span className="block w-8 h-px bg-brand-orange" />
            About Us
            <span className="block w-8 h-px bg-brand-orange" />
          </span>
          <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            A Legacy of <span className="text-orange-gradient">Quality Education</span>
          </h1>
          <p className="mt-5 text-white/85 text-lg max-w-2xl mx-auto">{ABOUT.paragraph}</p>
        </div>
      </section>

      <AboutSection />
      <StatsStrip />

      {/* Mission / Vision */}
      <section className="py-20 md:py-28 bg-[#F7F3EE]">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: 'award' as const,
                title: 'Our Mission',
                text: 'To provide accessible, quality education that empowers students to excel academically and grow into responsible citizens of tomorrow.',
              },
              {
                icon: 'landmark' as const,
                title: 'Our Vision',
                text: 'To be a leading educational society in Rajasthan, nurturing every student to discover their potential and contribute meaningfully to society.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-slate-100 p-8 card-glow">
                <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-brand-orange-light text-brand-orange mb-4">
                  <Icon id={item.icon} size={24} />
                </span>
                <h3 className="font-serif text-xl font-bold text-light-textPrimary">{item.title}</h3>
                <p className="mt-3 text-light-textSecondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
};
