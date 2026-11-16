const chips = [
  'University Shortlisting',
  'Applications',
  'SOP & LOR',
  'Scholarships',
  'Education Loans',
  'Test Prep',
  'Visa Support'
]

export default function MarqueeTicker() {
  return (
    <div
      className="border-y border-vic-purple/10 bg-[#FAF9FD] py-3.5 overflow-hidden select-none"
      aria-label="Key services marquee"
    >
      <div className="marquee-track flex items-center gap-4">
        {[...chips, ...chips, ...chips, ...chips].map((chip, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-2 rounded-full border border-vic-purple/15 bg-white px-4 py-1.5 text-xs font-bold text-vic-purple shadow-xs whitespace-nowrap transition-colors hover:border-vic-purple hover:bg-vic-purple hover:text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-vic-purple/60" />
            {chip}
          </span>
        ))}
      </div>
    </div>
  )
}
