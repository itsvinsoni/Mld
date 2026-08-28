import React from 'react';
import { InstitutionsSection } from './sections/InstitutionsSection';
import { StatsStrip } from './sections/HeroSection';
import { ContactCta } from './shared/ContactCta';
import { HERO_IMAGES } from './data';
import { useT } from './i18n';
import { PageHero } from './sections/PageHero';

export const InstitutionsPage: React.FC = () => {
  const t = useT();
  return (
    <>
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
