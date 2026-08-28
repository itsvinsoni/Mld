import React from 'react';
import { InstitutionsSection } from './sections/InstitutionsSection';
import { StatsStrip } from './sections/HeroSection';
import { ContactCta } from './shared/ContactCta';
import { HERO_IMAGES } from './data';
import { useInstitutions } from './dataI18n';
import { useT } from './i18n';
import { PageHero } from './sections/PageHero';
import { SEO, buildItemListLd, buildBreadcrumbLd, SEO_SITE } from './SEO';

export const InstitutionsPage: React.FC = () => {
  const t = useT();
  const institutions = useInstitutions();
  const jsonLd = [
    buildBreadcrumbLd([{ name: 'Home', href: '/' }, { name: 'Institutions', href: '/institutions' }]),
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
          title: 'Our Institutions | Schools, Colleges & Diploma Institutes — MLD Memorial Sansthan',
          description: 'Browse all 7+ institutions run by MLD Memorial Sansthan in Kekri, Ajmer, Rajasthan — schools (Nursery to Senior Secondary), colleges (BA, BSc, BCom, BBA, BCA), D.Pharma, B.Ed, and Livestock Assistant Diploma.',
          path: '/institutions',
          keywords: ['MLD institutions', 'schools in Kekri', 'colleges in Ajmer', 'list of institutions Kekri'],
          type: 'website',
          jsonLd,
        }}
      />
      <PageHero
        label={t('instsPage.label', 'Our Institutions')}
        title={<>{t('instsPage.titlePre', 'Discover Our ')}<span className="text-orange-gradient">{t('instsPage.titleHi', 'Institutions')}</span></>}
        subtitle={t('instsPage.sub', 'From schools to colleges and vocational institutes, explore every institution under the MLD Memorial Sansthan family.')}
        image={HERO_IMAGES[2]}

        breadcrumb={[{ label: t('bc.home', 'Home'), href: '/' }, { label: t('bc.institutions', 'Institutions'), href: '/institutions' }]}
      />

      <InstitutionsSection />
      <StatsStrip />
      <ContactCta />
    </>
  );
};
