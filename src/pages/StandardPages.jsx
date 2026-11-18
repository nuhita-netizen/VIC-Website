import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, GraduationCap, BookOpen, Globe2, FileText, Award, Users, CheckCircle2, Phone } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import Testimonials from '../components/Testimonials'
import GoogleReviews from '../components/GoogleReviews'
import ExamLeadForm from '../components/ExamLeadForm'
import { Reveal, StaggerGroup, StaggerItem } from '../components/Animation'
import { countries, services, exams } from '../data'
import { social, whatsappUrl } from '../config/social'

const countryDetails = {
  usa: ['United States', 'Explore a broad range of universities, academic disciplines and campus experiences across the United States.', 'Understand course options, entry requirements, application timelines and student visa preparation.'],
  uk: ['United Kingdom', 'Explore undergraduate and postgraduate study options in the United Kingdom.', 'Review course choices, university requirements, application documents and visa preparation.'],
  canada: ['Canada', 'Discover study options across Canadian institutions and communities.', 'Compare programmes, understand admissions requirements and prepare your application.'],
  australia: ['Australia', 'Explore internationally recognised education options in Australia.', 'Learn about course selection, application requirements and the student visa process.'],
  'new-zealand': ['New Zealand', 'Explore world-ranked universities, supportive campus environments and hands-on learning across New Zealand.', 'Understand admission criteria, course structures, living arrangements and student visa processes.'],
  ireland: ['Ireland', 'Consider Ireland’s universities, institutes and range of academic programmes.', 'Explore suitable courses, admission steps and practical preparation.'],
  france: ['France', 'Discover prestigious universities, leading business schools and rich cultural heritage in France.', 'Review programme language, admissions criteria, visa requirements and post-study opportunities.'],
  italy: ['Italy', 'Study at historic universities offering English-taught degrees in design, medicine and engineering.', 'Review regional scholarship options, university application timelines and student visa requirements.'],
  netherlands: ['Netherlands', 'Explore innovative English-taught programmes in a vibrant, international European hub.', 'Understand selection deadlines, housing considerations, tuition frameworks and residence permit processes.'],
  sweden: ['Sweden', 'Experience world-class education rooted in innovation, research and sustainability.', 'Navigate university admissions procedures, scholarship applications and Swedish residence permits.']
}

function PageHero({ eyebrow, title, text, children }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-vic-lilac/70 py-16 sm:py-20">
      <div className="container-shell">
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-vic-ink sm:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-2xl text-base leading-8 text-slate-600"
        >
          {text}
        </motion.p>
        {children && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}

function CTA() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="container-shell py-14 space-y-6">
      <GoogleReviews compact={true} />
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.96, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative overflow-hidden rounded-3xl p-8 text-white sm:p-10 shadow-xl"
        style={{
          background: 'linear-gradient(135deg, #24165F 0%, #38258E 45%, #1D1648 85%, #24165F 100%)',
          backgroundSize: '250% 250%'
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }
        }
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
          backgroundPosition: {
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }}
      >
        <h2 className="text-2xl font-black sm:text-3xl">Ready to explore your options?</h2>
        <p className="mt-3 max-w-xl text-sm leading-7 text-white/75">
          Talk to VIC Overseas about your study goals and possible next steps.
        </p>
        <motion.a
          href="/#book-counselling"
          className="btn-light group mt-6 inline-flex"
          whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
          transition={{ duration: 0.15 }}
        >
          <span>Book Free Counselling</span>
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-[3px]"
          />
        </motion.a>
      </motion.div>
    </div>
  )
}

