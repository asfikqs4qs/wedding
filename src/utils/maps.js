export function getDirectionsUrl(wedding) {
  if (wedding.googleMapsUrl) return wedding.googleMapsUrl;
  if (wedding.latitude != null && wedding.longitude != null) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${wedding.latitude},${wedding.longitude}`,
    )}`;
  }
  const query = [wedding.venueName, wedding.venueAddress].filter(Boolean).join(", ");
  return query
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
    : "";
}
