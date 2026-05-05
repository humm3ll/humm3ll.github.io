import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../data'

const mono = { fontFamily: 'Share Tech Mono, monospace' }
const vt   = { fontFamily: 'VT323, monospace' }

export default function Work() {
  const headerRef = useRef(null)
  const headerIn  = useInView(headerRef, { once: true })

  return (
    <main>
      {/* Header */}
      <section ref={headerRef} style={{ padding: '130px 32px 60px', borderBottom: '1px solid #1a1a1a', position: 'relative', overflow: 'hidden' }}>
        <motion.div initial={{ opacity: 0 }} animate={headerIn?{opacity:1}:{}} transition={{ duration: 0.4 }}
          style={{ ...mono, fontSize: 10, color: '#2a2a2a', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 24 }}>
          // SYS_WORK / ALL_PROJECTS / {projects.length}_ENTRIES
        </motion.div>
        <div style={{ overflow: 'hidden' }}>
          <motion.h1 initial={{ y: '100%' }} animate={headerIn?{y:0}:{}} transition={{ duration: 0.8, ease:[0.16,1,0.3,1] }}
            style={{ ...vt, fontSize: 'clamp(56px,10vw,130px)', lineHeight: 0.9, letterSpacing: '0.04em', color: '#e8e8e8' }}>
            SELECTED<br /><span style={{ color: '#8b0000' }}>WORK_</span>
          </motion.h1>
        </div>

        {/* Red corner decoration */}
        <div style={{ position:'absolute', bottom:0, right:32, width:80, height:1, background:'linear-gradient(to left, #8b0000, transparent)' }} />
      </section>

      {/* Project list */}
      <section style={{ padding: '0 32px 120px' }}>
        {projects.map((p, i) => <WorkItem key={p.id} project={p} index={i} />)}
      </section>
    </main>
  )
}

function WorkItem({ project, index }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5%' })
  const [h, setH] = useState(false)
  const [staticLines, setStatic] = useState([])

  const onEnter = () => {
    setH(true)
    // Generate random static lines
    setStatic(Array.from({ length: 4 }, () => ({
      top: Math.random() * 100,
      width: 20 + Math.random() * 60,
      opacity: 0.3 + Math.random() * 0.4,
    })))
  }

  return (
    <motion.a ref={ref} href={project.link} target="_blank" rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16,1,0.3,1], delay: index * 0.07 }}
      style={{ display: 'block', textDecoration: 'none', color: 'inherit', borderBottom: '1px solid #1a1a1a', position: 'relative', overflow: 'hidden' }}
      onMouseEnter={onEnter}
      onMouseLeave={() => { setH(false); setStatic([]) }}>

      {/* Signal static effect — the bold choice */}
      {h && staticLines.map((l, i) => (
        <div key={i} style={{ position: 'absolute', left: 0, top: `${l.top}%`, height: 1, width: `${l.width}%`, background: '#8b0000', opacity: l.opacity, pointerEvents: 'none', transition: 'all 0.05s', zIndex: 0 }} />
      ))}

      <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 160px 40px', gap: 24, padding: '28px 0', alignItems: 'start', position: 'relative', zIndex: 1, paddingLeft: h ? 12 : 0, transition: 'padding-left 0.2s ease' }}>

        {/* Left bar */}
        <motion.div animate={{ scaleY: h?1:0 }} style={{ position:'absolute', left:0, top:0, bottom:0, width:2, background:'#8b0000', transformOrigin:'top' }} />

        {/* Code */}
        <div>
          <div style={{ ...mono, fontSize: 9, color: h?'#8b0000':'#1a1a1a', letterSpacing:'0.1em', marginBottom: 4, transition: 'color 0.15s' }}>{project.code}</div>
          <div style={{ ...mono, fontSize: 9, color: '#1a1a1a', letterSpacing:'0.08em' }}>{project.year}</div>
        </div>

        {/* Name + desc */}
        <div>
          <div style={{ ...vt, fontSize: h?32:26, color: h?'#e8e8e8':'#444', lineHeight: 1, marginBottom: 10, letterSpacing:'0.04em', transition: 'all 0.2s' }}>
            {h ? <span className="glitch h-tear" data-text={project.name}>{project.name}</span> : project.name}
          </div>
          <p style={{ ...mono, fontSize: 11, color: h?'rgba(232,232,232,0.5)':'#2a2a2a', lineHeight: 1.7, letterSpacing:'0.04em', textTransform:'uppercase', maxWidth: 520, transition: 'color 0.2s' }}>
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div style={{ display:'flex', flexWrap:'wrap', gap: 4, paddingTop: 4 }}>
          {project.tags.map(t => (
            <span key={t} style={{ ...mono, fontSize: 8, letterSpacing:'0.1em', color: h?'#8b0000':'#1a1a1a', border:`1px solid ${h?'#8b0000':'#1a1a1a'}`, padding:'2px 6px', transition:'all 0.15s', textTransform:'uppercase' }}>{t}</span>
          ))}
        </div>

        {/* Arrow */}
        <div style={{ ...mono, fontSize: 18, color: h?'#8b0000':'#1a1a1a', transition:'all 0.15s', transform: h?'translate(3px,-3px)':'none', paddingTop: 4 }}>↗</div>
      </div>
    </motion.a>
  )
}
