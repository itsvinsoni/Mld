import React from 'react';
import { MessagesSection } from './sections/MessagesSection';
import { ContactCta } from './shared/ContactCta';
import { HERO_IMAGES } from './data';
import { useMessages } from './dataI18n';
import { useT } from './i18n';
import { PageHero } from './sections/PageHero';
import { SEO, buildPersonLd, buildBreadcrumbLd, SEO_SITE } from './SEO';

export const MessagesPage: React.FC = () => {
  const t = useT();
  const messages = useMessages();
  return (
    <>
      <SEO
        config={{
          title: 'Messages from Leadership | MLD Memorial Sansthan, Kekri',
          description: 'Read the vision and guidance from the Chairman, Director, and Principals of MLD Memorial Sansthan — leaders shaping education in Kekri, Ajmer, Rajasthan.',
          path: '/messages',
          keywords: ['MLD leadership', 'Chairman MLD', 'Director message', 'Principal message Kekri'],
          type: 'website',
          jsonLd: [
            ...messages.map((m) => buildPersonLd({ name: m.name, title: m.title })),
            buildBreadcrumbLd([{ name: 'Home', href: '/' }, { name: 'Messages', href: '/messages' }]),
          ],
        }}
      />
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
