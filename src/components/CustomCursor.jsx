import { useEffect, useState } from "react";

export default function CustomCursor({ disabled }) {
  const [position, setPosition] = useState({ x: -40, y: -40 });

  useEffect(() => {
    if (disabled || window.matchMedia("(pointer: coarse)").matches) return undefined;
    const move = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [disabled]);

  if (disabled) return null;
  return <span className="custom-cursor" style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }} aria-hidden="true" />;
}
