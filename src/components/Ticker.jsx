const items = ['Offensive Security','Adversary Emulation','Machine Learning','Data Science','Red Teaming','eBPF / XDP','Threat Detection','Autonomous Systems','C / Rust / Python','Post-Quantum Crypto']

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div style={{ overflow:'hidden', padding:'10px 0', borderTop:'1px solid rgba(255,255,255,0.05)', borderBottom:'1px solid rgba(255,255,255,0.05)', background:'rgba(255,255,255,0.01)' }}>
      <div style={{ display:'flex', whiteSpace:'nowrap', animation:'ticker 36s linear infinite' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(102,102,102,0.5)', padding:'0 32px', display:'flex', alignItems:'center', gap:32 }}>
            {item}
            <span style={{ fontSize:4, color:'rgba(200,255,0,0.3)' }}>◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  )
}
