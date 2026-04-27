import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Ticker from '../components/Ticker'

export default function Contact() {
  const headerRef = useRef(null)
  const bodyRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = headerRef.current?.querySelectorAll('.split-inner')
      if (lines) {
        gsap.to(lines, { y: '0%', duration: 1.1, ease: 'expo.out', stagger: 0.12, delay: 0.1 })
      }
      gsap.fromTo(bodyRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out', delay: 0.5 }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <main>
      {/* Header */}
      <section className="px-10 pt-40 pb-24" style={{ borderBottom: '1px solid #1a1a1a' }}>
        <div className="font-mono text-[10px] tracking-widest uppercase mb-12" style={{ color: '#3a3a3a' }}>
          [ Contact ]
        </div>
        <h1
          ref={headerRef}
          className="font-serif italic"
          style={{
            fontSize: 'clamp(72px, 13vw, 190px)',
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
          }}
        >
          <span className="split-line"><span className="split-inner">Let's</span></span>
          <span className="split-line">
            <span className="split-inner" style={{ color: '#3a3a3a' }}>talk.</span>
          </span>
        </h1>
      </section>

      <Ticker />

      {/* Contact body */}
      <section
        ref={bodyRef}
        className="px-10 py-28"
        style={{ opacity: 0, borderBottom: '1px solid #1a1a1a' }}
      >
        <div className="grid gap-0" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {/* Left */}
          <div style={{ borderRight: '1px solid #1a1a1a', paddingRight: '80px' }}>
            <div
              className="font-mono text-[9px] tracking-widest uppercase mb-8 pb-4"
              style={{ color: '#3a3a3a', borderBottom: '1px solid #1a1a1a' }}
            >
              Email
            </div>
            <a
              href="mailto:humm3ll@outlook.com"
              className="font-serif italic block no-underline transition-colors duration-200"
              style={{
                fontSize: 'clamp(20px, 3vw, 42px)',
                letterSpacing: '-0.01em',
                color: '#3a3a3a',
                textDecoration: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#f0ede6'}
              onMouseLeave={e => e.currentTarget.style.color = '#3a3a3a'}
            >
              humm3ll<br />@outlook.com
            </a>
          </div>

          {/* Right */}
          <div style={{ paddingLeft: '80px' }}>
            <div
              className="font-mono text-[9px] tracking-widest uppercase mb-8 pb-4"
              style={{ color: '#3a3a3a', borderBottom: '1px solid #1a1a1a' }}
            >
              Elsewhere
            </div>
            <div className="flex flex-col gap-5">
              {[
                { label: 'GitHub',   href: 'https://github.com/humm3ll' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/ethan-hulme' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm transition-colors duration-200 no-underline group flex items-center gap-3"
                  style={{ color: '#3a3a3a', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f0ede6'}
                  onMouseLeave={e => e.currentTarget.style.color = '#3a3a3a'}
                >
                  <span
                    className="font-mono text-[9px] tracking-widest uppercase w-20 shrink-0"
                  >
                    {label}
                  </span>
                  <span className="text-[10px]">↗</span>
                </a>
              ))}
            </div>

            <div className="mt-16">
              <div
                className="font-mono text-[9px] tracking-widest uppercase mb-4 pb-4"
                style={{ color: '#3a3a3a', borderBottom: '1px solid #1a1a1a' }}
              >
                Status
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-[6px] h-[6px] rounded-full"
                  style={{
                    background: '#c8ff00',
                    animation: 'pulse-dot 2s ease-in-out infinite',
                  }}
                />
                <span className="font-mono text-[10px] tracking-wider" style={{ color: '#3a3a3a' }}>
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(200,255,0,0.5); }
          50% { box-shadow: 0 0 0 5px rgba(200,255,0,0); }
        }
      `}</style>
    </main>
  )
}
