import { motion } from "framer-motion";

export default function GoldDivider({ className = "" }) {
  return (
    <motion.div
      className={`gold-divider ${className}`}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      aria-hidden="true"
    >
      <span />
    </motion.div>
  );
}
