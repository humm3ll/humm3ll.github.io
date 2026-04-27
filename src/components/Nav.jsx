import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[500] flex justify-between items-center px-10 py-7 mix-blend-difference"
        style={{ transition: 'padding 0.4s ease' }}
      >
        <Link
          to="/"
          className="font-mono text-[11px] tracking-[0.15em] text-white uppercase no-underline"
          style={{ color: '#f0ede6' }}
        >
          Ethan Hulme
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'Work',    to: '/work'    },
            { label: 'About',   to: '/about'   },
            { label: 'Contact', to: '/contact' },
          ].map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="font-mono text-[10px] tracking-[0.14em] uppercase no-underline transition-opacity duration-200"
              style={{
                color: '#f0ede6',
                opacity: location.pathname === to ? 1 : 0.4,
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = location.pathname === to ? 1 : 0.4}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden font-mono text-[10px] tracking-widest uppercase"
          style={{ color: '#f0ede6', background: 'none', border: 'none' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className="fixed inset-0 z-[400] flex flex-col justify-center px-10 md:hidden"
        style={{
          background: '#000',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        <div className="flex flex-col gap-6">
          {[
            { label: 'Work',    to: '/work'    },
            { label: 'About',   to: '/about'   },
            { label: 'Contact', to: '/contact' },
          ].map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="font-serif italic no-underline"
              style={{
                color: '#f0ede6',
                fontSize: 'clamp(48px, 12vw, 80px)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="mt-16 font-mono text-[10px] tracking-widest uppercase" style={{ color: '#3a3a3a' }}>
          humm3ll.github.io
        </div>
      </div>
    </>
  )
}
