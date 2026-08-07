import { useState, useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Nav from '../components/Nav'
import Menu from '../components/Menu'
import { destinations } from '../data/content'

export default function Project() {
  const { slug } = useParams()
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = useRef(null)
  const project = destinations.find((p) => p.slug === slug)
  const idx = destinations.findIndex((p) => p.slug === slug)

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '22%'])

  if (!project) return <Navigate to="/" replace />

  const next = destinations[(idx + 1) % destinations.length]

  return (
    <div className="project-page">
      <Nav onMenuOpen={() => setMenuOpen(true)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <header className="project-hero" ref={heroRef}>
        <motion.div
          className="project-hero__bg ph-tone"
          style={{ backgroundImage: `url(${project.image})`, y: heroY }}
        />
        <motion.div
          className="project-hero__body"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="project-hero__meta">
            <span>{project.num} / {String(destinations.length).padStart(2, '0')}</span>
            <span>{project.place}</span>
            <span>{project.status}</span>
          </div>
          <h1>{project.name}</h1>
        </motion.div>
      </header>

      <section className="project-body">
        <div className="project-body__intro">
          <span className="eyebrow" style={{ color: 'var(--bronze)' }}>
            About this experience
          </span>
          <p>{project.summary}</p>
        </div>

        <dl className="project-facts">
          {Object.entries(project.facts).map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>

        {project.highlights && (
          <div className="project-highlights">
            <span className="eyebrow">Where to start</span>
            <div className="project-highlights__grid">
              {project.highlights.map((h) => (
                <HighlightCard key={h.name} highlight={h} />
              ))}
            </div>
          </div>
        )}

        <div className="project-gallery">
          {project.gallery.map((src, i) => (
            <GalleryItem key={i} src={src} delay={i * 0.08} />
          ))}
        </div>
      </section>

      <Link to={`/destinations/${next.slug}`} className="project-next">
        <span className="eyebrow">Next to explore</span>
        <h2>{next.name}</h2>
        <span className="project-next__arrow">→</span>
      </Link>

      <footer className="project-footer">
        <Link to="/">← Back to Goa Tourism</Link>
        <span>GOA TOURISM © 2026</span>
      </footer>
    </div>
  )
}

function HighlightCard({ highlight }) {
  const ref = useRef(null)
  return (
    <motion.div
      ref={ref}
      className="highlight-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="highlight-card__image ph-tone" style={{ backgroundImage: `url(${highlight.image})` }} />
      <h3>{highlight.name}</h3>
      <p>{highlight.blurb}</p>
    </motion.div>
  )
}

function GalleryItem({ src, delay }) {
  const ref = useRef(null)
  const isVideo = /\.(mp4|webm|mov)$/i.test(src)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <motion.div
      ref={ref}
      className="project-gallery__item"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay }}
    >
      {isVideo ? (
        <motion.video
          className="project-gallery__item-bg ph-tone"
          style={{ y }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
        </motion.video>
      ) : (
        <motion.div
          className="project-gallery__item-bg ph-tone"
          style={{ backgroundImage: `url(${src})`, y }}
        />
      )}
    </motion.div>
  )
}
