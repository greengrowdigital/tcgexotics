import Reveal from './Reveal.jsx'

// Shared inner-page header (label + serif h1 + intro). One source of truth for
// the page-intro typography and spacing used by Fleet, Rentals, About, Contact.
export default function PageHeader({ label, title, intro }) {
  return (
    <section className="shell pt-36 pb-6 sm:pt-44">
      <Reveal className="flex max-w-3xl flex-col gap-5">
        <span className="label">{label}</span>
        <h1 className="text-balance font-display text-[clamp(2.6rem,7vw,4.6rem)] font-medium leading-[1.02]">
          {title}
        </h1>
        <p className="max-w-xl text-pretty text-lg leading-relaxed text-graphite">{intro}</p>
      </Reveal>
    </section>
  )
}
