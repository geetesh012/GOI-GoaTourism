import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis = null;

/**
 * Starts a single, app-wide Lenis instance and syncs it with GSAP's ticker
 * so ScrollTrigger (and anything reading window scroll, including
 * framer-motion's useScroll) sees an already-smoothed scroll position
 * instead of raw, stepped wheel/touch input.
 *
 * Call once near the app root. Safe to call multiple times — it no-ops
 * after the first call and just returns the existing instance.
 */
export function startSmoothScroll() {
  if (lenis) return lenis;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  lenis = new Lenis({
    duration: reduceMotion ? 0 : 1.9, // was 1.15
    easing: (t) => 1 - Math.pow(1 - t, 3), // was Math.pow(1 - t, 4)
    smoothWheel: !reduceMotion,
    syncTouch: false,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return lenis;
}

export function getLenis() {
  return lenis;
}

/** Scroll to an absolute pixel offset (used by Nav/Menu deep-links). */
export function scrollToY(y, opts = {}) {
  if (lenis) {
    lenis.scrollTo(y, {
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      ...opts,
    });
  } else {
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

/** Scroll to a DOM element (used by mobile section nav + menu deep-links). */
export function scrollToEl(el, opts = {}) {
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, {
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      ...opts,
    });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
