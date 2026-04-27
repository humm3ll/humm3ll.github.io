import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data'
import Ticker from '../components/Ticker'

gsap.registerPlugin(ScrollTrigger)

// Placeholder gradient images (replace with real screenshots later)
const gradients = [
  'linear-gradient(135deg, #0a0f0a 0%, #0d2010 100%)',
  'linear-gradient(135deg, #0a0a0f 0%, #0d0d20 100%)',
  'linear-gradient(135deg, #0f0a0a 0%, #200d0d 100%)',
  'linear-gradient(135deg, #0a0f0f 0%, #0d2020 100%)',
]

export default function Work() {
  const headerRef  = useRef(null)
  const followerRef = useRef(null)
  const [activeProject, setActiveProject] = useState(null)

  // Header entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = headerRef.current?.querySelectorAll('.split-inner')
      if (lines) {
        gsap.to(lines, {
          y: '0%', duration: 1.1, ease: 'expo.out', stagger: 0.1, delay: 0.1,
        })
      }
    })
    return () => ctx.revert()
  }, [])

  // Image follower mouse tracking
  useEffect(() => {
    const onMove = (e) => {
      if (!followerRef.current) return
      followerRef.current.style.left = e.clientX + 'px'
      followerRef.current.style.top  = e.clientY + 'px'
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <main>
      {/* Image follower */}
      <div
        ref={followerRef}
        className="fixed pointer-events-none z-[200] w-[300px] overflow-hidden"
        style={{
          aspectRatio: '4/3',
          transform: 'translate(-50%, -50%)',
          opacity: activeProject !== null ? 1 : 0,
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          scale: activeProject !== null ? 1 : 0.9,
        }}
      >
        {activeProject !== null && (
          <div
            className="w-full h-full"
            style={{ background: gradients[activeProject % gradients.length] }}
          >
            {/* Replace with <img> when you have screenshots */}
            <div className="w-full h-full flex items-center justify-center">
              <span
                className="font-mono text-[10px] tracking-widest uppercase"
                style={{ color: '#3a3a3a' }}
              >
                {projects[activeProject]?.name}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Header */}
      <section className="px-10 pt-40 pb-20" style={{ borderBottom: '1px solid #1a1a1a' }}>
        <div
          className="font-mono text-[10px] tracking-widest uppercase mb-12"
          style={{ color: '#3a3a3a' }}
        >
          [ Work ]
        </div>
        <h1
          ref={headerRef}
          className="font-serif italic"
          style={{
            fontSize: 'clamp(64px, 11vw, 160px)',
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
          }}
        >
          <span className="split-line"><span className="split-inner">Selected</span></span>
          <span className="split-line"><span className="split-inner">Projects</span></span>
        </h1>
      </section>

      <Ticker />

      {/* Project list */}
      <section className="px-10">
        {projects.map((p, i) => (
          <WorkItem
            key={p.id}
            project={p}
            index={i}
            onHover={setActiveProject}
          />
        ))}
      </section>
    </main>
  )
}

function WorkItem({ project, index, onHover }) {
  const rowRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(rowRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'expo.out',
          scrollTrigger: { trigger: rowRef.current, start: 'top 90%' },
          delay: index * 0.05,
        }
      )
    })
    return () => ctx.revert()
  }, [index])

  return (
    <a
      ref={rowRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block no-underline"
      style={{
        borderBottom: '1px solid #1a1a1a',
        color: 'inherit',
        textDecoration: 'none',
        opacity: 0,
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <div
        className="grid py-8 items-start gap-8 transition-all duration-300"
        style={{
          gridTemplateColumns: '48px 1fr auto auto',
          paddingLeft: '0px',
          transition: 'padding-left 0.3s cubic-bezier(0.16,1,0.3,1)',
        }}
        onMouseEnter={e => e.currentTarget.style.paddingLeft = '16px'}
        onMouseLeave={e => e.currentTarget.style.paddingLeft = '0px'}
      >
        {/* Index */}
        <div className="font-mono text-[10px] pt-1" style={{ color: '#3a3a3a' }}>
          {project.index}
        </div>

        {/* Main info */}
        <div>
          <div
            className="font-serif italic mb-3 transition-colors duration-200 group-hover:text-[#c8ff00]"
            style={{
              fontSize: 'clamp(28px, 4vw, 56px)',
              lineHeight: 1,
              letterSpacing: '-0.01em',
            }}
          >
            {project.name}
          </div>
          <p
            className="font-body text-sm leading-relaxed max-w-lg"
            style={{ color: 'rgba(240,237,230,0.35)', letterSpacing: '0.02em' }}
          >
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="hidden md:flex flex-col gap-2 items-end pt-1">
          {project.tags.map(t => (
            <span
              key={t}
              className="font-mono text-[9px] tracking-wider uppercase px-2 py-1 transition-colors duration-200 group-hover:border-[#c8ff00] group-hover:text-[#c8ff00]"
              style={{ border: '1px solid #1a1a1a', color: '#3a3a3a' }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Arrow + year */}
        <div className="flex flex-col items-end justify-between pt-1 gap-8">
          <span
            className="font-mono text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#c8ff00]"
            style={{ color: '#3a3a3a' }}
          >
            ↗
          </span>
          <span
            className="font-mono text-[10px]"
            style={{ color: '#1a1a1a' }}
          >
            {project.year}
          </span>
        </div>
      </div>
    </a>
  )
}
