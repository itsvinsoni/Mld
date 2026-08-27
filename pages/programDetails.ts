// Rich, detailed program data for the public website.
// Each entry corresponds to a program offered by one or more MLD institutions
// and renders at /programs/[slug].

export interface ProgramCareer {
  role: string;
  description: string;
  scope: string;
  icon: string;
}

export interface ProgramDetail {
  slug: string;
  name: string;
  category: 'School' | 'Undergraduate' | 'Diploma' | 'Certificate' | 'Professional';
  level: string;
  duration: string;
  eligibility: string;
  mode: string;
  medium: string;
  institutionSlugs: string[];
  shortDescription: string;
  overview: string[];
  whatYouLearn: string[];
  careerOptions: ProgramCareer[];
  whyMLD: string[];
  facilities: { label: string; icon: string }[];
  highlights: { value: string; label: string }[];
  image: string;
  enquiryLabel: string;
  enquiryHref: string;
}

// Real MLD Memorial Sansthan image pool (hot-linked from the live site)
const MLD = 'https://mldmemorialsansthan.com';
const img = (path: string) => `${MLD}${path}`;

const schoolImg = img('/images/gallery/08e05197-73da-430c-9f76-b5ceabf65156.jpeg');
const classroomImg = img('/images/gallery/c440c433-2a1f-4078-846e-591f8cd765cf.jpeg');
const labImg = img('/images/gallery/bc91becf-6891-4f10-8121-4933e87b16b8.jpeg');
const libraryImg = img('/images/gallery/800a9b04-a73d-4905-b6b1-6c2df8a2dc79.jpeg');
const sportsImg = img('/images/gallery/305d6bd7-fea9-4dd7-8a0e-1b9f907ed029.jpeg');
const eventImg = img('/images/gallery/6f508d71-e7bc-43a4-a20c-62142ced8067.jpeg');
const scienceImg = img('/images/gallery/9df71f9c-b955-4294-8019-e934f5d5a09b.jpeg');
const computerImg = img('/images/gallery/c0c68168-527e-48fa-90e3-92bf06981333.jpeg');
const artsImg = img('/images/gallery/42ac84c9-2802-4fa8-815e-5159c89db97b.jpeg');
const commerceImg = img('/images/gallery/388ad6b8-e8af-4048-9944-8c88fc1a9440.jpeg');
const slider1 = img('/images/slider/9a789b89-7748-4de3-8ec1-fa0a1139d9a1.jpeg');
const slider2 = img('/images/slider/66e1aa4d-5177-4241-9012-e1d5a7fe0a6d.jpeg');
const slider3 = img('/images/slider/c4efed92-c510-4031-b994-355b347cfa96.jpeg');
const slider4 = img('/images/slider/b6c273b4-92ee-4c43-bafc-eae011065b0a.jpg');
const slider5 = img('/images/slider/992d4a05-0fb8-4b5f-baf9-951e3904a345.jpg');
const studentImg = img('/Images/studentImage.jpg');

