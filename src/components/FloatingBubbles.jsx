export default function FloatingBubbles({ dense = false }) {
  const total = dense ? 42 : 22;

  return (
    <div className={`floating-bubbles ${dense ? "floating-bubbles--dense" : ""}`} aria-hidden="true">
      {Array.from({ length: total }).map((_, index) => (
        <span key={index} style={{ "--i": index }} />
      ))}
    </div>
  );
}
