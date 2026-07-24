import { useId } from 'react'

// The TCGEXOTICS mark: a tachometer gauge whose sweep is the brand
// ember gradient, wrapped around a wheel hub. Mirrors the client's logo.
export default function GaugeMark({ size = 32, className = '' }) {
  const gid = useId()
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      role="img"
      aria-label="TCGEXOTICS"
    >
      <defs>
        <linearGradient id={gid} x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A4771A" />
          <stop offset="0.55" stopColor="#C99A2E" />
          <stop offset="1" stopColor="#ECD68F" />
        </linearGradient>
      </defs>
      <circle
        cx="32"
        cy="32"
        r="21"
        stroke={`url(#${gid})`}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="90 42"
        transform="rotate(128 32 32)"
      />
      <circle cx="32" cy="32" r="11.5" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="32" cy="32" r="3.4" fill="currentColor" />
      <path
        d="M32 21v4.4M32 38.6v4.4M21 32h4.4M38.6 32h4.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
