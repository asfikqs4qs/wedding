import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Countdown from "./components/Countdown";
import CustomCursor from "./components/CustomCursor";
import DateReveal from "./components/DateReveal";
import DuaSection from "./components/DuaSection";
import EventDetails from "./components/EventDetails";
import FloatingBubbles from "./components/FloatingBubbles";
import FloatingNavigation from "./components/FloatingNavigation";
import Footer from "./components/Footer";
import InvitationGate from "./components/InvitationGate";
import InvitationMessage from "./components/InvitationMessage";
import LoadingScreen from "./components/LoadingScreen";
import LocationSection from "./components/LocationSection";
import MusicControl from "./components/MusicControl";
import PhotoStory from "./components/PhotoStory";
import ScrollProgress from "./components/ScrollProgress";
import ShareInvitation from "./components/ShareInvitation";
import WalimaDetails from "./components/WalimaDetails";
import WeddingHero from "./components/WeddingHero";
import { wedding } from "./data/wedding";
import { useAudio } from "./hooks/useAudio";
import { useReducedMotion } from "./hooks/useReducedMotion";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState(false);
  const [showSite, setShowSite] = useState(false);
  const reducedMotion = useReducedMotion();
  const music = useAudio(wedding.musicFile);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setLoading(false));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const handleOpen = () => {
    setOpened(true);
    music.start();
    window.setTimeout(() => {
      setShowSite(true);
      document.body.classList.add("invitation-opened");
      window.requestAnimationFrame(() => {
        document.querySelector("main")?.focus({ preventScroll: true });
      });
    }, reducedMotion ? 250 : 950);
  };

  return (
    <>
      <ScrollProgress />
      <CustomCursor disabled={reducedMotion || !opened} />
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <AnimatePresence>
        {!showSite && (
          <InvitationGate
            key="gate"
            onOpen={handleOpen}
            reducedMotion={reducedMotion}
          />
        )}
      </AnimatePresence>
      {showSite && (
        <motion.div
          className="site-shell"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <FloatingBubbles dense />
          <MusicControl
            available={music.available}
            playing={music.playing}
            onToggle={music.toggle}
          />
          <FloatingNavigation />
          <main tabIndex={-1}>
            <WeddingHero />
            <Countdown />
            <InvitationMessage />
            <DateReveal />
            <PhotoStory />
            <DuaSection />
            <EventDetails />
            <WalimaDetails />
            <LocationSection />
            <ShareInvitation />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
