import {
  Compass,
  GraduationCap,
  FileCheck2,
  BookOpenCheck,
  Award,
  ShieldCheck,
  PlaneTakeoff,
  Users,
  Building2,
  Calendar,
  Globe2
} from 'lucide-react'

export const trustStats = [
  {
    label: 'Students Counselled',
    value: 500,
    suffix: '+',
    note: 'TODO: Replace with verified CRM student count'
  },
  {
    label: 'Study Destinations',
    value: 10,
    suffix: '+',
    note: 'Active countries: USA, UK, Canada, Australia, NZ, Ireland & Europe'
  },
  {
    label: 'University Partners',
    value: 150,
    suffix: '+',
    note: 'TODO: Replace with verified institutional tie-ups'
  },
  {
    label: 'Years of Experience',
    value: 8,
    suffix: '+',
    note: 'TODO: Replace with official founding year duration'
  }
]

export const homeHowItWorks = [
  {
    step: '01',
    title: 'Free Counselling',
    description: 'Connect with a certified counsellor to discuss your career aspirations, academic history, preferred countries, and family budget.'
  },
  {
    step: '02',
    title: 'Profile Evaluation',
    description: 'We conduct an in-depth diagnostic of your GPA, backlogs (if any), language scores, and extracurricular achievements.'
  },
  {
    step: '03',
    title: 'University Shortlisting',
    description: 'Receive a balanced, custom portfolio of universities classified into Ambitious, Moderate, and Safe target tiers.'
  },
  {
    step: '04',
    title: 'Application & Visa',
    description: 'Get hands-on editing for your SOP/LORs, deadline tracking, application fee waiver checks, and visa file preparation with mock interviews.'
  },
  {
    step: '05',
    title: 'Pre-Departure Briefing',
    description: 'Finalize student accommodation, international health cover, foreign exchange cards, student flight discounts, and network with departing peers.'
  }
]

export const servicesSections = [
  {
    id: 'counselling',
    title: 'Career & Course Counselling',
    eyebrow: 'FOUNDATION',
    shortDescription: 'Discover the right academic path tailored to your natural aptitudes, career trajectory, and global job market demand.',
    icon: Compass,
    features: [
      'Diagnostic career assessment mapping your strengths to high-growth global professions.',
      'Comparison of degree formats (e.g. 1-year UK Master’s vs 2-year US/Canadian Master’s).',
      'Realistic budget planning covering tuition, cost of living, and return on investment (ROI).',
      'Guidance for students with backlogs, non-traditional degrees, or career gaps.'
    ],
    deliverables: 'Personalised Study Roadmap & Country Recommendation Matrix'
  },
  {
    id: 'university-shortlisting',
    title: 'University Selection & Shortlisting',
    eyebrow: 'TARGETING',
    shortDescription: 'Eliminate guesswork with a data-driven shortlisting approach balancing acceptance probability and post-graduation prospects.',
    icon: GraduationCap,
    features: [
      'Ambitious / Dream Tier: High-ranking institutions with competitive admission criteria.',
      'Moderate / Target Tier: Strong reputable universities matching your exact profile benchmark.',
      'Safe / Backup Tier: Dependable institutions ensuring admission security.',
      'In-depth analysis of university location, industry clusters, campus safety, and alumni networks.'
    ],
    deliverables: 'Curated 6–8 University Portfolio with Deadlines & Minimum Criteria'
  },
  {
    id: 'application-assistance',
    title: 'Application & Documentation Assistance',
    eyebrow: 'ADMISSION',
    shortDescription: 'Transform raw resumes and transcripts into standout applications that catch the attention of admissions committees.',
    icon: FileCheck2,
    features: [
      'Statement of Purpose (SOP) brainstorming, narrative structuring, and multiple review rounds.',
      'Letter of Recommendation (LOR) guidelines for academic professors and corporate supervisors.',
      'CV / Resume tailoring aligned with international university conventions.',
      'Direct application submission tracking with application fee waiver assistance where available.'
    ],
    deliverables: 'Polished SOP, Professional CV, Verified Application Dossier'
  },
  {
    id: 'test-preparation',
    title: 'Standardised Test Preparation',
    eyebrow: 'COACHING',
    shortDescription: 'Master English proficiency and graduate entrance tests with certified mentors, updated materials, and mock diagnostics.',
    icon: BookOpenCheck,
    features: [
      'IELTS Academic / UKVI: Band 7.0+ targeted training in Reading, Writing, Listening & Speaking.',
      'TOEFL iBT: Computer-delivered strategy and test simulation practice.',
      'PTE Academic: Fast-track computer algorithm training and template strategies.',
      'GRE General Test: Quantitative problem-solving and Verbal reasoning mastery.',
      'Duolingo English Test (DET) & SELT preparation for rapid test result turnarounds.'
    ],
    deliverables: 'Diagnostic Scorecard, Study Materials, Mock Tests & Interactive Booking'
  },
  {
    id: 'scholarships-funding',
    title: 'Scholarships & Education Loan Guidance',
    eyebrow: 'FINANCIAL PLANNING',
    shortDescription: 'Maximize your funding potential through merit-based scholarships and secure collateral / non-collateral education loans.',
    icon: Award,
    features: [
      'Search and application support for university-specific merit scholarships and department bursaries.',
      'Guidance for external government awards (e.g. Chevening, Commonwealth, Erasmus+).',
      'Partnership assistance with leading Indian nationalised & private banks for education loans.',
      'Assistance with loan sanction letters, proof of funds, and living expense blocked accounts.'
    ],
    deliverables: 'Scholarship Application Reviews & Bank Loan Documentation Checklist'
  },
  {
    id: 'visa-guidance',
    title: 'Student Visa Filing & Interview Prep',
    eyebrow: 'VISA SUCCESS',
    shortDescription: 'Navigate strict embassy guidelines, financial sponsorship documents, and intensive visa officer interview simulations.',
    icon: ShieldCheck,
    features: [
      'Country-specific visa checklist (USA F-1, UK Student Visa, Canada Study Permit, Australia Subclass 500).',
      'Verification of CA valuation reports, income tax returns, sponsorship affidavits, and bank statements.',
      '1-on-1 mock visa interview sessions with personalized constructive feedback.',
      'Biometric appointment scheduling and health examination guidance.'
    ],
    deliverables: 'Thoroughly Vetted Visa File & Mock Interview Confidence'
  },
  {
    id: 'pre-departure',
    title: 'Pre-Departure & Post-Landing Support',
    eyebrow: 'ARRIVAL',
    shortDescription: 'Ensure a smooth, stress-free transition from your home city to campus dorms and student housing abroad.',
    icon: PlaneTakeoff,
    features: [
      'Safe student accommodation search near campus (on-campus dorms or vetted private student housing).',
      'Foreign exchange (Forex) cards, international bank account setup, and tuition wire transfer support.',
      'SIM card and mobile connection arrangements before departure.',
      'Pre-departure orientation covering climate, packing essentials, transit rules, and cultural adaptation.'
    ],
    deliverables: 'Pre-Departure Briefing Kit & Global Student Network Access'
  }
]

