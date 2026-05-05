import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const mono = { fontFamily: 'Share Tech Mono, monospace' }
const vt   = { fontFamily: 'VT323, monospace' }

const skills = [
  { n:'Python',        t:'SCRIPTING // ML // ANALYSIS' },
  { n:'C / C++',       t:'SYSTEMS // SECURITY_TOOLS' },
  { n:'Rust',          t:'LOW_LEVEL // SAFE_SYSTEMS' },
  { n:'Bash / Linux',  t:'KALI // ARCH // AUTOMATION' },
  { n:'PyTorch',       t:'ML // RL // LSTM' },
  { n:'Java',          t:'OOP // COURSEWORK' },
  { n:'SQL',           t:'DATA // BACKENDS' },
]

export default function About() {
  const headerRef = useRef(null)
  const headerIn  = useInView(headerRef, { once: true })
  const bodyRef   = useRef(null)
  const bodyIn    = useInView(bodyRef, { once: true, margin: '-10%' })

  return (
    <main>
      <section ref={headerRef} style={{ padding:'130px 32px 60px', borderBottom:'1px solid #1a1a1a', position:'relative', overflow:'hidden' }}>
        <motion.div initial={{opacity:0}} animate={headerIn?{opacity:1}:{}} transition={{duration:0.4}}
          style={{ ...mono, fontSize:10, color:'#2a2a2a', letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:24 }}>
          // SYS_ABOUT / IDENTITY_FILE / AUTH_OK
        </motion.div>
        <div style={{ overflow:'hidden' }}>
          <motion.h1 initial={{y:'100%'}} animate={headerIn?{y:0}:{}} transition={{duration:0.8,ease:[0.16,1,0.3,1]}}
            style={{ ...vt, fontSize:'clamp(56px,10vw,130px)', lineHeight:0.9, letterSpacing:'0.04em', color:'#e8e8e8' }}>
            IDENTITY<br /><span style={{color:'#8b0000'}}>FILE_</span>
          </motion.h1>
        </div>
        <div style={{position:'absolute',bottom:0,right:32,width:80,height:1,background:'linear-gradient(to left,#8b0000,transparent)'}}/>
      </section>

      <section ref={bodyRef} style={{ padding:'80px 32px', borderBottom:'1px solid #1a1a1a', display:'grid', gridTemplateColumns:'1fr 1fr', gap:64 }}>
        {/* Left */}
        <motion.div initial={{opacity:0,y:20}} animate={bodyIn?{opacity:1,y:0}:{}} transition={{duration:0.7}}>
          <div style={{ ...mono, fontSize:9, color:'#2a2a2a', letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:16, paddingBottom:12, borderBottom:'1px solid #1a1a1a' }}>
            [ OPERATOR_PROFILE ]
          </div>
          <p style={{ ...vt, fontSize:28, color:'#8b0000', lineHeight:1.2, letterSpacing:'0.04em', marginBottom:20 }}>
            I FIND WHAT<br />ATTACKERS<br />EXPLOIT.
          </p>
          <p style={{ ...mono, fontSize:11, color:'rgba(232,232,232,0.4)', lineHeight:1.85, letterSpacing:'0.04em', textTransform:'uppercase', maxWidth:380, marginBottom:16 }}>
            Computer Science student at Edge Hill University. Specialising in offensive security, adversary emulation, and intelligent threat detection.
          </p>
          <p style={{ ...mono, fontSize:11, color:'rgba(232,232,232,0.4)', lineHeight:1.85, letterSpacing:'0.04em', textTransform:'uppercase', maxWidth:380 }}>
            Work intersects cybersecurity, AI, and data science. Goal: Red Team Operator.
          </p>
        </motion.div>

        {/* Right — education + stack */}
        <motion.div initial={{opacity:0,y:20}} animate={bodyIn?{opacity:1,y:0}:{}} transition={{duration:0.7,delay:0.1}}>
          <div style={{ ...mono, fontSize:9, color:'#2a2a2a', letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:16, paddingBottom:12, borderBottom:'1px solid #1a1a1a' }}>
            [ EDUCATION ]
          </div>
          <div style={{ ...mono, fontSize:9, letterSpacing:'0.1em', color:'#8b0000', marginBottom:5, textTransform:'uppercase' }}>OCT 2024 – MAY 2027</div>
          <div style={{ ...vt, fontSize:22, color:'#e8e8e8', marginBottom:3, letterSpacing:'0.04em' }}>EDGE HILL UNIVERSITY</div>
          <div style={{ ...mono, fontSize:10, color:'#333', letterSpacing:'0.06em', marginBottom:32, textTransform:'uppercase' }}>BSC (HONS) COMPUTER SCIENCE // CYBERSEC</div>

          <div style={{ ...mono, fontSize:9, color:'#2a2a2a', letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:16, paddingBottom:12, borderBottom:'1px solid #1a1a1a' }}>
            [ CAPABILITY_STACK ]
          </div>
          {skills.map((s, i) => (
            <motion.div key={s.n} initial={{opacity:0,x:-10}} animate={bodyIn?{opacity:1,x:0}:{}} transition={{duration:0.5,delay:0.2+i*0.05}}
              style={{ display:'flex', justifyContent:'space-between', padding:'9px 0', borderBottom:'1px solid #1a1a1a' }}
              onMouseEnter={e=>{e.currentTarget.style.background='#0a0a0a'}}
              onMouseLeave={e=>{e.currentTarget.style.background='transparent'}}>
              <span style={{ ...mono, fontSize:11, color:'#888', letterSpacing:'0.06em', textTransform:'uppercase' }}>{s.n}</span>
              <span style={{ ...mono, fontSize:9, color:'#2a2a2a', letterSpacing:'0.08em' }}>{s.t}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Ghost text */}
      <section style={{ padding:'40px 32px 80px', overflow:'hidden' }}>
        <div style={{ ...vt, fontSize:'clamp(80px,16vw,200px)', lineHeight:1, letterSpacing:'0.02em', color:'rgba(139,0,0,0.06)', userSelect:'none', whiteSpace:'nowrap' }}>
          2024_ONLINE
        </div>
        <div style={{ ...mono, fontSize:10, color:'#1a1a1a', letterSpacing:'0.1em', textTransform:'uppercase', marginTop:8 }}>
          YEAR_ENROLLED // BUILDING_IN_PUBLIC_SINCE
        </div>
      </section>
    </main>
  )
}