export function Countries() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <SEO
        title="Study Destinations"
        description="Explore study destinations including the USA, UK, Canada, Australia, New Zealand, Ireland, France, Italy, Netherlands and Sweden with VIC Overseas."
      />
      <PageHero
        eyebrow="Explore destinations"
        title="Find a place for your next chapter."
        text="Explore premier study destinations across North America, Europe and Australasia to learn about the application journey for each."
      />
      <section className="container-shell py-14">
        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.06}>
          {countries.map((c, i) => (
            <StaggerItem key={c.slug}>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="h-full"
              >
                <Link to={`/countries/${c.slug}`} className="country-card group flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden bg-slate-200">
                    <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                    <img
                      src={c.image}
                      alt={c.name}
                      width="400"
                      height="192"
                      loading={i < 3 ? 'eager' : 'lazy'}
                      fetchPriority={i < 3 ? 'high' : 'auto'}
                      className="relative z-[1] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-2xl">{c.flag}</p>
                    <h2 className="mt-2 text-xl font-extrabold text-vic-ink">{c.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600 flex-1">{c.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-vic-purple">
                      Explore destination <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
      <CTA />
    </>
  )
}

export function CountryDetail() {
  const { slug } = useParams()
  const data = countryDetails[slug]
  const shouldReduceMotion = useReducedMotion()

  if (!data) return <PageHero eyebrow="Destination" title="Destination information" text="Please select a destination from our countries page." />
  const c = countries.find((x) => x.slug === slug)
  return (
    <>
      <SEO title={`Study in ${data[0]}`} description={`Explore study opportunities in ${data[0]} with VIC Overseas.`} />
      
      {/* Country Hero with Ken Burns Zoom Effect */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-slate-200 animate-pulse" />
        <motion.img
          src={c?.image || '/images/hero-campus.jpg'}
          alt={`${data[0]} study destination`}
          width="1440"
          height="440"
          loading="eager"
          fetchPriority="high"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.08],
                  transition: {
                    duration: 16,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                  }
                }
          }
          className="relative z-[1] h-[340px] w-full object-cover sm:h-[440px] origin-center"
        />
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-vic-deep/90 via-vic-deep/60 to-vic-deep/20" />
        <div className="container-shell absolute inset-0 z-[3] flex flex-col justify-center text-white">
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm font-bold uppercase tracking-[.2em] text-white/90"
          >
            {c?.flag} Study destination
          </motion.p>
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-4xl font-black sm:text-6xl"
          >
            Study in {data[0]}
          </motion.h1>
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 max-w-xl leading-7 text-white/90"
          >
            {data[1]}
          </motion.p>
        </div>
      </section>

      {/* Main Detail Body with Scroll Reveals */}
      <div className="container-shell grid gap-10 py-14 lg:grid-cols-[1fr_300px]">
        <Reveal>
          <h2 className="text-2xl font-black text-vic-ink">Explore your options in {data[0]}</h2>
          <p className="mt-4 leading-8 text-slate-600">{data[2]}</p>
          <h3 className="mt-9 text-xl font-extrabold text-vic-ink">How VIC Overseas can support you</h3>
          <StaggerGroup className="mt-5 grid gap-3 sm:grid-cols-2" staggerDelay={0.06}>
            {[
              'Course and university exploration',
              'Application document guidance',
              'Application process support',
              'Visa preparation guidance'
            ].map((x) => (
              <StaggerItem key={x}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-3 rounded-xl border border-vic-purple/10 bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  <CheckCircle2 className="shrink-0 text-vic-purple" size={18} />
                  <span>{x}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <p className="mt-7 text-sm leading-7 text-slate-500">
            Admission criteria, language requirements, and visa rules vary by institution and may change. Confirm current requirements with the relevant official sources.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.aside
            whileHover={shouldReduceMotion ? {} : { y: -4 }}
            transition={{ duration: 0.25 }}
            className="h-fit rounded-2xl bg-vic-lilac p-6 shadow-sm border border-vic-purple/10"
          >
            <GraduationCap className="text-vic-purple" size={32} />
            <h3 className="mt-4 text-xl font-extrabold text-vic-ink">Planning to study here?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Discuss your profile and destination preferences with our team.</p>
            <motion.a
              href="/#book-counselling"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="btn-primary mt-5 w-full text-center inline-block"
            >
              Book Free Counselling
            </motion.a>
          </motion.aside>
        </Reveal>
      </div>

      <Testimonials countryFilter={data[0]} title={`Student Experiences in ${data[0]}`} />
      <CTA />
    </>
  )
}

export function Services() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <SEO title="Study Abroad Services" />
      <PageHero
        eyebrow="Our services"
        title="Support that moves your plans forward."
        text="Explore the guidance areas available through VIC Overseas as you plan your international education journey."
      />
      <section className="container-shell py-14">
        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -6, boxShadow: '0 12px 28px -6px rgba(56, 37, 142, 0.12)' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="service-card group h-full flex flex-col justify-start"
              >
                <motion.span
                  whileHover={shouldReduceMotion ? {} : { rotate: 6, scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-vic-lilac text-vic-purple transition-colors group-hover:bg-vic-purple group-hover:text-white"
                >
                  <s.icon size={24} strokeWidth={2} />
                </motion.span>
                <h2 className="mt-4 text-xl font-extrabold text-vic-ink">{s.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600 flex-1">{s.text}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
      <CTA />
    </>
  )
}

export function Exams() {
  const [selectedExam, setSelectedExam] = useState('IELTS')
  const shouldReduceMotion = useReducedMotion()

  const handleSelectExam = (examName) => {
    setSelectedExam(examName)
    const el = document.getElementById('book-exam')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <SEO
        title="IELTS, TOEFL, GRE and PTE Preparation & Coaching"
        description="Book expert exam preparation and diagnostic tests for IELTS, TOEFL, GRE, PTE and Duolingo with VIC Overseas."
      />
      <PageHero
        eyebrow="Exam guidance & Coaching"
        title="Prepare for your next test with a plan."
        text="Explore common English language and graduate admissions tests. Book comprehensive diagnostic tests, strategy classes, and mock evaluations with our expert mentors."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="#book-exam"
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>Book Exam Preparation</span>
            <ArrowRight size={16} />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enquire about exams on WhatsApp"
            className="btn-outline inline-flex items-center gap-2 bg-white"
          >
            <FaWhatsapp size={16} className="text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </PageHero>

      <section className="container-shell py-14">
        <StaggerGroup className="grid gap-5 sm:grid-cols-2" staggerDelay={0.1}>
          {exams.map(([n, d]) => (
            <StaggerItem key={n}>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -6, boxShadow: '0 12px 28px -6px rgba(56, 37, 142, 0.12)' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="service-card group h-full flex flex-col justify-between"
              >
                <div>
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="w-fit"
                  >
                    <BookOpen className="text-vic-purple transition-transform group-hover:rotate-6" size={30} />
                  </motion.div>
                  <h2 className="mt-4 text-2xl font-black text-vic-ink">{n}</h2>
                  <p className="mt-2 leading-7 text-slate-600">{d}</p>
                  <p className="mt-4 text-xs text-slate-500">Check the specific institution’s current test and score requirements.</p>
                </div>

                <div className="mt-6 pt-4 border-t border-vic-purple/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleSelectExam(n)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-vic-purple hover:text-vic-deep group-hover:translate-x-1 transition-all"
                  >
                    <span>Book {n} Coaching</span>
                    <ArrowRight size={15} />
                  </button>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-vic-lilac text-vic-purple">
                    Diagnostic Available
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Dedicated Exam Booking Section */}
      <section id="book-exam" className="section-pad scroll-mt-24 bg-[#F8F7FC] overflow-hidden border-t border-vic-purple/10">
        <div className="container-shell grid items-start gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="pt-2"
          >
            <p className="eyebrow">Exam coaching & diagnostic test</p>
            <h2 className="section-title">Book your test preparation session.</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Target your best score with structured coaching, diagnostic mock evaluations, and personalised feedback from certified mentors for IELTS, TOEFL, GRE, PTE, and Duolingo.
            </p>

            <div className="mt-8 grid gap-4 text-sm font-semibold text-slate-700">
              {[
                'Diagnostic score assessment & personalised study plan',
                'Comprehensive test strategy & official mock series',
                'Small batch sizes with 1-on-1 doubt clearing',
                'Official test registration and exam date booking support'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="shrink-0 text-vic-purple" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-vic-lilac/70 p-5 border border-vic-purple/15">
              <h4 className="font-extrabold text-vic-ink">Prefer instant advice?</h4>
              <p className="mt-1 text-xs text-slate-600">
                Chat directly with our test preparation coordinators on WhatsApp to check upcoming batch timings and mock test dates.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-vic-purple hover:underline"
              >
                <FaWhatsapp size={16} className="text-[#25D366]" />
                <span>Message VIC Overseas on WhatsApp</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <ExamLeadForm
              selectedExam={selectedExam}
              onExamChange={(val) => setSelectedExam(val)}
            />
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  )
}

export function Universities() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <SEO title="University Guidance" />
      <PageHero
        eyebrow="University exploration"
        title="Find a university that fits your goals."
        text="Explore programme options, compare entry requirements and organise your application plan with guidance from VIC Overseas."
      />
      <section className="container-shell py-14">
        <StaggerGroup className="grid gap-6 md:grid-cols-3" staggerDelay={0.08}>
          {[
            ['Course fit', 'Explore programmes that connect with your academic background and career interests.', GraduationCap],
            ['Application readiness', 'Understand document requirements, deadlines and application steps.', FileText],
            ['Informed decisions', 'Compare relevant factors such as course content, location and costs.', Globe2]
          ].map(([t, d, I]) => (
            <StaggerItem key={t}>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -6, boxShadow: '0 12px 28px -6px rgba(56, 37, 142, 0.12)' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="service-card group h-full flex flex-col"
              >
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="w-fit"
                >
                  <I className="text-vic-purple transition-transform group-hover:rotate-6" size={30} />
                </motion.div>
                <h2 className="mt-4 text-xl font-extrabold text-vic-ink">{t}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600 flex-1">{d}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
      <CTA />
    </>
  )
}

export function Scholarships() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <SEO title="Scholarship Guidance" />
      <PageHero
        eyebrow="Funding your education"
        title="Explore scholarship possibilities."
        text="Scholarship availability and eligibility vary by university, course, destination and applicant profile. Start by understanding the options relevant to your plans."
      />
      <section className="container-shell py-14">
        <StaggerGroup className="grid gap-5 md:grid-cols-2" staggerDelay={0.1}>
          <StaggerItem>
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -6, boxShadow: '0 12px 28px -6px rgba(56, 37, 142, 0.12)' }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="service-card group h-full flex flex-col"
            >
              <Award className="text-vic-purple transition-transform group-hover:scale-110" size={32} />
              <h2 className="mt-4 text-xl font-extrabold text-vic-ink">University scholarships</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600 flex-1">
                Check university websites for merit-based, programme-specific and other funding opportunities.
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -6, boxShadow: '0 12px 28px -6px rgba(56, 37, 142, 0.12)' }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="service-card group h-full flex flex-col"
            >
              <Users className="text-vic-purple transition-transform group-hover:scale-110" size={32} />
              <h2 className="mt-4 text-xl font-extrabold text-vic-ink">External funding</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600 flex-1">
                Research government, foundation and other external scholarship programmes, checking official eligibility and deadlines.
              </p>
            </motion.div>
          </StaggerItem>
        </StaggerGroup>

        {/* Video Guide */}
        <div className="mt-12 rounded-3xl bg-vic-lilac/30 p-8 border border-vic-purple/15 text-center">
          <p className="eyebrow">FEATURED VIDEO</p>
          <h3 className="mt-1 text-2xl font-black text-vic-ink">Scholarship & Funding Guidance</h3>
          <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto">
            Learn how international applicants secure tuition waivers, merit awards, and university bursaries.
          </p>
          <div className="mt-6 mx-auto w-full max-w-[340px] rounded-3xl bg-white p-3 shadow-xl border border-vic-purple/15">
            <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
              <video
                src="/videos/vic_overseas_education.mp4"
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}

export function Blog() {
  return (
    <>
      <SEO title="Study Abroad Blog" />
      <PageHero
        eyebrow="Insights & resources"
        title="Helpful information for your study abroad plans."
        text="This space will feature destination explainers, application guidance, exam preparation information and student planning resources."
      />
      <div className="container-shell py-14">
        <Reveal>
          <div className="rounded-3xl border border-dashed border-vic-purple/25 bg-vic-lilac/40 px-6 py-14 text-center">
            <BookOpen className="mx-auto text-vic-purple" size={38} />
            <h2 className="mt-4 text-2xl font-black text-vic-ink">Articles coming soon</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-600">
              We’re preparing useful, carefully reviewed resources for students exploring international education.
            </p>
          </div>
        </Reveal>
      </div>
      <CTA />
    </>
  )
}

export function About() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <SEO title="About VIC Overseas" />
      <PageHero
        eyebrow="About us"
        title="Helping students take confident steps towards global education."
        text="VIC Overseas is a study abroad consultancy based in Secunderabad, Telangana, supporting students as they explore international study options."
      />
      <section className="container-shell grid gap-10 py-14 md:grid-cols-2 items-center">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl font-black text-vic-ink sm:text-3xl">A more informed journey starts with a conversation.</h2>
          <p className="mt-4 leading-8 text-slate-600">
            Choosing a destination, course and university can involve many decisions. VIC Overseas aims to make the process easier to understand through personalised guidance across key stages of study abroad planning.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-vic-lilac p-8 shadow-sm border border-vic-purple/10"
        >
          <h3 className="text-xl font-extrabold text-vic-ink">Our guidance areas</h3>
          <StaggerGroup as="ul" className="mt-5 grid gap-4 text-sm text-slate-700" staggerDelay={0.08}>
            {[
              'Destination and course exploration',
              'University shortlisting',
              'Application and document guidance',
              'Test and visa preparation guidance'
            ].map((x) => (
              <StaggerItem as="li" key={x} className="flex gap-3 items-center">
                <CheckCircle2 className="shrink-0 text-vic-purple" size={18} />
                <span className="font-semibold">{x}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </motion.div>
      </section>
      <CTA />
    </>
  )
}

export function Contact() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <SEO title="Contact VIC Overseas" />
      <PageHero
        eyebrow="Get in touch"
        title="Let’s talk about your study abroad plans."
        text="Contact VIC Overseas to discuss your goals, destination preferences and possible next steps."
      />
      <div className="container-shell grid gap-8 py-14 lg:grid-cols-2">
        {/* Left Column: Office info + Connect with us */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8"
        >
          <div className="service-card shadow-sm">
            <h2 className="text-2xl font-black text-vic-ink">VIC Overseas</h2>
            <div className="mt-7 grid gap-5 text-sm text-slate-700">
              <p>
                <strong className="block text-vic-ink">Office location</strong>
                Secunderabad, Telangana, India
              </p>
              <p>
                <strong className="block text-vic-ink">Phone</strong>
                <a href={`tel:${social.phoneTel}`} className="text-vic-purple font-semibold hover:underline">
                  {social.phoneDisplay}
                </a>
              </p>
              <p>
                <strong className="block text-vic-ink">Email for Admissions</strong>
                <a href="mailto:apply@vicoverseas.com" className="text-vic-purple font-semibold hover:underline">
                  apply@vicoverseas.com
                </a>
              </p>
              <p>
                <strong className="block text-vic-ink">Website</strong>
                <a
                  href={social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vic-purple font-semibold hover:underline"
                >
                  {social.website}
                </a>
              </p>
            </div>
            <p className="mt-7 text-xs leading-6 text-slate-500">
              Contact us for the exact office address, directions and appointment availability.
            </p>
          </div>

          {/* Connect With Us Card */}
          <div className="service-card shadow-sm">
            <h3 className="text-xl font-black text-vic-ink">Connect with us</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Reach out directly on WhatsApp or follow our official social channels for updates and study guidance.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with VIC Overseas on WhatsApp"
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                className="group flex min-h-[48px] items-center gap-3.5 rounded-2xl border border-vic-purple/15 bg-white p-3.5 text-sm font-bold text-slate-800 shadow-sm transition hover:border-[#25D366] hover:bg-[#25D366] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#25D366]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition group-hover:bg-white group-hover:text-[#25D366]">
                  <FaWhatsapp size={20} />
                </span>
                <span>Chat on WhatsApp</span>
              </motion.a>

              <motion.a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow VIC Overseas on Instagram"
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                className="group flex min-h-[48px] items-center gap-3.5 rounded-2xl border border-vic-purple/15 bg-white p-3.5 text-sm font-bold text-slate-800 shadow-sm transition hover:border-[#E4405F] hover:bg-[#E4405F] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#E4405F]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4405F]/10 text-[#E4405F] transition group-hover:bg-white group-hover:text-[#E4405F]">
                  <FaInstagram size={19} />
                </span>
                <span>Follow on Instagram</span>
              </motion.a>

              <motion.a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with VIC Overseas on LinkedIn"
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                className="group flex min-h-[48px] items-center gap-3.5 rounded-2xl border border-vic-purple/15 bg-white p-3.5 text-sm font-bold text-slate-800 shadow-sm transition hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] transition group-hover:bg-white group-hover:text-[#0A66C2]">
                  <FaLinkedinIn size={18} />
                </span>
                <span>Connect on LinkedIn</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Counselling Request + Reviews */}
        <motion.div
          id="book-counselling"
          initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-start"
        >
          <div className="service-card shadow-sm">
            <h2 className="text-2xl font-black text-vic-ink">Request a counselling session</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Share your details using our enquiry form on the home page or send your enquiry directly to{' '}
              <strong className="text-vic-purple">apply@vicoverseas.com</strong>.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <motion.a
                href="/#book-counselling"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="btn-primary w-full text-center"
              >
                Open Enquiry Form <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="btn-outline w-full text-center"
              >
                <FaWhatsapp size={16} className="inline text-[#25D366]" /> Instant WhatsApp Enquiry
              </motion.a>
            </div>
          </div>

          <div className="mt-8">
            <GoogleReviews compact={true} />
          </div>
        </motion.div>
      </div>
      <CTA />
    </>
  )
}

export function TestimonialsPage() {
  return (
    <>
      <SEO
        title="Student Reviews & Testimonials"
        description="Read authentic reviews, ratings and university journey testimonials from students guided by VIC Overseas."
      />
      <PageHero
        eyebrow="Testimonials"
        title="Student reviews and university testimonials."
        text="Discover genuine reviews, admission successes and international university journeys from students across the globe."
      />
      <Testimonials isStandalonePage={true} />
      <CTA />
    </>
  )
}
