import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const mono = { fontFamily: 'Share Tech Mono, monospace' }
const vt   = { fontFamily: 'VT323, monospace' }

export default function Contact() {
  const headerRef = useRef(null)
  const headerIn  = useInView(headerRef, { once: true })
  const bodyRef   = useRef(null)
  const bodyIn    = useInView(bodyRef, { once: true, margin: '-10%' })

  return (
    <main>
      <section ref={headerRef} style={{ padding:'130px 32px 60px', borderBottom:'1px solid #1a1a1a', position:'relative', overflow:'hidden' }}>
        <motion.div initial={{opacity:0}} animate={headerIn?{opacity:1}:{}} transition={{duration:0.4}}
          style={{ ...mono, fontSize:10, color:'#2a2a2a', letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:24 }}>
          // SYS_CONTACT / OPEN_CHANNEL / AWAITING_INPUT
        </motion.div>
        <div style={{overflow:'hidden'}}>
          <motion.h1 initial={{y:'100%'}} animate={headerIn?{y:0}:{}} transition={{duration:0.8,ease:[0.16,1,0.3,1]}}
            style={{ ...vt, fontSize:'clamp(56px,12vw,160px)', lineHeight:0.9, letterSpacing:'0.04em', color:'#e8e8e8' }}>
            OPEN<br /><span style={{color:'#8b0000'}}>CHANNEL_</span>
          </motion.h1>
        </div>
        <div style={{position:'absolute',bottom:0,right:32,width:80,height:1,background:'linear-gradient(to left,#8b0000,transparent)'}}/>
      </section>

      <section ref={bodyRef} style={{ padding:'80px 32px 120px', borderBottom:'1px solid #1a1a1a', display:'grid', gridTemplateColumns:'1fr 1fr', gap:64 }}>
        <motion.div initial={{opacity:0,y:20}} animate={bodyIn?{opacity:1,y:0}:{}} transition={{duration:0.7}}>
          <div style={{ ...mono, fontSize:9, color:'#2a2a2a', letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:20, paddingBottom:14, borderBottom:'1px solid #1a1a1a' }}>
            [ PRIMARY_CHANNEL ]
          </div>
          <a href="mailto:humm3ll@outlook.com"
            style={{ ...vt, fontSize:36, color:'#333', textDecoration:'none', display:'block', lineHeight:1.1, marginBottom:20, letterSpacing:'0.04em', transition:'color 0.15s' }}
            onMouseEnter={e=>e.currentTarget.style.color='#e8e8e8'}
            onMouseLeave={e=>e.currentTarget.style.color='#333'}>
            HUMM3LL<br />@OUTLOOK.COM
          </a>
          <p style={{ ...mono, fontSize:11, color:'rgba(232,232,232,0.25)', lineHeight:1.75, letterSpacing:'0.04em', textTransform:'uppercase', maxWidth:340 }}>
            OPEN TO INTERNSHIPS, PLACEMENT YEARS, COLLAB PROJECTS, AND SECURITY RESEARCH.
          </p>
        </motion.div>

        <motion.div initial={{opacity:0,y:20}} animate={bodyIn?{opacity:1,y:0}:{}} transition={{duration:0.7,delay:0.12}}>
          <div style={{ ...mono, fontSize:9, color:'#2a2a2a', letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:20, paddingBottom:14, borderBottom:'1px solid #1a1a1a' }}>
            [ SECONDARY_CHANNELS ]
          </div>
          {[
            { label:'GITHUB',   href:'https://github.com/humm3ll' },
            { label:'LINKEDIN', href:'https://linkedin.com/in/ethan-hulme' },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{ ...vt, fontSize:30, color:'#2a2a2a', textDecoration:'none', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'14px 0', borderBottom:'1px solid #1a1a1a', transition:'color 0.15s', letterSpacing:'0.04em' }}
              onMouseEnter={e=>{ e.currentTarget.style.color='#8b0000'; e.currentTarget.style.paddingLeft='8px' }}
              onMouseLeave={e=>{ e.currentTarget.style.color='#2a2a2a'; e.currentTarget.style.paddingLeft='0' }}>
              {label} <span style={{ fontSize:16 }}>↗</span>
            </a>
          ))}

          <div style={{ marginTop:32, border:'1px solid #1a1a1a', padding:20, background:'rgba(139,0,0,0.03)' }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <div style={{ width:6, height:6, borderRadius:'50%', background:'#8b0000', animation:'border-pulse 1.5s ease-in-out infinite' }} />
              <span style={{ ...mono, fontSize:9, letterSpacing:'0.12em', textTransform:'uppercase', color:'#8b0000' }}>ONLINE — OPEN_TO_WORK</span>
            </div>
            {[['LOCATION','ENGLAND, UK'],['TIMEZONE','UTC+1 // BST'],['RESPONSE','< 24 HOURS']].map(([k,v])=>(
              <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'7px 0', borderTop:'1px solid #1a1a1a' }}>
                <span style={{ ...mono, fontSize:9, textTransform:'uppercase', color:'#1a1a1a', letterSpacing:'0.1em' }}>{k}</span>
                <span style={{ ...mono, fontSize:9, color:'#333', letterSpacing:'0.06em' }}>{v}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  )
}
