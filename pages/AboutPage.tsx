import React from 'react';
import { AboutSection } from './sections/AboutSection';
import { StatsStrip } from './sections/HeroSection';
import { ContactCta } from './shared/ContactCta';
import { Icon } from './icons';
import { ABOUT, ABOUT_IMAGE } from './data';
import { PageHero } from './sections/PageHero';

export const AboutPage: React.FC = () => {
  return (
    <>
      <PageHero
        label="About Us"
        title={<>A Legacy of <span className="text-orange-gradient">Quality Education</span></>}
        subtitle={ABOUT.paragraph}
        image={ABOUT_IMAGE}
      />

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
