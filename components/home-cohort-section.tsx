/**
 * Cities band — Site B full-bleed treatment.
 */
export function HomeCohortSection() {
  return (
    <section className="pd-cities" aria-labelledby="cohort-heading">
      <img
        src="/media/elaris-collage-market.png"
        alt="Evening street life in an Indian city"
        width={1600}
        height={900}
        loading="lazy"
        className="pd-cities-image"
      />
      <div className="pd-cities-veil" aria-hidden />
      <div className="pd-cities-overlay">
        <div className="shell-x pd-cities-copy">
          <p className="pd-eyebrow pd-cities-eyebrow">
            <span className="pd-eyebrow-dot" aria-hidden />
            Building one strong circle first
          </p>
          <h2 id="cohort-heading" className="pd-mega pd-cities-title">
            <span className="pd-cities-place">Delhi</span>
            {", "}
            <span className="pd-cities-place">Mumbai</span>
            {" and "}
            <span className="pd-cities-place">Bangalore</span>
            {" first."}
          </h2>
        </div>
      </div>
    </section>
  );
}
