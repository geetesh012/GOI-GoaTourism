export const EASE = {
  entrance: 'expo.out',
  exit: 'power2.in',
  glide: 'power3.inOut',
  bezier: 'cubic-bezier(0.76, 0, 0.24, 1)',
}

export const DUR = {
  micro: 0.25,
  short: 0.5,
  medium: 0.9,
  long: 1.4,
}

export const STAGGER = 0.06

export const reduceMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
