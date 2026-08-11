import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const pinIcon = new L.DivIcon({
  className: 'map-pin',
  html: `<svg width="26" height="34" viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 0C5.8 0 0 5.8 0 13c0 9.75 13 21 13 21s13-11.25 13-21C26 5.8 20.2 0 13 0z" fill="#b08d57"/>
    <circle cx="13" cy="13" r="5.5" fill="#0b0d12"/>
  </svg>`,
  iconSize: [26, 34],
  iconAnchor: [13, 34],
  popupAnchor: [0, -30],
})

const GOA_CENTER = [15.4, 74.05]

export default function LeafletMap({ pins }) {
  return (
    <MapContainer
      center={GOA_CENTER}
      zoom={10}
      scrollWheelZoom={true}
      className="leaflet-container-custom"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pins.map((p) => (
        <Marker key={`${p.categorySlug}-${p.slug}`} position={[p.lat, p.lng]} icon={pinIcon}>
          <Popup>
            <div className="map-popup">
              <span className="map-popup__category">{p.categoryName}</span>
              <strong>{p.name}</strong>
              <p>{p.blurb}</p>
              <Link to={`/destinations/${p.categorySlug}/${p.slug}`}>View details →</Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}