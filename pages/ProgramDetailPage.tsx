import React from 'react';
import { Icon } from './icons';
import { useReveal } from './hooks';
import { SectionHeading } from './SectionHeading';
import { getInstitutionBySlug, type Institution } from './data';
import { getProgramBySlug, type ProgramDetail } from './programDetails';
import { PageHero } from './sections/PageHero';

const KeyFacts: React.FC<{ p: ProgramDetail }> = ({ p }) => {
  const facts = [
    { icon: 'clock' as const, label: 'Duration', value: p.duration },
    { icon: 'award' as const, label: 'Level', value: p.level },
    { icon: 'book' as const, label: 'Eligibility', value: p.eligibility },
    { icon: 'monitor' as const, label: 'Mode', value: p.mode },
    { icon: 'globe' as const, label: 'Medium', value: p.medium },
    { icon: 'star' as const, label: 'Category', value: p.category },
  ];
  return (
    <div className="relative -mt-12 z-10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
          {facts.map((f) => (
            <div key={f.label} className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-brand-orange-light text-brand-orange shrink-0">
                <Icon id={f.icon} size={20} />
              </span>
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-widest font-bold text-slate-500">{f.label}</div>
                <div className="text-sm md:text-base font-semibold text-light-textPrimary mt-0.5 leading-snug">
                  {f.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Overview: React.FC<{ p: ProgramDetail }> = ({ p }) => {
  const { ref, className } = useReveal('up');
  return (
    <section ref={ref} className={`py-16 md:py-20 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <span className="section-label mb-3">Programme Overview</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-light-textPrimary leading-tight">
              About this <span className="text-orange-gradient">programme</span>
            </h2>
            <span className="orange-divider mt-5" />
          </div>
          <div className="lg:col-span-2 space-y-4 text-light-textSecondary text-base md:text-lg leading-relaxed">
            {p.overview.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Highlights: React.FC<{ p: ProgramDetail }> = ({ p }) => {
  return (
    <section className="py-12 bg-[#F7F3EE] border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {p.highlights.map((h) => (
            <div key={h.label} className="text-center">
              <div className="stat-number text-3xl md:text-4xl font-bold tabular-nums">{h.value}</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-500">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhatYouLearn: React.FC<{ p: ProgramDetail }> = ({ p }) => {
  const { ref, className } = useReveal('up');
  return (
    <section ref={ref} className={`py-16 md:py-20 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading label="Curriculum" heading="What you will learn" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {p.whatYouLearn.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-[#F7F3EE] rounded-2xl p-5 card-glow"
            >
              <span className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-brand-orange text-white shrink-0">
                <Icon id="check" size={18} />
              </span>
              <span className="text-light-textPrimary font-medium leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CareerCard: React.FC<{ c: ProgramDetail['careerOptions'][number]; index: number }> = ({ c, index }) => {
  const { ref, className } = useReveal('up');
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 50}ms` }}
      className={`card-glow bg-white border border-slate-100 rounded-2xl p-6 ${className}`}
    >
      <div className="flex items-start gap-4">
        <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-brand-orange-light text-brand-orange shrink-0">
          <Icon id={(c.icon as any) || 'briefcase'} size={22} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-lg font-bold text-light-textPrimary leading-snug">{c.role}</h3>
          <p className="mt-1.5 text-sm text-light-textSecondary leading-relaxed">{c.description}</p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange">
            <Icon id="trending-up" size={14} />
            {c.scope}
          </div>
        </div>
      </div>
    </div>
  );
};

const Careers: React.FC<{ p: ProgramDetail }> = ({ p }) => {
  return (
    <section className="py-16 md:py-20 bg-[#F7F3EE]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading label="Career Pathways" heading="Where this programme can take you" />
        <p className="mt-5 max-w-3xl text-light-textSecondary text-base md:text-lg leading-relaxed">
          Graduates of {p.name} go on to rewarding careers across {p.careerOptions.length === 1 ? 'the field' : 'multiple high-growth fields'}. Here are the most popular career paths you can pursue.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {p.careerOptions.map((c, i) => (
            <CareerCard key={c.role} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyMLD: React.FC<{ p: ProgramDetail }> = ({ p }) => {
  const { ref, className } = useReveal('up');
  return (
    <section ref={ref} className={`py-16 md:py-20 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="section-label mb-3">Why MLD</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-light-textPrimary leading-tight">
              Why choose <span className="text-orange-gradient">MLD</span> for {p.name}?
            </h2>
            <span className="orange-divider mt-5" />
            <p className="mt-6 text-light-textSecondary text-base md:text-lg leading-relaxed">
              {p.name} at MLD Memorial Sansthan is built on three decades of educational excellence, a strong faculty, modern facilities, and a deep commitment to every student's success.
            </p>
          </div>
          <ul className="space-y-3">
            {p.whyMLD.map((reason, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-[#F7F3EE] rounded-2xl p-5"
              >
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-brand-orange text-white shrink-0">
                  <Icon id="check" size={16} />
                </span>
                <span className="text-light-textPrimary font-medium leading-relaxed">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Facilities: React.FC<{ p: ProgramDetail }> = ({ p }) => {
  const { ref, className } = useReveal('up');
  return (
    <section ref={ref} className={`py-16 md:py-20 bg-[#F7F3EE] ${className}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading label="Facilities" heading="What you'll have access to" />
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {p.facilities.map((f) => (
            <div
              key={f.label}
              className="card-glow bg-white rounded-2xl p-5 text-center border border-slate-100"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-brand-orange-light text-brand-orange mb-3">
                <Icon id={(f.icon as any) || 'star'} size={22} />
              </span>
              <div className="text-sm font-semibold text-light-textPrimary leading-snug">{f.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OfferedAt: React.FC<{ p: ProgramDetail }> = ({ p }) => {
  const institutions = p.institutionSlugs
    .map((s) => getInstitutionBySlug(s))
    .filter(Boolean) as Institution[];
  if (institutions.length === 0) return null;
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading label="Offered At" heading="Where you can study this programme" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {institutions.map((inst) => (
            <a
              key={inst.slug}
              href={`/institutions/${inst.slug}`}
              className="card-glow group bg-[#F7F3EE] rounded-2xl overflow-hidden border border-slate-100"
            >
              <div className="relative h-40 overflow-hidden bg-slate-100">
                <img
                  src={inst.image}
                  alt={inst.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full bg-white/95 text-brand-orange-dark">
                  {inst.typeLabel}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-light-textPrimary leading-snug group-hover:text-brand-orange transition-colors">
                  {inst.shortName}
                </h3>
                <p className="mt-1 text-sm text-light-textSecondary flex items-center gap-1.5">
                  <Icon id="map-pin" size={14} className="text-brand-orange" />
                  {inst.location}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange">
                  View Institution
                  <Icon id="arrow-right" size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const AdmissionCta: React.FC<{ p: ProgramDetail }> = ({ p }) => {
  return (
    <section className="py-16 md:py-20 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange-light mb-3">
          <span className="w-8 h-px bg-brand-orange" />
          Admissions Open
          <span className="w-8 h-px bg-brand-orange" />
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
          Start your journey in <span className="text-orange-gradient">{p.name}</span> today.
        </h2>
        <p className="mt-5 text-white/80 text-base md:text-lg max-w-2xl mx-auto">
          Apply online or speak to our admissions team for eligibility, fee structure, and the next batch start date.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={p.enquiryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base"
          >
            {p.enquiryLabel}
            <Icon id="external" size={16} />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white border-2 border-white/40 hover:bg-white hover:text-slate-900 transition-colors"
          >
            Talk to Admissions
          </a>
        </div>
      </div>
    </section>
  );
};

export const ProgramDetailPage: React.FC<{ slug?: string }> = ({ slug }) => {
  const p = getProgramBySlug(slug);

  if (!p) {
    return (
      <section className="pt-40 pb-20 text-center min-h-[60vh]">
        <h1 className="font-serif text-4xl font-bold text-light-textPrimary">Programme Not Found</h1>
        <p className="mt-4 text-light-textSecondary">Could not find the programme you were looking for.</p>
        <a
          href="/institutions"
          className="btn-orange mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full"
        >
          View All Institutions <Icon id="arrow-right" size={18} />
        </a>
      </section>
    );
  }

  return (
    <>
      <PageHero
        label={p.category}
        title={
          <>
            {p.name.split('(')[0].trim()}{' '}
            {p.name.includes('(') ? (
              <span className="text-orange-gradient">({p.name.split('(')[1]}</span>
            ) : null}
          </>
        }
        subtitle={p.shortDescription}
        image={p.image}
      />
      <KeyFacts p={p} />
      <Overview p={p} />
      <Highlights p={p} />
      <WhatYouLearn p={p} />
      <Careers p={p} />
      <WhyMLD p={p} />
      <Facilities p={p} />
      <OfferedAt p={p} />
      <AdmissionCta p={p} />
    </>
  );
};
