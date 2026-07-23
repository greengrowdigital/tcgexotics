import Reveal from './Reveal.jsx'

// Editorial section header. A large serif title, an optional graphite intro,
// and a rarely-used kicker. No decorative eyebrow on every section.
export default function SectionHeading({ title, intro, kicker, className = '' }) {
  return (
    <Reveal className={`flex max-w-2xl flex-col items-start gap-5 text-left ${className}`}>
      {kicker && <span className="label">{kicker}</span>}
      <h2 className="text-balance text-[clamp(2.1rem,5vw,3.5rem)] font-medium leading-[1.06]">
        {title}
      </h2>
      {intro && (
        <p className="text-pretty text-lg leading-relaxed text-graphite">{intro}</p>
      )}
    </Reveal>
  )
}
