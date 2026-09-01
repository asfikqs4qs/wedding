import { motion } from "framer-motion";
import { wedding } from "../data/wedding";
import FloralCorner from "./FloralCorner";
import ImageWithFallback from "./ImageWithFallback";

export default function PhotoStory() {
  return (
    <section className="photo-section editorial-band">
      <div className="section-inner photo-layout">
        <motion.div
          className="photo-copy"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">A Beautiful Beginning</p>
          <h2>A quiet, elegant celebration of love, family, and duas.</h2>
          <p>Layered with warm candlelight, gentle florals, and the promise of a blessed new journey.</p>
        </motion.div>
        <motion.div
          className="photo-composition"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9 }}
        >
          <ImageWithFallback src={wedding.gallery[0]} alt="Safran and Afnan wedding portrait placeholder" className="portrait-mask main-photo" />
          <ImageWithFallback src={wedding.gallery[1]} alt="Wedding detail placeholder" className="portrait-mask accent-photo" />
          <FloralCorner corner="bottom-right" />
        </motion.div>
      </div>
    </section>
  );
}
