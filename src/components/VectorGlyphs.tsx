import { motion } from "framer-motion";

/* Abstract SVG primitives used across the site. All stroke / fill colors
   inherit from currentColor so they can be tinted via Tailwind text-* utils. */

export function ConcentricArcs({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" stroke="currentColor">
      {[40, 80, 120, 160, 200].map((r, i) => (
        <motion.circle
          key={r}
          cx="200"
          cy="200"
          r={r}
          strokeWidth={0.6}
          strokeDasharray="2 6"
          initial={{ rotate: 0, opacity: 0 }}
          whileInView={{ opacity: 0.4 - i * 0.05 }}
          animate={{ rotate: i % 2 ? -360 : 360 }}
          transition={{
            opacity: { duration: 1.2, delay: i * 0.1 },
            rotate: { duration: 60 + i * 20, repeat: Infinity, ease: "linear" },
          }}
          style={{ transformOrigin: "200px 200px" }}
        />
      ))}
      <circle cx="200" cy="200" r="3" fill="currentColor" />
    </svg>
  );
}

export function CrossMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none" strokeWidth={1}>
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <circle cx="12" cy="12" r="6" strokeDasharray="2 3" />
    </svg>
  );
}

export function Asterisk({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={className}
      stroke="currentColor"
      fill="none"
      strokeWidth={1}
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      {[0, 30, 60, 90, 120, 150].map((a) => (
        <line
          key={a}
          x1="12"
          y1="2"
          x2="12"
          y2="22"
          transform={`rotate(${a} 12 12)`}
        />
      ))}
    </motion.svg>
  );
}

export function Waveform({ className = "" }: { className?: string }) {
  const bars = Array.from({ length: 48 });
  return (
    <div className={`flex items-end gap-[3px] ${className}`}>
      {bars.map((_, i) => (
        <motion.span
          key={i}
          className="w-[2px] bg-current"
          initial={{ height: 4 }}
          animate={{
            height: [4, 6 + Math.abs(Math.sin(i * 0.4)) * 28, 4],
          }}
          transition={{
            duration: 1.4 + (i % 5) * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.03,
          }}
        />
      ))}
    </div>
  );
}

export function GridDots({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="currentColor">
      {Array.from({ length: 10 }).map((_, y) =>
        Array.from({ length: 10 }).map((_, x) => (
          <circle key={`${x}-${y}`} cx={10 + x * 20} cy={10 + y * 20} r={0.8} />
        ))
      )}
    </svg>
  );
}

export function Bracket({
  side = "left",
  className = "",
}: {
  side?: "left" | "right";
  className?: string;
}) {
  const path =
    side === "left"
      ? "M20 2 L4 2 L4 38 L20 38"
      : "M4 2 L20 2 L20 38 L4 38";
  return (
    <svg viewBox="0 0 24 40" className={className} stroke="currentColor" fill="none" strokeWidth={1}>
      <path d={path} />
    </svg>
  );
}

export function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-foreground/50">
      <CrossMark className="h-3 w-3 text-[var(--violet)]" />
      <span className="text-[var(--violet)]">{index}</span>
      <span className="h-px w-8 bg-foreground/30" />
      <span>{label}</span>
    </div>
  );
}