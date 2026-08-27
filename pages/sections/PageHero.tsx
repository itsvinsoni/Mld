import React from 'react';

export const PageHero: React.FC<{
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  align?: 'center' | 'left';
}> = ({ label, title, subtitle, image, align = 'center' }) => {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 overflow-hidden text-white">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/25 to-slate-900/70" />
      </div>
      <div
        className={`relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 ${
          align === 'center' ? 'text-center' : ''
        }`}
      >
        <span className="section-label mb-4">
          <span className="block w-8 h-px bg-brand-orange" />
          {label}
          {align === 'center' ? <span className="block w-8 h-px bg-brand-orange" /> : null}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 text-white/85 text-lg max-w-2xl mx-auto">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
};
