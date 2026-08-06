import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { reduceMotion } from './tokens'

/**
 * Wraps its child in a magnetic-pull hover effect: the child nudges toward
 * the cursor within `strength` of its own size, then eases back to rest on
 * mouseleave. Uses gsap.quickTo so repeated mousemove events reuse one
 * tween instance instead of spawning a new one per frame.
 *
 * <MagneticLink strength={0.35}><button>Menu</button></MagneticLink>
 */
export default function MagneticLink({ children, strength = 0.35, className }) {
  const wrapRef = useRef(null)

  useLayoutEffect(() => {
    const el = wrapRef.current
    if (!el || reduceMotion()) return

    const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' })

    const move = (e) => {
      const { left, top, width, height } = el.getBoundingClientRect()
      xTo((e.clientX - (left + width / 2)) * strength)
      yTo((e.clientY - (top + height / 2)) * strength)
    }
    const reset = () => {
      xTo(0)
      yTo(0)
    }

    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', reset)
    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', reset)
    }
  }, [strength])

  return (
    <span ref={wrapRef} className={`magnetic ${className || ''}`}>
      {children}
    </span>
  )
}
