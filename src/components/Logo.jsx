import { Link } from 'react-router-dom'
import Mark from './Mark.jsx'

// Wordmark: "TCG" solid + "EXOTICS" spaced at 70% opacity. The mark carries
// the color. `tone` adapts to a dark (over-hero) or light (on-content) surface.
export default function Logo({ onClick, tone = 'ink' }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="TCGEXOTICS — home"
      className={`group inline-flex items-center gap-2.5 ${tone === 'light' ? 'text-white' : 'text-ink'}`}
    >
      <Mark
        size={36}
        className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-[20deg]"
      />
      <span className="text-[1.05rem] font-bold leading-none tracking-[-0.01em]">
        TCG
        <span className="ml-0.5 align-middle text-[0.62rem] font-semibold tracking-[0.3em] opacity-70">
          EXOTICS
        </span>
      </span>
    </Link>
  )
}
