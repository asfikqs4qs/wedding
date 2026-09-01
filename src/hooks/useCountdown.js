import { useEffect, useMemo, useState } from "react";
import { getCountdownTarget } from "../utils/calendar";

function getDayBounds(dateString) {
  const start = new Date(`${dateString}T00:00:00`);
  const end = new Date(start);
  end.setDate(end.getDate() + 1);
  return { start, end };
}

function calculate(wedding) {
  const now = new Date();
  const { start, end } = getDayBounds(wedding.date);
  const target = getCountdownTarget(wedding);

  if (now >= start && now < end) {
    return { status: "today", days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  if (now >= end) {
    return { status: "past", days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const diff = Math.max(0, target.getTime() - now.getTime());
  return {
    status: "counting",
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function useCountdown(wedding) {
  const [state, setState] = useState(() => calculate(wedding));
  const signature = useMemo(
    () => [wedding.date, wedding.time, wedding.calendarStart].join("|"),
    [wedding.calendarStart, wedding.date, wedding.time],
  );

  useEffect(() => {
    setState(calculate(wedding));
    const timer = window.setInterval(() => setState(calculate(wedding)), 1000);
    return () => window.clearInterval(timer);
  }, [signature, wedding]);

  return state;
}
