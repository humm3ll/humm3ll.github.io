import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ x: -200, y: -200 })
  const rfx     = useRef(-200)
  const rfy     = useRef(-200)
  const rafRef  = useRef(null)

  useEffect(() => {
    const glow = document.getElementById('cursor-glow')
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (glow) { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px' }
    }
    const onEnter = () => dotRef.current && (dotRef.current.style.transform = 'translate(-50%,-50%) scale(3)')
    const onLeave = () => dotRef.current && (dotRef.current.style.transform = 'translate(-50%,-50%) scale(1)')
    document.addEventListener('mousemove', onMove)
    function attach() {
      document.querySelectorAll('a,button').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    attach()
    const obs = new MutationObserver(attach)
    obs.observe(document.body, { childList: true, subtree: true })
    function loop() {
      if (dotRef.current) { dotRef.current.style.left = pos.current.x + 'px'; dotRef.current.style.top = pos.current.y + 'px' }
      rfx.current += (pos.current.x - rfx.current) * 0.1
      rfy.current += (pos.current.y - rfy.current) * 0.1
      if (ringRef.current) { ringRef.current.style.left = rfx.current + 'px'; ringRef.current.style.top = rfy.current + 'px' }
      rafRef.current = requestAnimationFrame(loop)
    }
    loop()
    return () => { document.removeEventListener('mousemove', onMove); obs.disconnect(); cancelAnimationFrame(rafRef.current) }
  }, [])

  return (
    <>
      <div ref={dotRef} className="fixed pointer-events-none z-[9999]" style={{ width:6,height:6,borderRadius:'50%',background:'#c8ff00',transform:'translate(-50%,-50%)',mixBlendMode:'difference',transition:'transform 0.2s ease',willChange:'left,top' }} />
      <div ref={ringRef} className="fixed pointer-events-none z-[9998]" style={{ width:28,height:28,borderRadius:'50%',border:'1px solid rgba(200,255,0,0.25)',transform:'translate(-50%,-50%)',willChange:'left,top' }} />
    </>
  )
}
