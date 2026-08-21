/**
 * App preview — letter/intro card matched to the mobile Meet screen.
 */
export function HomeAppPreviewSection() {
  return (
    <section className="pd-app-preview" id="inside-the-app" aria-labelledby="app-preview-heading">
      <span className="pd-seam shell-x" aria-hidden />
      <div className="shell-x">
        <div className="pd-app-preview-layout">
          <div className="pd-app-preview-rail">
            <span className="pd-vlabel pd-app-preview-vlabel" aria-hidden>
              Inside the app
            </span>
            <span className="pd-app-preview-rail-mobile">Inside the app</span>
          </div>

          <div className="pd-app-preview-grid">
            <div className="pd-app-preview-copy">
              <h2 id="app-preview-heading" className="pd-mega pd-app-preview-title">
                Every introduction comes with a reason.
              </h2>
              <p className="pd-app-preview-lead">
                No score, no ranking, no mystery algorithm bragging. You see why you were introduced,
                what you share, and one clear next step.
              </p>
              <ul className="pd-app-preview-list">
                {[
                  "A small, considered set — never an endless feed",
                  "Focus pauses discovery only when both people choose it",
                  "Meet plans stay private unless you share them",
                ].map((line) => (
                  <li key={line}>
                    <span className="pd-app-preview-dot" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pd-letter-phone" aria-label="Example introduction letter in the Aynera app">
              <div className="pd-letter-phone-chrome">
                <div className="pd-letter-topbar">
                  <img src="/logo-mark.svg" alt="" width={28} height={28} className="pd-letter-logo" />
                  <span className="pd-letter-more" aria-hidden>
                    ···
                  </span>
                </div>

                <div className="pd-letter-hero">
                  <img
                    src="/media/elaris-collage-03.jpg"
                    alt=""
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="pd-letter-photo"
                  />
                  <div className="pd-letter-hero-veil" aria-hidden />
                  <span className="pd-letter-badge">
                    <span className="pd-letter-badge-check" aria-hidden />
                    Verified
                  </span>
                  <div className="pd-letter-hero-copy">
                    <p className="pd-letter-name">Ananya, 28</p>
                    <p className="pd-letter-role">Product designer · Bangalore</p>
                    <p className="pd-letter-quote">
                      “I’d rather be early to the gallery than fashionably late anywhere.”
                    </p>
                  </div>
                </div>

                <div className="pd-letter-body">
                  <div className="pd-letter-why">
                    <p className="pd-letter-why-label">Why this introduction</p>
                    <p className="pd-letter-why-text">
                      Similar pace · shared love of quiet weekends in the city
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
