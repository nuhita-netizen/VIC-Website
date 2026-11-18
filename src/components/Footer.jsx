import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { social, whatsappUrl } from '../config/social'
import { officeContact } from '../data/contact'
import { PrivacyModal, TermsModal } from './LegalModals'

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)

  return (
    <>
      <footer className="bg-[#1E1550] text-white pt-16 pb-12 border-t border-white/10">
        <div className="container-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block rounded-xl bg-white p-4 shadow-md transition-transform duration-200 hover:scale-[1.02]"
              aria-label="VIC Overseas Education logo"
            >
              <img
                src="/images/vic-logo.png"
                srcSet="/images/vic-logo.png 1x, /images/vic-logo@2x.png 2x"
                alt="VIC Overseas Education logo"
                className="h-[52px] sm:h-[64px] w-auto object-contain"
              />
            </Link>
            <p className="text-xs font-black uppercase tracking-wider text-amber-300">
              Best Guidance for Bright Future
            </p>
            <p className="text-sm leading-6 text-slate-300">
              Trusted study abroad consultancy guiding ambitious students from India to prestigious universities across the USA, UK, Canada, Australia, New Zealand, and Europe.
            </p>
            {/* Follow Us Row */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Connect With Us</p>
              <div className="flex items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open VIC Overseas on WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-[#25D366]"
                >
                  <FaWhatsapp size={18} />
                </a>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open VIC Overseas on Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:-translate-y-0.5 hover:border-[#E4405F] hover:bg-[#E4405F]"
                >
                  <FaInstagram size={17} />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open VIC Overseas on LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:-translate-y-0.5 hover:border-[#0A66C2] hover:bg-[#0A66C2]"
                >
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition">Destinations</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">All Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">Contact & Locations</Link>
              </li>
              <li>
                <a href="/#reviews" className="hover:text-white transition">Student & Parent Reviews</a>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Our Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/services#counselling" className="hover:text-white transition">Career & Course Counselling</Link>
              </li>
              <li>
                <Link to="/services#university-shortlisting" className="hover:text-white transition">University Shortlisting</Link>
              </li>
              <li>
                <Link to="/services#application-assistance" className="hover:text-white transition">SOP & Application Support</Link>
              </li>
              <li>
                <Link to="/services#test-preparation" className="hover:text-white transition">IELTS, GRE & Test Prep</Link>
              </li>
              <li>
                <Link to="/services#scholarships-funding" className="hover:text-white transition">Scholarships & Education Loans</Link>
              </li>
              <li>
                <Link to="/services#visa-guidance" className="hover:text-white transition">Visa Filing & Mock Interviews</Link>
              </li>
              <li>
                <Link to="/services#pre-departure" className="hover:text-white transition">Pre-Departure & Accommodation</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Visit Us Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Visit Us</h3>
            <div className="mt-4 space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-amber-400 shrink-0 mt-0.5" />
                <a
                  href={officeContact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition leading-snug group"
                  aria-label="Open VIC Overseas Devarayamjal office location in Google Maps"
                >
                  <span className="font-bold text-white block group-hover:text-amber-300">
                    Area: {officeContact.area}
                  </span>
                  <span className="text-slate-300">{officeContact.state} {officeContact.postalCode}</span>
                  <span className="block text-[11px] text-amber-400 font-bold mt-1 group-hover:underline">
                    Open in Google Maps ↗
                  </span>
                </a>
              </div>

              <div className="pt-2.5 border-t border-white/10 space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <Phone size={16} className="text-amber-400 shrink-0" />
                  <a href={`tel:${officeContact.phoneTel}`} className="hover:text-white transition font-medium">
                    {officeContact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <FaWhatsapp size={16} className="text-[#25D366] shrink-0" />
                  <a href={officeContact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition">
                    WhatsApp Chat (+91 91085 60255)
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={16} className="text-amber-400 shrink-0" />
                  <a href={`mailto:${officeContact.email}`} className="hover:text-white transition">
                    {officeContact.email}
                  </a>
                </div>
                <div className="flex items-start gap-2.5 pt-1">
                  <Clock size={16} className="text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-relaxed">
                    {officeContact.hours.weekdays}<br />
                    {officeContact.hours.saturday}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="container-shell mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} VIC Overseas Education. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-white underline underline-offset-4 transition"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setTermsOpen(true)}
              className="hover:text-white underline underline-offset-4 transition"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  )
}
