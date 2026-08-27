// ---------------------------------------------------------------
// MLD Memorial Sansthan — Public page data
// White + Orange brand. Placeholder images are used; swap to real
// asset paths before launch. Content recovered from the legacy site.
// ---------------------------------------------------------------

import type { LucideId } from './icons';

export type InstitutionType = 'school' | 'college' | 'pharmacy' | 'diploma' | 'teacher';

export interface InstitutionAction {
  label: string;
  href: string;
  external?: boolean;
}

export interface Program {
  name: string;
  slug: string;
  level: string;
  duration: string;
}

export interface Institution {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  type: InstitutionType;
  typeLabel: string;
  location: string;
  description: string;
  about: string;
  image: string;
  gallery: string[];
  icon: LucideId;
  heroAccent?: string;
  programs: Program[];
  facilities: { label: string; icon: LucideId }[];
  highlights: { value: string; label: string }[];
  actions: InstitutionAction[];
}

export interface LeadershipMessage {
  id: string;
  role: 'principal' | 'chairman' | 'director';
  name: string;
  title: string;
  headline: string;
  message: string;
  icon: LucideId;
}

export interface GalleryImage {
  id: string;
  src: string;
  caption: string;
  alt: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: LucideId;
}

export const SITE = {
  name: 'Shri Mishri Lal Dubey Memorial Sansthan',
  shortName: 'MLD Memorial Sansthan',
  location: 'Kekri, Ajmer, Rajasthan, India',
  phone: '+91 9462456778',
  email: 'mldmemorialsansthan@gmail.com',
  logo: '/mld-logo.svg',
  tagline:
    'A society which runs multiple educational institutions across Rajasthan, providing quality education to students.',
};

export const HERO = {
  badge: 'Shri Mishri Lal Dubey Memorial Sansthan · Kekri',
  headingLine1: 'Educating Rajasthan,',
  headingLine2: 'Building Brighter Futures.',
  subheading: SITE.tagline,
  scrollHint: 'Scroll to explore',
  notice: 'विद्यारंभ संस्कार एवं सरस्वती पूजन',
};

export const STATS: Stat[] = [
  { id: 'st1', value: 6, suffix: '+', label: 'Institutions', icon: 'building' },
  { id: 'st2', value: 5000, suffix: '+', label: 'Students', icon: 'users' },
  { id: 'st3', value: 50, suffix: '+', label: 'Faculty', icon: 'graduation' },
  { id: 'st4', value: 20, suffix: '+', label: 'Years of Legacy', icon: 'award' },
];

const MLD = 'https://mldmemorialsansthan.com';

// Real MLD Memorial Sansthan photos (hot-linked from the live site).
export const HERO_IMAGES = [
  `${MLD}/images/slider/9a789b89-7748-4de3-8ec1-fa0a1139d9a1.jpeg`,
  `${MLD}/images/slider/66e1aa4d-5177-4241-9012-e1d5a7fe0a6d.jpeg`,
  `${MLD}/images/slider/c4efed92-c510-4031-b994-355b347cfa96.jpeg`,
  `${MLD}/images/slider/b6c273b4-92ee-4c43-bafc-eae011065b0a.jpg`,
  `${MLD}/images/slider/992d4a05-0fb8-4b5f-baf9-951e3904a345.jpg`,
  `${MLD}/images/slider/79ad1cef-6702-4647-b3c0-4d4f36f7dbdb.jpg`,
  `${MLD}/images/slider/d8a6b469-7f89-4b89-ae0e-287f06394774.png`,
  `${MLD}/images/slider/5e28635f-48f8-4677-ab3d-3edbe215d919.jpeg`,
];

