import { Link, useParams } from 'react-router-dom'
import { ArrowRight, GraduationCap, BookOpen, Globe2, FileText, Award, Users, CheckCircle2, Phone } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import Testimonials from '../components/Testimonials'
import GoogleReviews from '../components/GoogleReviews'
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

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="bg-vic-lilac/70 py-16 sm:py-20">
      <div className="container-shell">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-vic-ink sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{text}</p>
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
      <div className="container-shell grid gap-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {countries.map((c, i) => (
          <Link key={c.slug} to={`/countries/${c.slug}`} className="country-card group">
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
            <div className="p-5">
              <p className="text-2xl">{c.flag}</p>
              <h2 className="mt-2 text-xl font-extrabold text-vic-ink">{c.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{c.summary}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-vic-purple">
                Explore destination <ArrowRight size={15} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <CTA />
    </>
  )
}

export function CountryDetail() {
  const { slug } = useParams()
  const data = countryDetails[slug]
  if (!data) return <PageHero eyebrow="Destination" title="Destination information" text="Please select a destination from our countries page." />
  const c = countries.find((x) => x.slug === slug)
  return (
    <>
      <SEO title={`Study in ${data[0]}`} description={`Explore study opportunities in ${data[0]} with VIC Overseas.`} />
      <section className="relative bg-slate-200">
        <div className="absolute inset-0 bg-slate-200 animate-pulse" />
        <img
          src={c?.image || '/images/hero-campus.jpg'}
          alt={`${data[0]} study destination`}
          width="1440"
          height="440"
          loading="eager"
          fetchPriority="high"
          className="relative z-[1] h-[340px] w-full object-cover sm:h-[440px]"
        />
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-vic-deep/85 to-vic-deep/20" />
        <div className="container-shell absolute inset-0 z-[3] flex flex-col justify-center text-white">
          <p className="text-sm font-bold uppercase tracking-[.2em]">{c?.flag} Study destination</p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">Study in {data[0]}</h1>
          <p className="mt-4 max-w-xl leading-7 text-white/85">{data[1]}</p>
        </div>
      </section>
      <div className="container-shell grid gap-10 py-14 lg:grid-cols-[1fr_300px]">
        <div>
          <h2 className="text-2xl font-black text-vic-ink">Explore your options in {data[0]}</h2>
          <p className="mt-4 leading-8 text-slate-600">{data[2]}</p>
          <h3 className="mt-9 text-xl font-extrabold text-vic-ink">How VIC Overseas can support you</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              'Course and university exploration',
              'Application document guidance',
              'Application process support',
              'Visa preparation guidance'
            ].map((x) => (
              <div key={x} className="flex gap-3 rounded-xl border border-vic-purple/10 p-4 text-sm font-semibold text-slate-700">
                <CheckCircle2 className="shrink-0 text-vic-purple" size={18} />
                {x}
              </div>
            ))}
          </div>
          <p className="mt-7 text-sm leading-7 text-slate-500">
            Admission criteria, language requirements, tuition fees, scholarships and visa rules vary by institution and may change. Confirm current requirements with the relevant official sources.
          </p>
        </div>
        <aside className="h-fit rounded-2xl bg-vic-lilac p-6">
          <GraduationCap className="text-vic-purple" size={32} />
          <h3 className="mt-4 text-xl font-extrabold text-vic-ink">Planning to study here?</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Discuss your profile and destination preferences with our team.</p>
          <a href="/#book-counselling" className="btn-primary mt-5 w-full">
            Book Free Counselling
          </a>
        </aside>
      </div>
      <Testimonials countryFilter={data[0]} title={`Student Experiences in ${data[0]}`} />
      <CTA />
    </>
  )
}

export function Services() {
  return (
    <>
      <SEO title="Study Abroad Services" />
      <PageHero
        eyebrow="Our services"
        title="Support that moves your plans forward."
        text="Explore the guidance areas available through VIC Overseas as you plan your international education journey."
      />
      <section className="container-shell grid gap-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div className="service-card" key={s.title}>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-vic-lilac text-vic-purple">
              <s.icon size={24} strokeWidth={2} />
            </span>
            <h2 className="mt-4 text-xl font-extrabold text-vic-ink">{s.title}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">{s.text}</p>
          </div>
        ))}
      </section>
      <CTA />
    </>
  )
}

export function Exams() {
  return (
    <>
      <SEO title="IELTS, TOEFL, GRE and PTE" />
      <PageHero
        eyebrow="Exam guidance"
        title="Prepare for your next test with a plan."
        text="Explore common English language and graduate admissions tests. Requirements depend on the university, course and destination."
      />
      <div className="container-shell grid gap-5 py-14 sm:grid-cols-2">
        {exams.map(([n, d]) => (
          <div className="service-card" key={n}>
            <BookOpen className="text-vic-purple" size={30} />
            <h2 className="mt-4 text-2xl font-black text-vic-ink">{n}</h2>
            <p className="mt-2 leading-7 text-slate-600">{d}</p>
            <p className="mt-4 text-xs text-slate-500">Check the specific institution’s current test and score requirements.</p>
          </div>
        ))}
      </div>
      <CTA />
    </>
  )
}

