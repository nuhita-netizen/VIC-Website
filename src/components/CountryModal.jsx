import { useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X, CheckCircle2, ArrowRight, DollarSign, Clock, BookOpen, Briefcase, Calendar } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { getWhatsAppUrl } from '../config/social'
import { Link } from 'react-router-dom'

export default function CountryModal({ country, isOpen, onClose }) {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!country) return null

  const whatsappMsg = `Hi VIC Overseas! I would like to get free counselling and profile assessment for studying in ${country.name}.`

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-country-title"
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0, scale: 1 } : { opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-100 my-8 max-h-[90vh] flex flex-col"
          >
            {/* Header with image */}
            <div className="relative h-48 sm:h-56 shrink-0 bg-slate-900 overflow-hidden">
              <img
                src={country.image}
                alt={`${country.name} study destination`}
                className="h-full w-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/70 transition"
              >
                <X size={20} />
              </button>

              <div className="absolute bottom-4 left-6 right-6 z-10 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{country.flag}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                    {country.region}
                  </span>
                </div>
                <h2 id="modal-country-title" className="mt-1 text-2xl sm:text-3xl font-black">
                  Study in {country.name}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-white/90 line-clamp-1">
                  {country.summary}
                </p>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 flex flex-col justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Tuition Fee (approx)</p>
                  <p className="mt-1.5 text-sm font-extrabold text-vic-ink leading-snug break-words">
                    {country.tuitionRange} (approx)
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 flex flex-col justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Duration (Bachelors & Masters)</p>
                  <p className="mt-1.5 text-sm font-extrabold text-vic-ink leading-snug break-words">
                    {country.duration}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 flex flex-col justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Intakes</p>
                  <p className="mt-1.5 text-sm font-extrabold text-vic-ink leading-snug break-words">
                    {country.intakes}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 flex flex-col justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Post-Study Work</p>
                  <p className="mt-1.5 text-sm font-extrabold text-vic-ink leading-snug break-words">
                    {country.workRights?.split('.')[1]?.trim() || country.workRights?.split('.')[0] || 'Available'}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 sm:col-span-2 flex flex-col justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Accepted Exams</p>
                  <p className="mt-1.5 text-sm font-extrabold text-vic-ink leading-snug break-words">
                    {country.acceptedExams}
                  </p>
                </div>
              </div>

              {/* Why Study Here (3 Bullets) */}
              <div>
                <h3 className="text-base font-extrabold text-vic-ink">
                  Why Study in {country.name}?
                </h3>
                <div className="mt-3 space-y-2.5">
                  {country.whyStudy?.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3 rounded-xl bg-vic-lilac/40 p-3 text-sm text-slate-700">
                      <CheckCircle2 size={18} className="text-vic-purple shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Courses */}
              <div>
                <h3 className="text-base font-extrabold text-vic-ink">
                  Popular Academic Fields
                </h3>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {country.popularCourses?.map((course) => (
                    <span
                      key={course}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Work Rights & Visa Overview */}
              <div className="rounded-2xl border border-vic-purple/15 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-bold text-vic-purple mb-1">
                  <Briefcase size={16} />
                  <span>Work Rights & Post-Study Visas</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {country.workRights}
                </p>
                <div className="mt-2 text-xs text-slate-500 flex items-center gap-1.5">
                  <BookOpen size={14} className="text-slate-400 shrink-0" />
                  <span>Accepted Exams: {country.acceptedExams}</span>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 shrink-0 flex flex-col sm:flex-row gap-3">
              <Link
                to={`/contact?country=${country.slug}`}
                onClick={onClose}
                className="btn-primary flex-1 justify-center py-3 text-sm font-bold"
              >
                <span>Get Free Counselling for {country.name}</span>
                <ArrowRight size={16} className="ml-1" />
              </Link>
              <a
                href={getWhatsAppUrl(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white py-3 px-4 text-sm font-bold transition"
              >
                <FaWhatsapp size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
