import { CalendarDays, Clock, MapPin, Navigation } from "lucide-react";
import { wedding } from "../data/wedding";
import { getDirectionsUrl } from "../utils/maps";

function DetailItem({ icon: Icon, label, children }) {
  return (
    <article className="detail-item">
      <Icon size={22} aria-hidden="true" />
      <span>{label}</span>
      <strong>{children}</strong>
    </article>
  );
}

export default function EventDetails() {
  const directionsUrl = getDirectionsUrl(wedding);

  return (
    <section className="details-section ceremonial-section">
      <div className="section-inner">
        <p className="eyebrow">Save The Date</p>
        <div className="details-grid">
          <DetailItem icon={CalendarDays} label="Date">
            {wedding.day}<br />{wedding.month} {wedding.dateNumber}, {wedding.year}
          </DetailItem>
          {wedding.time && <DetailItem icon={Clock} label="Time">{wedding.time}</DetailItem>}
          {wedding.venueName && <DetailItem icon={MapPin} label="Venue">{wedding.venueName}</DetailItem>}
          {wedding.venueAddress && <DetailItem icon={Navigation} label="Location">{wedding.venueAddress}</DetailItem>}
        </div>
        {!wedding.time && !wedding.venueName && (
          <p className="gentle-note">Exact time and venue details will be shared here once confirmed.</p>
        )}
        {directionsUrl && (
          <a className="text-link" href={directionsUrl} target="_blank" rel="noreferrer">
            Open location details
          </a>
        )}
      </div>
    </section>
  );
}
