import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// A ring that trails the pointer and grows over links. Native cursor stays visible.
export default function Cursor() {
  const [enabled] = useState(
    () =>
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHovering(Boolean(e.target.closest("a, button")));
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border mix-blend-difference"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%", borderColor: "#fff" }}
      animate={{ width: hovering ? 56 : 28, height: hovering ? 56 : 28, opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    />
  );
}
