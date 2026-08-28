/* ============================================================================
   Hindi (Devanagari) translations for program details, dean messages, and
   student testimonials. Technical / standard terms (D.Pharma, B.Ed, PCI,
   REET, lab, hostel, campus, syllabus, faculty, etc.) stay in English
   inside Hindi text — natural Hinglish.
   ============================================================================ */

export interface ProgramTextHi {
  shortDescription?: string;
  overview?: string[];
  whatYouLearn?: string[];
  highlights?: { value: string; label: string }[];
  careerOptions?: { role: string; description: string; scope: string }[];
  whyMLD?: string[];
  facilities?: { label: string; icon: string }[];
}

export const PROGRAM_DETAILS_HI: Record<string, ProgramTextHi> = {
  'd-pharma': {
    shortDescription: 'PCI-affiliated दो साल का D.Pharma — community और hospital pharmacy के लिए modern training।',
    overview: [
      'MLD Pharmacy College में D.Pharma एक PCI-affiliated दो वर्षीय professional diploma है जो विद्यार्थियों को retail pharmacy, hospital pharmacy, और community healthcare के लिए तैयार करता है।',
      'पाठ्यक्रम pharmaceutics, pharmaceutical chemistry, pharmacology, और pharmacognosy को balance करता है — साथ ही practical training, hospital visits, और patient counselling पर ज़ोर देता है।',
      'हमारे dedicated pharmacy faculty और PCI-aligned labs यह सुनिश्चित करते हैं कि हर graduate confident, skilled, और registration-ready हो।',
    ],
    whatYouLearn: [
      'Pharmaceutics & dosage form design',
      'Pharmaceutical chemistry और medicinal chemistry',
      'Pharmacology और drug action',
      'Pharmacognosy (medicines from natural sources)',
      'Community pharmacy और patient counselling',
      'Hospital और clinical pharmacy practice',
      'Drug store management और inventory',
      'Pharmacy law, ethics और the Pharmacy Act',
    ],
    highlights: [
      { value: '2 yrs',  label: 'अवधि' },
      { value: 'PCI',    label: 'मान्यता' },
      { value: '100+',   label: 'labs & resources' },
      { value: '6+',     label: 'departments' },
    ],
    careerOptions: [
      { role: 'Registered Pharmacist (Retail)', description: 'अपनी own medical store चलाएँ या किसी established pharmacy में काम करें।', scope: 'Rajasthan के हर town में high demand' },
      { role: 'Hospital Pharmacist', description: 'Hospital की pharmacy department में dispense और clinical support।', scope: 'Govt और private hospitals दोनों में' },
      { role: 'Medical Representative', description: 'Pharma companies के लिए doctors और chemists से मिलें।', scope: 'Sales + incentive-based growth' },
      { role: 'Higher Studies (B.Pharm)', description: 'D.Pharma के बाद lateral entry से B.Pharm (2nd year)।', scope: 'B.Pharm → M.Pharm → PhD का clear path' },
      { role: 'Pharma Manufacturing', description: 'Production, QA, या QC में production units में काम।', scope: 'Rajasthan का growing pharma sector' },
      { role: 'Community Health', description: 'Public health programs, vaccination drives, और health camps।', scope: 'NGO + Govt health missions' },
    ],
    whyMLD: [
      'PCI-affiliated, दो साल का D.Pharma',
      'Modern pharmaceutics, chemistry और pharmacology labs',
      'Community और patient counselling पर strong focus',
      'Affordable fee structure और scholarship support',
      'Dedicated placement और career guidance cell',
      'Peaceful, disciplined campus — Kekri, Ajmer',
    ],
    facilities: [
      { label: 'Pharmaceutics Lab', icon: 'flask' },
      { label: 'Chemistry Lab', icon: 'beaker' },
      { label: 'Pharmacology Lab', icon: 'activity' },
      { label: 'Library', icon: 'book' },
      { label: 'Computer Lab', icon: 'monitor' },
      { label: 'Sports', icon: 'dumbbell' },
    ],
  },

  'b-ed': {
    shortDescription: 'NCTE-affiliated दो वर्षीय B.Ed — REET/CTET coaching और practice teaching के साथ।',
    overview: [
      'श्री मिश्रीलाल दुबे महिला शिक्षण प्रशिक्षण महाविद्यालय में B.Ed एक NCTE-affiliated दो वर्षीय professional programme है जो महिला candidates को trained teachers बनने के लिए तैयार करता है।',
      'पाठ्यक्रम philosophy, sociology, educational psychology, pedagogy, और practice teaching को balance करता है — साथ ही REET/CTET exam preparation, lesson planning, और school internship पर ज़ोर।',
      'हमारी experienced female faculty और attached practice schools यह सुनिश्चित करती हैं कि हर graduate confident, skilled, और employable हो।',
    ],
    whatYouLearn: [
      'Philosophy, sociology और history of education',
      'Educational psychology और child development',
      'Methods of teaching (आपके subject के अनुसार)',
      'Pedagogy, assessment और evaluation',
      'Educational technology और ICT in classroom',
      'Inclusive education और guidance',
      'Practice teaching — real schools में',
      'Action research और school-based projects',
    ],
    highlights: [
      { value: '2 yrs',  label: 'अवधि' },
      { value: 'NCTE',   label: 'मान्यता' },
      { value: '16+',    label: 'practice schools' },
      { value: '100%',   label: 'REET coaching' },
    ],
    careerOptions: [
      { role: 'REET/CTET — Govt Teacher', description: 'Clear REET/CTET exam और Rajasthan के Govt schools में permanent teacher बनें।', scope: 'सबसे stable, respected career path' },
      { role: 'Private School Teacher', description: 'CBSE, ICSE, या state-board schools में reputed teacher।', scope: 'Tier-1 से tier-3 cities तक' },
      { role: 'Academic Coordinator', description: 'Experience के साथ academic coordinator या HOD बनें।', scope: 'Schools + EdTech दोनों में' },
      { role: 'Private Tutor / Coaching', description: 'अपनी private tutoring या coaching institute शुरू करें।', scope: 'Entrepreneurial, high-income potential' },
      { role: 'EdTech / Content', description: 'Publishers, EdTech platforms, या content houses के साथ काम।', scope: 'Work from home, content creation' },
      { role: 'Higher Studies (M.Ed)', description: 'M.Ed, M.A. (Education), या NET — academic career।', scope: 'College lectureship का path' },
    ],
    whyMLD: [
      'Dedicated women\'s B.Ed college',
      'NCTE-affiliated, 2 साल का programme',
      'Attached practice schools में real teaching',
      'Experienced faculty — deep REET/CTET expertise',
      'REET/CTET exam — special guidance और coaching',
      'Affordable fee — scholarship options',
    ],
    facilities: [
      { label: 'Methodology Lab', icon: 'book' },
      { label: 'Psychology Lab', icon: 'brain' },
      { label: 'Library', icon: 'library' },
      { label: 'Smart Classroom', icon: 'monitor' },
      { label: 'Practice Schools', icon: 'users' },
      { label: 'Seminar Hall', icon: 'mic' },
    ],
  },

  /* ---------- Generic fallback for remaining 18 programs (concise HI) ---------- */
  'live-stock-assistant-diploma': {
    shortDescription: 'Animal Husbandry विभाग, राजस्थान सरकार द्वारा मान्यता प्राप्त दो साल का Live Stock Assistant diploma।',
    overview: [
      'Live Stock Assistant Diploma एक job-oriented दो वर्षीय programme है जो विद्यार्थियों को animal healthcare, dairy management, और poultry farming के लिए तैयार करता है।',
      'Rajasthan की dairy belt में trained Live Stock Assistants की हमेशा demand रहती है — हमारा curriculum इसी को ध्यान में रखकर बनाया गया है।',
    ],
    whatYouLearn: ['Animal anatomy, physiology & health', 'Vaccination और disease prevention', 'Artificial insemination & breeding', 'Fodder cultivation और nutrition', 'Dairy farming और milk production', 'Poultry, goat और sheep management', 'Livestock extension और government schemes', 'Rural entrepreneurship और farm management'],
    highlights: [{ value: '2 yrs', label: 'अवधि' }, { value: 'Govt', label: 'मान्यता' }, { value: '100+', label: 'field visits' }, { value: '90%+', label: 'placement support' }],
    careerOptions: [
      { role: 'Live Stock Assistant (Govt)', description: 'Department of Animal Husbandry, राजस्थान सरकार में सरकारी नौकरी।', scope: 'High demand across districts' },
      { role: 'Dairy Supervisor', description: 'Cooperative dairies (e.g., RCDF) में operations supervise करें।', scope: 'Rajasthan की dairy belt' },
      { role: 'Poultry / Goat Farm Owner', description: 'अपनी commercial poultry या goat farm शुरू करें।', scope: 'Entrepreneurial, scalable' },
      { role: 'Veterinary Assistant', description: 'Veterinarians के साथ clinical practice में सहायता।', scope: 'Private clinics + govt hospitals' },
      { role: 'Agri-Entrepreneur', description: 'Dairy, poultry, feed, या livestock equipment का business।', scope: 'Self-employed path' },
      { role: 'B.V.Sc & A.H.', description: 'Higher studies — full veterinary degree।', scope: '5-yr integrated professional degree' },
    ],
    whyMLD: ['राजस्थान के few dedicated Live Stock institutes में से एक', 'Practical, field-oriented curriculum', 'Local dairy cooperatives के साथ tie-ups', 'Affordable fee + scholarship', 'Dedicated placement support', 'Rajasthan Govt — recognised diploma'],
    facilities: [{ label: 'Animal Anatomy Lab', icon: 'flask' }, { label: 'Demo Farm', icon: 'leaf' }, { label: 'Library', icon: 'book' }, { label: 'Field Vehicles', icon: 'truck' }, { label: 'Computer Lab', icon: 'monitor' }, { label: 'Hostel', icon: 'home' }],
  },

  'ba-arts': {
    shortDescription: 'Rajasthan University से संबद्ध तीन साल का B.A. (Arts) — humanities और social sciences।',
    overview: [
      'B.A. (Arts) तीन वर्षीय undergraduate degree है जो humanities, social sciences, और languages में broad-based education देती है।',
      'Rajasthan University से affiliated — विद्यार्थी अपनी रुचि के अनुसार subjects चुन सकते हैं: History, Political Science, Sociology, Hindi, English, Economics, Geography, और अधिक।',
      'यह प्रोग्राम उन विद्यार्थियों के लिए ideal है जो civil services, teaching, journalism, या higher studies (M.A.) की तैयारी करना चाहते हैं।',
    ],
    whatYouLearn: ['History — Indian और world', 'Political Science और Indian Constitution', 'Sociology और social issues', 'Hindi और English literature', 'Economics — micro और macro', 'Geography — physical और human', 'Philosophy और ethics', 'Public administration basics'],
    highlights: [{ value: '3 yrs', label: 'अवधि' }, { value: 'Uni', label: 'संबद्ध' }, { value: '12+', label: 'subjects' }, { value: 'Affordable', label: 'फीस' }],
    careerOptions: [
      { role: 'Civil Services (RAS / UPSC)', description: 'M.A. + competitive exams की तैयारी — RAS, UPSC, SSC।', scope: 'सबसे respected career' },
      { role: 'Teacher / Lecturer', description: 'B.Ed + TET → school teacher, या M.A. + NET → college lecturer।', scope: 'Schools + colleges + coaching' },
      { role: 'Journalism / Media', description: 'Hindi/English journalism, content writing, reporting।', scope: 'Print, digital, broadcast' },
      { role: 'Social Worker / NGO', description: 'NGOs, CSR, या government welfare programs में काम।', scope: 'High social impact' },
      { role: 'Bank / Govt Exams', description: 'IBPS, SSC CGL, RRB, और state exams — Arts background helpful।', scope: 'Stable govt jobs' },
      { role: 'Higher Studies (M.A.)', description: 'M.A. in chosen subject — UGC NET / PhD का path।', scope: 'Academic + research career' },
    ],
    whyMLD: ['Affordable Rajasthan University degree', 'Experienced faculty across humanities', 'Library और study resources', 'Career counselling for civil services', 'Sports और cultural activities', 'Safe, supportive campus'],
    facilities: [{ label: 'Library', icon: 'book' }, { label: 'Computer Lab', icon: 'monitor' }, { label: 'Seminar Hall', icon: 'mic' }, { label: 'Sports', icon: 'dumbbell' }, { label: 'Cafeteria', icon: 'coffee' }, { label: 'Wi-Fi', icon: 'wifi' }],
  },

  'bsc-science': {
    shortDescription: 'Rajasthan University से संबद्ध तीन साल का B.Sc. — Physics, Chemistry, Biology/Maths।',
    overview: [
      'B.Sc. तीन वर्षीय undergraduate science degree है जो Physics, Chemistry, Biology/Mathematics में strong foundation देती है।',
      'Rajasthan University से affiliated — well-equipped labs, experienced faculty, और PCM/PCB combinations।',
      'Higher studies (M.Sc.), research, या industry — career options बहुत broad हैं।',
    ],
    whatYouLearn: ['Physics — mechanics, optics, modern physics', 'Chemistry — organic, inorganic, physical', 'Biology — botany, zoology (PCM/PCB)', 'Mathematics — calculus, algebra, statistics', 'Practical labs — हर semester', 'Environmental science', 'English और communication skills', 'Computer fundamentals'],
    highlights: [{ value: '3 yrs', label: 'अवधि' }, { value: 'Uni', label: 'संबद्ध' }, { value: '6+', label: 'labs' }, { value: 'PCM/PCB', label: 'streams' }],
    careerOptions: [
      { role: 'M.Sc. + Research', description: 'M.Sc. → NET → PhD → scientist या professor।', scope: 'CSIR, DRDO, teaching' },
      { role: 'B.Ed → School Teacher', description: 'B.Ed + TET → PGT/TGT teacher — high demand।', scope: 'Govt + private schools' },
      { role: 'Pharma / Lab Technician', description: 'Pharma companies, pathology labs, या hospitals में।', scope: 'Stable technical roles' },
      { role: 'IT / Data Science', description: 'Programming + analytics bootcamps — data science roles।', scope: 'High-growth, high-salary' },
      { role: 'Govt Science Jobs', description: 'SSC, RRB, state PSC — scientific/technical posts।', scope: 'Stable govt careers' },
      { role: 'Higher Studies Abroad', description: 'GRE/TOEFL + M.Sc. — US/EU research programs।', scope: 'Global research career' },
    ],
    whyMLD: ['Affordable Rajasthan University degree', 'Modern science labs', 'PCM/PCB — flexible combinations', 'Experienced faculty', 'Higher studies guidance', 'Safe campus environment'],
    facilities: [{ label: 'Physics Lab', icon: 'flask' }, { label: 'Chemistry Lab', icon: 'beaker' }, { label: 'Biology Lab', icon: 'leaf' }, { label: 'Computer Lab', icon: 'monitor' }, { label: 'Library', icon: 'book' }, { label: 'Sports', icon: 'dumbbell' }],
  },

  'bcom-commerce': {
    shortDescription: 'Rajasthan University से संबद्ध तीन साल का B.Com — accounting, finance, और business।',
    overview: [
      'B.Com तीन वर्षीय undergraduate commerce degree है जो accounting, taxation, finance, और business management में foundation देती है।',
      'Rajasthan University से affiliated — CA/CS foundation, banking, या MBA के लिए strong base।',
    ],
    whatYouLearn: ['Financial accounting और reporting', 'Cost और management accounting', 'Business law और company law', 'Taxation — income tax, GST', 'Banking और insurance', 'Auditing basics', 'Business economics', 'Computerised accounting (Tally)'],
    highlights: [{ value: '3 yrs', label: 'अवधि' }, { value: 'Uni', label: 'संबद्ध' }, { value: 'Tally', label: 'training' }, { value: 'Affordable', label: 'फीस' }],
    careerOptions: [
      { role: 'CA / CS / CMA', description: 'B.Com के बाद CA Foundation — chartered accountant का classic path।', scope: 'सबसे respected commerce career' },
      { role: 'Banking (PO / Clerk)', description: 'IBPS PO/Clerk, SBI, RBI — B.Com graduates के लिए ideal।', scope: 'Stable + high salary' },
      { role: 'Accountant / Auditor', description: 'Firms, corporates, या own practice में accounts।', scope: 'Every industry needs accountants' },
      { role: 'MBA (Finance/Marketing)', description: 'CAT/MAT → MBA — finance, banking, या marketing roles।', scope: 'High-growth corporate roles' },
      { role: 'Tax Consultant', description: 'Income tax, GST filing, और compliance services।', scope: 'Own practice or firm' },
      { role: 'Govt / SSC Jobs', description: 'SSC CGL, state PSCs, और bank exams।', scope: 'Stable govt careers' },
    ],
    whyMLD: ['Affordable Rajasthan University degree', 'Tally और computerised accounting', 'Commerce-focused experienced faculty', 'CA/CS coaching guidance', 'Career counselling', 'Strong alumni network'],
    facilities: [{ label: 'Commerce Lab', icon: 'briefcase' }, { label: 'Computer Lab', icon: 'monitor' }, { label: 'Library', icon: 'book' }, { label: 'Seminar Hall', icon: 'mic' }, { label: 'Wi-Fi', icon: 'wifi' }, { label: 'Sports', icon: 'dumbbell' }],
  },

  'bba': {
    shortDescription: 'Rajasthan University से संबद्ध तीन साल का BBA — management और entrepreneurship।',
    overview: [
      'BBA तीन वर्षीय professional undergraduate degree है जो business management, entrepreneurship, और leadership skills develop करती है।',
      'Rajasthan University से affiliated — MBA का strong foundation।',
    ],
    whatYouLearn: ['Principles of management', 'Marketing और sales management', 'Human resource management', 'Financial management basics', 'Business communication', 'Entrepreneurship और startup', 'Computer applications in business', 'Organisational behaviour'],
    highlights: [{ value: '3 yrs', label: 'अवधि' }, { value: 'Uni', label: 'संबद्ध' }, { value: '100+', label: 'recruiters' }, { value: 'Affordable', label: 'फीस' }],
    careerOptions: [
      { role: 'MBA (Top Colleges)', description: 'CAT/MAT/XAT → IIM या top B-schools।', scope: 'High-flying corporate career' },
      { role: 'Business Analyst', description: 'Corporate में data और business analysis roles।', scope: 'IT + consulting firms' },
      { role: 'Marketing Executive', description: 'Brand, digital, या sales marketing — entry level।', scope: 'Every industry' },
      { role: 'HR Executive', description: 'Recruitment, training, payroll — HR department।', scope: 'All companies need HR' },
      { role: 'Startup Founder', description: 'अपनी startup launch करें — BBA builds the mindset।', scope: 'Entrepreneurial path' },
      { role: 'Bank / Sales Jobs', description: 'Banking sales, insurance, financial services।', scope: 'Stable, growth-oriented' },
    ],
    whyMLD: ['Affordable Rajasthan University BBA', 'Case-study based teaching', 'Industry guest lectures', 'Internship support', 'Communication skills training', 'Strong placement assistance'],
    facilities: [{ label: 'Case Study Room', icon: 'briefcase' }, { label: 'Computer Lab', icon: 'monitor' }, { label: 'Library', icon: 'book' }, { label: 'Seminar Hall', icon: 'mic' }, { label: 'Wi-Fi', icon: 'wifi' }, { label: 'Cafeteria', icon: 'coffee' }],
  },

  'bca': {
    shortDescription: 'Rajasthan University से संबद्ध तीन साल का BCA — computer applications और software development।',
    overview: [
      'BCA तीन वर्षीय professional undergraduate degree है जो computer science, programming, और software development में foundation देती है।',
      'Rajasthan University से affiliated — IT industry या MCA/MS के लिए ideal।',
    ],
    whatYouLearn: ['Programming — C, C++, Java, Python', 'Web development (HTML, CSS, JavaScript)', 'Database management (SQL)', 'Data structures और algorithms', 'Operating systems और networking', 'Software engineering', 'Mobile app development basics', 'Project work'],
    highlights: [{ value: '3 yrs', label: 'अवधि' }, { value: 'Uni', label: 'संबद्ध' }, { value: '5+', label: 'languages' }, { value: '100%', label: 'lab access' }],
    careerOptions: [
      { role: 'Software Developer', description: 'Web, mobile, या enterprise software developer।', scope: 'IT companies — high demand' },
      { role: 'MCA / M.Sc. (CS)', description: 'Higher studies — MCA या M.Sc. IT/CS।', scope: 'Advanced roles + research' },
      { role: 'Web Developer / Designer', description: 'Frontend, backend, या full-stack developer।', scope: 'Freelance + full-time' },
      { role: 'Data Analyst', description: 'SQL, Excel, Python — entry-level analytics roles।', scope: 'High-growth field' },
      { role: 'IT Support / Networking', description: 'System admin, network engineer, IT support।', scope: 'Every company needs IT' },
      { role: 'Govt IT Jobs', description: 'SSC, RRB, state IT departments।', scope: 'Stable + pension' },
    ],
    whyMLD: ['Hands-on programming labs', 'Industry-relevant curriculum', 'Project-based learning', 'Web + app development exposure', 'Affordable fees', 'Strong IT placement support'],
    facilities: [{ label: 'Programming Lab', icon: 'monitor' }, { label: 'Web Dev Lab', icon: 'globe' }, { label: 'Database Lab', icon: 'database' }, { label: 'Library', icon: 'book' }, { label: 'Wi-Fi', icon: 'wifi' }, { label: 'Project Room', icon: 'briefcase' }],
  },
};

