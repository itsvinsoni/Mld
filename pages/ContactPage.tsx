import React from 'react';
import { ContactSection } from './sections/ContactSection';
import { HERO_IMAGES } from './data';
import { useT } from './i18n';
import { PageHero } from './sections/PageHero';

export const ContactPage: React.FC = () => {
  const t = useT();
  return (
    <>
      <PageHero
        label={t('contactPage.label', 'Contact Us')}
        title={<>{t('contactPage.titlePre', 'Get in ')}<span className="text-orange-gradient">{t('contactPage.titleHi', 'Touch')}</span></>}
        subtitle={t('contactPage.sub', "Have a question about admissions, courses, or careers? We'd love to hear from you.")}
        image={HERO_IMAGES[1]}
      />

      <ContactSection />
    </>
  );
};
