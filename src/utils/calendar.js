function pad(number) {
  return String(number).padStart(2, "0");
}

function escapeIcs(value = "") {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function addDays(dateString, days) {
  const date = new Date(`${dateString}T00:00:00`);
  date.setDate(date.getDate() + days);
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}`;
}

function formatDate(dateString) {
  return dateString.replaceAll("-", "");
}

function formatDateTime(date) {
  return date
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");
}

function localDateTime(dateString, time) {
  return new Date(`${dateString}T${time.length === 5 ? `${time}:00` : time}`);
}

export function buildCalendarEvent(wedding) {
  const title = `${wedding.groom} & ${wedding.bride} Wedding`;
  const location = [wedding.venueName, wedding.venueAddress].filter(Boolean).join(", ");
  const description = [wedding.invitationMessage, wedding.googleMapsUrl].filter(Boolean).join("\n");
  const uid = `${wedding.groom}-${wedding.bride}-wedding-${wedding.date}@wedding-invitation`.toLowerCase();
  const now = formatDateTime(new Date());
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:-//${wedding.groom} ${wedding.bride} Wedding//Invitation//EN`,
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `SUMMARY:${escapeIcs(title)}`,
    `DESCRIPTION:${escapeIcs(description)}`,
  ];

  if (location) lines.push(`LOCATION:${escapeIcs(location)}`);

  const startValue = wedding.calendarStart || (wedding.time ? `${wedding.date}T${wedding.time}` : "");
  const endValue = wedding.calendarEnd || (wedding.endTime ? `${wedding.date}T${wedding.endTime}` : "");

  if (startValue) {
    const start = new Date(startValue);
    const end = endValue ? new Date(endValue) : new Date(start.getTime() + 3 * 60 * 60 * 1000);
    lines.push(`DTSTART:${formatDateTime(start)}`);
    lines.push(`DTEND:${formatDateTime(end)}`);
  } else {
    lines.push(`DTSTART;VALUE=DATE:${formatDate(wedding.date)}`);
    lines.push(`DTEND;VALUE=DATE:${addDays(wedding.date, 1)}`);
  }

  lines.push("END:VEVENT", "END:VCALENDAR");
  return lines.join("\r\n");
}

export function downloadCalendar(wedding) {
  const blob = new Blob([buildCalendarEvent(wedding)], {
    type: "text/calendar;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${wedding.groom}-${wedding.bride}-wedding.ics`.toLowerCase();
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export function getCountdownTarget(wedding) {
  if (wedding.calendarStart) return new Date(wedding.calendarStart);
  if (wedding.time) return localDateTime(wedding.date, wedding.time);
  return new Date(`${wedding.date}T00:00:00`);
}
