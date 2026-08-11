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
      {
        slug: 'baga-beach',
        name: 'Baga Beach',
        blurb: 'Shacks that turn into open-air clubs after dark, plus water sports by day.',
        description:
          "Baga is North Goa's liveliest stretch of sand, a strip of beach shacks that quietly turn into open-air clubs once the sun goes down. By day it's parasailing, jet-skis and banana boats off the water; by night it's live DJs and strings of fairy lights along the beachfront. Tito's Lane, just inland, is the epicentre of Goa's nightlife scene.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-baga.jpg`,
        lat: 15.555279,
        lng: 73.751731,
        facts: { Type: 'North Goa, party beach', 'Known for': 'Nightlife, shacks, water sports', 'Best time': 'Evening onward' },
      },
      {
        slug: 'palolem-beach',
        name: 'Palolem Beach',
        blurb: "A crescent shore known for silent discos and boat trips to Butterfly Beach.",
        description:
          "Palolem's curved shoreline in South Goa is calmer and prettier than the northern party beaches — a near-perfect crescent of palm-backed sand. It's known for its silent discos, where dancers wear wireless headphones instead of blasting speakers, and for boat trips out to the smaller, harder-to-reach Butterfly Beach nearby.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-palolem.webp`,
        lat: 15.009965,
        lng: 74.023219,
        facts: { Type: 'South Goa, crescent beach', 'Known for': 'Silent discos, boat trips', 'Good for': 'A calmer beach day' },
      },
      {
        slug: 'anjuna-beach',
        name: 'Anjuna Beach',
        blurb: 'Home to the famous Wednesday flea market and a laid-back cliffside scene.',
        description:
          "Anjuna built Goa's counterculture reputation back in the hippie era, and its Wednesday flea market — stalls of textiles, jewellery and trinkets sprawling along the sand — is still one of the state's biggest draws. The cliffside cafés above the beach are a good spot to watch the sun go down over the Arabian Sea.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-anjuna.webp`,
        lat: 15.573350,
        lng: 73.740978,
        facts: { Type: 'North Goa, cliffside beach', 'Known for': 'Wednesday flea market', 'Good for': 'Market browsing, sunset views' },
      },
      {
        slug: 'agonda-beach',
        name: 'Agonda Beach',
        blurb: 'A quiet, palm-fringed stretch popular with turtles nesting in season.',
        description:
          "Agonda trades Baga's noise for a long, quiet stretch of palm-fringed sand with a handful of low-key shacks and yoga huts instead of clubs. Between November and March it's also a nesting site for olive ridley sea turtles, with a protected hatchery patch marked off toward one end of the beach.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-agonda.webp`,
        lat: 15.045581,
        lng: 73.988880,
        facts: { Type: 'South Goa, quiet beach', 'Known for': 'Olive ridley turtle nesting', 'Good for': 'Unwinding, long walks' },
      },
    ],
    gallery: [
      `${import.meta.env.BASE_URL}images/goa/gallery-beaches-1.jpg`,
      `${import.meta.env.BASE_URL}images/goa/gallery-beaches-2.jpg`,
      `${import.meta.env.BASE_URL}images/goa/gallery-beaches-3.jpg`,
      `${import.meta.env.BASE_URL}images/goa/gallery-beaches-4.jpg`,
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
      {
        slug: 'basilica-of-bom-jesus',
        name: 'Basilica of Bom Jesus',
        blurb: 'UNESCO-listed baroque basilica holding the remains of St. Francis Xavier since 1605.',
        description:
          "Completed in 1605, the Basilica of Bom Jesus is the resting place of St. Francis Xavier, whose remains are displayed in a silver casket and drawn out for public veneration roughly once a decade. It's one of the best-preserved examples of baroque architecture in Asia and forms the centrepiece of Old Goa's UNESCO World Heritage listing.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-bom-jesus.webp`,
        lat: 15.500824,
        lng: 73.911406,
        facts: { Type: 'UNESCO World Heritage church', 'Known for': 'Tomb of St. Francis Xavier', Built: 'Completed 1605' },
      },
      {
        slug: 'se-cathedral',
        name: 'Sé Cathedral',
        blurb: 'One of the largest churches in Asia, known for its Golden Bell.',
        description:
          "Sé Cathedral, dedicated to St. Catherine, is one of the largest churches in Asia and took the better part of a century to complete. Its most famous feature is the Golden Bell, prized for its rich tone and once rung to mark major events across the old Portuguese capital.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-se-cathedral.webp`,
        lat: 15.503808,
        lng: 73.912150,
        facts: { Type: 'Cathedral, Old Goa', 'Known for': 'The Golden Bell', Style: 'Portuguese-Gothic' },
      },
      {
        slug: 'church-of-st-francis-of-assisi',
        name: 'Church of St. Francis of Assisi',
        blurb: 'A 16th-century church with an adjoining archaeological museum.',
        description:
          "Built in the 16th century on the site of an earlier chapel, this church is notable for its richly decorated interior and the archaeological museum attached to it, which holds portraits of Portuguese viceroys and stone-carved relics recovered from around Old Goa.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-st-francis.jpg`,
        lat: 15.503122,
        lng: 73.911210,
        facts: { Type: 'Church & museum', Built: '16th century', 'Good for': 'Archaeological exhibits on-site' },
      },
      {
        slug: 'goa-state-museum',
        name: 'Goa State Museum',
        blurb: "Sculptures, coins and manuscripts tracing the state's layered history.",
        description:
          "Located in Panaji, the Goa State Museum houses one of the region's largest collections of sculpture, coinage and manuscripts, spanning everything from pre-Portuguese Hindu artefacts to colonial-era furniture and documents — a useful counterpoint to the churches for a fuller picture of the state's history.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-state-museum.webp`,
        lat: 15.500755,
        lng: 73.829868,
        facts: { Type: 'State museum', 'Known for': 'Sculpture & manuscript collections', Location: 'Panaji' },
      },
    ],
    gallery: [
      `${import.meta.env.BASE_URL}images/goa/gallery-churches-1.jpg`,
      `${import.meta.env.BASE_URL}images/goa/gallery-churches-2.jpg`,
      `${import.meta.env.BASE_URL}images/goa/gallery-churches-3.jpg`,
      `${import.meta.env.BASE_URL}images/goa/gallery-churches-4.jpg`,
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
      {
        slug: 'dudhsagar-falls',
        name: 'Dudhsagar Falls',
        blurb: "One of India's tallest waterfalls, reached by jeep safari through dense forest.",
        description:
          "Dudhsagar — literally 'sea of milk' — drops in tiers down a forested cliff on the Goa-Karnataka border and ranks among India's tallest waterfalls. It sits inside the Bhagwan Mahaveer Wildlife Sanctuary, and the usual way in is a jolting jeep safari along a track that follows the Madgaon-Vasco railway line for part of the way.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-dudhsagar.webp`,
        lat: 15.314437,
        lng: 74.314307,
        facts: { Type: 'Waterfall', 'Known for': "Among India's tallest falls", 'Getting there': 'Jeep safari through forest' },
      },
      {
        slug: 'bhagwan-mahaveer-sanctuary',
        name: 'Bhagwan Mahaveer Sanctuary',
        blurb: "Goa's largest wildlife sanctuary, home to gaur, sambar and hornbills.",
        description:
          "Spanning the Western Ghats along Goa's eastern border, this is the state's largest protected area, home to gaur (Indian bison), sambar deer, and several hornbill species among the dense forest canopy. It also encloses Dudhsagar Falls and a stretch of the Mollem temple belt, making it a good base for combining wildlife with heritage.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-mahaveer.jpg`,
        lat: 15.333902,
        lng: 74.288354,
        facts: { Type: 'Wildlife sanctuary', 'Known for': 'Gaur, sambar deer, hornbills', Size: "Goa's largest sanctuary" },
      },
      {
        slug: 'salim-ali-bird-sanctuary',
        name: 'Salim Ali Bird Sanctuary',
        blurb: 'Mangrove-lined sanctuary on the Mandovi, best visited by boat at dawn.',
        description:
          "Named after India's most celebrated ornithologist, this small mangrove sanctuary sits on Chorao Island in the Mandovi river, a short ferry ride from Panaji. Herons, kingfishers and migratory waders are easiest to spot from a boat at dawn, when the tide and light both work in your favour.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-salim-ali.jpg`,
        lat: 15.513047,
        lng: 73.870415,
        facts: { Type: 'Bird sanctuary', 'Known for': 'Mangrove birdlife on the Mandovi', 'Best time': 'Dawn, by boat' },
      },
      {
        slug: 'mayem-lake',
        name: 'Mayem Lake',
        blurb: 'A calm freshwater lake ringed by forest, popular for boating and picnics.',
        description:
          "Tucked into the hills near Bicholim in North Goa, Mayem Lake is a quiet freshwater lake ringed by forest and gardens — a popular weekend spot for pedal boating and picnics, and a good, uncrowded contrast to the coastal side of the state.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-mayem.jpg`,
        lat: 15.576015,
        lng: 73.940023,
        facts: { Type: 'Freshwater lake', 'Good for': 'Boating, picnics', Setting: 'Forest-ringed' },
      },
    ],
    gallery: [
      `${import.meta.env.BASE_URL}images/goa/gallery-nature-1.jpg`,
      `${import.meta.env.BASE_URL}images/goa/gallery-nature-2.jpg`,
      `${import.meta.env.BASE_URL}images/goa/gallery-nature-3.jpg`,
      `${import.meta.env.BASE_URL}images/goa/gallery-nature-4.jpg`,
    ],
  },
  {
    num: '04',
    slug: 'temples',
    name: 'Temples',
    year: 'Year-round',
    place: 'Mollem & across Goa',
    status: 'Temples',
    image: `${import.meta.env.BASE_URL}images/goa/temple.jpg`,
    summary:
      "Hilltop Hindu temples with distinctive Goan-style shikharas and deepstambhas — many predating Portuguese rule, clustered thickest around Mollem's temple belt.",
    facts: {
      Includes: 'Hindu temples statewide',
      "Don't miss": 'Ponda temple belt',
      Tip: 'Modest dress required at most temples',
    },
    highlights: [
      {
        slug: 'shri-mangeshi-temple',
        name: 'Shri Mangeshi Temple',
        blurb: "Goa's most-visited temple, known for its distinctive seven-tier deepstambha.",
        description:
          "Shri Mangeshi, in the Ponda temple belt, is Goa's most-visited temple, dedicated to a form of Shiva. Its seven-tier deepstambha — a freestanding lamp tower lit during festivals — is one of the most photographed sights in the belt, and the temple's whitewashed, distinctly Goan architectural style blends Hindu and Portuguese-era influences.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-mangeshi.jpg`,
        lat: 15.444905,
        lng: 73.966383,
        facts: { Type: 'Hindu temple', 'Known for': 'Seven-tier deepstambha (lamp tower)', Location: 'Ponda temple belt' },
      },
      {
        slug: 'shri-shantadurga-temple',
        name: 'Shri Shantadurga Temple',
        blurb: 'Dedicated to the goddess of peace, set in the Mollem temple belt.',
        description:
          "Dedicated to Shantadurga, the goddess of peace, this temple in the Mollem/Kavlem belt draws pilgrims for its striking Indo-Portuguese façade and the story behind its deity — said to have been brought in to make peace between Shiva and Vishnu. It's one of the grandest temple complexes in the state.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-shantadurga.jpg`,
        lat: 15.396224,
        lng: 73.985278,
        facts: { Type: 'Hindu temple', Deity: 'Goddess of peace', Location: 'Mollem temple belt' },
      },
      {
        slug: 'shri-mahalsa-temple',
        name: 'Shri Mahalsa Temple',
        blurb: 'Known for its tall brass lamp tower and Sunday temple-car procession.',
        description:
          "Shri Mahalsa temple in Ponda is known for its tall brass deepstambha and its wooden temple car, wheeled out in procession every Sunday evening — a smaller, weekly echo of the state's bigger annual temple festivals, and a good way to see local ritual life up close.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-mahalsa.jpg`,
        lat: 15.440533,
        lng: 73.972718,
        facts: { Type: 'Hindu temple', 'Known for': 'Brass deepstambha, Sunday car procession', Location: 'Ponda' },
      },
      {
        slug: 'shri-nagesh-temple',
        name: 'Shri Nagesh Temple',
        blurb: "One of Goa's oldest temples, with a stepped tank and old banyan tree.",
        description:
          "Believed to be among the oldest surviving temples in Goa, Shri Nagesh temple sits beside a stepped stone water tank shaded by an ancient banyan tree — a quieter, less-visited stop in the Ponda belt, with carved wooden pillars inside that are older than the temple's current structure.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-nagesh.jpg`,
        lat: 15.407464,
        lng: 73.983705,
        facts: { Type: 'Hindu temple', 'Known for': 'Stepped water tank, ancient banyan tree', Age: "Among Goa's oldest" },
      },
    ],
    gallery: [
      `${import.meta.env.BASE_URL}images/goa/gallery-temples-1.jpg`,
      `${import.meta.env.BASE_URL}images/goa/gallery-temples-2.jpg`,
      `${import.meta.env.BASE_URL}images/goa/gallery-temples-3.jpg`,
      `${import.meta.env.BASE_URL}images/goa/gallery-temples-4.jpg`,
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
      {
        slug: 'goa-carnival',
        name: 'Goa Carnival',
        blurb: 'A three-day street parade of floats and music, held before Lent each year.',
        description:
          "Introduced under Portuguese rule and still going strong, Goa Carnival kicks off with the arrival of King Momo, who declares three days of parades, floats and street music across the state's main towns before Lent begins. It's the closest thing Goa has to Rio's carnival, on a much smaller, more local scale.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-carnival.jpg`,
        lat: 15.500954,
        lng: 73.829393,
        facts: { Type: 'Street carnival', 'Known for': 'Floats, music, King Momo parade', Timing: 'Before Lent, Feb/Mar' },
      },
      {
        slug: 'feast-of-st-francis-xavier',
        name: 'Feast of St. Francis Xavier',
        blurb: 'A major pilgrimage feast held every December at the Basilica of Bom Jesus.',
        description:
          "Held every December at the Basilica of Bom Jesus, this feast draws pilgrims from across India and beyond to honour St. Francis Xavier, whose remains rest there. The days around the feast see the basilica and surrounding grounds packed, with a fair, novenas, and a distinctly festive, communal atmosphere alongside the religious observance.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-feast.jpg`,
        lat: 15.500824,
        lng: 73.911406,
        facts: { Type: 'Religious feast', Location: 'Basilica of Bom Jesus', Timing: 'Every December' },
      },
      {
        slug: 'shigmo',
        name: 'Shigmo',
        blurb: "Goa's spring festival, with folk dance processions across the state.",
        description:
          "Shigmo is Goa's version of Holi, stretched into a state-wide spring festival of folk dance troupes, colour and float parades through towns and villages. Traditional dance forms like Ghode Modni (a horse dance) and Fugdi are performed in the streets, making it one of the best times to see Goan folk culture rather than just its coastline.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-shigmo.png`,
        lat: 15.502954,
        lng: 73.831393,
        facts: { Type: 'Spring festival', 'Known for': 'Folk dance processions', Timing: 'Spring (Hindu calendar)' },
      },
      {
        slug: 'sao-joao',
        name: 'Sao Joao',
        blurb: 'A monsoon feast where locals leap into wells and rivers to celebrate.',
        description:
          "Sao Joao celebrates the birth of St. John the Baptist right at the height of monsoon, when locals — crowned with leaf-and-flower headgear called kopel — leap into wells, ponds and rivers in a show of the season's abundance. Villages across Goa mark it with boat processions and communal singing.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-sao-joao.jpg`,
        lat: 15.626645,
        lng: 73.766142,
        facts: { Type: 'Monsoon feast', 'Known for': 'Leaping into wells & rivers', Timing: 'June, monsoon season' },
      },
    ],
    gallery: [
      `${import.meta.env.BASE_URL}images/goa/gallery-festivals-1.jpg`,
      `${import.meta.env.BASE_URL}images/goa/gallery-festivals-2.jpg`,
      `${import.meta.env.BASE_URL}images/goa/gallery-festivals-3.jpg`,
      `${import.meta.env.BASE_URL}images/goa/gallery-festivals-4.jpg`,
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
      "Traditional Ayurvedic treatments, yoga shalas overlooking the sea, and retreats built around slowing down — Goa's answer to a trip that asks nothing of you.",
    facts: {
      Includes: 'Ayurveda, yoga & spa retreats',
      "Don't miss": 'A traditional Panchakarma session',
      Tip: 'Book multi-day retreats well ahead in peak season',
    },
    highlights: [
      {
        slug: 'panchakarma-therapy',
        name: 'Panchakarma Therapy',
        blurb: 'A traditional multi-day detox and rejuvenation programme.',
        description:
          "Panchakarma is a traditional Ayurvedic detox programme built around five core therapies — oil massage, herbal steam, and supervised cleansing among them — typically spread across several days under a practitioner's supervision. Several Goan retreats offer it as a structured programme with an accompanying diet plan rather than a single spa treatment.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-panchakarma.jpg`,
        lat: 15.669652,
        lng: 73.709547,
        facts: { Type: 'Ayurvedic therapy', 'Known for': 'Multi-day detox programme', Duration: 'Typically several days' },
      },
      {
        slug: 'beachside-yoga',
        name: 'Beachside Yoga',
        blurb: 'Sunrise sessions on the sand, run by shalas up and down the coast.',
        description:
          "From Mandrem to Palolem, yoga shalas run sunrise sessions right on the sand, catching the coolest part of the day before the beach fills up. Many offer drop-in classes alongside multi-week teacher-training courses, so it's equally easy to join for a single sunrise session or a longer stay.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-yoga.jpg`,
        lat: 15.672652,
        lng: 73.712547,
        facts: { Type: 'Yoga session', 'Best time': 'Sunrise', Setting: 'On the beach' },
      },
      {
        slug: 'spa-retreats',
        name: 'Spa Retreats',
        blurb: 'Multi-day wellness stays combining massage, diet and quiet.',
        description:
          "Beyond single spa treatments, Goa has a cluster of multi-day wellness retreats that combine massage therapy, tailored diet plans and deliberately quiet surroundings — often set back from the beach in the hills or riverside, aimed at travellers building a whole trip around slowing down rather than a single afternoon of pampering.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-spa.jpg`,
        lat: 15.666652,
        lng: 73.706547,
        facts: { Type: 'Wellness retreat', Includes: 'Massage, diet plans, quiet time', Duration: 'Multi-day stays' },
      },
      {
        slug: 'naturopathy-centres',
        name: 'Naturopathy Centres',
        blurb: 'Drug-free healing practices rooted in diet, water and rest.',
        description:
          "Naturopathy centres in Goa lean on drug-free healing practices — controlled diet, hydrotherapy, mud treatments and rest — as an alternative or complement to Ayurvedic treatment. They tend to attract a slightly different crowd than the yoga-and-spa scene: travellers there specifically for a structured, low-intervention reset.",
        image: `${import.meta.env.BASE_URL}images/goa/highlight-naturopathy.jpg`,
        lat: 15.671652,
        lng: 73.706547,
        facts: { Type: 'Naturopathy centre', Approach: 'Drug-free, diet & rest based', 'Good for': 'A slower, restorative trip' },
      },
    ],
    gallery: [
      `${import.meta.env.BASE_URL}images/goa/gallery-ayurveda-1.jpg`,
      `${import.meta.env.BASE_URL}images/goa/gallery-ayurveda-2.jpg`,
      `${import.meta.env.BASE_URL}images/goa/gallery-ayurveda-3.jpg`,
      `${import.meta.env.BASE_URL}images/goa/gallery-ayurveda-4.jpg`,
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

export const TRACK_VW = 100 + 100 + 100 + 46 + destinations.length * 60 + 100 + 100 + 100 // 946 — includes the new map-cta panel
const destinations_START_VW = 100 + 100 + 100 + 46 // 346

export const OFFSETS = {
  hero: 0,
  philosophy: 100 / TRACK_VW,
  values: 200 / TRACK_VW,
  destinations: 300 / TRACK_VW,
  mapCta: (300 + 46 + destinations.length * 60) / TRACK_VW,
  closing: (300 + 46 + destinations.length * 60 + 100) / TRACK_VW,
  contact: (300 + 46 + destinations.length * 60 + 100 + 100) / TRACK_VW,
}

export const SECTION_LIST = [
  ['01', 'Hero', OFFSETS.hero],
  ['02', 'Philosophy', OFFSETS.philosophy],
  ['03', 'Values', OFFSETS.values],
  ['04', 'destinations', OFFSETS.destinations],
  ['05', 'Map', OFFSETS.mapCta],
  ['06', 'Closing', OFFSETS.closing],
  ['07', 'Contact', OFFSETS.contact],
]

export const PROJECT_RANGES = destinations.map((_, i) => [
  (destinations_START_VW + i * 60) / TRACK_VW,
  (destinations_START_VW + (i + 1) * 60) / TRACK_VW,
])