export const PROGRAM_DETAILS: ProgramDetail[] = [
  // ---------- DIPLOMA IN PHARMACY (D.Pharma) ----------
  {
    slug: 'd-pharma',
    name: 'Diploma in Pharmacy (D.Pharma)',
    category: 'Diploma',
    level: 'Diploma',
    duration: '2 years (full-time)',
    eligibility: '12th pass with Physics, Chemistry and Biology/Mathematics (PCB/PCM) from a recognised board. Minimum aggregate as per PCI norms.',
    mode: 'Full-time, on-campus',
    medium: 'English & Hindi',
    institutionSlugs: ['pharmacy-college'],
    shortDescription:
      'A two-year professional diploma that prepares you for careers in retail pharmacy, hospital pharmacy, drug manufacturing and the pharmaceutical industry.',
    overview: [
      'Diploma in Pharmacy (D.Pharma) is a foundational professional course regulated by the Pharmacy Council of India (PCI). It trains students in pharmaceutical sciences, drug formulation, dispensing, pharmacology, pharmaceutical chemistry, and pharmacy law & ethics.',
      'At MLD Pharmacy College, the programme blends strong classroom teaching with hands-on laboratory practice in pharmaceutics, pharmaceutical chemistry, pharmacology, and pharmacognosy. Students learn to compound, dispense, and counsel patients on medicines — the core skills of a licensed pharmacist.',
      'On completion, graduates are eligible to register with the State Pharmacy Council and work as registered pharmacists in retail medical stores, hospital pharmacies, the pharmaceutical industry, and in regulatory, sales, and drug-inspection roles. Many graduates also go on to pursue B.Pharm and higher studies.',
    ],
    whatYouLearn: [
      'Pharmaceutics & dosage form design',
      'Pharmaceutical chemistry and drug analysis',
      'Pharmacology and drug action',
      'Pharmacognosy (medicines from natural sources)',
      'Community pharmacy & patient counselling',
      'Hospital & clinical pharmacy practice',
      'Drug store management and inventory',
      'Pharmacy law, ethics and the Drugs & Cosmetics Act',
    ],
    careerOptions: [
      {
        role: 'Registered Pharmacist (Retail)',
        description:
          'Dispense medicines, counsel patients on dosage and side-effects, and manage a community pharmacy or medical store.',
        scope: 'High demand across India; one of the most stable healthcare careers.',
        icon: 'briefcase',
      },
      {
        role: 'Hospital Pharmacist',
        description:
          'Work in the pharmacy department of hospitals, managing inpatient drug dispensing, IV admixtures, and drug-information services.',
        scope: 'Strong demand in private and government hospitals.',
        icon: 'building',
      },
      {
        role: 'Pharmaceutical Sales Executive',
        description:
          'Represent pharma companies, build relationships with doctors and chemists, and grow territory sales.',
        scope: 'Excellent earning potential through incentives; pan-India roles.',
        icon: 'trending-up',
      },
      {
        role: 'Drug Inspector / Regulatory',
        description:
          'After higher qualifications and experience, work in drug regulation, quality control, and inspection (government/PSU).',
        scope: 'Prestigious government roles; requires further qualifications.',
        icon: 'award',
      },
      {
        role: 'Production / Quality Control',
        description:
          'Work in manufacturing units of pharma companies in formulation, QA, QC, packaging, and supply chain.',
        scope: 'Strong demand in Rajasthan\'s growing pharma sector.',
        icon: 'flask',
      },
      {
        role: 'B.Pharm & Higher Studies',
        description:
          'Lateral entry / direct admission to B.Pharm (2nd year) and later M.Pharm, MBA, or government exams.',
        scope: 'Best path for research, industry leadership, and academia.',
        icon: 'graduation',
      },
    ],
    whyMLD: [
      'PCI-affiliated, two-year D.Pharma programme with a structured curriculum and experienced faculty.',
      'Modern pharmaceutics, chemistry, and pharmacology laboratories for hands-on practical training.',
      'Strong focus on community and hospital pharmacy practice through workshops and hospital visits.',
      'Affordable fee structure with scholarships and guidance for meritorious and need-based students.',
      'Dedicated placement and career guidance for retail, hospital, and industry careers.',
      'A peaceful, disciplined campus in Kekri with separate hostels, library, and computer facilities.',
    ],
    facilities: [
      { label: 'Pharmaceutics Lab', icon: 'flask' },
      { label: 'Chemistry Lab', icon: 'flask' },
      { label: 'Pharmacology Lab', icon: 'activity' },
      { label: 'Drug Museum', icon: 'book' },
      { label: 'Library & e-library', icon: 'book' },
      { label: 'Computer Lab', icon: 'monitor' },
    ],
    highlights: [
      { value: '2 yrs', label: 'Programme length' },
      { value: 'PCI', label: 'Approved curriculum' },
      { value: '100+', label: 'Pharma partners' },
      { value: '6+', label: 'Career paths' },
    ],
    image: labImg,
    enquiryLabel: 'Apply for D.Pharma Admission',
    enquiryHref: 'https://mldenquiry.academichub.in/',
  },

  // ---------- B.Ed ----------
  {
    slug: 'b-ed',
    name: 'B.Ed. (Bachelor of Education)',
    category: 'Professional',
    level: 'Undergraduate (Professional)',
    duration: '2 years (full-time)',
    eligibility:
      'Bachelor\'s / Master\'s degree with at least 50% marks (45% for reserved categories) from a recognised university. Admission as per state government / university norms.',
    mode: 'Full-time, on-campus',
    medium: 'English & Hindi',
    institutionSlugs: ['mahila-shikshan-prashikshan-mahavidyalay'],
    shortDescription:
      'A two-year professional teaching programme that prepares graduates to become skilled school teachers at secondary and senior secondary levels.',
    overview: [
      'The Bachelor of Education (B.Ed) is the most recognised teacher-training programme in India, regulated by the National Council for Teacher Education (NCTE). It builds pedagogy, subject knowledge, classroom management, and practice-teaching skills.',
      'At Shri Mishrilal Dubey Mahila Shikshan Prashikshan Mahavidyalay, the programme is designed for women who aspire to teach at secondary and senior secondary schools. The two-year course combines theory (philosophy of education, psychology of learning, methods of teaching, educational technology) with extensive practice teaching in our own demo schools and partner schools.',
      'Graduates are eligible to appear for Teacher Eligibility Tests (REET / CTET) and become government school teachers, or work in private, CBSE, and ICSE schools. Many alumni have built long, respected careers in teaching and school leadership.',
    ],
    whatYouLearn: [
      'Philosophy, sociology & history of Indian education',
      'Educational psychology & child development',
      'Methods of teaching (your school subjects)',
      'Pedagogy, assessment & evaluation',
      'Educational technology & ICT in classrooms',
      'Inclusive education and guidance & counselling',
      'Practice teaching in real schools (16 weeks)',
      'Action research & school-based projects',
    ],
    careerOptions: [
      {
        role: 'Government School Teacher',
        description:
          'Clear REET/CTET and become a Trained Graduate Teacher in state / central government schools.',
        scope: 'High job security, pension, and growth into Head Master / Principal roles.',
        icon: 'building',
      },
      {
        role: 'CBSE / Private School Teacher',
        description:
          'Teach at reputed CBSE, ICSE, and state-board private schools across India.',
        scope: 'Largest employer segment; strong demand for trained B.Ed graduates.',
        icon: 'briefcase',
      },
      {
        role: 'School Administrator / Vice Principal',
        description:
          'With experience, move into academic coordination, vice-principal, and principal roles.',
        scope: 'Leadership track in the K-12 segment.',
        icon: 'award',
      },
      {
        role: 'Education Coach / Tutor',
        description:
          'Build a private tutoring or coaching practice for school students and competitive exams.',
        scope: 'Flexible, high-earning entrepreneurial path.',
        icon: 'trending-up',
      },
      {
        role: 'Curriculum Designer / EdTech',
        description:
          'Work with publishers and EdTech companies on curriculum, content, and learning design.',
        scope: 'Growing industry; combines subject expertise with technology.',
        icon: 'monitor',
      },
      {
        role: 'Higher Studies (M.Ed, NET)',
        description:
          'Pursue M.Ed, M.A. (Education), UGC-NET, or a Ph.D. for college teaching and research.',
        scope: 'Best route to academia, research, and B.Ed college faculty.',
        icon: 'graduation',
      },
    ],
    whyMLD: [
      'A dedicated women\'s B.Ed college with a safe, supportive learning environment.',
      'NCTE-affiliated two-year programme with a strong theory + practice balance.',
      'Practice teaching in our own demo schools and partner secondary schools.',
      'Experienced faculty with deep classroom experience and personal mentoring.',
      'Special guidance and coaching for REET / CTET and school interviews.',
      'Affordable fee structure with scholarships for meritorious students.',
    ],
    facilities: [
      { label: 'Practice-teaching schools', icon: 'building' },
      { label: 'Psychology Lab', icon: 'activity' },
      { label: 'ICT / Smart classrooms', icon: 'monitor' },
      { label: 'Library', icon: 'book' },
      { label: 'Seminar Hall', icon: 'star' },
      { label: 'Hostel (Girls)', icon: 'home' },
    ],
    highlights: [
      { value: '2 yrs', label: 'Programme length' },
      { value: 'NCTE', label: 'Approved' },
      { value: '16 wks', label: 'Practice teaching' },
      { value: '100%', label: 'Teaching-focused' },
    ],
    image: slider3,
    enquiryLabel: 'Apply for B.Ed Admission',
    enquiryHref: 'https://mldcollege.academichub.in/',
  },

  // ---------- LIVE STOCK ASSISTANT DIPLOMA ----------
  {
    slug: 'live-stock-assistant-diploma',
    name: 'Live Stock Assistant Diploma',
    category: 'Diploma',
    level: 'Diploma',
    duration: '2 years (full-time)',
    eligibility:
      '12th pass (Science / Agriculture preferred) from a recognised board. Admission on merit as per state norms.',
    mode: 'Full-time, on-campus',
    medium: 'Hindi & English',
    institutionSlugs: ['live-stock-diploma'],
    shortDescription:
      'A job-oriented two-year diploma that trains you as a Live Stock Assistant — a key role in animal healthcare, dairy, and the rural economy.',
    overview: [
      'The Live Stock Assistant Diploma is a vocational programme designed to build a trained workforce for India\'s animal husbandry, dairy, and veterinary sectors. Live Stock Assistants (LSAs) support veterinarians in the field, run veterinary dispensaries, and advise farmers on animal health, breeding, and nutrition.',
      'At the MLD Live Stock Assistant Diploma Training Institute, students gain hands-on training in animal anatomy & physiology, first aid, vaccination, artificial insemination, fodder management, and dairy & poultry management. The programme also covers government schemes, livestock extension, and rural entrepreneurship.',
      'Rajasthan has one of the largest livestock populations in India, and there is a steady demand for trained LSAs in the Animal Husbandry Department, dairy cooperatives, NGOs, and private dairy / poultry farms. Graduates can also start their own dairy, goat, or poultry units.',
    ],
    whatYouLearn: [
      'Animal anatomy, physiology & first aid',
      'Vaccination and disease prevention',
      'Artificial insemination & breeding management',
      'Fodder cultivation & nutrition',
      'Dairy farming & milk production',
      'Poultry, goat & sheep management',
      'Livestock extension & government schemes',
      'Rural entrepreneurship & farm management',
    ],
    careerOptions: [
      {
        role: 'Live Stock Assistant (Govt.)',
        description:
          'Work with the Department of Animal Husbandry in dispensaries, vaccination drives, and field programmes.',
        scope: 'Government job with strong rural employment footprint.',
        icon: 'building',
      },
      {
        role: 'Dairy Farm Supervisor',
        description:
          'Supervise dairy operations at cooperatives like Amul, private dairies, or large cattle farms.',
        scope: 'High demand in Rajasthan\'s dairy belt.',
        icon: 'briefcase',
      },
      {
        role: 'Poultry / Goat Farm Manager',
        description:
          'Run or manage commercial poultry, goat, or sheep farms.',
        scope: 'Fast-growing segment; strong entrepreneurial opportunity.',
        icon: 'home',
      },
      {
        role: 'Veterinary Field Assistant',
        description:
          'Support veterinarians in clinical practice, AI work, and livestock camps.',
        scope: 'Hands-on rural career with high social impact.',
        icon: 'activity',
      },
      {
        role: 'Agri / Dairy Entrepreneur',
        description:
          'Start your own dairy, poultry, feed, or animal-nutrition business with government-subsidy support.',
        scope: 'Best path for self-employment and family enterprise.',
        icon: 'trending-up',
      },
      {
        role: 'B.V.Sc & Higher Studies',
        description:
          'Pursue B.V.Sc & A.H. (veterinary) or related agriculture / dairy degrees.',
        scope: 'Route to becoming a full veterinarian or agricultural officer.',
        icon: 'graduation',
      },
    ],
    whyMLD: [
      'One of the few dedicated Live Stock Assistant training institutes in the region.',
      'Practical, field-oriented curriculum built around real animal husbandry needs.',
      'Tie-ups with local dairy cooperatives, veterinary hospitals, and farms for on-site training.',
      'Guidance for government recruitment and entrepreneurial setup (dairy, poultry, goat).',
      'Affordable fees with hostel and practical facilities for rural students.',
      'Strong alumni network working in government and private animal-husbandry roles.',
    ],
    facilities: [
      { label: 'Animal-husbandry lab', icon: 'flask' },
      { label: 'Dairy unit', icon: 'home' },
      { label: 'Fodder demo plots', icon: 'leaf' },
      { label: 'Veterinary tie-ups', icon: 'building' },
      { label: 'Library', icon: 'book' },
      { label: 'Hostel', icon: 'home' },
    ],
    highlights: [
      { value: '2 yrs', label: 'Diploma length' },
      { value: '6+', label: 'Career paths' },
      { value: 'Govt.', label: 'Recruitment ready' },
      { value: 'Rural', label: 'High impact' },
    ],
    image: slider2,
    enquiryLabel: 'Apply for Live Stock Diploma',
    enquiryHref: 'https://mldenquiry.academichub.in/',
  },

  // ---------- ANIMAL HUSBANDRY BASICS (Certificate) ----------
  {
    slug: 'animal-husbandry-basics',
    name: 'Animal Husbandry Basics (Certificate)',
    category: 'Certificate',
    level: 'Certificate',
    duration: '1 year',
    eligibility: '10th pass from a recognised board.',
    mode: 'Full-time, on-campus',
    medium: 'Hindi',
    institutionSlugs: ['live-stock-diploma'],
    shortDescription:
      'A one-year certificate course that gives you a strong foundation in animal care, dairy, and small-scale livestock farming.',
    overview: [
      'The Animal Husbandry Basics certificate is a short, skill-focused programme that introduces students to the principles of animal care, breeding, nutrition, and small-scale livestock farming. It is ideal for students who want to start working in the dairy / poultry sector quickly or run a small family farm.',
      'The course covers the essentials of cattle, buffalo, goat, and poultry management, basic veterinary first aid, and the economics of small livestock enterprises — preparing students for jobs at dairy farms, poultry units, and animal-feed stores, or for self-employment.',
    ],
    whatYouLearn: [
      'Basics of animal care & handling',
      'Common cattle & poultry diseases',
      'Vaccination and first aid',
      'Fodder, feed, and nutrition basics',
      'Small dairy & poultry economics',
      'Government schemes for farmers',
    ],
    careerOptions: [
      { role: 'Dairy / Poultry Worker', description: 'Work in commercial dairy or poultry farms.', scope: 'Immediate employment.', icon: 'briefcase' },
      { role: 'Feed / Fodder Sales', description: 'Sell animal feed and fodder in the local market.', scope: 'Entrepreneurial.', icon: 'trending-up' },
      { role: 'Self-employment', description: 'Run a small dairy, goat, or poultry unit.', scope: 'Best for rural self-employment.', icon: 'home' },
      { role: 'Live Stock Assistant Diploma', description: 'Continue to the 2-year LSA diploma.', scope: 'Clear academic progression.', icon: 'graduation' },
    ],
    whyMLD: [
      'Short, affordable, job-oriented certificate.',
      'Hands-on training at our dairy and farm units.',
      'Clear pathway to the 2-year LSA diploma.',
      'Strong focus on rural self-employment.',
    ],
    facilities: [
      { label: 'Dairy unit', icon: 'home' },
      { label: 'Farm plots', icon: 'leaf' },
      { label: 'Library', icon: 'book' },
    ],
    highlights: [
      { value: '1 yr', label: 'Certificate length' },
      { value: '10th', label: 'Eligibility' },
      { value: 'Jobs', label: 'Immediate' },
      { value: 'Self', label: 'Employment' },
    ],
    image: slider5,
    enquiryLabel: 'Apply for Animal Husbandry Certificate',
    enquiryHref: 'https://mldenquiry.academichub.in/',
  },

  // ---------- DAIRY & POULTRY MANAGEMENT ----------
  {
    slug: 'dairy-poultry-management',
    name: 'Dairy & Poultry Management (Certificate)',
    category: 'Certificate',
    level: 'Certificate',
    duration: '6 months',
    eligibility: '8th pass (open for all).',
    mode: 'Full-time, on-campus',
    medium: 'Hindi',
    institutionSlugs: ['live-stock-diploma'],
    shortDescription:
      'A short, practical certificate that trains you to manage a small dairy or poultry unit — the most accessible path to rural self-employment.',
    overview: [
      'The Dairy & Poultry Management certificate is a 6-month, hands-on course designed to give every student — including those with minimum prior education — the practical skills to manage a small dairy or poultry enterprise.',
      'Students learn daily cattle and poultry care, feeding, hygiene, vaccination, and basic record-keeping, along with the economics of running a small unit. The course is built around "learn-by-doing" at the institute\'s own dairy and poultry demonstration units.',
    ],
    whatYouLearn: [
      'Daily care of dairy cattle & buffalo',
      'Poultry brooding, feeding & egg handling',
      'Hygiene and disease prevention',
      'Cost & profit calculation for small units',
      'Linking with dairy cooperatives (e.g. Amul)',
    ],
    careerOptions: [
      { role: 'Dairy / Poultry Operator', description: 'Run a small commercial dairy or poultry unit.', scope: 'High rural demand.', icon: 'home' },
      { role: 'Cooperative Member', description: 'Supply milk to a local dairy cooperative.', scope: 'Stable, daily income.', icon: 'building' },
      { role: 'Self-employment', description: 'Start a backyard poultry or micro-dairy with low investment.', scope: 'Best for first-generation entrepreneurs.', icon: 'trending-up' },
    ],
    whyMLD: [
      'Lowest entry barrier (8th pass) for a certified skill course.',
      'Practical training at our own dairy and poultry units.',
      'Strong employability and self-employment outcomes.',
    ],
    facilities: [
      { label: 'Dairy unit', icon: 'home' },
      { label: 'Poultry demo', icon: 'leaf' },
    ],
    highlights: [
      { value: '6 mo', label: 'Length' },
      { value: '8th', label: 'Eligibility' },
      { value: '100%', label: 'Practical' },
    ],
    image: sportsImg,
    enquiryLabel: 'Apply for Dairy & Poultry Certificate',
    enquiryHref: 'https://mldenquiry.academichub.in/',
  },

  // ---------- B.A. ----------
  {
    slug: 'ba-arts',
    name: 'B.A. (Bachelor of Arts)',
    category: 'Undergraduate',
    level: 'Undergraduate',
    duration: '3 years (full-time)',
    eligibility: '12th pass from a recognised board in any stream.',
    mode: 'Full-time, on-campus',
    medium: 'Hindi & English',
    institutionSlugs: ['memorial-sansthan-colleges'],
    shortDescription:
      'A flexible 3-year arts degree with subjects across humanities and social sciences — the foundation for civil services, teaching, law, journalism, and more.',
    overview: [
      'The Bachelor of Arts (B.A.) is one of the most versatile undergraduate degrees in India. At MLD Memorial Sansthan Colleges, the programme offers a wide choice of subjects in humanities, social sciences, and languages, allowing students to build a combination that matches their career interest.',
      'The three-year course builds reading, writing, critical thinking, and communication skills — exactly what is needed for civil services (RAS, UPSC), SSC, banking, teaching, law (after 3-year LLB), journalism, social work, and public administration.',
    ],
    whatYouLearn: [
      'Core subjects: Hindi, English, History, Political Science, Economics, Sociology, Geography, Sanskrit',
      'Critical thinking, writing and communication',
      'Research and project work',
      'Computer fundamentals and digital skills',
    ],
    careerOptions: [
      { role: 'Civil Services / Govt. Exams', description: 'Prepare for RAS, UPSC, SSC, banking, and state PSC exams.', scope: 'Most popular career path for B.A. graduates.', icon: 'award' },
      { role: 'School Teacher', description: 'Teach at secondary / senior secondary schools (with B.Ed).', scope: 'Stable and respected.', icon: 'briefcase' },
      { role: 'Law (LLB)', description: 'Pursue 3-year LLB after B.A. to become an advocate.', scope: 'High-prestige professional path.', icon: 'graduation' },
      { role: 'Journalism / Media', description: 'Work in print, digital, and broadcast media.', scope: 'Creative and fast-growing.', icon: 'monitor' },
      { role: 'Banking / SSC', description: 'Clerk, PO, and SSC roles in banks and government.', scope: 'Largest employer segment.', icon: 'building' },
      { role: 'M.A. & Higher Studies', description: 'Pursue M.A. in your subject, then NET/PhD for college teaching.', scope: 'Best for academia and research.', icon: 'graduation' },
    ],
    whyMLD: [
      'Affordable, UGC-pattern 3-year B.A. with a wide range of subject combinations.',
      'Experienced faculty and personal mentoring for each student.',
      'Dedicated coaching and guidance for RAS, SSC, and banking exams.',
      'Well-stocked library, reading room, and computer lab.',
      'Vibrant campus with cultural, sports, and NCC/NSS activities.',
      'Affordable fee structure ideal for rural and first-generation learners.',
    ],
    facilities: [
      { label: 'Library', icon: 'book' },
      { label: 'Computer Lab', icon: 'monitor' },
      { label: 'Seminar Hall', icon: 'star' },
      { label: 'Sports Ground', icon: 'activity' },
      { label: 'NCC / NSS', icon: 'users' },
      { label: 'Hostel', icon: 'home' },
    ],
    highlights: [
      { value: '3 yrs', label: 'Degree length' },
      { value: '12+', label: 'Subjects to choose' },
      { value: '10+', label: 'Career paths' },
      { value: 'Govt.', label: 'Coaching' },
    ],
    image: artsImg,
    enquiryLabel: 'Apply for B.A. Admission',
    enquiryHref: 'https://mldcollege.academichub.in/',
  },

  // ---------- B.Sc. ----------
  {
    slug: 'bsc-science',
    name: 'B.Sc. (Bachelor of Science)',
    category: 'Undergraduate',
    level: 'Undergraduate',
    duration: '3 years (full-time)',
    eligibility: '12th pass with Science (PCM / PCB) from a recognised board.',
    mode: 'Full-time, on-campus',
    medium: 'English & Hindi',
    institutionSlugs: ['memorial-sansthan-colleges'],
    shortDescription:
      'A 3-year science degree with PCM/PCB combinations — the launchpad for careers in research, healthcare, IT, and government science services.',
    overview: [
      'The Bachelor of Science (B.Sc.) at MLD Memorial Sansthan Colleges offers the two most popular combinations — Physics, Chemistry, Mathematics (PCM) and Physics, Chemistry, Biology (PCB) — taught by experienced faculty with strong laboratory practice.',
      'The programme builds the analytical and quantitative foundation needed for careers and higher studies in engineering (through lateral entry / entrance exams), medical lab technology, biotechnology, nursing, pharmacy, IT, data science, government science services, and research.',
    ],
    whatYouLearn: [
      'PCM: Physics, Chemistry, Mathematics + practicals',
      'PCB: Physics, Chemistry, Biology + lab work',
      'Computer fundamentals and scientific computing',
      'Research methodology and mini-projects',
    ],
    careerOptions: [
      { role: 'M.Sc. & Research', description: 'Pursue M.Sc. in your subject, then research and PhD.', scope: 'Best path for scientists.', icon: 'graduation' },
      { role: 'Healthcare (DMLT, Nursing, B.Pharm)', description: 'Move into allied-health and paramedical careers.', scope: 'High demand in India and abroad.', icon: 'activity' },
      { role: 'IT / Data Science', description: 'Build a career in software, data, and analytics.', scope: 'Highest-paying non-engineering path.', icon: 'monitor' },
      { role: 'Government Science Services', description: 'Appear for SSC, banking, and state PSC exams.', scope: 'Stable government careers.', icon: 'building' },
      { role: 'Teaching (B.Ed)', description: 'B.Ed after B.Sc. to become a school teacher.', scope: 'Strong demand for science teachers.', icon: 'briefcase' },
      { role: 'Engineering (Lateral Entry)', description: 'LEET/B.Tech lateral entry to engineering.', scope: 'Engineering shortcut.', icon: 'trending-up' },
    ],
    whyMLD: [
      'PCM and PCB combinations with rigorous lab practicals.',
      'Well-equipped Physics, Chemistry, and Biology laboratories.',
      'Personal mentoring and small batch sizes for attention.',
      'Affordable fee structure with scholarships for meritorious students.',
      'Library, computer lab, and access to online learning resources.',
      'Guidance for higher studies and competitive exam preparation.',
    ],
    facilities: [
      { label: 'Physics Lab', icon: 'flask' },
      { label: 'Chemistry Lab', icon: 'flask' },
      { label: 'Biology Lab', icon: 'activity' },
      { label: 'Library', icon: 'book' },
      { label: 'Computer Lab', icon: 'monitor' },
      { label: 'Sports', icon: 'activity' },
    ],
    highlights: [
      { value: '3 yrs', label: 'Degree length' },
      { value: 'PCM/PCB', label: 'Combinations' },
      { value: '10+', label: 'Career paths' },
      { value: 'Lab', label: 'Heavy practicals' },
    ],
    image: scienceImg,
    enquiryLabel: 'Apply for B.Sc. Admission',
    enquiryHref: 'https://mldcollege.academichub.in/',
  },

  // ---------- B.Com ----------
  {
    slug: 'bcom-commerce',
    name: 'B.Com (Bachelor of Commerce)',
    category: 'Undergraduate',
    level: 'Undergraduate',
    duration: '3 years (full-time)',
    eligibility: '12th pass (Commerce preferred; any stream eligible).',
    mode: 'Full-time, on-campus',
    medium: 'Hindi & English',
    institutionSlugs: ['memorial-sansthan-colleges'],
    shortDescription:
      'A 3-year commerce degree covering accounting, taxation, business law, and finance — the gateway to CA, CS, MBA, banking, and corporate careers.',
    overview: [
      'The Bachelor of Commerce (B.Com) is India\'s most popular commerce degree, designed to build a strong foundation in accounting, business law, taxation, economics, finance, and management.',
      'At MLD Memorial Sansthan Colleges, the B.Com programme prepares students for professional courses like CA, CS, CMA, and MBA, and for careers in banking, insurance, financial services, taxation, and corporate accounting.',
    ],
    whatYouLearn: [
      'Financial & corporate accounting',
      'Business & corporate law',
      'Income tax & GST',
      'Auditing and cost accounting',
      'Business economics & management',
      'Banking, insurance and financial markets',
    ],
    careerOptions: [
      { role: 'Chartered Accountant (CA)', description: 'Pursue CA Foundation, Inter, and Final.', scope: 'Most prestigious commerce career.', icon: 'award' },
      { role: 'Banking & Finance', description: 'Bank PO / Clerk, insurance, and financial services.', scope: 'Largest employer.', icon: 'building' },
      { role: 'Company Secretary (CS)', description: 'Pursue CS Foundation, Inter, and Final.', scope: 'High-demand corporate role.', icon: 'briefcase' },
      { role: 'MBA', description: 'CAT / MAT for top B-schools.', scope: 'Corporate leadership track.', icon: 'graduation' },
      { role: 'Accounting & Tax', description: 'Work in accounting firms and corporate finance.', scope: 'Strong demand.', icon: 'monitor' },
      { role: 'Government Exams', description: 'SSC, UPSC, and state PSC commerce roles.', scope: 'Stable government careers.', icon: 'building' },
    ],
    whyMLD: [
      'UGC-pattern B.Com with practical accounting, tax, and law training.',
      'Coaching and guidance for CA / CS / banking exams.',
      'Affordable fee structure with strong ROI.',
      'Well-equipped commerce lab and library.',
      'Internship support in local CA firms and businesses.',
    ],
    facilities: [
      { label: 'Commerce Lab', icon: 'monitor' },
      { label: 'Library', icon: 'book' },
      { label: 'Computer Lab', icon: 'monitor' },
      { label: 'Seminar Hall', icon: 'star' },
    ],
    highlights: [
      { value: '3 yrs', label: 'Degree length' },
      { value: 'CA/CS', label: 'Coaching' },
      { value: '10+', label: 'Career paths' },
      { value: 'Bank', label: 'Ready' },
    ],
    image: commerceImg,
    enquiryLabel: 'Apply for B.Com Admission',
    enquiryHref: 'https://mldcollege.academichub.in/',
  },

  // ---------- BBA ----------
  {
    slug: 'bba',
    name: 'BBA (Bachelor of Business Administration)',
    category: 'Undergraduate',
    level: 'Undergraduate',
    duration: '3 years (full-time)',
    eligibility: '12th pass from a recognised board (any stream).',
    mode: 'Full-time, on-campus',
    medium: 'English & Hindi',
    institutionSlugs: ['memorial-sansthan-colleges'],
    shortDescription:
      'A 3-year professional management degree that builds business, marketing, and leadership skills for the corporate world and your own startup.',
    overview: [
      'The Bachelor of Business Administration (BBA) is a professional undergraduate degree that develops the management, marketing, finance, and leadership skills that employers look for. It is the ideal pre-MBA qualification and a strong launchpad for entrepreneurship.',
      'At MLD Memorial Sansthan Colleges, the BBA combines management theory with case studies, presentations, internships, and live projects — preparing students for entry-level management roles and for higher studies (MBA).',
    ],
    whatYouLearn: [
      'Principles of management & organisational behaviour',
      'Marketing, sales, and digital marketing',
      'Financial and cost accounting',
      'Business communication and soft skills',
      'Entrepreneurship and startups',
      'HR and business law',
    ],
    careerOptions: [
      { role: 'Management Trainee', description: 'Join corporates in sales, marketing, or operations.', scope: 'Most common entry role.', icon: 'briefcase' },
      { role: 'Marketing Executive', description: 'Work in digital marketing, brand, or sales.', scope: 'High demand and growth.', icon: 'trending-up' },
      { role: 'MBA', description: 'Pursue MBA at top Indian or global B-schools.', scope: 'Best for senior management.', icon: 'graduation' },
      { role: 'Bank PO / Govt.', description: 'Banking, SSC, and state PSC management roles.', scope: 'Stable careers.', icon: 'building' },
      { role: 'Entrepreneur', description: 'Start your own business with management know-how.', scope: 'Highest upside.', icon: 'star' },
      { role: 'HR Executive', description: 'Join HR, recruitment, or training teams.', scope: 'Growing corporate function.', icon: 'users' },
    ],
    whyMLD: [
      'Practical, industry-aligned BBA curriculum.',
      'Case studies, presentations, and live business projects.',
      'Internship support with local businesses and startups.',
      'Affordable fees with strong placement guidance.',
      'Clear pathway to MBA and corporate roles.',
    ],
    facilities: [
      { label: 'Management Lab', icon: 'monitor' },
      { label: 'Library', icon: 'book' },
      { label: 'Seminar Hall', icon: 'star' },
      { label: 'Computer Lab', icon: 'monitor' },
    ],
    highlights: [
      { value: '3 yrs', label: 'Degree length' },
      { value: 'MBA', label: 'Ready pathway' },
      { value: '6+', label: 'Career paths' },
      { value: 'Live', label: 'Projects' },
    ],
    image: computerImg,
    enquiryLabel: 'Apply for BBA Admission',
    enquiryHref: 'https://mldcollege.academichub.in/',
  },

  // ---------- BCA ----------
  {
    slug: 'bca',
    name: 'BCA (Bachelor of Computer Applications)',
    category: 'Undergraduate',
    level: 'Undergraduate',
    duration: '3 years (full-time)',
    eligibility: '12th pass from a recognised board (any stream; basic computer knowledge helpful).',
    mode: 'Full-time, on-campus',
    medium: 'English & Hindi',
    institutionSlugs: ['memorial-sansthan-colleges'],
    shortDescription:
      'A 3-year professional degree in computer applications — programming, databases, web, and software development for the IT industry.',
    overview: [
      'The Bachelor of Computer Applications (BCA) is India\'s most popular IT-focused undergraduate degree, equivalent to B.Sc. (CS) for most recruitment and higher-studies purposes. It builds strong programming, database, web, and software-development skills.',
      'At MLD Memorial Sansthan Colleges, the BCA combines computer-science theory with intensive lab work in C, C++, Java, Python, web technologies, databases, and a final project — preparing students for IT jobs, MCA, and the fast-growing tech industry.',
    ],
    whatYouLearn: [
      'Programming in C, C++, Java, Python',
      'Data structures and algorithms',
      'Web development (HTML, CSS, JavaScript)',
      'Databases (SQL) and DBMS',
      'Operating systems and computer networks',
      'Software engineering and project work',
    ],
    careerOptions: [
      { role: 'Software Developer', description: 'Join IT companies as a junior developer.', scope: 'Highest demand in India.', icon: 'monitor' },
      { role: 'Web Developer', description: 'Build websites and web applications for businesses.', scope: 'Strong freelance and job market.', icon: 'trending-up' },
      { role: 'MCA / M.Tech', description: 'Pursue MCA or M.Tech (CS) for senior roles.', scope: 'Best for technical leadership.', icon: 'graduation' },
      { role: 'Data / IT Support', description: 'Work in data entry, IT support, or system administration.', scope: 'Stable entry-level roles.', icon: 'briefcase' },
      { role: 'Govt. IT Roles', description: 'SSC, banking, and state IT roles.', scope: 'Government job security.', icon: 'building' },
      { role: 'Freelance / Startup', description: 'Build apps, websites, and IT services for clients.', scope: 'Entrepreneurial path.', icon: 'star' },
    ],
    whyMLD: [
      'Industry-aligned BCA with a strong lab and project culture.',
      'Well-equipped computer lab with internet and modern software.',
      'Training in current languages and web technologies.',
      'Affordable fee structure with scholarships for meritorious students.',
      'Internship and placement support in local IT companies.',
      'Clear pathway to MCA, MBA, and IT careers.',
    ],
    facilities: [
      { label: 'Computer Lab', icon: 'monitor' },
      { label: 'Internet Lab', icon: 'wifi' },
      { label: 'Library', icon: 'book' },
      { label: 'Project Lab', icon: 'star' },
    ],
    highlights: [
      { value: '3 yrs', label: 'Degree length' },
      { value: '6+', label: 'Languages' },
      { value: 'IT', label: 'Industry ready' },
      { value: 'MCA', label: 'Pathway' },
    ],
    image: computerImg,
    enquiryLabel: 'Apply for BCA Admission',
    enquiryHref: 'https://mldcollege.academichub.in/',
  },

  // ---------- NURSERY & KINDERGARTEN ----------
  {
    slug: 'nursery-kindergarten',
    name: 'Nursery & Kindergarten',
    category: 'School',
    level: 'Pre-Primary',
    duration: '2 years (Nursery + Kindergarten / UKG)',
    eligibility: 'Age 3+ for Nursery; age 4+ for Kindergarten. No prior formal schooling required.',
    mode: 'Full-time, on-campus',
    medium: 'Hindi & English',
    institutionSlugs: ['balika-uchch-madhyamik-academy', 'mld-international-academy'],
    shortDescription:
      'A joyful, play-based early-years programme that builds language, motor, social, and pre-literacy skills in a safe, caring environment.',
    overview: [
      'The Nursery and Kindergarten years are the most important in a child\'s school life. At MLD, our pre-primary programme uses a play-based, activity-driven approach that makes learning fun while building the language, motor, social, and pre-literacy skills children need for a confident start in primary school.',
      'Our trained early-years teachers use stories, rhymes, art, music, and structured play to develop reading-readiness, numeracy, communication, and self-care. Classrooms are bright, safe, and equipped with age-appropriate learning materials.',
    ],
    whatYouLearn: [
      'Pre-reading (phonics, picture books)',
      'Pre-writing and fine-motor skills',
      'Numbers, shapes, colours and patterns',
      'English and Hindi vocabulary',
      'Social skills, sharing, and classroom routines',
      'Art, music, dance, and physical play',
    ],
    careerOptions: [
      { role: 'Confident primary entry', description: 'Children progress smoothly to Class 1 with strong foundational skills.', scope: 'Best outcome of good pre-primary.', icon: 'graduation' },
      { role: 'Strong communication', description: 'Bilingual (Hindi/English) foundation for lifelong learning.', scope: 'Core 21st-century skill.', icon: 'star' },
    ],
    whyMLD: [
      'Trained, caring early-years teachers with low student-teacher ratios.',
      'Safe, CCTV-monitored campus with a dedicated pre-primary block.',
      'Activity-based learning (not rote) — the modern pre-primary standard.',
      'Bilingual exposure (Hindi & English) from day one.',
      'Regular parent-teacher interaction and progress updates.',
      'Affordable fee structure for rural and middle-class families.',
    ],
    facilities: [
      { label: 'Activity room', icon: 'star' },
      { label: 'Play area', icon: 'home' },
      { label: 'Smart classes', icon: 'monitor' },
      { label: 'CCTV campus', icon: 'shield' },
      { label: 'Medical room', icon: 'activity' },
    ],
    highlights: [
      { value: '2 yrs', label: 'Programme length' },
      { value: 'Play', label: 'Based learning' },
      { value: 'Bilingual', label: 'Hindi & English' },
      { value: 'Safe', label: 'CCTV campus' },
    ],
    image: schoolImg,
    enquiryLabel: 'Enquire about Nursery / KG Admission',
    enquiryHref: 'https://mldgirls.mldmemorialsansthan.com/',
  },

  // ---------- PRIMARY SCHOOL ----------
  {
    slug: 'primary-school',
    name: 'Primary School (Class 1–5)',
    category: 'School',
    level: 'Primary',
    duration: '5 years',
    eligibility: 'Age 5+ for Class 1 (age-relaxation as per board norms).',
    mode: 'Full-time, on-campus',
    medium: 'Hindi & English (CBSE) / Hindi (RBSE)',
    institutionSlugs: ['balika-uchch-madhyamik-academy', 'mld-international-academy', 'uchch-madhyamik-academy'],
    shortDescription:
      'A strong primary foundation in languages, mathematics, EVS, and life skills — building confident, curious learners for Class 6 and beyond.',
    overview: [
      'The primary years (Class 1 to 5) build the academic and life foundation that determines a child\'s success in middle school and beyond. At MLD, our primary programme follows the board curriculum (RBSE / CBSE) and goes beyond it with activity-based learning, continuous assessment, and strong reading habits.',
      'Our primary teachers use a mix of textbook learning, worksheets, projects, art-integrated activities, and digital tools to develop language, numeracy, scientific thinking, and communication. Special attention is given to reading, handwriting, and spoken English / Hindi.',
    ],
    whatYouLearn: [
      'Hindi and English (reading, writing, speaking)',
      'Mathematics (number sense, arithmetic, problem solving)',
      'EVS / Science (nature, health, environment)',
      'Social Science (civics, geography basics)',
      'Computer fundamentals (from Class 3)',
      'Art, music, physical education, and life skills',
    ],
    careerOptions: [
      { role: 'Smooth transition to middle school', description: 'Strong academics and confidence for Class 6.', scope: 'Core goal of primary.', icon: 'graduation' },
      { role: 'Strong language foundation', description: 'Bilingual reading and writing skills.', scope: 'Lifelong benefit.', icon: 'book' },
    ],
    whyMLD: [
      'Board-affiliated primary education (RBSE / CBSE) with experienced teachers.',
      'Low student-teacher ratio for personal attention.',
      'Activity-based learning beyond textbooks.',
      'Computer and smart-class exposure from primary years.',
      'Regular tests, parent-teacher meetings, and progress reports.',
      'Affordable fees with scholarships for meritorious students.',
    ],
    facilities: [
      { label: 'Smart classrooms', icon: 'monitor' },
      { label: 'Library', icon: 'book' },
      { label: 'Computer lab', icon: 'monitor' },
      { label: 'Playground', icon: 'activity' },
      { label: 'Medical room', icon: 'activity' },
      { label: 'Transport', icon: 'truck' },
    ],
    highlights: [
      { value: '5 yrs', label: 'Primary level' },
      { value: 'Board', label: 'RBSE / CBSE' },
      { value: 'Activity', label: 'Based' },
      { value: 'Smart', label: 'Classes' },
    ],
    image: classroomImg,
    enquiryLabel: 'Enquire about Primary School Admission',
    enquiryHref: 'https://mldgirls.mldmemorialsansthan.com/',
  },

  // ---------- MIDDLE SCHOOL ----------
  {
    slug: 'middle-school',
    name: 'Middle School (Class 6–8)',
    category: 'School',
    level: 'Middle',
    duration: '3 years',
    eligibility: 'Successful completion of Class 5.',
    mode: 'Full-time, on-campus',
    medium: 'Hindi & English (CBSE) / Hindi (RBSE)',
    institutionSlugs: ['balika-uchch-madhyamik-academy', 'mld-international-academy', 'uchch-madhyamik-academy'],
    shortDescription:
      'A structured middle-school programme that builds strong subject foundations and prepares students for the rigour of secondary school.',
    overview: [
      'Middle school (Class 6 to 8) is the bridge between primary and secondary. At MLD, we use these years to deepen subject understanding, build study habits, and introduce students to lab work, projects, and assessments that prepare them for Class 9 and the board years.',
      'Students study Hindi, English, Mathematics, Science, Social Science, and a third language, along with computer science, art, and physical education. Special attention is given to Mathematics and Science foundations, which are critical for Class 9–10 and competitive exams (Olympiads, NTSE).',
    ],
    whatYouLearn: [
      'Hindi, English, and third language',
      'Mathematics (algebra, geometry, arithmetic)',
      'Science (Physics, Chemistry, Biology basics)',
      'Social Science (History, Geography, Civics)',
      'Computer Science and IT',
      'Art, physical education, and life skills',
    ],
    careerOptions: [
      { role: 'Strong secondary readiness', description: 'Confident transition to Class 9 and board prep.', scope: 'Core goal.', icon: 'graduation' },
      { role: 'Olympiad / Scholarship prep', description: 'Foundation for SOF, NTSE, and other competitive exams.', scope: 'Long-term academic edge.', icon: 'award' },
    ],
    whyMLD: [
      'Strong subject teachers for each middle-school subject.',
      'Mathematics and Science foundation-building focus.',
      'Lab work and projects from Class 6.',
      'Continuous assessment and remedial support.',
      'Affordable fees with scholarships.',
    ],
    facilities: [
      { label: 'Science labs', icon: 'flask' },
      { label: 'Computer lab', icon: 'monitor' },
      { label: 'Library', icon: 'book' },
      { label: 'Playground', icon: 'activity' },
    ],
    highlights: [
      { value: '3 yrs', label: 'Middle level' },
      { value: 'Board', label: 'RBSE / CBSE' },
      { value: 'Lab', label: 'From Class 6' },
      { value: 'Olympiad', label: 'Foundation' },
    ],
    image: labImg,
    enquiryLabel: 'Enquire about Middle School Admission',
    enquiryHref: 'https://mldgirls.mldmemorialsansthan.com/',
  },

  // ---------- SECONDARY ----------
  {
    slug: 'secondary',
    name: 'Secondary (Class 9–10)',
    category: 'School',
    level: 'Secondary',
    duration: '2 years',
    eligibility: 'Successful completion of Class 8.',
    mode: 'Full-time, on-campus',
    medium: 'Hindi & English (CBSE) / Hindi (RBSE)',
    institutionSlugs: ['balika-uchch-madhyamik-academy', 'mld-international-academy', 'uchch-madhyamik-academy'],
    shortDescription:
      'The crucial board years (Class 9–10) — rigorous subject learning, board preparation, and stream counselling for Class 11.',
    overview: [
      'Class 9 and 10 are the most important years of school life — they set the academic foundation for Class 11–12, the board exam, and competitive exams. At MLD, our secondary programme follows the RBSE / CBSE curriculum with a strong focus on Mathematics, Science, and English.',
      'Our teachers combine concept teaching with intensive problem-solving practice, regular tests, and board-pattern revision. From Class 9 itself, students are exposed to board-style assessments and are guided on stream (Science / Commerce / Arts) selection for Class 11.',
    ],
    whatYouLearn: [
      'Hindi, English, and a third language',
      'Mathematics (algebra, geometry, trigonometry, statistics)',
      'Science (Physics, Chemistry, Biology)',
      'Social Science (History, Geography, Civics, Economics)',
      'IT / Computer basics',
      'Physical education and life skills',
    ],
    careerOptions: [
      { role: 'Class 11 (Science)', description: 'Move to Science stream (PCM/PCB) for engineering / medical.', scope: 'Most chosen path.', icon: 'graduation' },
      { role: 'Class 11 (Commerce)', description: 'Move to Commerce for CA, B.Com, BBA.', scope: 'High ROI.', icon: 'briefcase' },
      { role: 'Class 11 (Arts)', description: 'Move to Arts for humanities, civil services prep.', scope: 'Strong long-term option.', icon: 'book' },
      { role: 'Polytechnic / ITI', description: 'Diploma pathways after Class 10.', scope: 'Hands-on careers.', icon: 'tool' },
    ],
    whyMLD: [
      'Board-result focused teaching from Class 9.',
      'Rigorous Mathematics and Science practice.',
      'Regular tests, mock boards, and personal mentoring.',
      'Stream counselling for Class 11 (Science / Commerce / Arts).',
      'Affordable fees with scholarships for toppers.',
    ],
    facilities: [
      { label: 'Science labs', icon: 'flask' },
      { label: 'Maths lab', icon: 'star' },
      { label: 'Library', icon: 'book' },
      { label: 'Mock tests', icon: 'activity' },
    ],
    highlights: [
      { value: '2 yrs', label: 'Board years' },
      { value: 'RBSE/CBSE', label: 'Curriculum' },
      { value: 'Mock', label: 'Board tests' },
      { value: 'Stream', label: 'Counselling' },
    ],
    image: slider4,
    enquiryLabel: 'Enquire about Class 9–10 Admission',
    enquiryHref: 'https://mldgirls.mldmemorialsansthan.com/',
  },

  // ---------- SENIOR SECONDARY ----------
  {
    slug: 'senior-secondary',
    name: 'Senior Secondary (Class 11–12)',
    category: 'School',
    level: 'Senior Secondary',
    duration: '2 years',
    eligibility: 'Class 10 pass (subject combinations as per board rules).',
    mode: 'Full-time, on-campus',
    medium: 'Hindi & English (CBSE) / Hindi (RBSE)',
    institutionSlugs: ['balika-uchch-madhyamik-academy', 'mld-international-academy', 'uchch-madhyamik-academy'],
    shortDescription:
      'Choose your stream — Science, Commerce, or Arts — and prepare for Class 12 boards, JEE/NEET, and a strong college career.',
    overview: [
      'Class 11 and 12 define a student\'s college and career path. At MLD, our senior secondary programme offers the three main streams (Science, Commerce, Arts) under the RBSE / CBSE curriculum, taught by experienced subject specialists.',
      'Alongside the board syllabus, we run focused coaching for JEE (Main), NEET, CLAT, CA Foundation, and other competitive exams. Our goal is to help every student get into a top college — whether engineering, medical, commerce, or humanities.',
    ],
    whatYouLearn: [
      'Science: Physics, Chemistry, Biology / Mathematics, English, optional',
      'Commerce: Accountancy, Business Studies, Economics, English, optional',
      'Arts: History, Geography, Political Science, Sociology / Economics, English',
      'Practical labs (Science) and project work',
      'Competitive exam preparation (JEE / NEET / CA Foundation / CLAT)',
    ],
    careerOptions: [
      { role: 'Engineering (B.Tech)', description: 'JEE Main / Advanced for IITs, NITs, and engineering colleges.', scope: 'Top career path for PCM.', icon: 'graduation' },
      { role: 'Medical (MBBS, BDS, Nursing)', description: 'NEET for MBBS, BDS, BAMS, nursing, and allied health.', scope: 'Top career path for PCB.', icon: 'activity' },
      { role: 'CA / CS / CMA', description: 'CA Foundation for commerce students.', scope: 'Prestigious commerce career.', icon: 'award' },
      { role: 'Law (CLAT)', description: 'CLAT for National Law Universities.', scope: 'High-prestige humanities path.', icon: 'briefcase' },
      { role: 'BBA / B.Com / B.A.', description: 'Undergraduate degrees in management, commerce, arts.', scope: 'Broad and flexible.', icon: 'book' },
      { role: 'Govt. / Defence', description: 'NDA, SSC, banking after Class 12.', scope: 'Stable government careers.', icon: 'building' },
    ],
    whyMLD: [
      'All three streams (Science / Commerce / Arts) with strong subject teachers.',
      'Board-result focused + JEE / NEET / CA Foundation coaching.',
      'Well-equipped Physics, Chemistry, Biology, and Computer labs.',
      'Personal mentoring and small batch sizes.',
      'Affordable fee structure with merit scholarships.',
    ],
    facilities: [
      { label: 'Science labs', icon: 'flask' },
      { label: 'Computer lab', icon: 'monitor' },
      { label: 'Library', icon: 'book' },
      { label: 'Coaching', icon: 'star' },
    ],
    highlights: [
      { value: '2 yrs', label: 'Class 11–12' },
      { value: '3', label: 'Streams' },
      { value: 'JEE/NEET', label: 'Coaching' },
      { value: 'Board', label: 'Focused' },
    ],
    image: slider1,
    enquiryLabel: 'Enquire about Class 11–12 Admission',
    enquiryHref: 'https://mldgirls.mldmemorialsansthan.com/',
  },

  // ---------- PHARMACOLOGY BASICS (Certificate) ----------
  {
    slug: 'pharmacology-basics',
    name: 'Pharmacology Basics (Certificate)',
    category: 'Certificate',
    level: 'Certificate',
    duration: '6 months',
    eligibility: '10th pass from a recognised board.',
    mode: 'Full-time, on-campus',
    medium: 'Hindi & English',
    institutionSlugs: ['pharmacy-college'],
    shortDescription:
      'A short, practical certificate that introduces you to the science of drugs and medicines — the perfect foundation for a career in pharmacy or healthcare.',
    overview: [
      'Pharmacology Basics is a 6-month introductory certificate that gives students a clear, practical understanding of how medicines work in the human body, common drug classifications, dosage forms, and the safe handling of pharmaceutical products.',
      'The course is ideal for students who want to explore the pharmaceutical field before committing to a longer D.Pharma programme, or for healthcare and life-science students who want a strong pharmacology foundation for their further studies.',
    ],
    whatYouLearn: [
      'Introduction to pharmacology and drug action',
      'Common drug classifications and uses',
      'Dosage forms and routes of administration',
      'Basic pharmacy calculations',
      'Safe handling and storage of medicines',
    ],
    careerOptions: [
      { role: 'Pharmacy Assistant', description: 'Work in retail or hospital pharmacies.', scope: 'Immediate employment.', icon: 'briefcase' },
      { role: 'D.Pharma Pathway', description: 'Continue to the 2-year D.Pharma diploma.', scope: 'Clear progression.', icon: 'graduation' },
      { role: 'Medical / Nursing Support', description: 'Strong foundation for medical and nursing studies.', scope: 'Academic edge.', icon: 'activity' },
      { role: 'Pharma Sales / Stock', description: 'Work in pharma distribution and inventory.', scope: 'Entry-level roles.', icon: 'trending-up' },
    ],
    whyMLD: [
      'Short, affordable, and the perfect start to a pharma career.',
      'Taught by experienced D.Pharma faculty.',
      'Hands-on exposure to our pharmaceutics and pharmacology labs.',
      'Clear pathway to the 2-year D.Pharma programme.',
    ],
    facilities: [
      { label: 'Pharmaceutics Lab', icon: 'flask' },
      { label: 'Library', icon: 'book' },
    ],
    highlights: [
      { value: '6 mo', label: 'Length' },
      { value: '10th', label: 'Eligibility' },
      { value: 'Lab', label: 'Exposure' },
      { value: 'D.Pharma', label: 'Pathway' },
    ],
    image: labImg,
    enquiryLabel: 'Apply for Pharmacology Certificate',
    enquiryHref: 'https://mldenquiry.academichub.in/',
  },

  // ---------- B.A. / B.Ed. INTEGRATED ----------
  {
    slug: 'ba-b-ed-integrated',
    name: 'B.A. / B.Ed. (Integrated)',
    category: 'Professional',
    level: 'Integrated Undergraduate',
    duration: '4 years (full-time)',
    eligibility:
      '12th pass from a recognised board with at least 50% marks (45% for reserved categories). Admission as per state / university norms.',
    mode: 'Full-time, on-campus',
    medium: 'Hindi & English',
    institutionSlugs: ['mahila-shikshan-prashikshan-mahavidyalay'],
    shortDescription:
      'A 4-year integrated programme that combines a B.A. degree with a B.Ed. — saving you a full year and preparing you to teach Arts subjects in schools.',
    overview: [
      'The B.A. / B.Ed. Integrated programme is a 4-year course that combines a Bachelor of Arts degree with the Bachelor of Education, allowing students to complete both qualifications in one continuous academic journey instead of the usual 5 years (3 + 2).',
      'At Shri Mishrilal Dubey Mahila Shikshan Prashikshan Mahavidyalay, the programme covers Arts subjects (Hindi, English, History, Political Science, Economics, Geography) along with pedagogy, educational psychology, and 16 weeks of practice teaching in partner schools.',
      'Graduates are eligible to teach Arts / Humanities subjects at secondary and senior secondary levels in government and private schools, and also hold a full B.A. degree for higher studies, civil services, and other careers.',
    ],
    whatYouLearn: [
      'B.A. subjects: Hindi, English, History, Political Science, Economics, Geography',
      'Educational psychology and philosophy of education',
      'Methods of teaching Arts subjects',
      'Pedagogy, assessment, and classroom management',
      'Practice teaching in real schools',
    ],
    careerOptions: [
      { role: 'Arts Teacher (TGT / PGT)', description: 'Teach Arts subjects in secondary and senior secondary schools.', scope: 'High demand for Arts teachers.', icon: 'briefcase' },
      { role: 'Government School Teacher', description: 'Clear REET / CTET for government school positions.', scope: 'Stable government career.', icon: 'building' },
      { role: 'M.A. & Higher Studies', description: 'Pursue M.A. in your subject, then NET / PhD.', scope: 'Academia and research.', icon: 'graduation' },
      { role: 'Civil Services / Govt.', description: 'Strong foundation for RAS, UPSC, SSC, and state PSC exams.', scope: 'Long-term UPSC prep.', icon: 'award' },
      { role: 'School Administrator', description: 'Move into academic coordination and vice-principal roles.', scope: 'Leadership track.', icon: 'star' },
      { role: 'EdTech / Curriculum', description: 'Work with publishers and EdTech on Arts content.', scope: 'Growing industry.', icon: 'monitor' },
    ],
    whyMLD: [
      'Save a full year with the integrated 4-year B.A. + B.Ed. pathway.',
      'NCTE-affiliated with a strong theory + practice balance.',
      'Practice teaching in our own demo schools and partner schools.',
      'Dual qualification (B.A. + B.Ed.) opens more career doors.',
      'Affordable fees with scholarships for meritorious students.',
      'Guidance for REET / CTET and school interviews.',
    ],
    facilities: [
      { label: 'Practice-teaching schools', icon: 'building' },
      { label: 'Psychology Lab', icon: 'activity' },
      { label: 'ICT / Smart classrooms', icon: 'monitor' },
      { label: 'Library', icon: 'book' },
      { label: 'Hostel (Girls)', icon: 'home' },
    ],
    highlights: [
      { value: '4 yrs', label: 'Integrated length' },
      { value: 'B.A.+B.Ed', label: 'Dual degree' },
      { value: '16 wks', label: 'Practice teaching' },
      { value: 'NCTE', label: 'Approved' },
    ],
    image: artsImg,
    enquiryLabel: 'Apply for B.A. / B.Ed. Integrated',
    enquiryHref: 'https://mldcollege.academichub.in/',
  },

  // ---------- B.Sc. / B.Ed. INTEGRATED ----------
  {
    slug: 'bsc-b-ed-integrated',
    name: 'B.Sc. / B.Ed. (Integrated)',
    category: 'Professional',
    level: 'Integrated Undergraduate',
    duration: '4 years (full-time)',
    eligibility:
      '12th pass with Science (PCM / PCB) with at least 50% marks (45% for reserved categories) from a recognised board.',
    mode: 'Full-time, on-campus',
    medium: 'Hindi & English',
    institutionSlugs: ['mahila-shikshan-prashikshan-mahavidyalay'],
    shortDescription:
      'A 4-year integrated B.Sc. + B.Ed. programme that prepares you to become a science teacher — saving a full year and giving you a strong science + pedagogy edge.',
    overview: [
      'The B.Sc. / B.Ed. Integrated programme combines a Bachelor of Science degree with the Bachelor of Education in a single 4-year journey, instead of the conventional 5 years (3 + 2).',
      'At Shri Mishrilal Dubey Mahila Shikshan Prashikshan Mahavidyalay, students study Physics, Chemistry, Mathematics / Biology along with educational psychology, methods of teaching science, and 16 weeks of practice teaching in partner schools.',
      'Graduates are eligible to teach Science and Mathematics at secondary and senior secondary levels, and also hold a full B.Sc. degree for higher studies (M.Sc., research) and STEM careers.',
    ],
    whatYouLearn: [
      'B.Sc. subjects: Physics, Chemistry, Mathematics / Biology + lab work',
      'Methods of teaching Science and Mathematics',
      'Educational psychology and classroom management',
      'Lab pedagogy and science demonstrations',
      'Practice teaching in real schools',
    ],
    careerOptions: [
      { role: 'Science / Maths Teacher (TGT / PGT)', description: 'Teach Science and Maths in secondary and senior secondary schools.', scope: 'Highest demand for science teachers.', icon: 'briefcase' },
      { role: 'Government School Teacher', description: 'Clear REET / CTET for government school positions.', scope: 'Stable government career.', icon: 'building' },
      { role: 'M.Sc. & Research', description: 'Pursue M.Sc. in your subject, then research and PhD.', scope: 'Best for scientists.', icon: 'graduation' },
      { role: 'Lab / EdTech', description: 'Work in science labs, museums, or EdTech content.', scope: 'Growing segment.', icon: 'flask' },
      { role: 'School Administrator', description: 'Move into academic coordination and vice-principal roles.', scope: 'Leadership track.', icon: 'star' },
      { role: 'Civil Services (STEM)', description: 'Strong foundation for science-based UPSC / RAS roles.', scope: 'Long-term UPSC prep.', icon: 'award' },
    ],
    whyMLD: [
      'Integrated 4-year B.Sc. + B.Ed. — save a full year.',
      'Well-equipped Physics, Chemistry, and Biology labs.',
      'NCTE-affiliated with strong theory + practice balance.',
      'Practice teaching in our own demo schools and partner schools.',
      'Dual qualification (B.Sc. + B.Ed.) opens more career doors.',
      'Affordable fees with scholarships for meritorious students.',
    ],
    facilities: [
      { label: 'Science labs', icon: 'flask' },
      { label: 'Practice-teaching schools', icon: 'building' },
      { label: 'ICT / Smart classrooms', icon: 'monitor' },
      { label: 'Library', icon: 'book' },
      { label: 'Hostel (Girls)', icon: 'home' },
    ],
    highlights: [
      { value: '4 yrs', label: 'Integrated length' },
      { value: 'B.Sc.+B.Ed', label: 'Dual degree' },
      { value: '16 wks', label: 'Practice teaching' },
      { value: 'NCTE', label: 'Approved' },
    ],
    image: scienceImg,
    enquiryLabel: 'Apply for B.Sc. / B.Ed. Integrated',
    enquiryHref: 'https://mldcollege.academichub.in/',
  },

  // ---------- D.El.Ed. ----------
  {
    slug: 'd-el-ed',
    name: 'D.El.Ed. (Diploma in Elementary Education)',
    category: 'Professional',
    level: 'Diploma',
    duration: '2 years (full-time)',
    eligibility:
      '12th pass with at least 50% marks (45% for reserved categories) from a recognised board. Admission as per state / NCTE norms.',
    mode: 'Full-time, on-campus',
    medium: 'Hindi & English',
    institutionSlugs: ['mahila-shikshan-prashikshan-mahavidyalay'],
    shortDescription:
      'A 2-year professional diploma that prepares you to become an elementary (primary / upper primary) school teacher — the most in-demand teaching qualification in India.',
    overview: [
      'D.El.Ed. (Diploma in Elementary Education) is a 2-year professional teacher-training programme recognised by NCTE and designed to prepare teachers for Classes 1 to 8. It is the primary qualification for becoming an elementary school teacher in government and private schools.',
      'At Shri Mishrilal Dubey Mahila Shikshan Prashikshan Mahavidyalay, the programme covers child development, pedagogy, language and mathematics teaching, and extensive school internships in our partner elementary schools.',
      'Graduates are eligible to appear for REET and other state TETs, and become primary / upper primary teachers. D.El.Ed. is one of the most accessible and high-employment teaching qualifications in India.',
    ],
    whatYouLearn: [
      'Child development & learning psychology',
      'Pedagogy of Language (Hindi / English)',
      'Pedagogy of Mathematics',
      'Pedagogy of Environmental Studies (EVS)',
      'Inclusive education and classroom management',
      'School internships in elementary schools',
    ],
    careerOptions: [
      { role: 'Primary / Upper Primary Teacher', description: 'Teach Classes 1–8 in government and private schools.', scope: 'Largest teaching segment in India.', icon: 'briefcase' },
      { role: 'Government School Teacher', description: 'Clear REET Level 1 / Level 2 for government school positions.', scope: 'Stable government career.', icon: 'building' },
      { role: 'Pre-Primary / Nursery Teacher', description: 'Work in pre-primary and nursery sections of K-12 schools.', scope: 'Growing early-years segment.', icon: 'star' },
      { role: 'B.Ed. (Lateral)', description: 'Pursue B.Ed. after D.El.Ed. for secondary / senior secondary teaching.', scope: 'Clear academic progression.', icon: 'graduation' },
      { role: 'School Coordinator', description: 'Move into academic coordination and curriculum roles.', scope: 'Leadership track.', icon: 'users' },
      { role: 'EdTech / Publishing', description: 'Work with publishers and EdTech on primary content.', scope: 'Growing industry.', icon: 'monitor' },
    ],
    whyMLD: [
      'NCTE-affiliated 2-year D.El.Ed. programme with a strong practice component.',
      'Dedicated elementary-teacher training faculty.',
      'Internships in our partner elementary schools.',
      'Special coaching for REET and state TETs.',
      'Affordable fees with scholarships for meritorious students.',
      'Safe, supportive women-only campus with hostel.',
    ],
    facilities: [
      { label: 'Practice schools', icon: 'building' },
      { label: 'Psychology Lab', icon: 'activity' },
      { label: 'ICT / Smart classrooms', icon: 'monitor' },
      { label: 'Library', icon: 'book' },
      { label: 'Hostel (Girls)', icon: 'home' },
    ],
    highlights: [
      { value: '2 yrs', label: 'Diploma length' },
      { value: 'NCTE', label: 'Approved' },
      { value: 'Class 1-8', label: 'Teaching levels' },
      { value: 'REET', label: 'Coaching' },
    ],
    image: classroomImg,
    enquiryLabel: 'Apply for D.El.Ed. Admission',
    enquiryHref: 'https://mldcollege.academichub.in/',
  },

  // ---------- SHIKSHA SHASTRI ----------
  {
    slug: 'shiksha-shastri',
    name: 'Shiksha Shastri (B.Ed. Equivalent)',
    category: 'Professional',
    level: 'Diploma',
    duration: '2 years (full-time)',
    eligibility:
      'Acharya / Shastri (traditional Sanskrit / Vedic degree) or equivalent from a recognised university / board, as per NCTE norms.',
    mode: 'Full-time, on-campus',
    medium: 'Hindi & Sanskrit',
    institutionSlugs: ['mahila-shikshan-prashikshan-mahavidyalay'],
    shortDescription:
      'A 2-year professional teacher-training programme equivalent to B.Ed., designed for Shastri / Acharya graduates to become Sanskrit and traditional-subject teachers.',
    overview: [
      'Shiksha Shastri is a 2-year professional teacher-training programme recognised by NCTE as equivalent to B.Ed., designed specifically for graduates of traditional Sanskrit / Vedic universities (Shastri, Acharya) who wish to become school teachers.',
      'At Shri Mishrilal Dubey Mahila Shikshan Prashikshan Mahavidyalay, the programme combines modern educational theory, pedagogy, and practice teaching with a strong focus on Sanskrit, Vedic studies, and traditional Indian knowledge systems.',
      'Graduates are eligible to teach Sanskrit and traditional subjects at secondary and senior secondary levels in government, private, and Sanskrit-medium schools, and to appear for REET / CTET.',
    ],
    whatYouLearn: [
      'Educational psychology and child development',
      'Methods of teaching Sanskrit and traditional subjects',
      'Pedagogy, assessment, and classroom management',
      'Vedic studies and Indian knowledge systems',
      'Practice teaching in partner schools',
    ],
    careerOptions: [
      { role: 'Sanskrit Teacher', description: 'Teach Sanskrit in CBSE, RBSE, and Sanskrit-medium schools.', scope: 'Niche and respected career.', icon: 'book' },
      { role: 'Government School Teacher', description: 'Clear REET / CTET for government school positions.', scope: 'Stable government career.', icon: 'building' },
      { role: 'Vedic School Teacher', description: 'Teach in Vedic pathshalas and traditional gurukuls.', scope: 'Cultural and academic roles.', icon: 'graduation' },
      { role: 'Acharya & Research', description: 'Pursue Acharya (M.A. Sanskrit) and research.', scope: 'Best for academia.', icon: 'star' },
      { role: 'Curriculum / Textbook', description: 'Work with NCERT / state boards on Sanskrit textbooks.', scope: 'High-impact academic work.', icon: 'monitor' },
      { role: 'School Administrator', description: 'Move into school leadership in Sanskrit-medium schools.', scope: 'Leadership track.', icon: 'users' },
    ],
    whyMLD: [
      'NCTE-recognised Shiksha Shastri programme for Shastri / Acharya graduates.',
      'Combines modern pedagogy with traditional Vedic studies.',
      'Practice teaching in our partner Sanskrit and traditional schools.',
      'Affordable fees with hostel and library facilities.',
      'Guidance for REET / CTET and school interviews.',
    ],
    facilities: [
      { label: 'Practice schools', icon: 'building' },
      { label: 'Sanskrit Lab', icon: 'book' },
      { label: 'Library', icon: 'book' },
      { label: 'Hostel (Girls)', icon: 'home' },
    ],
    highlights: [
      { value: '2 yrs', label: 'Diploma length' },
      { value: 'NCTE', label: 'Recognised' },
      { value: 'B.Ed.', label: 'Equivalent' },
      { value: 'Sanskrit', label: 'Focused' },
    ],
    image: slider3,
    enquiryLabel: 'Apply for Shiksha Shastri',
    enquiryHref: 'https://mldcollege.academichub.in/',
  },
];

