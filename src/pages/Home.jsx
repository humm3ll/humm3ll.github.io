import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { projects, bootLines } from '../data'

const mono = { fontFamily: 'Share Tech Mono, monospace' }
const vt   = { fontFamily: 'VT323, monospace' }

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectGrid />
      <StatusGrid />
    </main>
  )
}

function Hero() {
  const [lines, setLines]           = useState([])
  const [bootDone, setBootDone]     = useState(false)
  const [nameVisible, setName]      = useState(false)
  const [subVisible, setSub]        = useState(false)
  const [glitchActive, setGlitch]   = useState(false)

  useEffect(() => {
    let i = 0
    const next = () => {
      if (i < bootLines.length) {
        setLines(p => [...p, bootLines[i++]])
        setTimeout(next, i === bootLines.length ? 200 : 100 + Math.random() * 80)
      } else {
        setTimeout(() => setBootDone(true), 300)
        setTimeout(() => setName(true), 500)
        setTimeout(() => setGlitch(true), 600)
        setTimeout(() => { setGlitch(false); setSub(true) }, 1600)
      }
    }
    setTimeout(next, 500)
  }, [])

  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '100px 32px 60px', position: 'relative', overflow: 'hidden' }}>

      {/* Corner decorations */}
      <div style={{ position: 'absolute', top: 72, right: 32, width: 1, height: 100, background: 'linear-gradient(to bottom, #8b0000, transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 72, right: 32, width: 50, height: 1, background: 'linear-gradient(to left, #8b0000, transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 60, left: 32, width: 1, height: 80, background: 'linear-gradient(to top, #8b0000, transparent)', pointerEvents: 'none' }} />

      {/* Boot lines */}
      <div style={{ marginBottom: 44, maxWidth: 580 }}>
        {lines.map((line, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.08 }}
            style={{ ...mono, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.9, color: i < lines.length - 1 ? '#2a2a2a' : (bootDone ? '#2a2a2a' : '#e8e8e8') }}>
            <span style={{ color: '#8b0000', marginRight: 8 }}>{'>'}</span>
            {line}
            {i === lines.length - 1 && !bootDone && <span className="cursor-blink" style={{ marginLeft: 4 }} />}
          </motion.div>
        ))}
      </div>

      {/* Name */}
      {nameVisible && <GlitchName active={glitchActive} done={subVisible} />}

      {/* Sub content */}
      {subVisible && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <div style={{ width: 20, height: 1, background: '#8b0000' }} />
            <span style={{ ...mono, fontSize: 10, color: '#555', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              SECURITY_ENG // AI_ML // DATA_SCIENCE
            </span>
          </div>
          <p style={{ ...mono, fontSize: 12, color: 'rgba(232,232,232,0.55)', lineHeight: 1.8, letterSpacing: '0.04em', maxWidth: 460, marginBottom: 32, textTransform: 'uppercase' }}>
            I BUILD SYSTEMS THAT FIND WHAT OTHERS MISS.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn to="/work" primary>[ VIEW_WORK ]</Btn>
            <Btn to="/about">[ ABOUT_ME ]</Btn>
            <Btn href="/ethan-hulme-cv.pdf" download>[ DOWNLOAD_CV ]</Btn>
          </div>
        </motion.div>
      )}

      {/* Coords */}
      {subVisible && (
        <div style={{ position: 'absolute', bottom: 28, left: 32, ...mono, fontSize: 9, color: '#1a1a1a', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          ENGLAND, UK
        </div>
      )}
    </section>
  )
}

function GlitchName({ active, done }) {
  const name  = 'ETHAN HULME'
  const chars = '!@#$%^&*[]{}|<>?_-+='
  const [disp, setDisp] = useState('')

  useEffect(() => {
    if (!active) { setDisp(name); return }
    let frame = 0
    const id = setInterval(() => {
      frame++
      let out = ''
      for (let i = 0; i < name.length; i++) {
        if (i < frame / 3) out += name[i]
        else if (i < frame / 3 + 5) out += chars[Math.floor(Math.random() * chars.length)]
        else out += ' '
      }
      setDisp(out)
      if (frame > name.length * 3 + 10) { setDisp(name); clearInterval(id) }
    }, 35)
    return () => clearInterval(id)
  }, [active])

  return (
    <div style={{ marginBottom: 24, position: 'relative' }}>
      <h1 style={{ ...vt, fontSize: 'clamp(60px,10.5vw,138px)', lineHeight: 0.9, letterSpacing: '0.05em', color: '#e8e8e8', whiteSpace: 'pre', userSelect: 'none', position: 'relative' }}>
        {disp || name}
      </h1>
      {done && (
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
          style={{ height: 2, background: '#8b0000', transformOrigin: 'left', marginTop: 4 }} />
      )}
    </div>
  )
}

function Btn({ to, href, primary, download, children }) {
  const s = { ...mono, fontSize: 10, letterSpacing: '0.1em', textDecoration: 'none', padding: '9px 16px', display: 'inline-block', border: `1px solid ${primary ? '#8b0000' : '#2a2a2a'}`, color: primary ? '#8b0000' : '#333', background: 'transparent', textTransform: 'uppercase', transition: 'all 0.15s ease', cursor: 'none' }
  const over = e => { e.currentTarget.style.background = primary ? '#8b0000' : '#1a1a1a'; e.currentTarget.style.color = '#e8e8e8'; e.currentTarget.style.borderColor = primary ? '#8b0000' : '#333' }
  const out  = e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = primary ? '#8b0000' : '#333'; e.currentTarget.style.borderColor = primary ? '#8b0000' : '#2a2a2a' }
  if (to) return <Link to={to} style={s} onMouseEnter={over} onMouseLeave={out}>{children}</Link>
  return <a href={href} download={download} style={s} onMouseEnter={over} onMouseLeave={out}>{children}</a>
}

function ProjectGrid() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  return (
    <section ref={ref} style={{ padding: '80px 32px', borderTop: '1px solid #1a1a1a' }}>
      <motion.div initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ duration:0.4 }}
        style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:32, paddingBottom:14, borderBottom:'1px solid #1a1a1a' }}>
        <span style={{ ...mono, fontSize:10, color:'#2a2a2a', letterSpacing:'0.14em', textTransform:'uppercase' }}>// SELECTED_WORK</span>
        <Link to="/work" style={{ ...mono, fontSize:10, color:'#2a2a2a', textDecoration:'none', letterSpacing:'0.1em', textTransform:'uppercase', transition:'color 0.15s' }}
          onMouseEnter={e=>e.currentTarget.style.color='#8b0000'} onMouseLeave={e=>e.currentTarget.style.color='#2a2a2a'}>
          ALL_PROJECTS →
        </Link>
      </motion.div>
      {projects.map((p, i) => <ProjectRow key={p.id} project={p} index={i} inView={inView} />)}
    </section>
  )
}

