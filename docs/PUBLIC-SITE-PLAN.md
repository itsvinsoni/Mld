# Shri Mishri Lal Dubey Memorial Sansthan — Public Website Build Plan

**Document Version:** 1.0
**Prepared by:** Web Development Team (AI Studio / DSH Agent)
**Target Project:** `Mld` (AI Studio app, Vite + React + TypeScript + Tailwind)
**Reference site (legacy):** https://mldmemorialsansthan.com/
**Brand Direction:** White + Orange (inherited from the existing CRM theme)
**Status:** DRAFT FOR REVIEW

---

## Table of Contents

1. Executive Summary
2. Project Goals & Objectives
3. Success Metrics (KPIs)
4. Current State Assessment
5. Brand Identity & Design System
6. Target Audience & User Personas
7. Information Architecture & Site Map
8. Page-by-Page Breakdown
9. Component Library
10. Animation & Interaction Design System
11. Responsive & Cross-Device Strategy
12. Technology Stack & Code Architecture
13. Routing & CRM Integration
14. Content Strategy & Copywriting
15. SEO, Performance & Analytics
16. Accessibility (A11y) Guidelines
17. Security Considerations
18. Work Breakdown Structure & Timeline
19. Testing & Quality Assurance
20. Deployment & Versioning
21. Future Enhancements & Roadmap
22. Risks, Assumptions & Mitigations
23. Appendix: Mock Data Sources, References

---

## 1. Executive Summary

The Shri Mishri Lal Dubey (MLD) Memorial Sansthan is an educational society based in Kekri,
Ajmer district, Rajasthan, India. It runs multiple educational institutions, including schools,
colleges, a pharmacy college, and skill-development diploma institutes. The organization currently
exposes a public-information website at `https://mldmemorialsansthan.com/`. That website is a
static, server-rendered ASP.NET-style page built on older technologies (Bootstrap 5, global CSS
variables, inline-style carousels). It functions as a "digital brochure": it communicates the
institutions run by the sansthan, leadership messages, a photo gallery, and contact information.

Separately, the organization has commissioned a modern **CRM / ERP application** (the current
`Mld` codebase) to manage students, faculty, fees, colleges, courses, library books, reports,
and settings. That CRM is a Vite + React + TypeScript application styled with Tailwind CSS and
it adopts an **orange-brand identity** (the tailwind config exposes `brand.orange: #F97316`,
`brand.orange-light`, `brand.orange-dark`, and a slate secondary colour).

This document provides the **complete, comprehensive plan** to build a brand-new set of
**public-facing website pages** for the sansthan that:

- Presents the organization and its institutions in a modern, polished, and credible way.
- Adopts the same **white + orange** brand identity already used inside the CRM, so that the
  public website and the logged-in ERP feel like one coherent product family.
- Is beautiful, fast, accessible, and responsive across desktop, tablet, and mobile.
- Contains rich **animations and micro-interactions** (scroll-reveal, hover states, counters,
  carousels, lightbox, marquee) to make the site feel premium and engaging, without sacrificing
  performance or usability.
- Can be extended page by page (Home, About, Institutions, Gallery, Messages, Contact) and
  integrated with the existing CRM login flow.

This document is the **single source of truth** for the build. It will be used by developers,
designers, the client (sansthan leadership), and QA. It is intentionally verbose so that every
decision is captured and nothing is left to guesswork.

---

## 2. Project Goals & Objectives

### 2.1 Primary Goals

1. **Establish a credible digital presence.** Replace the legacy brochure with a modern website
   that builds trust with prospective students, parents, and the community.
2. **Showcase the institutions.** Clearly present every institution run by the sansthan (schools,
   colleges, pharmacy, diploma/vocational, and teacher-training institutes) with relevant details.
3. **Match the CRM brand.** Use the same white + orange design system (colours, typography,
   spacing, radius, shadows, and iconography) so the transition from public site to the ERP is
   seamless and familiar.
4. **Provide a delightful experience.** Incorporate tasteful animations and micro-interactions
   that communicate a premium, modern institution while remaining accessible and performant.
5. **Serve as a gateway into the CRM.** Include a clean, clearly-visible **"Login" / "Admin"
   button** in the public navbar that routes staff and faculty into the ERP login, so the public
   site and the CRM feel like one product family.

### 2.2 Secondary Goals

- Improve discoverability through on-page SEO (semantic headings, meta tags, structured data).
- Reduce page weight and improve Core Web Vitals (LCP, CLS, INP) by optimising assets and
  relying on modern CSS.
- Print and social-share friendly layouts.
- Establish a reusable component library so future pages (Admissions, Results, News, Notice
  Board, Alumni, Careers) can be added quickly.

### 2.3 Non-Goals (this phase)

- No payments or admissions form processing in this phase (forms will be "contact us only" and
  use mailto/placeholder hooks until a backend is wired).
- No multi-user content management (CMS) in this phase; content is code-defined mock data that
  can later be swapped for CMS/API data.
- No multilingual localisation beyond English + future-friendly structure for Hindi.

---

## 3. Success Metrics (KPIs)

| Metric | Target |
| --- | --- |
| Desktop Lighthouse Performance | ≥ 90 |
| Mobile Lighthouse Performance | ≥ 85 |
| Accessibility (Lighthouse) | ≥ 95 |
| Best Practices (Lighthouse) | ≥ 95 |
| SEO (Lighthouse) | ≥ 95 |
| Average LCP | < 2.5 s |
| CLS | < 0.10 |
| INP | < 200 ms |
| Mobile bounce rate (after launch, 30 days) | < 55% |
| Average session duration | > 90 s |
| Institution card click-through | > 30% of visitors |
| "Contact / Apply" click-through | > 5% of visitors |

---

## 4. Current State Assessment

### 4.1 Legacy Website Analysis

From the reference site we extracted the following content and structural inventory:

