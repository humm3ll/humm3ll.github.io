import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Ticker from '../components/Ticker'

export default function Contact() {
  const headerRef = useRef(null)
  const headerIn  = useInView(headerRef, { once:true })
  const bodyRef   = useRef(null)
  const bodyIn    = useInView(bodyRef, { once:true, margin:'-10%' })

  return (
    <main>
      <section ref={headerRef} style={{ padding:'140px 4vw 80px', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
        <motion.div initial={{opacity:0}} animate={headerIn?{opacity:1}:{}} transition={{duration:0.6}}
          style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'0.16em', textTransform:'uppercase', color:'#2a2a2a', marginBottom:32 }}>
          [ SYS_CONTACT / OPEN_CHANNEL ]
        </motion.div>
        <div style={{ overflow:'hidden' }}>
          <motion.h1 initial={{y:'100%'}} animate={headerIn?{y:0}:{}} transition={{duration:1.1,ease:[0.16,1,0.3,1]}}
            style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(64px,12vw,170px)', lineHeight:0.88, letterSpacing:'-0.04em', color:'#d4d4d4' }}>
            Let's<br /><span style={{ color:'#c8ff00' }}>Talk.</span>
          </motion.h1>
        </div>
      </section>

      <Ticker />

      <section ref={bodyRef} style={{ padding:'100px 4vw 120px', borderBottom:'1px solid rgba(255,255,255,0.05)', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80 }}>
        {/* Email */}
        <motion.div initial={{opacity:0,y:30}} animate={bodyIn?{opacity:1,y:0}:{}} transition={{duration:0.9}}>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'0.14em', textTransform:'uppercase', color:'#2a2a2a', marginBottom:20, paddingBottom:14, borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
            PRIMARY_CHANNEL
          </div>
          <motion.a href="mailto:humm3ll@outlook.com"
            whileHover={{ color:'#d4d4d4' }}
            style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'clamp(20px,3vw,38px)', letterSpacing:'-0.02em', color:'#444', textDecoration:'none', display:'block', lineHeight:1.1, marginBottom:20, transition:'color 0.2s' }}>
            humm3ll<br />@outlook.com
          </motion.a>
          <p style={{ fontFamily:'Space Grotesk,sans-serif', fontSize:13, color:'rgba(212,212,212,0.3)', lineHeight:1.75, maxWidth:360 }}>
            Open to internships, placement years, collaborative projects, and security research partnerships.
          </p>
        </motion.div>

        {/* Links + status */}
        <motion.div initial={{opacity:0,y:30}} animate={bodyIn?{opacity:1,y:0}:{}} transition={{duration:0.9,delay:0.12}}>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'0.14em', textTransform:'uppercase', color:'#2a2a2a', marginBottom:20, paddingBottom:14, borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
            SECONDARY_CHANNELS
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:0, marginBottom:40 }}>
            {[
              { label:'GitHub',   href:'https://github.com/humm3ll' },
              { label:'LinkedIn', href:'https://linkedin.com/in/ethan-hulme' },
            ].map(({ label, href }) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                whileHover={{ color:'#d4d4d4', x:4 }}
                style={{ fontFamily:'Syne,sans-serif', fontWeight:600, fontSize:'clamp(22px,2.5vw,34px)', letterSpacing:'-0.02em', color:'#2a2a2a', textDecoration:'none', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'14px 0', borderBottom:'1px solid rgba(255,255,255,0.04)', transition:'color 0.2s' }}>
                {label}
                <span style={{ fontSize:14 }}>↗</span>
              </motion.a>
            ))}
          </div>

          {/* Status panel */}
          <div style={{ border:'1px solid rgba(255,255,255,0.07)', background:'rgba(255,255,255,0.02)', backdropFilter:'blur(20px)', padding:20 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <div style={{ width:6, height:6, borderRadius:'50%', background:'#c8ff00', animation:'pulse-dot 2s ease-in-out infinite' }} />
              <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'0.12em', textTransform:'uppercase', color:'#c8ff00' }}>ONLINE — OPEN_TO_WORK</span>
            </div>
            {[
              ['Location',     'England, UK'],
              ['Timezone',     'UTC+1 / BST'],
              ['Response',     '< 24 hours'],
            ].map(([k,v]) => (
              <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'7px 0', borderTop:'1px solid rgba(255,255,255,0.04)' }}>
                <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, textTransform:'uppercase', color:'#2a2a2a', letterSpacing:'0.1em' }}>{k}</span>
                <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, color:'#444' }}>{v}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      <style>{`@keyframes pulse-dot{0%,100%{box-shadow:0 0 0 0 rgba(200,255,0,0.5)}50%{box-shadow:0 0 0 5px rgba(200,255,0,0)}}`}</style>
    </main>
  )
}
