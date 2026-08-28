import React from 'react';
import { AboutSection } from './sections/AboutSection';
import { StatsStrip } from './sections/HeroSection';
import { ContactCta } from './shared/ContactCta';
import { Icon } from './icons';
import { ABOUT_IMAGE } from './data';
import { useAbout } from './dataI18n';
import { useT } from './i18n';
import { PageHero } from './sections/PageHero';
import { SEO, buildBreadcrumbLd, SEO_SITE } from './SEO';
import { FAQList } from './FAQ';

const aboutFaqs = [
  { q: 'When was MLD Memorial Sansthan founded?', a: 'MLD Memorial Sansthan was founded in 1998 by Shri Mishri Lal Dubey with the mission of providing accessible, quality education to students of Kekri and surrounding areas in Rajasthan.' },
  { q: 'What is the vision of MLD Memorial Sansthan?', a: 'Our vision is to be a leading educational society in Rajasthan, nurturing every student to discover their potential and contribute meaningfully to society. We focus on academic excellence combined with character building and values.' },
  { q: 'How many students study at MLD?', a: 'MLD Memorial Sansthan has over 5,000 students across its 7+ institutions, ranging from Nursery to Senior Secondary, undergraduate, professional (D.Pharma, B.Ed), and vocational (Livestock Assistant Diploma) programmes.' },
  { q: 'What makes MLD different from other institutions?', a: 'MLD stands out for its commitment to value-based education, experienced and dedicated faculty, modern facilities, affordable fees, scholarship support, safe and disciplined campuses, and a focus on the holistic development of every student.' },
];

export const AboutPage: React.FC = () => {
  const ABOUT = useAbout();
  const t = useT();
  return (
    <>
      <SEO
        config={{
          title: 'About MLD Memorial Sansthan | Mission, Vision & Leadership — Kekri, Ajmer',
          description: 'MLD Memorial Sansthan, founded in 1998 in Kekri (Ajmer, Rajasthan), runs 7+ institutions with a vision of accessible, value-based education. Mission: empower students to excel academically and grow into responsible citizens.',
          path: '/about',
          keywords: ['about MLD', 'MLD history', 'MLD mission vision', 'educational society Rajasthan', 'Kekri education trust'],
          type: 'website',
          jsonLd: [buildBreadcrumbLd([{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }])],
        }}
      />
      <PageHero
        label={t('aboutPage.label', 'About Us')}
        title={<>{t('aboutPage.headingPre', 'A Legacy of ')}<span className="text-orange-gradient">{t('aboutPage.headingHi', 'Quality Education')}</span></>}
        subtitle={ABOUT.paragraph}
        image={ABOUT_IMAGE}

        breadcrumb={[{ label: t('bc.home', 'Home'), href: '/' }, { label: t('bc.about', 'About'), href: '/about' }]}
      />

      <AboutSection />
      <StatsStrip />

      {/* Mission / Vision */}
      <section className="py-20 md:py-28 bg-[#F7F3EE]">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: 'award' as const,
                title: t('aboutPage.mission', 'Our Mission'),
                text: t('aboutPage.missionText', 'To provide accessible, quality education that empowers students to excel academically and grow into responsible citizens of tomorrow.'),
              },
              {
                icon: 'landmark' as const,
                title: t('aboutPage.vision', 'Our Vision'),
                text: t('aboutPage.visionText', 'To be a leading educational society in Rajasthan, nurturing every student to discover their potential and contribute meaningfully to society.'),
              },
            ].map((item, i) => (
              <div key={item.title} className="bg-white rounded-2xl border border-slate-100 p-8 card-glow group shine" style={{ animationDelay: `${i * 100}ms` }}>
                <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-brand-orange-light text-brand-orange mb-4 group-hover:bg-brand-orange group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Icon id={item.icon} size={24} />
                </span>
                <h3 className="font-serif text-xl font-bold text-light-textPrimary group-hover:text-brand-orange transition-colors">{item.title}</h3>
                <p className="mt-3 text-light-textSecondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
      <FAQList faqs={aboutFaqs} />
    </>
  );
};
