import { Link, useLocation } from "@tanstack/react-router";
import logo from "@/assets/tomorrow-music-logo.png";
import { motion } from "framer-motion";

export function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="flex items-center gap-3" data-cursor-hover>
          <img
            src={logo}
            alt="Tomorrow Music Entertainment"
            className="h-9 w-9 invert"
            style={{ filter: "invert(1) drop-shadow(0 0 12px oklch(0.62 0.27 295 / .35))" }}
          />
          <span className="font-display text-sm font-semibold tracking-[0.2em] uppercase text-foreground/90">
            Tomorrow Music <span className="text-[var(--violet)]">Entertainment</span>
          </span>
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          {["Roster", "Studio", "Touring", "Contact"].map((l) => (
            <a
              key={l}
              href={isHome ? `#${l.toLowerCase()}` : `/#${l.toLowerCase()}`}
              className="group relative text-xs font-medium uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-foreground"
              data-cursor-hover
            >
              {l}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--violet)] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>
        <a
          href={isHome ? "#contact" : "/#contact"}
          className="group relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground backdrop-blur-md transition-all hover:border-[var(--violet)] hover:bg-[var(--violet)]/10"
          data-cursor-hover
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--violet)]" />
          Sign Artist
        </a>
      </nav>
    </motion.header>
  );
}
