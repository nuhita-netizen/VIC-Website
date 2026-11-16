export default function SectionHeading({eyebrow, title, text, center=true}) {
  return <div className={`${center ? 'mx-auto text-center' : ''} max-w-2xl`}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2 className="section-title">{title}</h2>
    {text && <p className="mt-4 leading-7 text-slate-600">{text}</p>}
  </div>
}