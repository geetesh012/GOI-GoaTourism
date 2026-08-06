import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { reduceMotion } from './tokens'

gsap.registerPlugin(ScrollTrigger)

/**
 * Reveals a whole block (heading, etc.) as a single masked unit — the
 * element must sit inside a wrapper with `overflow: hidden` in CSS
 * (see .reveal-mask). Unlike useTextReveal, this never touches innerHTML,
 * so nested tags like <em> keep their styling.
 *
 * useBlockReveal(headingRef, { start: 'top 78%' })
 */
export function useBlockReveal(ref, { start = 'top 78%', distance = '100%', duration = 0.9 } = {}) {
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    if (reduceMotion()) return

    const tween = gsap.fromTo(
      el,
      { yPercent: parseFloat(distance) },
      {
        yPercent: 0,
        duration,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
        },
      }
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [ref, start, distance, duration])
}
