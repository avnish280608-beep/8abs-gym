import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Membership', to: '/membership' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-charcoal-dark/95 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-crimson flex items-center justify-center rounded-sm font-display text-white text-xl font-bold tracking-tight">
            8
          </div>
          <div className="leading-tight">
            <div className="font-display text-2xl tracking-widest text-white">8 ABS</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-[0.3em] -mt-1">GYM</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `font-medium uppercase tracking-widest text-sm transition-colors duration-200 ${
                  isActive ? 'text-crimson' : 'text-gray-300 hover:text-crimson'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="tel:09044405342"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-white border border-crimson/50 hover:border-crimson hover:bg-crimson/10 px-4 py-2 rounded-sm transition-all duration-200 uppercase tracking-widest"
          >
            <svg className="w-4 h-4 text-crimson" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call Now
          </a>
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `font-medium uppercase tracking-widest text-base transition-colors duration-200 ${
                  isActive ? 'text-crimson' : 'text-gray-300'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="tel:09044405342"
            className="btn-primary justify-center mt-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            090444 05342
          </a>
        </div>
      )}
    </nav>
  )
}
