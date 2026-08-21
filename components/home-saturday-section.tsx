"use client";

import { useId, useState } from "react";

const surpriseEvents = [
  {
    title: "Market Evening",
    city: "Old Delhi",
    reasons: ["Market mornings", "Tea person", "Walking"],
    cta: "I'm interested",
  },
  {
    title: "Courtyard Jazz",
    city: "Bangalore",
    reasons: ["Live music", "Slow evenings", "Small circles"],
    cta: "I'm interested",
  },
  {
    title: "Gallery after hours",
    city: "Mumbai",
    reasons: ["Art walks", "Design chats", "City nights"],
    cta: "Request a place",
  },
  {
    title: "Coffee + Books",
    city: "South Delhi",
    reasons: ["Reading", "Café hopping", "Quieter social energy"],
    cta: "Request a place",
  },
  {
    title: "Studio colours",
    city: "Bandra West",
    reasons: ["Painting", "Quiet focus", "Creative evenings"],
    cta: "I'm interested",
  },
  {
    title: "Pets & pour-overs",
    city: "Cubbon Park",
    reasons: ["Pet café", "Dogs welcome", "Easy company"],
    cta: "Request a place",
  },
] as const;

/**
 * Weekend Surprise — drops Saturday; Squad gatherings on Sunday.
 */
export function HomeSaturdaySection() {
  const [index, setIndex] = useState(0);
  const trackId = useId();
  const total = surpriseEvents.length;

  function goTo(next: number) {
    setIndex(((next % total) + total) % total);
  }

  return (
    <section className="pd-saturday" id="saturday-surprise" aria-labelledby="saturday-heading">
      <span className="pd-seam shell-x" aria-hidden />
      <div className="shell-x">
        <div className="pd-saturday-layout pd-rail-right">
          <div className="pd-saturday-grid">
            <div className="pd-saturday-copy">
              <h2 id="saturday-heading" className="pd-mega pd-saturday-title">
                Drops on Saturday .. happens Sunday
              </h2>
              <p className="pd-saturday-lead">
                Every Saturday, a new surprise Squad gathering appears in your city .. register
                yourself, then meet on Sunday at a partner place people already know
              </p>
              <ul className="pd-saturday-list">
                {[
                  "Revealed Saturday — the gathering is Sunday",
                  "One surprise Squad in every live city each week",
                  "Partner venues — popular, known public spaces",
                ].map((line) => (
                  <li key={line}>
                    <span className="pd-saturday-dot" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pd-saturday-visual">
              <div
                className="pd-saturday-phone"
                aria-label="Example surprise Squad gatherings in the Aynera app"
              >
                <div className="pd-saturday-phone-chrome">
                  <div className="pd-saturday-topbar">
                    <div className="pd-saturday-brand">
                      <img
                        src="/logo-mark.svg"
                        alt=""
                        width={22}
                        height={22}
                        className="pd-saturday-logo"
                      />
                      <span className="pd-saturday-wordmark" aria-hidden>
                        <span className="pd-logo-ayn">AYN</span>
                        <span className="pd-logo-era">ERA</span>
                      </span>
                    </div>
                    <span className="pd-saturday-screen-label">Meet</span>
                  </div>

                  <div className="pd-saturday-phone-body">
                    <p className="pd-saturday-phone-title">Weekend Surprise</p>

                    <div
                      className="pd-saturday-carousel"
                      aria-roledescription="carousel"
                      aria-label="Surprise Squad gatherings"
                    >
                      <div className="pd-saturday-carousel-viewport">
                        <div
                          className="pd-saturday-carousel-track"
                          style={{ transform: `translateX(-${index * 100}%)` }}
                        >
                          {surpriseEvents.map((event, eventIndex) => (
                            <article
                              key={`${event.city}-${event.title}`}
                              className="pd-saturday-card"
                              aria-hidden={eventIndex !== index}
                              id={`${trackId}-slide-${eventIndex}`}
                            >
                              <p className="pd-saturday-card-tag">Squad Gathering</p>
                              <h3 className="pd-saturday-card-title">{event.title}</h3>
                              <p className="pd-saturday-card-meta">
                                Sunday · {event.city}
                              </p>
                              <p className="pd-saturday-card-meta">Partner place · Small group</p>
                              <div className="pd-saturday-card-why">
                                <p className="pd-saturday-card-why-label">Why you&apos;re seeing this</p>
                                <ul>
                                  {event.reasons.map((reason) => (
                                    <li key={reason}>{reason}</li>
                                  ))}
                                </ul>
                              </div>
                              <span className="pd-saturday-card-cta">{event.cta}</span>
                            </article>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pd-saturday-nav" role="group" aria-label="Browse surprise events">
                <button
                  type="button"
                  className="pd-saturday-nav-btn"
                  aria-label="Previous event"
                  onClick={() => goTo(index - 1)}
                >
                  <span aria-hidden>&larr;</span>
                </button>
                <button
                  type="button"
                  className="pd-saturday-nav-btn"
                  aria-label="Next event"
                  onClick={() => goTo(index + 1)}
                >
                  <span aria-hidden>&rarr;</span>
                </button>
              </div>
            </div>
          </div>

          <div className="pd-saturday-rail">
            <span className="pd-vlabel pd-saturday-vlabel" aria-hidden>
              Weekend Surprise
            </span>
            <span className="pd-saturday-rail-mobile">Weekend Surprise</span>
          </div>
        </div>
      </div>
    </section>
  );
}
