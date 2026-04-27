import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      className="px-10 py-6 flex justify-between items-center"
      style={{ borderTop: '1px solid #1a1a1a' }}
    >
      <span className="font-mono text-[9px] tracking-widest uppercase" style={{ color: '#3a3a3a' }}>
        © 2025 Ethan Hulme
      </span>
      <span className="font-mono text-[9px] tracking-widest uppercase" style={{ color: '#3a3a3a' }}>
        53.5461°N 2.6461°W
      </span>
      <span className="font-mono text-[9px] tracking-widest uppercase" style={{ color: '#3a3a3a' }}>
        humm3ll.github.io
      </span>
    </footer>
  )
}
