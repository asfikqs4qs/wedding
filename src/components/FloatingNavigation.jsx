const links = [
  ["Home", "home"],
  ["Invitation", "invitation"],
  ["Date", "date"],
  ["Location", "location"],
  ["RSVP", "rsvp"],
];

export default function FloatingNavigation() {
  return (
    <nav className="floating-nav" aria-label="Wedding invitation sections">
      {links.map(([label, id]) => (
        <a key={id} href={`#${id}`}>
          {label}
        </a>
      ))}
    </nav>
  );
}