- **Title:** "Shri Mishri Lal Dubey Memorial Sansthan, Kekri"
- **Navigation:** Home, About, Institutions, Gallery, Messages, Contact, Admin
- **Hero:** A slider/carousel with institution photos and the tagline "Shri Mishri Lal Dubey
  Memorial Sansthan is a society which runs multiple educational institutions across Rajasthan,
  providing quality education to students." plus a "Apply for Job" CTA and a "विद्यारंभ संस्कार
  एवं सरस्वती पूजन" (Vidyarambh Sanskar & Saraswati Poojan) notice.
- **Institutions section:** A grid of six prominent institutions:
  1. Shri Mishri Lal Dubey Balika Uchch Madhyamik Academy (Girls' Senior Secondary Academy) —
     links: Admission Enquiry, Admission Form, School Website, Mobile App, ERP Login.
  2. MLD International Academy — same link set.
  3. Shri Mishri Lal Dubey Uchch Madhyamik Academy — same link set.
  4. Shri Mishri Lal Dubey Memorial Sansthan Colleges, Kekri — Admission Enquiry, ERP Login.
  5. MLD Live Stock Assistant Diploma Training Institute Kekri (Ajmer) — Admission Enquiry,
     ERP Login.
  6. MLD Pharmacy College Training Institute Kekri (Ajmer) — 2 Year Diploma (D.Pharma), Visit
     Web Page, Student List 2023-24, Student List 2024-25, Staff List.
  - Plus "Shri Mishrilal Dubey Mahila Shikshan Prashikshan Mahavidyalay, Kekri" (run by the
    sansthan) offering B.Ed., B.A./B.Ed., B.Sc./B.Ed., D.El.Ed., Shiksha Shastri.
- **About section:** A paragraph describing the establishment and mission, focusing on academic
  excellence, character building, modern curriculum while preserving cultural values, and the
  success of alumni.
- **Gallery:** A photo gallery of campus/event images (curated using many local image paths).
- **Messages from Leadership:** Three cards — Principal's Message ("Leading with Excellence in
  Education"), Chairman's Message ("Vision for a Brighter Future", tagged to **C.P. Dubey**,
  Chairman), and Director's Message ("Innovation in Education", tagged to **Avinash Dubey**,
  Director). Also mentions the legacy of the founders.
- **Footer:** About tagline, Quick Links (Home, About, Institutions, Gallery, Messages,
  Contact), Our Institutions list, Contact Info (Kekri, Ajmer, Rajasthan, India; phone
  +91 9462456778; email mldmemorialsansthan@gmail.com), social follow, and a "© Copyright 2025
  Academic Hub. All Rights Reserved. Technical Solutions Provided by Academic Hub" credit.
- **Design constants:** Primary colour `#000000` (black), secondary `#ffd700` (gold), light and
  dark text variants, Lato font, Font Awesome icons, Bootstrap 5.

### 4.2 Existing CRM Codebase

- **Stack:** Vite + React 19 + TypeScript 5.8 + Tailwind (CDN) + Recharts (via import map).
- **Entry:** `index.html` → `index.tsx` → `App.tsx`.
- **Structure:** `components/` (Login, Sidebar, Header, icons), `views/` (DashboardHome,
  StudentManagement, FeeManagement, CollegeManagement, CourseManagement, FacultyManagement,
  LibraryManagement, ReportsView, SettingsView).
- **Routing:** Currently **state-based** — `App.tsx` holds `currentUser` and `activeView`;
  if `currentUser` is null it renders `<LoginScreen>`, otherwise it renders the CRM shell
  (Sidebar + Header + active view).
- **Data:** Static mock data in `constants.ts` (users, students, faculty, fees, notices, colleges,
  courses, books) typed in `types.ts`.
- **Brand (CRM):** Orange primary (`#F97316`), orange-light (`#FFEDD5`), orange-dark
  (`#D97706`), slate secondary (`#64748B`). Light/dark theme toggling via a `dark` class.

### 4.3 Gap Summary

The legacy public site (a) looks dated, (b) uses a black/gold palette that diverges from the new
CRM, (c) is not responsive-first / modern, (d) lacks animations and micro-interactions, and
(e) is not componentised, so it is hard to maintain. The CRM (a) is powerful but requires a
login, (b) has no public "marketing" face.

**The build bridges this gap:** a modern, orange-brand, highly-animated public website that
complements the CRM and reuses its visual language.

---

## 5. Brand Identity & Design System

Given the client direction "white + orange, as in the CRM", the public website will use the CRM's
exact brand tokens and extend them into a full visual language.

### 5.1 Colour Palette

| Token | Hex | Usage |
| --- | --- | --- |
| `brand.orange` | `#F97316` | Primary accent, CTAs, highlights, brand marks |
| `brand.orange-light` | `#FFEDD5` | Soft backgrounds, hover tints, badges |
| `brand.orange-dark` | `#D97706` | Hover state for primary, gradients, emphasis |
| `brand.secondary` | `#64748B` | Secondary text, muted elements, borders |
| `surface.white` | `#FFFFFF` | Primary page background, cards |
| `light.background` | `#F1F5F9` | Subtle section backgrounds |
| `light.textPrimary` | `#1E293B` | Primary headings/body text |
| `light.textSecondary` | `#64748B` | Secondary body text |
| `light.border` | `#E2E8F0` | Divider and card borders |
| `dark.*` | `#0F172A` / `#1E293B` / `#F1F5F9` / `#94A3B8` / `#334155` | (Optional) dark-mode tokens for future |

**Brand rule:** Orange is used *sparingly but confidently* — for primary CTAs, active nav states,
icon accents, key numbers, and hover highlights. White (and light slate) dominate the surfaces.
Never use orange for large text blocks at small sizes (contrast); reserve orange for short
headings, accents, and interactive elements.

### 5.2 Gradient / Brand Mark

A subtle **orange gradient** (`#F97316 → #D97706`) is used for the primary "Apply / Login" CTA
backgrounds and for the signature underline/highlight under key headings. The logo is a rounded
"MLD" monogram (or the institution emblem) in orange with a white background.

### 5.3 Typography

