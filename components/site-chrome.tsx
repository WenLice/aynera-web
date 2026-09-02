"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

const navLinks = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Ways to meet", href: "/meet" },
  { label: "Safety", href: "/safety" },
  { label: "About Aynera", href: "/why-aynera" },
] as const;

const homeFaqs = [
  {
    question: "What is Aynera?",
    answer: "Aynera is a local network for meeting people beyond your usual circle. It creates thoughtful introductions and small shared experiences designed to become real-world connection.",
  },
  {
    question: "What is the difference between Fluid and Intent?",
    answer: "Fluid is for meeting openly without deciding the destination in advance. Intent is for people who are clear that they want to explore a meaningful relationship or long-term partnership.",
  },
  {
    question: "How are Duos and Squads different?",
    answer: "Duos are thoughtful one-to-one introductions. Squads are small, low-pressure group experiences built around a shared setting or activity.",
  },
  {
    question: "What does verification mean on Aynera?",
    answer: "Aynera uses account, contact, profile, and media checks to increase confidence in who enters the network. Verification reduces uncertainty, but it can never guarantee another person’s behaviour.",
  },
  {
    question: "Where is Aynera launching first?",
    answer: "The founding launch begins in Delhi, Mumbai, and Bangalore. Additional cities will open only when the local network is ready.",
  },
  {
    question: "What happens after I join early access?",
    answer: "We save your place in the founding circle and contact you when invitations begin in your city. Your full profile comes later, inside the Aynera app.",
  },
] as const;

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Chapters", href: "/chapters" },
      { label: "Track", href: "/track" },
    ],
  },
  {
    title: "Ways to meet",
    links: [
      { label: "Duos", href: "/duos" },
      { label: "Squads", href: "/squads" },
      { label: "Weekend Surprise", href: "/weekend-surprise" },
    ],
  },
  {
    title: "Why Aynera",
    links: [
      { label: "Start With Clarity", href: "/start-with-clarity" },
      { label: "Reasons to Return", href: "/return" },
      { label: "Why We Exist", href: "/why-aynera" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Safety", href: "/safety" },
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
  const isCurrentPage = (href: string) => pathname === href || pathname === `${href}/`;
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

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

  return (
      <header className={`pd-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="shell-x pd-header-inner">
          <Link href="/" aria-label="Aynera home" data-replay-intro>
            <Logo />
          </Link>

          {navLinks.length > 0 && (
            <nav className="pd-nav" aria-label="Primary">
              <ul className="pd-nav-pill">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={isCurrentPage(link.href) ? "is-active" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="pd-header-actions">
            <Link href="/early-access" className="pd-cta-warm pd-header-cta">
              Join early access
            </Link>
          </div>
        </div>

        <div className="pd-progress" aria-hidden>
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>
      </header>
  );
}

export function SiteFooter() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <footer className={`pd-footer${isHomePage ? " pd-footer-home" : ""}`}>
      <div className="shell-x" style={{ position: "relative", zIndex: 1 }}>
        {isHomePage && <section className="pd-why-layout pd-footer-section-layout" aria-labelledby="home-faq-title">
          <aside className="pd-why-rail" aria-hidden>
            <span className="pd-vlabel pd-why-vlabel">Questions, answered</span>
          </aside>
          <div className="pd-home-faq">
            <div className="pd-home-faq-intro">
              <h2 id="home-faq-title" className="pd-display">Before you join<br />the circle.</h2>
              <p>A clearer beginning makes every next step feel easier.</p>
            </div>
            <div className="pd-home-faq-list">
              {homeFaqs.map((item, index) => <details key={item.question} open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<i aria-hidden /></summary>
                <p>{item.answer}</p>
              </details>)}
            </div>
          </div>
        </section>}

        {isHomePage && <section className="pd-why-layout pd-rail-right pd-footer-section-layout is-right">
          <div className="pd-footer-top">
            <div>
              <p className="pd-display pd-footer-lead">
                A local network for meeting people beyond your usual circle.
              </p>
            </div>
            <Link href="/early-access" className="pd-text-link pd-footer-cta-link">
              Join the founding circle
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
          <aside className="pd-why-rail" aria-hidden>
            <span className="pd-vlabel pd-why-vlabel">Founding circle</span>
          </aside>
        </section>}

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