export const getProgramBySlug = (slug?: string) =>
  PROGRAM_DETAILS.find((p) => p.slug === slug);

export const getProgramsByInstitution = (institutionSlug: string) =>
  PROGRAM_DETAILS.filter((p) => p.institutionSlugs.includes(institutionSlug));

// ---------------------------------------------------------------
// Dean / Principal messages (one per institution) — "From the Principal's Desk"
// Adds the personal, trust-building voice that top education sites use.
// ---------------------------------------------------------------

export interface DeanMessage {
  name: string;
  title: string;
  message: string;
}

export const DEAN_MESSAGES: Record<string, DeanMessage> = {
  'pharmacy-college': {
    name: 'The Principal',
    title: 'Principal, MLD Pharmacy College, Kekri',
    message:
      'At MLD Pharmacy College, we believe a pharmacist is more than a dispenser — they are a healthcare partner in the community. Our D.Pharma programme is designed to give every student strong fundamentals in pharmaceutical sciences, extensive hands-on laboratory practice, and the patient-counselling skills that make a real difference at the chemist counter, in a hospital, or on a production line. We are proud of our alumni serving as registered pharmacists across Rajasthan and the pharmaceutical industry, and we invite you to begin your own journey with us.',
  },
  'mahila-shikshan-prashikshan-mahavidyalay': {
    name: 'The Principal',
    title: 'Principal, Mahila Shikshan Prashikshan Mahavidyalay, Kekri',
    message:
      'Teaching is one of the most noble and impactful professions. At our college, we prepare women to become confident, compassionate, and skilled teachers who shape the future of our communities. With a strong curriculum, dedicated faculty, and 16 weeks of practice teaching in real schools, our B.Ed and integrated programmes equip every student with the pedagogy, subject mastery, and classroom confidence to succeed in government and private schools. We warmly welcome aspiring teachers to join our MLD family.',
  },
  'live-stock-diploma': {
    name: 'The Principal',
    title: 'Principal, Live Stock Assistant Diploma Training Institute, Kekri',
    message:
      'India\u2019s rural economy runs on the strength of its livestock, and trained Live Stock Assistants are the backbone of animal healthcare in every village. Our diploma and certificate programmes are built around real, practical training — from cattle and poultry care to vaccination, first aid, and dairy management — so that every graduate can confidently serve farmers, run a dairy or poultry unit, or join the Animal Husbandry Department. We are committed to making animal-husbandry education accessible, affordable, and life-changing for rural Rajasthan.',
  },
  'memorial-sansthan-colleges': {
    name: 'The Principal',
    title: 'Principal, MLD Memorial Sansthan Colleges, Kekri',
    message:
      'A college education is the foundation of a confident, capable life. At MLD Memorial Sansthan Colleges, we offer a wide range of undergraduate programmes — B.A., B.Sc., B.Com, BBA, and BCA — taught by experienced faculty with a strong focus on conceptual clarity, lab and practical work, and preparation for competitive examinations. Whether your goal is civil services, CA, MBA, engineering, medicine, or a successful career in the private sector, we provide the mentoring, library, and lab facilities to help every student achieve it.',
  },
  'balika-uchch-madhyamik-academy': {
    name: 'The Principal',
    title: 'Principal, Balika Uchch Madhyamik Academy (RBSE), Kekri',
    message:
      'Every girl deserves a school where she feels safe, valued, and inspired to learn. At our Academy, we combine the RBSE curriculum with activity-based learning, computer and smart-class exposure, sports, and a strong value system to help every student grow into a confident, capable young woman. From Nursery through Senior Secondary, our aim is to give each girl the academic foundation and the life skills to succeed in whatever path she chooses next.',
  },
  'mld-international-academy': {
    name: 'The Principal',
    title: 'Principal, MLD International Academy (CBSE), Kekri',
    message:
      'At MLD International Academy, we follow the CBSE curriculum with a modern, activity-driven approach that prepares children for the opportunities of the 21st century. Our classrooms combine strong academics with computers, smart classes, sports, arts, and life skills — so that every child, from Nursery to Class 12, develops the curiosity, confidence, and character to thrive in any school, college, or career they choose.',
  },
  'uchch-madhyamik-academy': {
    name: 'The Principal',
    title: 'Principal, Uchch Madhyamik Academy (RBSE), Kekri',
    message:
      'We are committed to providing every boy with a strong, affordable, and value-based education. Our RBSE-affiliated school combines experienced teachers, well-equipped labs, a library, and a culture of discipline and respect, so that our students not only excel in board exams but also grow into responsible, capable young men ready for the next step in their education and life.',
  },
};

