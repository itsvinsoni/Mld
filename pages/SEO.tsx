import React, { useEffect } from 'react';
import { useRoute, getSegments } from './router';

const SITE_URL = 'https://mldmemorialsansthan.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
const SITE_NAME = 'MLD Memorial Sansthan';
const DEFAULT_TITLE = 'MLD Memorial Sansthan | Schools, Colleges & Diploma Institutes in Kekri, Ajmer, Rajasthan';
const DEFAULT_DESC = 'Educational society running 7+ institutions in Kekri, Ajmer, Rajasthan — D.Pharma, B.Ed, schools, BA/BSc/BCom, BBA, BCA, Livestock Diploma. Approved by PCI, NCTE, RBSE, CBSE. Admissions open 2025–26.';

export type SeoConfig = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article' | 'profile' | 'course';
  noindex?: boolean;
  jsonLd?: object | object[];
  alternateHreflang?: { lang: string; href: string }[];
};

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  // For canonical, prefer matching rel+hreflang; otherwise first canonical
  if (rel === 'canonical' || rel === 'alternate') {
    el = document.querySelector(`link[rel="${rel}"]${rel === 'alternate' ? '' : ''}`) as HTMLLinkElement | null;
  }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function removeExtraCanonicals() {
  document.querySelectorAll('link[rel="canonical"]').forEach((el, i) => {
    if (i > 0) el.remove();
  });
}

function injectJsonLd(id: string, data: object | object[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.text = JSON.stringify(data);
}

function removeJsonLd(id: string) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

export const SEO: React.FC<{ config: SeoConfig }> = ({ config }) => {
  const route = useRoute();
  useEffect(() => {
    const fullTitle = config.title.includes(SITE_NAME) ? config.title : `${config.title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${config.path.startsWith('/') ? config.path : '/' + config.path}`;
    const image = config.image || DEFAULT_OG_IMAGE;

    // Document title
    document.title = fullTitle;

    // Basic meta
    setMeta('description', config.description);
    if (config.keywords && config.keywords.length) {
      setMeta('keywords', config.keywords.join(', '));
    }
    setMeta('robots', config.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1');

    // Canonical
    setLink('canonical', url);
    removeExtraCanonicals();

    // hreflang
    setLink('alternate', url);
    const alts = config.alternateHreflang || [
      { lang: 'en-IN', href: url },
      { lang: 'hi-IN', href: url + (url.includes('?') ? '&' : '?') + 'lang=hi' },
      { lang: 'x-default', href: url },
    ];
    alts.forEach((a) => {
      let el = document.querySelector(`link[rel="alternate"][hreflang="${a.lang}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'alternate');
        el.setAttribute('hreflang', a.lang);
        document.head.appendChild(el);
      }
      el.setAttribute('href', a.href);
    });

    // Open Graph
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', config.description, 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:type', config.type || 'website', 'property');
    setMeta('og:image', image, 'property');
    setMeta('og:site_name', SITE_NAME, 'property');
    setMeta('og:locale', 'en_IN', 'property');

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', config.description);
    setMeta('twitter:image', image);

    // JSON-LD
    if (config.jsonLd) {
      const data = Array.isArray(config.jsonLd) ? config.jsonLd : [config.jsonLd];
      data.forEach((d, i) => injectJsonLd(`seo-jsonld-${i}`, d));
      // remove extras from previous route
      for (let i = data.length; ; i++) {
        const el = document.getElementById(`seo-jsonld-${i}`);
        if (!el) break;
        el.remove();
      }
    } else {
      for (let i = 0; ; i++) {
        const el = document.getElementById(`seo-jsonld-${i}`);
        if (!el) break;
        el.remove();
      }
    }
  }, [config.title, config.description, config.path, JSON.stringify(config.keywords || []), config.image, config.type, config.noindex, JSON.stringify(config.jsonLd || null), route]);

  return null;
};

/* ---------- Reusable JSON-LD builders ---------- */
export const buildBreadcrumbLd = (items: { name: string; href: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: `${SITE_URL}${it.href.startsWith('/') ? it.href : '/' + it.href}`,
  })),
});

export const buildCourseLd = (p: {
  name: string;
  slug: string;
  description: string;
  provider: string;
  duration: string;
  level: string;
  mode: string;
  medium: string;
  eligibility?: string;
  career?: string[];
  image?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: p.name,
  description: p.description,
  url: `${SITE_URL}/courses/${p.slug}`,
  image: p.image,
  provider: {
    '@type': 'EducationalOrganization',
    name: p.provider,
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kekri',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
  },
  educationalCredentialAwarded: p.name,
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: p.mode,
    courseWorkload: p.duration,
    inLanguage: p.medium,
  },
  offers: {
    '@type': 'Offer',
    category: 'Tuition',
    availability: 'https://schema.org/InStock',
  },
});

export const buildEducationalOrgLd = (inst: {
  name: string;
  slug: string;
  description: string;
  image: string;
  typeLabel: string;
  programs?: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': `${SITE_URL}/institutions/${inst.slug}#org`,
  name: inst.name,
  description: inst.description,
  url: `${SITE_URL}/institutions/${inst.slug}`,
  image: inst.image,
  parentOrganization: {
    '@type': 'EducationalOrganization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kekri',
    addressRegion: 'Rajasthan',
    addressCountry: 'IN',
  },
  knowsAbout: inst.programs || [],
});

export const buildPersonLd = (p: { name: string; title: string; quote?: string; image?: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: p.name,
  jobTitle: p.title,
  affiliation: { '@type': 'Organization', name: SITE_NAME },
  worksFor: { '@type': 'Organization', name: SITE_NAME },
});

export const buildFaqLd = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const buildItemListLd = (items: { name: string; url: string; image?: string; description?: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'EducationalOrganization',
      name: it.name,
      url: it.url,
      image: it.image,
      description: it.description,
    },
  })),
});

export const buildContactPageLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: `${SITE_URL}/contact`,
  about: { '@id': `${SITE_URL}/#organization` },
  mainEntity: {
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kekri',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    telephone: '+91-9876543210',
    email: 'info@mldmemorialsansthan.com',
  },
});

export const buildImageGalleryLd = (images: { src: string; caption?: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: `${SITE_NAME} — Photo Gallery`,
  url: `${SITE_URL}/gallery`,
  image: images.map((img) => img.src),
});

export const SEO_SITE = { SITE_URL, SITE_NAME, DEFAULT_TITLE, DEFAULT_DESC };