export function Universities() {
  return (
    <>
      <SEO title="University Guidance" />
      <PageHero
        eyebrow="University exploration"
        title="Find a university that fits your goals."
        text="Explore programme options, compare entry requirements and organise your application plan with guidance from VIC Overseas."
      />
      <div className="container-shell grid gap-6 py-14 md:grid-cols-3">
        {[
          ['Course fit', 'Explore programmes that connect with your academic background and career interests.', GraduationCap],
          ['Application readiness', 'Understand document requirements, deadlines and application steps.', FileText],
          ['Informed decisions', 'Compare relevant factors such as course content, location and costs.', Globe2]
        ].map(([t, d, I]) => (
          <div className="service-card" key={t}>
            <I className="text-vic-purple" size={30} />
            <h2 className="mt-4 text-xl font-extrabold text-vic-ink">{t}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">{d}</p>
          </div>
        ))}
      </div>
      <CTA />
    </>
  )
}

export function Scholarships() {
  return (
    <>
      <SEO title="Scholarship Guidance" />
      <PageHero
        eyebrow="Funding your education"
        title="Explore scholarship possibilities."
        text="Scholarship availability and eligibility vary by university, course, destination and applicant profile. Start by understanding the options relevant to your plans."
      />
      <div className="container-shell grid gap-5 py-14 md:grid-cols-2">
        <div className="service-card">
          <Award className="text-vic-purple" size={32} />
          <h2 className="mt-4 text-xl font-extrabold text-vic-ink">University scholarships</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Check university websites for merit-based, programme-specific and other funding opportunities.
          </p>
        </div>
        <div className="service-card">
          <Users className="text-vic-purple" size={32} />
          <h2 className="mt-4 text-xl font-extrabold text-vic-ink">External funding</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Research government, foundation and other external scholarship programmes, checking official eligibility and deadlines.
          </p>
        </div>
      </div>
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
        <div className="rounded-3xl border border-dashed border-vic-purple/25 bg-vic-lilac/40 px-6 py-14 text-center">
          <BookOpen className="mx-auto text-vic-purple" size={38} />
          <h2 className="mt-4 text-2xl font-black text-vic-ink">Articles coming soon</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-600">
            We’re preparing useful, carefully reviewed resources for students exploring international education.
          </p>
        </div>
      </div>
      <CTA />
    </>
  )
}

export function About() {
  return (
    <>
      <SEO title="About VIC Overseas" />
      <PageHero
        eyebrow="About us"
        title="Helping students take confident steps towards global education."
        text="VIC Overseas is a study abroad consultancy based in Secunderabad, Telangana, supporting students as they explore international study options."
      />
      <section className="container-shell grid gap-10 py-14 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-black text-vic-ink">A more informed journey starts with a conversation.</h2>
          <p className="mt-4 leading-8 text-slate-600">
            Choosing a destination, course and university can involve many decisions. VIC Overseas aims to make the process easier to understand through personalised guidance across key stages of study abroad planning.
          </p>
        </div>
        <div className="rounded-3xl bg-vic-lilac p-8">
          <h3 className="text-xl font-extrabold text-vic-ink">Our guidance areas</h3>
          <ul className="mt-5 grid gap-4 text-sm text-slate-700">
            {[
              'Destination and course exploration',
              'University shortlisting',
              'Application and document guidance',
              'Test and visa preparation guidance'
            ].map((x) => (
              <li className="flex gap-3" key={x}>
                <CheckCircle2 className="shrink-0 text-vic-purple" size={18} />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTA />
    </>
  )
}

export function Contact() {
  return (
    <>
      <SEO title="Contact VIC Overseas" />
      <PageHero
        eyebrow="Get in touch"
        title="Let’s talk about your study abroad plans."
        text="Contact VIC Overseas to discuss your goals, destination preferences and possible next steps."
      />
      <div className="container-shell grid gap-8 py-14 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="service-card">
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
          <div className="service-card">
            <h3 className="text-xl font-black text-vic-ink">Connect with us</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Reach out directly on WhatsApp or follow our official social channels for updates and study guidance.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with VIC Overseas on WhatsApp"
                className="group flex min-h-[48px] items-center gap-3.5 rounded-2xl border border-vic-purple/15 bg-white p-3.5 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#25D366]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition group-hover:bg-white group-hover:text-[#25D366]">
                  <FaWhatsapp size={20} />
                </span>
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow VIC Overseas on Instagram"
                className="group flex min-h-[48px] items-center gap-3.5 rounded-2xl border border-vic-purple/15 bg-white p-3.5 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-[#E4405F] hover:bg-[#E4405F] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#E4405F]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4405F]/10 text-[#E4405F] transition group-hover:bg-white group-hover:text-[#E4405F]">
                  <FaInstagram size={19} />
                </span>
                <span>Follow on Instagram</span>
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with VIC Overseas on LinkedIn"
                className="group flex min-h-[48px] items-center gap-3.5 rounded-2xl border border-vic-purple/15 bg-white p-3.5 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] transition group-hover:bg-white group-hover:text-[#0A66C2]">
                  <FaLinkedinIn size={18} />
                </span>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div id="book-counselling" className="flex flex-col justify-start">
          <div className="service-card">
            <h2 className="text-2xl font-black text-vic-ink">Request a counselling session</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Share your details using our enquiry form on the home page or send your enquiry directly to{' '}
              <strong className="text-vic-purple">apply@vicoverseas.com</strong>.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a href="/#book-counselling" className="btn-primary w-full text-center">
                Open Enquiry Form <ArrowRight size={16} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="btn-outline w-full text-center"
              >
                <FaWhatsapp size={16} className="inline text-[#25D366]" /> Instant WhatsApp Enquiry
              </a>
            </div>
          </div>

          <div className="mt-8">
            <GoogleReviews compact={true} />
          </div>
        </div>
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