export const getDeanMessage = (institutionSlug: string): DeanMessage | undefined =>
  DEAN_MESSAGES[institutionSlug];

// ---------------------------------------------------------------
// Student / Alumni testimonials — a shared, curated pool.
// Each testimonial is tagged with the program category it fits.
// On each program page we show 3 testimonials matching the category.
// Quotes are honest alumni-voice reflections on learning and campus,
// not on inflated packages or unverifiable claims.
// ---------------------------------------------------------------

export interface Testimonial {
  name: string;
  program: string;
  batch: string;
  category: 'Pharmacy' | 'Education' | 'Livestock' | 'Undergraduate' | 'School';
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  // --- Pharmacy ---
  { name: 'Priya Sharma', program: 'D.Pharma', batch: 'Batch of 2023', category: 'Pharmacy',
    quote: 'The pharmaceutics and pharmacology labs at MLD gave me real hands-on skills. I cleared the State Pharmacy Council registration on my first attempt and now work as a registered pharmacist in Ajmer.' },
  { name: 'Rakesh Meena', program: 'D.Pharma', batch: 'Batch of 2022', category: 'Pharmacy',
    quote: 'What I valued most was the patient-counselling practice and the faculty\u2019s personal attention. The D.Pharma programme prepared me well for both retail and hospital pharmacy.' },
  { name: 'Suman Yadav', program: 'Pharmacology Basics', batch: 'Batch of 2023', category: 'Pharmacy',
    quote: 'The short certificate gave me a clear understanding of how medicines work and confirmed that I wanted to pursue D.Pharma. The MLD faculty guided me through the next steps.' },
  { name: 'Anil Verma', program: 'D.Pharma', batch: 'Batch of 2021', category: 'Pharmacy',
    quote: 'After D.Pharma from MLD, I joined a leading pharma company in the QA team. The practical training and the discipline I learned here made the transition smooth.' },

