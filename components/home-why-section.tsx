/**
 * Why Aynera — Site A content/layout, Peach side label (no number).
 */
export function HomeWhySection() {
  return (
    <section className="pd-why" aria-labelledby="why-heading">
      <span className="pd-seam shell-x" aria-hidden />
      <div className="shell-x">
        <div className="pd-why-layout">
          <div className="pd-why-rail">
            <span className="pd-vlabel pd-why-vlabel" aria-hidden>
              Why Aynera
            </span>
            <span className="pd-why-rail-mobile">Why Aynera</span>
          </div>

          <div className="pd-why-body">
            <div className="pd-why-split">
              <div className="pd-why-copy">
                <h2 id="why-heading" className="pd-mega pd-why-title">
                  More people is not the same as more possibility
                </h2>
                <p className="pd-why-text">
                  Your everyday circle only takes you so far .. dating apps can show you more people
                  than ever, but more profiles do not always create better opportunities
                </p>
                <p className="pd-why-text">
                  Aynera expands your circle with people you may genuinely want to meet .. and gives
                  you more natural ways to cross paths
                </p>
              </div>

              <div className="pd-why-visual">
                <img
                  src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=80"
                  alt="Two people sharing a quiet conversation outdoors"
                  width={1400}
                  height={1600}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
