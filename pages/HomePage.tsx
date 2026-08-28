import React from 'react';
import './public.css';
import { HeroSection, StatsStrip } from './sections/HeroSection';
import { InstitutionCard } from './sections/InstitutionsSection';
import { SectionHeading } from './SectionHeading';
import { Icon } from './icons';
import { useReveal } from './hooks';
import { ABOUT_IMAGE } from './data';
import { useAbout, useGallery, useInstitutions, useMessages } from './dataI18n';
import { useT } from './i18n';
import { Magnetic } from './effects';
import { SEO, buildFaqLd, buildItemListLd, buildBreadcrumbLd, SEO_SITE } from './SEO';
import { FAQList } from './FAQ';
import { LazyMount } from './Skeletons';

const InstitutionsPreview: React.FC = () => {
  const t = useT();
  const institutions = useInstitutions();
  return (
    <section className="relative py-20 md:py-28 bg-[#F7F3EE] overflow-hidden">
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none float-slow gpu" />
      <div className="absolute inset-0 bg-dots-warm opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl pointer-events-none float-lg gpu" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label={t('insts.label', 'Our Institutions')}
          heading={t('insts.heading', 'Institutions Run by the Sansthan')}
          subtext={t('insts.subtext', 'From schools to colleges and vocational institutes, discover the diverse family of institutions under the MLD Memorial Sansthan.')}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {institutions.slice(0, 6).map((inst, i) => (
            <InstitutionCard key={inst.id} inst={inst} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Magnetic strength={0.2} as="a" href="/institutions" className="btn-orange inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base">
            {t('insts.viewAll', 'View All Institutions')}
            <Icon id="arrow-right" size={18} />
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

const AboutPreview: React.FC = () => {
  const { ref, className } = useReveal('left');
  const ABOUT = useAbout();
  const t = useT();
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0" />
      <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none float-slow gpu" />
      <div className="absolute inset-0 bg-dots-warm opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl pointer-events-none float-lg gpu" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={ref} className={`relative ${className}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100 group">
              <img
                src={ABOUT_IMAGE}
                alt="Students at MLD Memorial Sansthan"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl border-2 border-brand-orange/40 -z-0" />
            </div>
            <div className="absolute -bottom-6 -right-3 float-slow z-10">
              <div className="bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white rounded-3xl px-6 py-5 shadow-2xl text-center pulse-glow">
                <div className="text-4xl font-serif font-bold">{ABOUT.badgeValue}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-widest">{ABOUT.badgeLabel}</div>
              </div>
            </div>
          </div>

          <div>
            <span className="section-label mb-3">{t('about.label', 'Why Choose Us')}</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-light-textPrimary leading-tight">
              {ABOUT.heading}
            </h2>
            <span className="orange-divider mt-5" />
            <p className="mt-6 text-light-textSecondary text-base md:text-lg leading-relaxed">
              {ABOUT.paragraph}
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ABOUT.features.map((f, i) => (
                <div
                  key={f.label}
                  className="group flex items-center gap-3 bg-[#F7F3EE] rounded-xl px-4 py-3 hover:bg-brand-orange-light hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-orange/10 transition-all duration-500"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white text-brand-orange shadow-sm group-hover:bg-brand-orange group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon id={f.icon} size={18} />
                  </span>
                  <span className="font-medium text-sm text-light-textPrimary group-hover:text-brand-orange-dark transition-colors">{f.label}</span>
                </div>
              ))}
            </div>
            <a
              href="/about"
              className="mt-8 group inline-flex items-center gap-2 font-semibold text-brand-orange hover:text-brand-orange-dark transition-all duration-300 hover:gap-3"
            >
              {t('about.learnMore', 'Learn More About Us')}
              <Icon id="arrow-right" size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const GalleryPreview: React.FC = () => {
  const t = useT();
  const gallery = useGallery();
  return (
    <section className="relative py-20 md:py-28 bg-[#F7F3EE] overflow-hidden">
      <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none float-slow gpu" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl pointer-events-none float-lg gpu" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="section-label mb-3">{t('gallery.label', 'Photo Gallery')}</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-light-textPrimary leading-tight">
              {t('gallery.heading', 'Life at MLD Memorial Sansthan')}
            </h2>
          </div>
          <a
            href="/gallery"
            className="group inline-flex items-center gap-2 font-semibold text-brand-orange hover:text-brand-orange-dark transition-all duration-300 hover:gap-3 shrink-0"
          >
            {t('gallery.viewAll', 'View Full Gallery')}
            <Icon id="arrow-right" size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {gallery.slice(0, 4).map((img, i) => (
            <a
              key={img.id}
              href="/gallery"
              className={`group relative rounded-2xl overflow-hidden card-glow shine bg-slate-100 ${i === 0 ? 'row-span-2' : ''}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span className="text-white/95 text-sm font-medium text-left leading-tight">
                  {img.caption}
                </span>
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brand-orange text-white shrink-0 shadow-lg shadow-brand-orange/40 group-hover:rotate-45 transition-transform">
                  <Icon id="plus" size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const MessagesPreview: React.FC = () => {
  const t = useT();
  const messages = useMessages();
  const first = messages[0];
  return (
    <section className="relative py-20 md:py-28 bg-slate-900 text-white overflow-hidden">
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-brand-orange/15 blur-3xl float-slow gpu" />
      <div className="absolute inset-0 bg-dots-dark opacity-30 pointer-events-none" />
      <div className="absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading label={t('msg.label', 'Messages from Leadership')} heading={t('msg.heading', 'Voices of Leadership')} light />
        <div className="max-w-4xl mx-auto relative bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-12 text-center overflow-hidden group hover:border-brand-orange/40 transition-colors duration-500">
          <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white shadow-xl mx-auto mb-4 pulse-glow">
            <Icon id="quote" size={26} />
          </span>
          <div className="text-brand-orange text-xs font-bold uppercase tracking-widest">{first.headline}</div>
          <blockquote className="mt-5 font-serif text-xl md:text-2xl leading-relaxed text-white/95 italic">
            &ldquo;{first.message}&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white font-serif font-bold text-lg shadow-lg shadow-brand-orange/30">
              {first.name.charAt(0)}
            </span>
            <div className="text-left">
              <div className="font-bold text-white">{first.name}</div>
              <div className="text-sm text-slate-400">{first.title}</div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <a
            href="/messages"
            className="group inline-flex items-center gap-2 font-semibold text-white/80 hover:text-brand-orange transition-all duration-300 hover:gap-3"
          >
            {t('msg.viewAll', 'Read All Messages')}
            <Icon id="arrow-right" size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

const ContactCta: React.FC = () => {
  const t = useT();
  return (
    <section className="py-20 md:py-24 bg-[#F7F3EE]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white p-8 md:p-14 shadow-2xl shadow-brand-orange/20">
          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/10 blur-2xl float-slow" />
          <div className="absolute right-20 bottom-0 h-28 w-28 rounded-full bg-white/10 blur-xl float-lg" />
          <div className="absolute -left-20 top-1/2 h-40 w-40 rounded-full bg-amber-300/15 blur-3xl float-slow gpu" />
          <div className="absolute right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl float-lg" />
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-white/95 text-xs font-bold uppercase tracking-widest">
                <Icon id="sparkles" size={16} /> {t('contactCta.eyebrow', 'Admission & Careers')}
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold leading-tight">
                {t('contactCta.heading2', 'Begin your journey with MLD Memorial Sansthan')}
              </h2>
              <p className="mt-3 text-white/90 max-w-md">
                {t('contactCta.subtext', 'Have a question about admissions, courses, or careers? Our team is here to help.')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-brand-orange font-bold hover:bg-brand-orange-light hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('contactCta.button', 'Contact Us')}
                <Icon id="arrow-right" size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/institutions"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 border border-white/30 text-white font-bold hover:bg-white/25 hover:scale-105 transition-all duration-300"
              >
                {t('insts.viewAll', 'Explore Institutions')}
                <Icon id="external" size={18} className="transition-transform group-hover:rotate-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Home FAQ (for SEO + AI search) ---------- */
const homeFaqs = [
  { q: 'Where is MLD Memorial Sansthan located?', a: 'MLD Memorial Sansthan is located in Kekri, Ajmer district, Rajasthan, India (PIN 305404). It runs 7+ educational institutions in and around Kekri serving students from across the district.' },
  { q: 'Is MLD Memorial Sansthan a university?', a: 'No. MLD Memorial Sansthan is an educational society (sansthan), not a university. The colleges run under the Sansthan are affiliated to recognised universities; D.Pharma is approved by PCI, B.Ed by NCTE, and schools are affiliated to RBSE / CBSE.' },
  { q: 'What courses does MLD offer?', a: 'MLD offers D.Pharma (Diploma in Pharmacy), B.Ed (Bachelor of Education), D.El.Ed, Shiksha Shastri, BA, BSc, BCom, BBA, BCA, Live Stock Assistant Diploma, and schooling from Nursery to Senior Secondary in Science, Commerce and Arts streams.' },
  { q: 'Is D.Pharma at MLD approved?', a: 'Yes. The D.Pharma programme at MLD Pharmacy College is approved by the Pharmacy Council of India (PCI). Graduates are eligible to register with the State Pharmacy Council and work as Registered Pharmacists in retail, hospital, and community pharmacy.' },
  { q: 'Is B.Ed at MLD approved?', a: 'Yes. The B.Ed programme at MLD Mahila Shikshan Prashikshan Mahavidyalay is approved by the National Council for Teacher Education (NCTE). Graduates are eligible to appear for REET, CTET, and other teaching eligibility tests.' },
  { q: 'How to apply for admission at MLD?', a: 'The admission process is: (1) Check eligibility, (2) Apply online via the enquiry form or in person at the campus, (3) Submit documents for verification, (4) Attend counselling / merit list process, (5) Pay fees and complete enrolment.' },
  { q: 'Does MLD provide hostel and transport?', a: 'Yes. MLD provides separate hostels for boys and girls with warden, mess, and CCTV security. Transport facility is available from nearby towns. The campus has Wi-Fi, smart classrooms, modern labs, library, and sports facilities.' },
  { q: 'Are scholarships available at MLD?', a: 'Yes. MLD offers Merit Scholarships (80%+ in qualifying exam), Need-Based Aid, Girl-Child Scholarships, and Education Loan Guidance from nationalised banks. Contact the admissions office for current schemes.' },
];

export const HomePage: React.FC = () => {
  const institutions = useInstitutions();
  const seoJsonLd = [
    buildFaqLd(homeFaqs),
    buildItemListLd(institutions.map((i) => ({
      name: i.name,
      url: `${SEO_SITE.SITE_URL}/institutions/${i.slug}`,
      image: i.image,
      description: i.description,
    }))),
  ];

  return (
    <>
      <SEO
        config={{
          title: SEO_SITE.DEFAULT_TITLE,
          description: SEO_SITE.DEFAULT_DESC,
          path: '/',
          keywords: [
            'MLD Memorial Sansthan', 'MLD Kekri', 'D.Pharma college Kekri', 'B.Ed college Kekri',
            'schools in Kekri', 'best college Ajmer', 'BBA BCA college Rajasthan',
            'livestock diploma Rajasthan', 'pharmacy college Rajasthan', 'education society Kekri',
            'admission 2025', 'PCI approved D.Pharma', 'NCTE approved B.Ed',
          ],
          type: 'website',
          jsonLd: seoJsonLd,
        }}
      />
      <HeroSection />
      <StatsStrip />
      <InstitutionsPreview />
      <LazyMount minHeight={600}><AboutPreview /></LazyMount>
      <LazyMount minHeight={500}><GalleryPreview /></LazyMount>
      <LazyMount minHeight={500}><MessagesPreview /></LazyMount>
      <LazyMount minHeight={400}><ContactCta /></LazyMount>
      <FAQList
        faqs={homeFaqs}
        heading="Frequently Asked Questions"
        sub="Everything you need to know about admissions, courses, and life at MLD Memorial Sansthan."
      />
    </>
  );
};
