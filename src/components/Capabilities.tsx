import { motion } from "framer-motion";

const items = [
  { n: "01", t: "Talent Scouting", d: "Global discovery network surfacing once-in-a-generation voices across continents and genres." },
  { n: "02", t: "Artist Training", d: "In-house performance, vocal and creative direction programs built for longevity, not virality." },
  { n: "03", t: "Music Production", d: "End-to-end production with a roster of award-winning producers, engineers and writers." },
  { n: "04", t: "Global Distribution", d: "Catalogue delivery to every major streaming and physical platform across 180+ markets." },
  { n: "05", t: "Touring & Live", d: "Cinematic live shows — staged, produced and routed by veteran tour architects." },
  { n: "06", t: "Publishing & Licensing", d: "Rights administration, sync placement and IP growth across film, fashion and gaming." },
];

export function Capabilities() {
  return (
    <section id="studio" className="relative px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-20 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-foreground/50">
              <span className="h-px w-8 bg-[var(--violet)]" /> Capabilities
            </div>
          </div>
          <h2 className="font-display text-[clamp(2.4rem,6vw,5.5rem)] font-500 leading-[0.95] tracking-[-0.03em] md:col-span-8">
            A vertically integrated <span className="italic text-[var(--violet)]">music empire</span>, engineered for the next century.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-background p-8 transition-colors hover:bg-[var(--violet)]/5 md:p-10"
              data-cursor-hover
            >
              <div className="absolute right-8 top-8 text-[10px] uppercase tracking-[0.3em] text-foreground/40">
                {it.n}
              </div>
              <h3 className="font-display mt-16 text-2xl font-500 tracking-tight md:text-3xl">
                {it.t}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/60">
                {it.d}
              </p>
              <div className="mt-10 h-px w-12 bg-[var(--violet)] transition-all duration-700 group-hover:w-full group-hover:opacity-60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}