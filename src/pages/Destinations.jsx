import { useState, useMemo, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Search, ArrowRight, CheckCircle2, Globe2, Sparkles, SlidersHorizontal } from 'lucide-react'
import { useSearchParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import CountryModal from '../components/CountryModal'
import { destinations } from '../data/destinations'

const regions = ['All', 'North America', 'Europe', 'Australasia', 'Asia & Middle East']

export default function Destinations() {
  const shouldReduceMotion = useReducedMotion()
  const [searchParams] = useSearchParams()
  const [selectedRegion, setSelectedRegion] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  // Auto-open country if query param exists (e.g., /destinations?country=uk)
  useEffect(() => {
    const countryParam = searchParams.get('country')
    if (countryParam) {
      const match = destinations.find(
        (c) => c.slug.toLowerCase() === countryParam.toLowerCase()
      )
      if (match) {
        setSelectedCountry(match)
        setModalOpen(true)
      }
    }
  }, [searchParams])

  const filteredDestinations = useMemo(() => {
    return destinations.filter((c) => {
      const matchesRegion =
        selectedRegion === 'All' || c.region === selectedRegion
      const matchesSearch =
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.popularCourses.some((course) =>
          course.toLowerCase().includes(searchQuery.toLowerCase())
        )
      return matchesRegion && matchesSearch
    })
  }, [selectedRegion, searchQuery])

  const handleOpenCountry = (country) => {
    setSelectedCountry(country)
    setModalOpen(true)
  }

  return (
    <>
      <SEO
        title="Study Destinations - USA, UK, Canada, Australia, NZ & Europe"
        description="Explore top global study destinations. Compare degree programs, top courses, post-study work rights, and visa criteria across leading countries."
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden bg-vic-lilac/70 py-16 sm:py-20">
        <div className="container-shell">
          <p className="eyebrow">GLOBAL CAMPUSES</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-vic-ink tracking-tight">
            Find the Right Country for Your Next Chapter
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
            Compare premier education destinations across North America, Europe, Australasia, and Asia. Explore admissions timelines, degree structures, and post-study work visas.
          </p>

          {/* Search & Filter Bar */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-2xl">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search by country, course, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-vic-purple/15 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:border-vic-purple focus:outline-none focus:ring-2 focus:ring-vic-purple/20 transition"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {regions.map((region) => (
                <button
                  key={region}
                  type="button"
                  onClick={() => setSelectedRegion(region)}
                  className={`rounded-xl px-4 py-3 text-xs font-bold transition whitespace-nowrap ${
                    selectedRegion === region
                      ? 'bg-vic-purple text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-vic-purple/15 hover:bg-vic-lilac'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Countries Grid (All 10 Countries) */}
      <section className="section-pad bg-white">
        <div className="container-shell">
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <p className="text-sm font-bold text-slate-500">
              Showing <span className="text-vic-ink font-extrabold">{filteredDestinations.length}</span> study destinations
            </p>
            <span className="text-xs text-slate-400">Click any country to view full details</span>
          </div>

          {filteredDestinations.length === 0 ? (
            <div className="py-16 text-center">
              <Globe2 size={40} className="mx-auto text-slate-300" />
              <h3 className="mt-4 text-xl font-bold text-vic-ink">No destinations matched your search</h3>
              <p className="mt-2 text-sm text-slate-500">Try clearing your search terms or selecting 'All' regions.</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedRegion('All')
                }}
                className="btn-outline mt-5"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredDestinations.map((c, i) => (
                <motion.div
                  key={c.slug}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={shouldReduceMotion ? {} : { y: -6 }}
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-vic-purple/10 shadow-sm hover:shadow-md transition-all"
                >
                  {/* Photo Banner */}
                  <div className="relative h-48 overflow-hidden bg-slate-200">
                    <img
                      src={c.image}
                      alt={`${c.name} destination`}
                      width="400"
                      height="192"
                      loading={i < 3 ? 'eager' : 'lazy'}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-vic-ink backdrop-blur-sm shadow-xs">
                      {c.code}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{c.flag}</span>
                        <h2 className="text-xl font-extrabold text-vic-ink">{c.name}</h2>
                      </div>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-600 line-clamp-2">
                        {c.summary}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                          {c.tuitionRange.split('/')[0]?.trim()} (approx)
                        </span>
                        <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                          Bachelors & Masters
                        </span>
                        <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                          {c.region}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => handleOpenCountry(c)}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-vic-purple group-hover:text-vic-deep group-hover:translate-x-1 transition-all"
                      >
                        <span>View details</span>
                        <ArrowRight size={15} />
                      </button>
                      <span className="text-xs font-semibold text-slate-400">
                        {c.comparisonRank}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>



      {/* Bottom CTA Banner */}
      <section className="section-pad bg-gradient-to-r from-vic-deep to-vic-purple text-white">
        <div className="container-shell text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-white/80">NEED GUIDANCE?</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black">
            Not sure which country suits your profile?
          </h2>
          <p className="mt-4 text-base text-white/85 leading-relaxed">
            Every student has unique academic grades, financial circumstances, and career ambitions. Let our expert counsellors analyze your background and match you with the best study destination.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact#book-counselling"
              className="btn-light inline-flex items-center gap-2 py-3.5 px-7 text-sm font-bold shadow-lg"
            >
              <span>Book Profile Evaluation</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/919108560255?text=Hi%20VIC%20Overseas,%20I'm%20not%20sure%20which%20country%20to%20choose.%20Can%20you%20help%20me%20decide?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 border-white text-white hover:bg-white hover:text-vic-purple py-3.5 px-6 text-sm font-bold transition"
            >
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Country Details Modal */}
      <CountryModal
        country={selectedCountry}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}
