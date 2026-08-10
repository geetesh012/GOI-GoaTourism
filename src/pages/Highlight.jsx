import { useState, useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Nav from '../components/Nav'
import Menu from '../components/Menu'
import { destinations } from '../data/content'

export default function Highlight() {
  const { slug, highlightSlug } = useParams()
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = useRef(null)

  const parent = destinations.find((p) => p.slug === slug)
  const highlight = parent?.highlights.find((h) => h.slug === highlightSlug)

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '22%'])

  if (!parent || !highlight) return <Navigate to="/" replace />

  const siblings = parent.highlights
  const idx = siblings.findIndex((h) => h.slug === highlightSlug)
  const next = siblings[(idx + 1) % siblings.length]

  return (
    <div className="project-page">
      <Nav onMenuOpen={() => setMenuOpen(true)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <header className="project-hero" ref={heroRef}>
        <motion.div
          className="project-hero__bg ph-tone"
          style={{ backgroundImage: `url(${highlight.image})`, y: heroY }}
        />
        <motion.div
          className="project-hero__body"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="project-hero__meta">
            <Link to={`/destinations/${parent.slug}`} className="project-hero__breadcrumb">
              {parent.name}
            </Link>
            <span>{idx + 1} / {String(siblings.length).padStart(2, '0')}</span>
          </div>
          <h1>{highlight.name}</h1>
        </motion.div>
      </header>

      <section className="project-body">
        <div className="project-body__intro">
          <span className="eyebrow" style={{ color: 'var(--bronze)' }}>
            About this spot
          </span>
          <p>{highlight.description || highlight.blurb}</p>
        </div>

        {highlight.facts && (
          <dl className="project-facts">
            {Object.entries(highlight.facts).map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        )}
      </section>

      <Link to={`/destinations/${parent.slug}/${next.slug}`} className="project-next">
        <span className="eyebrow">More in {parent.name}</span>
        <h2>{next.name}</h2>
        <span className="project-next__arrow">→</span>
      </Link>

      <footer className="project-footer">
        <Link to={`/destinations/${parent.slug}`}>← Back to {parent.name}</Link>
        <span>GOA TOURISM © 2026</span>
      </footer>
    </div>
  )
}