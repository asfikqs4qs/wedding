export default function FloralCorner({ corner = "top-left" }) {
  return (
    <div className={`geometric-corner geometric-corner--${corner}`} aria-hidden="true">
      <span className="geo-line geo-line-1" />
      <span className="geo-line geo-line-2" />
      <span className="geo-diamond geo-diamond-1" />
      <span className="geo-diamond geo-diamond-2" />
      <span className="geo-dot geo-dot-1" />
      <span className="geo-dot geo-dot-2" />
    </div>
  );
}
