export default function FloralCorner({ corner = "top-left" }) {
  return (
    <div className={`floral-corner floral-corner--${corner}`} aria-hidden="true">
      <span className="leaf leaf-1" />
      <span className="leaf leaf-2" />
      <span className="leaf leaf-3" />
      <span className="flower flower-1" />
      <span className="flower flower-2" />
      <span className="flower flower-3" />
    </div>
  );
}
