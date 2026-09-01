import GoldDivider from "./GoldDivider";
import HangingLantern from "./HangingLantern";

const duaArabic =
  "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا\nوَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ";

export default function DuaSection() {
  return (
    <section className="dua-section editorial-band">
      <HangingLantern side="left" lit />
      <HangingLantern side="right" lit />
      <div className="section-inner narrow">
        <p className="eyebrow">Dua For The Couple</p>
        <GoldDivider />
        <p className="arabic dua-large" dir="rtl">{duaArabic}</p>
        <p className="dua-translation">May Allah bless you both,<br />shower His blessings upon you,<br />and unite you together in goodness.</p>
      </div>
    </section>
  );
}
