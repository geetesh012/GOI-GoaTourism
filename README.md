# OBRA — a horizontal-scroll luxury real-estate site

A React + Vite site in the "side-scroller" storytelling style of sites like normalisboring.es:
vertical scroll drives horizontal motion through a filmstrip of full-screen panels
(hero → studio philosophy → values → a project gallery → a closing statement → contact),
plus a full multi-page build with its own project detail pages, a full-screen menu
overlay, a percentage-counting preloader, and a custom cursor.

All branding, copy and "photography" here (CSS gradients standing in for real images)
are original to this project — nothing is copied from any reference site.

## Stack
- React 18 + Vite + React Router
- Framer Motion (`useScroll` / `useTransform` for the horizontal track, `AnimatePresence`
  for the preloader and menu overlay transitions)
- Plain CSS with a small design-token system (no UI framework)
- Izmir (display + body, licensed separately — see `public/fonts/izmir/README.md`), with Archivo as a free geometric-sans fallback, Space Mono (labels/numbers)

## Structure
```
src/
  data/content.js       shared project + values data (single source of truth)
  components/
    Nav.jsx              top bar: logo + menu trigger
    Menu.jsx             full-screen overlay nav (clip-path reveal)
    Preloader.jsx         0→100% intro animation, mounted once in App.jsx
    Cursor.jsx            custom dot + lagging ring cursor (desktop only)
  pages/
    Home.jsx              the horizontal-scroll experience (routes: "/")
    Project.jsx            per-project detail page (routes: "/projects/:slug")
  App.jsx                 router root: preloader, cursor, routes
```

## Pages
- **`/`** — the horizontal scroll experience from the original brief.
- **`/projects/:slug`** — a detail page per project (hero band, summary, a fact
  list, an image grid, and a link to the next project) — reached by clicking any
  project card on the home page or from the menu overlay.

## Interaction details
- The **menu overlay** opens with a clip-path wipe and can deep-link back into a
  section on the home page (dispatches a custom `obra:scrollTo` event that `Home.jsx`
  listens for) or jump straight to a project page via React Router.
- The **preloader** counts 0→100% on mount and wipes away with an easing curve;
  it only runs once per full page load, matching the pattern on the reference site.
- The **cursor** is a small dot plus a softly lagging ring that expands over links,
  buttons, and project cards — disabled automatically on touch devices.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## How the horizontal scroll works
`src/App.jsx` wraps every panel in a flex track inside a `position: sticky` viewport.
The outer wrapper is tall (`TRACK_VW` in `vh`), so as the page scrolls vertically the
sticky inner view stays pinned while Framer Motion maps `scrollYProgress` (0–1) onto
`translateX` for the track — turning vertical scroll input into horizontal movement,
which also means it works with trackpads, mouse wheels and touch swipes without any
custom gesture handling.

Below 700px width the same markup renders as a normal stacked, vertically-scrolling
page (see `.mobile-stack` in `src/index.css`) so the experience stays usable and fast
on phones.

## Customizing
- **Colors / type**: edit the CSS variables at the top of `src/index.css`.
- **Copy & projects**: edit the `VALUES` and `PROJECTS` arrays and the panel components
  in `src/App.jsx`.
- **Photography**: project cards currently use tuned CSS gradients as placeholder
  "material" swatches — swap `background-image: <gradient>` for a real
  `background-image: url(...)` per project when you have photography to license.
- **Panel widths**: section widths are tracked in `vw` via `TRACK_VW` — if you add or
  resize a panel, update `TRACK_VW` and the matching CSS width so the scroll math and
  the progress rail stay accurate.
