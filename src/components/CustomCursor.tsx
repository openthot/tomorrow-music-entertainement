import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2;
    let rx = mx,
      ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%,-50%)`;
      }
      const t = e.target as HTMLElement;
      setHover(!!t?.closest("a,button,[data-cursor-hover]"));
    };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%,-50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          width: hover ? 56 : 32,
          height: hover ? 56 : 32,
          borderRadius: 999,
          border: "1px solid var(--violet)",
          mixBlendMode: "difference",
          transition: "width .25s ease, height .25s ease, background .25s",
          background: hover ? "color-mix(in oklab, var(--violet) 25%, transparent)" : "transparent",
        }}
      />
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          width: 4,
          height: 4,
          borderRadius: 999,
          background: "white",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}