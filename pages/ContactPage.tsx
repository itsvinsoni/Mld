import React from 'react';
import { ContactSection } from './sections/ContactSection';
import { HERO_IMAGES } from './data';
import { PageHero } from './sections/PageHero';

export const ContactPage: React.FC = () => {
  return (
    <>
      <PageHero
        label="Contact Us"
        title={<>Get in <span className="text-orange-gradient">Touch</span></>}
        subtitle="Have a question about admissions, courses, or careers? We'd love to hear from you."
        image={HERO_IMAGES[1]}
      />

      <ContactSection />
    </>
  );
};
