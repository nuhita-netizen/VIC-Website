import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Target,
  Sparkles,
  Users,
  Award,
  Building2,
  CheckCircle2
} from 'lucide-react'
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import GoogleReviews from '../components/GoogleReviews'
import { aboutDifferentiators } from '../data/servicesData'
import { social, whatsappUrl } from '../config/social'

const values = [
  {
    icon: ShieldCheck,
    title: '100% Transparency',
    desc: 'Zero unverified tie-ups, no hidden costs, and honest admission likelihood assessments for every applicant.'
  },
  {
    icon: Target,
    title: 'Personalised Advisory',
    desc: 'Every student profile is unique. We craft individualized study roadmaps rather than one-size-fits-all recommendations.'
  },
  {
    icon: HeartHandshake,
    title: 'Student-First Philosophy',
    desc: 'We prioritize the long-term career growth, well-being, and return on investment for the student and their family.'
  },
  {
    icon: Award,
    title: 'Integrity in Documentation',
    desc: 'Rigorous vetting of academic transcripts, financial affidavits, and SOP narratives ensures airtight compliance with visa rules.'
  }
]

// Team section with clearly marked TODO placeholders
const teamMembers = [
  {
    name: 'Senior Study Abroad Advisor',
    role: 'Director & Principal Counsellor',
    bio: 'Experienced overseas education consultant specializing in US & UK university shortlisting, competitive admissions, and visa interview preparation.',
    linkedin: social.linkedin,
    todoNote: 'TODO: Replace with actual founder/counsellor photo, name, and bio'
  },
  {
    name: 'Senior Admissions & Visa Specialist',
    role: 'Lead Admissions Advisor',
    bio: 'Expert in Canadian SDS processing, Australian Subclass 500 visa documentation, GTE compliance, and education loan structuring.',
    linkedin: social.linkedin,
    todoNote: 'TODO: Replace with actual team member photo, name, and bio'
  }
]

export default function About() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <SEO
        title="About VIC Overseas Education - Mission, Values & Team"
        description="Learn about VIC Overseas Education: our mission, transparent counselling values, student-first approach, and dedicated team guiding international students from Secunderabad, Telangana."
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden bg-vic-lilac/70 py-16 sm:py-20">
        <div className="container-shell">
          <p className="eyebrow">ABOUT VIC OVERSEAS</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-vic-ink tracking-tight">
            Guiding Ambitious Minds Toward Global Horizons
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
            Founded with a commitment to integrity, VIC Overseas Education provides genuine, structured counselling to help Indian students navigate admissions and visas for premier global universities.
          </p>
        </div>
      </section>

      {/* Our Story & Mission Section */}
      <section className="section-pad bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-5 text-slate-600 leading-relaxed text-base">
            <span className="text-xs font-bold uppercase tracking-wider text-vic-purple">OUR STORY & MISSION</span>
            <h2 className="text-3xl font-black text-vic-ink tracking-tight">
              A Transparent Approach to Overseas Education
            </h2>
            <p>
              Applying for an international university is one of the most critical investments a student and their family will ever make. Too often, students encounter ambiguous advice, generic shortlists, and unexpected costs.
            </p>
            <p>
              VIC Overseas was established in Secunderabad, Telangana, to bring clarity, transparency, and clinical precision to study abroad consulting. We treat every application with the respect and individual attention it deserves—ensuring students target institutions where they will genuinely thrive academically and professionally.
            </p>
            <p>
              Our mission is straightforward: to empower aspiring scholars with unbiased advice, high-standard test coaching, ethical document guidance, and seamless visa preparation across the USA, UK, Canada, Australia, New Zealand, and Europe.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-sm font-semibold text-vic-ink">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-600" />
                Rooted in Secunderabad
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-600" />
                Ethical & Direct Advisory
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-600" />
                Global Alumni Network
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-vic-lilac/50 p-8 border border-vic-purple/15 shadow-sm space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-vic-purple text-white shadow-xs">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-extrabold text-vic-ink">Our Core Mission</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                “To bridge the gap between Indian student potential and global academic excellence through honest mentorship, thorough preparation, and unyielding support.”
              </p>
              <div className="pt-4 border-t border-vic-purple/10 flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span>VIC Overseas Education</span>
                <span>Telangana, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values (4 Cards) */}
      <section className="section-pad bg-[#F9F8FD] border-t border-vic-purple/10">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow">WHAT WE STAND FOR</p>
            <h2 className="section-title">Our Guiding Values</h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              The fundamental principles that guide every counselling conversation and university submission.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-3xl bg-white p-7 border border-vic-purple/10 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-vic-lilac text-vic-purple mb-5">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-extrabold text-vic-ink">{v.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">{v.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us (6 Differentiators) */}
      <section className="section-pad bg-white">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow">THE VIC ADVANTAGE</p>
            <h2 className="section-title">Why Students & Parents Trust Us</h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Key differentiators that make our counselling dependable and outcome-driven.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutDifferentiators.map((diff, i) => (
              <div
                key={diff.title}
                className="rounded-3xl border border-vic-purple/10 bg-slate-50/50 p-6 shadow-xs hover:bg-white hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 text-vic-purple font-black text-sm">
                  <span>0{i + 1}</span>
                </div>
                <h3 className="mt-3 text-lg font-extrabold text-vic-ink">{diff.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder & Team Section */}
      <section className="section-pad bg-[#F9F8FD] border-t border-vic-purple/10">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow">LEADERSHIP & ADVISORY</p>
            <h2 className="section-title">Meet Our Counsellors</h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Dedicated overseas education specialists guiding your profile with personal accountability.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white p-7 border border-vic-purple/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-vic-lilac text-vic-purple text-xl font-bold">
                      VIC
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-vic-ink">{member.name}</h3>
                      <p className="text-xs font-semibold text-vic-purple">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0A66C2] hover:underline"
                  >
                    <FaLinkedinIn size={14} />
                    <span>Connect on LinkedIn</span>
                  </a>
                  {/* TODO placeholder comment */}
                  <span className="text-[10px] text-slate-400 italic">[{member.todoNote}]</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners / Accreditations Placeholder */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container-shell text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Institutional Applications & Partnerships
          </p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-8 text-xs font-semibold text-slate-500">
            <span className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200">USA Universities</span>
            <span className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200">UK Russell Group</span>
            <span className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200">Canadian DLIs</span>
            <span className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200">Australian Go8</span>
            <span className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200">European State Universities</span>
          </div>
          {/* TODO Placeholder Note */}
          <p className="mt-3 text-[11px] text-slate-400 italic">
            [TODO: Official university partner badges and agent certification logos will be displayed here upon verification]
          </p>
        </div>
      </section>

      {/* Reviews Strip */}
      <section className="section-pad bg-[#F9F8FD] border-t border-vic-purple/10">
        <div className="container-shell">
          <GoogleReviews compact={true} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-pad bg-gradient-to-r from-vic-deep to-vic-purple text-white">
        <div className="container-shell text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black">
            Experience the VIC Overseas Difference
          </h2>
          <p className="mt-4 text-base text-white/85 leading-relaxed">
            Take the first step towards your international degree with mentors who put your career first.
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