  // --- Education (B.Ed, D.El.Ed, integrated, Shiksha Shastri) ---
  { name: 'Kavita Joshi', program: 'B.Ed.', batch: 'Batch of 2023', category: 'Education',
    quote: 'The 16 weeks of practice teaching in real schools was the highlight of the B.Ed. programme. By the time I sat for REET, I had already taught in classrooms for four months. MLD prepared me for the real thing.' },
  { name: 'Meena Kumari', program: 'D.El.Ed.', batch: 'Batch of 2022', category: 'Education',
    quote: 'I come from a small village near Kekri, and MLD gave me the chance to become a trained primary teacher. The REET coaching and supportive faculty made all the difference. I now teach at a government school in my district.' },
  { name: 'Pooja Dubey', program: 'B.A. / B.Ed. (Integrated)', batch: 'Batch of 2024', category: 'Education',
    quote: 'Completing my B.A. and B.Ed. together in four years saved me a whole year. The MLD campus is safe, the hostel is comfortable, and the teachers treat every student like family.' },
  { name: 'Sunita Rathore', program: 'B.Ed.', batch: 'Batch of 2021', category: 'Education',
    quote: 'The pedagogy classes and the psychology lab at MLD helped me understand how children learn. Today I confidently teach Class 8 students, and I owe a lot of that to my training here.' },

