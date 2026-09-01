export default function HangingLantern({ side = "left", lit = false }) {
  return (
    <div className={`lantern lantern--${side} ${lit ? "lantern--lit" : ""}`} aria-hidden="true">
      <span className="lantern-chain" />
      <span className="lantern-cap" />
      <span className="lantern-body">
        <span className="lantern-flame" />
      </span>
      <span className="lantern-tail" />
    </div>
  );
}
