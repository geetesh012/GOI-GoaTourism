import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { reduceMotion } from './tokens'

gsap.registerPlugin(ScrollTrigger)

/**
 * Wraps each line of text in `ref` with an overflow-hidden mask span, then
 * reveals lines bottom-to-top on scroll, staggered. Splits by rendered
 * line (via getClientRects) rather than by word/character — see the
 * motion-design guide's note on why paragraph-scale text shouldn't be
 * split character-by-character.
 *
 * useTextReveal(headingRef, { start: 'top 80%' })
 */
export function useTextReveal(ref, { start = 'top 80%', stagger = 0.1, once = true } = {}) {
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    if (reduceMotion()) return // leave text static and fully visible

    const original = el.innerHTML
    const words = el.textContent.split(/\s+/)

    // rebuild content as individually-measurable word spans first
    el.innerHTML = words
      .map((w) => `<span class="tr-word" style="display:inline-block">${w}&nbsp;</span>`)
      .join('')

    const wordEls = Array.from(el.querySelectorAll('.tr-word'))

    // group words into lines by their rendered top offset
    const lines = []
    let currentTop = null
    let currentLine = []
    wordEls.forEach((w) => {
      const top = w.offsetTop
      if (currentTop === null || Math.abs(top - currentTop) < 2) {
        currentLine.push(w)
        currentTop = top
      } else {
        lines.push(currentLine)
        currentLine = [w]
        currentTop = top
      }
    })
    if (currentLine.length) lines.push(currentLine)

    // wrap each line's words in a masked container and move them there
    el.innerHTML = ''
    const lineMasks = lines.map((lineWords) => {
      const mask = document.createElement('span')
      mask.className = 'tr-line-mask'
      mask.style.cssText = 'display:block;overflow:hidden;'
      const inner = document.createElement('span')
      inner.className = 'tr-line'
      inner.style.cssText = 'display:block;'
      lineWords.forEach((w) => inner.appendChild(w))
      mask.appendChild(inner)
      el.appendChild(mask)
      return inner
    })

    const tween = gsap.fromTo(
      lineMasks,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 0.9,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: once ? 'play none none none' : 'play none none reverse',
        },
      }
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
      el.innerHTML = original
    }
  }, [ref, start, stagger, once])
}
