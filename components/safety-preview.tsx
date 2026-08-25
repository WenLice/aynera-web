import Link from "next/link";

const safeguards = [
  { title: "Verified before discovery", body: "Phone, email, and liveness checks happen before anyone appears in introductions." },
  { title: "Public by default", body: "First meets work best in busy public places and partner venues where available." },
  { title: "Your plan, your choice", body: "Set a venue and time, then use an optional check-in. No continuous live tracking." },
  { title: "Share with someone trusted", body: "Send the plan to a friend or family member without creating a location trail." },
  { title: "Report and block", body: "Blocking ends contact immediately, and reports remain open even after an offline date." },
  { title: "Human review when it matters", body: "Serious cases, appeals, and offline concerns are handled by trained people—not a bot alone." },
] as const;

export function SafetyPreview() {
  return (
    <main id="main" className="safety-preview">
      <header className="safety-preview-hero shell-x">
        <div className="safety-preview-hero-copy">
          <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Safety centre</p>
          <h1 className="pd-display">Your safety matters here and offline.</h1>
          <p>From first chat to offline dates, Focus, and Together, safety tools stay free. Serious reports get human review. If you’re in immediate danger, contact local emergency services.</p>
        </div>
        <div className="safety-preview-field" aria-label="Safety tools stay available across every step">
          <span className="safety-preview-field-ring safety-preview-field-ring-one" aria-hidden />
          <span className="safety-preview-field-ring safety-preview-field-ring-two" aria-hidden />
          <div className="safety-preview-field-core"><small>Safety stays</small><strong className="pd-display">with you</strong></div>
          <span className="safety-preview-field-note safety-preview-note-verify">Verify</span>
          <span className="safety-preview-field-note safety-preview-note-public">Meet public</span>
          <span className="safety-preview-field-note safety-preview-note-share">Share plan</span>
          <span className="safety-preview-field-note safety-preview-note-report">Report</span>
        </div>
      </header>

      <section className="safety-preview-net" aria-labelledby="safety-net-title">
        <div className="shell-x">
          <div className="safety-preview-net-head">
            <div>
              <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />A safety net, not a checklist</p>
              <h2 id="safety-net-title" className="pd-display">Support before, during, and after you meet.</h2>
            </div>
            <p>Nothing guarantees behaviour. Aynera is designed to make safer choices clearer, keep exits available, and ensure help is there when it matters.</p>
          </div>
          <div className="safety-preview-net-grid">
            {safeguards.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3 className="pd-display">{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="safety-preview-gatherings">
        <div className="shell-x">
          <div>
            <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />At Aynera gatherings</p>
            <h2 className="pd-display">In person should still feel considered.</h2>
          </div>
          <div className="safety-preview-gathering-rules">
            <article><span>Host presence</span><p>A visible host, public venue, clear conduct expectations, and an easy report route.</p></article>
            <article><span>Consent and contact</span><p>Photo consent before pictures. No forced pairings or contact-sharing.</p></article>
            <article><span>After the gathering</span><p>Post-event reporting stays open, and trusted-person sharing remains optional.</p></article>
          </div>
        </div>
      </section>

      <section className="safety-preview-close">
        <div className="shell-x">
          <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Need support?</p>
          <h2 className="pd-display">Safety should never feel like an afterthought.</h2>
          <div><Link href="/grievance">Contact our grievance channel <span aria-hidden>→</span></Link><Link href="/early-access" className="pd-cta-warm">Join the founding circle</Link></div>
        </div>
      </section>
    </main>
  );
}
