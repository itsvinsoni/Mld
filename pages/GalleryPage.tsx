import React from 'react';
import { GallerySection } from './sections/GallerySection';
import { ContactCta } from './shared/ContactCta';
import { HERO_IMAGES } from './data';
import { PageHero } from './sections/PageHero';

export const GalleryPage: React.FC = () => {
  return (
    <>
      <PageHero
        label="Photo Gallery"
        title={<>Life at <span className="text-orange-gradient">MLD Memorial Sansthan</span></>}
        subtitle="Explore moments from our campuses, classrooms, laboratories, sports, and celebrations."
        image={HERO_IMAGES[4]}
      />

      <GallerySection />
      <ContactCta />
    </>
  );
};