/* ---------------- Fallback for any program without explicit HI ---------------- */
export const FALLBACK_HI: ProgramTextHi = {
  shortDescription: 'MLD संस्थान द्वारा संचालित एक quality programme।',
  overview: [
    'यह programme MLD मेमोरियल संस्थान द्वारा experienced faculty, modern facilities, और practical training के साथ संचालित है।',
    'हमारा उद्देश्य हर विद्यार्थी को academic excellence और real-world skills देना है।',
  ],
  whatYouLearn: ['Subject fundamentals', 'Practical training', 'Communication skills', 'Project work', 'Industry exposure', 'Personality development'],
  highlights: [{ value: '—', label: 'अवधि' }, { value: 'MLD', label: 'मान्यता' }, { value: '—', label: 'students' }, { value: 'Affordable', label: 'फीस' }],
  careerOptions: [
    { role: 'Industry Jobs', description: 'अपने field में reputed companies में entry-level roles।', scope: 'High demand across sectors' },
    { role: 'Higher Studies', description: 'M.A./M.Sc./M.Com + NET/UPSC की तैयारी।', scope: 'Academic + research' },
    { role: 'Govt Jobs', description: 'SSC, RRB, state PSCs, और competitive exams।', scope: 'Stable careers' },
    { role: 'Self-Employment', description: 'अपना business या practice शुरू करें।', scope: 'Entrepreneurial' },
  ],
  whyMLD: ['Experienced faculty', 'Modern facilities', 'Affordable fees', 'Safe campus', 'Scholarship support', 'Placement guidance'],
  facilities: [{ label: 'Classrooms', icon: 'book' }, { label: 'Library', icon: 'library' }, { label: 'Computer Lab', icon: 'monitor' }, { label: 'Sports', icon: 'dumbbell' }, { label: 'Transport', icon: 'truck' }, { label: 'Wi-Fi', icon: 'wifi' }],
};

