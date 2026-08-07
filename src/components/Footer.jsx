import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__intro">
          <span className="eyebrow">Goa Tourism</span>
          <h2>
            Still deciding? <em>Start with a destination.</em>
          </h2>
          <a href="mailto:geeteshkankonkar@gmail.com" className="site-footer__email">
            geeteshkankonkar@gmail.com
          </a>
        </div>

        <nav className="site-footer__col" aria-label="Explore">
          <span className="site-footer__col-title">Explore</span>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#section-philosophy" onClick={(e) => scrollToSection(e, 'philosophy')}>
                Our approach
              </a>
            </li>
            <li>
              <a href="#section-values" onClick={(e) => scrollToSection(e, 'values')}>
                Why Goa
              </a>
            </li>
            <li>
              <a href="#section-contact" onClick={(e) => scrollToSection(e, 'contact')}>
                Plan a trip
              </a>
            </li>
          </ul>
        </nav>

        <nav className="site-footer__col" aria-label="Discover">
          <span className="site-footer__col-title">Discover</span>
          <ul>
            {PROJECTS.map((p) => (
              <li key={p.slug}>
                <Link to={`/projects/${p.slug}`}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__col">
          <span className="site-footer__col-title">Connect</span>
          <ul>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Goa Tourism</span>
        <div className="site-footer__legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}

// dispatches the same event Menu.jsx uses to deep-link into a section,
// so footer links and menu links stay behaviorally consistent
function scrollToSection(e, id) {
  e.preventDefault()
  window.dispatchEvent(new CustomEvent('GOI:scrollTo', { detail: id }))
}