const REAL_GALLERY = [
  `${MLD}/images/gallery/08e05197-73da-430c-9f76-b5ceabf65156.jpeg`,
  `${MLD}/images/gallery/c440c433-2a1f-4078-846e-591f8cd765cf.jpeg`,
  `${MLD}/images/gallery/bc91becf-6891-4f10-8121-4933e87b16b8.jpeg`,
  `${MLD}/images/gallery/800a9b04-a73d-4905-b6b1-6c2df8a2dc79.jpeg`,
  `${MLD}/images/gallery/305d6bd7-fea9-4dd7-8a0e-1b9f907ed029.jpeg`,
  `${MLD}/images/gallery/6f508d71-e7bc-43a4-a20c-62142ced8067.jpeg`,
  `${MLD}/images/gallery/9df71f9c-b955-4294-8019-e934f5d5a09b.jpeg`,
  `${MLD}/images/gallery/c0c68168-527e-48fa-90e3-92bf06981333.jpeg`,
  `${MLD}/images/gallery/42ac84c9-2802-4fa8-815e-5159c89db97b.jpeg`,
  `${MLD}/images/gallery/388ad6b8-e8af-4048-9944-8c88fc1a9440.jpeg`,
  `${MLD}/images/gallery/26847b69-2d2a-48b7-a209-ebe7804146c0.png`,
  `${MLD}/images/gallery/197fed72-2b80-45b0-b2ee-d600c36592db.jpg`,
  `${MLD}/images/gallery/4f0fcdd6-e216-4135-bf68-2c5b12c68833.jpg`,
  `${MLD}/images/gallery/2bf8186b-e8d2-4e25-ac5f-b6d99d884ffe.jpg`,
  `${MLD}/images/gallery/589db550-affc-40c3-b62c-e22bbc902fdd.jpg`,
  `${MLD}/images/gallery/b87ae710-377f-4219-9733-60e6c8ce9ade.jpg`,
  `${MLD}/Images/studentImage.jpg`,
  `${MLD}/Images/studentImage2.jpg`,
];

const hashStr = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
};

// Stable mapping from a seed string to a real MLD photo.
const pimg = (seed: string) => REAL_GALLERY[hashStr(seed) % REAL_GALLERY.length];
const pbig = (seed: string) => REAL_GALLERY[hashStr(seed) % REAL_GALLERY.length];
export const ABOUT_IMAGE = `${MLD}/Images/studentImage.jpg`;

const COMMON_FACILITIES: { label: string; icon: LucideId }[] = [
  { label: 'Smart Classrooms', icon: 'school' },
  { label: 'Digital Library', icon: 'book' },
  { label: 'Science Labs', icon: 'flask' },
  { label: 'Sports Ground', icon: 'astronaut' },
  { label: 'Transport', icon: 'bus' },
  { label: 'Hostel', icon: 'building' },
];

