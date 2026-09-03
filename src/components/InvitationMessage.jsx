import { motion } from "framer-motion";
import { wedding } from "../data/wedding";
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
        <h2>
          {wedding.groom}
          <br />
          with
          <br />
          {wedding.bride}
        </h2>
        <GoldDivider />
        <p className="editorial-text">
          With hearts filled with gratitude to Allah,
          <br />
          {wedding.groomParents}
          <br />
          warmly invite you and your family to grace the blessed wedding celebration of their beloved son.
        </p>
        <p className="editorial-text">
          {wedding.bride} is the daughter of {wedding.brideParents}.
        </p>
      </motion.div>
    </section>
  );
}
