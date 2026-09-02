"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const tickerItems = [
  "Coffee circles",
  "Verified people",
  "Taste, not scores",
  "Food walks",
  "Intent you can change",
  "Small rooms",
  "No endless feed",
];

function Ticker({ items }: { items: string[] }) {
  const row = (
    <div className="pd-ticker-track" aria-hidden>
      {items.map((item) => (
        <span key={item} className="pd-ticker-item">
          <span className="pd-facet-mark" />
          <span className="pd-ticker-label">{item}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="pd-ticker-bleed">
      <div className="pd-ticker">
        {row}
        {row}
      </div>
    </div>
  );
}

export function HomeMasthead() {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = revealRef.current;
    if (!node) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      node.classList.add("is-visible");
      return;
    }
    const frame = window.requestAnimationFrame(() => node.classList.add("is-visible"));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="pd-masthead" aria-label="Aynera introduction">
      <div className="pd-rule-grid" aria-hidden />
      <div className="shell-x">
        <div className="pd-masthead-grid">
          <div ref={revealRef} className="pd-reveal">
            <p className="pd-eyebrow">
              <span className="pd-accent-rule" aria-hidden />
              A better way to meet beyond your usual circle
            </p>
            <h1 className="pd-mega pd-masthead-title">
              Your circle
              <br />
              could be <span className="accent">bigger.</span>
            </h1>
            <p className="pd-masthead-intro">
              Aynera is a local network designed to expand who you can meaningfully connect
              with—through thoughtful one-to-one introductions and shared experiences.
              <span>
                It brings context, intention, safety, and mutual choice to every step, from the
                first introduction to whatever people choose to build together.
              </span>
            </p>
            <div className="pd-masthead-trust" aria-label="Aynera safety principles">
              <span>Verified profiles</span>
              <span>Mutual choice</span>
              <span>Privacy first</span>
            </div>
            <div className="pd-masthead-actions">
              <Link href="/early-access" className="pd-cta-warm">
                Join the founding circle
              </Link>
              <Link href="/how-it-works" className="pd-text-link">
                See how Aynera works <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="pd-masthead-ticker">
          <Ticker items={tickerItems} />
        </div>
      </div>
    </section>
  );
}