function ProjectRow({ project, index, inView }) {
  const [h, setH] = useState(false)
  return (
    <motion.a href={project.link} target="_blank" rel="noopener noreferrer"
      initial={{ opacity:0, x:-12 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.5, delay:index*0.07 }}
      style={{ display:'grid', gridTemplateColumns:'72px 1fr auto', gap:20, padding:'18px 0', borderBottom:'1px solid #1a1a1a', textDecoration:'none', color:'inherit', position:'relative' }}
      onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <motion.div animate={{ scaleY:h?1:0 }} style={{ position:'absolute', left:0, top:0, bottom:0, width:2, background:'#8b0000', transformOrigin:'top' }} />
      <span style={{ ...mono, fontSize:9, color:h?'#8b0000':'#1a1a1a', letterSpacing:'0.1em', alignSelf:'center', transition:'color 0.15s' }}>{project.code}</span>
      <div>
        <div style={{ ...vt, fontSize:26, color:h?'#e8e8e8':'#444', lineHeight:1, marginBottom:4, transition:'color 0.2s', letterSpacing:'0.04em' }}>
          {h ? <span className="glitch h-tear" data-text={project.name}>{project.name}</span> : project.name}
        </div>
        <div style={{ ...mono, fontSize:10, color:'#2a2a2a', letterSpacing:'0.06em', textTransform:'uppercase', lineHeight:1.5 }}>
          {h ? project.description : project.tagline}
        </div>
      </div>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', justifyContent:'space-between' }}>
        <span style={{ ...mono, fontSize:14, color:h?'#8b0000':'#1a1a1a', transition:'all 0.15s', transform:h?'translate(3px,-3px)':'none' }}>↗</span>
        <div style={{ display:'flex', flexDirection:'column', gap:2, alignItems:'flex-end' }}>
          {project.tags.slice(0,2).map(t=>(
            <span key={t} style={{ ...mono, fontSize:8, letterSpacing:'0.1em', color:h?'#8b0000':'#1a1a1a', border:`1px solid ${h?'#8b0000':'#1a1a1a'}`, padding:'1px 5px', transition:'all 0.15s' }}>{t}</span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

function StatusGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-10%' })
  const items = [
    ['YEAR_ENROLLED','2024'],['PROGRAMME','BSC_COMP_SCI'],['CLEARANCE','LEVEL_02'],
    ['INSTITUTION','EDGE_HILL_UNIV'],['SPECIALISATION','CYBERSECURITY'],['STATUS', null],
  ]
  return (
    <section ref={ref} style={{ padding:'60px 32px 80px', borderTop:'1px solid #1a1a1a' }}>
      <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.5}}
        style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:1, background:'#1a1a1a' }}>
        {items.map(([k,v],i) => (
          <motion.div key={k} initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{delay:i*0.06}}
            style={{ background:'#000', padding:'16px 20px' }}>
            <div style={{ ...mono, fontSize:9, color:'#1a1a1a', letterSpacing:'0.12em', marginBottom:6, textTransform:'uppercase' }}>{k}</div>
            <div style={{ ...mono, fontSize:12, color:'#333', letterSpacing:'0.06em', textTransform:'uppercase' }}>
              {v ?? <span style={{ color:'#8b0000' }}>● ACTIVE</span>}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
