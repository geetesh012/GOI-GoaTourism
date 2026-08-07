import { Link } from 'react-router-dom'
import MagneticLink from '../motion/MagneticLink'

export default function Nav({ onMenuOpen, dark = true }) {
  return (
    <nav className={`nav ${dark ? '' : 'nav--on-light'}`}>
      <Link to="/" className="nav__mark">
        GOI<sup>®</sup>
      </Link>
      <MagneticLink strength={0.4}>
        <button className="nav__menu-btn" onClick={onMenuOpen}>
          <span>Menu</span>
          <span className="nav__menu-lines">
            <i />
            <i />
          </span>
        </button>
      </MagneticLink>
    </nav>
  )
}
