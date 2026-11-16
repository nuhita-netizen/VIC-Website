import { Link } from 'react-router-dom'
import { Globe2, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { social, whatsappUrl } from '../config/social'
import { StaggerGroup, StaggerItem } from './Animation'

export default function Footer() {
  return (
    <footer className="bg-[#1D1648] text-white">
      <div className="container-shell py-14">
        <StaggerGroup
          className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]"
          staggerDelay={0.08}
        >
          {/* Column 1: Brand & Follow Us */}
          <StaggerItem>
            <Link to="/" className="inline-block" aria-label="VIC Overseas home">
              <img
                src="/images/vic-overseas-logo-white.png"
                alt="VIC Overseas logo"
                className="h-14 sm:h-16 w-auto max-w-[270px] sm:max-w-[300px] object-contain transition-transform duration-200 hover:scale-105"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Supporting students as they explore international education opportunities and plan their next chapter.
            </p>

            {/* Follow Us Social Links */}
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-white/50">Follow us</p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open VIC Overseas on WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                >
                  <FaWhatsapp size={20} />
                </a>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open VIC Overseas on Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:-translate-y-1 hover:border-[#E4405F] hover:bg-[#E4405F] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#E4405F]"
                >
                  <FaInstagram size={19} />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open VIC Overseas on LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:-translate-y-1 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>

            <div className="mt-5">
              <a
                href={social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-vic-red transition-colors"
              >
                Visit our website <ArrowUpRight size={15} />
              </a>
            </div>
          </StaggerItem>

          {/* Column 2: Explore */}
          <StaggerItem>
            <h3 className="font-bold text-base">Explore</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/70">
              {[
                ['Countries', '/countries'],
                ['Services', '/services'],
                ['Exams', '/exams'],
                ['Universities', '/universities'],
                ['Scholarships', '/scholarships']
              ].map(([n, u]) => (
                <Link className="transition-colors hover:text-white" key={u} to={u}>
                  {n}
                </Link>
              ))}
            </div>
          </StaggerItem>

          {/* Column 3: Company */}
          <StaggerItem>
            <h3 className="font-bold text-base">Company</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/70">
              {[
                ['About us', '/about'],
                ['Testimonials', '/testimonials'],
                ['Blog', '/blog'],
                ['Contact', '/contact']
              ].map(([n, u]) => (
                <Link className="transition-colors hover:text-white" key={u} to={u}>
                  {n}
                </Link>
              ))}
            </div>
          </StaggerItem>

          {/* Column 4: Get in touch */}
          <StaggerItem>
            <h3 className="font-bold text-base">Get in touch</h3>
            <div className="mt-4 grid gap-4 text-sm text-white/75">
              <p className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-vic-red" />
                Secunderabad, Telangana, India
              </p>
              <a
                className="flex gap-3 transition-colors hover:text-white"
                href={`tel:${social.phoneTel}`}
                aria-label={`Call VIC Overseas at ${social.phoneDisplay}`}
              >
                <Phone size={17} className="mt-0.5 shrink-0 text-vic-red" />
                {social.phoneDisplay}
              </a>
              <a
                className="flex gap-3 transition-colors hover:text-white"
                href={social.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit VIC Overseas website"
              >
                <Globe2 size={17} className="mt-0.5 shrink-0 text-vic-red" />
                vicoverseas.com
              </a>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <span>© {new Date().getFullYear()} VIC Overseas. All rights reserved.</span>
          <span>Study abroad guidance, with you at every step.</span>
        </div>
      </div>
    </footer>
  )
}
