import { useState } from "react";
import { motion } from "framer-motion";
import { MailOpen } from "lucide-react";
import { wedding } from "../data/wedding";
import FloralCorner from "./FloralCorner";
import FloatingBubbles from "./FloatingBubbles";
import HangingLantern from "./HangingLantern";
import ImageWithFallback from "./ImageWithFallback";

export default function InvitationGate({ onOpen, reducedMotion }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    onOpen();
  };

  return (
    <motion.section
      className={`invitation-gate ${opening ? "invitation-gate--opening" : ""}`}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reducedMotion ? 0.2 : 0.55, delay: reducedMotion ? 0.2 : 1.22 }}
      aria-label="Closed wedding invitation for Safran and Afnan"
    >
      <div className="silk-light" />
      <div className="color-aura color-aura--coral" aria-hidden="true" />
      <div className="color-aura color-aura--teal" aria-hidden="true" />
      <FloatingBubbles />
      <div className="particle-field" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} style={{ "--i": index }} />
        ))}
      </div>

      <HangingLantern side="left" lit={opening} />
      <HangingLantern side="right" lit={opening} />

      <motion.div
        className="gate-stage"
        animate={opening && !reducedMotion ? { scale: 1.02, y: -8 } : { scale: 1, y: 0 }}
        transition={{ duration: 1.05, ease: "easeInOut" }}
      >
        <FloralCorner corner="top-left" />
        <FloralCorner corner="bottom-right" />
        <div className={`gate-panel ${opening ? "gate-panel--opening" : ""}`}>
          <div className="door door--left" aria-hidden="true" />
          <div className="door door--right" aria-hidden="true" />
          <motion.div
            className="gate-copy gate-copy--simple"
            animate={opening ? { opacity: 0, y: -12, filter: "blur(6px)" } : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: reducedMotion ? 0.16 : 0.45, ease: "easeOut" }}
          >
            <div className="gate-photo-wrap">
              <ImageWithFallback
                src={wedding.gallery[0]}
                alt={`${wedding.groom} and ${wedding.bride} wedding couple portrait`}
                className="gate-photo"
                loading="eager"
              />
            </div>
            <p className="eyebrow">The Wedding Of</p>
            <h1 className="couple-names" aria-label={`${wedding.groom} and ${wedding.bride}`}>
              <span>{wedding.groom}</span>
              <strong>&amp;</strong>
              <span>{wedding.bride}</span>
            </h1>
            <button className="open-button" type="button" onClick={handleOpen} aria-label="Open our wedding invitation">
              <MailOpen size={18} aria-hidden="true" />
              Open Invitation
            </button>
            <span className="tap-text">Tap to enter</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
