import { useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion, useReducedMotion } from 'framer-motion'
import { social, getWhatsAppUrl } from '../config/social'

const initial = { name: '', phone: '', email: '', country: '', intake: '', testScore: '' }

export default function LeadForm() {
  const [form, setForm] = useState(initial)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

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
          name: form.name,
          phone: form.phone,
          email: form.email,
          country: form.country,
          intake: form.intake,
          testScore: form.testScore || 'Not provided',
          _subject: `VIC Overseas Free Counselling: ${form.name} (${form.country})`,
          _replyto: form.email,
          _captcha: 'false',
          recipient: 'apply@vicoverseas.com'
        })
      })

      if (!response.ok) {
        throw new Error('Submission error')
      }

      setSent(true)
      setForm(initial)
    } catch {
      // Graceful fallback to email client and WhatsApp if direct network dispatch fails
      const mailtoSubject = encodeURIComponent(`Counselling Request - ${form.name}`)
      const mailtoBody = encodeURIComponent(
        `Hello VIC Overseas,\n\nI would like to request free counselling:\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        `Email: ${form.email}\n` +
        `Destination: ${form.country}\n` +
        `Intake: ${form.intake}\n` +
        `Test Score: ${form.testScore || 'Not provided'}`
      )
      window.location.href = `mailto:apply@vicoverseas.com?subject=${mailtoSubject}&body=${mailtoBody}`
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  const customWhatsAppMsg = `Hi VIC Overseas! I would like to book free counselling.\nName: ${form.name || 'Student'}\nPreferred Country: ${form.country || 'To discuss'}`

  return (
    <div className="rounded-3xl bg-white p-6 shadow-soft sm:p-8">
      {sent ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-10 text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 size={44} />
          </div>
          <h3 className="mt-4 text-2xl font-extrabold text-vic-ink">Thank you for reaching out!</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Your enquiry details have been sent to{' '}
            <strong className="text-vic-purple">apply@vicoverseas.com</strong>.
            Our counselling advisors will connect with you shortly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button className="btn-outline" onClick={() => setSent(false)}>
              Submit another enquiry
            </button>
            <a
              href={getWhatsAppUrl(customWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with VIC Overseas on WhatsApp"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-xs font-extrabold text-white shadow-md transition hover:scale-105"
            >
              <FaWhatsapp size={17} />
              Connect on WhatsApp now
            </a>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name">
            <input
              required
              name="name"
              value={form.name}
              onChange={update}
              placeholder="Your full name"
              className="form-input"
            />
          </Field>
          <Field label="Phone number">
            <input
              required
              name="phone"
              value={form.phone}
              onChange={update}
              placeholder="+91 98765 43210"
              className="form-input"
              inputMode="tel"
            />
          </Field>
          <Field label="Email address">
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={update}
              placeholder="you@example.com"
              className="form-input"
            />
          </Field>
          <Field label="Preferred country">
            <select
              required
              name="country"
              value={form.country}
              onChange={update}
              className="form-input"
            >
              <option value="">Select a destination</option>
              {[
                'USA',
                'UK',
                'Canada',
                'Australia',
                'New Zealand',
                'Ireland',
                'France',
                'Italy',
                'Netherlands',
                'Sweden',
                'Other European Destination',
                'Not sure yet'
              ].map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Preferred intake">
            <input
              name="intake"
              value={form.intake}
              onChange={update}
              placeholder="e.g. September 2027"
              className="form-input"
            />
          </Field>
          <Field label="English / admission test score">
            <input
              name="testScore"
              value={form.testScore}
              onChange={update}
              placeholder="e.g. IELTS 7.0 (optional)"
              className="form-input"
            />
          </Field>

          <div className="sm:col-span-2">
            {error && (
              <p role="alert" className="mb-3 text-sm font-medium text-red-600">
                {error}
              </p>
            )}

            <div className="grid gap-3 sm:grid-cols-2">
              <motion.button
                className="btn-primary group w-full justify-center"
                type="submit"
                disabled={loading}
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                {loading ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Request Free Counselling</span>
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-200 group-hover:translate-x-[3px]"
                    />
                  </>
                )}
              </motion.button>

              {/* Secondary WhatsApp button beside form */}
              <motion.a
                href={getWhatsAppUrl(customWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with VIC Overseas on WhatsApp instead"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#25D366] bg-white px-5 py-3 text-xs font-extrabold text-slate-800 transition hover:bg-[#25D366] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                <FaWhatsapp size={18} className="text-[#25D366] group-hover:text-white" />
                <span>Chat on WhatsApp instead</span>
              </motion.a>
            </div>

            <p className="mt-3 text-center text-xs leading-5 text-slate-500">
              Enquiry data is dispatched directly to{' '}
              <strong className="text-slate-700">apply@vicoverseas.com</strong>. By submitting, you agree to be contacted by VIC Overseas regarding your enquiry.
            </p>
          </div>
        </form>
      )}
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="grid gap-1.5 text-sm font-semibold text-slate-700">
      <span>{label}</span>
      {children}
    </label>
  )
}
