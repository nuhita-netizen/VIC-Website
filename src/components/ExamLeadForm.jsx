import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle2, Loader2, BookOpen } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion, useReducedMotion } from 'framer-motion'
import { social, getWhatsAppUrl } from '../config/social'

const examOptions = [
  { id: 'IELTS', label: 'IELTS (Academic / General)' },
  { id: 'TOEFL', label: 'TOEFL iBT' },
  { id: 'GRE', label: 'GRE (General Test)' },
  { id: 'PTE', label: 'PTE Academic' },
  { id: 'Duolingo', label: 'Duolingo English Test (DET)' },
  { id: 'SELT', label: 'SELT / UKVI English Tests' }
]

const coachingModes = [
  'Online Live Interactive Classes',
  'Classroom Coaching (Secunderabad)',
  'Weekend Intensive Batch',
  '1-on-1 Personalized Mentoring',
  'Mock Test Series & Evaluation'
]

export default function ExamLeadForm({ selectedExam = 'IELTS', onExamChange }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    exam: selectedExam,
    mode: 'Online Live Interactive Classes',
    targetScore: '',
    currentLevel: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (selectedExam && selectedExam !== form.exam) {
      setForm((prev) => ({ ...prev, exam: selectedExam }))
    }
  }, [selectedExam])

  const update = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (name === 'exam' && onExamChange) {
      onExamChange(value)
    }
  }

  async function submit(e) {
    e.preventDefault()
    setError('')

    const cleanPhone = form.phone.replace(/\D/g, '')
    if (!/^[6-9]\d{9}$/.test(cleanPhone.slice(-10))) {
      return setError('Please enter a valid 10-digit Indian mobile number.')
    }

    setLoading(true)

    try {
      const endpoint = import.meta.env.VITE_LEAD_API_URL || 'https://formsubmit.co/ajax/apply@vicoverseas.com'
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          inquiryType: 'Exam Coaching & Preparation',
          name: form.name,
          phone: form.phone,
          email: form.email,
          exam: form.exam,
          preferredMode: form.mode,
          targetScore: form.targetScore || 'Not specified',
          currentLevel: form.currentLevel || 'Not specified',
          _subject: `VIC Overseas Exam Coaching Booking: ${form.name} (${form.exam})`,
          _replyto: form.email,
          _captcha: 'false',
          recipient: 'apply@vicoverseas.com'
        })
      })

      if (!response.ok) {
        throw new Error('Submission error')
      }

      setSent(true)
      setForm({
        name: '',
        phone: '',
        email: '',
        exam: 'IELTS',
        mode: 'Online Live Interactive Classes',
        targetScore: '',
        currentLevel: ''
      })
    } catch {
      // Graceful fallback to email client and WhatsApp if direct network dispatch fails
      const mailtoSubject = encodeURIComponent(`Exam Coaching Booking - ${form.name} (${form.exam})`)
      const mailtoBody = encodeURIComponent(
        `Hello VIC Overseas,\n\nI would like to book exam preparation coaching:\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        `Email: ${form.email}\n` +
        `Target Exam: ${form.exam}\n` +
        `Preferred Mode: ${form.mode}\n` +
        `Target Score: ${form.targetScore || 'Not specified'}\n` +
        `Current Level: ${form.currentLevel || 'Not specified'}`
      )
      window.location.href = `mailto:apply@vicoverseas.com?subject=${mailtoSubject}&body=${mailtoBody}`
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  const customWhatsAppMsg = `Hi VIC Overseas! I would like to book ${form.exam || 'Exam'} preparation coaching.\nName: ${form.name || 'Student'}\nMode: ${form.mode}`

  return (
    <div className="rounded-3xl bg-white p-6 shadow-soft sm:p-8 border border-vic-purple/10">
      {sent ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-10 text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 size={44} />
          </div>
          <h3 className="mt-4 text-2xl font-extrabold text-vic-ink">Booking Request Received!</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Your exam preparation enquiry has been forwarded to{' '}
            <strong className="text-vic-purple">apply@vicoverseas.com</strong>.
            Our expert exam mentors will contact you shortly with batch schedules and diagnostic test details.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button className="btn-outline" onClick={() => setSent(false)}>
              Book another exam session
            </button>
            <a
              href={getWhatsAppUrl(customWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Confirm booking on WhatsApp"
              className="btn-primary inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a]"
            >
              <FaWhatsapp size={18} />
              <span>Confirm on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={submit} className="space-y-4" noValidate>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-vic-purple">
            <BookOpen size={16} />
            <span>Book Test Preparation</span>
          </div>
          <h3 className="text-xl font-extrabold text-vic-ink sm:text-2xl">
            Register for Coaching & Diagnostic Test
          </h3>
          <p className="text-xs text-slate-500">
            Data delivered directly to <span className="font-semibold text-vic-purple">apply@vicoverseas.com</span>
          </p>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700"
            >
              {error}
            </motion.div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Rahul Sharma"
              value={form.name}
              onChange={update}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-vic-purple focus:bg-white focus:outline-none focus:ring-2 focus:ring-vic-purple/20 transition"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Mobile Number (India) *
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="10-digit number"
                value={form.phone}
                onChange={update}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-vic-purple focus:bg-white focus:outline-none focus:ring-2 focus:ring-vic-purple/20 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={update}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-vic-purple focus:bg-white focus:outline-none focus:ring-2 focus:ring-vic-purple/20 transition"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Target Exam *
              </label>
              <select
                name="exam"
                value={form.exam}
                onChange={update}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 focus:border-vic-purple focus:bg-white focus:outline-none focus:ring-2 focus:ring-vic-purple/20 transition"
              >
                {examOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Preferred Mode *
              </label>
              <select
                name="mode"
                value={form.mode}
                onChange={update}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 focus:border-vic-purple focus:bg-white focus:outline-none focus:ring-2 focus:ring-vic-purple/20 transition"
              >
                {coachingModes.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Target Score (Optional)
              </label>
              <input
                type="text"
                name="targetScore"
                placeholder="e.g. Band 7.5+ or 320+"
                value={form.targetScore}
                onChange={update}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-vic-purple focus:bg-white focus:outline-none focus:ring-2 focus:ring-vic-purple/20 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Current Level / Previous Score (Optional)
              </label>
              <input
                type="text"
                name="currentLevel"
                placeholder="e.g. Beginner or Band 6.0"
                value={form.currentLevel}
                onChange={update}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-vic-purple focus:bg-white focus:outline-none focus:ring-2 focus:ring-vic-purple/20 transition"
              />
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
              className="btn-primary flex-1 justify-center py-3.5 text-base font-bold shadow-md hover:shadow-lg disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin mr-2" />
                  <span>Submitting booking...</span>
                </>
              ) : (
                <>
                  <span>Book {form.exam} Coaching</span>
                  <ArrowRight size={17} className="ml-1" />
                </>
              )}
            </motion.button>

            <motion.a
              href={getWhatsAppUrl(customWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book exam coaching via WhatsApp"
              whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
              className="btn-outline flex items-center justify-center gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white py-3.5 px-4 font-bold transition"
            >
              <FaWhatsapp size={18} />
              <span>Book via WhatsApp</span>
            </motion.a>
          </div>

          <p className="text-center text-[11px] text-slate-400 mt-2">
            By submitting, you agree to receive study abroad and exam preparation updates from VIC Overseas.
          </p>
        </form>
      )}
    </div>
  )
}
