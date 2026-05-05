import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Work',    to: '/work'    },
  { label: 'About',   to: '/about'   },
  { label: 'Contact', to: '/contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[500] flex justify-between items-center"
        style={{ padding: '28px 4vw', mixBlendMode: 'difference' }}>
        <Link to="/" style={{ fontFamily:'JetBrains Mono,monospace', fontSize:11, letterSpacing:'0.14em', color:'#d4d4d4', textDecoration:'none', textTransform:'uppercase' }}>
          EH / SEC_ENG
        </Link>
        <div className="hidden md:flex gap-10 items-center">
          {links.map(({ label, to }) => (
            <Link key={to} to={to}
              style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'0.16em', textTransform:'uppercase', color: location.pathname === to ? '#c8ff00' : '#666', textDecoration:'none', transition:'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color='#d4d4d4'}
              onMouseLeave={e => e.currentTarget.style.color = location.pathname === to ? '#c8ff00' : '#666'}>
              {label}
            </Link>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}
          style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'0.14em', textTransform:'uppercase', color:'#d4d4d4', background:'none', border:'none' }}>
          {open ? 'CLOSE' : 'MENU'}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[400] flex flex-col justify-center md:hidden"
            style={{ padding:'0 4vw', background:'#050505' }}
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.3 }}>
            {links.map(({ label, to }, i) => (
              <motion.div key={to} initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay: i*0.08, duration:0.5 }}>
                <Link to={to} style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(52px,12vw,80px)', color:'#d4d4d4', textDecoration:'none', lineHeight:1, letterSpacing:'-0.03em', display:'block', marginBottom:'0.15em' }}>
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
