import { Volume2, VolumeX } from "lucide-react";

export default function MusicControl({ available, playing, onToggle }) {
  if (!available) return null;

  return (
    <button
      className="music-control"
      type="button"
      onClick={onToggle}
      aria-label={playing ? "Mute wedding background music" : "Play wedding background music"}
    >
      {playing ? <Volume2 size={18} aria-hidden="true" /> : <VolumeX size={18} aria-hidden="true" />}
    </button>
  );
}
