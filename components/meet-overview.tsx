import Link from "next/link";
import { MeetWaysIndex } from "@/components/meet-ways-index";

export function MeetOverview() {
  return <main id="main" className="pd-meet-overview pd-meet-new">
    <header className="pd-meet-new-hero">
      <div className="shell-x pd-meet-new-hero-grid">
        <div className="pd-meet-new-hero-copy">
          <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Meet</p>
          <h1 className="pd-mega">Meet beyond your usual circle.</h1>
          <p>Meet is the first chapter of Aynera: a thoughtful way to discover people you may genuinely want to know, with enough context to make the next conversation feel worth beginning.</p>
          <a href="#choose-your-way" className="pd-meet-new-jump">See how Meet works <span aria-hidden>↓</span></a>
        </div>
        <div className="pd-meet-new-collage" aria-label="Two ways people can meet through Aynera">
          <figure className="pd-meet-new-photo pd-meet-new-photo-duo"><img src="/media/elaris-meet-table.png" alt="Two people getting to know each other over coffee" width="1536" height="1024" /></figure>
          <figure className="pd-meet-new-photo pd-meet-new-photo-squad"><img src="/media/elaris-gatherings-cafe.png" alt="A small group connecting around a shared café table" width="1200" height="900" /></figure>
        </div>
      </div>
    </header>

    <section id="choose-your-way" className="pd-meet-new-paths" aria-labelledby="meet-ways-heading">
      <div className="shell-x">
        <div className="pd-meet-new-intro">
          <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Choose your way</p>
          <h2 id="meet-ways-heading" className="pd-display">Begin where you feel most like yourself.</h2>
          <p>You can choose either path, or keep both open. They lead into the same thoughtful local network.</p>
        </div>
      </div>
      <MeetWaysIndex />
    </section>

    <section className="pd-meet-new-common">
      <div className="shell-x">
        <div className="pd-meet-new-common-head"><p className="pd-eyebrow">The common ground</p><h2 className="pd-display">Different beginnings.<br />The same standard.</h2></div>
        <div className="pd-meet-new-principles">
          <article><span>01</span><h3>Enough context</h3><p>Know why an introduction or gathering may be worth your time.</p></article>
          <article><span>02</span><h3>Mutual pace</h3><p>Nothing moves forward unless the people involved choose it.</p></article>
          <article><span>03</span><h3>Real-world care</h3><p>Public settings, clear expectations, and safety that stays visible.</p></article>
        </div>
        <div className="pd-meet-new-common-actions"><Link href="/focus">Continue to Focus <span aria-hidden>→</span></Link><Link href="/safety">See how safety works</Link></div>
      </div>
    </section>
  </main>;
}
