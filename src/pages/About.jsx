import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skills } from '../data'
import Ticker from '../components/Ticker'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const headerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = headerRef.current?.querySelectorAll('.split-inner')
      if (lines) {
        gsap.to(lines, { y: '0%', duration: 1.1, ease: 'expo.out', stagger: 0.1, delay: 0.1 })
      }
      gsap.utils.toArray('.reveal-about').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 32 },
          {
            opacity: 1, y: 0, duration: 0.85, ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
            delay: i * 0.04,
          }
        )
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <main>
      {/* Header */}
      <section className="px-10 pt-40 pb-24" style={{ borderBottom: '1px solid #1a1a1a' }}>
        <div
          className="font-mono text-[10px] tracking-widest uppercase mb-12"
          style={{ color: '#3a3a3a' }}
        >
          [ About ]
        </div>
        <h1
          ref={headerRef}
          className="font-serif italic max-w-4xl"
          style={{
            fontSize: 'clamp(48px, 8vw, 110px)',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
          }}
        >
          <span className="split-line"><span className="split-inner">Security</span></span>
          <span className="split-line"><span className="split-inner">Engineer.</span></span>
        </h1>
      </section>

      <Ticker />

      {/* Bio grid */}
      <section
        className="grid px-10 py-28 gap-0"
        style={{
          gridTemplateColumns: '1fr 1fr',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        {/* Left: statement */}
        <div
          className="pr-20 reveal-about"
          style={{ borderRight: '1px solid #1a1a1a' }}
        >
          <p
            className="font-serif italic mb-8"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}
          >
            I find what<br />
            <span style={{ color: '#3a3a3a' }}>attackers</span><br />
            exploit.
          </p>
          <p
            className="font-body text-sm leading-loose mb-5"
            style={{ color: 'rgba(240,237,230,0.4)', letterSpacing: '0.02em', maxWidth: '400px' }}
          >
            Computer Science student at Edge Hill University, specialising
            in offensive security, adversary emulation, and intelligent threat
            detection. Building at the intersection of cybersecurity, AI, and
            data science.
          </p>
          <p
            className="font-body text-sm leading-loose"
            style={{ color: 'rgba(240,237,230,0.4)', letterSpacing: '0.02em', maxWidth: '400px' }}
          >
            Goal: Red Team Operator contributing to teams working at the
            cutting edge of cyber and cyber-physical defence.
          </p>
        </div>

        {/* Right: details */}
        <div className="pl-20 reveal-about" style={{ transitionDelay: '0.1s' }}>
          {/* Education */}
          <div className="mb-12">
            <div
              className="font-mono text-[9px] tracking-widest uppercase mb-5 pb-4"
              style={{ color: '#3a3a3a', borderBottom: '1px solid #1a1a1a' }}
            >
              Education
            </div>
            <div
              className="font-mono text-[9px] tracking-widest uppercase mb-2"
              style={{ color: '#c8ff00' }}
            >
              Oct 2024 – May 2027
            </div>
            <div
              className="font-body text-sm mb-1"
              style={{ color: '#f0ede6' }}
            >
              Edge Hill University
            </div>
            <div
              className="font-mono text-[10px]"
              style={{ color: '#3a3a3a' }}
            >
              BSc (Hons) Computer Science — Cybersecurity pathway
            </div>
          </div>

          {/* Skills list */}
          <div>
            <div
              className="font-mono text-[9px] tracking-widest uppercase mb-5 pb-4"
              style={{ color: '#3a3a3a', borderBottom: '1px solid #1a1a1a' }}
            >
              Stack
            </div>
            <div>
              {skills.map((s, i) => (
                <div
                  key={s.name}
                  className="flex justify-between items-center py-3 reveal-about"
                  style={{ borderBottom: '1px solid #1a1a1a', transitionDelay: `${i * 0.04}s` }}
                >
                  <span className="font-body text-sm" style={{ color: '#f0ede6' }}>{s.name}</span>
                  <span className="font-mono text-[9px] tracking-wider" style={{ color: '#3a3a3a' }}>{s.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Big year */}
      <section
        className="px-10 py-24 reveal-about"
        style={{ borderBottom: '1px solid #1a1a1a' }}
      >
        <div
          className="font-serif italic"
          style={{
            fontSize: 'clamp(100px, 18vw, 260px)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            color: '#1a1a1a',
          }}
        >
          2024—
        </div>
        <div
          className="font-body text-sm mt-4 max-w-md"
          style={{ color: 'rgba(240,237,230,0.3)', letterSpacing: '0.02em' }}
        >
          Year enrolment began. Building in public since.
        </div>
      </section>
    </main>
  )
}
