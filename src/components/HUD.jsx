import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const pageIds = {
  '/':        'SYS_HOME',
  '/work':    'SYS_WORK',
  '/about':   'SYS_ABOUT',
  '/contact': 'SYS_CONTACT',
}

export default function HUD() {
  const [time, setTime]  = useState('')
  const [vp, setVp]      = useState({ w: 0, h: 0 })
  const location         = useLocation()
  const pageId           = pageIds[location.pathname] || 'SYS_???'

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const h = String(now.getUTCHours()).padStart(2, '0')
      const m = String(now.getUTCMinutes()).padStart(2, '0')
      const s = String(now.getUTCSeconds()).padStart(2, '0')
      setTime(`${h}:${m}:${s}`)
    }
    tick()
    const id = setInterval(tick, 1000)

    const onResize = () => setVp({ w: window.innerWidth, h: window.innerHeight })
    onResize()
    window.addEventListener('resize', onResize)

    return () => { clearInterval(id); window.removeEventListener('resize', onResize) }
  }, [])

  const base = {
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '9px',
    letterSpacing: '0.12em',
    color: 'rgba(102,102,102,0.7)',
    textTransform: 'uppercase',
    lineHeight: '1.8',
    position: 'fixed',
    zIndex: 300,
    pointerEvents: 'none',
  }

  return (
    <>
      {/* Top-left */}
      <div style={{ ...base, top: 28, left: '4vw' }}>
        <div>UTC {time}</div>
        <div style={{ color: '#c8ff00', opacity: 0.6 }}>{pageId}</div>
      </div>

      {/* Top-right */}
      <div style={{ ...base, top: 28, right: '4vw', textAlign: 'right' }}>
        <div>{vp.w} × {vp.h}</div>
        <div>STATUS_ONLINE</div>
      </div>

      {/* Bottom-left */}
      <div style={{ ...base, bottom: 28, left: '4vw' }}>
        <div>53.5461°N 2.6461°W</div>
      </div>

      {/* Bottom-right */}
      <div style={{ ...base, bottom: 28, right: '4vw', textAlign: 'right' }}>
        <div>humm3ll.github.io</div>
      </div>
    </>
  )
}
