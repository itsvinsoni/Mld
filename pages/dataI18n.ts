import { useLang, type Lang } from './i18n';
import { NAV_LINKS as NAV_LINKS_EN, HERO as HERO_EN, ABOUT as ABOUT_EN, MESSAGES as MESSAGES_EN, GALLERY as GALLERY_EN, STATS as STATS_EN, INSTITUTIONS as INSTITUTIONS_EN } from './data';
import type { LeadershipMessage, GalleryImage, Institution } from './data';

/* ============================================================================
   Hindi (Devanagari) translations for site data.
   Technical / standard terms (D.Pharma, B.Ed, PCI, REET, lab, hostel, campus,
   syllabus, faculty, etc.) intentionally stay in English within Hindi text.
   ============================================================================ */

const NAV_HI = [
  { label: 'मुख्य पृष्ठ',  href: '/' },
  { label: 'संस्थान',      href: '/institutions' },
  { label: 'हमारे बारे में', href: '/about' },
  { label: 'गैलरी',         href: '/gallery' },
  { label: 'संदेश',         href: '/messages' },
  { label: 'संपर्क',        href: '/contact' },
];

const HERO_HI = {
  badge: 'श्री मिश्री लाल दुबे मेमोरियल संस्थान · केकड़ी',
  headingLine1: 'राजस्थान को शिक्षित करते हैं,',
  headingLine2: 'उज्जवल भविष्य बनाते हैं।',
  subheading: 'स्कूल, कॉलेज और डिप्लोमा institute तक — एक ही संस्थान के अंतर्गत गुणवत्तापूर्ण शिक्षा, मूल्य और आधुनिक सुविधाएँ।',
  scrollHint: 'नीचे स्क्रॉल करें',
};

const ABOUT_HI = {
  label: 'हमारे बारे में',
  heading: 'गुणवत्तापूर्ण शिक्षा की विरासत',
  paragraph:
    'श्री मिश्री लाल दुबे मेमोरियल संस्थान की स्थापना राजस्थान के विद्यार्थियों को गुणवत्तापूर्ण शिक्षा देने के संकल्प के साथ हुई। स्कूल से लेकर कॉलेज और डिप्लोमा institute तक, हमारे सभी संस्थान academic excellence, चरित्र निर्माण और विद्यार्थियों के समग्र विकास के लिए समर्पित हैं। समर्पित शिक्षकों की टीम और आधुनिक सुविधाओं के साथ, हम एक ऐसा वातावरण बनाते हैं जो सीखने, नवाचार और विकास को बढ़ावा दे। हमारा पाठ्यक्रम आधुनिक चुनौतियों का सामना करने के लिए बनाया गया है, साथ ही हमारी सांस्कृतिक मूल्यों की रक्षा भी करता है।',
  features: [
    { label: 'Academic Excellence',  icon: 'award' as const },
    { label: 'चरित्र निर्माण',         icon: 'heart' as const },
    { label: 'आधुनिक सुविधाएँ',         icon: 'building' as const },
    { label: 'सांस्कृतिक मूल्यों का संरक्षण', icon: 'landmark' as const },
    { label: 'आधुनिक पाठ्यक्रम',         icon: 'book' as const },
    { label: 'सफल पूर्व विद्यार्थी',      icon: 'users' as const },
  ],
  badgeValue: '20+',
  badgeLabel: 'वर्षों की विरासत',
};