  // --- Livestock ---
  { name: 'Ramesh Chaudhary', program: 'Live Stock Assistant Diploma', batch: 'Batch of 2023', category: 'Livestock',
    quote: 'The field training and the tie-ups with local dairy cooperatives gave me real experience. After completing the diploma, I started my own small dairy unit with a government-subsidy loan. MLD made it possible.' },
  { name: 'Sangeeta Gurjar', program: 'Dairy & Poultry Management', batch: 'Batch of 2022', category: 'Livestock',
    quote: 'The 6-month certificate was exactly what I needed. I learned the practical side of poultry and dairy farming, and today I run a small poultry unit that supports my family.' },
  { name: 'Manoj Yadav', program: 'Live Stock Assistant Diploma', batch: 'Batch of 2021', category: 'Livestock',
    quote: 'I am now working with the Department of Animal Husbandry in a field dispensary. The diploma from MLD and the exam preparation from the faculty helped me clear the government recruitment.' },

  // --- Undergraduate (B.A., B.Sc., B.Com, BBA, BCA) ---
  { name: 'Vikas Sharma', program: 'B.Sc. (PCM)', batch: 'Batch of 2024', category: 'Undergraduate',
    quote: 'The Physics and Chemistry labs at MLD are well-equipped, and the teachers are very approachable. I cleared JEE Main after Class 12 and am now pursuing B.Tech — MLD gave me the foundation.' },
  { name: 'Neha Jain', program: 'BBA', batch: 'Batch of 2023', category: 'Undergraduate',
    quote: 'BBA at MLD was not just theory — we did case studies, presentations, and a live project with a local business. That practical exposure gave me an edge in my MBA interviews.' },
  { name: 'Arjun Singh', program: 'BCA', batch: 'Batch of 2024', category: 'Undergraduate',
    quote: 'I learned programming in C, Java, Python, and web development with real lab time. After BCA, I joined an IT company as a junior developer. The MLD computer lab and faculty made this possible.' },
  { name: 'Priyanka Meena', program: 'B.Com', batch: 'Batch of 2022', category: 'Undergraduate',
    quote: 'The accounts and tax coaching at MLD, combined with the library, helped me clear the CA Foundation on my first attempt. I am now an article assistant at a CA firm in Jaipur.' },
  { name: 'Rohit Kumar', program: 'B.A.', batch: 'Batch of 2023', category: 'Undergraduate',
    quote: 'My B.A. at MLD, along with the guidance from teachers for the SSC exam, helped me secure a government clerical post. The affordable fees and the supportive campus made higher education possible for me.' },

