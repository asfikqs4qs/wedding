import { useState } from "react";
import { Send } from "lucide-react";
import { wedding } from "../data/wedding";
import { shareInvitation } from "../utils/share";
import AddToCalendar from "./AddToCalendar";

export default function ShareInvitation() {
  const [status, setStatus] = useState("");

  const handleShare = async () => {
    try {
      const result = await shareInvitation(wedding);
      setStatus(result === "copied" ? "Invitation link copied" : "Invitation shared");
    } catch {
      setStatus("Sharing was cancelled");
    }
  };

  return (
    <section className="share-section ceremonial-section">
      <div className="section-inner narrow">
        <p className="eyebrow">Keep The Date Close</p>
        <div className="button-row centered">
          <AddToCalendar />
          <button className="ghost-button" type="button" onClick={handleShare}>
            <Send size={18} aria-hidden="true" />
            Share Invitation
          </button>
        </div>
        <p className="share-status" role="status" aria-live="polite">{status}</p>
      </div>
    </section>
  );
}
