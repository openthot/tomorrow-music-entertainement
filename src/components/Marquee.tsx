export function Marquee() {
  const items = [
    "Artist Development",
    "Music Production",
    "Global Distribution",
    "Touring",
    "Publishing",
    "Licensing",
    "Brand Partnerships",
    "IP Creation",
  ];
  const row = (
    <div className="flex shrink-0 items-center gap-12 px-6">
      {items.map((i) => (
        <div key={i} className="flex items-center gap-12">
          <span className="font-display text-4xl font-medium tracking-tight text-foreground/90 md:text-6xl">
            {i}
          </span>
          <span className="text-2xl text-[var(--violet)] md:text-4xl">✦</span>
        </div>
      ))}
    </div>
  );
  return (
    <section className="relative w-full overflow-hidden border-y border-white/5 bg-background py-10">
      <div className="flex animate-[marquee_38s_linear_infinite] whitespace-nowrap will-change-transform">
        {row}
        {row}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  );
}