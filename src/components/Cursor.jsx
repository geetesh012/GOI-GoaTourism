import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Fixed dot + trailing ring. Disables itself on touch devices (no fine
// pointer) and skips the spring lag entirely under prefers-reduced-motion,
// so it never fights the OS/browser's own motion preference.
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [label, setLabel] = useState('')

  const cx = useMotionValue(-100)
  const cy = useMotionValue(-100)

  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const springConfig = reduced ? { stiffness: 1000, damping: 100, mass: 0.1 } : { stiffness: 280, damping: 26, mass: 0.5 }
  const ringX = useSpring(cx, springConfig)
  const ringY = useSpring(cy, springConfig)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const apply = () => setEnabled(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (!enabled) return
    document.body.classList.add('custom-cursor-active')

    const move = (e) => {
      cx.set(e.clientX)
      cy.set(e.clientY)
    }
    const over = (e) => {
      const target = e.target.closest('a, button, [data-cursor]')
      if (target) {
        setHovering(true)
        setLabel(target.dataset.cursorText || '')
      }
    }
    const out = (e) => {
      const target = e.target.closest('a, button, [data-cursor]')
      if (target) {
        setHovering(false)
        setLabel('')
      }
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [enabled, cx, cy])

  if (!enabled) return null

  return (
    <>
      <motion.div className="cursor-wrap" style={{ x: cx, y: cy }}>
        <div className={`cursor-dot ${hovering ? 'is-hovering' : ''}`} />
      </motion.div>
      <motion.div className="cursor-wrap" style={{ x: ringX, y: ringY }}>
        <div className={`cursor-ring ${hovering ? 'is-hovering' : ''}`}>
          {label && <span className="cursor-label">{label}</span>}
        </div>
      </motion.div>
    </>
  )
}