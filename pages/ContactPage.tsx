import React from 'react';
import { ContactSection } from './sections/ContactSection';
import { HERO_IMAGES } from './data';
import { useT } from './i18n';
import { PageHero } from './sections/PageHero';
import { SEO, buildContactPageLd, buildBreadcrumbLd } from './SEO';

export const ContactPage: React.FC = () => {
  const t = useT();
  return (
    <>
      <SEO
        config={{
          title: 'Contact MLD Memorial Sansthan | Admissions, Enquiry, Address, Phone',
          description: 'Contact MLD Memorial Sansthan, Kekri, Ajmer, Rajasthan for admissions, course enquiries, careers, and general questions. Phone, email, address, and office hours.',
          path: '/contact',
          keywords: ['MLD contact', 'MLD phone number', 'Kekri education address', 'admission enquiry MLD'],
          type: 'website',
          jsonLd: [
            buildContactPageLd(),
            buildBreadcrumbLd([{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]),
          ],
        }}
      />
      <PageHero
        label={t('contactPage.label', 'Contact Us')}
        title={<>{t('contactPage.titlePre', 'Get in ')}<span className="text-orange-gradient">{t('contactPage.titleHi', 'Touch')}</span></>}
        subtitle={t('contactPage.sub', "Have a question about admissions, courses, or careers? We'd love to hear from you.")}
        image={HERO_IMAGES[1]}

        breadcrumb={[{ label: t('bc.home', 'Home'), href: '/' }, { label: t('bc.contact', 'Contact'), href: '/contact' }]}
      />

      <ContactSection />
    </>
  );
};
