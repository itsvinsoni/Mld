import React from 'react';
import { MessagesSection } from './sections/MessagesSection';
import { ContactCta } from './shared/ContactCta';
import { HERO_IMAGES } from './data';
import { useT } from './i18n';
import { PageHero } from './sections/PageHero';

export const MessagesPage: React.FC = () => {
  const t = useT();
  return (
    <>
      <PageHero
        label={t('msgPage.label', 'Messages from Leadership')}
        title={<>{t('msgPage.titlePre', 'Voices of ')}<span className="text-orange-gradient">{t('msgPage.titleHi', 'Leadership')}</span></>}
        subtitle={t('msgPage.sub', 'Guidance and vision from the leaders who shape MLD Memorial Sansthan.')}
        image={HERO_IMAGES[6]}

        breadcrumb={[{ label: t('bc.home', 'Home'), href: '/' }, { label: t('bc.messages', 'Messages'), href: '/messages' }]}
      />

      <MessagesSection />
      <ContactCta />
    </>
  );
};
