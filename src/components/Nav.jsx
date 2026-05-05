import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'WORK',    to: '/work'    },
  { label: 'ABOUT',   to: '/about'   },
  { label: 'CONTACT', to: '/contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [time, setTime] = useState('')
  const location = useLocation()

  useEffect(() => setOpen(false), [location])

  useEffect(() => {
    const t = () => {
      const n = new Date()
      setTime(`${String(n.getUTCHours()).padStart(2,'0')}:${String(n.getUTCMinutes()).padStart(2,'0')}:${String(n.getUTCSeconds()).padStart(2,'0')}Z`)
    }
    t(); const id = setInterval(t, 1000)
    return () => clearInterval(id)
  }, [])

  const s = {
    fontFamily: 'Share Tech Mono, monospace',
    fontSize: 11,
    letterSpacing: '0.1em',
    textDecoration: 'none',
    color: '#e8e8e8',
    textTransform: 'uppercase',
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[500]"
        style={{ padding: '18px 32px', borderBottom: '1px solid #1a1a1a', background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <Link to="/" style={{ ...s, fontSize: 13, color: '#8b0000', fontFamily: 'Share Tech Mono, monospace' }}>
          EH-01
        </Link>

        <div style={{ display: 'flex', gap: 40, alignItems: 'center' }} className="hidden md:flex">
          {links.map(({ label, to }) => (
            <Link key={to} to={to} style={{ ...s, color: location.pathname === to ? '#e8e8e8' : '#333', position: 'relative' }}
              onMouseEnter={e => e.currentTarget.style.color = '#8b0000'}
              onMouseLeave={e => e.currentTarget.style.color = location.pathname === to ? '#e8e8e8' : '#333'}>
              {location.pathname === to && <span style={{ color: '#8b0000', marginRight: 6 }}>▶</span>}
              {label}
            </Link>
          ))}
        </div>

        <div style={{ ...s, fontSize: 10, color: '#333', display: 'flex', alignItems: 'center', gap: 16 }} className="hidden md:flex">
          <span style={{ color: '#1a1a1a' }}>UTC</span>
          <span>{time}</span>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}
          style={{ ...s, background: 'none', border: 'none', color: open ? '#8b0000' : '#e8e8e8' }}>
          {open ? '[X] CLOSE' : '[=] MENU'}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[400] flex flex-col justify-center md:hidden"
            style={{ background: '#000', padding: '0 32px', borderRight: '1px solid #8b0000' }}
            initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: [0.16,1,0.3,1] }}>
            {links.map(({ label, to }, i) => (
              <motion.div key={to} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}>
                <Link to={to} style={{ ...s, fontSize: 32, fontFamily: 'VT323, monospace', display: 'block', marginBottom: '0.4em', color: location.pathname === to ? '#8b0000' : '#333' }}>
                  {String(i+1).padStart(2,'0')} // {label}
                </Link>
              </motion.div>
            ))}
            <div style={{ ...s, fontSize: 10, color: '#1a1a1a', marginTop: 40 }}>SYS: PORTFOLIO_V2 // AUTH: OK</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
