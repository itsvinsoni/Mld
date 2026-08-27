import React from 'react';
import { Icon } from './icons';

export const NotFoundPage: React.FC = () => {
  return (
    <section className="pt-40 pb-24 min-h-[70vh] flex items-center justify-center">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <div className="text-orange-gradient font-serif text-8xl md:text-9xl font-bold">404</div>
        <h1 className="mt-4 font-serif text-3xl md:text-4xl font-bold text-light-textPrimary">
          Page Not Found
        </h1>
        <p className="mt-4 text-light-textSecondary text-lg">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/" className="btn-orange inline-flex items-center gap-2 px-6 py-3 rounded-full text-base">
            <Icon id="home" size={18} /> Back to Home
          </a>
          <a
            href="/institutions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-semibold text-slate-700 border-2 border-slate-200 hover:bg-slate-100 transition-colors"
          >
            View Institutions
          </a>
        </div>
      </div>
    </section>
  );
};
