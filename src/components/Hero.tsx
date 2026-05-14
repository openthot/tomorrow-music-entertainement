import { motion, type Variants } from "framer-motion";
import { HeroScene } from "./HeroScene";

const word: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1.1, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* 3D layer */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* gradient washes */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-violet-radial opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-2/3 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-grain opacity-[var(--noise-opacity)] mix-blend-overlay" />

      {/* copy */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto w-full max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.35em] text-foreground/60"
          >
            <span className="h-px w-10 bg-[var(--violet)]" />
            Est. Cape Town · Worldwide
          </motion.div>

          <h1 className="font-display text-[clamp(3.2rem,11vw,12rem)] font-600 leading-[0.85] tracking-[-0.04em] text-foreground">
            {["Sound", "of", "Tomorrow."].map((w, i) => (
              <span key={w} className="mr-[0.18em] inline-block overflow-hidden align-bottom">
                <motion.span
                  custom={i}
                  variants={word}
                  initial="hidden"
                  animate="show"
                  className="inline-block"
                >
                  {i === 2 ? (
                    <span className="italic text-[var(--violet)]">{w}</span>
                  ) : (
                    w
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="mt-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="max-w-md text-balance text-base leading-relaxed text-foreground/70 md:text-lg"
            >
              A global music and entertainment empire crafting artists, catalogues
              and cinematic live experiences — from discovery to distribution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="flex items-center gap-6"
            >
              <a
                href="#roster"
                data-cursor-hover
                className="group relative inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-background transition-transform hover:scale-[1.03]"
              >
                Explore the Roster
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--violet)] text-background transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#studio"
                data-cursor-hover
                className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/70 underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                Watch Reel
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 text-[10px] uppercase tracking-[0.4em] text-foreground/50 md:block"
      >
        Scroll · Listen
      </motion.div>
    </section>
  );
}
