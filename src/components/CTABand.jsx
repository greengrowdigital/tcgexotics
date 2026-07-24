import { ArrowRight, Phone } from 'lucide-react'
import { uns, IMG } from '../data/images.js'
import { SITE } from '../data/site.js'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import { useReserve } from './Reserve.jsx'

// Reused closing CTA — a full-bleed image with a deep ink scrim and one clear step.
export default function CTABand({
  title = 'Ready to drive today?',
  sub = 'Tell us the car and the dates. We handle the rest — usually within the hour.',
  image = 'sleekNight',
}) {
  const { open } = useReserve()
  return (
    <section className="shell py-20 sm:py-28">
      <Reveal className="relative overflow-hidden rounded-[1.75rem]">
        <img
          src={uns(IMG[image], 1280)}
          srcSet={`${uns(IMG[image], 768)} 768w, ${uns(IMG[image], 1280)} 1280w, ${uns(IMG[image], 1600)} 1600w`}
          sizes="(max-width: 80rem) 100vw, 1280px"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/92 via-black/75 to-black/45" />
        <div className="relative flex flex-col items-start gap-6 px-6 py-16 text-white sm:px-14 sm:py-24">
          <h2 className="max-w-2xl text-balance font-display text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] text-white">
            {title}
          </h2>
          <p className="max-w-lg text-pretty text-lg text-white/75">{sub}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={() => open()} size="lg" icon={ArrowRight}>
              Reserve now
            </Button>
            <Button href={`tel:${SITE.phoneRaw}`} variant="outline" size="lg" icon={Phone}>
              {SITE.phoneDisplay}
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
