import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2,
  Loader2,
  MessageSquare,
  HelpCircle
} from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO'
import { social, whatsappUrl, getWhatsAppUrl } from '../config/social'
import { officeContact } from '../data/contact'
import { destinations } from '../data/destinations'

const miniFaqs = [
  {
    q: 'Do I need to make an appointment before visiting the office?',
    a: 'While walk-ins are welcomed, we strongly recommend scheduling a free consultation slot beforehand so that a dedicated country specialist is reserved exclusively for your session.'
  },
  {
    q: 'Can I do my counselling sessions virtually over Zoom or Google Meet?',
    a: 'Yes, absolutely! We conduct virtual 1-on-1 video consultations for students across India and abroad with screen-shared university shortlisting and document reviews.'
  },
  {
    q: 'What documents should I keep ready for my initial consultation?',
    a: 'Bring or keep ready your Class 10 & 12 marksheets, Bachelor’s semester transcripts/consolidated marksheet, updated resume, and any test score reports (IELTS/GRE) if already taken.'
  }
]

export default function Contact() {
  const shouldReduceMotion = useReducedMotion()
  const [searchParams] = useSearchParams()

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    courseLevel: 'Masters / Postgraduate',
    message: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  // Pre-fill country if query param exists (e.g., /contact?country=uk)
  useEffect(() => {
    const countryParam = searchParams.get('country')
    if (countryParam) {
      const match = destinations.find(
        (c) => c.slug.toLowerCase() === countryParam.toLowerCase()
      )
      if (match) {
        setForm((prev) => ({ ...prev, country: match.name }))
      }
    }
  }, [searchParams])

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
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
          inquiryType: 'Contact Page Counselling Booking',
          name: form.name,
          phone: form.phone,
          email: form.email,
          country: form.country || 'Not specified',
          courseLevel: form.courseLevel,
          message: form.message || 'No additional message provided',
          _subject: `VIC Overseas Counselling Enquiry: ${form.name} (${form.country || 'General'})`,
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
        country: '',
        courseLevel: 'Masters / Postgraduate',
        message: ''
      })
    } catch {
      // Fallback to mailto
      const mailtoSubject = encodeURIComponent(`Counselling Request - ${form.name}`)
      const mailtoBody = encodeURIComponent(
        `Hello VIC Overseas,\n\nI would like to book a free counselling session:\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        `Email: ${form.email}\n` +
        `Preferred Country: ${form.country}\n` +
        `Course Level: ${form.courseLevel}\n` +
        `Message: ${form.message}`
      )
      window.location.href = `mailto:apply@vicoverseas.com?subject=${mailtoSubject}&body=${mailtoBody}`
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  const customWhatsAppMsg = `Hi VIC Overseas! I would like to book a free counselling session.\nName: ${form.name || 'Student'}\nPreferred Country: ${form.country || 'To discuss'}\nLevel: ${form.courseLevel}`

  return (
    <>
      <SEO
        title="Contact VIC Overseas Education - Secunderabad, Telangana"
        description="Get in touch with VIC Overseas Education. Book a free study abroad counselling session via form, WhatsApp (+91 91085 60255), phone, or visit our Secunderabad office."
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden bg-vic-lilac/70 py-16 sm:py-20">
        <div className="container-shell">
          <p className="eyebrow">GET IN TOUCH</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-vic-ink tracking-tight">
            Let’s Talk About Your Study Abroad Ambitions
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
            Have questions about countries, test prep, universities, or visas? Connect directly with our advisory desk or visit our office in Secunderabad.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Contact Info */}
      <section id="book-counselling" className="section-pad scroll-mt-28 bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Short Conversion Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 sm:p-10 border border-vic-purple/15 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-vic-purple">DIRECT ENQUIRY</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-black text-vic-ink">
                Book Your Free Counselling Session
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-500">
                All enquiries delivered directly to <span className="font-semibold text-vic-purple">apply@vicoverseas.com</span>
              </p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={44} />
                  </div>
                  <h3 className="mt-4 text-2xl font-extrabold text-vic-ink">Enquiry Received!</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-vic-ink">{form.name || 'Student'}</strong>. Your consultation details have been sent to <strong className="text-vic-purple">apply@vicoverseas.com</strong>. One of our senior advisors will contact you shortly.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <button onClick={() => setSent(false)} className="btn-outline">
                      Submit another enquiry
                    </button>
                    <a
                      href={getWhatsAppUrl(customWhatsAppMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a]"
                    >
                      <FaWhatsapp size={18} />
                      <span>Confirm on WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                  {error && (
                    <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
                      {error}
                    </div>
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
                        Preferred Country
                      </label>
                      <select
                        name="country"
                        value={form.country}
                        onChange={update}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 focus:border-vic-purple focus:bg-white focus:outline-none focus:ring-2 focus:ring-vic-purple/20 transition"
                      >
                        <option value="">Select Target Country</option>
                        {destinations.map((d) => (
                          <option key={d.slug} value={d.name}>
                            {d.flag} {d.name}
                          </option>
                        ))}
                        <option value="Undecided / Open to Suggestion">Undecided / Open to Suggestion</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Course Level
                      </label>
                      <select
                        name="courseLevel"
                        value={form.courseLevel}
                        onChange={update}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 focus:border-vic-purple focus:bg-white focus:outline-none focus:ring-2 focus:ring-vic-purple/20 transition"
                      >
                        <option value="Masters / Postgraduate">Masters / Postgraduate (MS / MA / MSc)</option>
                        <option value="Bachelors / Undergraduate">Bachelors / Undergraduate (BS / BA)</option>
                        <option value="MBA / Management">MBA / Management</option>
                        <option value="Doctorate / PhD">Doctorate / PhD</option>
                        <option value="PG Diploma / Certificate">Postgraduate Diploma</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Message / Study Plans (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us about your target intake, academic field, or specific questions..."
                      value={form.message}
                      onChange={update}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-vic-purple focus:bg-white focus:outline-none focus:ring-2 focus:ring-vic-purple/20 transition"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary flex-1 justify-center py-3.5 text-base font-bold shadow-md hover:shadow-lg disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={18} className="animate-spin mr-2" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Book Free Counselling Session</span>
                          <ArrowRight size={17} className="ml-1" />
                        </>
                      )}
                    </button>

                    <a
                      href={getWhatsAppUrl(customWhatsAppMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex items-center justify-center gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white py-3.5 px-4 font-bold transition"
                    >
                      <FaWhatsapp size={18} />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Contact Details & Working Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Options Card */}
            <div className="rounded-3xl bg-[#F9F8FD] p-6 sm:p-8 border border-vic-purple/10">
              <h3 className="text-xl font-black text-vic-ink">Direct Contact Options</h3>
              <div className="mt-6 space-y-4 text-sm text-slate-700">
                <a
                  href={`tel:${social.phoneTel}`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-vic-purple transition group"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-vic-lilac text-vic-purple group-hover:bg-vic-purple group-hover:text-white transition">
                    <Phone size={18} />
                  </span>
                  <div>
                    <span className="block text-xs text-slate-500 font-semibold">Call Our Advisors</span>
                    <strong className="text-vic-ink">{social.phoneDisplay}</strong>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-[#25D366] transition group"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition">
                    <FaWhatsapp size={20} />
                  </span>
                  <div>
                    <span className="block text-xs text-slate-500 font-semibold">WhatsApp Chat</span>
                    <strong className="text-vic-ink">+91 91085 60255 (Instant Reply)</strong>
                  </div>
                </a>

                <a
                  href="mailto:apply@vicoverseas.com"
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-vic-purple transition group"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-vic-lilac text-vic-purple group-hover:bg-vic-purple group-hover:text-white transition">
                    <Mail size={18} />
                  </span>
                  <div>
                    <span className="block text-xs text-slate-500 font-semibold">Admissions Email</span>
                    <strong className="text-vic-ink">apply@vicoverseas.com</strong>
                  </div>
                </a>
              </div>

              {/* Working Hours */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                <Clock size={18} className="text-vic-purple shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-vic-ink">Office Working Hours</strong>
                  <span>{officeContact.hours.weekdays}</span>
                  <span className="block text-slate-600">{officeContact.hours.saturday}</span>
                  <span className="block text-slate-500 text-xs mt-0.5">{officeContact.hours.sunday}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-6 pt-5 border-t border-slate-200/80">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Official Social Channels
                </p>
                <div className="flex gap-3">
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow VIC Overseas on Instagram"
                    className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-3.5 py-2 text-xs font-bold text-slate-700 hover:border-[#E4405F] hover:text-[#E4405F] transition"
                  >
                    <FaInstagram size={16} />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with VIC Overseas on LinkedIn"
                    className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-3.5 py-2 text-xs font-bold text-slate-700 hover:border-[#0A66C2] hover:text-[#0A66C2] transition"
                  >
                    <FaLinkedinIn size={15} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Address Card (Lavender Mist Surface, 16px radius, no shadow) */}
            <div className="rounded-[16px] bg-[#F1EFFD] p-6 border border-vic-purple/15 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-vic-purple">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-vic-purple block">
                      OFFICE LOCATION
                    </span>
                    <h4 className="font-extrabold text-vic-ink text-base">
                      {officeContact.name}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      Area: {officeContact.area}, {officeContact.state} {officeContact.postalCode}
                    </p>
                  </div>
                </div>

                <a
                  href={officeContact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline shrink-0 inline-flex items-center gap-1.5 py-2 px-3 text-xs font-extrabold uppercase tracking-wider bg-transparent border-vic-purple/30 text-vic-purple hover:bg-white/80"
                >
                  <span>GET DIRECTIONS</span>
                  <ArrowRight size={13} />
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="overflow-hidden rounded-[14px] border border-vic-purple/15 h-48 bg-white">
                <iframe
                  title="VIC Overseas Education Devarayamjal Office Location Map"
                  src={officeContact.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ Section */}
      <section className="section-pad bg-[#F9F8FD] border-t border-vic-purple/10">
        <div className="container-shell max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-vic-purple">QUICK ANSWERS</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-vic-ink">
              Frequently Asked Questions Before You Connect
            </h2>
          </div>

          <div className="grid gap-4">
            {miniFaqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-5 sm:p-6 border border-vic-purple/10 shadow-xs">
                <h3 className="font-extrabold text-vic-ink text-base flex items-start gap-2.5">
                  <HelpCircle size={18} className="text-vic-purple shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
