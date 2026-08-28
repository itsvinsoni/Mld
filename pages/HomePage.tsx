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

const InstitutionsPreview: React.FC = () => {
  const t = useT();
  const institutions = useInstitutions();
  return (
    <section className="py-20 md:py-28 bg-[#F7F3EE]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
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
          <a
            href="/institutions"
            className="btn-orange inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base"
          >
            {t('insts.viewAll', 'View All Institutions')}
            <Icon id="arrow-right" size={18} />
          </a>
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
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={ref} className={`relative ${className}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
              <img
                src={ABOUT_IMAGE}
                alt="Students at MLD Memorial Sansthan"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-3 float-slow">
              <div className="bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white rounded-3xl px-6 py-5 shadow-2xl text-center">
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
              {ABOUT.features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 bg-[#F7F3EE] rounded-xl px-4 py-3 hover:bg-brand-orange-light hover:-translate-y-0.5 transition-all"
                >
                  <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white text-brand-orange shadow-sm">
                    <Icon id={f.icon} size={18} />
                  </span>
                  <span className="font-medium text-sm text-light-textPrimary">{f.label}</span>
                </div>
              ))}
            </div>
            <a
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-orange hover:text-brand-orange-dark transition"
            >
              {t('about.learnMore', 'Learn More About Us')}
              <Icon id="arrow-right" size={16} />
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
    <section className="py-20 md:py-28 bg-[#F7F3EE]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="section-label mb-3">{t('gallery.label', 'Photo Gallery')}</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-light-textPrimary leading-tight">
              {t('gallery.heading', 'Life at MLD Memorial Sansthan')}
            </h2>
          </div>
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 font-semibold text-brand-orange hover:text-brand-orange-dark transition shrink-0"
          >
            {t('gallery.viewAll', 'View Full Gallery')}
            <Icon id="arrow-right" size={16} />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.slice(0, 4).map((img, i) => (
            <a
              key={img.id}
              href="/gallery"
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] card-glow bg-slate-100"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-3 left-3 text-white/95 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                {img.caption}
              </span>
              <span className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon id="plus" size={16} />
              </span>
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
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-brand-orange/15 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative">
        <SectionHeading label={t('msg.label', 'Messages from Leadership')} heading={t('msg.heading', 'Voices of Leadership')} light />
        <div className="max-w-4xl mx-auto bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-12 text-center">
          <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white shadow-xl mx-auto mb-4">
            <Icon id="quote" size={26} />
          </span>
          <div className="text-brand-orange text-xs font-bold uppercase tracking-widest">{first.headline}</div>
          <blockquote className="mt-5 font-serif text-xl md:text-2xl leading-relaxed text-white/95 italic">
            &ldquo;{first.message}&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-brand-orange-light text-brand-orange-dark font-serif font-bold text-lg">
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
            className="inline-flex items-center gap-2 font-semibold text-white/80 hover:text-brand-orange transition"
          >
            {t('msg.viewAll', 'Read All Messages')}
            <Icon id="arrow-right" size={16} />
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
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white p-8 md:p-14">
          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-white/90 text-xs font-bold uppercase tracking-widest">
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-brand-orange font-bold hover:bg-brand-orange-light transition-colors"
              >
                {t('contactCta.button', 'Contact Us')}
                <Icon id="arrow-right" size={18} />
              </a>
              <a
                href="/institutions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 border border-white/30 text-white font-bold hover:bg-white/25 transition-colors"
              >
                {t('insts.viewAll', 'Explore Institutions')}
                <Icon id="external" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <InstitutionsPreview />
      <AboutPreview />
      <GalleryPreview />
      <MessagesPreview />
      <ContactCta />
    </>
  );
};
