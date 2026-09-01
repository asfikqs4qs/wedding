import GeometricPattern from "./GeometricPattern";

export default function IslamicArch({ children, className = "", opened = false }) {
  return (
    <div className={`islamic-arch ${opened ? "islamic-arch--opened" : ""} ${className}`}>
      <GeometricPattern className="arch-pattern" />
      <div className="arch-shell">
        <div className="arch-highlight" />
        <div className="arch-content">{children}</div>
      </div>
    </div>
  );
}
