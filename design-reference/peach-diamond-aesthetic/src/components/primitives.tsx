import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal-item ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow-rule flex items-center gap-3">
      <span className="accent-rule inline-block" aria-hidden />
      {children}
    </p>
  );
}

/**
 * Vertical side watermark — editorial marginalia for pages with low content.
 * Place on the side where the layout feels empty; flips between left and right.
 */
export function SideMark({
  label = "ELARIS",
  side = "right",
  className = "",
}: {
  label?: string;
  side?: "left" | "right";
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`mega pointer-events-none fixed top-1/2 z-0 hidden -translate-y-1/2 select-none text-[clamp(3.5rem,10vh,7rem)] leading-[0.85] tracking-[0.14em] text-cream opacity-[0.055] lg:block ${side === "left" ? "left-0" : "right-0"} ${className}`}
      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
    >
      {label}
    </span>
  );
}

export function CtaWarm({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="cta-warm inline-flex items-center justify-center px-7 py-3.5 text-sm">
      {children}
    </Link>
  );
}

export function CtaGhost({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="cta-ghost inline-flex items-center justify-center px-7 py-3.5 text-sm">
      {children}
    </Link>
  );
}

export function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 border-b border-line pb-1 text-sm font-bold text-plum-deep transition-colors hover:border-peach-deep hover:text-peach-deep"
    >
      {children}
      <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
    </Link>
  );
}

/**
 * Editorial section scaffold.
 * Every section carries a left rail (index + rotated label) on large screens,
 * so the whole site reads as a numbered magazine rather than stacked blocks.
 */
export function Section({
  children,
  className = "",
  id,
  index,
  label,
  divider = true,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  index?: string;
  label?: string;
  divider?: boolean;
}) {
  return (
    <section id={id} className={`relative py-20 lg:py-28 ${className}`}>
      {divider && <span className="seam shell-x absolute inset-x-0 top-0 block" aria-hidden />}
      <div className="shell-x">
        {index || label ? (
          <div className="grid gap-10 lg:grid-cols-[6rem_minmax(0,1fr)] lg:gap-0">
            <div className="rail-sticky flex items-center gap-4 lg:block">
              {index && <span className="index-num block">{index}</span>}
              {label && (
                <span className="vlabel mt-6 hidden lg:inline-block" aria-hidden>
                  {label}
                </span>
              )}
              {label && <span className="eyebrow-rule lg:hidden">{label}</span>}
            </div>
            <div>{children}</div>
          </div>
        ) : (
          children
        )}
      </div>
    </section>
  );
}

/** Section title block used inside <Section>. */
export function SectionHead({
  kicker,
  title,
  body,
  className = "",
}: {
  kicker?: string;
  title: ReactNode;
  body?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      {kicker && <Eyebrow>{kicker}</Eyebrow>}
      <h2 className="display mt-6 max-w-4xl text-[clamp(1.9rem,4vw,3.2rem)]">{title}</h2>
      {body && <p className="lede mt-6 max-w-2xl">{body}</p>}
    </Reveal>
  );
}

/**
 * Page masthead: full-bleed, oversized, with a meta strip beneath the rule.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  tags,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  tags?: string[];
}) {
  return (
    <header className="relative overflow-hidden pt-32 pb-14 lg:pt-44 lg:pb-20">
      <div className="rule-grid hidden lg:block" aria-hidden />
      <div className="shell-x">
        <Reveal className="grid gap-8 lg:grid-cols-[6rem_minmax(0,1fr)] lg:gap-0">
          <span className="vlabel hidden self-start lg:inline-block" aria-hidden>
            Elaris
          </span>
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mega mt-8 max-w-5xl text-[clamp(2.7rem,8vw,6rem)]">{title}</h1>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="seam mt-12 block lg:mt-16" aria-hidden />
        </Reveal>

        {(lead || tags) && (
          <Reveal delay={180} className="grid gap-8 pt-8 lg:grid-cols-[6rem_minmax(0,1fr)_20rem]">
            <span aria-hidden className="hidden lg:block" />
            {lead && <p className="lede max-w-2xl">{lead}</p>}
            {tags && (
              <ul className="space-y-2 text-xs font-semibold tracking-[0.16em] text-cream-dim uppercase lg:pt-2">
                {tags.map((tag) => (
                  <li key={tag} className="flex items-start gap-3">
                    <span className="facet-mark mt-1.5 shrink-0" aria-hidden />
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        )}
      </div>
    </header>
  );
}

/** Full-bleed closing band — the one deep-plum moment on every page. */
export function ClosingCta({
  title,
  body,
  secondary,
}: {
  title: string;
  body: string;
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="band bleed mt-24 overflow-hidden py-24 lg:py-32">
      <div className="shell-x">
        <Reveal>
          <p className="eyebrow-rule flex items-center gap-3 text-parchment-dim">
            <span className="accent-rule inline-block" aria-hidden />
            Founding circle
          </p>
          <h2 className="mega mt-10 max-w-4xl text-[clamp(2.2rem,6vw,4.6rem)] text-parchment">
            {title}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-8 border-t border-parchment/15 pt-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <p className="max-w-xl leading-relaxed text-parchment-dim">{body}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/early-access"
                className="inline-flex items-center justify-center rounded-full bg-parchment px-7 py-3.5 text-sm font-bold text-plum-deep transition-transform hover:-translate-y-0.5"
              >
                Join early access
              </Link>
              {secondary && (
                <Link
                  to={secondary.to}
                  className="inline-flex items-center justify-center rounded-full border border-parchment/35 px-7 py-3.5 text-sm font-bold text-parchment transition-colors hover:bg-parchment/10"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