- **Primary (UI/body):** `Inter` — weights 400, 500, 600, 700, 800. Inter is the CRM font and
  gives a clean, modern, professional feel.
- **Display (headings):** `Playfair Display` — weights 600, 700, 800. Used for large serif
  hero/display headings to convey prestige and tradition (education = heritage). This provides a
  deliberate contrast to the utilitarian Inter and adds elegance.
- **Support / Hero tagline:** `Poppins` — light 300/400 for certain hero/feature text where a
  geometric softness is desired.
- **Scale:** Establish a modular scale: 12/14/16/18/20/24/30/36/48/60/72. Headings use
  clamp() for fluid typography so they scale gracefully with viewport.
- **Line-height:** body 1.6, headings 1.1–1.2.

### 5.4 Spacing & Layout Grid

- 4px spacing base (Tailwind default scale). Sections use generous vertical padding
  (`py-16 md:py-24 lg:py-28`) for an airy premium feel.
- Max content width: `max-w-7xl` (1280px) with horizontal `px-4 md:px-6 lg:px-8`.
- Consistent **section header pattern:** small uppercase orange "section-label" (with letter
  spacing) → an H2 serif heading → a short supporting subtext → a gold/orange divider or accent.

### 5.5 Radius & Shadows

- Border-radius: small `rounded-lg` (12px) for cards, `rounded-xl` (16px) for feature panels, full
  `rounded-full` for pills/avatars/buttons.
- Card shadow: soft `shadow-lg` with subtle orange-tinted glow on hover
  (`0 20px 45px rgba(249,115,22,0.12)`). Buttons use a soft orange shadow and lift on hover.

### 5.6 Iconography

- Lightweight inline SVG icon set (home, graduation cap, book, flask, stethoscope/medicine,
  users, quote, phone, email, map-pin, clock, arrow-right, chevron, menu, close, external-link,
  check, share). Inline SVGs keep the bundle small and colours controllable via `currentColor`.
- Icons are tinted orange for accents and slate for neutral.

### 5.7 Motion & Interaction Tokens

- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint-ish) for reveals; default
  transition 0.3s for hovers.
- **Durations:** reveal 0.8s; hover/transform 0.3s; marquee 40s linear; ken-burns 18s;
  float 6s.
- **Reduced motion:** honour `prefers-reduced-motion: reduce` to disable transforms/transitions.

---

## 6. Target Audience & User Personas

### 6.1 Prospective Students (age 16–22, Rajasthan)

Wants to find which institutions exist, what courses are offered, admission process, and fee
information. Values clear, quickly-scannable institution cards and strong visuals. Likely on a
mobile phone.

### 6.2 Parents / Guardians (age 35–55)

Wants reassurance: reputation, faculty quality, facilities, values, and safety. Responds well to
leadership messages, gallery photos, and "quality education" messaging.

### 6.3 Prospective Staff / Teachers

Wants to apply for jobs ("Apply for Job" CTA) and learn about the working environment, existing
staff, and benefits.

### 6.4 Current Students / Faculty (existing ERP users)

Needs a quick, branded doorway into the ERP login. Should feel continuity between the public
site and the CRM.

### 6.5 Community / Government / Partners

Wants institutional credibility, contact details, and proof of operation (gallery, staff lists,
student lists).

---

## 7. Information Architecture & Site Map

Given the requirement for a true **multipage website** (each institution gets its own page, plus
dedicated pages for About, Gallery, Messages, and Contact) with a **100% conversion focus**, the
recommended model for release is a **History-API router** driving distinct pages with **clean URLs
(no `#`)**. See Section 13 for the routing implementation.

### 7.1 Site Map (shipped in Phase 1 — multipage release)

```
/                         Home (landing)
├── Hero
├── Stats Strip
├── Institutions preview  (6 cards + "View All")
├── About / Why Choose Us preview
├── Gallery preview
├── Messages preview
└── Contact CTA

/institutions            All institutions listing (page hero + grid + marquee)
/institutions/:slug      Single institution detail (per college / school / pharmacy / etc.)
/about                   Full About + Mission & Vision
/gallery                 Full gallery + lightbox
/messages                Full leadership messages carousel
/contact                 Full contact + enquiry form
/admin                   CRM login (existing LoginScreen, then CRM shell)
*                         404 page
```

