import React from 'react';
import { Icon } from './icons';
import { useReveal } from './hooks';
import { SectionHeading } from './SectionHeading';
import { INSTITUTIONS, getInstitutionBySlug, type Institution } from './data';
import { ContactCta } from './shared/ContactCta';

const InstitutionHero: React.FC<{ inst: Institution }> = ({ inst }) => {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 overflow-hidden hero-gradient text-white">
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-brand-orange/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
          <a href="/" className="hover:text-white transition">Home</a>
          <Icon id="chevron-right" size={14} />
          <a href="/institutions" className="hover:text-white transition">Institutions</a>
          <Icon id="chevron-right" size={14} />
          <span className="text-brand-orange">{inst.shortName}</span>
        </nav>
        <div className="flex items-center gap-4 mb-5">
          <span className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-brand-orange text-white shadow-lg">
            <Icon id={inst.icon} size={30} />
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-white/15 text-white backdrop-blur">
            {inst.typeLabel}
          </span>
        </div>
        <h1 className="mt-2 font-serif text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
          {inst.name}
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-4 text-white/85">
          <span className="inline-flex items-center gap-1.5">
            <Icon id="map-pin" size={16} className="text-brand-orange" /> {inst.location}
          </span>
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          {inst.actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.external ? '_blank' : undefined}
              rel={action.external ? 'noopener noreferrer' : undefined}
              className={
                action.label.toLowerCase().includes('enquiry') || action.label.includes('Admission')
                  ? 'btn-orange inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm'
                  : 'inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white border-2 border-white/25 hover:bg-white hover:text-slate-900 transition-colors'
              }
            >
              {action.label}
              <Icon id={action.external ? 'external' : 'arrow-right'} size={16} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Highlights: React.FC<{ inst: Institution }> = ({ inst }) => {
  return (
    <div className="relative -mt-10 z-10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
          {inst.highlights.map((h) => (
            <div key={h.label} className="text-center">
              <div className="stat-number text-2xl md:text-4xl font-bold tabular-nums">{h.value}</div>
              <div className="mt-1 text-xs md:text-sm font-medium text-slate-500">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutBlock: React.FC<{ inst: Institution }> = ({ inst }) => {
  const { ref, className } = useReveal('left');
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${className}`}>
          <div>
            <span className="section-label mb-3">About {inst.shortName}</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-light-textPrimary leading-tight">
              A Closer Look at Our Institution
            </h2>
            <span className="orange-divider mt-5" />
            <p className="mt-6 text-light-textSecondary text-base md:text-lg leading-relaxed">
              {inst.about}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {inst.facilities.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 bg-[#F7F3EE] rounded-xl px-4 py-4 hover:bg-brand-orange-light hover:-translate-y-0.5 transition-all"
              >
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white text-brand-orange shadow-sm shrink-0">
                  <Icon id={f.icon} size={20} />
                </span>
                <span className="font-medium text-sm text-light-textPrimary">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Programs: React.FC<{ inst: Institution }> = ({ inst }) => {
  const { ref, className } = useReveal('up');
  return (
    <section className="py-16 md:py-20 bg-[#F7F3EE]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading label="Programmes" heading={`Courses & Programs`} subtext={`Programmes offered at ${inst.shortName}.`} />
        <div ref={ref} className={`max-w-4xl mx-auto space-y-3 ${className}`}>
          {inst.programs.map((p, i) => (
            <div
              key={p.name}
              className="flex items-center justify-between gap-4 bg-white rounded-2xl border border-slate-100 p-5 card-glow"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-brand-orange-light text-brand-orange shrink-0">
                  <Icon id="book" size={20} />
                </span>
                <div>
                  <div className="font-bold text-light-textPrimary">{p.name}</div>
                  <div className="text-sm text-light-textSecondary">{p.level}</div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange-dark bg-brand-orange-light px-3 py-1.5 rounded-full whitespace-nowrap">
                <Icon id="clock" size={14} /> {p.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OtherInstitutions: React.FC<{ current: Institution }> = ({ current }) => {
  const others = INSTITUTIONS.filter((i) => i.id !== current.id).slice(0, 3);
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading label="Explore More" heading="Other Institutions" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((inst) => (
            <a
              key={inst.id}
              href={`/institutions/${inst.slug}`}
              className="card-glow group bg-[#F7F3EE] rounded-2xl overflow-hidden flex items-center gap-4 p-4"
            >
              <span className={`inline-flex items-center justify-center h-20 w-20 rounded-xl shrink-0 hero-gradient text-white`}>
                <Icon id={inst.icon} size={30} />
              </span>
              <div>
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wide">
                  {inst.typeLabel}
                </span>
                <div className="font-bold text-light-textPrimary leading-snug group-hover:text-brand-orange transition-colors">
                  {inst.shortName}
                </div>
              </div>
              <Icon id="arrow-right" size={20} className="ml-auto text-brand-orange shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const InstitutionDetailPage: React.FC<{ slug?: string }> = ({ slug }) => {
  const inst = getInstitutionBySlug(slug);

  if (!inst) {
    return (
      <section className="pt-40 pb-20 text-center min-h-[60vh]">
        <h1 className="font-serif text-4xl font-bold text-light-textPrimary">Institution Not Found</h1>
        <p className="mt-4 text-light-textSecondary">Could not find the institution you were looking for.</p>
        <a href="/institutions" className="btn-orange mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full">
          View All Institutions <Icon id="arrow-right" size={18} />
        </a>
      </section>
    );
  }

  return (
    <>
      <InstitutionHero inst={inst} />
      <Highlights inst={inst} />
      <AboutBlock inst={inst} />
      <Programs inst={inst} />
      <OtherInstitutions current={inst} />
      <ContactCta />
    </>
  );
};
