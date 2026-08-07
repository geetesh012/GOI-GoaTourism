import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TITLE = 'GOI'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

export default function Preloader({ onDone }) {
  const [pct, setPct] = useState(0)
  const [visible, setVisible] = useState(true)
  const reduced = usePrefersReducedMotion()

  // lock scroll while the preloader is up
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const start = performance.now()
    const duration = reduced ? 500 : 2400 // slower, more deliberate count for the luxury feel
    let raf

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      setPct(Math.round(t * 100))
      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setVisible(false), reduced ? 100 : 550)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reduced])

  const letters = TITLE.split('')

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          className="preloader"
          exit={{ y: '-100%' }}
          transition={{ duration: reduced ? 0.3 : 1.3, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="preloader__center">
            <h1 className="preloader__mark" aria-label={TITLE}>
              {letters.map((char, i) => (
                <motion.span
                  key={i}
                  className="preloader__letter"
                  initial={reduced ? false : { y: '120%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    duration: 1.3,
                    delay: reduced ? 0 : 0.2 + i * 0.16,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {char}
                </motion.span>
              ))}
              <sup className="preloader__reg">®</sup>
            </h1>

            <motion.div
              className="preloader__rule"
              initial={reduced ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: reduced ? 0 : 0.8, ease: [0.65, 0, 0.35, 1] }}
            />

            <motion.span
              className="preloader__subtitle"
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: reduced ? 0 : 1.05 }}
            >
              Goa Tourism
            </motion.span>
          </div>

          <div className="preloader__pct">
            <span className="preloader__pct-num">{String(pct).padStart(2, '0')}</span>
            <span className="preloader__pct-sign">%</span>
          </div>

          <span className="preloader__corner preloader__corner--tl">Est. 1982</span>
          <span className="preloader__corner preloader__corner--br">India</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}