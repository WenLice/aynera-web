import Link from "next/link";
import type { CSSProperties } from "react";

const feedItems = ["More profiles", "More swipes", "More noise"] as const;

export function WhyExistPreview() {
  return (
    <main id="main" className="why-preview">
      <header className="why-preview-hero shell-x">
        <div className="why-preview-hero-copy">
          <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Why Aynera exists</p>
          <h1 className="pd-display">More people is not the same as more possibility.</h1>
          <p>A bigger feed does not necessarily create a bigger life. Aynera is built to widen your real circle—and make meeting feel natural again.</p>
        </div>

        <div className="why-preview-hero-visual" aria-label="A crowded feed becoming a meaningful local circle">
          <div className="why-preview-feed" aria-hidden>
            {feedItems.map((item, index) => <span key={item} style={{ "--item": index } as CSSProperties}>{item}</span>)}
          </div>
          <span className="why-preview-circle-ring why-preview-circle-ring-one" aria-hidden />
          <span className="why-preview-circle-ring why-preview-circle-ring-two" aria-hidden />
          <span className="why-preview-circle-ring why-preview-circle-ring-three" aria-hidden />
          <div className="why-preview-circle">
            <span>Aynera</span>
            <strong className="pd-display">A real circle</strong>
            <p>People worth crossing paths with.</p>
          </div>
        </div>
      </header>

      <section className="why-preview-contrast" aria-labelledby="why-preview-contrast-title">
        <div className="shell-x">
          <div className="why-preview-section-head">
            <div className="why-preview-radius" aria-label="An everyday circle opening outward">
              <span className="why-preview-radius-small" aria-hidden><i /><i /><i /></span>
              <span className="why-preview-radius-path" aria-hidden>→</span>
              <span className="why-preview-radius-wide" aria-hidden><i /><i /><i /><i /><i /></span>
              <p>From the usual<br />to the possible</p>
            </div>
            <div>
              <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Beyond the usual circle</p>
              <h2 id="why-preview-contrast-title" className="pd-display">More profiles do not always create better opportunities.</h2>
            </div>
          </div>

          <div className="why-preview-contrast-grid">
            <article className="why-preview-feed-card">
              <span>What a feed gives you</span>
              <h3 className="pd-display">Endless options. Little movement.</h3>
              <p>Dating apps can show you more people than ever, but abundance can still leave you meeting no one new.</p>
              <div aria-hidden>
                <i /><i /><i /><i /><i /><i />
              </div>
            </article>
            <article className="why-preview-circle-card">
              <span>What a circle makes possible</span>
              <h3 className="pd-display">A more natural way in.</h3>
              <p>Aynera expands your circle with people you may genuinely want to know—and gives you more natural ways to cross paths.</p>
              <div className="why-preview-card-orbit" aria-hidden><b /><b /><b /></div>
            </article>
          </div>
        </div>
      </section>

      <section className="why-preview-close">
        <div className="shell-x">
          <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />More possibility, in real life</p>
          <h2 className="pd-display">Your next connection should not feel like a search result.</h2>
          <div>
            <Link href="/how-it-works">See how Aynera works <span aria-hidden>→</span></Link>
            <Link href="/early-access" className="pd-cta-warm">Join early access</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
