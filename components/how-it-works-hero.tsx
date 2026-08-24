const principles = [
  "No endless feed",
  "No unilateral relationship mode",
  "No fake urgency",
] as const;

/**
 * How it works opener — Site A text structure, peach theme (no homepage masthead).
 */
export function HowItWorksHero() {
  return (
    <header className="pd-hiw-hero" id="main" aria-labelledby="hiw-heading">
      <div className="pd-rule-grid" aria-hidden />
      <div className="shell-x">
        <p className="pd-hiw-hero-kicker">How it works</p>
        <h1 id="hiw-heading" className="pd-display pd-hiw-hero-title">
          Join a local network. Meet in more than one way.
        </h1>
        <p className="pd-hiw-hero-lead">
          Not every Aynera session has to end in Focus or Together. You may simply meet new people,
          exchange contact details, return next week, or leave after finding someone.
        </p>

        <span className="pd-seam pd-hiw-hero-seam" aria-hidden />

        <ul className="pd-hiw-hero-tags" aria-label="Journey principles">
          {principles.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}

const scenes = [
  {
    src: "/media/elaris-meet-first.png",
    alt: "Someone arriving to meet in a public place",
  },
  {
    src: "/media/elaris-meet-table.png",
    alt: "Two people talking at a table before deciding to meet again",
  },
  {
    src: "/media/elaris-gatherings-cafe.png",
    alt: "A small group gathering around a shared table",
  },
] as const;

/**
 * Journey stills — staggered trio, no captions.
 */
export function HowItWorksGallery() {
  return (
    <section className="pd-hiw-gallery" aria-label="How people meet on Aynera">
      <div className="shell-x pd-hiw-gallery-row">
        {scenes.map((scene) => (
          <figure key={scene.src} className="pd-hiw-gallery-frame">
            <img src={scene.src} alt={scene.alt} width={900} height={1100} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
