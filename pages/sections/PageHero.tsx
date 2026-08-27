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
        <img src={image} alt="" className="w-full h-full object-cover kenburns" />
        <div className="absolute inset-0 bg-slate-900/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-slate-900/65" />
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)', backgroundSize: '26px 26px' }}
        />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-orange/25 blur-3xl pointer-events-none" />
      </div>
      <div
        className={`relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 ${
          align === 'center' ? 'text-center' : ''
        }`}
      >
        <span className="section-label mb-4 rise" style={{ animationDelay: '60ms' }}>
          <span className="block w-8 h-px bg-brand-orange" />
          {label}
          {align === 'center' ? <span className="block w-8 h-px bg-brand-orange" /> : null}
        </span>
        <h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight rise"
          style={{ animationDelay: '160ms' }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className="mt-5 text-white/85 text-lg max-w-2xl mx-auto rise"
            style={{ animationDelay: '260ms' }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
};
