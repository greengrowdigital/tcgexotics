import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

// Shared form primitives — used by the Reserve modal and the Contact form so
// input styling, labels, the select chevron, and the mock submit stay in sync.

export const today = () => new Date().toISOString().split('T')[0]

export const inputCls =
  'w-full rounded-xl border border-line bg-cloud px-4 py-3 text-[0.95rem] text-ink placeholder:text-mist ' +
  'transition-colors duration-200 focus:border-flame focus:bg-paper focus:outline-none'

export function Field({ label, children, htmlFor, required }) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-graphite">
        {label}
        {required && <span className="text-flame"> *</span>}
      </span>
      {children}
    </label>
  )
}

export function Select({ id, value, onChange, children }) {
  return (
    <div className="relative">
      <select id={id} value={value} onChange={onChange} className={`${inputCls} appearance-none pr-10`}>
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-graphite"
        aria-hidden="true"
      />
    </div>
  )
}

// Mock async submit (front-end only): idle → sending → done.
export function useFakeSubmit(delay = 1100) {
  const [status, setStatus] = useState('idle')
  const submit = (e) => {
    e.preventDefault()
    setStatus('sending')
    window.setTimeout(() => setStatus('done'), delay)
  }
  return { status, setStatus, submit }
}
