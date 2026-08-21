import { Link } from "@tanstack/react-router";

const groups = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "How it works", to: "/how-it-works" },
      { label: "Track", to: "/track" },
      { label: "Why come back", to: "/return" },
    ],
  },
  {
    title: "Ways to meet",
    links: [
      { label: "1:1 Meet", to: "/meet" },
      { label: "Taste Gatherings", to: "/gatherings" },
      { label: "Intent", to: "/intent" },
      { label: "Chapters", to: "/chapters" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Safety centre", to: "/safety" },
      { label: "Verification", to: "/verify" },
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Early access", to: "/early-access" },
      { label: "Suggest an idea", to: "/suggest" },
      { label: "Grievance", to: "/grievance" },
      { label: "Delete account", to: "/delete-account" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden pt-20">
      <div className="shell-x relative z-10">
        <div className="grid gap-10 border-b border-line pb-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="eyebrow-rule flex items-center gap-3">
              <span className="accent-rule inline-block" aria-hidden />
              The era of togetherness
            </p>
            <p className="display mt-6 max-w-xl text-[clamp(1.4rem,2.6vw,2rem)]">
              A local network for meeting people beyond your usual circle.
            </p>
          </div>
          <Link to="/early-access" className="cta-warm inline-flex px-7 py-3.5 text-sm">
            Join the founding circle
          </Link>
        </div>

        <div className="relative py-24 lg:py-32">
          {/* ELARIS signature — spans link columns, E aligns with Explore, S aligns with Delete account */}
          <p
            aria-hidden
            className="mega pointer-events-none absolute inset-x-0 top-1/2 z-0 flex -translate-y-1/2 -translate-x-6 select-none items-center justify-between pb-12 pl-0 pr-4 text-[clamp(5rem,18vw,15rem)] leading-[0.78] whitespace-nowrap"
            style={{
              background: "linear-gradient(180deg, var(--cream) 0%, transparent 85%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              opacity: 0.1,
            }}
          >
            {"ELARIS".split("").map((letter, i) => (
              <span key={i}>{letter}</span>
            ))}
          </p>

          <div className="relative z-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="index-num">{group.title}</h2>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to as never}
                        className="text-sm text-cream-dim transition-colors hover:text-plum-deep"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="shell-x relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-line py-7 text-xs text-cream-dim">
        <p>© {new Date().getFullYear()} Elaris. All rights reserved.</p>
        <p className="tracking-[0.18em] uppercase">Delhi NCR first · Bangalore next</p>
      </div>
    </footer>
  );
}
