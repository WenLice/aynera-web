import Link from "next/link";

const moments = [
  { number: "01", label: "Attention", title: "Fewer introductions on purpose", body: "In the pilot, you receive a small set of thoughtful introductions. Scarcity protects attention, so you can actually notice someone instead of learning to discard faces in seconds." },
  { number: "02", label: "Context", title: "A reason you might connect", body: "Every introduction comes with plain-language context: pace, intent, distance, and shared interests. No compatibility percentage. Just enough signal to begin well." },
  { number: "03", label: "Conversation", title: "Talk before sharing contact", body: "Conversation opens through controlled, mutual interaction—not unlimited cold messages. Numbers and social profiles stay private until sharing them feels right." },
  { number: "04", label: "Safety", title: "Meet safely, online and off", body: "Choose a public place, create a date plan, use an optional check-in, and share the plan with someone you trust." },
] as const;

export function MeetTablePreview() {
  return <main id="main" className="duos-preview">
    <header className="duos-preview-hero shell-x">
      <div className="duos-preview-hero-copy">
        <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />01 · Duos</p>
        <h1 className="pd-display">Meet people<br />worth knowing.</h1>
        <p>A few thoughtful one-to-one introductions. Limited, explained, and meant to become real conversation—without an endless feed.</p>
        <a href="#inside-duos">Follow one introduction <span aria-hidden>↓</span></a>
      </div>
      <figure className="duos-preview-hero-photo">
        <img src="/media/aynera-meet-hero-v2.png" alt="Two people enjoying an attentive conversation over coffee" width="1536" height="1024" />
        <figcaption><span>One introduction</span><span>Two people</span><span>Mutual pace</span></figcaption>
      </figure>
    </header>

    <section id="inside-duos" className="duos-preview-story" aria-labelledby="duos-story-title">
      <div className="shell-x duos-preview-story-head">
        <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Inside this chapter</p>
        <h2 id="duos-story-title" className="pd-display">A good conversation<br />begins before hello.</h2>
        <p>Intent, location, taste, and reciprocal eligibility can inform who you see. Aynera explains the introduction without reducing either person to a score.</p>
      </div>

      <div className="duos-preview-thread shell-x">
        <span className="duos-preview-line" aria-hidden />
        {moments.map((moment) => <article className="duos-preview-moment" key={moment.number}>
          <div className="duos-preview-node" aria-hidden>{moment.number}</div>
          <div className="duos-preview-note">
            <p>{moment.label}</p><h3 className="pd-display">{moment.title}</h3><p>{moment.body}</p>
            {moment.number === "04" && <Link href="/safety">See the Safety centre <span aria-hidden>→</span></Link>}
          </div>
        </article>)}
      </div>
    </section>

    <section className="duos-preview-close">
      <div className="shell-x">
        <span className="duos-preview-pair" aria-hidden><i /><i /></span>
        <p className="pd-eyebrow">When one good introduction is enough</p>
        <h2 className="pd-display">Ready to meet with<br />more intention?</h2>
        <p>Join the founding circle and help shape a calmer way to meet.</p>
        <div><Link className="pd-cta-warm" href="/early-access">Join the founding circle</Link><Link href="/squads">Explore Squads <span aria-hidden>→</span></Link></div>
      </div>
    </section>
  </main>;
}