const MESSAGES_HI: LeadershipMessage[] = [
  {
    id: 'msg1',
    role: 'principal',
    name: 'प्रधानाचार्य',
    title: 'प्रधानाचार्य, MLD संस्थान',
    headline: 'शिक्षा में उत्कृष्टता का नेतृत्व',
    message:
      'शिक्षा बाल्टी भरना नहीं, बल्कि आग जलाना है। MLD मेमोरियल संस्थान में हम हर विद्यार्थी में वह आग जलाने का प्रयास करते हैं, उनकी जिज्ञासा को पोषित करते हैं और उन्हें आजीवन सीखने वाला बनाते हैं। हमारे समर्पित faculty और व्यापक पाठ्यक्रम यह सुनिश्चित करते हैं कि हर विद्यार्थी को शैक्षणिक रूप से उत्कृष्टता और एक जिम्मेदार नागरिक बनने के लिए आवश्यक मार्गदर्शन और सहारा मिले।',
    icon: 'graduation',
  },
  {
    id: 'msg2',
    role: 'chairman',
    name: 'सी.पी. दुबे',
    title: 'अध्यक्ष, MLD मेमोरियल संस्थान',
    headline: 'उज्जवल भविष्य की दृष्टि',
    message:
      'हमारे संस्थान जीवन बदलने वाली गुणवत्तापूर्ण शिक्षा की नींव पर बने हैं। हम एक ऐसा वातावरण बनाने में विश्वास करते हैं जहाँ विद्यार्थी अपनी क्षमता को पहचान सकें, critical thinking विकसित कर सकें और ऐसे मूल्यों को अपनाएँ जो जीवन भर उनका मार्गदर्शन करें। हमारे संस्थापकों की विरासत हमें शैक्षणिक उत्कृष्टता और समाज सेवा के प्रति अपनी प्रतिबद्धता जारी रखने के लिए प्रेरित करती है।',
    icon: 'crown',
  },
  {
    id: 'msg3',
    role: 'director',
    name: 'अविनाश दुबे',
    title: 'निदेशक, MLD मेमोरियल संस्थान',
    headline: 'शिक्षा में नवाचार',
    message:
      'आज की तेज़ी से बदलती दुनिया में, शिक्षा को भी विद्यार्थियों को भविष्य की चुनौतियों के लिए तैयार करने के लिए विकसित होना चाहिए। हमारा ध्यान modern teaching methods, technology integration और practical learning पर है ताकि हमारे विद्यार्थी अपने चुने हुए क्षेत्रों में सफल हों और समाज में सकारात्मक योगदान दें।',
    icon: 'star',
  },
];

const GALLERY_CAPTIONS_HI = [
  'हमारा campus',
  'कक्षाएँ और पढ़ाई',
  'annual day',
  'sports day',
  'lab और practicals',
  'विद्यार्थी गतिविधियाँ',
  'campus जीवन',
  'assembly',
];

const STATS_HI = [
  { id: 'st1', value: 6, suffix: '+', label: 'संस्थान',        icon: 'building' as const },
  { id: 'st2', value: 5000, suffix: '+', label: 'विद्यार्थी',   icon: 'users' as const },
  { id: 'st3', value: 100, suffix: '+', label: 'experienced faculty', icon: 'graduation' as const },
  { id: 'st4', value: 20,  suffix: '+', label: 'वर्षों का अनुभव',  icon: 'award' as const },
];

