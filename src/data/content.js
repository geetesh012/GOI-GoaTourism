// -----------------------------------------------------------------------
// CONTENT — Goa Tourism edition
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

// "Categories" rather than single destinations — inspired by the grid of
// experience-type cards on goa-tourism.com's "Goa Inspires" section.
// Temples and Churches are separate cards; Museums stays paired with
// Churches. Nature + Wildlife + Lakes/Waterfalls remain merged into one.
export const destinations = [
{
    num: '01',
    slug: 'beaches',
    name: 'Beaches',
    year: 'Oct – Mar',
    place: 'North to South coast',
    status: 'Beaches',
    image: `${import.meta.env.BASE_URL}images/goa/baga-beach.jpg`,
    summary:
      "Over 100km of coastline and no two stretches alike — Baga's all-night energy on one end, Palolem's crescent-shaped hush on the other, with everything in between.",
    facts: {
      Includes: 'North & South Goa beaches',
      "Don't miss": 'Baga Beach, Palolem Beach',
      Vibe: 'Something for every pace',
    },
    highlights: [
      { name: 'Baga Beach', blurb: 'Shacks that turn into open-air clubs after dark, plus water sports by day.', image: '/images/goa/highlight-baga.jpg' },
      { name: 'Palolem Beach', blurb: "A crescent shore known for silent discos and boat trips to Butterfly Beach.", image: '/images/goa/highlight-palolem.jpg' },
      { name: 'Anjuna Beach', blurb: 'Home to the famous Wednesday flea market and a laid-back cliffside scene.', image: '/images/goa/highlight-anjuna.jpg' },
      { name: 'Agonda Beach', blurb: 'A quiet, palm-fringed stretch popular with turtles nesting in season.', image: '/images/goa/highlight-agonda.jpg' },
    ],
  },
  {
    num: '02',
    slug: 'churches-museums',
    name: 'Churches & Museums',
    year: 'Year-round',
    place: 'Old Goa & beyond',
    status: 'Churches & Museums',
    image: `${import.meta.env.BASE_URL}images/goa/bom-jesus.webp`,
    summary:
      'Baroque basilicas and small museums tucked into former colonial buildings — four and a half centuries of Portuguese-era history you can still walk into.',
    facts: {
      Includes: 'Churches & museums',
      "Don't miss": 'Basilica of Bom Jesus',
      Nearby: 'Old Goa heritage precinct',
    },
    highlights: [
      { name: 'Basilica of Bom Jesus', blurb: 'UNESCO-listed baroque basilica holding the remains of St. Francis Xavier since 1605.', image: '/images/goa/highlight-bom-jesus.jpg' },
      { name: 'Sé Cathedral', blurb: 'One of the largest churches in Asia, known for its Golden Bell.', image: '/images/goa/highlight-se-cathedral.jpg' },
      { name: 'Church of St. Francis of Assisi', blurb: 'A 16th-century church with an adjoining archaeological museum.', image: '/images/goa/highlight-st-francis.jpg' },
      { name: 'Goa State Museum', blurb: 'Sculptures, coins and manuscripts tracing the state\'s layered history.', image: '/images/goa/highlight-state-museum.jpg' },
    ],
  },
  {
    num: '03',
    slug: 'nature-wildlife',
    name: 'Nature & Wildlife',
    year: 'Jun – Sep peak',
    place: 'Western Ghats & sanctuaries',
    status: 'Wildlife, Lakes & Waterfalls',
    image: `${import.meta.env.BASE_URL}images/goa/dudhsagar.webp`,
    summary:
      "Waterfalls that thunder through the monsoon, wildlife sanctuaries thick with spice plantations, and quiet lakes just far enough inland to feel like a different state.",
    facts: {
      Includes: 'Waterfalls, sanctuaries & lakes',
      "Don't miss": 'Dudhsagar Falls',
      Tip: 'Falls run fullest just after monsoon',
    },
    highlights: [
      { name: 'Dudhsagar Falls', blurb: 'One of India\'s tallest waterfalls, reached by jeep safari through dense forest.', image: '/images/goa/highlight-dudhsagar.jpg' },
      { name: 'Bhagwan Mahaveer Sanctuary', blurb: "Goa's largest wildlife sanctuary, home to gaur, sambar and hornbills.", image: '/images/goa/highlight-mahaveer.jpg' },
      { name: 'Salim Ali Bird Sanctuary', blurb: 'Mangrove-lined sanctuary on the Mandovi, best visited by boat at dawn.', image: '/images/goa/highlight-salim-ali.jpg' },
      { name: 'Mayem Lake', blurb: 'A calm freshwater lake ringed by forest, popular for boating and picnics.', image: '/images/goa/highlight-mayem.jpg' },
    ],
  },
  {
    num: '04',
    slug: 'temples',
    name: 'Temples',
    year: 'Year-round',
    place: 'Ponda & across Goa',
    status: 'Temples',
    image: `${import.meta.env.BASE_URL}images/goa/temple.jpg`,
    summary:
      "Hilltop Hindu temples with distinctive Goan-style shikharas and deepstambhas — many predating Portuguese rule, clustered thickest around Ponda's temple belt.",
    facts: {
      Includes: 'Hindu temples statewide',
      "Don't miss": 'Ponda temple belt',
      Tip: 'Modest dress required at most temples',
    },
    highlights: [
      { name: 'Shri Mangeshi Temple', blurb: "Goa's most-visited temple, known for its distinctive seven-tier deepstambha.", image: '/images/goa/highlight-mangeshi.jpg' },
      { name: 'Shri Shantadurga Temple', blurb: 'Dedicated to the goddess of peace, set in the Ponda temple belt.', image: '/images/goa/highlight-shantadurga.jpg' },
      { name: 'Shri Mahalsa Temple', blurb: 'Known for its tall brass lamp tower and Sunday temple-car procession.', image: '/images/goa/highlight-mahalsa.jpg' },
      { name: 'Shri Nagesh Temple', blurb: "One of Goa's oldest temples, with a stepped tank and old banyan tree.", image: '/images/goa/highlight-nagesh.jpg' },
    ],
  },
  {
    num: '05',
    slug: 'festivals-culture',
    name: 'Festivals & Culture',
    year: 'Year-round',
    place: 'Across Goa',
    status: 'Feasts, Music & Local Life',
    image: `${import.meta.env.BASE_URL}images/goa/festival.webp`,
    summary:
      'From village feast-day processions to a state-wide carnival, Goa runs on a calendar of festivals — Christian, Hindu and secular alike — that spill straight into the street.',
    facts: {
      Includes: 'Feasts, carnivals & fairs',
      "Don't miss": 'Feast of St. Francis Xavier',
      Tip: 'Check the local calendar before you book',
    },
    highlights: [
      { name: 'Goa Carnival', blurb: 'A three-day street parade of floats and music, held before Lent each year.', image: '/images/goa/highlight-carnival.jpg' },
      { name: 'Feast of St. Francis Xavier', blurb: 'A major pilgrimage feast held every December at the Basilica of Bom Jesus.', image: '/images/goa/highlight-feast.jpg' },
      { name: 'Shigmo', blurb: "Goa's spring festival, with folk dance processions across the state.", image: '/images/goa/highlight-shigmo.jpg' },
      { name: 'Sao Joao', blurb: 'A monsoon feast where locals leap into wells and rivers to celebrate.', image: '/images/goa/highlight-sao-joao.jpg' },
    ],
  },
  {
    num: '06',
    slug: 'ayurveda-wellness',
    name: 'Ayurveda & Wellness',
    year: 'Year-round',
    place: 'Retreats statewide',
    status: 'Wellness & Healing',
    image: `${import.meta.env.BASE_URL}images/goa/ayurveda.webp`,
    summary:
      'Traditional Ayurvedic treatments, yoga shalas overlooking the sea, and retreats built around slowing down — Goa\'s answer to a trip that asks nothing of you.',
    facts: {
      Includes: 'Ayurveda, yoga & spa retreats',
      "Don't miss": 'A traditional Panchakarma session',
      Tip: 'Book multi-day retreats well ahead in peak season',
    },
    highlights: [
      { name: 'Panchakarma Therapy', blurb: 'A traditional multi-day detox and rejuvenation programme.', image: '/images/goa/highlight-panchakarma.jpg' },
      { name: 'Beachside Yoga', blurb: 'Sunrise sessions on the sand, run by shalas up and down the coast.', image: '/images/goa/highlight-yoga.jpg' },
      { name: 'Spa Retreats', blurb: 'Multi-day wellness stays combining massage, diet and quiet.', image: '/images/goa/highlight-spa.jpg' },
      { name: 'Naturopathy Centres', blurb: 'Drug-free healing practices rooted in diet, water and rest.', image: '/images/goa/highlight-naturopathy.jpg' },
    ],
  },
]