/* ============================================================================
   Dean messages (Hindi)
   ============================================================================ */
export interface DeanMessageHi {
  name: string;
  title: string;
  message: string;
}

export const DEAN_MESSAGES_HI: Record<string, DeanMessageHi> = {
  'pharmacy-college': {
    name: 'डॉ. राकेश मीणा',
    title: 'Principal, MLD Pharmacy College',
    message: 'MLD Pharmacy College में हमारा मानना है कि pharmacy सिर्फ medicine dispense करना नहीं, बल्कि patient care की कला है। हमारे विद्यार्थी सिर्फ D.Pharma की degree नहीं, बल्कि community की सेवा की भावना लेकर निकलते हैं। हमारी PCI-aligned labs, अनुभवी faculty, और hospital training ऐसी generation तैयार करते हैं जो राजस्थान के हर गाँव-शहर में responsible pharmacy practice दे सके। आइए, इस यात्रा का हिस्सा बनें।',
  },
  'mahila-shikshan-prashikshan-mahavidyalay': {
    name: 'डॉ. सुनीता शर्मा',
    title: 'Principal, महिला B.Ed महाविद्यालय',
    message: 'शिक्षा सबसे शक्तिशाली हथियार है जिससे आप दुनिया बदल सकते हैं। हमारे महिला B.Ed महाविद्यालय में हम हर विद्यार्थी को वह confidence, knowledge, और skill देते हैं जो उन्हें एक great teacher बनाती है। REET/CTET coaching, practice teaching, और experienced female faculty — सब मिलकर एक ऐसा वातावरण बनाते हैं जहाँ हर महिला अपनी full potential realize करे और अगली पीढ़ी को inspire करे।',
  },
  'live-stock-diploma': {
    name: 'डॉ. अनिल वर्मा',
    title: 'Coordinator, Live Stock Diploma Institute',
    message: 'India की rural economy livestock की strength पर टिकी है, और trained Live Stock Assistants हर गाँव के animal healthcare की रीढ़ हैं। हमारे diploma और certificate programmes real, practical training पर focus करते हैं — cattle और poultry care से लेकर vaccination, first aid, और dairy management तक — ताकि हर graduate confidently किसानों की सेवा कर सके, अपनी dairy या poultry unit चला सके, या Animal Husbandry Department में जुड़ सके। हम rural Rajasthan के लिए animal-husbandry education को accessible, affordable, और life-changing बनाने के लिए committed हैं।',
  },
  'memorial-sansthan-colleges': {
    name: 'प्रो. मीना कुमारी',
    title: 'Principal, Memorial Sansthan Colleges',
    message: 'हमारे colleges — BA, BSc, BCom, BBA, BCA — हर विद्यार्थी को एक strong academic foundation और real-world skills देने के लिए समर्पित हैं। Rajasthan University से affiliated, experienced faculty, modern labs, और affordable fees के साथ, हम यह सुनिश्चित करते हैं कि हर विद्यार्थी अपनी रुचि और talent के अनुसार अपना career बना सके। Higher studies, competitive exams, या direct jobs — हम हर रास्ते पर मार्गदर्शन देते हैं।',
  },
  'balika-uchch-madhyamik-academy': {
    name: 'श्रीमती कविता जोशी',
    title: 'Principal, Balika Uchch Madhyamik Academy',
    message: 'हर बेटी एक quality education deserve करती है। हमारी बालिका अकादमी एक safe, nurturing, और academic-focused environment देती है जहाँ बेटियाँ KG से Class 12 तक confident और skilled बनती हैं। हमारी trained female teachers, modern teaching methods, और emphasis on values — सब मिलकर एक ऐसी generation तैयार करते हैं जो अपने परिवार, community, और देश को proud बनाए।',
  },
  'mld-international-academy': {
    name: 'श्री राजेश पाटिल',
    title: 'Principal, MLD International Academy',
    message: 'MLD International Academy में हम holistic education पर believe करते हैं — academics, sports, arts, और values सब साथ। English medium, smart classrooms, और experienced faculty के साथ, हम हर विद्यार्थी को future-ready बनाते हैं। हमारा focus critical thinking, creativity, और character पर है — ताकि हमारे विद्यार्थी competitive exams और life दोनों में succeed करें।',
  },
  'uchch-madhyamik-academy': {
    name: 'श्रीमती पूजा मीणा',
    title: 'Principal, Uchch Madhyamik Academy',
    message: 'RBSE से affiliated हमारा co-educational school academic rigor, discipline, और values पर founded है। Class 1 से 12 तक, हम हर विद्यार्थी को strong fundamentals, exam preparation, और life skills देते हैं। हमारी goal है कि हर विद्यार्थी school से confident, knowledgeable, और responsible निकले — चाहे वे higher studies करें, competitive exams दें, या skill-based careers चुनें।',
  },
};

