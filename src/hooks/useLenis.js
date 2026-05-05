import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

let lenis = null

export function useLenis() {
  useEffect(() => {
    lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    })
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => { lenis?.destroy(); lenis = null }
  }, [])
}
