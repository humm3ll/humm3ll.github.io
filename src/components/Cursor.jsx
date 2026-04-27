import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const ring    = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const raf     = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const onEnter = () => dotRef.current?.classList.add('scale-[4]', 'mix-blend-difference')
    const onLeave = () => dotRef.current?.classList.remove('scale-[4]', 'mix-blend-difference')

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    function loop() {
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`
      }
      ring.current.x += (pos.current.x - ring.current.x) * 0.1
      ring.current.y += (pos.current.y - ring.current.y) * 0.1
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`
      }
      raf.current = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[7px] h-[7px] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ background: '#f0ede6', willChange: 'transform', transition: 'transform 0.08s ease' }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[32px] h-[32px] rounded-full border pointer-events-none z-[9998]"
        style={{ borderColor: 'rgba(240,237,230,0.2)', willChange: 'transform' }}
      />
    </>
  )
}