export const SITE_IMAGES = {
  hero: `${import.meta.env.BASE_URL}images/goa/hero-coastline.jpg`,
  heroVideo: `${import.meta.env.BASE_URL}videos/goa/hero-coastline.mp4`,
  philosophy: `${import.meta.env.BASE_URL}images/goa/spice-market.jpg`,
  closing: `${import.meta.env.BASE_URL}images/goa/sunset-fort-aguada.jpg`,
}

export const SCROLL_SPEED = 2.4

export const TRACK_VW = 100 + 100 + 100 + 46 + destinations.length * 60 + 100 + 100 // 846
const destinations_START_VW = 100 + 100 + 100 + 46 // 346

export const OFFSETS = {
  hero: 0,
  philosophy: 100 / TRACK_VW,
  values: 200 / TRACK_VW,
  destinations: 300 / TRACK_VW,
  closing: (300 + 46 + destinations.length * 60) / TRACK_VW,
  contact: (300 + 46 + destinations.length * 60 + 100) / TRACK_VW,
}

export const SECTION_LIST = [
  ['01', 'Hero', OFFSETS.hero],
  ['02', 'Philosophy', OFFSETS.philosophy],
  ['03', 'Values', OFFSETS.values],
  ['04', 'destinations', OFFSETS.destinations],
  ['05', 'Closing', OFFSETS.closing],
  ['06', 'Contact', OFFSETS.contact],
]

export const PROJECT_RANGES = destinations.map((_, i) => [
  (destinations_START_VW + i * 60) / TRACK_VW,
  (destinations_START_VW + (i + 1) * 60) / TRACK_VW,
])
