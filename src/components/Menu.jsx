import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticLink from '../motion/MagneticLink'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/#story' },
  { label: 'Destinations', to: '/#destinations' },
  { label: 'Plan Your Trip', to: '/#contact' },
]

export default function Menu({ open, onClose }) {
  const navigate = useNavigate()

  const go = (to) => {
    onClose()
    if (to.startsWith('/#')) {
      navigate('/')
      const id = to.split('#')[1]
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('GOI:scrollTo', { detail: id }))
      }, 60)
    } else {
      navigate(to)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="menu-overlay"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="menu-overlay__top">
            <div className="nav__mark">
              GOI<sup>®</sup>
            </div>
            <button className="menu-close" onClick={onClose} aria-label="Close menu">
              Close
            </button>
          </div>

          <nav className="menu-links">
            {links.map((l, i) => (
              <MagneticLink key={l.label} strength={0.15}>
                <motion.button
                  onClick={() => go(l.to)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: 'easeOut' }}
                >
                  <span className="menu-links__num">0{i + 1}</span>
                  {l.label}
                </motion.button>
              </MagneticLink>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}