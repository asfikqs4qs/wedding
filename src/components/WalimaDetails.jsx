import { CalendarDays, Clock, MapPin } from "lucide-react";
import { wedding } from "../data/wedding";
import GoldDivider from "./GoldDivider";

function WalimaItem({ icon: Icon, label, children }) {
  return (
    <article className="walima-item">
      <Icon size={21} aria-hidden="true" />
      <span>{label}</span>
      <strong>{children}</strong>
    </article>
  );
}

export default function WalimaDetails() {
  const walima = wedding.walima;

  return (
    <section id="walima" className="walima-section ceremonial-section">
      <div className="section-inner walima-layout">
        <div className="walima-copy">
          <p className="eyebrow">Walima Invitation</p>
          <h2>{wedding.groom} &amp; {wedding.bride}</h2>
          <GoldDivider />
          <p>{walima.message}</p>
        </div>
        <div className="walima-panel">
          <WalimaItem icon={CalendarDays} label="Date">
            {walima.displayDate}
          </WalimaItem>
          <WalimaItem icon={Clock} label="Time">
            {walima.time}
          </WalimaItem>
          <WalimaItem icon={MapPin} label="Venue">
            {walima.venueName}
            <br />
            {walima.venueAddress}
          </WalimaItem>
        </div>
      </div>
    </section>
  );
}