  // --- School ---
  { name: 'Ananya Sharma', program: 'Senior Secondary (Class 12, Science)', batch: 'Batch of 2024', category: 'School',
    quote: 'The MLD teachers made Physics and Chemistry genuinely interesting. The regular mock tests and the personal mentoring helped me score 91% in Class 12 boards and crack a good engineering college.' },
  { name: 'Harsh Rajawat', program: 'Senior Secondary (Class 12, Commerce)', batch: 'Batch of 2023', category: 'School',
    quote: 'I joined the commerce stream at MLD in Class 11. The Accounts and Business Studies teachers are excellent, and they also guided me for the CA Foundation. I am now a CA student.' },
  { name: 'Ritu Yadav', program: 'Middle School (Class 8)', batch: 'Batch of 2024', category: 'School',
    quote: 'I love coming to school. The science experiments, the computer lab, and the annual function make learning so much fun. My teachers are very supportive.' },
  { name: 'Aman Khan', program: 'Secondary (Class 10, RBSE)', batch: 'Batch of 2024', category: 'School',
    quote: 'The board exam preparation and the doubt-clearing sessions at MLD helped me score 92% in Class 10. The teachers stay after school to help students who need extra time.' },
];

// Map a program to the testimonial category that best fits it.
export const getTestimonialCategory = (
  p: ProgramDetail
): Testimonial['category'] => {
  switch (p.category) {
    case 'Diploma':
      if (p.slug.includes('live-stock') || p.slug.includes('animal-husbandry') || p.slug.includes('dairy') || p.slug.includes('poultry'))
        return 'Livestock';
      if (p.slug === 'd-pharma' || p.slug === 'pharmacology-basics') return 'Pharmacy';
      return 'Education';
    case 'Certificate':
      if (p.slug === 'pharmacology-basics') return 'Pharmacy';
      return 'Livestock';
    case 'Professional':
      return 'Education';
    case 'Undergraduate':
      return 'Undergraduate';
    case 'School':
      return 'School';
    default:
      return 'Undergraduate';
  }
};

export const getTestimonialsForProgram = (p: ProgramDetail): Testimonial[] => {
  const cat = getTestimonialCategory(p);
  return TESTIMONIALS.filter((t) => t.category === cat).slice(0, 3);
};
