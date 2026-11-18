import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  GraduationCap,
  FileCheck2,
  BookOpenCheck,
  Award,
  ShieldCheck,
  PlaneTakeoff,
  Sparkles
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import SEO from '../components/SEO'
import ExamLeadForm from '../components/ExamLeadForm'
import { servicesSections, homeHowItWorks } from '../data/servicesData'
import { whatsappUrl } from '../config/social'

const navItems = [
  { id: 'counselling', label: 'Counselling' },
  { id: 'university-shortlisting', label: 'Shortlisting' },
  { id: 'application-assistance', label: 'Applications & SOP' },
  { id: 'test-preparation', label: 'Test Prep' },
  { id: 'scholarships-funding', label: 'Scholarships & Loans' },
  { id: 'visa-guidance', label: 'Visa Filing' },
  { id: 'pre-departure', label: 'Pre-Departure' }
]

export default function Services() {
  const shouldReduceMotion = useReducedMotion()
  const location = useLocation()
  const [activeAnchor, setActiveAnchor] = useState('counselling')
  const [selectedExam, setSelectedExam] = useState('IELTS')

  // Smooth scroll to anchor if URL has hash (e.g., /services#test-preparation)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setActiveAnchor(id)
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 150)
      }
    }
  }, [location.hash])

  const scrollToSection = (id) => {
    setActiveAnchor(id)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <SEO
        title="Study Abroad Services - University Shortlisting, SOPs & Visa Filing"
        description="Comprehensive study abroad services: career counselling, university selection (ambitious/moderate/safe), SOP & application filing, IELTS/GRE test prep, scholarships, loans, and student visas."
      />

      {/* Header Hero */}
      <section className="relative overflow-hidden bg-vic-lilac/70 py-16 sm:py-20">
        <div className="container-shell">
          <p className="eyebrow">OUR EXPERTISE</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-vic-ink tracking-tight">
            End-to-End Study Abroad Guidance
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
            From discovering your ideal career path to arriving on campus, our structured services eliminate ambiguity and maximize your admission and visa success.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#test-preparation"
              className="btn-primary inline-flex items-center gap-2 py-3 px-6 text-sm font-bold"
            >
              <span>Book Exam Coaching</span>
              <ArrowRight size={16} />
            </a>
            <Link
              to="/contact#book-counselling"
              className="btn-outline inline-flex items-center gap-2 py-3 px-6 text-sm font-bold bg-white"
            >
              <span>Book Free Counselling</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Jump-Menu Bar */}
      <div className="sticky top-[72px] sm:top-[84px] z-30 border-b border-vic-purple/10 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="container-shell">
          <nav className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar" aria-label="Services jump menu">
            {navItems.map((item) => {
              const isActive = activeAnchor === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                    isActive
                      ? 'bg-vic-purple text-white shadow-xs'
                      : 'text-slate-600 hover:bg-vic-lilac hover:text-vic-purple'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Anchored Services Sections */}
      <div className="divide-y divide-slate-100 bg-white">
        {servicesSections.map((sec, idx) => {
          const Icon = sec.icon
          const isEven = idx % 2 === 0
          return (
            <section
              key={sec.id}
              id={sec.id}
              className="section-pad scroll-mt-36"
            >
              <div className="container-shell">
                <div className={`grid gap-10 lg:grid-cols-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                  {/* Left Column Content */}
                  <div className={`lg:col-span-7 ${isEven ? '' : 'lg:col-start-6'}`}>
                    <span className="inline-flex items-center gap-2 rounded-full bg-vic-lilac px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-vic-purple">
                      {sec.eyebrow}
                    </span>
                    <h2 className="mt-3 text-2xl sm:text-3xl font-black text-vic-ink">
                      {sec.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      {sec.shortDescription}
                    </p>

                    {/* Features checklist */}
                    <div className="mt-6 space-y-3">
                      {sec.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle2 size={18} className="text-vic-purple shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Deliverable Box */}
                    <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200/80 p-4 flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[11px] font-bold uppercase text-slate-400">Key Outcome</span>
                        <p className="text-xs sm:text-sm font-bold text-vic-ink">{sec.deliverables}</p>
                      </div>
                      <Link
                        to="/contact#book-counselling"
                        className="btn-outline shrink-0 text-xs py-2 px-3 font-bold"
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>

                  {/* Right Column Visual / Interactive Card */}
                  <div className={`lg:col-span-5 ${isEven ? '' : 'lg:col-start-1'}`}>
                    {sec.id === 'test-preparation' ? (
                      /* Embed Interactive Exam Form directly in the Test Prep section! */
                      <div>
                        <ExamLeadForm
                          selectedExam={selectedExam}
                          onExamChange={(val) => setSelectedExam(val)}
                        />
                      </div>
                    ) : (
                      <motion.div
                        whileHover={shouldReduceMotion ? {} : { y: -4 }}
                        className="rounded-3xl bg-gradient-to-br from-vic-lilac/70 via-white to-vic-lilac/30 p-8 border border-vic-purple/15 shadow-sm"
                      >
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-vic-purple text-white shadow-md mb-6">
                          <Icon size={32} />
                        </div>
                        <h3 className="text-xl font-extrabold text-vic-ink">Why This Matters</h3>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                          A systematic, detail-oriented approach prevents application delays and ensures your dossier stands out against thousands of global contenders.
                        </p>
                        <div className="mt-6 pt-6 border-t border-vic-purple/10 flex items-center justify-between">
                          <Link
                            to="/contact#book-counselling"
                            className="inline-flex items-center gap-1.5 text-sm font-bold text-vic-purple hover:underline"
                          >
                            <span>Discuss with a Mentor</span>
                            <ArrowRight size={15} />
                          </Link>
                          <span className="text-xs font-semibold text-slate-400">Step 0{idx + 1}</span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* Process Timeline Section */}
      <section className="section-pad bg-[#F9F8FD] border-t border-vic-purple/10">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow">CHRONOLOGICAL ROADMAP</p>
            <h2 className="section-title">The Complete Admission Timeline</h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              From our first conversation to boarding your flight: a transparent 5-phase student journey.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {homeHowItWorks.map((st) => (
              <div key={st.step} className="rounded-3xl bg-white border border-vic-purple/10 p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-vic-purple/30">{st.step}</span>
                  <h3 className="mt-3 font-extrabold text-vic-ink text-base">{st.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="section-pad bg-gradient-to-r from-vic-deep to-vic-purple text-white">
        <div className="container-shell text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-white/80">READY TO TAKE ACTION?</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black">
            Let’s build your study abroad application.
          </h2>
          <p className="mt-4 text-base text-white/85 leading-relaxed">
            Schedule a free initial counselling session with VIC Overseas to explore courses, university shortlists, and test preparation schedules.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact#book-counselling"
              className="btn-light inline-flex items-center gap-2 py-3.5 px-7 text-sm font-bold shadow-lg"
            >
              <span>Book Free Consultation</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 border-white text-white hover:bg-white hover:text-vic-purple py-3.5 px-6 text-sm font-bold transition"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
