import { motion, AnimatePresence } from "framer-motion";
import { wedding } from "../data/wedding";
import { useCountdown } from "../hooks/useCountdown";
import GoldDivider from "./GoldDivider";

function NumberTile({ label, value }) {
  return (
    <div className="count-tile">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.strong
          key={value}
          initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
          transition={{ duration: 0.28 }}
        >
          {String(value).padStart(2, "0")}
        </motion.strong>
      </AnimatePresence>
      <span>{label}</span>
    </div>
  );
}

export default function Countdown() {
  const countdown = useCountdown(wedding);

  return (
    <section id="countdown" className="countdown-section editorial-band">
      <div className="section-inner narrow">
        <p className="eyebrow">Our Big Day Begins In</p>
        <GoldDivider />
        {countdown.status === "today" && (
          <div className="milestone-message">
            <h2>Today Is Our Big Day</h2>
            <p>Alhamdulillah</p>
          </div>
        )}
        {countdown.status === "past" && (
          <div className="milestone-message">
            <h2>Alhamdulillah</h2>
            <p>Our New Journey Has Begun</p>
          </div>
        )}
        {countdown.status === "counting" && (
          <div className="count-grid" aria-label={`Countdown to ${wedding.displayDate}`}>
            <NumberTile label="Days" value={countdown.days} />
            <NumberTile label="Hours" value={countdown.hours} />
            <NumberTile label="Minutes" value={countdown.minutes} />
            <NumberTile label="Seconds" value={countdown.seconds} />
          </div>
        )}
      </div>
    </section>
  );
}
