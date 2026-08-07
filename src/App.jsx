import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import Project from './pages/Project'
import { startSmoothScroll, getLenis } from './lib/smoothScroll'

export default function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    startSmoothScroll()
  }, [])

  // reset scroll position on route change so a new page never opens
  // mid-scroll from wherever the previous page left off
  useEffect(() => {
    getLenis()?.scrollTo(0, { immediate: true })
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations/:slug" element={<Project />} />
      </Routes>
    </>
  )
}
