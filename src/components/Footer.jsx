import { wedding } from "../data/wedding";
import FloralCorner from "./FloralCorner";
import GoldDivider from "./GoldDivider";
import WeddingMonogram from "./WeddingMonogram";

export default function Footer() {
  return (
    <footer className="footer-section">
      <FloralCorner corner="top-left" />
      <WeddingMonogram />
      <h2>
        {wedding.groom} &amp; {wedding.bride}
      </h2>
      <p className="arabic" dir="rtl">
        إن شاء الله
      </p>
      <GoldDivider />
      <p>With Love &amp; Duas</p>
      <p>We can't wait to celebrate these blessed occasions with you.</p>
      <strong>{wedding.displayDate}</strong>
      <span>{wedding.walima.displayDate}</span>
      <span>{wedding.familyInvitationText}</span>
    </footer>
  );
}
