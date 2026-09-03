import { motion } from "framer-motion";
import { wedding } from "../data/wedding";
import WeddingMonogram from "./WeddingMonogram";

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      role="status"
      aria-label={`Preparing ${wedding.groom} and ${wedding.bride} wedding invitation`}
    >
      <div className="loading-crest">
        <WeddingMonogram />
        <span />
      </div>
    </motion.div>
  );
}
