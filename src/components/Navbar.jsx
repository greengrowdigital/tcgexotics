import { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'
import Logo from './Logo.jsx'
import { NAV, SITE } from '../data/site.js'
import { useReserve } from './Reserve.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)
  const { open } = useReserve()
  const { pathname } = useLocation()
  const toggleRef = useRef(null)
  const drawerRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = useCallback(() => {
    setMenu(false)
    window.requestAnimationFrame(() => toggleRef.current?.focus())
  }, [])

  // Drawer as an accessible modal: scroll-lock, Escape, focus trap, focus move.
  useEffect(() => {
    if (!menu) return
    document.body.style.overflow = 'hidden'
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 40)
    const onKey = (e) => {
      if (e.key === 'Escape') {
        closeMenu()
        return
      }
      if (e.key !== 'Tab') return
      const nodes = drawerRef.current?.querySelectorAll('a[href], button:not([disabled])')
      if (!nodes || !nodes.length) return
      const list = Array.from(nodes).filter((n) => n.offsetParent !== null)
      const first = list[0]
      const last = list[list.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.clearTimeout(focusTimer)
      document.removeEventListener('keydown', onKey)
    }
  }, [menu, closeMenu])

  // Light (white) nav only while floating over the Home hero image.
  const onHero = pathname === '/' && !scrolled
  const linkCls = ({ isActive }) =>
    `relative py-1 text-[0.95rem] transition-colors duration-200 ${
      isActive
        ? onHero
          ? 'text-white'
          : 'text-ink'
        : onHero
          ? 'text-white/70 hover:text-white'
          : 'text-graphite hover:text-ink'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4">
      <nav
        aria-label="Primary"
        className={`flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-5 ${
          scrolled
            ? 'border-line bg-paper/80 shadow-card backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <Logo tone={onHero ? 'light' : 'ink'} />

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={linkCls}>
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 h-[2px] w-full ember"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className={`hidden items-center gap-2 rounded-full px-3 py-2 text-[0.9rem] font-medium transition-colors md:inline-flex ${
              onHero ? 'text-white/80 hover:text-white' : 'text-graphite hover:text-ink'
            }`}
          >
            <Phone className="h-4 w-4" />
            {SITE.phoneDisplay}
          </a>
          <button
            onClick={() => open()}
            className="hidden rounded-full ember px-5 py-2.5 text-[0.9rem] font-semibold text-on-accent transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-float active:scale-95 sm:inline-flex"
          >
            Reserve
          </button>

          <button
            ref={toggleRef}
            onClick={() => setMenu(true)}
            aria-label="Open menu"
            aria-expanded={menu}
            className={`grid h-10 w-10 place-items-center rounded-full border transition-colors md:hidden ${
              onHero ? 'border-white/30 text-white' : 'border-line-strong text-ink'
            }`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menu && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={closeMenu} />
            <motion.div
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-3 mt-3 rounded-3xl border border-line bg-paper p-5 shadow-float"
            >
              <div className="flex items-center justify-between">
                <Logo onClick={closeMenu} tone="ink" />
                <button
                  ref={closeRef}
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full border border-line-strong text-ink"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="mt-6 flex flex-col divide-y divide-line">
                {NAV.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `flex items-center justify-between py-4 font-display text-2xl font-medium ${
                          isActive ? 'text-ink' : 'text-graphite'
                        }`
                      }
                    >
                      {item.label}
                      <ArrowUpRight className="h-5 w-5 text-mist" />
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={() => {
                    closeMenu()
                    open()
                  }}
                  className="rounded-full ember px-5 py-4 text-center text-[0.95rem] font-semibold text-on-accent"
                >
                  Reserve a car
                </button>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-line-strong px-5 py-4 text-[0.95rem] font-semibold text-ink"
                >
                  <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
