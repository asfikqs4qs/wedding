import { motion } from "framer-motion";
import WeddingMonogram from "./WeddingMonogram";

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      role="status"
      aria-label="Preparing Safran and Afnan wedding invitation"
    >
      <div className="loading-crest">
        <WeddingMonogram />
        <span />
      </div>
    </motion.div>
  );
}