export const homeFaqs = [
  {
    q: 'Are the initial counselling and profile evaluation sessions really free?',
    a: 'Yes, 100%. Your initial consultation, career mapping, and academic profile assessment with VIC Overseas are completely free with no hidden charges or obligations.'
  },
  {
    q: 'What academic requirements and minimum scores do I need to study abroad?',
    a: 'Requirements vary based on the country, degree level, and university tier. Generally, undergraduate applicants need a minimum of 55%–65% in Class 12, while postgraduate applicants need 55%–65%+ in their Bachelor’s degree. Many top universities accept students with backlogs depending on the destination (e.g. UK, Canada, Australia).'
  },
  {
    q: 'How long before my planned intake should I start the application process?',
    a: 'We strongly advise starting 8 to 12 months ahead of your target intake (e.g. start in August/September for the following Fall intake). This gives you adequate time to prepare for tests (IELTS/GRE), write SOPs, secure university offers, apply for scholarships, and complete visa processing.'
  },
  {
    q: 'Can VIC Overseas help me secure university scholarships or education loans?',
    a: 'Yes. We evaluate your profile for tuition fee waivers and merit-based institutional scholarships (which can range from £2,000 to 50%+ fee reductions). We also connect you with trusted nationalised and private banks for collateral and non-collateral education loans.'
  },
  {
    q: 'Which English language test should I take (IELTS, TOEFL, PTE, or Duolingo)?',
    a: 'IELTS Academic is accepted across nearly all universities globally. PTE Academic is widely favoured for Australia and the UK. Duolingo English Test (DET) is recognized by hundreds of US and select European universities for fast testing. Our advisors will identify the test best suited for your target universities.'
  },
  {
    q: 'What is your success rate with student visa applications?',
    a: 'We maintain an exemplary visa approval rate by ensuring that financial documentation, source of funds, sponsorship affidavits, and genuine student intent are airtight before filing. We conduct rigorous mock interviews to prepare you for embassy questions.'
  }
]

export const aboutDifferentiators = [
  {
    title: '100% Transparent Process',
    desc: 'Direct university application portals, clear document checklists, and zero unverified promises or hidden agency fees.'
  },
  {
    title: 'Unbiased University Selection',
    desc: 'We recommend institutions based on your genuine career goals, academic standing, and budget—not agent commissions.'
  },
  {
    title: 'End-to-End Advisory',
    desc: 'From language test coaching and SOP drafting to visa filings, flight bookings, and foreign exchange cards.'
  },
  {
    title: 'Expert Visa Coaching',
    desc: 'Personalised visa file verification and rigorous mock interviews simulating actual consular officer questions.'
  },
  {
    title: 'Local Roots, Global Horizons',
    desc: 'Proudly rooted in Secunderabad & Hyderabad with an expansive alumni network across USA, UK, Canada, and Europe.'
  },
  {
    title: 'Direct Personal Attention',
    desc: 'You work with experienced counsellors, not junior call-center staff, ensuring your questions are answered quickly.'
  }
]
