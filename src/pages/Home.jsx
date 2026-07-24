import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Phone, Star } from 'lucide-react'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CarCard from '../components/CarCard.jsx'
import StatCounter from '../components/StatCounter.jsx'
import Marquee from '../components/Marquee.jsx'
import CTABand from '../components/CTABand.jsx'
import { useReserve } from '../components/Reserve.jsx'
import { uns, IMG } from '../data/images.js'
import { FLEET, FEATURED_IDS } from '../data/fleet.js'
import { SITE, AREAS, VALUES, STEPS, STATS, TESTIMONIALS } from '../data/site.js'
import { fadeUp, stagger } from '../lib/motion.js'

const TRUST = [
  'Licensed & insured',
  'Same-day keys',
  'No hidden fees',
  'Delivery available',
  'New York',
  'New Jersey',
  'Connecticut',
  'Pennsylvania',
]

const CATEGORY_TILES = [
  { tag: 'Exotic', img: 'lambo1', copy: 'Supercars that stop traffic.' },
  { tag: 'Luxury', img: 'mercReflect', copy: 'Executive comfort, serious speed.' },
  { tag: 'Everyday', img: 'whiteFord', copy: 'Reliable wheels, honest rates.' },
]

const FEATURED = FEATURED_IDS.map((id) => FLEET.find((c) => c.id === id)).filter(Boolean)

export default function Home() {
  const { open } = useReserve()

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative flex min-h-dvh flex-col justify-end overflow-hidden">
        <img
          src={uns(IMG.sleekNight, 1600)}
          srcSet={`${uns(IMG.sleekNight, 828)} 828w, ${uns(IMG.sleekNight, 1280)} 1280w, ${uns(IMG.sleekNight, 1920)} 1920w, ${uns(IMG.sleekNight, 2400)} 2400w`}
          sizes="100vw"
          alt="Exotic sports car under city lights at night"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

        <div className="shell relative z-10 pb-28 pt-36 sm:pb-24">
          <motion.div variants={stagger(0.1, 0.09)} initial="hidden" animate="show" className="max-w-3xl">
            <motion.p
              variants={fadeUp}
              className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/70"
            >
              {AREAS.map((a) => a.short).join(' · ')}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-[clamp(2.9rem,8vw,5.6rem)] font-medium leading-[0.98] text-white"
            >
              Drive the <span className="serif-italic">extraordinary.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/75"
            >
              Exotic, luxury and everyday cars — by the day, week or month. Licensed, insured, and
              ready when you are.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <Button onClick={() => open()} size="lg" icon={ArrowRight}>
                Reserve today
              </Button>
              <Button to="/fleet" variant="outline" size="lg">
                Browse the fleet
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-white transition-colors hover:text-flame"
              >
                <Phone className="h-4 w-4 text-flame" /> {SITE.phoneDisplay}
              </a>
              <span className="flex items-center gap-2">
                <span className="flex">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-flame text-flame" />
                  ))}
                </span>
                <span className="text-[0.8rem] uppercase tracking-[0.12em] text-white/70">
                  Trusted by 500+ drivers
                </span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Trust marquee ──────────────────────────────────── */}
      <div className="border-b border-line py-6">
        <Marquee items={TRUST} />
      </div>

      {/* ── Editorial value ────────────────────────────────── */}
      <section className="shell py-24 sm:py-32">
        <SectionHeading
          title="A rental company that feels nothing like one."
          intro="No fluorescent counters, no fine print, no upsell theater. Just the right car, a fair price, and keys when you need them."
        />
        <motion.div
          variants={stagger(0, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid gap-10 border-t border-line pt-12 md:grid-cols-3"
        >
          {VALUES.map((v) => (
            <motion.div key={v.title} variants={fadeUp} className="flex flex-col gap-3">
              <h3 className="font-display text-xl font-medium text-ink">{v.title}</h3>
              <p className="leading-relaxed text-graphite">{v.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Featured fleet ─────────────────────────────────── */}
      <section className="bg-cloud py-24 sm:py-32">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              kicker="The fleet"
              title="Cars people actually ask for."
              intro="From same-day dailies to weekend supercars — every one spotless and ready."
              className="!max-w-xl"
            />
            <Reveal>
              <Button to="/fleet" variant="secondary" size="md" icon={ArrowUpRight}>
                View all cars
              </Button>
            </Reveal>
          </div>
          <motion.div
            variants={stagger(0, 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {FEATURED.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Categories ─────────────────────────────────────── */}
      <section className="shell py-24 sm:py-32">
        <SectionHeading title="Three lanes. One set of keys." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CATEGORY_TILES.map((tile) => (
            <Reveal key={tile.tag} variants={fadeUp}>
              <Link
                to="/fleet"
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-line md:aspect-[3/4]"
              >
                <img
                  src={uns(IMG[tile.img], 800)}
                  alt={`${tile.tag} rentals`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
                  <div>
                    <h3 className="font-display text-2xl font-medium text-white">{tile.tag}</h3>
                    <p className="mt-1 text-sm text-white/75">{tile.copy}</p>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-ink">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────── */}
      <section className="bg-cloud py-24 sm:py-32">
        <div className="shell">
          <SectionHeading
            kicker="How it works"
            title="From tap to keys in three steps."
            intro="No accounts, no back-and-forth. Pick, verify, drive."
          />
          <motion.ol
            variants={stagger(0, 0.14)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-16 grid gap-10 md:grid-cols-3"
          >
            {STEPS.map((step) => (
              <motion.li key={step.n} variants={fadeUp} className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="font-display text-5xl font-medium text-line-strong">{step.n}</span>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <h3 className="font-display text-xl font-medium text-ink">{step.title}</h3>
                <p className="leading-relaxed text-graphite">{step.body}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ── Proof ──────────────────────────────────────────── */}
      <section className="shell py-24 sm:py-32">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((s) => (
              <Star key={s} className="h-5 w-5 fill-flame text-flame" />
            ))}
          </div>
          <blockquote className="text-balance font-display text-[clamp(1.5rem,3.5vw,2.4rem)] font-medium leading-[1.25] text-ink">
            “{TESTIMONIALS[0].quote}”
          </blockquote>
          <figcaption className="label">
            {TESTIMONIALS[0].name} — {TESTIMONIALS[0].detail}
          </figcaption>
        </Reveal>
        <motion.div
          variants={stagger(0, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 border-t border-line pt-14 md:grid-cols-4"
        >
          {STATS.map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Closing CTA ────────────────────────────────────── */}
      <CTABand
        title="Your car is waiting. Drive today."
        sub="Message us the car and your dates — we verify fast and get you the keys the same day."
        image="ferrariDark"
      />
    </>
  )
}
