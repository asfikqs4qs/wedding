export default function GeometricPattern({ className = "" }) {
  return (
    <svg className={`geometric-pattern ${className}`} viewBox="0 0 240 240" aria-hidden="true">
      <defs>
        <pattern id="star-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M24 2 30 18 46 24 30 30 24 46 18 30 2 24 18 18Z" />
          <path d="M24 10 28 20 38 24 28 28 24 38 20 28 10 24 20 20Z" />
        </pattern>
      </defs>
      <rect width="240" height="240" fill="url(#star-grid)" />
    </svg>
  );
}
