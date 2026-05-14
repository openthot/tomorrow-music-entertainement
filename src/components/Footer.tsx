import { Link, useLocation } from "@tanstack/react-router";
import logo from "@/assets/tomorrow-music-logo.png";

export function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer id="contact" className="relative border-t border-white/5 bg-background px-6 py-20 md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Tomorrow Music Entertainment" className="h-10 w-10" style={{ filter: "invert(1)" }} />
              <span className="font-display text-sm font-semibold uppercase tracking-[0.25em]">
                Tomorrow Music <span className="text-[var(--violet)]">Entertainment</span>
              </span>
            </div>
            <p className="mt-8 max-w-md font-display text-3xl leading-tight tracking-tight md:text-4xl">
              Have a sound that deserves the world?{" "}
              <a
                href="mailto:support@tomorrowmusic.us"
                className="italic text-[var(--violet)] underline-offset-8 hover:underline"
                data-cursor-hover
              >
                Let's talk →
              </a>
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">Studio</div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              7 Castalis Street<br />Atlantis, 7349<br />Cape Town, South Africa
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">Contact</div>
            <a href="mailto:support@tomorrowmusic.us" className="mt-4 block text-sm text-foreground/70 hover:text-foreground" data-cursor-hover>
              support@tomorrowmusic.us
            </a>
            <a href="tel:+27663592544" className="mt-2 block text-sm text-foreground/70 hover:text-foreground" data-cursor-hover>
              +27 66 359 2544
            </a>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">Legal</div>
            <p className="mt-4 text-sm text-foreground/70">Tax No. 1328742240</p>
            <Link to="/privacy" className="mt-2 block text-sm text-foreground/70 hover:text-foreground" data-cursor-hover>
              Privacy Policy
            </Link>
            <Link to="/terms" className="mt-2 block text-sm text-foreground/70 hover:text-foreground" data-cursor-hover>
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 md:flex-row md:items-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
            © {new Date().getFullYear()} Tomorrow Music Entertainment · All rights reserved
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
            Crafted in Cape Town · Heard worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
