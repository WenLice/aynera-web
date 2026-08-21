"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

const navLinks = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Gatherings", href: "/gatherings" },
  { label: "Safety", href: "/safety" },
  { label: "Track", href: "/track" },
];

const overlayLinks = [
  ...navLinks,
  { label: "1:1 Meet", href: "/meet" },
  { label: "Chapters", href: "/chapters" },
  { label: "Intent", href: "/intent" },
  { label: "Verification", href: "/verify" },
  { label: "Why come back", href: "/return" },
  { label: "Suggest an idea", href: "/suggest" },
];

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Track", href: "/track" },
      { label: "Why come back", href: "/return" },
    ],
  },
  {
    title: "Ways to meet",
    links: [
      { label: "1:1 Meet", href: "/meet" },
      { label: "Taste Gatherings", href: "/gatherings" },
      { label: "Intent", href: "/intent" },
      { label: "Chapters", href: "/chapters" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Safety centre", href: "/safety" },
      { label: "Verification", href: "/verify" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Early access", href: "/early-access" },
      { label: "Suggest an idea", href: "/suggest" },
      { label: "Grievance", href: "/grievance" },
      { label: "Delete account", href: "/delete-account" },
    ],
  },
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="pd-logo">
      <img src="/logo-mark.svg" alt="" aria-hidden width={28} height={28} />
      <span className="pd-logo-text">
        <span className="pd-logo-name">
          <span className="pd-logo-ayn">AYN</span>
          <span className="pd-logo-era">ERA</span>
        </span>
        {!compact && <span className="pd-logo-tag">The era of togetherness</span>}
      </span>
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`pd-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="shell-x pd-header-inner">
          <Link href="/" aria-label="Aynera home" data-replay-intro>
            <Logo />
          </Link>

          <nav className="pd-nav" aria-label="Primary">
            <ul className="pd-nav-pill">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={pathname === link.href ? "is-active" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pd-header-actions">
            <Link href="/early-access" className="pd-cta-warm pd-header-cta">
              Early access
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label="Open index"
              className={`pd-menu-btn${open ? " is-open" : ""}`}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className="pd-progress" aria-hidden>
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>
      </header>

      <div className={`pd-overlay${open ? " is-open" : ""}`}>
        <div className="shell-x pd-overlay-inner">
          <p className="pd-eyebrow">
            <span className="pd-accent-rule" aria-hidden />
            Index
          </p>
          <nav aria-label="Site index" className="pd-overlay-nav">
            {overlayLinks.map((link, index) => (
              <Link key={link.href} href={link.href} className="pd-index-row">
                <span className="pd-index-num">{String(index + 1).padStart(2, "0")}</span>
                <span className="pd-display" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
          <div className="pd-overlay-cta-row">
            <Link href="/early-access" className="pd-text-link">
              Join the founding circle
              <span aria-hidden>&rarr;</span>
            </Link>
            <span className="pd-overlay-note">Delhi NCR · Bangalore · Mumbai</span>
          </div>
        </div>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="pd-footer">
      <div className="shell-x" style={{ position: "relative", zIndex: 1 }}>
        <div className="pd-footer-top">
          <div>
            <p className="pd-eyebrow">
              <span className="pd-accent-rule" aria-hidden />
              The era of togetherness
            </p>
            <p className="pd-display pd-footer-lead">
              A local network for meeting people beyond your usual circle.
            </p>
          </div>
          <Link href="/early-access" className="pd-text-link pd-footer-cta-link">
            Join the founding circle
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>

        <div className="pd-footer-mid">
          <p className="pd-footer-watermark" aria-hidden>
            {"AYN".split("").map((letter, index) => (
              <span key={`ayn-${letter}-${index}`} className="pd-footer-wm-ayn">
                {letter}
              </span>
            ))}
            {"ERA".split("").map((letter, index) => (
              <span key={`era-${letter}-${index}`} className="pd-footer-wm-era">
                {letter}
              </span>
            ))}
          </p>
          <div className="pd-footer-groups">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2>{group.title}</h2>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="shell-x pd-footer-base">
        <p className="pd-footer-meta">© {new Date().getFullYear()} Aynera. All rights reserved.</p>
        <p className="pd-footer-meta">Launching first in Delhi, Mumbai and Bangalore</p>
      </div>
    </footer>
  );
}

export function HomeIntro() {
  return null;
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`pd-reveal is-visible ${className}`.trim()}>{children}</div>;
}
