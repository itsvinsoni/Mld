import React from 'react';
import { InstitutionsSection } from './sections/InstitutionsSection';
import { StatsStrip } from './sections/HeroSection';
import { ContactCta } from './shared/ContactCta';
import { HERO_IMAGES } from './data';
import { PageHero } from './sections/PageHero';

export const InstitutionsPage: React.FC = () => {
  return (
    <>
      <PageHero
        label="Our Institutions"
        title={<>Discover Our <span className="text-orange-gradient">Institutions</span></>}
        subtitle="From schools to colleges and vocational institutes, explore every institution under the MLD Memorial Sansthan family."
        image={HERO_IMAGES[2]}
      />

      <InstitutionsSection />
      <StatsStrip />
      <ContactCta />
    </>
  );
};
