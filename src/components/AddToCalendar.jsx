import { CalendarPlus } from "lucide-react";
import { wedding } from "../data/wedding";
import { downloadCalendar } from "../utils/calendar";

export default function AddToCalendar() {
  return (
    <button className="action-button" type="button" onClick={() => downloadCalendar(wedding)}>
      <CalendarPlus size={18} aria-hidden="true" />
      Add To Calendar
    </button>
  );
}
