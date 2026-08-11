import { useState, useEffect, useMemo, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { destinations } from '../data/content'

// Leaflet touches window/document at import time and has no SSR support at
// all. Since this site now prerenders via vite-react-ssg, the actual
// react-leaflet import + MapContainer must never execute during the
// Node-based build pass — only client imports are dynamic, and rendering
// is gated behind a mounted flag that only flips true in useEffect (which
// never runs during prerendering, only after real browser hydration).
const LeafletMap = lazy(() => import('../components/LeafletMap'))

// Flatten every highlight across all 6 categories into one list of pins,
// carrying its parent category along for filtering + the popup link.
const ALL_PINS = destinations.flatMap((d) =>
  d.highlights.map((h) => ({
    ...h,
    categorySlug: d.slug,
    categoryName: d.name,
  }))
)

export default function MapPage() {
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    setMounted(true)
  }, [])

  const pins = useMemo(
    () => (activeCategory === 'all' ? ALL_PINS : ALL_PINS.filter((p) => p.categorySlug === activeCategory)),
    [activeCategory]
  )

  return (
    <div className="map-page">
      <Link to="/" className="map-page__back">
        ← Back to Goa Tourism
      </Link>

      <header className="map-page__intro">
        <span className="eyebrow" style={{ color: 'var(--bronze)' }}>
          Everything, on one map
        </span>
        <h1>24 places, across 6 categories</h1>
        <p>
          Filter by category or browse everything at once. A handful of pins — festivals and
          wellness categories especially — mark a representative area rather than one exact
          address, since those aren't tied to a single fixed venue.
        </p>
      </header>

      <div className="map-page__filters" role="tablist" aria-label="Filter map by category">
        <button
          className={`map-filter ${activeCategory === 'all' ? 'is-active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All (24)
        </button>
        {destinations.map((d) => (
          <button
            key={d.slug}
            className={`map-filter ${activeCategory === d.slug ? 'is-active' : ''}`}
            onClick={() => setActiveCategory(d.slug)}
          >
            {d.name} ({d.highlights.length})
          </button>
        ))}
      </div>

      <div className="map-page__map">
        {mounted ? (
          <Suspense fallback={<div className="map-placeholder">Loading map…</div>}>
            <LeafletMap pins={pins} />
          </Suspense>
        ) : (
          <div className="map-placeholder">Loading map…</div>
        )}
      </div>

      <footer className="map-page__footer">
        <Link to="/">← Back to Goa Tourism</Link>
      </footer>
    </div>
  )
}