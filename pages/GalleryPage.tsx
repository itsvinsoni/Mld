import React from 'react';
import { GallerySection } from './sections/GallerySection';
import { ContactCta } from './shared/ContactCta';
import { HERO_IMAGES } from './data';
import { useGallery } from './dataI18n';
import { useT } from './i18n';
import { PageHero } from './sections/PageHero';
import { SEO, buildImageGalleryLd, buildBreadcrumbLd, SEO_SITE } from './SEO';

export const GalleryPage: React.FC = () => {
  const t = useT();
  const gallery = useGallery();
  return (
    <>
      <SEO
        config={{
          title: 'Photo Gallery | Campus Life at MLD Memorial Sansthan, Kekri',
          description: 'Explore moments from MLD Memorial Sansthan campuses in Kekri, Ajmer — classrooms, laboratories, sports, cultural events, and student life.',
          path: '/gallery',
          keywords: ['MLD gallery', 'campus photos Kekri', 'school events', 'college life Rajasthan'],
          type: 'website',
          jsonLd: [
            buildImageGalleryLd(gallery.map((g) => ({ src: g.src, caption: g.caption }))),
            buildBreadcrumbLd([{ name: 'Home', href: '/' }, { name: 'Gallery', href: '/gallery' }]),
          ],
        }}
      />
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
