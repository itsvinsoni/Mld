import React from 'react';
import { Icon } from '../icons';

export const ContactCta: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-light-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white p-8 md:p-14">
          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute right-20 bottom-0 h-28 w-28 rounded-full bg-white/10 blur-xl" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-white/90 text-xs font-bold uppercase tracking-widest">
                <Icon id="sparkles" size={16} /> Admission & Careers
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold leading-tight">
                Begin your journey with MLD Memorial Sansthan
              </h2>
              <p className="mt-3 text-white/90 max-w-md">
                Have a question about admissions, courses, or careers? Our team is here to help.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-brand-orange font-bold hover:bg-brand-orange-light transition-colors"
              >
                Contact Us
                <Icon id="arrow-right" size={18} />
              </a>
              <a
                href="/institutions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 border border-white/30 text-white font-bold hover:bg-white/25 transition-colors"
              >
                Explore Institutions
                <Icon id="external" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
