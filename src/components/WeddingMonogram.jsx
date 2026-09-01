import { wedding } from "../data/wedding";

export default function WeddingMonogram({ compact = false }) {
  return (
    <div className={`wedding-monogram ${compact ? "wedding-monogram--compact" : ""}`} aria-label={`${wedding.groom} and ${wedding.bride} monogram`}>
      <span>{wedding.groom.charAt(0)}</span>
      <small>&amp;</small>
      <span>{wedding.bride.charAt(0)}</span>
    </div>
  );
}
