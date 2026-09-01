import { useState } from "react";
import { assetUrl } from "../utils/assets";
import GeometricPattern from "./GeometricPattern";

export default function ImageWithFallback({ src, alt, className = "", loading = "lazy" }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div className={`image-fallback ${className}`} role="img" aria-label={alt}>
        <GeometricPattern />
        <div className="image-fallback-arch" />
        <span className="image-fallback-lantern" />
      </div>
    );
  }

  return (
    <img
      src={assetUrl(src)}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
