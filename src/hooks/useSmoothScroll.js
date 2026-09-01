import { useEffect } from "react";

export function useSmoothScroll(enabled) {
  useEffect(() => {
    if (!enabled) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    if (window.matchMedia("(pointer: coarse)").matches) return undefined;

    let target = window.scrollY;
    let current = window.scrollY;
    let frame = 0;

    const clampTarget = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      target = Math.max(0, Math.min(target, max));
    };

    const animate = () => {
      current += (target - current) * 0.16;
      window.scrollTo(0, current);

      if (Math.abs(target - current) > 0.5) {
        frame = window.requestAnimationFrame(animate);
      } else {
        current = target;
        window.scrollTo(0, target);
        frame = 0;
      }
    };

    const onWheel = (event) => {
      if (event.ctrlKey) return;
      const element = event.target;
      if (element?.closest?.("textarea, input, select, iframe")) return;

      event.preventDefault();
      target += event.deltaY;
      clampTarget();

      if (!frame) {
        current = window.scrollY;
        frame = window.requestAnimationFrame(animate);
      }
    };

    const onScroll = () => {
      if (!frame) {
        target = window.scrollY;
        current = window.scrollY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", clampTarget);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", clampTarget);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [enabled]);
}
