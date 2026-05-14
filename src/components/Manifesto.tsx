import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  const lines = [
    "We don't chase moments.",
    "We build catalogues that outlive us —",
    "songs, stories, sounds.",
    "Tomorrow, on repeat.",
  ];

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-40 md:px-10 md:py-56">
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute -left-32 top-1/2 -z-10 h-[60vw] w-[60vw] -translate-y-1/2 rounded-full bg-[var(--violet)]/20 blur-[120px]"
      />
      <div className="mx-auto max-w-[1400px]">
        {lines.map((l, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0.15, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className={`font-display text-[clamp(2rem,6vw,5rem)] font-500 leading-[1.05] tracking-[-0.03em] ${
              i === lines.length - 1 ? "italic text-[var(--violet)]" : "text-foreground"
            }`}
          >
            {l}
          </motion.p>
        ))}
      </div>
    </section>
  );
}