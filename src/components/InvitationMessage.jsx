import { motion } from "framer-motion";
import GoldDivider from "./GoldDivider";

export default function InvitationMessage() {
  return (
    <section id="invitation" className="message-section ceremonial-section">
      <motion.div
        className="section-inner narrow"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="eyebrow">A New Chapter</p>
        <h2>Two hearts.<br />One beautiful promise.<br />A lifetime written by Allah.</h2>
        <GoldDivider />
        <p className="editorial-text">With gratitude in our hearts,<br />we invite you to share in the happiness<br />of our Nikah and wedding celebration.</p>
      </motion.div>
    </section>
  );
}
