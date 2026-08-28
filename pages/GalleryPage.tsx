import React from 'react';
import { GallerySection } from './sections/GallerySection';
import { ContactCta } from './shared/ContactCta';
import { HERO_IMAGES } from './data';
import { useT } from './i18n';
import { PageHero } from './sections/PageHero';

export const GalleryPage: React.FC = () => {
  const t = useT();
  return (
    <>
      <PageHero
        label={t('galleryPage.label', 'Photo Gallery')}
        title={<>{t('galleryPage.titlePre', 'Life at ')}<span className="text-orange-gradient">{t('galleryPage.titleHi', 'MLD Memorial Sansthan')}</span></>}
        subtitle={t('galleryPage.sub', 'Explore moments from our campuses, classrooms, laboratories, sports, and celebrations.')}
        image={HERO_IMAGES[4]}

        breadcrumb={[{ label: t('bc.home', 'Home'), href: '/' }, { label: t('bc.gallery', 'Gallery'), href: '/gallery' }]}
      />

      <GallerySection />
      <ContactCta />
    </>
  );
};
