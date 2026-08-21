"use client";

import { useState } from "react";
import { collageItems } from "@/lib/collage-content";

function SectionRail({ label }: { label: string }) {
  return (
    <div className="pd-collage-rail">
      <span className="pd-vlabel pd-collage-vlabel" aria-hidden>
        {label}
      </span>
      <span className="pd-collage-rail-mobile">{label}</span>
    </div>
  );
}

function SectionIntro({ title, body }: { title: string; body: string }) {
  return (
    <header className="pd-collage-intro">
      <h2 className="pd-mega pd-collage-title">{title}</h2>
      <p className="pd-collage-lede">{body}</p>
    </header>
  );
}

/** Option 1 — Prompt index with live answer panel (Site B style). */
export function CollageOptionPromptIndex() {
  const [active, setActive] = useState(0);
  const current = collageItems[active] ?? collageItems[0];

  return (
    <section className="pd-collage-option" aria-label="Option 1 prompt index">
      <span className="pd-seam shell-x" aria-hidden />
      <div className="shell-x">
        <div className="pd-collage-layout">
          <SectionRail label="Profiles" />
          <div>
            <SectionIntro
              title="Profiles should give you something to talk about"
              body="Every profile answers written prompts about pace and how you actually spend your time — so the first message is never just hey."
            />
            <div className="pd-prompt-grid">
              <ul className="pd-prompt-list">
                {collageItems.map((item, i) => (
                  <li key={item.prompt}>
                    <button
                      type="button"
                      className={`pd-prompt-row${i === active ? " is-active" : ""}`}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                    >
                      <span className="pd-index-num">{String(i + 1).padStart(2, "0")}</span>
                      <span>
                        <span className="pd-display pd-prompt-q">{item.prompt}</span>
                        <span className="pd-prompt-a-mobile">{item.quote}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              <aside className="pd-prompt-panel" aria-live="polite">
                <div className="pd-prompt-panel-frame">
                  <img src={current.image} alt={current.alt} loading="lazy" />
                </div>
                <p className="pd-index-num">Answer {String(active + 1).padStart(2, "0")}</p>
                <p className="pd-prompt-panel-q">{current.prompt}</p>
                <p className="pd-display pd-prompt-panel-a">{current.quote}</p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Option 2 — Quote rail: equal framed photos in a row. */
export function CollageOptionQuoteRail() {
  return (
    <section className="pd-collage-option" aria-label="Option 2 quote rail">
      <span className="pd-seam shell-x" aria-hidden />
      <div className="shell-x">
        <div className="pd-collage-layout">
          <SectionRail label="Profiles" />
          <div>
            <SectionIntro
              title="Profiles should give you something to talk about"
              body="A little more to start with — real lines from how people actually live."
            />
          </div>
        </div>
      </div>
      <div className="pd-quote-rail">
        <div className="pd-quote-track">
          {collageItems.map((item, i) => (
            <figure key={item.image} className="pd-quote-card">
              <div className="pd-quote-frame">
                <img src={item.image} alt={item.alt} loading="lazy" />
              </div>
              <figcaption>
                <span className="pd-index-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="pd-quote-text">“{item.quote}”</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Option 3 — Single featured story with prev/next. */
export function CollageOptionFeatured() {
  const [active, setActive] = useState(0);
  const current = collageItems[active] ?? collageItems[0];
  const go = (dir: -1 | 1) => {
    setActive((value) => (value + dir + collageItems.length) % collageItems.length);
  };

  return (
    <section className="pd-collage-option" aria-label="Option 3 featured story">
      <span className="pd-seam shell-x" aria-hidden />
      <div className="shell-x">
        <div className="pd-collage-layout">
          <SectionRail label="Profiles" />
          <div>
            <SectionIntro
              title="Profiles should give you something to talk about"
              body="One voice at a time — enough to start a real conversation."
            />
            <div className="pd-feature-grid">
              <div className="pd-feature-frame">
                <img src={current.image} alt={current.alt} loading="lazy" />
              </div>
              <div className="pd-feature-copy">
                <p className="pd-eyebrow">
                  <span className="pd-accent-rule" aria-hidden />
                  {current.prompt}
                </p>
                <p className="pd-mega pd-feature-quote">“{current.quote}”</p>
                <div className="pd-feature-nav">
                  <button type="button" className="pd-feature-btn" onClick={() => go(-1)} aria-label="Previous">
                    ←
                  </button>
                  <button type="button" className="pd-feature-btn" onClick={() => go(1)} aria-label="Next">
                    →
                  </button>
                </div>
                <div className="pd-feature-thumbs" role="tablist" aria-label="Profile photos">
                  {collageItems.map((item, i) => (
                    <button
                      key={item.image}
                      type="button"
                      role="tab"
                      aria-selected={i === active}
                      className={`pd-feature-thumb${i === active ? " is-active" : ""}`}
                      onClick={() => setActive(i)}
                      aria-label={item.prompt}
                    >
                      <img src={item.image} alt="" loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Option 4 — Equal grid strip, no hanging hardware. */
export function CollageOptionGrid() {
  return (
    <section className="pd-collage-option" aria-label="Option 4 equal grid">
      <span className="pd-seam shell-x" aria-hidden />
      <div className="shell-x">
        <div className="pd-collage-layout">
          <SectionRail label="Profiles" />
          <div>
            <SectionIntro
              title="Profiles should give you something to talk about"
              body="Same faces and lines — quieter frames, no rope or clips."
            />
            <div className="pd-equal-grid">
              {collageItems.map((item, i) => (
                <figure key={item.image} className="pd-equal-card">
                  <div className="pd-equal-frame">
                    <img src={item.image} alt={item.alt} loading="lazy" />
                  </div>
                  <figcaption>
                    <span className="pd-index-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="pd-equal-quote">“{item.quote}”</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