export const INSTITUTIONS: Institution[] = [
  {
    id: 'inst1',
    slug: 'balika-uchch-madhyamik-academy',
    name: 'Shri Mishri Lal Dubey Balika Uchch Madhyamik Academy',
    shortName: 'Balika Uchch Madhyamik Academy',
    type: 'school',
    typeLabel: 'Girls Senior Secondary School',
    location: 'Kekri, Ajmer',
    description:
      'A dedicated girls senior secondary academy committed to academic excellence, values, and holistic development.',
    about:
      'A dedicated girls senior secondary academy committed to academic excellence, values, and holistic development. Affiliated to RBSE, the academy offers a safe, empowering environment where girls grow into confident, capable leaders. We combine a strong foundation in academics with character building, sports, and cultural activities.',
    image: pimg('mld-school'),
    gallery: [pbig('mld-school-1'), pbig('mld-school-2'), pbig('mld-school-3'), pbig('mld-school-4')],
    icon: 'school',
    programs: [
      { name: 'Nursery & Kindergarten', slug: 'nursery-kindergarten', level: 'Primary', duration: '2 years' },
      { name: 'Primary School', slug: 'primary-school', level: 'Class 1–5', duration: '5 years' },
      { name: 'Middle School', slug: 'middle-school', level: 'Class 6–8', duration: '3 years' },
      { name: 'Secondary', slug: 'secondary', level: 'Class 9–10 (RBSE)', duration: '2 years' },
      { name: 'Senior Secondary', slug: 'senior-secondary', level: 'Class 11–12 (RBSE)', duration: '2 years' },
    ],
    facilities: COMMON_FACILITIES,
    highlights: [
      { value: '100%', label: 'Board Results' },
      { value: '15+', label: 'Expert Teachers' },
      { value: '500+', label: 'Students' },
    ],
    actions: [
      { label: 'Admission Enquiry', href: '#/contact' },
      { label: 'Admission Form', href: 'http://mldgirls.mldmemorialsansthan.com/admissionform.aspx', external: true },
      { label: 'School Website', href: 'http://mldgirls.mldmemorialsansthan.com/', external: true },
      { label: 'Mobile App', href: 'https://play.google.com/store/apps/details?id=in.academichub.academichubapp', external: true },
      { label: 'ERP Login', href: '#/admin', external: false },
    ],
  },
  {
    id: 'inst2',
    slug: 'mld-international-academy',
    name: 'MLD International Academy',
    shortName: 'MLD International Academy',
    type: 'school',
    typeLabel: 'International Curriculum School',
    location: 'Kekri, Ajmer',
    description:
      'An international-curriculum academy delivering a globally-minded, future-ready education for young learners.',
    about:
      'An international-curriculum academy delivering a globally-minded, future-ready education for young learners. Affiliated to CBSE, MLD International Academy focuses on experiential learning, global perspectives, and 21st-century skills. Our ethos blends rigorous academics with creativity, technology, and international values.',
    image: pimg('mld-intl'),
    gallery: [pbig('mld-intl-1'), pbig('mld-intl-2'), pbig('mld-intl-3'), pbig('mld-intl-4')],
    icon: 'globe',
    programs: [
      { name: 'Nursery & Kindergarten', slug: 'nursery-kindergarten', level: 'Primary', duration: '2 years' },
      { name: 'Primary School', slug: 'primary-school', level: 'Class 1–5', duration: '5 years' },
      { name: 'Middle School', slug: 'middle-school', level: 'Class 6–8', duration: '3 years' },
      { name: 'Secondary', slug: 'secondary', level: 'Class 9–10 (CBSE)', duration: '2 years' },
      { name: 'Senior Secondary', slug: 'senior-secondary', level: 'Class 11–12 (CBSE)', duration: '2 years' },
    ],
    facilities: COMMON_FACILITIES,
    highlights: [
      { value: '100%', label: 'Board Results' },
      { value: '18+', label: 'Expert Teachers' },
      { value: '700+', label: 'Students' },
    ],
    actions: [
      { label: 'Admission Enquiry', href: '#/contact' },
      { label: 'Admission Form', href: 'https://mldinternationalacademy.com/admissionform.aspx', external: true },
      { label: 'School Website', href: 'https://mldinternationalacademy.com/', external: true },
      { label: 'Mobile App', href: 'https://play.google.com/store/apps/details?id=in.academichub.academichubapp', external: true },
      { label: 'ERP Login', href: '#/admin', external: false },
    ],
  },
  {
    id: 'inst3',
    slug: 'uchch-madhyamik-academy',
    name: 'Shri Mishri Lal Dubey Uchch Madhyamik Academy',
    shortName: 'Uchch Madhyamik Academy',
    type: 'school',
    typeLabel: 'Senior Secondary School',
    location: 'Kekri, Ajmer',
    description:
      'A co-educational senior secondary academy known for strong academics, discipline, and personal growth.',
    about:
      'A co-educational senior secondary academy known for strong academics, discipline, and personal growth. Affiliated to RBSE, the academy offers a balanced education that builds knowledge, character, and confidence, ensuring every student is ready for higher education and beyond.',
    image: pimg('mld-uppermid'),
    gallery: [pbig('mld-uppermid-1'), pbig('mld-uppermid-2'), pbig('mld-uppermid-3')],
    icon: 'school',
    programs: [
      { name: 'Primary School', slug: 'primary-school', level: 'Class 1–5', duration: '5 years' },
      { name: 'Middle School', slug: 'middle-school', level: 'Class 6–8', duration: '3 years' },
      { name: 'Secondary', slug: 'secondary', level: 'Class 9–10 (RBSE)', duration: '2 years' },
      { name: 'Senior Secondary', slug: 'senior-secondary', level: 'Class 11–12 (RBSE)', duration: '2 years' },
    ],
    facilities: COMMON_FACILITIES,
    highlights: [
      { value: '98%', label: 'Board Results' },
      { value: '12+', label: 'Expert Teachers' },
      { value: '400+', label: 'Students' },
    ],
    actions: [
      { label: 'Admission Enquiry', href: '#/contact' },
      { label: 'Admission Form', href: 'http://mldboys.mldmemorialsansthan.com/admissionform.aspx', external: true },
      { label: 'School Website', href: 'http://mldboys.mldmemorialsansthan.com/', external: true },
      { label: 'Mobile App', href: 'https://play.google.com/store/apps/details?id=in.academichub.academichubapp', external: true },
      { label: 'ERP Login', href: '#/admin', external: false },
    ],
  },
  {
    id: 'inst4',
    slug: 'memorial-sansthan-colleges',
    name: 'Shri Mishri Lal Dubey Memorial Sansthan Colleges, Kekri',
    shortName: 'Memorial Sansthan Colleges',
    type: 'college',
    typeLabel: 'Degree College',
    location: 'Kekri, Ajmer',
    description:
      'A network of degree colleges offering undergraduate and professional programmes across multiple disciplines.',
    about:
      'A network of degree colleges offering undergraduate and professional programmes across multiple disciplines. Our colleges provide quality higher education with experienced faculty, modern infrastructure, and strong industry connections, preparing graduates for successful careers and higher studies.',
    image: pimg('mld-college'),
    gallery: [pbig('mld-college-1'), pbig('mld-college-2'), pbig('mld-college-3')],
    icon: 'building',
    programs: [
      { name: 'B.A. (Bachelor of Arts)', slug: 'ba-arts', level: 'Undergraduate', duration: '3 years' },
      { name: 'B.Sc. (Bachelor of Science)', slug: 'bsc-science', level: 'Undergraduate', duration: '3 years' },
      { name: 'B.Com (Bachelor of Commerce)', slug: 'bcom-commerce', level: 'Undergraduate', duration: '3 years' },
      { name: 'BBA (Business Administration)', slug: 'bba', level: 'Undergraduate', duration: '3 years' },
      { name: 'BCA (Computer Applications)', slug: 'bca', level: 'Undergraduate', duration: '3 years' },
    ],
    facilities: COMMON_FACILITIES,
    highlights: [
      { value: '2000+', label: 'Students' },
      { value: '40+', label: 'Faculty' },
      { value: '5', label: 'Streams' },
    ],
    actions: [
      { label: 'Admission Enquiry', href: 'https://mldenquiry.academichub.in/SelectCollege.aspx', external: true },
      { label: 'ERP Login', href: '#/admin', external: false },
    ],
  },
  {
    id: 'inst5',
    slug: 'live-stock-diploma',
    name: 'MLD Live Stock Assistant Diploma Training Institute, Kekri',
    shortName: 'Live Stock Assistant Diploma',
    type: 'diploma',
    typeLabel: 'Vocational Diploma',
    location: 'Kekri (Ajmer)',
    description:
      'A specialised vocational institute offering the Live Stock Assistant Diploma to build skilled professionals for the agricultural sector.',
    about:
      'A specialised vocational institute offering the Live Stock Assistant Diploma. This program trains students in animal husbandry, veterinary assistance, dairy farm management, and agricultural support — creating skilled professionals ready for the livestock and agriculture sector.',
    image: pimg('mld-livestock'),
    gallery: [pbig('mld-livestock-1'), pbig('mld-livestock-2'), pbig('mld-livestock-3')],
    icon: 'flask',
    programs: [
      { name: 'Live Stock Assistant Diploma', slug: 'live-stock-assistant-diploma', level: 'Diploma', duration: '2 years' },
      { name: 'Animal Husbandry Basics', slug: 'animal-husbandry-basics', level: 'Certificate', duration: '1 year' },
      { name: 'Dairy & Poultry Management', slug: 'dairy-poultry-management', level: 'Certificate', duration: '6 months' },
    ],
    facilities: [
      { label: 'Practical Labs', icon: 'flask' },
      { label: 'Farm Training', icon: 'tractor' },
      { label: 'Expert Trainers', icon: 'graduation' },
      { label: 'Placement Support', icon: 'briefcase' },
    ],
    highlights: [
      { value: '100%', label: 'Placement Support' },
      { value: '90+', label: 'Students' },
      { value: '8+', label: 'Expert Trainers' },
    ],
    actions: [
      { label: 'Admission Enquiry', href: 'https://mldenquiry.academichub.in/CollegeEnquiry.aspx?college=MLD%20Live%20Stock%20Assistant%20Diploma%20Training%20Institute%2C%20Kekri%20(Veterinary%20Diploma)', external: true },
      { label: 'Visit Web Page', href: 'LiveStockAssistantDiplomaCollege.aspx', external: true },
      { label: 'ERP Login', href: '#/admin', external: false },
    ],
  },
  {
    id: 'inst6',
    slug: 'pharmacy-college',
    name: 'MLD Pharmacy College Training Institute, Kekri',
    shortName: 'MLD Pharmacy College',
    type: 'pharmacy',
    typeLabel: '2-Year Diploma (D.Pharma)',
    location: 'Kekri (Ajmer)',
    description:
      'A pharmacy college offering a 2-year D.Pharma diploma with hands-on training and industry-oriented coursework.',
    about:
      'A pharmacy college offering a 2-year D.Pharma diploma. Students receive hands-on training in pharmaceutical sciences, pharmacology, and drug dispensing, preparing them for careers in pharmacies, hospitals, and the pharmaceutical industry.',
    image: pimg('mld-pharmacy'),
    gallery: [pbig('mld-pharmacy-1'), pbig('mld-pharmacy-2'), pbig('mld-pharmacy-3')],
    icon: 'capsule',
    programs: [
      { name: 'Diploma in Pharmacy (D.Pharma)', slug: 'd-pharma', level: 'Diploma', duration: '2 years' },
      { name: 'Pharmacology Basics', slug: 'pharmacology-basics', level: 'Certificate', duration: '6 months' },
    ],
    facilities: [
      { label: 'Pharmacy Lab', icon: 'capsule' },
      { label: 'Drug Store Training', icon: 'building' },
      { label: 'Expert Faculty', icon: 'graduation' },
      { label: 'Placement Support', icon: 'briefcase' },
    ],
    highlights: [
      { value: '100%', label: 'Placement Support' },
      { value: '120+', label: 'Students' },
      { value: '10+', label: 'Expert Faculty' },
    ],
    actions: [
      { label: 'Admission Enquiry', href: '#/contact' },
      { label: 'Visit Web Page', href: '#', external: true },
      { label: 'ERP Login', href: '#/admin', external: false },
    ],
  },
  {
    id: 'inst7',
    slug: 'mahila-shikshan-prashikshan-mahavidyalay',
    name: 'Shri Mishrilal Dubey Mahila Shikshan Prashikshan Mahavidyalay',
    shortName: 'Mahila Shikshan Prashikshan Mahavidyalay',
    type: 'teacher',
    typeLabel: 'Teacher Training College',
    location: 'Kekri, Ajmer',
    description:
      'A women teacher-training college offering B.Ed., B.A./B.Ed., B.Sc./B.Ed., D.El.Ed., and Shiksha Shastri programmes.',
    about:
      'A women teacher-training college run by Shri Mishri Lal Dubey Memorial Sansthan. We prepare the next generation of educators through rigorous teacher-training programs including B.Ed., B.A./B.Ed., B.Sc./B.Ed., D.El.Ed., and Shiksha Shastri — combining pedagogy, practice, and values.',
    image: pimg('mld-teacher'),
    gallery: [pbig('mld-teacher-1'), pbig('mld-teacher-2'), pbig('mld-teacher-3')],
    icon: 'graduation',
    programs: [
      { name: 'B.Ed. (Bachelor of Education)', slug: 'b-ed', level: 'Undergraduate', duration: '2 years' },
      { name: 'B.A. / B.Ed.', slug: 'ba-b-ed-integrated', level: 'Integrated', duration: '4 years' },
      { name: 'B.Sc. / B.Ed.', slug: 'bsc-b-ed-integrated', level: 'Integrated', duration: '4 years' },
      { name: 'D.El.Ed. (Diploma in Elementary Education)', slug: 'd-el-ed', level: 'Diploma', duration: '2 years' },
      { name: 'Shiksha Shastri', slug: 'shiksha-shastri', level: 'Diploma', duration: '2 years' },
    ],
    facilities: [
      { label: 'Teaching Practice', icon: 'school' },
      { label: 'Education Library', icon: 'book' },
      { label: 'Expert Faculty', icon: 'graduation' },
      { label: 'Placement Support', icon: 'briefcase' },
    ],
    highlights: [
      { value: '300+', label: 'Students' },
      { value: '20+', label: 'Faculty' },
      { value: '5', label: 'Programmes' },
    ],
    actions: [
      { label: 'Admission Enquiry', href: '#/contact' },
      { label: 'ERP Login', href: '#/admin', external: false },
    ],
  },
];

