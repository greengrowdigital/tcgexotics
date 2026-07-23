import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Reset scroll to top instantly on route change.
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [pathname])
  return null
}
