import Link from "next/link";

const reasons = [
  {
    label: "People",
    title: "New reviewed people",
    body: "A local network changes as new members become available nearby. The reason to return is not an infinite feed, but a circle that keeps becoming more relevant.",
  },
  {
    label: "Opportunities",
    title: "New ways to cross paths",
    body: "A thoughtful introduction, a coffee circle, a food walk, or a small Sunday plan can appear when the city is ready for it.",
  },
  {
    label: "Honesty",
    title: "No fake urgency",
    body: "Aynera will not invent attendee counts, activity, or countdowns. Density is the product. If a city is not ready yet, the waitlist should say so plainly.",
  },
] as const;

export function ReturnOverview() {
  return (
    <main id="main" className="return-overview">
      <header className="return-overview-hero shell-x">
        <div className="return-overview-copy">
          <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Reasons to Return</p>
          <h1 className="pd-display">If nothing clicks this week, your world does not stay the same.</h1>
          <p>Aynera should feel like a living local network: new people, new rooms, and new reasons to step back in without starting from zero.</p>
        </div>
        <div className="return-hero-signal" aria-label="People, plans, and timing keep changing">
          <span className="return-signal-ring return-signal-ring-one" aria-hidden />
          <span className="return-signal-ring return-signal-ring-two" aria-hidden />
          <div className="return-signal-core">
            <small>The local circle</small>
            <strong className="pd-display">keeps moving</strong>
          </div>
          <span className="return-signal-note return-signal-people">People</span>
          <span className="return-signal-note return-signal-plans">Plans</span>
          <span className="return-signal-note return-signal-timing">Timing</span>
        </div>
      </header>

      <section className="return-loop" aria-labelledby="return-loop-title">
        <div className="shell-x">
          <div className="return-loop-head">
            <div>
              <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />A network that moves</p>
              <h2 id="return-loop-title" className="pd-display">Return because the circle changed.</h2>
            </div>
            <p>Not every visit has to become a match. Sometimes the point is that the local world is becoming warmer, denser, and easier to enter.</p>
          </div>

          <div className="return-orbit" aria-label="Three reasons to return to Aynera">
            <span className="return-orbit-ring return-orbit-ring-one" aria-hidden />
            <span className="return-orbit-ring return-orbit-ring-two" aria-hidden />
            <div className="return-orbit-core">
              <span>Aynera</span>
              <strong>Living local network</strong>
              <p>Not a static stack.</p>
            </div>
            {reasons.map((reason) => (
              <article key={reason.label}>
                <span>{reason.label}</span>
                <h3 className="pd-display">{reason.title}</h3>
                <p>{reason.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="return-rhythm">
        <div className="shell-x">
          <div>
            <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />The rhythm</p>
            <h2 className="pd-display">A calmer reason to come back.</h2>
          </div>
          <div className="return-rhythm-list">
            <article>
              <h3>See what is newly relevant</h3>
              <p>Fresh reviewed members and changing availability can make a different introduction possible.</p>
            </article>
            <article>
              <h3>Choose the way that fits</h3>
              <p>Return through Duos, Squads, or Weekend Surprise, depending on how social you want the next step to feel.</p>
            </article>
            <article>
              <h3>Leave without losing the thread</h3>
              <p>If the week is not right, nothing has failed. The network keeps moving, and you can come back when it feels natural.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="return-close">
        <div className="shell-x">
          <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />When the city changes, return</p>
          <h2 className="pd-display">A living circle beats an endless stack.</h2>
          <div>
            <Link href="/early-access" className="pd-cta-warm">Join the founding circle</Link>
            <Link href="/meet">See how Meet works <span aria-hidden>→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