export const getInstitutionBySlug = (slug?: string): Institution | undefined =>
  INSTITUTIONS.find((i) => i.slug === slug);

export const ABOUT = {
  label: 'About Us',
  heading: 'A Legacy of Quality Education',
  paragraph:
    'Shri Mishri Lal Dubey Memorial Sansthan was established with a vision to provide quality education to the students of Rajasthan. Our institutions are committed to academic excellence, character building, and overall development of students. With a team of dedicated educators and state-of-the-art facilities, we strive to create an environment that fosters learning, innovation, and growth. Our curriculum is designed to meet the challenges of the modern world while preserving our cultural values. Over the years, our institutions have produced numerous successful alumni who have excelled in various fields and are contributing to the society in meaningful ways.',
  features: [
    { label: 'Academic Excellence', icon: 'award' },
    { label: 'Character Building', icon: 'heart' },
    { label: 'State-of-the-Art Facilities', icon: 'building' },
    { label: 'Preserving Cultural Values', icon: 'landmark' },
    { label: 'Modern Curriculum', icon: 'book' },
    { label: 'Successful Alumni', icon: 'users' },
  ] as { label: string; icon: LucideId }[],
  image: ABOUT_IMAGE,
  badgeValue: '20+',
  badgeLabel: 'Years of Legacy',
};