/* ---------- Institutions (Hindi) ---------- */
const INSTITUTIONS_HI: Institution[] = INSTITUTIONS_EN.map((inst) => {
  const map: Record<string, { name: string; shortName: string; description: string; location: string; typeLabel: string }> = {
    'balika-uchch-madhyamik-academy': {
      name: 'बालिका उच्च माध्यमिक अकादमी',
      shortName: 'बालिका उच्च माध्यमिक अकादमी',
      location: 'केकड़ी, अजमेर',
      typeLabel: 'स्कूल',
      description: 'बालिकाओं के लिए एक समर्पित स्कूल जो Nursery से Class 12 तक सुरक्षित वातावरण में गुणवत्तापूर्ण शिक्षा प्रदान करता है।',
    },
    'mld-international-academy': {
      name: 'MLD International Academy',
      shortName: 'MLD International Academy',
      location: 'केकड़ी, अजमेर',
      typeLabel: 'स्कूल',
      description: 'आधुनिक पाठ्यक्रम, English medium और holistic development पर केंद्रित एक प्रीमियम स्कूल।',
    },
    'uchch-madhyamik-academy': {
      name: 'उच्च माध्यमिक अकादमी',
      shortName: 'उच्च माध्यमिक अकादमी',
      location: 'केकड़ी, अजमेर',
      typeLabel: 'स्कूल',
      description: 'RBSE से संबद्ध, Class 1 से 12 तक co-educational स्कूल जो academic rigor और values पर केंद्रित है।',
    },
    'memorial-sansthan-colleges': {
      name: 'मेमोरियल संस्थान कॉलेज',
      shortName: 'मेमोरियल संस्थान कॉलेज',
      location: 'केकड़ी, अजमेर',
      typeLabel: 'कॉलेज',
      description: 'BA, BSc, BCom, BBA, BCA जैसे undergraduate प्रोग्राम — Rajasthan University से संबद्ध।',
    },
    'live-stock-diploma': {
      name: 'MLD Live Stock Assistant Diploma Institute',
      shortName: 'Live Stock Diploma',
      location: 'केकड़ी, अजमेर',
      typeLabel: 'डिप्लोमा',
      description: 'Animal Husbandry विभाग, राजस्थान सरकार द्वारा मान्यता प्राप्त — Live Stock Assistant diploma और certificate courses।',
    },
    'pharmacy-college': {
      name: 'MLD Pharmacy College',
      shortName: 'MLD Pharmacy College',
      location: 'केकड़ी, अजमेर',
      typeLabel: 'Pharmacy',
      description: 'PCI-affiliated D.Pharma — community और hospital pharmacy के लिए modern training के साथ।',
    },
    'mahila-shikshan-prashikshan-mahavidyalay': {
      name: 'श्री मिश्रीलाल दुबे महिला शिक्षण प्रशिक्षण महाविद्यालय',
      shortName: 'महिला B.Ed कॉलेज',
      location: 'केकड़ी, अजमेर',
      typeLabel: 'B.Ed',
      description: 'NCTE-affiliated महिला B.Ed कॉलेज — REET/CTET coaching और practice teaching के साथ।',
    },
  };
  const hi = map[inst.slug];
  if (!hi) return inst;
  return { ...inst, name: hi.name, shortName: hi.shortName, description: hi.description, location: hi.location, typeLabel: hi.typeLabel };
});

/* ============================================================================
   Hooks
   ============================================================================ */

export function useNavLinks() {
  const { lang } = useLang();
  return lang === 'hi' ? NAV_HI : NAV_LINKS_EN;
}
export function useHero() {
  const { lang } = useLang();
  return lang === 'hi' ? HERO_HI : HERO_EN;
}
export function useAbout() {
  const { lang } = useLang();
  return lang === 'hi' ? ABOUT_HI : ABOUT_EN;
}
export function useMessages(): LeadershipMessage[] {
  const { lang } = useLang();
  return lang === 'hi' ? MESSAGES_HI : MESSAGES_EN;
}
export function useGallery(): GalleryImage[] {
  const { lang } = useLang();
  if (lang === 'en') return GALLERY_EN;
  return GALLERY_EN.map((g, i) => ({ ...g, caption: GALLERY_CAPTIONS_HI[i] || g.caption, alt: GALLERY_CAPTIONS_HI[i] || g.alt }));
}
export function useStats() {
  const { lang } = useLang();
  return lang === 'hi' ? STATS_HI : STATS_EN;
}
export function useInstitutions(): Institution[] {
  const { lang } = useLang();
  return lang === 'hi' ? INSTITUTIONS_HI : INSTITUTIONS_EN;
}

// Helper to get institution by slug in current language
export function useInstitutionBySlug(slug?: string): Institution | undefined {
  const list = useInstitutions();
  if (!slug) return undefined;
  return list.find((i) => i.slug === slug);
}

/* Plain (non-hook) getters for places where a hook can't be used (e.g. async/static lookups) */
export function getAbout(lang: Lang) { return lang === 'hi' ? ABOUT_HI : ABOUT_EN; }
export function getMessages(lang: Lang): LeadershipMessage[] { return lang === 'hi' ? MESSAGES_HI : MESSAGES_EN; }
export function getGallery(lang: Lang): GalleryImage[] {
  if (lang === 'en') return GALLERY_EN;
  return GALLERY_EN.map((g, i) => ({ ...g, caption: GALLERY_CAPTIONS_HI[i] || g.caption, alt: GALLERY_CAPTIONS_HI[i] || g.alt }));
}
export function getInstitutions(lang: Lang): Institution[] { return lang === 'hi' ? INSTITUTIONS_HI : INSTITUTIONS_EN; }
