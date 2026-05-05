import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Nav    from './components/Nav'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import { useLenis } from './hooks/useLenis'

import Home    from './pages/Home'
import Work    from './pages/Work'
import About   from './pages/About'
import Contact from './pages/Contact'

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, filter: 'blur(4px)' }}
    animate={{ opacity: 1, filter: 'blur(0px)' }}
    exit={{ opacity: 0, filter: 'blur(4px)' }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}>
    {children}
  </motion.div>
)

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"        element={<PageTransition><Home /></PageTransition>} />
        <Route path="/work"    element={<PageTransition><Work /></PageTransition>} />
        <Route path="/about"   element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

function Layout() {
  useLenis()
  return (
    <div className="scanlines noise vignette min-h-screen flex flex-col" style={{ background: '#000' }}>
      {/* Static horizontal line */}
      <div className="static-line" />
      <Nav />
      <div className="flex-1">
        <AnimatedRoutes />
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