/* ============================================================================
   Testimonials (Hindi) — keyed by id
   ============================================================================ */
export const TESTIMONIALS_HI: Record<string, { name: string; role: string; quote: string }> = {
  t1:  { name: 'प्रिया शर्मा',     role: 'D.Pharma, Batch 2022',  quote: 'MLD Pharmacy College में patient-counselling practice और faculty का personal attention सबसे valuable था। D.Pharma programme ने मुझे retail और hospital pharmacy दोनों के लिए अच्छी तरह तैयार किया।' },
  t2:  { name: 'राकेश मीणा',      role: 'D.Pharma, Batch 2021',  quote: 'PCI-affiliated labs और pharmacology की practical training ने मुझे अपनी medical store confidently चलाने के लिए तैयार किया। अब मैं Kekri में एक established pharmacy चलाता हूँ।' },
  t3:  { name: 'सुमन यादव',       role: 'D.Pharma, Batch 2023',  quote: 'Faculty supportive थी और placement cell ने hospital pharmacy में मेरी पहली job दिलाई। D.Pharma के बाद B.Pharm (lateral entry) करने की clear guidance मिली।' },
  t4:  { name: 'अनिल वर्मा',       role: 'Pharmacology Basics',     quote: 'Pharmacology basics का foundation मज़बूत बनाने में MLD की teaching approach बहुत effective है। Real examples और lab work से concepts clear होते हैं।' },
  t5:  { name: 'कविता जोशी',      role: 'B.Ed, Batch 2022',       quote: 'महिला B.Ed महाविद्यालय का experience life-changing रहा। REET coaching, practice teaching, और supportive faculty ने मुझे confident teacher बनाया। अब मैं एक CBSE school में teaching कर रही हूँ।' },
  t6:  { name: 'मीना कुमारी',     role: 'B.Ed, Batch 2021',       quote: 'Practice schools में real classroom experience मिलना सबसे अच्छा हिस्सा था। Lesson planning और pedagogy की training ने मेरी teaching को strong बनाया।' },
  t7:  { name: 'पूजा शर्मा',      role: 'B.Ed, Batch 2023',       quote: 'Experienced female faculty और attached practice schools ने मुझे REET clear करने और Govt teacher बनने का confidence दिया। MLD ने मेरा career shape किया।' },
  t8:  { name: 'सुनीता राठौर',    role: 'D.El.Ed, Batch 2022',    quote: 'D.El.Ed programme ने मुझे primary teacher बनने के लिए तैयार किया। Child psychology और pedagogy की classes सबसे helpful रहीं।' },
  t9:  { name: 'मनोज कुमार',      role: 'Live Stock Diploma, 2022', quote: 'Live Stock Diploma ने मुझे Animal Husbandry Department में सरकारी नौकरी दिलाई। Field visits और practical training सबसे valuable थी।' },
  t10: { name: 'रामप्रसाद जाट',   role: 'Live Stock Diploma, 2021', quote: 'दो साल का programme real, field-oriented था। Vaccination, artificial insemination, और dairy management की hands-on training मिली। अब मैं अपनी dairy चलाता हूँ।' },
  t11: { name: 'गीता देवी',       role: 'Animal Husbandry Basics', quote: 'Rural women के लिए यह course बहुत useful है। मैंने अपनी poultry unit शुरू की और अब अच्छी कमाई कर रही हूँ।' },
  t12: { name: 'विकास सैनी',     role: 'Dairy & Poultry Mgmt',    quote: 'Dairy और poultry management की training ने मुझे RCDF में supervisor बनने में मदद की। MLD का diploma respected है।' },
  t13: { name: 'अंकित जोशी',     role: 'B.A., Batch 2023',        quote: 'BA Arts ने मुझे civil services (RAS) की तैयारी के लिए broad foundation दिया। History, Political Science, और Sociology के teachers excellent हैं।' },
  t14: { name: 'नेहा पाटिल',     role: 'B.Sc., Batch 2022',       quote: 'Physics, Chemistry, और Biology labs well-equipped हैं। Faculty supportive थी और M.Sc. + NET की clear guidance मिली।' },
  t15: { name: 'हर्ष माहेश्वरी', role: 'B.Com, Batch 2023',       quote: 'B.Com ने मुझे CA Foundation clear करने के लिए strong base दिया। Tally और practical accounting की classes सबसे helpful रहीं।' },
  t16: { name: 'शिवानी राठौर',   role: 'BBA, Batch 2022',         quote: 'BBA ने मुझे business और leadership skills सिखाई। Case studies और presentations ने confidence build किया। अब मैं MBA कर रही हूँ।' },
  t17: { name: 'राहुल चौधरी',    role: 'BCA, Batch 2023',         quote: 'BCA में programming, web development, और projects पर strong focus है। अब मैं एक IT company में software developer हूँ।' },
  t18: { name: 'किरण मीणा',      role: 'Secondary (10th), 2023',  quote: 'MLD International Academy ने मुझे 10th board exam में excellent marks दिलाए। Teachers supportive और disciplined environment था।' },
  t19: { name: 'अभिषेक सिंह',    role: 'Senior Secondary (12th), 2022', quote: '11th और 12th में Science stream की preparation ने मुझे JEE और NEET की तैयारी के लिए base दिया। Faculty experienced है।' },
  t20: { name: 'रिया शर्मा',     role: 'Middle School (8th), 2023', quote: 'School का environment safe और supportive है। Teachers हर student को individually attention देते हैं।' },
};
