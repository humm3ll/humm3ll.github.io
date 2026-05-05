import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../data'
import Ticker from '../components/Ticker'

export default function Work() {
  const headerRef = useRef(null)
  const headerIn  = useInView(headerRef, { once: true })

  return (
    <main>
      <section ref={headerRef} style={{ padding:'140px 4vw 80px', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
        <motion.div initial={{opacity:0}} animate={headerIn?{opacity:1}:{}} transition={{duration:0.6}}
          style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'0.16em', textTransform:'uppercase', color:'#2a2a2a', marginBottom:32 }}>
          [ SYS_WORK / ALL_PROJECTS ]
        </motion.div>
        <div style={{ overflow:'hidden' }}>
          <motion.h1 initial={{ y:'100%' }} animate={headerIn?{y:0}:{}} transition={{ duration:1.1, ease:[0.16,1,0.3,1] }}
            style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(60px,10vw,140px)', lineHeight:0.88, letterSpacing:'-0.04em', color:'#d4d4d4' }}>
            Selected<br /><span style={{ color:'#c8ff00' }}>Work</span>
          </motion.h1>
        </div>
      </section>

      <Ticker />

      <section style={{ padding:'0 4vw 120px' }}>
        {projects.map((p, i) => (
          <WorkRow key={p.id} project={p} index={i} />
        ))}
      </section>
    </main>
  )
}

function WorkRow({ project, index }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-5%' })

  return (
    <motion.a ref={ref} href={project.link} target="_blank" rel="noopener noreferrer"
      initial={{ opacity:0, x:-30 }}
      animate={inView ? { opacity:1, x:0 } : {}}
      transition={{ duration:0.8, ease:[0.16,1,0.3,1], delay: index*0.07 }}
      whileHover="hovered"
      style={{ display:'grid', gridTemplateColumns:'64px 1fr auto auto', alignItems:'center', gap:32, padding:'28px 0', borderBottom:'1px solid rgba(255,255,255,0.05)', textDecoration:'none', color:'inherit', position:'relative', cursor:'none' }}>

      {/* Left accent bar on hover */}
      <motion.div variants={{ hovered:{ scaleY:1, opacity:1 } }} initial={{ scaleY:0, opacity:0 }}
        style={{ position:'absolute', left:0, top:0, bottom:0, width:1, background:'#c8ff00', transformOrigin:'bottom' }} />

      {/* Index */}
      <motion.span variants={{ hovered:{ color:'#c8ff00' } }}
        style={{ fontFamily:'JetBrains Mono,monospace', fontSize:11, letterSpacing:'0.1em', color:'#2a2a2a', transition:'color 0.3s' }}>
        {project.pid}
      </motion.span>

      {/* Name + description */}
      <div>
        <motion.div variants={{ hovered:{ color:'#d4d4d4' } }}
          style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'clamp(22px,3vw,44px)', letterSpacing:'-0.03em', color:'#444', lineHeight:1, marginBottom:6, transition:'color 0.4s' }}>
          {project.name}
        </motion.div>
        <p style={{ fontFamily:'Space Grotesk,sans-serif', fontSize:12, color:'rgba(212,212,212,0.25)', lineHeight:1.6, maxWidth:520 }}>
          {project.description}
        </p>
      </div>

      {/* Tags */}
      <div className="hidden md:flex flex-col gap-2 items-end">
        {project.tags.map(t => (
          <motion.span key={t} variants={{ hovered:{ borderColor:'rgba(200,255,0,0.3)', color:'#c8ff00' } }}
            style={{ fontFamily:'JetBrains Mono,monospace', fontSize:8, letterSpacing:'0.1em', textTransform:'uppercase', color:'#2a2a2a', border:'1px solid rgba(255,255,255,0.06)', padding:'3px 8px', transition:'all 0.2s' }}>
            {t}
          </motion.span>
        ))}
      </div>

      {/* Arrow */}
      <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', justifyContent:'space-between', gap:16 }}>
        <motion.span variants={{ hovered:{ x:4, y:-4, color:'#c8ff00' } }}
          style={{ fontFamily:'JetBrains Mono,monospace', fontSize:18, color:'#2a2a2a', transition:'all 0.3s' }}>↗</motion.span>
        <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, color:'#1a1a1a' }}>{project.year}</span>
      </div>
    </motion.a>
  )
}
