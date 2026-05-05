import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Ticker from '../components/Ticker'
import { projects } from '../data'

const maskItem = {
  hidden: { clipPath: 'inset(0 0 100% 0)', y: 20 },
  show:   { clipPath: 'inset(0 0 0% 0)',   y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } }
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <ProjectGrid />
      <AboutSnippet />
    </main>
  )
}

function Hero() {
  return (
    <section style={{ minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'0 4vw 56px', position:'relative', overflow:'hidden' }}>
      <motion.div initial="hidden" animate="show" variants={{ hidden:{}, show:{ transition:{ staggerChildren:0.1 } } }} style={{ position:'relative', zIndex:2 }}>
        <div style={{ overflow:'hidden' }}>
          <motion.h1 variants={maskItem} style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(76px,13vw,190px)', lineHeight:0.88, letterSpacing:'-0.04em', color:'#d4d4d4', display:'block' }}>
            Ethan
          </motion.h1>
        </div>
        <div style={{ overflow:'hidden' }}>
          <motion.h1 variants={maskItem} style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(76px,13vw,190px)', lineHeight:0.88, letterSpacing:'-0.04em', color:'#d4d4d4', marginBottom:36, display:'block' }}>
            Hulme<span style={{ color:'#c8ff00' }}>.</span>
          </motion.h1>
        </div>
        <motion.div variants={{ hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:0.9,ease:[0.16,1,0.3,1]}} }}
          style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:20 }}>
          <div>
            <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'0.14em', textTransform:'uppercase', color:'#444', marginBottom:10 }}>
              Security Engineer · AI/ML · Data Science
            </div>
            <p style={{ fontFamily:'Space Grotesk,sans-serif', fontSize:14, color:'rgba(212,212,212,0.4)', lineHeight:1.75, maxWidth:360 }}>
              I build systems that find what others miss.
            </p>
          </div>
          <div style={{ display:'flex', gap:12, alignItems:'center' }}>
            <Link to="/work"
              style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'0.14em', textTransform:'uppercase', background:'#c8ff00', color:'#000', padding:'12px 22px', textDecoration:'none', transition:'background 0.2s' }}
              onMouseEnter={e=>e.currentTarget.style.background='#fff'}
              onMouseLeave={e=>e.currentTarget.style.background='#c8ff00'}>
              View Work
            </Link>
            <a href="/ethan-hulme-cv.pdf" download
              style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, letterSpacing:'0.14em', textTransform:'uppercase', border:'1px solid rgba(255,255,255,0.1)', color:'#666', padding:'12px 22px', textDecoration:'none', transition:'all 0.2s', backdropFilter:'blur(20px)' }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(200,255,0,0.4)';e.currentTarget.style.color='#c8ff00'}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.1)';e.currentTarget.style.color='#666'}}>
              CV ↓
            </a>
          </div>
        </motion.div>
      </motion.div>
      <div style={{ position:'absolute', right:'4vw', bottom:56, fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'0.2em', textTransform:'uppercase', color:'#2a2a2a', writingMode:'vertical-rl' }}>
        Scroll ↓
      </div>
    </section>
  )
}

function ProjectGrid() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-10%' })
  return (
    <section ref={ref} style={{ padding:'100px 4vw', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
      <motion.div initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.7}}
        style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:48 }}>
        <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'0.16em', textTransform:'uppercase', color:'#2a2a2a' }}>[ 01 / SELECTED_WORK ]</div>
        <Link to="/work" style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'0.16em', textTransform:'uppercase', color:'#444', textDecoration:'none', transition:'color 0.2s' }}
          onMouseEnter={e=>e.currentTarget.style.color='#c8ff00'} onMouseLeave={e=>e.currentTarget.style.color='#444'}>
          All Projects →
        </Link>
      </motion.div>
      <div style={{ display:'flex', gap:2, marginBottom:2 }}>
        <ProjectCard project={projects[0]} width="60%" height={400} delay={0.1} inView={inView} />
        <ProjectCard project={projects[1]} width="40%" height={400} delay={0.2} inView={inView} />
      </div>
      <div style={{ display:'flex', gap:2 }}>
        <ProjectCard project={projects[2]} width="40%" height={340} delay={0.3} inView={inView} />
        <ProjectCard project={projects[3]} width="60%" height={340} delay={0.4} inView={inView} />
      </div>
    </section>
  )
}

