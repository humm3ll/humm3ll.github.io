import { useEffect, useRef } from 'react'

export default function Cursor() {
  const crossRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const raf = useRef(null)

  useEffect(() => {
    const move = e => { pos.current = { x: e.clientX, y: e.clientY } }
    document.addEventListener('mousemove', move)

    const loop = () => {
      if (crossRef.current) {
        crossRef.current.style.left = pos.current.x + 'px'
        crossRef.current.style.top  = pos.current.y + 'px'
      }
      raf.current = requestAnimationFrame(loop)
    }
    loop()

    const onEnter = () => crossRef.current && (crossRef.current.style.color = '#8b0000')
    const onLeave = () => crossRef.current && (crossRef.current.style.color = '#e8e8e8')
    const attach = () => document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    attach()
    const obs = new MutationObserver(attach)
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf.current)
      obs.disconnect()
    }
  }, [])

  return (
    <div ref={crossRef} className="fixed pointer-events-none z-[9999]"
      style={{ transform: 'translate(-50%,-50%)', color: '#e8e8e8', fontSize: 16, fontFamily: 'Share Tech Mono, monospace', userSelect: 'none', mixBlendMode: 'difference', willChange: 'left,top', lineHeight: 1 }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <line x1="10" y1="0"  x2="10" y2="7"  stroke="currentColor" strokeWidth="1"/>
        <line x1="10" y1="13" x2="10" y2="20" stroke="currentColor" strokeWidth="1"/>
        <line x1="0"  y1="10" x2="7"  y2="10" stroke="currentColor" strokeWidth="1"/>
        <line x1="13" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1"/>
        <rect x="8" y="8" width="4" height="4" stroke="currentColor" strokeWidth="1" fill="none"/>
      </svg>
    </div>
  )
}
