import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav    from './components/Nav'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import HUD    from './components/HUD'
import { useLenis } from './hooks/useLenis'

import Home    from './pages/Home'
import Work    from './pages/Work'
import About   from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  useLenis()
  return (
    <div className="grain scanlines min-h-screen flex flex-col" style={{ background:'#050505' }}>
      {/* Cursor glow */}
      <div id="cursor-glow" style={{ position:'fixed', pointerEvents:'none', zIndex:1, width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle, rgba(200,255,0,0.03) 0%, transparent 70%)', transform:'translate(-50%,-50%)', willChange:'left,top' }} />
      <Nav />
      <HUD />
      <div className="flex-1">
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/work"    element={<Work />} />
          <Route path="/about"   element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Cursor />
      <Layout />
    </HashRouter>
  )
}
