import { useState, useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Nav from '../components/Nav'
import Menu from '../components/Menu'
import { PROJECTS } from '../data/content'

export default function Project() {
  const { slug } = useParams()
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = useRef(null)
  const project = PROJECTS.find((p) => p.slug === slug)
  const idx = PROJECTS.findIndex((p) => p.slug === slug)

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '22%'])

  if (!project) return <Navigate to="/" replace />

  const next = PROJECTS[(idx + 1) % PROJECTS.length]

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
            <span>{project.num} / 05</span>
            <span>{project.place}</span>
            <span>{project.status}</span>
          </div>
          <h1>{project.name}</h1>
        </motion.div>
      </header>

      <section className="project-body">
        <div className="project-body__intro">
          <span className="eyebrow" style={{ color: 'var(--bronze)' }}>
            About this project
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

        <div className="project-gallery">
          {project.gallery.map((src, i) => (
            <GalleryItem key={i} src={src} delay={i * 0.08} />
          ))}
        </div>
      </section>

      <Link to={`/projects/${next.slug}`} className="project-next">
        <span className="eyebrow">Next project</span>
        <h2>{next.name}</h2>
        <span className="project-next__arrow">→</span>
      </Link>

      <footer className="project-footer">
        <Link to="/">← Back to OBRA</Link>
        <span>OBRA © 2026</span>
      </footer>
    </div>
  )
}

function GalleryItem({ src, delay }) {
  const ref = useRef(null)
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
      <motion.div
        className="project-gallery__item-bg ph-tone"
        style={{ backgroundImage: `url(${src})`, y }}
      />
    </motion.div>
  )
}
