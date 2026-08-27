import React from 'react';
import { Icon } from './icons';
import { useReveal } from './hooks';
import { SectionHeading } from './SectionHeading';
import { getInstitutionBySlug, type Institution } from './data';
import { getProgramBySlug, getDeanMessage, getTestimonialsForProgram, type ProgramDetail } from './programDetails';
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
        <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8 overflow-hidden">
          <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {facts.map((f, i) => (
              <div
                key={f.label}
                className="flex items-start gap-3 rise"
                style={{ animationDelay: `${i * 80}ms` }}
              >
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
  const { ref, className } = useReveal('up');
  return (
    <section ref={ref} className={`relative py-14 md:py-16 bg-[#F7F3EE] border-y border-slate-100 overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {p.highlights.map((h, i) => (
            <div
              key={h.label}
              className="text-center bg-white rounded-2xl py-6 px-3 border border-slate-100 card-glow rise"
              style={{ animationDelay: `${i * 100}ms` }}
            >
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

const ADMISSION_STEPS = [
  { n: '1', icon: 'check' as const, title: 'Check Eligibility', text: 'Review the eligibility criteria (qualification, minimum marks, age) for the course.' },
  { n: '2', icon: 'monitor' as const, title: 'Apply Online / Enquire', text: 'Fill the online enquiry or application form on our admissions portal with your details.' },
  { n: '3', icon: 'book' as const, title: 'Document Verification', text: 'Submit required documents (marksheets, ID, photos, transfer/migration certificate) for verification.' },
  { n: '4', icon: 'award' as const, title: 'Counselling & Selection', text: 'Attend counselling/merit-list process (and entrance test, where applicable) for seat allotment.' },
  { n: '5', icon: 'graduation' as const, title: 'Fee Payment & Admission', text: 'Pay the admission fee, complete enrolment, and join the programme on the notified date.' },
];

const DOCUMENTS = [
  '10th & 12th marksheets and certificates',
  'Transfer / Migration certificate (if applicable)',
  'Aadhaar card / valid photo ID',
  'Recent passport-size photographs',
  'Category / Domicile certificate (if applicable)',
  'Entrance / merit scorecard (where applicable)',
];

const AdmissionProcess: React.FC<{ p: ProgramDetail }> = ({ p }) => {
  const { ref, className } = useReveal('up');
  return (
    <section ref={ref} className={`py-16 md:py-20 bg-[#F7F3EE] ${className}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="section-label mb-3">Admissions</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-light-textPrimary leading-tight">
              How to <span className="text-orange-gradient">get admitted</span>
            </h2>
            <span className="orange-divider mt-5" />
            <div className="mt-6 bg-white rounded-2xl p-6 border border-slate-100 card-glow">
              <div className="text-[11px] uppercase tracking-widest font-bold text-brand-orange mb-2">Eligibility</div>
              <p className="text-light-textPrimary font-medium leading-relaxed">{p.eligibility}</p>
            </div>
            <div className="mt-6">
              <h3 className="font-serif text-lg font-bold text-light-textPrimary">Documents you'll need</h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {DOCUMENTS.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-light-textSecondary">
                    <Icon id="check" size={16} className="text-brand-orange mt-0.5 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <ol className="space-y-4">
              {ADMISSION_STEPS.map((s, i) => (
                <li
                  key={s.n}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-slate-100 card-glow"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-brand-orange text-white text-lg font-serif font-bold shrink-0">
                    {s.n}
                  </span>
                  <div>
                    <div className="font-serif text-lg font-bold text-light-textPrimary">{s.title}</div>
                    <p className="mt-1 text-sm text-light-textSecondary leading-relaxed">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a
              href={p.enquiryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange mt-7 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base"
            >
              Start Your Application
              <Icon id="external" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const DeanMessage: React.FC<{ p: ProgramDetail }> = ({ p }) => {
  const { ref, className } = useReveal('up');
  const inst = getInstitutionBySlug(p.institutionSlugs[0]);
  const dm = getDeanMessage(p.institutionSlugs[0]);
  if (!inst || !dm) return null;
  return (
    <section ref={ref} className={`py-16 md:py-20 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="bg-[#F7F3EE] rounded-3xl p-8 md:p-12 border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <span className="section-label mb-3">From the Principal's Desk</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-light-textPrimary leading-tight">
                A message from <span className="text-orange-gradient">{inst.shortName}</span>
              </h2>
              <span className="orange-divider mt-5" />
              <div className="mt-6 flex items-center gap-3">
                <span className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-brand-orange text-white text-xl font-serif font-bold">
                  {dm.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                </span>
                <div>
                  <div className="font-bold text-light-textPrimary">{dm.name}</div>
                  <div className="text-xs text-light-textSecondary mt-0.5">{dm.title}</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <Icon id="quote" size={36} className="text-brand-orange-light mb-3" />
              <p className="font-serif text-lg md:text-xl text-light-textPrimary leading-relaxed">
                {dm.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SCHOLARSHIP_POINTS = [
  { icon: 'award' as const, title: 'Merit Scholarships', text: 'Awards for toppers in board exams, semester results, and entrance performance.' },
  { icon: 'heart' as const, title: 'Need-based Support', text: 'Fee concessions and support for students from economically weaker sections.' },
  { icon: 'users' as const, title: 'Girl-Child & Category Scholarships', text: 'Dedicated scholarships for girls and reserved categories as per state government norms.' },
  { icon: 'book' as const, title: 'Education Loan Guidance', text: 'Step-by-step help with bank education loans and government scholarship portals.' },
];

const Scholarship: React.FC = () => {
  const { ref, className } = useReveal('up');
  return (
    <section ref={ref} className={`py-16 md:py-20 bg-[#F7F3EE] ${className}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div>
            <span className="section-label mb-3">Scholarships & Fees</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-light-textPrimary leading-tight">
              Affordable education, <span className="text-orange-gradient">real support</span>.
            </h2>
            <span className="orange-divider mt-5" />
            <p className="mt-6 text-light-textSecondary text-base md:text-lg leading-relaxed">
              MLD Memorial Sansthan is committed to keeping quality education within reach. We offer a range of scholarships, fee concessions, and education-loan support so that no deserving student is held back by finances.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-orange-dark transition"
            >
              Speak to our admissions team
              <Icon id="arrow-right" size={16} />
            </a>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SCHOLARSHIP_POINTS.map((p) => (
              <div key={p.title} className="card-glow bg-white rounded-2xl p-6 border border-slate-100">
                <span className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-brand-orange-light text-brand-orange mb-3">
                  <Icon id={p.icon} size={20} />
                </span>
                <h3 className="font-serif text-lg font-bold text-light-textPrimary">{p.title}</h3>
                <p className="mt-1.5 text-sm text-light-textSecondary leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CAMPUS_LIFE = [
  { icon: 'star' as const, label: 'Annual Events' },
  { icon: 'activity' as const, label: 'Sports & Games' },
  { icon: 'home' as const, label: 'Hostel Facility' },
  { icon: 'book' as const, label: 'Library' },
  { icon: 'users' as const, label: 'Student Clubs' },
  { icon: 'sparkles' as const, label: 'Cultural Fests' },
];

const CampusLife: React.FC = () => {
  const { ref, className } = useReveal('up');
  return (
    <section ref={ref} className={`py-14 md:py-16 bg-white border-y border-slate-100 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-label mb-3">Life at MLD</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-light-textPrimary leading-tight">
            More than a classroom.
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-4">
          {CAMPUS_LIFE.map((c) => (
            <div key={c.label} className="flex flex-col items-center text-center">
              <span className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-brand-orange-light text-brand-orange">
                <Icon id={c.icon} size={24} />
              </span>
              <span className="mt-3 text-sm font-semibold text-light-textPrimary">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials: React.FC<{ p: ProgramDetail }> = ({ p }) => {
  const { ref, className } = useReveal('up');
  const items = getTestimonialsForProgram(p);
  if (items.length === 0) return null;
  return (
    <section ref={ref} className={`py-16 md:py-20 bg-[#F7F3EE] ${className}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-label mb-3">Voices of Our Students</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-light-textPrimary leading-tight">
            Hear from our <span className="text-orange-gradient">alumni</span>.
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <div
              key={t.name}
              className="card-glow bg-white rounded-2xl p-6 border border-slate-100 flex flex-col"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Icon id="quote" size={28} className="text-brand-orange-light" />
              <p className="mt-3 text-light-textPrimary leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                <span className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-brand-orange text-white font-serif font-bold">
                  {t.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                </span>
                <div>
                  <div className="font-bold text-light-textPrimary text-sm">{t.name}</div>
                  <div className="text-xs text-light-textSecondary mt-0.5">
                    {t.program} · {t.batch}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PILLARS = [
  { icon: 'graduation' as const, title: 'Quality Education', text: 'Board & council-approved curriculum taught by experienced, dedicated faculty.' },
  { icon: 'users' as const, title: 'Personal Mentoring', text: 'Small batch sizes and one-on-one attention for every student.' },
  { icon: 'flask' as const, title: 'Modern Facilities', text: 'Well-equipped labs, smart classrooms, library, computer lab and sports.' },
  { icon: 'award' as const, title: 'Scholarship Support', text: 'Merit, need-based and category scholarships to make education accessible.' },
  { icon: 'shield' as const, title: 'Safe Campus', text: 'Disciplined, secure, CCTV-monitored campuses with separate hostels.' },
  { icon: 'trending-up' as const, title: 'Career Outcomes', text: 'Govt. exam coaching, practice teaching, placement assistance and alumni network.' },
  { icon: 'home' as const, title: 'Affordable Fees', text: 'A trusted Sansthan with a long-standing commitment to value-based education.' },
];

const WhyMLD: React.FC<{ p: ProgramDetail }> = ({ p }) => {
  const { ref, className } = useReveal('up');
  return (
    <section ref={ref} className={`py-16 md:py-20 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="section-label mb-3">Why MLD</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-light-textPrimary leading-tight">
            Why choose <span className="text-orange-gradient">MLD</span> for {p.name}?
          </h2>
          <span className="orange-divider mx-auto mt-5" />
          <p className="mt-5 text-light-textSecondary text-base md:text-lg leading-relaxed">
            Seven reasons MLD Memorial Sansthan is the right choice for {p.name}.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((pl, i) => (
            <div
              key={pl.title}
              className="card-glow bg-[#F7F3EE] rounded-2xl p-6 border border-transparent"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-brand-orange text-white mb-4">
                <Icon id={pl.icon} size={22} />
              </span>
              <h3 className="font-serif text-lg font-bold text-light-textPrimary">{pl.title}</h3>
              <p className="mt-1.5 text-sm text-light-textSecondary leading-relaxed">{pl.text}</p>
            </div>
          ))}
        </div>
        {p.whyMLD.length > 0 ? (
          <div className="mt-10 bg-[#F7F3EE] rounded-2xl p-6 md:p-8">
            <h3 className="font-serif text-lg font-bold text-light-textPrimary">Programme-specific advantages</h3>
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {p.whyMLD.map((reason, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-light-textPrimary">
                  <Icon id="check" size={16} className="text-brand-orange mt-0.5 shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
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
          Admissions Open · {new Date().getFullYear()}
          <span className="w-8 h-px bg-brand-orange" />
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
          Start your journey in <span className="text-orange-gradient">{p.name}</span> today.
        </h2>
        <p className="mt-5 text-white/80 text-base md:text-lg max-w-2xl mx-auto">
          Apply online, request a brochure, or speak to our admissions team for eligibility, fee structure, and the next batch start date.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap">
          <a
            href={p.enquiryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base"
          >
            Apply Now
            <Icon id="external" size={16} />
          </a>
          <a
            href="/contact?brochure=1"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white border-2 border-white/40 hover:bg-white hover:text-slate-900 transition-colors"
          >
            <Icon id="book" size={16} />
            Download Brochure
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white border-2 border-white/40 hover:bg-white hover:text-slate-900 transition-colors"
          >
            <Icon id="phone" size={16} />
            Talk to Counsellor
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
      <DeanMessage p={p} />
      <Overview p={p} />
      <Careers p={p} />
      <AdmissionProcess p={p} />
      <Highlights p={p} />
      <WhatYouLearn p={p} />
      <WhyMLD p={p} />
      <Scholarship />
      <Facilities p={p} />
      <CampusLife />
      <Testimonials p={p} />
      <OfferedAt p={p} />
      <AdmissionCta p={p} />
    </>
  );
};
