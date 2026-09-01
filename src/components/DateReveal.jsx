import { motion } from "framer-motion";
import { wedding } from "../data/wedding";
import FloralCorner from "./FloralCorner";

export default function DateReveal() {
  return (
    <section id="date" className="date-reveal-section">
      <FloralCorner corner="top-left" />
      <FloralCorner corner="bottom-right" />
      <motion.div
        className="date-reveal"
        initial={{ opacity: 0, clipPath: "inset(12% 0 12% 0)" }}
        whileInView={{ opacity: 1, clipPath: "inset(0% 0 0% 0)" }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p>Save</p>
        <p>The</p>
        <p>Date</p>
        <strong>{wedding.dateNumber}</strong>
        <span>{wedding.month}</span>
        <small>{wedding.year}</small>
        <em>{wedding.day}</em>
      </motion.div>
    </section>
  );
}