export const MESSAGES: LeadershipMessage[] = [
  {
    id: 'msg1',
    role: 'principal',
    name: 'Principal',
    title: 'Principal, MLD Institutions',
    headline: 'Leading with Excellence in Education',
    message:
      'Education is not the filling of a pail, but the lighting of a fire. At MLD Memorial Sansthan, we strive to ignite that fire in every student, nurturing their curiosity and empowering them to become lifelong learners. Our dedicated faculty and comprehensive curriculum ensure that each student receives the guidance and support they need to excel academically and develop into responsible citizens.',
    icon: 'graduation',
  },
  {
    id: 'msg2',
    role: 'chairman',
    name: 'C.P. Dubey',
    title: 'Chairman, MLD Memorial Sansthan',
    headline: 'Vision for a Brighter Future',
    message:
      'Our institutions are built on the foundation of providing quality education that transforms lives. We believe in creating an environment where students can discover their potential, develop critical thinking skills, and embrace values that will guide them throughout their lives. The legacy of our founders inspires us to continue our commitment to educational excellence and community service.',
    icon: 'crown',
  },
  {
    id: 'msg3',
    role: 'director',
    name: 'Avinash Dubey',
    title: 'Director, MLD Memorial Sansthan',
    headline: 'Innovation in Education',
    message:
      "In today's rapidly changing world, education must evolve to prepare students for the challenges of tomorrow. At MLD Memorial Sansthan, we are committed to implementing innovative teaching methodologies and integrating technology to enhance learning experiences. Our focus is on developing well-rounded individuals who possess not only academic knowledge but also the skills and values necessary to succeed in life.",
    icon: 'lightbulb',
  },
];

const GALLERY_CAPTIONS = [
  'Our vibrant campus',
  'Interactive classrooms',
  'Modern laboratories',
  'Central library',
  'Sports & recreation',
  'Annual celebrations',
  'Graduation day',
  'Cultural programmes',
];

export const GALLERY: GalleryImage[] = REAL_GALLERY.slice(0, 8).map((src, i) => ({
  id: `g${i + 1}`,
  src,
  caption: GALLERY_CAPTIONS[i] || 'MLD Memorial Sansthan',
  alt: GALLERY_CAPTIONS[i] || 'MLD campus',
}));

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Institutions', href: '/institutions' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Messages', href: '/messages' },
  { label: 'Contact', href: '/contact' },
];
