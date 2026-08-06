import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from '../components/Nav'
import Menu from '../components/Menu'
import { useTextReveal } from '../motion/useTextReveal'
import { useBlockReveal } from '../motion/useBlockReveal'
import { reduceMotion } from '../motion/tokens'
import { scrollToEl, scrollToY } from '../lib/smoothScroll'
import { VALUES, PROJECTS, SITE_IMAGES, TRACK_VW, OFFSETS, SECTION_LIST, SCROLL_SPEED, PROJECT_RANGES } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

const EXTRA_VH = (TRACK_VW - 100) * SCROLL_SPEED // scrollable distance while the track is pinned
const OUTER_VH = 100 + EXTRA_VH

export default function Home() {
  const containerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [progress, setProgress] = useState(0)
  const [sectionLabel, setSectionLabel] = useState('01 / 06')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 700px)')
    const apply = () => setIsMobile(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Lenis (started once in App.jsx) already smooths the raw wheel/touch
  // input before it reaches window.scrollY, so scrollYProgress itself is
  // already gliding — no extra spring layer needed on top of it here.
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${TRACK_VW - 100}vw`])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setProgress(v)
    let idx = 0
    for (let i = 0; i < SECTION_LIST.length; i++) {
      if (v >= SECTION_LIST[i][2] - 0.001) idx = i
    }
    setSectionLabel(`${SECTION_LIST[idx][0]} / 06`)
  })

  const goTo = (fraction) => {
    if (isMobile) {
      scrollToEl(document.getElementById(`section-${Object.keys(OFFSETS).find((k) => OFFSETS[k] === fraction) || 'hero'}`))
      return
    }
    const totalPx = window.innerHeight * (EXTRA_VH / 100)
    const start = containerRef.current?.offsetTop ?? 0
    scrollToY(start + fraction * totalPx)
  }

  // let the full-screen menu deep-link into a section by id
  useEffect(() => {
    const handler = (e) => {
      const key = e.detail
      if (OFFSETS[key] !== undefined) goTo(OFFSETS[key])
    }
    window.addEventListener('obra:scrollTo', handler)
    return () => window.removeEventListener('obra:scrollTo', handler)
  }, [isMobile])

  return (
    <>
      <Nav onMenuOpen={() => setMenuOpen(true)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
      {!isMobile && <Rail progress={progress} label={sectionLabel} />}

      <div
        ref={containerRef}
        className={isMobile ? 'scroll-outer mobile-stack' : 'scroll-outer'}
        style={isMobile ? {} : { height: `${OUTER_VH}vh` }}
      >
        <div className="scroll-sticky">
          <motion.div className="scroll-track" style={isMobile ? {} : { x }}>
            <Hero progress={scrollYProgress} />
            <Philosophy progress={scrollYProgress} />
            <Values />
            <ProjectsHeading />
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.num} project={p} progress={scrollYProgress} range={PROJECT_RANGES[i]} />
            ))}
            <Closing progress={scrollYProgress} />
            <Contact />
          </motion.div>
        </div>
      </div>
    </>
  )
}

function Rail({ progress, label }) {
  return (
    <div className="rail">
      <span className="rail__count">{label}</span>
      <div className="rail__track">
        <motion.div className="rail__fill" style={{ scaleX: progress, width: '100%' }} />
      </div>
      <span className="rail__count">{Math.round(progress * 100)}%</span>
    </div>
  )
}

function Hero({ progress }) {
  const bgX = useTransform(progress, [OFFSETS.hero, OFFSETS.philosophy], ['-8%', '8%'])
  return (
    <section className="panel panel--ink hero" id="section-hero">
      <motion.div
        className="hero__bg ph-tone"
        style={{ backgroundImage: `url(${SITE_IMAGES.hero})`, x: bgX }}
      />
      <span className="eyebrow hero__eyebrow">OBRA — Est. 2015</span>
      <h1>
        Homes built
        <br />
        to outlive
        <br />
        <em>the moment</em>
      </h1>
      <p className="hero__sub">
        In a world saturated with the disposable, we build houses meant to last — considerate of the
        land, generous with light, and finished to a standard trends can't touch.
      </p>
      <div className="hero__scroll-cue">
        <span className="bar" />
        Scroll
      </div>
    </section>
  )
}

function Philosophy({ progress }) {
  const imgX = useTransform(progress, [OFFSETS.philosophy, OFFSETS.values], ['-10%', '10%'])
  const headingRef = useRef(null)
  const bodyRef = useRef(null)
  useBlockReveal(headingRef, { start: 'top 75%' })
  useTextReveal(bodyRef, { start: 'top 78%', stagger: 0.05 })
  return (
    <section className="panel panel--stone philosophy" id="section-philosophy">
      <div className="philosophy__text">
        <span className="eyebrow" style={{ color: 'var(--bronze)' }}>
          Studio
        </span>
        <div className="reveal-mask">
          <h2 ref={headingRef}>
            Rooms that ask you to <em>slow down</em>
          </h2>
        </div>
        <p ref={bodyRef}>
          Every home should be as singular as the people who live in it. We work at the edge of
          aspirational calm, where design, sustainability and daily life meet to make something
          genuinely exceptional — a place that improves the ordinary hour, not just the special one.
        </p>
      </div>
      <div className="philosophy__image">
        <motion.div
          className="philosophy__image-bg ph-tone"
          style={{ backgroundImage: `url(${SITE_IMAGES.philosophy})`, x: imgX }}
        />
      </div>
    </section>
  )
}

function Values() {
  const headingRef = useRef(null)
  useBlockReveal(headingRef, { start: 'top 78%' })
  return (
    <section className="panel panel--ink values" id="section-values">
      <span className="eyebrow">What we build around</span>
      <div className="reveal-mask">
        <h2 ref={headingRef}>Three ideas we don't compromise on</h2>
      </div>
      <div className="values__grid">
        {VALUES.map((v) => (
          <ValueCard key={v.num} value={v} />
        ))}
      </div>
    </section>
  )
}

function ValueCard({ value }) {
  const bodyRef = useRef(null)
  useTextReveal(bodyRef, { start: 'top 90%', stagger: 0.04 })
  return (
    <div className="value-card">
      <span className="num">{value.num}</span>
      <h3>{value.title}</h3>
      <p ref={bodyRef}>{value.body}</p>
    </div>
  )
}

function ProjectsHeading() {
  const headingRef = useRef(null)
  const bodyRef = useRef(null)
  useBlockReveal(headingRef, { start: 'top 80%' })
  useTextReveal(bodyRef, { start: 'top 85%', stagger: 0.05 })
  return (
    <div className="projects-heading" id="section-projects">
      <span className="eyebrow">Projects</span>
      <div className="reveal-mask">
        <h2 ref={headingRef}>
          Luxury isn't loud — it's <em style={{ color: 'var(--bronze-light)' }}>built</em>
        </h2>
      </div>
      <p ref={bodyRef}>
        Five houses, one conviction: that comfort, restraint and craft can share the same room.
        Scroll on for the current collection.
      </p>
    </div>
  )
}

function ProjectCard({ project, progress, range }) {
  const bgX = useTransform(progress, range, ['-9%', '9%'])
  const cardRef = useRef(null)
  const imgRef = useRef(null)
  const maskRef = useRef(null)

  useEffect(() => {
    if (reduceMotion()) return
    const card = cardRef.current
    gsap.set(imgRef.current, { scale: 1.12 })

    // The card's position changes via the track's translateX (driven by
    // vertical scroll), not native horizontal scrollLeft, so a regular
    // ScrollTrigger start/end can't read its position — IntersectionObserver
    // checks real rendered bounds instead, transform included, and fires
    // reliably regardless of scroll axis.
    const play = () => {
      gsap
        .timeline()
        .to(maskRef.current, { scaleX: 0, duration: 0.9, ease: 'power4.inOut', transformOrigin: 'right' })
        .to(imgRef.current, { scale: 1, duration: 1.1, ease: 'power3.out' }, '<0.1')
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          play()
          io.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    io.observe(card)
    return () => io.disconnect()
  }, [])

  return (
    <Link to={`/projects/${project.slug}`} className="project-card" ref={cardRef}>
      <div ref={imgRef} className="project-card__bg-clip">
        <motion.div
          className="project-card__bg ph-tone"
          style={{ backgroundImage: `url(${project.image})`, x: bgX }}
        />
      </div>
      <div ref={maskRef} className="project-card__mask" />
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.num}</span>
          <span>{project.year}</span>
          <span>{project.place}</span>
        </div>
        <h3>{project.name}</h3>
        <span className="tag">{project.status}</span>
      </div>
    </Link>
  )
}

function Closing({ progress }) {
  const bgX = useTransform(progress, [OFFSETS.closing, OFFSETS.contact], ['-8%', '8%'])
  const headingRef = useRef(null)
  const bodyRef = useRef(null)
  useBlockReveal(headingRef, { start: 'top 75%', distance: '100%' })
  useTextReveal(bodyRef, { start: 'top 80%', stagger: 0.05 })
  return (
    <section className="panel panel--moss closing" id="section-closing">
      <motion.div
        className="closing__bg ph-tone"
        style={{ backgroundImage: `url(${SITE_IMAGES.closing})`, x: bgX }}
      />
      <span className="eyebrow">On luxury</span>
      <div className="reveal-mask">
        <h2 ref={headingRef}>
          It doesn't shout. It doesn't chase the season. It's <em>quiet, playful, alive.</em>
        </h2>
      </div>
      <p ref={bodyRef}>
        We don't build houses so much as a way of living — spaces of calm that are just as ready to
        be shared as they are to be kept for yourself.
      </p>
    </section>
  )
}

function Contact() {
  return (
    <section className="panel panel--stone" id="section-contact">
      <div className="contact-grid">
        <div className="contact-intro">
          <span className="eyebrow" style={{ color: 'var(--bronze)' }}>
            Contact
          </span>
          <h2>Begin your next chapter</h2>
          <p>
            Tell us a little about what you're looking for and a member of the studio will be in
            touch within one working day.
          </p>
          <span className="email">contact@obra-estates.com</span>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="field">
            <input id="name" type="text" placeholder=" " required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="field">
            <input id="phone" type="tel" placeholder=" " />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="field">
            <input id="email" type="email" placeholder=" " required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="field">
            <textarea id="message" rows="3" placeholder=" " />
            <label htmlFor="message">Message</label>
          </div>
          <button className="submit-btn" type="submit">
            Request information
          </button>
        </form>
      </div>
      <div className="contact-footer">
        <span>Instagram · Pinterest</span>
        <span>OBRA © 2026</span>
      </div>
    </section>
  )
}
