import { MessageCircle } from "lucide-react";
import { wedding } from "../data/wedding";

export default function RSVPSection() {
  const number = wedding.whatsappNumber || wedding.rsvpPhone;
  const whatsappUrl = number
    ? `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(wedding.rsvpMessage)}`
    : "";

  return (
    <section id="rsvp" className="rsvp-section editorial-band">
      <div className="section-inner narrow">
        <p className="eyebrow">Kindly RSVP</p>
        <h2>Your presence would mean so much to us.</h2>
        <p>Reply through WhatsApp once the RSVP number is added to the wedding configuration.</p>
        {whatsappUrl ? (
          <a className="action-button" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            RSVP On WhatsApp
          </a>
        ) : (
          <button className="action-button" type="button" disabled>
            <MessageCircle size={18} aria-hidden="true" />
            RSVP Number Coming Soon
          </button>
        )}
      </div>
    </section>
  );
}