function ProjectCard({ project, width, height, delay, inView }) {
  const isWide = width === '60%'
  return (
    <motion.a href={project.link} target="_blank" rel="noopener noreferrer"
      initial={{ opacity:0, y:50 }}
      animate={inView ? { opacity:1, y:0 } : {}}
      transition={{ duration:0.9, ease:[0.16,1,0.3,1], delay }}
      whileHover="hovered"
      style={{ width, height, display:'block', textDecoration:'none', color:'inherit', position:'relative', overflow:'hidden', flexShrink:0, border:'1px solid rgba(255,255,255,0.06)', background:'rgba(255,255,255,0.015)', backdropFilter:'blur(4px)' }}>
      <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at 30% 40%, ${project.accent}06 0%, transparent 65%)` }} />
      <div style={{ position:'absolute', inset:0, padding:'24px 24px 20px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
          <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'0.14em', textTransform:'uppercase', color:'#2a2a2a' }}>{project.pid}</span>
          <motion.span variants={{ hovered:{x:3,y:-3,color:'#c8ff00'} }} style={{ fontFamily:'JetBrains Mono,monospace', fontSize:14, color:'#2a2a2a' }}>↗</motion.span>
        </div>
        <div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:4, marginBottom:10 }}>
            {project.tags.map(t => (
              <span key={t} style={{ fontFamily:'JetBrains Mono,monospace', fontSize:8, letterSpacing:'0.1em', textTransform:'uppercase', color:'#444', border:'1px solid rgba(255,255,255,0.07)', padding:'2px 7px' }}>{t}</span>
            ))}
          </div>
          <motion.div variants={{ hovered:{ color:'#d4d4d4' } }} style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize: isWide ? 'clamp(22px,2.5vw,36px)' : 'clamp(18px,2vw,26px)', letterSpacing:'-0.02em', color:'#555', lineHeight:1.1, marginBottom:8, transition:'color 0.4s' }}>
            {project.name}
          </motion.div>
          <p style={{ fontFamily:'Space Grotesk,sans-serif', fontSize:12, color:'rgba(212,212,212,0.25)', lineHeight:1.65, maxWidth:480 }}>{project.short}</p>
        </div>
      </div>
      <motion.div variants={{ hovered:{opacity:1} }} initial={{opacity:0}}
        style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at 50% 80%, ${project.accent}10 0%, transparent 60%)`, pointerEvents:'none' }} />
    </motion.a>
  )
}

function AboutSnippet() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-15%' })
  return (
    <section ref={ref} style={{ padding:'100px 4vw', borderTop:'1px solid rgba(255,255,255,0.05)', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'start' }}>
      <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.9}}>
        <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'0.16em', textTransform:'uppercase', color:'#2a2a2a', marginBottom:28 }}>[ 02 / IDENTITY ]</div>
        <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(34px,4vw,56px)', letterSpacing:'-0.03em', lineHeight:1, color:'#d4d4d4', marginBottom:24 }}>
          I find what<br />attackers<br /><span style={{ color:'#c8ff00' }}>exploit.</span>
        </h2>
        <p style={{ fontFamily:'Space Grotesk,sans-serif', fontSize:14, color:'rgba(212,212,212,0.38)', lineHeight:1.85, maxWidth:380 }}>
          Security engineer specialising in offensive security, adversary emulation, and intelligent threat detection. Building at the intersection of cybersecurity, AI, and data science.
        </p>
      </motion.div>
      <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.9,delay:0.12}}>
        <div style={{ border:'1px solid rgba(255,255,255,0.07)', background:'rgba(255,255,255,0.02)', backdropFilter:'blur(20px)', padding:28 }}>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'0.14em', textTransform:'uppercase', color:'#444', marginBottom:16, paddingBottom:12, borderBottom:'1px solid rgba(255,255,255,0.06)' }}>CURRENT_STATUS</div>
          {[
            ['Institution', 'Edge Hill University'],
            ['Programme',   'BSc Computer Science'],
            ['Year',        '2nd Year (2024–2027)'],
            ['Focus',       'Cybersecurity pathway'],
            ['Availability', <span style={{ color:'#c8ff00' }}>Open ●</span>],
          ].map(([k, v]) => (
            <div key={k} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'9px 0', borderBottom:'1px solid rgba(255,255,255,0.04)' }}>
              <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'0.1em', textTransform:'uppercase', color:'#2a2a2a' }}>{k}</span>
              <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, color:'#666' }}>{v}</span>
            </div>
          ))}
        </div>
        <Link to="/about" style={{ display:'inline-block', marginTop:14, fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'0.14em', textTransform:'uppercase', color:'#444', textDecoration:'none', transition:'color 0.2s' }}
          onMouseEnter={e=>e.currentTarget.style.color='#c8ff00'} onMouseLeave={e=>e.currentTarget.style.color='#444'}>
          Full Profile →
        </Link>
      </motion.div>
    </section>
  )
}
