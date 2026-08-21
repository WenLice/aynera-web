"use client";

import { useState } from "react";
import { collageItems } from "@/lib/collage-content";

/**
 * Homepage profiles section — featured story with thumbnail strip.
 * Site A captions/images, Peach theme (Option 3).
 */
export function HomeProfilesSection() {
  const [active, setActive] = useState(0);
  const current = collageItems[active] ?? collageItems[0];

  return (
    <section className="pd-collage-option pd-profiles" aria-labelledby="profiles-heading">
      <span className="pd-seam shell-x" aria-hidden />
      <div className="shell-x">
        <div className="pd-collage-layout pd-rail-right">
          <div>
            <header className="pd-collage-intro">
              <h2 id="profiles-heading" className="pd-mega pd-collage-title">
                Profiles should give you something to talk about
              </h2>
            </header>

            <div className="pd-feature-grid">
              <div className="pd-feature-frame">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.alt}
                  loading="lazy"
                />
              </div>

              <div className="pd-feature-copy">
                <p className="pd-eyebrow">
                  <span className="pd-accent-rule" aria-hidden />
                  {current.prompt}
                </p>
                <p className="pd-mega pd-feature-quote">“{current.quote}”</p>

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

          <div className="pd-collage-rail">
            <span className="pd-vlabel pd-collage-vlabel" aria-hidden>
              A little more to start with
            </span>
            <span className="pd-collage-rail-mobile">A little more to start with</span>
          </div>
        </div>
      </div>
      <span className="pd-seam pd-seam-end shell-x" aria-hidden />
    </section>
  );
}