Each institution (`INSTITUTIONS` in `pages/data.ts`) has a `slug`, and the detail page renders:
a branded hero, quick-action/Admission buttons (including external "Admission Form", "School
Website", "ERP Login", and downloadable student/staff lists), highlight stats, an about block with
facilities, a programmes/courses list, links to other institutions, and a conversion CTA.

### 7.2 Site Map (Phase 2 — optional dedicated routes)

```
/
├── Home
├── /institutions        → dedicated page (cards with detail)
├── /institutions/:slug  → single institution detail
├── /about               → full about + vision + founders
├── /gallery             → full gallery grid + lightbox
├── /messages            → leadership messages (full)
├── /contact             → contact form + map + info
├── /admissions          → admission enquiry form
├── /careers             → apply for job form
├── /news                → notice board / announcements
/admin                 → CRM
```

This document primarily plans Phase 1, while structuring the component library so Phase 2 routes
can be added with minimal refactoring.

---

## 8. Page-by-Page Breakdown

### 8.1 Hero Section (Home)

**Purpose:** Instantly communicate who the sansthan is and offer primary actions.

**Design:**
- A tall full-viewport hero with an orange-tinted dark gradient overlay over an image or an
  animated gradient mesh background (with a subtle **ken-burns** zoom on the background image).
- **Eyebrow badge:** "SHRI MISHRI LAL DUBEY MEMORIAL SANSTHAN · KEKRI" in a pill with an
  uppercase, letter-spaced style.
- **Main heading (serif, large):** "Educating Rajasthan — Building Brighter Futures." followed by
  the institution tagline.
- **Subheading (sans):** the legacy copy — "A society which runs multiple educational
  institutions across Rajasthan, providing quality education to students."
- **CTAs:** Primary "Explore Our Institutions" (orange gradient button) and secondary "Contact
  Us" / "Apply for Job" (outline button).
- **Floating decorative elements:** a few translucent orange blobs with a slow `float` animation.
- **Scroll indicator:** a small animated chevron "scroll to explore".

**Interactions:** On load, hero text animates in (staggered `rise`). The scroll indicator gently
bobs.

**Key Content Strings (reused from legacy):**
- "Shri Mishri Lal Dubey Memorial Sansthan, Kekri"
- "Shri Mishri Lal Dubey Memorial Sansthan is a society which runs multiple educational
  institutions across Rajasthan, providing quality education to students."
- Notice: "विद्यारंभ संस्कार एवं सरस्वती पूजन" (Vidyarambh Sanskar & Saraswati Poojan) — displayed
  as a highlight/ticker.

### 8.2 Stats Strip (Quick Facts)

**Design:** A row of animated counters (0 → target) over an orange gradient band or on a light
card band.

**Proposed stats** (est., replace with real data): Institutions (6+), Students (3,000+), Faculty
(50+), Years of Legacy (20+). Numbers count up on scroll into view. Each stat uses the big orange
gradient numeral, a label, and a small icon.

**Interactions:** `IntersectionObserver` triggers the count-up. A thin orange underline animates
under each stat.

### 8.3 Our Institutions Section

**Purpose:** Present each institution as a clickable, attractive card with an action set.

**Design:**
- **Section header:** label "OUR INSTITUTIONS", H2 "Institutions Run by the Sansthan".
- **Grid:** responsive `grid` — 1 col on mobile, 2 on tablet, 3 on desktop. Cards are white on a
  light slate background (contrast against the dark hero for rhythm).
- **Card anatomy:** top thumbnail image (with hover zoom), an icon badge, institution name
  (bold), short description/type, and a set of action links ("Admission Enquiry", "Admission
  Form", "Visit Site", "ERP Login", "Staff List", "Student List").
- **Card variant:** Each card looks up a "type" (School / College / Pharmacy / Diploma /
  Teacher-Training) and displays a corresponding accent icon and a small orange type pill.
- **Marquee strip:** Under the grid, an animated marquee of the institution names scrolls
  horizontally and pauses on hover.

**Institution data** (from legacy):
1. Shri Mishri Lal Dubey Balika Uchch Madhyamik Academy — Girls' senior secondary school.
2. MLD International Academy — international-curriculum school.
3. Shri Mishri Lal Dubey Uchch Madhyamik Academy — senior secondary school.
4. Shri Mishri Lal Dubey Memorial Sansthan Colleges, Kekri — degree colleges.
5. MLD Live Stock Assistant Diploma Training Institute Kekri (Ajmer) — vocational diploma.
6. MLD Pharmacy College Training Institute Kekri (Ajmer) — 2-year D.Pharma diploma; also
   "Student List 2023-24", "Student List 2024-25", "Staff List".
7. (Bonus) Shri Mishrilal Dubey Mahila Shikshan Prashikshan Mahavidyalay, Kekri — B.Ed.,
   B.A./B.Ed., B.Sc./B.Ed., D.El.Ed., Shiksha Shastri (teacher training).

**Interactions:** Hover lifts the card (`card-glow`), image zooms, arrows in action links slide.
Each card uses `rise` stagger on reveal.

### 8.4 About the Sansthan Section

**Purpose:** Tell the story, mission, and values.

**Design:**
- Two-column layout (text left, visual/image right, or vice versa).
- **Label:** "ABOUT US". **H2:** "A Legacy of Quality Education".
- **Body copy** (adapted from legacy): "Shri Mishri Lal Dubey Memorial Sansthan was established
  with a vision to provide quality education to the students of Rajasthan. Our institutions are
  committed to academic excellence, character building, and overall development of students. With
  a team of dedicated educators and state-of-the-art facilities, we strive to create an
  environment that fosters learning, innovation, and growth. Our curriculum is designed to meet
  the challenges of the modern world while preserving our cultural values. Over the years, our
  institutions have produced numerous successful alumni who have excelled in various fields and
  are contributing to the society in meaningful ways."
- **Value badges / feature list:** "Academic Excellence", "Character Building", "State-of-the-Art
  Facilities", "Cultural Values", "Modern Curriculum", "Successful Alumni".
- **Visual:** An illustrative collage of student/campus imagery with a floating "20+ Years"
  circular badge. Optionally an audio/video placeholder.

**Interactions:** Content reveals left/right (`reveal-left`/`reveal-right`). The feature list
items each fade in staggered.

### 8.5 Photo Gallery Section

**Purpose:** Show campus life, events, and facilities to build trust.

**Design:**
- **Label:** "PHOTO GALLERY". **H2:** "Life at MLD Memorial Sansthan".
- **Grid:** masonry-style responsive grid of images (6–12 placeholder images, using
  `picsum.photos` seeds for demo and real asset URLs later).
- **Hover:** image zooms and an orange gradient overlay fades in with a "View" icon and caption.
- **Lightbox:** clicking opens a full-screen lightbox with prev/next arrow, close button, caption,
  and keyboard navigation (Escape / arrows). Backdrop fade-in, image zoom-in.
- **Filters (optional Phase 2):** category chips (Campus, Events, Labs, Sports, Library).

**Interactions:** Cards stagger on scroll; lightbox animates open/close; keyboard supported.

### 8.6 Messages from Leadership Section

**Purpose:** Humanise the institution through leadership quotes.

**Design:**
- **Label:** "MESSAGES FROM LEADERSHIP". **H2:** "Voices of Leadership".
- Three **quote cards** (or a carousel): Principal's Message, Chairman's Message, Director's
  Message. Each card has a large decorative quote mark (orange), the message text (italic or
  serif), and a footer with name + role + monogram avatar.
- Optional **auto-rotating carousel** with prev/next and dots, or a responsive three-card grid.
- **Content** (from legacy):
  - **Principal's Message — "Leading with Excellence in Education":** "Education is not the
    filling of a pail, but the lighting of a fire. At MLD Memorial Sansthan, we strive to ignite
    that fire in every student, nurturing their curiosity and empowering them to become lifelong
    learners. Our dedicated faculty and comprehensive curriculum ensure that each student receives
    the guidance and support they need to excel academically and develop into responsible
    citizens." — Principal, MLD Institutions.
  - **Chairman's Message — "Vision for a Brighter Future":** "Our institutions are built on the
    foundation of providing quality education that transforms lives. We believe in creating an
    environment where students can discover their potential, develop critical thinking skills,
    and embrace values that will guide them throughout their lives. The legacy of our founders
    inspires us to continue our commitment to educational excellence and community service." —
    C.P. Dubey, Chairman, MLD Memorial Sansthan.
  - **Director's Message — "Innovation in Education":** "In today's rapidly changing world,
    education must evolve to prepare students for the challenges of tomorrow. At MLD Memorial
    Sansthan, we are committed to implementing innovative teaching methodologies and integrating
    technology to enhance learning experiences. Our focus is on developing well-rounded
    individuals who possess not only academic knowledge but also the skills and values necessary
    to succeed in life." — Avinash Dubey, Director, MLD Memorial Sansthan.

**Interactions:** Cards reveal staggered. If carousel, smooth fade/slide transition between
active and inactive cards.

### 8.7 Contact / Apply CTA Section

**Purpose:** Convert interest into action and provide contact details.

**Design:**
- An orange gradient panel ("Admission / Job Enquiry") with a headline and CTAs: "Admission
  Enquiry", "Apply for Job". Plus a banner/notice strip for the "विद्यारंभ संस्कार एवं सरस्वती
  पूजन" event.
- Below, a **contact block**: address, phone (+91 9462456778), email
  (mldmemorialsansthan@gmail.com), and a simple enquiry form (name, phone, email, interest,
  message) that currently uses a `mailto:` fallback or is disabled-with-hook to a backend. Form
  validation with inline messages.

**Interactions:** Focus states with orange ring; submit button shows a temporary success state.

### 8.8 Navbar (site header)

**Purpose:** Persistent navigation + the gateway into the CRM.

**Design:**
- **Sticky top nav**, transparent over the hero and turning into a solid white (with subtle
  shadow / blur) on scroll (`navbar-scrolled`).
- **Left:** the orange MLD monogram logo + "MLD Memorial Sansthan" wordmark.
- **Center/right (desktop):** links — Home, About, Institutions, Gallery, Messages, Contact
  (smooth-scroll to anchors).
- **Actual CTA:** a distinct orange **"Login" / "Admin"** button (pill) that routes to `/admin`.
  This is intentionally visible and brands the CRM entry point.
- **Mobile:** a hamburger opens a slide-down panel with the links plus the Login button.

**Interactions:** Nav links underline in orange on hover/active; the Login button lifts with an
orange glow on hover; the mobile menu animates open/closed.

### 8.9 Footer

**Design:** Dark slate footer (or light) with columns: (a) brand + tagline + social icons, (b)
Quick Links (Home, About, Institutions, Gallery, Messages, Contact), (c) Our Institutions list,
(d) Contact Info. Bottom bar: "© Copyright 2025 MLD Memorial Sansthan · All Rights Reserved" and
optional "Technical Solutions by Academic Hub" (kept as a credit placeholder).

**Interactions:** Link hover slides or underlines in orange; back-to-top button appears on
scroll.

---

## 9. Component Library

All public components live under `pages/` (IMPORTANT: not `public/`, which Vite reserves for
static assets served at root). Reusable primitives:

| Component | File | Description |
| --- | --- | --- |
| `PublicLayout` | `pages/PublicLayout.tsx` | Navbar + main slot + Footer + BackToTop |
| `Navbar` | `pages/PublicLayout.tsx` (or split) | Sticky transparent→solid on scroll, mobile menu, hamburger |
| `Footer` | `pages/PublicLayout.tsx` | Footer columns, social, back-to-top |
| `HomePage` | `pages/HomePage.tsx` | Composes all home sections |
| `HeroSection` | `pages/sections/HeroSection.tsx` | Hero + stats |
| `StatsStrip` | `pages/sections/StatsStrip.tsx` | Animated counters |
| `InstitutionsSection` | `pages/sections/InstitutionsSection.tsx` | Cards + marquee |
| `InstitutionCard` | `pages/sections/InstitutionCard.tsx` | Single card |
| `AboutSection` | `pages/sections/AboutSection.tsx` | Story + features |
| `GallerySection` | `pages/sections/GallerySection.tsx` | Grid + filters |
| `Lightbox` | `pages/sections/Lightbox.tsx` | Full-screen viewer |
| `MessagesSection` | `pages/sections/MessagesSection.tsx` | Leadership cards/carousel |
| `ContactSection` | `pages/sections/ContactSection.tsx` | CTA + form + contact info |
| `Icon` | `pages/icons.tsx` | Inline SVG icon set |
| `useReveal` / `useInView` | `pages/hooks.ts` | IntersectionObserver reveal hook |
| `useCountUp` | `pages/hooks.ts` | Animated counter hook |
| `SectionHeading` | `pages/SectionHeading.tsx` | label + h2 + subtext pattern |
| public.css | `pages/public.css` | Global public styles & animations |

Each component is a named export, typed with `React.FC` (or plain function) and props interfaces,
so it can be reused for Phase 2 pages.

---

## 10. Animation & Interaction Design System

Animations are **the differentiator** for this build. The system balances delight and
performance (transform/opacity only; no layout thrash).

### 10.1 Scroll Reveal (onLoad / onScroll)

- `useInView(ref, options): boolean` wraps `IntersectionObserver` (threshold 0.15, `rootMargin:
  0px 0px -10% 0px`), with fallback to always-visible if unsupported.
- Applied classes: `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-visible`.
- Elements with `reveal` start at `opacity:0; translateY(40px)` and transition to visible.
- Staggering: per-card `transition-delay` via inline style `(index * 60ms)`.

### 10.2 Animated Counters

- `useCountUp(target, duration, started)`: uses `requestAnimationFrame` with ease-out; formats
  number with a suffix (e.g., "3,000+"). Starts when the strip enters viewport.

### 10.3 Marquee

- A duplicated list of institution names inside a flex track; `.marquee` translates `-50%` over
  40s linearly, infinite; paused on hover. Purely CSS for performance.

### 10.4 Hover Micro-interactions

- Buttons: lift `-translate-y-0.5` + stronger orange shadow.
- Cards: translateY(-8) + orange-tinted shadow + border highlight.
- Images: `scale(1.05)` zoom with `transition 0.5s`.
- Nav links: orange underline scale-x from 0 → 1.
- Action links: arrow `translate-x-1` on hover.

### 10.5 Background / Ambient Motion

- Hero background: subtle `kenburns` zoom (18s alternate).
- Decorative blobs: `float` (6s ease-in-out infinite).
- Gradient meshes: subtle animated hue/position via `background-position` keyframes.

### 10.6 Lightbox

- Backdrop `fadeIn` 0.3s; image `zoomIn` 0.35s. Close on backdrop click / Escape; prev/next via
  arrow keys and buttons.

### 10.7 Loading / Entrance

- Each section uses a lightweight entrance (`.rise`) triggered on mount or on reveal.

### 10.8 Reduced Motion

- `@media (prefers-reduced-motion: reduce)` disables all reveal transforms/transitions and the
  ambient/marquee animations to respect user preference and vestibular safety.

---

## 11. Responsive & Cross-Device Strategy

- **Mobile-first** CSS via Tailwind breakpoints: `sm` (640), `md` (768), `lg` (1024), `xl` (1280).
- **Hero:** `min-h-[100svh]`; fluid heading via `clamp()`; CTAs stack on small screens.
- **Institution grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
- **About:** `grid lg:grid-cols-2`; stacks on mobile.
- **Gallery:** `columns-1 sm:columns-2 lg:columns-3` (CSS columns for masonry).
- **Messages:** `grid-cols-1 md:grid-cols-3` or carousel.
- **Navbar:** desktop horizontal; mobile hamburger + slide-down panel with animated children.
- **Tap targets:** ≥ 44×44px. Touch feedback via `active:scale-95`.
- **Fonts:** fluid `clamp()` on display headings; body 16px min.
- **Images:** `responsive` via `w-full h-cover` + `object-cover`; `loading="lazy"` on below-fold
  images; explicit width/height or aspect-ratio to avoid CLS.

---

## 12. Technology Stack & Code Architecture

### 12.1 Stack (inherited / reused from CRM)

- **Framework:** React 19 (`react`, `react-dom`).
- **Build:** Vite 6 (`@vitejs/plugin-react`).
- **Language:** TypeScript 5.8 (strict).
- **Styling:** Tailwind CSS via CDN (already configured in `index.html`) + custom `public.css`
  for animations. (Tailwind CDN is fine for AI Studio; for production build the config could be
  compiled, but we keep CDN to match the existing setup.)
- **Visualisation:** Recharts (via import map) — not needed for public pages but available.
- **Icons:** Inline SVGs.

### 12.2 Directory Structure (target)

```
Mld/
├── index.html          (entry; brand config; Tailwind; fonts; meta)
├── index.tsx           (React root)
├── App.tsx             (router: public vs CRM)
├── types.ts
├── constants.ts        (mock data; add PUBLIC data here)
├── public/             (STATIC assets only: logo.svg, images)  ← NO .tsx here
├── pages/              (PUBLIC pages — components)
│   ├── public.css
│   ├── PublicLayout.tsx
│   ├── HomePage.tsx
│   ├── icons.tsx
│   ├── hooks.ts
│   ├── SectionHeading.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── StatsStrip.tsx
│       ├── InstitutionsSection.tsx
│       ├── InstitutionCard.tsx
│       ├── AboutSection.tsx
│       ├── GallerySection.tsx
│       ├── Lightbox.tsx
│       ├── MessagesSection.tsx
│       └── ContactSection.tsx
├── components/         (CRM — Login, Sidebar, Header, icons)
└── views/              (CRM views)
```

### 12.3 HTML/CSS Notes

- Add `pages/public.css` import in `HomePage.tsx` or `PublicLayout.tsx` (or in `index.tsx`).
- Keep the Tailwind config (already in `index.html`) and extend with any needed tokens.

---

## 13. Routing & CRM Integration

### 13.1 History-API routing (clean URLs, no `#`)

Because the project has no router and the CRM uses state-based nav, the simplest robust model is a
tiny custom router in `pages/router.tsx` backed by the **History API** (`pushState`/`popstate`),
giving **clean URLs without `#`**:

- `useRoute()` returns the current path (`/`, `/institutions/...`), listening to `popstate`.
- `getSegments(route)` splits it into segments for route matching.
- `installLinkInterceptor()` intercepts any same-origin `<a href="/...">` click so navigation
  happens client-side (no full page reload) via `pushState`, then emits a route-change event.
- `App.tsx` parses the segments (see site map in 7.1) to choose the page. `/admin` (segment
  `['admin']`) renders the CRM: if `currentUser` is null it shows `<LoginScreen>`, otherwise the
  CRM shell (with a "Back to website" / "View Site" action). All other paths render inside
  `<PublicLayout>` as the matching public page.

This gives a true **multipage** experience with clean URLs and zero router dependency. The public
navbar and footer carry a visible **"Login" / "Admin"** button that routes to `/admin`.

> **Deployment note:** clean URLs rely on SPA fallback. Vite's dev server serves `index.html` for
> unknown paths automatically. On a static production host, add a rewrite rule so all paths serve
> `index.html` (or use `react-router-dom` BrowserRouter with the same rewrite). If no rewrite is
> possible, `HashRouter` is the fallback (see 13.2).

Implementation sketch for `App.tsx`:

```tsx
const route = useRoute();
const segments = getSegments(route);

if (segments[0] === 'admin') {
  // existing CRM logic (login → dashboard)
}
// public multipage
let page;
if (segments.length === 0) page = <HomePage />;
else if (segments[0] === 'institutions' && segments.length === 1) page = <InstitutionsPage />;
else if (segments[0] === 'institutions' && segments[1]) page = <InstitutionDetailPage slug={segments[1]} />;
else if (segments[0] === 'about') page = <AboutPage />;
else if (segments[0] === 'gallery') page = <GalleryPage />;
else if (segments[0] === 'messages') page = <MessagesPage />;
else if (segments[0] === 'contact') page = <ContactPage />;
else page = <NotFoundPage />;
return <PublicLayout>{page}</PublicLayout>;
```

### 13.2 Alternative: `react-router-dom` (BrowserRouter / HashRouter)

If advanced routing features (nested routes, route loaders, redirects, canonical link management)
are needed, add `react-router-dom`. Use `BrowserRouter` when the host supports SPA fallback, or
`HashRouter` when it does not. The page components are router-agnostic, so migration is low-cost.

---

## 14. Content Strategy & Copywriting

### 14.1 Voice & Tone

- **Professional, warm, aspirational** — education-focused. Use "we", "our", "students",
  "future". Emphasise quality, values, legacy, and community.
- Bilingual-friendly: English primary; Hindi snippets intentionally kept (e.g., the
  "विद्यारंभ संस्कार एवं सरस्वती पूजन" event) for authenticity.

### 14.2 Content Sources (from legacy site, curated)

- Contact: Kekri, Ajmer, Rajasthan, India · +91 9462456778 · mldmemorialsansthan@gmail.com.
- Leadership messages (Principal, Chairman C.P. Dubey, Director Avinash Dubey) — as quoted in
  Section 8.6.
- Institutions list — as in Section 8.3.
- About paragraph — as in Section 8.4.

### 14.3 Placeholders & Mock Data

For this phase, institutions, gallery images, stats, and leadership messages are defined in a new
`PUBLIC_DATA` constant (either appended to `constants.ts` or a new `pages/data.ts`). Images use
`picsum.photos` seed URLs / placeholder asset paths so the layout is fully demonstrable; these are
clearly marked to be swapped for real assets (`images/gallery/...`, `images/slider/...`) before
launch. The legacy site references `Images/mld-logo.png`, `Images/studentImage.jpg`, and many
`images/gallery/*.jpeg` — we should mirror those file paths if we use real assets.

### 14.4 No-content safeguards

All sections render gracefully even with empty/placeholder data (e.g., show a friendly "Photos
coming soon" placeholder when gallery is empty).

---

## 15. SEO, Performance & Analytics

### 15.1 SEO

- **Title** (set in `index.html`): "MLD Memorial Sansthan | Shri Mishri Lal Dubey Memorial
  Sansthan, Kekri".
- **Meta description** and **keywords** (mirror legacy): set and refined.
- **Semantic HTML:** `header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`, `h1`
  (exactly one), nested `h2`/`h3`.
- **Structured data (JSON-LD):** `EducationalOrganization` with name, address (Kekri, Ajmer,
  Rajasthan), contact email/phone, and `sameAs` socials.
- **Open Graph / Twitter cards:** `og:title`, `og:description`, `og:image`, `og:url`,
  `twitter:card`.
- **Alt text** on all meaningful images.
- **Sitemap/robots:** note for future deployment.

### 15.2 Performance

- Only transform/opacity animations (GPU-friendly, no layout thrash).
- `content-visibility: auto` on below-fold sections to skip offscreen rendering.
- Lazy-load below-fold images (`loading="lazy"`), `decoding="async"`.
- Inline SVGs (no icon font requests).
- Keep the Tailwind CDN (acceptable for AI Studio); for prod consider purging.
- Preconnect to image CDN; `width`/`height` or `aspect-ratio` to prevent CLS.

### 15.3 Analytics

- Guard the analytics snippet (`gtag` / Vercel Analytics / Plausible) behind an env flag so the
  public build tracks pageviews & CTA clicks. Define event names: `cta_apply`,
  `cta_institution_click`, `gallery_open`, `contact_submit`.

---

## 16. Accessibility (A11y) Guidelines

- **Contrast:** ensure body text ≥ 4.5:1; large text ≥ 3:1. Orange text on white for body is
  avoided; orange used only for accents/badges (with adequate contrast) or paired in gradients.
- **Keyboard:** all interactive elements focusable with a visible **orange focus ring**
  (`focus-visible`). Lightbox closes on Escape; nav via arrows.
- **Semantics:** proper landmarks; `aria-label` on icon-only buttons (hamburger, lightbox close,
  prev/next); `aria-hidden` on decorative SVGs.
- **Alt text** on images; `role="img"` + label where needed.
- **Labels** on all form fields; inline validation with `aria-describedby`.
- **Reduced motion** respected (media query).
- **Touch targets** ≥ 44px; no hover-only activation for essential actions.

---

## 17. Security Considerations

- No user input executed; no dangerous `dangerouslySetInnerHTML` (avoid; if needed, sanitise).
- All external URLs use `rel="noopener"` and `target="_blank"` where appropriate.
- Form submissions (when wired) must be validated server-side; this phase uses `mailto:` or a
  disabled state with a clear "coming online" notice, so no data is mishandled.
- No secrets/keys in client code.
- The CRM (/admin) login is placeholder/mock in this repo; production auth must be added
  (the existing LoginScreen just matches mock users). Mitigation documented for production.

---

## 18. Work Breakdown Structure & Timeline

| # | Task | Estimate | Owner |
| --- | --- | --- | --- |
| 1 | Finalise design system & tokens | 0.5 d | Design |
| 2 | Set up `pages/` structure + `public.css` | 0.5 d | Dev |
| 3 | `SectionHeading`, `icons.tsx`, `hooks.ts` | 1 d | Dev |
| 4 | `PublicLayout` (Navbar + Footer + BackToTop) | 1.5 d | Dev |
| 5 | `HeroSection` + `StatsStrip` | 1.5 d | Dev |
| 6 | `InstitutionsSection` + `InstitutionCard` + marquee | 2 d | Dev |
| 7 | `AboutSection` | 1 d | Dev |
| 8 | `GallerySection` + `Lightbox` | 2 d | Dev |
| 9 | `MessagesSection` | 1 d | Dev |
| 10 | `ContactSection` (CTA + form) | 1.5 d | Dev |
| 11 | `HomePage` composition + routing in `App.tsx` | 1 d | Dev |
| 12 | Responsive pass + polish | 1 d | Dev |
| 13 | A11y + SEO + performance pass | 1 d | QA |
| 14 | QA bug-fix round + Lighthouse target | 1 d | QA |
| 15 | Deployment (Vercel / AI Studio static) | 0.5 d | Ops |

**Total ≈ 16–17 developer-days.**

---

## 19. Testing & Quality Assurance

- **Functional:** each section displays; link/CTA target correct; lightbox works; mobile menu
  toggles; hash routing toggles public↔CRM.
- **Responsive:** test on 3 breakpoints (mobile 375, tablet 768, desktop 1440) + touch devices.
- **Accessibility:** axe-core scan; keyboard-only walkthrough; contrast checks; reduced-motion
  check.
- **Performance:** Lighthouse (mobile & desktop) — targets in Section 3.
- **Cross-browser:** latest Chrome, Edge, Firefox, Safari.
- **Data:** verify empty-state and long-content edge cases.
- **Regression:** ensure the CRM still builds and logs in via `/admin`.

---

## 20. Deployment & Versioning

- Host as a static site (Vercel / Netlify / AI Studio static / GitHub Pages). Add `base` if
  needed. The AI Studio "Run and deploy your app" flow is the primary path (per README).
- Enable **analytics** and **canonical** URL.
- Version via git tags; semantic releases. Note: SPA hash routing (`/admin`) works on any static
  host without server rewrite rules, which is a key reason for choosing it in Phase 1.

---

## 21. Future Enhancements & Roadmap

- **Multipage routes** (Home, Institutions listing, Institution detail per college/school,
  About, Gallery, Messages, Contact, 404) — **shipped in Phase 1**.
- **Admissions enquiry form** wired to a backend (email/CRM).
- **Job application form** and careers listing.
- **Notice board / News** feed (reuse CRM `MOCK_NOTICES`, made public).
- **CMS / headless content** so sansthan staff can update institutions, gallery, and messages.
- **Multi-language** (Hindi toggle) with `i18n`.
- **Events & achievements** timeline.
- **Online fee portal** link into the CRM.
- **Dark mode** for the public site (tokens already defined), toggled via the CRM theme control.
- **Real assets** migration from `images/` and `images/slider/` and `images/gallery/`.
- **Browser-history URLs / SEO sitemap** (move from hash router to `react-router-dom`) when a
  production static/CMS host with rewrite rules is chosen.

---

## 22. Risks, Assumptions & Mitigations

| Risk / Assumption | Impact | Mitigation |
| --- | --- | --- |
| Legacy site assets not available to the build | Plan assumes placeholders | Use picsum/asset placeholders, keep a clear "swap real assets" checklist |
| Tailwind CDN in production | Bundle/perf | Fine for AI Studio; document purge-guidance for prod |
| No router dependency | Phase 2 multi-page harder | Component library is router-agnostic; hash routing chosen for Phase 1 |
| Login is mock | Security | Document production auth requirement; don't claim production security |
| Form has no backend | Collecting real enquiries fails | Disable / use mailto with clear notice until wired |
| Contact/address data may be stale | Wrong info published | Verify with client before launch; easy to edit in one data file |
| Rich animation hurts perf on low-end devices | Jank | transform/opacity-only; reduced-motion; query breakdown by device |
| (Assumption) client wants only orange, not gold | Brand mismatch | Confirmed white+orange direction (updated from earlier gold note) |

---

## 23. Appendix

### 23.1 Legacy Content Reference Cards (verbatim from the old site)

- **Tagline:** "Shri Mishri Lal Dubey Memorial Sansthan is a society which runs multiple
  educational institutions across Rajasthan, providing quality education to students."
- **About paragraph:** See Section 8.4 (verbatim).
- **Leadership messages:** See Section 8.6 (verbatim).
- **Contact:** Kekri, Ajmer, Rajasthan, India · +91 9462456778 ·
  mldmemorialsansthan@gmail.com.

### 23.2 Icon Set Needed (inline SVG)

home · graduation-cap · building/university · book-open · flask · capsule/pharmacy ·
stethoscope · agriculture/livestock · users/group · quote · phone · mail · map-pin · clock ·
arrow-right · chevron-left · chevron-right · menu · close · external-link · check · share ·
plus · image · star.

### 23.3 Sample Mock Data Shape

```ts
type InstitutionType = 'school' | 'college' | 'pharmacy' | 'diploma' | 'teacher';

interface Institution {
  id: string;
  name: string;
  type: InstitutionType;
  location: string;
  description: string;
  image: string;
  actions: { label: string; href: string; external?: boolean }[];
}

interface LeadershipMessage {
  id: string;
  role: 'principal' | 'chairman' | 'director';
  name: string;
  title: string;
  headline: string;
  message: string;
}
```

### 23.4 Approval Checklist (for client sign-off)

- [ ] Brand (white + orange) confirmed
- [ ] Institution data & actions confirmed
- [ ] Leadership messages & names confirmed (C.P. Dubey, Avinash Dubey, Principal)
- [ ] Contact details confirmed
- [ ] Gallery placeholder choices confirmed
- [ ] CRM (/admin) rule confirmed — a visible **Login/Admin button** in the public navbar and
  direct `/admin` URL access
- [ ] Stats numbers confirmed
- [ ] Form behaviour confirmed (disabled / mailto vs backend)

---

*End of Plan — v1.0. This document is a living spec; update as the build progresses.*
