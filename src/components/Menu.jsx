import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS } from '../data/content'
import MagneticLink from '../motion/MagneticLink'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Studio', to: '/#studio' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Contact', to: '/#contact' },
]

export default function Menu({ open, onClose }) {
  const navigate = useNavigate()

  const go = (to) => {
    onClose()
    if (to.startsWith('/#')) {
      navigate('/')
      const id = to.split('#')[1]
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('obra:scrollTo', { detail: id }))
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
              OBRA<sup>®</sup>
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

          <div className="menu-projects">
            <span className="eyebrow">Current projects</span>
            <ul>
              {PROJECTS.map((p) => (
                <li key={p.slug}>
                  <Link to={`/projects/${p.slug}`} onClick={onClose}>
                    {p.name} <span>{p.place}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="menu-overlay__foot">
            <span>contact@obra-estates.com</span>
            <span>Instagram · Pinterest</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
