import React from 'react';
import { MessagesSection } from './sections/MessagesSection';
import { ContactCta } from './shared/ContactCta';
import { HERO_IMAGES } from './data';
import { PageHero } from './sections/PageHero';

export const MessagesPage: React.FC = () => {
  return (
    <>
      <PageHero
        label="Messages from Leadership"
        title={<>Voices of <span className="text-orange-gradient">Leadership</span></>}
        subtitle="Guidance and vision from the leaders who shape MLD Memorial Sansthan."
        image={HERO_IMAGES[6]}
      />

      <MessagesSection />
      <ContactCta />
    </>
  );
};
