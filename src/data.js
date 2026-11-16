import { Target, FileText, PenTool, Landmark, ShieldCheck, BookOpen } from 'lucide-react'

export const countries = [
  { name: 'United States', slug: 'usa', code: 'USA', flag: '🇺🇸', image: '/images/countries/usa.jpg', summary: 'Explore a broad range of universities, academic disciplines and campus experiences.' },
  { name: 'United Kingdom', slug: 'uk', code: 'UK', flag: '🇬🇧', image: '/images/countries/uk.jpg', summary: 'Explore globally recognised universities and diverse academic pathways.' },
  { name: 'Canada', slug: 'canada', code: 'CAN', flag: '🇨🇦', image: '/images/countries/canada.jpg', summary: 'Discover welcoming campuses and a wide range of programmes.' },
  { name: 'Australia', slug: 'australia', code: 'AUS', flag: '🇦🇺', image: '/images/countries/australia.jpg', summary: 'Find courses in a vibrant, internationally connected study destination.' },
  { name: 'New Zealand', slug: 'new-zealand', code: 'NZL', flag: '🇳🇿', image: '/images/countries/new-zealand.jpg', summary: 'Experience world-ranked universities, supportive campus environments and breathtaking landscapes.' },
  { name: 'Ireland', slug: 'ireland', code: 'IRL', flag: '🇮🇪', image: '/images/countries/ireland.jpg', summary: 'Explore a strong academic tradition and a lively student experience.' },
  { name: 'France', slug: 'france', code: 'FRA', flag: '🇫🇷', image: '/images/countries/france.jpg', summary: 'Discover prestigious universities, leading business schools and rich cultural heritage.' },
  { name: 'Italy', slug: 'italy', code: 'ITA', flag: '🇮🇹', image: '/images/countries/italy.jpg', summary: 'Study at historic universities offering English-taught degrees in design, medicine and engineering.' },
  { name: 'Netherlands', slug: 'netherlands', code: 'NLD', flag: '🇳🇱', image: '/images/countries/netherlands.jpg', summary: 'Explore innovative English-taught programmes in a vibrant, international European hub.' },
  { name: 'Sweden', slug: 'sweden', code: 'SWE', flag: '🇸🇪', image: '/images/countries/sweden.jpg', summary: 'Experience world-class education rooted in innovation, research and sustainability.' }
]

export const services = [
  { icon: Target, title: 'University shortlisting', text: 'Explore universities and courses that align with your academic profile, goals and preferences.' },
  { icon: FileText, title: 'Application assistance', text: 'Get organised support through application preparation, documentation and submission.' },
  { icon: PenTool, title: 'SOP & LOR guidance', text: 'Present your story clearly with guidance on statements of purpose and recommendation letters.' },
  { icon: Landmark, title: 'Education loan guidance', text: 'Understand possible funding routes and prepare for conversations with financial providers.' },
  { icon: ShieldCheck, title: 'Visa assistance', text: 'Understand visa requirements and prepare your application documents with care.' },
  { icon: BookOpen, title: 'Test preparation', text: 'Plan your preparation for IELTS, TOEFL, GRE and PTE examinations.' }
]

export const journey = [
  ['01', 'Discover', 'Start with a counselling conversation and discuss your goals, academic background and destination preferences.'],
  ['02', 'Shortlist', 'Explore suitable courses and universities based on your profile and priorities.'],
  ['03', 'Prepare', 'Organise academic documents and work on your SOP and recommendation letters.'],
  ['04', 'Apply', 'Prepare and submit applications according to each university’s requirements.'],
  ['05', 'Review offers', 'Understand your offers and consider the next steps for your chosen course.'],
  ['06', 'Plan finances', 'Explore scholarship information and education funding options.'],
  ['07', 'Visa preparation', 'Prepare the documents and information needed for the relevant visa process.'],
  ['08', 'Get ready', 'Work through pre-departure planning before your studies begin.']
]

export const exams = [
  ['IELTS', 'English language proficiency test used by institutions and organisations worldwide.'],
  ['TOEFL', 'English language test that assesses academic communication skills.'],
  ['GRE', 'Graduate admissions test accepted by a range of graduate programmes.'],
  ['PTE', 'Computer-based English language test for study and other purposes.']
]
