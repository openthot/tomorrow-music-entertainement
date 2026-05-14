import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import artist1 from "@/assets/artist-1.jpg";
import artist2 from "@/assets/artist-2.jpg";
import artist3 from "@/assets/artist-3.jpg";
import artist4 from "@/assets/artist-4.jpg";
import {
  ConcentricArcs,
  Asterisk,
  Waveform,
  GridDots,
  Bracket,
  SectionLabel,
} from "./VectorGlyphs";

type Artist = {
  id: string;
  name: string;
  alias: string;
  genre: string;
  origin: string;
  streams: string;
  img: string;
  year: string;
};

const artists: Artist[] = [
  {
    id: "01",
    name: "Selene Ortiz",
    alias: "SLN",
    genre: "Alt-Pop / R&B",
    origin: "Mexico City → London",
    streams: "412M",
    img: artist1,
    year: "Signed '23",
  },
  {
    id: "02",
    name: "Kairo Mensah",
    alias: "KAI∅",
    genre: "Hip-Hop / Trap",
    origin: "Accra → Atlanta",
    streams: "1.2B",
    img: artist2,
    year: "Signed '21",
  },
  {
    id: "03",
    name: "Atlas Vey",
    alias: "ATLAS",
    genre: "Electronic / Score",
    origin: "Berlin → Tokyo",
    streams: "688M",
    img: artist3,
    year: "Signed '22",
  },
  {
    id: "04",
    name: "Nia Adesanya",
    alias: "N/A",
    genre: "Afrobeats / Soul",
    origin: "Lagos → Cape Town",
    streams: "934M",
    img: artist4,
    year: "Signed '24",
  },
];

export function Roster() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const headlineY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={ref}
      id="roster"
      className="relative overflow-hidden px-6 py-32 md:px-10 md:py-48"
    >
      {/* Decorative vector layer */}
      <ConcentricArcs className="pointer-events-none absolute -right-40 -top-40 h-[640px] w-[640px] text-[var(--violet)]" />
      <GridDots className="pointer-events-none absolute -left-10 bottom-40 h-48 w-48 text-foreground/20" />
      <Asterisk className="pointer-events-none absolute right-12 top-[42%] h-10 w-10 text-[var(--violet)]/70" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mb-20 grid gap-10 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-4">
            <SectionLabel index="02 / 06" label="The Roster" />
            <div className="mt-10 flex items-center gap-4 text-foreground/60">
              <Waveform className="h-8 text-[var(--violet)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
                LIVE · 47 ARTISTS
              </span>
            </div>
          </div>
          <motion.div style={{ y: headlineY }} className="md:col-span-8">
            <h2 className="font-display text-[clamp(2.4rem,6vw,5.5rem)] font-500 leading-[0.95] tracking-[-0.03em]">
              Voices that{" "}
              <span className="relative inline-block italic text-[var(--violet)]">
                define
                <svg
                  className="absolute -bottom-3 left-0 h-3 w-full text-[var(--violet)]"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path d="M0 8 Q50 0 100 6 T200 4" />
                </svg>
              </span>{" "}
              the next decade — discovered, developed and amplified worldwide.
            </h2>
          </motion.div>
        </div>

        {/* Artist grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {artists.map((a, i) => (
            <ArtistCard key={a.id} artist={a} index={i} />
          ))}
        </div>

        {/* Ticker / footer row */}
        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50">
            <Bracket className="h-6 w-3 text-[var(--violet)]" />
            <span>3.2B+ combined streams</span>
            <span className="hidden h-px w-12 bg-foreground/20 md:block" />
            <span className="hidden md:inline">62 countries charted</span>
          </div>
          <a
            href="#contact"
            data-cursor-hover
            className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-foreground/80 transition-colors hover:text-foreground"
          >
            View full roster
            <span className="relative h-px w-12 overflow-hidden bg-foreground/30">
              <span className="absolute inset-0 origin-left scale-x-0 bg-[var(--violet)] transition-transform duration-500 group-hover:scale-x-100" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ArtistCard({ artist, index }: { artist: Artist; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
      data-cursor-hover
    >
      {/* Top meta */}
      <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40">
        <span>{artist.id}</span>
        <span className="text-[var(--violet)]/80">{artist.year}</span>
      </div>

      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-secondary">
        {/* Corner brackets */}
        <Bracket side="left" className="absolute left-3 top-3 z-20 h-5 w-3 text-foreground/70" />
        <Bracket side="right" className="absolute right-3 top-3 z-20 h-5 w-3 text-foreground/70" />

        <motion.img
          src={artist.img}
          alt={artist.name}
          loading="lazy"
          width={768}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-[1200ms] group-hover:scale-[1.04] group-hover:grayscale-0"
        />

        {/* Color wash on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--violet)]/40 via-transparent to-transparent opacity-0 mix-blend-color transition-opacity duration-700 group-hover:opacity-100" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/70 to-transparent" />

        {/* Alias huge */}
        <div className="absolute inset-x-4 bottom-4 z-10">
          <div className="font-display text-3xl font-600 leading-none tracking-tight text-foreground md:text-4xl">
            {artist.alias}
          </div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60">
            {artist.name}
          </div>
        </div>

        {/* Hover panel */}
        <div className="absolute inset-x-0 bottom-0 z-20 translate-y-full bg-[var(--violet)] p-4 text-background transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
          <div className="flex items-end justify-between gap-3">
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-70">
                Genre
              </div>
              <div className="font-display text-sm font-500">{artist.genre}</div>
            </div>
            <Waveform className="h-5 text-background/90" />
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-background/20 pt-3 font-mono text-[10px] uppercase tracking-[0.25em]">
            <span>{artist.origin}</span>
            <span className="font-semibold">{artist.streams} ▲</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}