import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Ticker from '../components/Ticker'
import { projects } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef     = useRef(null)
  const nameRef     = useRef(null)
  const subRef      = useRef(null)
  const projectsRef = useRef(null)

  // Hero entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = nameRef.current?.querySelectorAll('.split-inner')
      if (lines) {
        gsap.to(lines, {
          y: '0%',
          duration: 1.2,
          ease: 'expo.out',
          stagger: 0.12,
          delay: 0.1,
        })
      }
      gsap.fromTo(subRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1, ease: 'expo.out', delay: 0.5 }
      )
    })
    return () => ctx.revert()
  }, [])

  // Scroll reveals
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-up').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
          }
        )
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <main>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end pb-14 px-10 overflow-hidden"
      >
        {/* Top-left meta */}
        <div
          className="absolute top-28 left-10 font-mono text-[10px] tracking-[0.14em] uppercase leading-loose"
          style={{ color: '#3a3a3a' }}
        >
          Security Engineer<br />
          Edge Hill University<br />
          England, UK
        </div>

        {/* Big name */}
        <h1
          ref={nameRef}
          className="font-serif italic relative z-10"
          style={{
            fontSize: 'clamp(88px, 15vw, 220px)',
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
          }}
        >
          <span className="split-line">
            <span className="split-inner">Ethan</span>
          </span>
          <span className="split-line">
            <span className="split-inner">Hulme</span>
          </span>
        </h1>

        {/* Bottom row */}
        <div
          ref={subRef}
          className="flex justify-between items-end mt-6 flex-wrap gap-5 relative z-10"
          style={{ opacity: 0 }}
        >
          <p
            className="font-body text-sm leading-relaxed max-w-xs"
            style={{ color: 'rgba(240,237,230,0.45)', letterSpacing: '0.02em' }}
          >
            Cybersecurity · AI / ML · Data Science.<br />
            I build systems that find what others miss.
          </p>
          <div className="flex gap-4 items-center">
            <Link
              to="/work"
              className="font-mono text-[10px] tracking-widest uppercase px-5 py-3 transition-colors duration-200"
              style={{ background: '#f0ede6', color: '#000', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.background = '#c8ff00'}
              onMouseLeave={e => e.currentTarget.style.background = '#f0ede6'}
            >
              View Work
            </Link>
            <a
              href="/ethan-hulme-cv.pdf"
              download
              className="font-mono text-[10px] tracking-widest uppercase px-5 py-3 transition-colors duration-200"
              style={{ border: '1px solid #1a1a1a', color: 'rgba(240,237,230,0.45)', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#f0ede6'; e.currentTarget.style.color = '#f0ede6' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.color = 'rgba(240,237,230,0.45)' }}
            >
              CV ↓
            </a>
          </div>
        </div>

        {/* Vertical label right */}
        <div
          className="absolute right-10 bottom-14 font-mono text-[9px] tracking-[0.2em] uppercase"
          style={{ writingMode: 'vertical-rl', color: '#1a1a1a' }}
        >
          Humm3ll · 2025
        </div>
      </section>

      {/* ── TICKER ── */}
      <Ticker />

      {/* ── SELECTED WORK PREVIEW ── */}
      <section
        ref={projectsRef}
        className="px-10 py-32"
        style={{ borderBottom: '1px solid #1a1a1a' }}
      >
        <div className="flex justify-between items-baseline mb-20 reveal-up">
          <h2
            className="font-serif italic"
            style={{
              fontSize: 'clamp(48px, 7vw, 96px)',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
            }}
          >
            Selected<br />Work
          </h2>
          <Link
            to="/work"
            className="font-mono text-[10px] tracking-widest uppercase transition-opacity duration-200 no-underline"
            style={{ color: 'rgba(240,237,230,0.4)', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.opacity = 1}
            onMouseLeave={e => e.currentTarget.style.opacity = 0.4}
          >
            All Work →
          </Link>
        </div>

        {/* Project rows */}
        <div>
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* ── INTRO BLURB ── */}
      <section className="px-10 py-32" style={{ borderBottom: '1px solid #1a1a1a' }}>
        <div className="max-w-2xl reveal-up">
          <div
            className="font-mono text-[10px] tracking-widest uppercase mb-8"
            style={{ color: '#3a3a3a' }}
          >
            [ About ]
          </div>
          <p
            className="font-serif italic mb-6"
            style={{
              fontSize: 'clamp(24px, 3vw, 40px)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              color: '#f0ede6',
            }}
          >
            I find vulnerabilities before attackers exploit them.
          </p>
          <p
            className="font-body text-sm leading-relaxed mb-10"
            style={{ color: 'rgba(240,237,230,0.4)', letterSpacing: '0.02em', maxWidth: '480px' }}
          >
            Computer Science student at Edge Hill University, specialising in offensive security,
            adversary emulation, and intelligent threat detection. Building at the intersection
            of cybersecurity, AI, and data science.
          </p>
          <Link
            to="/about"
            className="font-mono text-[10px] tracking-widest uppercase transition-opacity duration-200 no-underline"
            style={{ color: 'rgba(240,237,230,0.4)', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = '#f0ede6'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,237,230,0.4)'}
          >
            More about me →
          </Link>
        </div>
      </section>
    </main>
  )
}

function ProjectRow({ project, index }) {
  const rowRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(rowRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0, duration: 0.7, ease: 'expo.out',
          scrollTrigger: { trigger: rowRef.current, start: 'top 90%' },
          delay: index * 0.06,
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
      className="group flex items-baseline gap-8 py-6 no-underline"
      style={{
        borderTop: '1px solid #1a1a1a',
        color: 'inherit',
        textDecoration: 'none',
        transition: 'padding-left 0.3s cubic-bezier(0.16,1,0.3,1)',
        opacity: 0,
      }}
      onMouseEnter={e => e.currentTarget.style.paddingLeft = '12px'}
      onMouseLeave={e => e.currentTarget.style.paddingLeft = '0px'}
    >
      <span
        className="font-mono text-[10px] tracking-wider shrink-0"
        style={{ color: '#3a3a3a', width: '32px' }}
      >
        {project.index}
      </span>

      <div className="flex-1 min-w-0">
        <div
          className="font-serif italic mb-1 transition-colors duration-200"
          style={{
            fontSize: 'clamp(20px, 2.5vw, 36px)',
            lineHeight: 1,
            letterSpacing: '-0.01em',
          }}
          onMouseEnter={e => { /* color handled by group */ }}
        >
          <span className="group-hover:text-[#c8ff00] transition-colors duration-200">
            {project.name}
          </span>
        </div>
        <div
          className="font-mono text-[11px] leading-relaxed mt-1"
          style={{ color: '#3a3a3a', maxWidth: '480px' }}
        >
          {project.short}
        </div>
      </div>

      <div className="hidden md:flex gap-2 flex-wrap justify-end">
        {project.tags.map(t => (
          <span
            key={t}
            className="font-mono text-[9px] tracking-wider uppercase px-2 py-1 transition-colors duration-200"
            style={{ border: '1px solid #1a1a1a', color: '#3a3a3a' }}
          >
            {t}
          </span>
        ))}
      </div>

      <span
        className="font-mono text-lg shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        style={{ color: '#3a3a3a' }}
      >
        ↗
      </span>
    </a>
  )
}
