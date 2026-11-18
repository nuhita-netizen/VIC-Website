import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield, FileText } from 'lucide-react'

export function PrivacyModal({ isOpen, onClose }) {
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

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative z-10 w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5 text-vic-purple">
              <Shield size={22} />
              <h2 className="text-xl font-bold text-vic-ink">Privacy Policy</h2>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mt-5 space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              At <strong>VIC Overseas Education</strong>, your privacy and document security are of paramount importance. This policy outlines how we collect, handle, and protect your information.
            </p>
            <h3 className="font-bold text-vic-ink text-base">1. Information We Collect</h3>
            <p>
              We collect details such as your name, contact phone number, email address, academic qualifications, test scores (IELTS/TOEFL/GRE), and destination preferences solely for admissions and counselling evaluation.
            </p>
            <h3 className="font-bold text-vic-ink text-base">2. Purpose of Use</h3>
            <p>
              Your data is utilized exclusively to provide university shortlisting, application filing, visa guidance, and communications regarding your study abroad journey. We never sell or lease your personal information to third-party commercial marketing agencies.
            </p>
            <h3 className="font-bold text-vic-ink text-base">3. Document Confidentiality</h3>
            <p>
              Academic transcripts, financial statements, and identification papers are handled with strict confidentiality and submitted only to official university application portals and diplomatic visa authorities upon your consent.
            </p>
            <h3 className="font-bold text-vic-ink text-base">4. Contact & Inquiries</h3>
            <p>
              For privacy queries or to request deletion of your records, reach us at <span className="font-semibold text-vic-purple">apply@vicoverseas.com</span>.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-right">
            <button onClick={onClose} className="btn-primary py-2.5 px-6 text-sm">
              I Understand
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export function TermsModal({ isOpen, onClose }) {
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

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative z-10 w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5 text-vic-purple">
              <FileText size={22} />
              <h2 className="text-xl font-bold text-vic-ink">Terms of Service</h2>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mt-5 space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              By accessing the <strong>VIC Overseas Education</strong> website or engaging our counselling services, you agree to these standard operational terms.
            </p>
            <h3 className="font-bold text-vic-ink text-base">1. Advisory Role</h3>
            <p>
              VIC Overseas provides professional advisory and facilitation services. University admission decisions and student visa grants rest solely under the discretion of the respective educational institutions and government immigration bodies.
            </p>
            <h3 className="font-bold text-vic-ink text-base">2. Accuracy of Information</h3>
            <p>
              Applicants are responsible for the authenticity and veracity of all documents, transcripts, and financial records supplied during the admission and visa filing process.
            </p>
            <h3 className="font-bold text-vic-ink text-base">3. Transparent Fee Policy</h3>
            <p>
              Initial profile evaluation and counselling sessions are free of charge. Any university application fees, standardized testing fees, visa petition charges, and translation services are payable directly to the respective authorities.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-right">
            <button onClick={onClose} className="btn-primary py-2.5 px-6 text-sm">
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
