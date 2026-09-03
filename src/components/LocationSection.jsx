import { MapPin, Navigation } from "lucide-react";
import { wedding } from "../data/wedding";
import { assetUrl } from "../utils/assets";
import { getDirectionsUrl } from "../utils/maps";

export default function LocationSection() {
  const directionsUrl = getDirectionsUrl(wedding);
  const hasVenue = wedding.venueName || wedding.venueAddress;

  return (
    <section id="location" className="location-section ceremonial-section">
      <div className="section-inner location-layout">
        <div className="location-copy">
          <p className="eyebrow">Find Your Way To Us</p>
          <span className="place-kicker">Wedding Location</span>
          <h2>{hasVenue ? wedding.venueName || "Wedding Venue" : "Venue details will be shared soon"}</h2>
          {wedding.venueAddress && <p>{wedding.venueAddress}</p>}
          <p className="location-line">Celebrate with us at Lee Meridian, Sainthamaruthu, surrounded by family, light, and duas.</p>
          <div className="button-row">
            {directionsUrl ? (
              <>
                <a className="action-button" href={directionsUrl} target="_blank" rel="noreferrer">
                  <Navigation size={18} aria-hidden="true" />
                  Get Directions
                </a>
                <a className="ghost-button" href={directionsUrl} target="_blank" rel="noreferrer">
                  Open In Google Maps
                </a>
              </>
            ) : (
              <button className="action-button" type="button" disabled>
                <Navigation size={18} aria-hidden="true" />
                Directions Soon
              </button>
            )}
          </div>
        </div>
        <div className="map-panel">
          {wedding.mapEmbedUrl ? (
            <iframe
              title={`${wedding.groom} and ${wedding.bride} wedding venue map`}
              src={assetUrl(wedding.mapEmbedUrl)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="map-placeholder" aria-label="Wedding location placeholder">
              <MapPin size={38} aria-hidden="true" />
              <strong>Lee Meridian</strong>
              <span>Sainthamaruthu</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
