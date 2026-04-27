const items = [
  'Offensive Security', 'Adversary Emulation', 'Machine Learning',
  'Data Science', 'Red Teaming', 'eBPF / XDP', 'Threat Detection',
  'Autonomous Systems', 'C / Rust / Python',
]

export default function Ticker({ inverted = false }) {
  const doubled = [...items, ...items]

  return (
    <div
      className="overflow-hidden py-3"
      style={{
        borderTop:    `1px solid #1a1a1a`,
        borderBottom: `1px solid #1a1a1a`,
        background:   inverted ? '#f0ede6' : '#000',
      }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'ticker 28s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono text-[10px] tracking-[0.18em] uppercase px-10 flex items-center gap-10"
            style={{ color: inverted ? '#000' : '#3a3a3a' }}
          >
            {item}
            <span style={{ fontSize: '6px', color: inverted ? '#000' : '#1a1a1a' }}>◆</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
