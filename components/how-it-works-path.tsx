import Link from "next/link";

const steps = [
  {
    phase: "Join a local network",
    title: "Start where there are enough people nearby.",
    body: "Choose the founding market, share what you are open to, and join when there is enough relevant local activity. Delhi is opening first. Mumbai and Bangalore are next-city interest until each is ready.",
    gain: "Honest waitlists and no fake countdowns",
    links: [] as { href: string; label: string }[],
  },
  {
    phase: "Build context",
    title: "Profile, Taste and intent — with clear privacy.",
    body: "Review, profile, Taste and intent help Aynera understand how you like to meet. We explain what is public, what stays private, and what is used only for recommendations.",
    gain: "Context without a compatibility score",
    links: [
      { href: "/intent", label: "How intent works" },
    ],
  },
  {
    phase: "Discover your way",
    title: "Duos and/or Squads.",
    body: "Receive curated introductions, see relevant small gatherings, or both. Squads are an activation of the same local network — not a separate events product.",
    gain: "More than one way to cross paths",
    links: [
      { href: "/duos", label: "Duos" },
      { href: "/squads", label: "Squads" },
    ],
  },
  {
    phase: "Meet safely",
    title: "Talk here first — meet when it feels right.",
    body: "For Duos, chat in-app and use public-place and date-plan tools. Squad participants follow host and community rules. Safety tools stay free.",
    gain: "Control before, during, and after the offline step",
    links: [{ href: "/safety", label: "Explore the Safety centre" }],
  },
  {
    phase: "Keep exploring or focus",
    title: "The network refreshes. Mutual states stay optional.",
    body: "If nothing clicks, new people and opportunities appear. If one connection does, Focus and Together remain optional mutual states — not a required journey.",
    gain: "A reason to return without infinite swiping",
    links: [
      { href: "/focus", label: "Focus" },
      { href: "/together", label: "Together" },
    ],
  },
] as const;

/**
 * Five-step path — Site A copy, zigzag spine (new pattern, not A icons or B mega list).
 */
export function HowItWorksPath() {
  return (
    <section className="pd-hiw-path" aria-labelledby="hiw-path-heading">
      <span className="pd-seam shell-x" aria-hidden />
      <div className="shell-x">
        <div className="pd-hiw-path-intro">
          <p className="pd-eyebrow">
            <span className="pd-accent-rule" aria-hidden />
            The use path
          </p>
          <h2 id="hiw-path-heading" className="pd-display pd-hiw-path-title">
            Five steps through a living local network.
          </h2>
          <p className="pd-hiw-path-lead">
            Join when there is enough relevant local activity. Discover through Duos and/or
            Squads. Keep exploring if nothing clicks — Focus and Together stay optional.
          </p>
        </div>

        <ol className="pd-hiw-spine">
          {steps.map((step, index) => (
            <li
              key={step.phase}
              className={`pd-hiw-step${index % 2 === 1 ? " is-right" : " is-left"}`}
            >
              <article className="pd-hiw-step-card">
                <p className="pd-hiw-step-phase">
                  <span className="pd-index-num">{String(index + 1).padStart(2, "0")}</span>
                  {step.phase}
                </p>
                <h3 className="pd-display pd-hiw-step-title">{step.title}</h3>
                <p className="pd-hiw-step-body">{step.body}</p>
                <p className="pd-hiw-step-gain">
                  <span className="pd-facet-mark" aria-hidden />
                  You get · {step.gain}
                </p>
                {step.links.length > 0 && (
                  <p className="pd-hiw-step-links">
                    {step.links.map((link) => (
                      <Link key={link.href} href={link.href} className="pd-text-link">
                        {link.label}
                        <span aria-hidden>&rarr;</span>
                      </Link>
                    ))}
                  </p>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function HowItWorksClose() {
  return (
    <section className="pd-hiw-close" aria-labelledby="hiw-close-heading">
      <span className="pd-seam shell-x" aria-hidden />
      <div className="shell-x pd-hiw-close-inner">
        <p className="pd-eyebrow">
          <span className="pd-accent-rule" aria-hidden />
          The rule underneath every step
        </p>
        <h2 id="hiw-close-heading" className="pd-display pd-hiw-close-title">
          If it isn’t mutual, nothing changes.
        </h2>
        <p className="pd-hiw-close-lead">
          A request never becomes a relationship state by itself. Focus and Together begin only
          after both people choose them independently — and either person can still leave
          respectfully.
        </p>
        <div className="pd-hiw-close-actions">
          <Link href="/early-access" className="pd-cta-warm pd-hiw-close-cta">
            Join the founding circle
          </Link>
          <Link href="/meet" className="pd-hiw-close-ghost">
            See how Duos works
          </Link>
        </div>
      </div>
    </section>
  );
}
