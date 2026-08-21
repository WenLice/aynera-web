import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site-content";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <img src="/logo-mark.svg" alt="" aria-hidden className="h-7 w-7" />
      <span className="flex flex-col leading-none">
        <span className="text-sm font-extrabold tracking-[0.34em] text-plum-deep">ELARIS</span>
        {!compact && (
          <span className="mt-1.5 text-[0.58rem] tracking-[0.22em] text-cream-dim uppercase">
            The era of togetherness
          </span>
        )}
      </span>
    </span>
  );
}

const overlayLinks = [
  ...navLinks,
  { label: "1:1 Meet", to: "/meet" },
  { label: "Chapters", to: "/chapters" },
  { label: "Intent", to: "/intent" },
  { label: "Verification", to: "/verify" },
  { label: "Why come back", to: "/return" },
  { label: "Suggest an idea", to: "/suggest" },
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 16);
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "border-b border-line bg-ink/85 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="shell-x grid h-20 grid-cols-[auto_1fr_auto] items-center gap-6">
          <Link to="/" aria-label="Elaris home">
            <Logo />
          </Link>

          <nav className="hidden justify-center lg:flex" aria-label="Primary">
            <ul className="flex items-center gap-1 rounded-full border border-line bg-card/60 px-2 py-1.5 backdrop-blur-md">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex rounded-full px-4 py-2 text-[0.82rem] font-semibold text-cream-dim transition-colors hover:text-plum-deep data-[status=active]:bg-plum-deep data-[status=active]:text-parchment"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-3">
            <Link
              to="/early-access"
              className="cta-warm hidden items-center px-6 py-2.5 text-sm sm:inline-flex"
            >
              Early access
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Open index"
              className="group flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-line transition-colors hover:border-plum-deep"
            >
              <span
                className={`block h-px w-4 bg-plum-deep transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-4 bg-plum-deep transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        <div className="progress-rail" aria-hidden>
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>
      </header>

      {/* Full-screen index overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ink/97 backdrop-blur-2xl transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="shell-x flex h-full flex-col justify-center pt-24 pb-12">
          <p className="eyebrow-rule flex items-center gap-3">
            <span className="accent-rule inline-block" aria-hidden />
            Index
          </p>
          <nav aria-label="Site index" className="mt-8 grid gap-x-16 sm:grid-cols-2">
            {overlayLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to as never}
                className="index-row items-baseline hover:text-peach-deep"
              >
                <span className="index-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="display text-[clamp(1.4rem,3vw,2rem)]">{link.label}</span>
              </Link>
            ))}
          </nav>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link to="/early-access" className="cta-warm inline-flex px-7 py-3.5 text-sm">
              Join the founding circle
            </Link>
            <span className="text-xs tracking-[0.2em] text-cream-dim uppercase">
              Delhi NCR first · Bangalore next
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
