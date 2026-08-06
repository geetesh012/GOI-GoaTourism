export const SCROLL_SPEED = 1.7 // higher = slower, smoother traversal per pixel scrolled

export const VALUES = [
  {
    num: '01',
    title: 'Poise',
    body: 'A quiet, deliberate architecture — oak, limestone and an earthbound palette, never raising its voice.',
  },
  {
    num: '02',
    title: 'Honesty',
    body: "Materials and forms that don't pretend to be something else. What you see is structurally true.",
  },
  {
    num: '03',
    title: 'Ease',
    body: 'Open, flexible rooms with less hierarchy — spaces built to hold more than one way of living.',
  },
]

// Placeholder photography via Lorem Picsum (picsum.photos) — a seeded,
// license-cleared placeholder image service. Swap these urls for your own
// licensed photography before launch; see public/images/README.md.
const img = (seed, w = 1600, h = 1000) => `https://picsum.photos/seed/${seed}/${w}/${h}`

export const PROJECTS = [
  {
    num: '01',
    slug: 'casa-lumen',
    name: 'Casa Lumen',
    year: '2024',
    place: 'Sotogrande',
    status: 'Completed',
    image: img('obra-lumen-cover'),
    summary: 'A single-storey courtyard house organized around a reflecting pool, built to soften the Andalusian light rather than block it out.',
    facts: { area: '412 m²', bedrooms: '4', completed: '2024' },
    gallery: [img('obra-lumen-1'), img('obra-lumen-2'), img('obra-lumen-3'), img('obra-lumen-4')],
  },
  {
    num: '02',
    slug: 'the-marbella-edit',
    name: 'The Marbella Edit',
    year: '2024',
    place: 'Marbella',
    status: 'Completed',
    image: img('obra-marbella-cover'),
    summary: 'Five terraced residences sharing a single olive grove, each with an independent entrance and a rooftop built for the evening, not the afternoon.',
    facts: { area: '5 units · 260 m² avg', bedrooms: '3–4', completed: '2024' },
    gallery: [img('obra-marbella-1'), img('obra-marbella-2'), img('obra-marbella-3'), img('obra-marbella-4')],
  },
  {
    num: '03',
    slug: 'casa-roble',
    name: 'Casa Roble',
    year: '2023',
    place: 'Ibiza',
    status: 'Completed',
    image: img('obra-roble-cover'),
    summary: 'Named for the reclaimed oak that runs through every room, a hillside house that treats storage, stairs and seating as one continuous piece of joinery.',
    facts: { area: '380 m²', bedrooms: '4', completed: '2023' },
    gallery: [img('obra-roble-1'), img('obra-roble-2'), img('obra-roble-3'), img('obra-roble-4')],
  },
  {
    num: '04',
    slug: 'faro-blanco',
    name: 'Faro Blanco',
    year: '2026',
    place: 'Menorca',
    status: 'Coming soon',
    image: img('obra-faro-cover'),
    summary: 'Two lime-rendered volumes set apart to frame a working lighthouse — construction begins this spring, completion expected 2026.',
    facts: { area: '340 m² (planned)', bedrooms: '3', completed: 'Est. 2026' },
    gallery: [img('obra-faro-1'), img('obra-faro-2'), img('obra-faro-3'), img('obra-faro-4')],
  },
  {
    num: '05',
    slug: 'villa-cintra',
    name: 'Villa Cintra',
    year: '2026',
    place: 'Costa Brava',
    status: 'Coming soon',
    image: img('obra-cintra-cover'),
    summary: 'A cliffside plot given back almost entirely to native pine — the house is deliberately the smallest structure on site.',
    facts: { area: '298 m² (planned)', bedrooms: '3', completed: 'Est. 2026' },
    gallery: [img('obra-cintra-1'), img('obra-cintra-2'), img('obra-cintra-3'), img('obra-cintra-4')],
  },
]

export const SITE_IMAGES = {
  hero: img('obra-hero', 2000, 1250),
  philosophy: img('obra-philosophy', 1200, 1500),
  closing: img('obra-closing', 2000, 1250),
}

export const TRACK_VW = 100 + 100 + 100 + 46 + PROJECTS.length * 60 + 100 + 100 // 846
const PROJECTS_START_VW = 100 + 100 + 100 + 46 // width before the first project card
export const PROJECT_RANGES = PROJECTS.map((_, i) => [
  (PROJECTS_START_VW + i * 60) / TRACK_VW,
  (PROJECTS_START_VW + (i + 1) * 60) / TRACK_VW,
])
export const OFFSETS = {
  hero: 0,
  philosophy: 100 / TRACK_VW,
  values: 200 / TRACK_VW,
  projects: 300 / TRACK_VW,
  closing: (300 + 46 + PROJECTS.length * 60) / TRACK_VW,
  contact: (300 + 46 + PROJECTS.length * 60 + 100) / TRACK_VW,
}
export const SECTION_LIST = [
  ['01', 'Hero', OFFSETS.hero],
  ['02', 'Studio', OFFSETS.philosophy],
  ['03', 'Values', OFFSETS.values],
  ['04', 'Projects', OFFSETS.projects],
  ['05', 'Closing', OFFSETS.closing],
  ['06', 'Contact', OFFSETS.contact],
]
