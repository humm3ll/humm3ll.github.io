import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data'
import Ticker from '../components/Ticker'

export default function About() {
  const headerRef = useRef(null)
  const headerIn  = useInView(headerRef, { once:true })
  const bioRef    = useRef(null)
  const bioIn     = useInView(bioRef, { once:true, margin:'-10%' })

  return (
    <main>
      {/* Header */}
      <section ref={headerRef} style={{ padding:'140px 4vw 80px', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
        <motion.div initial={{opacity:0}} animate={headerIn?{opacity:1}:{}} transition={{duration:0.6}}
          style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'0.16em', textTransform:'uppercase', color:'#2a2a2a', marginBottom:32 }}>
          [ SYS_ABOUT / IDENTITY_FILE ]
        </motion.div>
        <div style={{ overflow:'hidden' }}>
          <motion.h1 initial={{y:'100%'}} animate={headerIn?{y:0}:{}} transition={{duration:1.1,ease:[0.16,1,0.3,1]}}
            style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(60px,10vw,130px)', lineHeight:0.88, letterSpacing:'-0.04em', color:'#d4d4d4' }}>
            Security<br /><span style={{ color:'#c8ff00' }}>Engineer.</span>
          </motion.h1>
        </div>
      </section>

      <Ticker />

      {/* Bio grid */}
      <section ref={bioRef} style={{ padding:'100px 4vw', borderBottom:'1px solid rgba(255,255,255,0.05)', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80 }}>
        <motion.div initial={{opacity:0,y:30}} animate={bioIn?{opacity:1,y:0}:{}} transition={{duration:0.9}}>
          <p style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'clamp(26px,3vw,42px)', letterSpacing:'-0.02em', lineHeight:1.1, color:'#d4d4d4', marginBottom:28 }}>
            I find what attackers<br /><span style={{ color:'#c8ff00' }}>exploit.</span>
          </p>
          <p style={{ fontFamily:'Space Grotesk,sans-serif', fontSize:14, color:'rgba(212,212,212,0.38)', lineHeight:1.85, marginBottom:20, maxWidth:420 }}>
            Computer Science student at Edge Hill University, specialising in offensive security, adversary emulation, and intelligent threat detection.
          </p>
          <p style={{ fontFamily:'Space Grotesk,sans-serif', fontSize:14, color:'rgba(212,212,212,0.38)', lineHeight:1.85, maxWidth:420 }}>
            My work sits at the intersection of cybersecurity, AI, and data science — building tooling for automated threat detection and secure system design. Goal: Red Team Operator.
          </p>
        </motion.div>

        <motion.div initial={{opacity:0,y:30}} animate={bioIn?{opacity:1,y:0}:{}} transition={{duration:0.9,delay:0.12}}>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'0.14em', textTransform:'uppercase', color:'#2a2a2a', marginBottom:20, paddingBottom:14, borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
            EDUCATION
          </div>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'0.1em', color:'#c8ff00', marginBottom:6, textTransform:'uppercase' }}>Oct 2024 – May 2027</div>
          <div style={{ fontFamily:'Space Grotesk,sans-serif', fontSize:15, fontWeight:600, color:'#d4d4d4', marginBottom:4 }}>Edge Hill University</div>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'#444', marginBottom:32, letterSpacing:'0.05em' }}>BSc (Hons) Computer Science — Cybersecurity</div>

          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'0.14em', textTransform:'uppercase', color:'#2a2a2a', marginBottom:16, paddingBottom:12, borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
            STACK
          </div>
          {skills.map((s, i) => (
            <motion.div key={s.name} initial={{opacity:0,x:-16}} animate={bioIn?{opacity:1,x:0}:{}} transition={{duration:0.6,delay:0.2+i*0.05}}
              style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 0', borderBottom:'1px solid rgba(255,255,255,0.04)' }}>
              <span style={{ fontFamily:'Space Grotesk,sans-serif', fontSize:13, color:'#888' }}>{s.name}</span>
              <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, color:'#2a2a2a', letterSpacing:'0.08em' }}>{s.note}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Ghost year */}
      <section style={{ padding:'60px 4vw 80px', overflow:'hidden', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(80px,16vw,220px)', lineHeight:1, letterSpacing:'-0.04em', color:'rgba(255,255,255,0.03)', userSelect:'none' }}>
          2024—
        </div>
        <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'#2a2a2a', letterSpacing:'0.1em', marginTop:-16 }}>
          Year enrolment began. Building in public since.
        </div>
      </section>
    </main>
  )
}
