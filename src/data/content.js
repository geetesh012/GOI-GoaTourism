// -----------------------------------------------------------------------
// CONTENT — Goa Tourism edition
// -----------------------------------------------------------------------
// TRACK_VW / OFFSETS / SECTION_LIST / SCROLL_SPEED / PROJECT_RANGES are
// STRUCTURAL values tied to your CSS panel widths and the horizontal-scroll
// track. If your existing content.js already has these tuned to your
// layout, keep your originals and only swap in VALUES / PROJECTS /
// SITE_IMAGES below. The numbers here are placeholders that assume the
// same panel count as the OBRA version (Hero, Philosophy, Values,
// ProjectsHeading, 5x ProjectCard, Closing, Contact = 10 panels).
// -----------------------------------------------------------------------

export const VALUES = [
  {
    num: '01',
    title: 'Culture & Heritage',
    body: 'Four and a half centuries of Portuguese rule left whitewashed churches, spice-scented markets and hilltop forts scattered across the state — history you can still walk into.',
  },
  {
    num: '02',
    title: 'Sun & Shore',
    body: "Over 100km of coastline, no two beaches alike — Baga's all-night energy on one end, Agonda's total hush on the other.",
  },
  {
    num: '03',
    title: 'Wild Goa',
    body: 'Spice plantations, cascading waterfalls and jungle trails through the Western Ghats, all within an hour of the sand.',
  },
]

export const PROJECTS = [
  {
    num: '01',
    slug: 'baga-beach',
    name: 'Baga Beach',
    year: 'Nov – Mar',
    place: 'North Goa',
    status: 'Beach & Nightlife',
    image: '/images/goa/baga-beach.jpg',
    summary:
      "Goa's most energetic stretch of sand — beach shacks that turn into open-air clubs after dark, water sports by day, and the Baga river mouth for a quieter sunset walk.",
    facts: {
      'Known for': 'Nightlife & water sports',
      Nearby: 'Calangute & Anjuna',
      Vibe: 'High energy, always on',
    },
    gallery: [
      '/images/goa/baga-1.jpg',
      '/images/goa/baga-2.jpg',
      '/images/goa/baga-3.jpg',
    ],
  },
  {
    num: '02',
    slug: 'basilica-of-bom-jesus',
    name: 'Basilica of Bom Jesus',
    year: 'Year-round',
    place: 'Old Goa',
    status: 'UNESCO Heritage',
    image: '/images/goa/bom-jesus.webp',
    summary:
      'A baroque masterpiece and UNESCO World Heritage Site, holding the mortal remains of St. Francis Xavier since 1605 — the spiritual heart of Old Goa.',
    facts: {
      Built: '1605',
      Style: 'Baroque',
      Houses: 'Relics of St. Francis Xavier',
    },
    gallery: [
      '/images/goa/bom-jesus-1.jpg',
      '/images/goa/bom-jesus-2.jpg',
      '/images/goa/bom-jesus-3.jpg',
    ],
  },
  {
    num: '03',
    slug: 'dudhsagar-falls',
    name: 'Dudhsagar Falls',
    year: 'Jun – Sep',
    place: 'Goa–Karnataka border',
    status: 'Waterfall',
    image: '/images/goa/dudhsagar.webp',
    summary:
      "One of India's tallest waterfalls, tumbling 310 metres through the Bhagwan Mahaveer Sanctuary — reached by jeep safari through dense forest.",
    facts: {
      Height: '310m',
      'Best access': 'Jeep safari from Mollem',
      Tip: 'Visit just after monsoon for full flow',
    },
    gallery: [
      '/images/goa/dudhsagar-1.jpg',
      '/videos/goa/dudhsagar-flow.mp4',
      '/images/goa/dudhsagar-3.jpg',
    ],
  },
  {
    num: '04',
    slug: 'fort-aguada',
    name: 'Fort Aguada',
    year: 'Year-round',
    place: 'Candolim, North Goa',
    status: 'Fort & Lighthouse',
    image: '/images/goa/fort-aguada.webp',
    summary:
      'A 17th-century Portuguese sea fort built to guard against Dutch and Maratha raids, now one of the best sunset points on the coast.',
    facts: {
      Built: '1612',
      Purpose: 'Portuguese coastal defence',
      Today: 'Lighthouse & viewpoint',
    },
    gallery: [
      '/images/goa/fort-aguada-1.jpg',
      '/images/goa/fort-aguada-2.jpg',
      '/images/goa/fort-aguada-3.jpg',
    ],
  },
  {
    num: '05',
    slug: 'palolem-beach',
    name: 'Palolem Beach',
    year: 'Oct – Mar',
    place: 'South Goa',
    status: 'Beach & Serenity',
    image: '/images/goa/palolem.webp',
    summary:
      "A crescent-shaped shore fringed with palms — Goa's slower side, known for silent discos, kayaking, and boat trips out to Butterfly Beach.",
    facts: {
      'Known for': 'Crescent shore & silent discos',
      Nearby: 'Butterfly Beach (by boat)',
      Vibe: 'Laid-back, unhurried',
    },
    gallery: [
      '/images/goa/palolem-1.jpg',
      '/images/goa/palolem-2.jpg',
      '/images/goa/palolem-3.jpg',
    ],
  },
]

export const SITE_IMAGES = {
  hero: '/images/goa/hero-coastline.jpg',
  heroVideo: '/videos/goa/hero-coastline.mp4', // optional — omit/leave blank to fall back to the image
  philosophy: '/images/goa/spice-market.jpg',
  closing: '/images/goa/sunset-fort-aguada.jpg',
}

// --- structural / animation config — replace with your tuned values ---
export const TRACK_VW = 1000 // 10 panels × 100vw — adjust to match your CSS
export const SCROLL_SPEED = 2.4
export const OFFSETS = {
  hero: 0,
  philosophy: 0.11,
  values: 0.22,
  projects: 0.33,
  closing: 0.85,
  contact: 0.95,
}
export const SECTION_LIST = [
  ['01', 'Hero', 0],
  ['02', 'Philosophy', 0.11],
  ['03', 'Values', 0.22],
  ['04', 'Projects', 0.33],
  ['05', 'Closing', 0.85],
  ['06', 'Contact', 0.95],
]
export const PROJECT_RANGES = [
  [0.33, 0.45],
  [0.45, 0.57],
  [0.57, 0.69],
  [0.69, 0.81],
  [0.81, 0.93],
]
