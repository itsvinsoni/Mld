import { __setResolver, type Lang } from './i18n';

/* ==========================================================================
   MLD — i18n strings (English + Simple Hindi / Devanagari)
   Technical / standard terms (D.Pharma, B.Ed, PCI, REET, lab, hostel,
   campus, syllabus, faculty, etc.) intentionally stay in English within
   Hindi text — exactly the way natural Hinglish reads.
   ========================================================================== */

type Dict = Record<string, { en: string; hi: string }>;

// All UI strings keyed by dot-path. Components call t('key') or t('key', 'fallback').
export const STRINGS: Dict = {
  /* ---------------- Brand / common ---------------- */
  'brand.name':          { en: 'MLD Memorial Sansthan',                  hi: 'एमएलडी मेमोरियल संस्थान' },
  'brand.tagline':       { en: 'Quality education with values — from schools to colleges and diploma institutes, all under one Sansthan.',
                           hi: 'गुणवत्तापूर्ण शिक्षा और संस्कार — स्कूल से लेकर कॉलेज और डिप्लोमा institute तक, एक ही संस्थान के अंतर्गत।' },
  'brand.location':      { en: 'Kekri, Ajmer, Rajasthan',                 hi: 'केकड़ी, अजमेर, राजस्थान' },
  'brand.shortLoc':      { en: 'Kekri · Rajasthan',                       hi: 'केकड़ी · राजस्थान' },

  /* ---------------- Nav ---------------- */
  'nav.home':            { en: 'Home',           hi: 'मुख्य पृष्ठ' },
  'nav.institutions':    { en: 'Institutions',   hi: 'संस्थान' },
  'nav.about':           { en: 'About',          hi: 'हमारे बारे में' },
  'nav.gallery':         { en: 'Gallery',        hi: 'गैलरी' },
  'nav.messages':        { en: 'Messages',       hi: 'संदेश' },
  'nav.contact':         { en: 'Contact',        hi: 'संपर्क' },
  'nav.courses':         { en: 'Courses',        hi: 'कोर्स' },
  'nav.login':           { en: 'Login',          hi: 'लॉगिन' },
  'nav.adminLogin':      { en: 'Admin Login',    hi: 'एडमिन लॉगिन' },
  'nav.menu':            { en: 'Open menu',      hi: 'मेन्यू खोलें' },
  'nav.close':           { en: 'Close menu',     hi: 'मेन्यू बंद करें' },
  'lang.toggle.toHindi': { en: 'हिं',            hi: 'EN' },
  'lang.toggle.label':   { en: 'Language',       hi: 'भाषा' },

  /* ---------------- Hero ---------------- */
  'hero.badge':          { en: 'Welcome to MLD Memorial Sansthan',       hi: 'एमएलडी मेमोरियल संस्थान में आपका स्वागत है' },
  'hero.line1':          { en: 'Building futures,',                      hi: 'भविष्य बनाते हैं,' },
  'hero.line2':          { en: 'rooted in values.',                      hi: 'मूल्यों की जड़ों के साथ।' },
  'hero.sub':            { en: 'From D.Pharma and B.Ed to Live Stock diploma, schools and colleges — a single Sansthan shaping students of Rajasthan with quality education, modern facilities and personal mentoring.',
                           hi: 'D.Pharma, B.Ed से लेकर Live Stock diploma, स्कूल और कॉलेज तक — एक ही संस्थान राजस्थान के विद्यार्थियों को गुणवत्तापूर्ण शिक्षा, आधुनिक सुविधाएँ और व्यक्तिगत मार्गदर्शन देकर तैयार करता है।' },
  'hero.ctaPrimary':     { en: 'Explore Our Institutions',               hi: 'हमारे संस्थान देखें' },
  'hero.ctaSecondary':   { en: 'Contact Us',                              hi: 'संपर्क करें' },
  'hero.scroll':         { en: 'Scroll',                                  hi: 'नीचे स्क्रॉल करें' },
  'hero.scrollDown':     { en: 'Scroll down',                             hi: 'नीचे स्क्रॉल करें' },

  /* ---------------- Stats strip ---------------- */
  'stats.label':         { en: 'At a Glance',                              hi: 'एक नज़र में' },

  /* ---------------- Institutions section (home) ---------------- */
  'insts.label':         { en: 'Our Institutions',                         hi: 'हमारे संस्थान' },
  'insts.heading':       { en: 'Institutions Run by the Sansthan',         hi: 'संस्थान द्वारा संचालित' },
  'insts.subtext':       { en: 'From schools to colleges and vocational institutes, we run a diverse family of educational institutions committed to quality and values.',
                           hi: 'स्कूल से लेकर कॉलेज और vocational institute तक, हम शिक्षा संस्थानों का एक विविध परिवार चलाते हैं जो गुणवत्ता और मूल्यों के लिए समर्पित है।' },
  'insts.viewDetails':   { en: 'View Details',                             hi: 'विवरण देखें' },
  'insts.viewAll':       { en: 'View All Institutions',                   hi: 'सभी संस्थान देखें' },
  'insts.notFound':      { en: 'Institutions coming soon.',                hi: 'संस्थान जल्द आ रहे हैं।' },

  /* ---------------- About section (home preview) ---------------- */
  'about.label':         { en: 'About the Sansthan',                       hi: 'संस्थान के बारे में' },
  'about.heading':       { en: 'A legacy of learning in Rajasthan',        hi: 'राजस्थान में शिक्षा की विरासत' },
  'about.para1':         { en: 'Shri Mishri Lal Dubey Memorial Sansthan was established with a vision to provide quality education to the students of Rajasthan. From schools to colleges and diploma institutes, our institutions are committed to academic excellence, character building and overall development of students.',
                           hi: 'श्री मिश्री लाल दुबे मेमोरियल संस्थान की स्थापना राजस्थान के विद्यार्थियों को गुणवत्तापूर्ण शिक्षा देने के संकल्प के साथ हुई। स्कूल से लेकर कॉलेज और डिप्लोमा institute तक, हमारे सभी संस्थान academic excellence, चरित्र निर्माण और विद्यार्थियों के समग्र विकास के लिए समर्पित हैं।' },
  'about.learnMore':     { en: 'Learn more about us',                      hi: 'हमारे बारे में और जानें' },
  'about.readMore':      { en: 'Read more',                                hi: 'और पढ़ें' },

  /* ---------------- Gallery section (home) ---------------- */
  'gallery.label':       { en: 'Gallery',                                  hi: 'गैलरी' },
  'gallery.heading':     { en: 'Life at MLD',                              hi: 'एमएलडी में जीवन' },
  'gallery.subtext':     { en: 'Glimpses of our campus, classrooms, events and student life.',
                           hi: 'हमारे campus, कक्षाओं, कार्यक्रमों और विद्यार्थी जीवन की झलक।' },
  'gallery.viewAll':     { en: 'View Full Gallery',                        hi: 'पूरी गैलरी देखें' },
  'gallery.open':        { en: 'Open image',                               hi: 'चित्र खोलें' },
  'gallery.close':       { en: 'Close',                                    hi: 'बंद करें' },

  /* ---------------- Messages section (home) ---------------- */
  'msg.label':           { en: 'Leadership Messages',                      hi: 'नेतृत्व के संदेश' },
  'msg.heading':         { en: 'Words from our leaders',                   hi: 'हमारे नेतृत्व की बात' },
  'msg.subtext':         { en: 'Hear from the people who guide our Sansthan every day.',
                           hi: 'उन लोगों की बात सुनिए जो हमारे संस्थान को रोज़ाना मार्गदर्शन देते हैं।' },
  'msg.viewAll':         { en: 'Read all messages',                        hi: 'सभी संदेश पढ़ें' },

  /* ---------------- Contact CTA (home) ---------------- */
  'contactCta.heading':  { en: 'Have questions? We are here to help.',     hi: 'कोई सवाल है? हम मदद के लिए यहाँ हैं।' },
  'contactCta.subtext':  { en: 'Reach out for admissions, enquiries, or a campus visit. We respond quickly.',
                           hi: 'Admission, पूछताछ या campus visit के लिए संपर्क करें। हम जल्दी जवाब देते हैं।' },
  'contactCta.button':   { en: 'Get in Touch',                             hi: 'संपर्क करें' },

  /* ---------------- Footer ---------------- */
  'footer.quickLinks':   { en: 'Quick Links',                              hi: 'त्वरित लिंक' },
  'footer.ourInsts':     { en: 'Our Institutions',                         hi: 'हमारे संस्थान' },
  'footer.contactInfo':  { en: 'Contact Info',                             hi: 'संपर्क जानकारी' },
  'footer.copyright':    { en: 'All Rights Reserved.',                     hi: 'सर्वाधिकार सुरक्षित।' },
  'footer.crafted':      { en: 'Crafted with',                             hi: '❤️ से बनाया गया' },
  'footer.craftedBy':    { en: 'Academic Hub',                             hi: 'Academic Hub द्वारा' },
  'footer.tagline':      { en: 'Quality education with values, from schools to colleges and diploma institutes across Rajasthan.',
                           hi: 'राजस्थान भर में स्कूल, कॉलेज और डिप्लोमा institute तक — मूल्यों के साथ गुणवत्तापूर्ण शिक्षा।' },

  /* ---------------- About page ---------------- */
  'aboutPage.label':     { en: 'About Us',                                 hi: 'हमारे बारे में' },
  'aboutPage.heading':   { en: 'A Sansthan rooted in values and learning', hi: 'मूल्यों और शिक्षा में गहरी जड़ें रखने वाला एक संस्थान' },
  'aboutPage.sub':       { en: 'Shri Mishri Lal Dubey Memorial Sansthan, Kekri — a registered society running multiple educational institutions across Rajasthan since decades, dedicated to academic excellence, character building and service to the community.',
                           hi: 'श्री मिश्री लाल दुबे मेमोरियल संस्थान, केकड़ी — राजस्थान में दशकों से कई शैक्षणिक संस्थान चलाने वाला एक पंजीकृत society, academic excellence, चरित्र निर्माण और समाज सेवा के लिए समर्पित।' },
  'aboutPage.mission':   { en: 'Our Mission',                              hi: 'हमारा मिशन' },
  'aboutPage.vision':    { en: 'Our Vision',                               hi: 'हमारा vision' },
  'aboutPage.values':    { en: 'Our Values',                               hi: 'हमारे मूल्य' },
  'aboutPage.legacy':    { en: 'Our Legacy',                               hi: 'हमारी विरासत' },

  /* ---------------- Institutions page ---------------- */
  'instsPage.label':     { en: 'All Institutions',                         hi: 'सभी संस्थान' },
  'instsPage.heading':   { en: 'Explore our family of institutions',       hi: 'हमारे संस्थानों के परिवार को जानें' },
  'instsPage.sub':       { en: 'Seven institutions across Rajasthan, from KG schools to D.Pharma, B.Ed and Live Stock diploma — united by one Sansthan and one commitment to quality.',
                           hi: 'राजस्थान भर में सात संस्थान, KG स्कूल से लेकर D.Pharma, B.Ed और Live Stock diploma तक — एक संस्थान और गुणवत्ता के प्रति एक प्रतिबद्धता से जुड़े।' },
  'instsPage.programs':  { en: 'Programmes Offered',                       hi: 'संचालित प्रोग्राम' },
  'instsPage.viewInst':  { en: 'View Institution',                         hi: 'संस्थान देखें' },

  /* ---------------- Institution detail ---------------- */
  'instDetail.about':    { en: 'About this institution',                   hi: 'इस संस्थान के बारे में' },
  'instDetail.programs': { en: 'Programmes Offered',                       hi: 'संचालित प्रोग्राम' },
  'instDetail.explore':  { en: 'Explore Course',                           hi: 'कोर्स देखें' },
  'instDetail.apply':    { en: 'Apply Now',                                hi: 'अभी आवेदन करें' },
  'instDetail.visit':    { en: 'Visit Website',                            hi: 'वेबसाइट देखें' },
  'instDetail.contact':  { en: 'Contact',                                  hi: 'संपर्क' },
  'instDetail.affiliation': { en: 'Affiliation',                           hi: 'संबद्धता' },
  'instDetail.established': { en: 'Established',                            hi: 'स्थापना' },

  /* ---------------- Gallery page ---------------- */
  'galleryPage.label':   { en: 'Campus Gallery',                           hi: 'campus गैलरी' },
  'galleryPage.heading': { en: 'Moments at MLD',                           hi: 'एमएलडी के पल' },
  'galleryPage.sub':     { en: 'Photos from our campus, classrooms, labs, events, sports and student life.',
                           hi: 'हमारे campus, कक्षाओं, labs, कार्यक्रमों, खेल और विद्यार्थी जीवन की तस्वीरें।' },

  /* ---------------- Messages page ---------------- */
  'msgPage.label':       { en: 'Leadership',                               hi: 'नेतृत्व' },
  'msgPage.heading':     { en: 'Words from our leaders',                   hi: 'हमारे नेतृत्व की बात' },
  'msgPage.sub':         { en: 'The vision and philosophy that guide every institution under the Sansthan.',
                           hi: 'वह vision और दर्शन जो संस्थान के हर संस्थान का मार्गदर्शन करते हैं।' },

  /* ---------------- Contact page ---------------- */
  'contactPage.label':   { en: 'Contact Us',                               hi: 'संपर्क करें' },
  'contactPage.heading': { en: "We'd love to hear from you",               hi: 'हम आपसे सुनना चाहेंगे' },
  'contactPage.sub':     { en: 'For admissions, enquiries, campus visits or any questions — write to us and we will get back quickly.',
                           hi: 'Admission, पूछताछ, campus visit या किसी भी सवाल के लिए — हमें लिखें, हम जल्दी जवाब देंगे।' },
  'contactPage.form.name':  { en: 'Full Name',                              hi: 'पूरा नाम' },
  'contactPage.form.namePh': { en: 'Your name',                              hi: 'आपका नाम' },
  'contactPage.form.email': { en: 'Email',                                  hi: 'ईमेल' },
  'contactPage.form.phone': { en: 'Phone',                                  hi: 'फ़ोन' },
  'contactPage.form.phonePh': { en: 'Your phone number',                     hi: 'आपका फ़ोन नंबर' },
  'contactPage.form.subject': { en: 'Subject',                               hi: 'विषय' },
  'contactPage.form.message': { en: 'Your Message',                         hi: 'आपका संदेश' },
  'contactPage.form.messagePh': { en: 'Write your message...',              hi: 'अपना संदेश लिखें...' },
  'contactPage.form.send':  { en: 'Send Message',                           hi: 'संदेश भेजें' },
  'contactPage.form.sending': { en: 'Sending...',                            hi: 'भेजा जा रहा है...' },
  'contactPage.form.thanks': { en: 'Thank you! We will get back to you shortly.', hi: 'धन्यवाद! हम जल्दी आपसे संपर्क करेंगे।' },
  'contactPage.form.thanksSub': { en: "Your message has been received. We'll be in touch soon.",
                                  hi: 'आपका संदेश मिल गया है। हम जल्द ही संपर्क करेंगे।' },
  'contactPage.form.sendEnquiry': { en: 'Send an Enquiry',                  hi: 'पूछताछ भेजें' },
  'contactPage.form.interested': { en: "I'm interested in",                  hi: 'मेरी रुचि है' },
  'contactPage.form.select':    { en: 'Select an option',                   hi: 'एक विकल्प चुनें' },
  'contactPage.form.optAdmission': { en: 'Admission Enquiry',               hi: 'Admission पूछताछ' },
  'contactPage.form.optJob':    { en: 'Job Application',                    hi: 'नौकरी के लिए आवेदन' },
  'contactPage.form.optGeneral': { en: 'General Question',                  hi: 'सामान्य प्रश्न' },
  'contactPage.form.optOther':  { en: 'Other',                              hi: 'अन्य' },
  'contactPage.address':  { en: 'Address',                                  hi: 'पता' },
  'contactPage.phone':    { en: 'Phone',                                    hi: 'फ़ोन' },
  'contactPage.email':    { en: 'Email',                                    hi: 'ईमेल' },
  'contactPage.visit':    { en: 'Visit Us',                                 hi: 'हमसे मिलें' },
  'contactPage.hours':    { en: 'Office Hours',                             hi: 'ऑफिस समय' },
  'contactPage.hoursVal': { en: 'Mon – Sat, 9:00 AM – 5:00 PM',             hi: 'सोम – शनि, सुबह 9:00 – शाम 5:00' },

  /* ---------------- Contact CTA banner (on home) ---------------- */
  'contactCta.eyebrow':    { en: 'Admission & Careers',                     hi: 'Admission और करियर' },
  'contactCta.heading2':   { en: 'Begin your journey with MLD Memorial Sansthan',
                             hi: 'MLD मेमोरियल संस्थान के साथ अपनी यात्रा शुरू करें' },
  'contactCta.notice':     { en: 'Admissions open for 2025–26. Enquire now or visit campus.',
                             hi: '2025–26 के लिए admission खुले हैं। अभी पूछताछ करें या campus visit करें।' },
  'contactCta.admission':  { en: 'Admission Enquiry',                       hi: 'Admission पूछताछ' },
  'contactCta.job':        { en: 'Apply for Job',                           hi: 'नौकरी के लिए आवेदन' },

  /* ---------------- Program detail page ---------------- */
  'prog.notFound':       { en: 'Programme Not Found',                      hi: 'प्रोग्राम नहीं मिला' },
  'prog.notFoundSub':    { en: 'Could not find the programme you were looking for.',
                           hi: 'आप जो प्रोग्राम ढूँढ रहे थे वह नहीं मिला।' },
  'prog.keyFacts':       { en: 'Key Facts',                                hi: 'मुख्य तथ्य' },
  'prog.fact.duration':  { en: 'Duration',                                 hi: 'अवधि' },
  'prog.fact.level':     { en: 'Level',                                    hi: 'स्तर' },
  'prog.fact.eligibility': { en: 'Eligibility',                            hi: 'योग्यता' },
  'prog.fact.mode':      { en: 'Mode',                                     hi: 'मोड' },
  'prog.fact.medium':    { en: 'Medium',                                   hi: 'माध्यम' },
  'prog.fact.category':  { en: 'Category',                                 hi: 'श्रेणी' },
  'prog.dean':           { en: "From the Principal's Desk",                hi: 'प्रिंसिपल की कुर्सी से' },
  'prog.overview':       { en: 'Programme Overview',                       hi: 'प्रोग्राम का परिचय' },
  'prog.aboutThis':      { en: 'About this programme',                     hi: 'इस प्रोग्राम के बारे में' },
  'prog.career':         { en: 'Career Pathways',                          hi: 'करियर के अवसर' },
  'prog.careerSub':      { en: 'Where this programme can take you',        hi: 'यह प्रोग्राम आपको कहाँ ले जा सकता है' },
  'prog.scope':          { en: 'Scope',                                    hi: 'अवसर' },
  'prog.admission':      { en: 'Admissions',                               hi: 'Admission' },
  'prog.howToGet':       { en: 'How to get admitted',                      hi: 'Admission कैसे होगा' },
  'prog.eligibilityLbl': { en: 'Eligibility',                              hi: 'योग्यता' },
  'prog.docs':           { en: "Documents you'll need",                    hi: 'आवश्यक दस्तावेज़' },
  'prog.step.check':     { en: 'Check Eligibility',                        hi: 'योग्यता जाँचें' },
  'prog.step.checkText': { en: 'Review the eligibility criteria (qualification, minimum marks, age) for the course.',
                           hi: 'course के लिए योग्यता (शैक्षिक योग्यता, न्यूनतम अंक, आयु) देखें।' },
  'prog.step.apply':     { en: 'Apply Online / Enquire',                   hi: 'ऑनलाइन आवेदन / पूछताछ' },
  'prog.step.applyText': { en: 'Fill the online enquiry or application form on our admissions portal with your details.',
                           hi: 'हमारे admission portal पर ऑनलाइन enquiry या application form भरें।' },
  'prog.step.docs':      { en: 'Document Verification',                    hi: 'दस्तावेज़ सत्यापन' },
  'prog.step.docsText':  { en: 'Submit required documents (marksheets, ID, photos, transfer/migration certificate) for verification.',
                           hi: 'आवश्यक दस्तावेज़ (marksheet, ID, फोटो, TC/Migration) जमा करें।' },
  'prog.step.counsel':   { en: 'Counselling & Selection',                  hi: 'काउंसलिंग व चयन' },
  'prog.step.counselText': { en: 'Attend counselling/merit-list process (and entrance test, where applicable) for seat allotment.',
                             hi: 'सीट आवंटन के लिए counselling/merit-list (और जहाँ लागू हो entrance test) में शामिल हों।' },
  'prog.step.fee':       { en: 'Fee Payment & Admission',                  hi: 'फीस भुगतान व Admission' },
  'prog.step.feeText':   { en: 'Pay the admission fee, complete enrolment, and join the programme on the notified date.',
                           hi: 'Admission fee भरें, enrolment पूरा करें, और निर्धारित तिथि पर जुड़ें।' },
  'prog.startApp':       { en: 'Start Your Application',                   hi: 'अपना आवेदन शुरू करें' },
  'prog.highlights':     { en: 'Highlights',                               hi: 'विशेषताएँ' },
  'prog.whatLearn':      { en: "What you'll learn",                        hi: 'आप क्या सीखेंगे' },
  'prog.whatLearnSub':   { en: 'A curriculum designed to make you job-ready', hi: 'नौकरी के लिए तैयार करने वाला curriculum' },
  'prog.whyMld':         { en: 'Why MLD',                                  hi: 'MLD क्यों चुनें' },
  'prog.whyMldSub':      { en: 'Seven reasons we are trusted by families across Rajasthan',
                           hi: 'सात कारण जिनकी वजह से राजस्थान भर के परिवार हम पर भरोसा करते हैं' },
  'prog.pillar.quality': { en: 'Quality Education',                        hi: 'गुणवत्तापूर्ण शिक्षा' },
  'prog.pillar.mentor':  { en: 'Personal Mentoring',                       hi: 'व्यक्तिगत मार्गदर्शन' },
  'prog.pillar.facility':{ en: 'Modern Facilities',                        hi: 'आधुनिक सुविधाएँ' },
  'prog.pillar.scholar': { en: 'Scholarship Support',                      hi: 'scholarship सहायता' },
  'prog.pillar.safe':    { en: 'Safe Campus',                              hi: 'सुरक्षित campus' },
  'prog.pillar.outcomes':{ en: 'Career Outcomes',                          hi: 'बेहतर करियर' },
  'prog.pillar.affordable': { en: 'Affordable Fees',                        hi: 'किफायती फीस' },
  'prog.scholarship':    { en: 'Scholarships & Fees',                      hi: 'scholarship और फीस' },
  'prog.scholarSub':     { en: 'Affordable education, real support',       hi: 'किफायती शिक्षा, असली सहारा' },
  'prog.scholar.merit':  { en: 'Merit Scholarship',                        hi: 'मेरिट scholarship' },
  'prog.scholar.meritText': { en: 'For students with strong academic record (80%+ in last qualifying exam).',
                              hi: 'अंतिम योग्यता परीक्षा में 80%+ अंक लाने वाले विद्यार्थियों के लिए।' },
  'prog.scholar.need':   { en: 'Need-Based Aid',                           hi: 'आवश्यकता-आधारित सहायता' },
  'prog.scholar.needText': { en: 'For families with demonstrated financial need. Apply with income certificate.',
                              hi: 'आर्थिक रूप से कमज़ोर परिवारों के लिए। आय प्रमाण पत्र के साथ आवेदन करें।' },
  'prog.scholar.girl':   { en: 'Girl-Child Scholarship',                   hi: 'बेटी scholarship' },
  'prog.scholar.girlText': { en: 'Special fee concession for girl students to encourage higher education.',
                              hi: 'बालिकाओं की उच्च शिक्षा को बढ़ावा देने के लिए विशेष फीस छूट।' },
  'prog.scholar.loan':   { en: 'Education Loan Guidance',                  hi: 'education loan मार्गदर्शन' },
  'prog.scholar.loanText': { en: 'Help with loan applications at nationalised banks — easy EMIs after course completion.',
                              hi: 'राष्ट्रीयकृत बैंकों में loan आवेदन में सहायता — course के बाद आसान EMI।' },
  'prog.facilities':     { en: 'Facilities',                               hi: 'सुविधाएँ' },
  'prog.facility.lab':   { en: 'Modern Labs',                              hi: 'आधुनिक labs' },
  'prog.facility.library': { en: 'Library',                                hi: 'library' },
  'prog.facility.hostel': { en: 'Hostel',                                  hi: 'hostel' },
  'prog.facility.sports': { en: 'Sports',                                  hi: 'खेल' },
  'prog.facility.wifi':  { en: 'Wi-Fi Campus',                             hi: 'Wi-Fi campus' },
  'prog.facility.transport': { en: 'Transport',                             hi: 'transport' },
  'prog.campusLife':     { en: 'Life at MLD',                              hi: 'MLD में जीवन' },
  'prog.campusEvents':   { en: 'Events',                                   hi: 'कार्यक्रम' },
  'prog.campusClubs':    { en: 'Clubs',                                    hi: 'clubs' },
  'prog.campusFests':    { en: 'Cultural Fests',                           hi: 'सांस्कृतिक उत्सव' },
  'prog.testimonials':   { en: 'Voices of Our Students',                   hi: 'हमारे विद्यार्थियों की आवाज़' },
  'prog.testSub':        { en: 'Real students, real journeys from MLD',    hi: 'असली विद्यार्थी, MLD से असली सफ़र' },
  'prog.offeredAt':      { en: 'Offered At',                               hi: 'कहाँ संचालित' },
  'prog.offeredAtSub':   { en: 'This programme is offered at the following institutions',
                           hi: 'यह प्रोग्राम निम्न संस्थानों में संचालित है' },
  'prog.ctaHeading':     { en: 'Ready to start your journey?',             hi: 'अपनी यात्रा शुरू करने के लिए तैयार हैं?' },
  'prog.ctaSub':         { en: 'Take the next step — apply, download the brochure, or talk to a counsellor.',
                           hi: 'अगला कदम उठाएँ — आवेदन करें, brochure डाउनलोड करें, या counsellor से बात करें।' },
  'prog.apply':          { en: 'Apply Now',                                hi: 'अभी आवेदन करें' },
  'prog.brochure':       { en: 'Download Brochure',                        hi: 'brochure डाउनलोड करें' },
  'prog.talk':           { en: 'Talk to Counsellor',                       hi: 'counsellor से बात करें' },
  'prog.back':           { en: 'View All Institutions',                   hi: 'सभी संस्थान देखें' },

  /* ---------------- 404 ---------------- */
  'notFound.heading':    { en: 'Page Not Found',                           hi: 'पृष्ठ नहीं मिला' },
  'notFound.sub':        { en: 'The page you are looking for does not exist or has been moved.',
                           hi: 'आप जो पृष्ठ ढूँढ रहे हैं वह मौजूद नहीं है या हटा दिया गया है।' },
  'notFound.home':       { en: 'Go to Home',                               hi: 'मुख्य पृष्ठ पर जाएँ' },

  /* ---------------- General / actions ---------------- */
  'action.readMore':     { en: 'Read more',                                hi: 'और पढ़ें' },
  'action.viewMore':     { en: 'View more',                                hi: 'और देखें' },
  'action.learnMore':    { en: 'Learn more',                               hi: 'और जानें' },
  'action.explore':      { en: 'Explore',                                  hi: 'देखें' },
  'action.getStarted':   { en: 'Get Started',                              hi: 'शुरू करें' },
  'action.back':         { en: 'Back',                                     hi: 'वापस' },
  'action.submit':       { en: 'Submit',                                   hi: 'जमा करें' },
  'year':                { en: 'Year',                                     hi: 'वर्ष' },
  'years':               { en: 'Years',                                    hi: 'वर्ष' },
  'mode':                { en: 'Full-time',                                hi: 'Full-time' },
  'mediumEn':            { en: 'English / Hindi',                          hi: 'English / हिन्दी' },
};

/* ---------------- Resolver wiring ---------------- */
function resolver(key: string, lang: Lang): string | null {
  const entry = STRINGS[key];
  if (!entry) return null;
  return entry[lang] ?? entry.en ?? null;
}

__setResolver(resolver);
