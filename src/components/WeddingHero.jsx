import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { wedding } from "../data/wedding";
import FloralCorner from "./FloralCorner";
import GoldDivider from "./GoldDivider";
import HangingLantern from "./HangingLantern";
import ImageWithFallback from "./ImageWithFallback";

export default function WeddingHero() {
  return (
    <section id="home" className="hero-section hero-section--immersive">
      <HangingLantern side="left" lit />
      <HangingLantern side="right" lit />
      <FloralCorner corner="top-left" />
      <FloralCorner corner="bottom-right" />
      <div className="section-inner immersive-hero">
        <motion.div
          className="hero-photo-orbit"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <ImageWithFallback
            src={wedding.gallery[1]}
            alt={`${wedding.groom} and ${wedding.bride} wedding couple portrait`}
            className="hero-main-photo"
            loading="eager"
          />
          <span className="orbit-ring orbit-ring--one" aria-hidden="true" />
          <span className="orbit-ring orbit-ring--two" aria-hidden="true" />
        </motion.div>

        <motion.div
          className="section-copy hero-copy-free"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
        >
          <p className="arabic bismillah" dir="rtl">
            بسم الله الرحمن الرحيم
          </p>
          <p className="small-blessing">
            In the Name of Allah, The Most Gracious, The Most Merciful
          </p>
          <GoldDivider />
          <p className="eyebrow">The Wedding Ceremony Of</p>
          <h2 className="couple-names couple-names--hero">
            <span>{wedding.groom}</span>
            <strong>&amp;</strong>
            <span>{wedding.bride}</span>
          </h2>
          <p className="hero-date">
            <span>{wedding.day}</span>
            <strong>
              {wedding.month} {wedding.dateNumber}, {wedding.year}
            </strong>
          </p>
          <p className="location-chip">
            <MapPin size={17} aria-hidden="true" />
            {wedding.venueName}, {wedding.venueAddress}
          </p>
          <p className="invitation-line">{wedding.invitationMessage}</p>
        </motion.div>
      </div>
    </section>
  );
}
