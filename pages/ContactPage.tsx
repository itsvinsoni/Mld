import React from 'react';
import { ContactSection } from './sections/ContactSection';

export const ContactPage: React.FC = () => {
  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute top-20 -left-24 h-80 w-80 rounded-full bg-brand-orange/20 blur-3xl float-slow" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
          <span className="section-label mb-4">
            <span className="block w-8 h-px bg-brand-orange" />
            Contact Us
            <span className="block w-8 h-px bg-brand-orange" />
          </span>
          <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Get in <span className="text-orange-gradient">Touch</span>
          </h1>
          <p className="mt-5 text-white/85 text-lg max-w-2xl mx-auto">
            Have a question about admissions, courses, or careers? We'd love to hear from you.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
};
