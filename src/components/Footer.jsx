import { Link } from 'react-router-dom'
import { Instagram, Mail, MapPin, Phone } from 'lucide-react'
import GaugeMark from './GaugeMark.jsx'
import { NAV, SITE, AREAS } from '../data/site.js'
import { useReserve } from './Reserve.jsx'

// Dark anchor — the one deep-ink moment on a light site, for editorial contrast.
export default function Footer() {
  const { open } = useReserve()
  const year = 2026

  return (
    <footer className="relative mt-24 bg-ink pb-[calc(7rem+env(safe-area-inset-bottom))] pt-20 text-white md:pb-16">
      <div className="shell">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] lg:grid-cols-[1.7fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 text-white">
              <GaugeMark size={36} />
              <span className="text-xl font-bold tracking-[-0.01em]">
                TCG<span className="text-xs font-semibold tracking-[0.3em] opacity-70">EXOTICS</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-white/60">
              Luxury, exotic &amp; everyday rentals by the day, week or month. Keys today across New
              York, New Jersey, Connecticut &amp; Pennsylvania.
            </p>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 px-3.5 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
              </span>
              <span className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white/70">
                Booking now · keys today
              </span>
            </div>
          </div>

          <nav aria-label="Footer" className="text-[0.95rem]">
            <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/50">
              Explore
            </p>
            <ul className="flex flex-col gap-3">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-white/70 transition-colors hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <button onClick={() => open()} className="text-white/70 transition-colors hover:text-white">
                  Reserve a car
                </button>
              </li>
            </ul>
          </nav>

          <div className="text-[0.95rem]">
            <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/50">
              Coverage
            </p>
            <ul className="flex flex-col gap-3 text-white/70">
              {AREAS.map((a) => (
                <li key={a.short} className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-flame" />
                  {a.full}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-[0.95rem]">
            <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/50">
              Get in touch
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-2.5 text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-flame" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-white/70 transition-colors hover:text-white"
                >
                  <Instagram className="h-4 w-4 text-flame" />
                  {SITE.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-flame" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-[0.8rem] text-white/50 sm:flex-row sm:items-center">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p className="uppercase tracking-[0.16em]">Daily · Weekly · Monthly — Drive Today</p>
        </div>
      </div>
    </footer>
  )
}
