import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Har route change par page ko top par le jata hai
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
