import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next section options — pick one",
  robots: { index: false, follow: false },
};

const explore = [
  { label: "Safety centre", href: "/safety", note: "Verification, public places, human review" },
  { label: "Track", href: "/track", note: "Fluid or Intent — pick your pace" },
  { label: "Chapters", href: "/chapters", note: "Meet · Focus · Together · Era ahead" },
  { label: "Why come back", href: "/return", note: "A network that keeps changing" },
];

const notHere = [
  {
    title: "No endless feed",
    body: "You get a small set of considered introductions and real local gatherings — not a slot machine designed to keep your thumb moving.",
  },
  {
    title: "No unilateral relationship mode",
    body: "A request never becomes a relationship state by itself. Focus and Together need two independent yeses.",
  },
  {
    title: "No safety behind a paywall",
    body: "Reporting, blocking, and date-safety sharing stay free for everyone.",
  },
  {
    title: "No invented match scores",
    body: "We never fake a compatibility percentage. We show why an introduction was made, in plain words.",
  },
];

const faqs = [
  {
    q: "How is Aynera different from a swipe app?",
    a: "Introductions are limited and explained, and you can also meet through small Taste gatherings. When two people choose Focus, discovery pauses for both.",
  },
  {
    q: "What exactly is Taste?",
    a: "Taste is the way you actually live — what you enjoy, how you spend your time, your social rhythm, food, movement, culture and hobbies.",
  },
  {
    q: "Do I have to pick dating or matrimony?",
    a: "No. You say what you would genuinely be happy for a connection to become, and you can change it whenever life changes.",
  },
  {
    q: "Which cities are open?",
    a: "Delhi NCR is opening first, with Bangalore and Mumbai as next-city interest.",
  },
];

const options = [
  { id: "suggest", name: "A · Suggest / We’re listening", source: "Site A leftover", note: "Sticky-note board + feedback CTAs. Last unmigrated homepage block." },
  { id: "taste", name: "B · Taste", source: "Site B homepage", note: "Short editorial on what Taste means, with a link to gatherings." },
  { id: "explore", name: "C · Explore", source: "Site B homepage", note: "Index list into Safety, Track, Chapters, Why come back." },
  { id: "closing", name: "D · Closing CTA", source: "Site B homepage", note: "Deep plum founding-circle band — strong end before the footer." },
  { id: "app", name: "E · App preview", source: "Site B component", note: "Dark band + intro card mock. Not on Site B homepage today." },
  { id: "nothere", name: "F · Not here", source: "Site B component", note: "Two-column ledger of what Aynera deliberately leaves out." },
  { id: "faq", name: "G · FAQ", source: "Site B component", note: "Accordion-style questions people ask first." },
];

export default function SectionOptionsPage() {
  return (
    <main className="pd-section-options">
      <header className="shell-x pd-section-options-hero">
        <p className="pd-eyebrow">
          <span className="pd-accent-rule" aria-hidden />
          Preview only
        </p>
        <h1 className="pd-mega pd-section-options-title">Pick the next homepage section</h1>
        <p className="pd-section-options-lede">
          Everything below is a candidate after Weekend Surprise. Scroll each option, then tell me
          the letter to ship (A–G).
        </p>
        <nav className="pd-section-options-nav" aria-label="Options">
          {options.map((option) => (
            <a key={option.id} href={`#${option.id}`}>
              {option.name.split(" · ")[0]}
            </a>
          ))}
        </nav>
        <p className="pd-section-options-back">
          <Link href="/">← Back to homepage</Link>
        </p>
      </header>

      {options.map((option) => (
        <div key={option.id} id={option.id} className="pd-section-options-block">
          <div className="shell-x pd-section-options-meta">
            <h2>{option.name}</h2>
            <p>
              <strong>{option.source}</strong> — {option.note}
            </p>
          </div>

          {option.id === "suggest" && (
            <section className="pd-opt-suggest">
              <div className="shell-x pd-opt-suggest-grid">
                <div className="pd-opt-suggest-board" aria-hidden>
                  <article className="pd-opt-note pd-opt-note-1">
                    <p>“Meet someone you probably would not have crossed paths with otherwise”</p>
                  </article>
                  <article className="pd-opt-note pd-opt-note-2">
                    <p>“Fewer profiles .. better reasons to meet”</p>
                  </article>
                  <article className="pd-opt-note pd-opt-note-3">
                    <p>“The best connections still have to be mutual”</p>
                  </article>
                </div>
                <div>
                  <p className="pd-eyebrow">
                    <span className="pd-accent-rule" aria-hidden />
                    We’re listening
                  </p>
                  <h3 className="pd-mega pd-opt-heading">
                    We are building this with the people who will actually use it
                  </h3>
                  <p className="pd-opt-copy">
                    Tell us what feels broken about meeting people today .. what would make you trust
                    a new platform and what would make you never use one
                  </p>
                  <p className="pd-opt-copy">
                    Real experiences should shape the founding version of Aynera .. not only our
                    assumptions
                  </p>
                  <div className="pd-opt-actions">
                    <Link href="/suggest" className="pd-cta-warm pd-opt-btn">
                      Share your thoughts
                    </Link>
                    <Link href="/grievance" className="pd-text-link">
                      Need the grievance channel?
                      <span aria-hidden>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}

          {option.id === "taste" && (
            <section className="pd-opt-plain">
              <div className="shell-x">
                <div className="pd-opt-with-rail">
                  <span className="pd-vlabel" aria-hidden>
                    Taste
                  </span>
                  <div>
                    <p className="pd-eyebrow">
                      <span className="pd-accent-rule" aria-hidden />
                      What is Taste?
                    </p>
                    <h3 className="pd-mega pd-opt-heading-lg">The way you actually live.</h3>
                    <p className="pd-opt-copy pd-opt-copy-wide">
                      Food, movement, culture, social rhythm — context around people, never a
                      compatibility score.
                    </p>
                    <Link href="/gatherings" className="pd-text-link">
                      How Taste brings people together
                      <span aria-hidden>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}

          {option.id === "explore" && (
            <section className="pd-opt-plain">
              <div className="shell-x">
                <div className="pd-opt-with-rail">
                  <span className="pd-vlabel" aria-hidden>
                    Explore
                  </span>
                  <div>
                    <p className="pd-eyebrow">
                      <span className="pd-accent-rule" aria-hidden />
                      Keep reading
                    </p>
                    <h3 className="pd-mega pd-opt-heading">Everything else, in its own place.</h3>
                    <ul className="pd-opt-explore-list">
                      {explore.map((item, index) => (
                        <li key={item.href}>
                          <Link href={item.href} className="pd-index-row">
                            <span className="pd-index-num">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span>
                              <span className="pd-display pd-opt-explore-label">{item.label}</span>
                              <span className="pd-opt-explore-note">{item.note}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}

          {option.id === "closing" && (
            <section className="pd-opt-closing">
              <div className="shell-x">
                <p className="pd-eyebrow pd-opt-closing-eyebrow">
                  <span className="pd-accent-rule" aria-hidden />
                  Founding circle
                </p>
                <h3 className="pd-mega pd-opt-closing-title">
                  Be there when something intentional begins.
                </h3>
                <div className="pd-opt-closing-row">
                  <p>
                    Join the founding circle. When Aynera opens your city, your invitation arrives
                    first.
                  </p>
                  <div className="pd-opt-closing-actions">
                    <Link href="/early-access" className="pd-opt-closing-primary">
                      Join early access
                    </Link>
                    <Link href="/safety" className="pd-opt-closing-secondary">
                      Read the safety centre
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}

          {option.id === "app" && (
            <section className="pd-opt-closing pd-opt-app">
              <div className="shell-x pd-opt-app-grid">
                <div>
                  <p className="pd-eyebrow pd-opt-closing-eyebrow">
                    <span className="pd-accent-rule" aria-hidden />
                    Inside the app
                  </p>
                  <h3 className="pd-mega pd-opt-closing-title pd-opt-app-title">
                    Every introduction comes with a reason.
                  </h3>
                  <p className="pd-opt-app-copy">
                    No score, no ranking, no mystery algorithm bragging. You see why you were
                    introduced, what you share, and one clear next step.
                  </p>
                  <ul className="pd-opt-app-list">
                    {[
                      "A small, considered set — never an endless feed",
                      "Focus pauses discovery only when both people choose it",
                      "Date-safety share built into the chat",
                    ].map((line, index) => (
                      <li key={line}>
                        <span className="pd-index-num">{String(index + 1).padStart(2, "0")}</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pd-opt-app-card">
                  <div className="pd-opt-app-card-top">
                    <span>Today&apos;s introduction</span>
                    <span>1 / 3</span>
                  </div>
                  <div className="pd-opt-app-frame">
                    <img
                      src="/media/elaris-meet-gallery.png"
                      alt=""
                      width={800}
                      height={520}
                      loading="lazy"
                    />
                  </div>
                  <p className="pd-display pd-opt-app-name">Ananya, 29</p>
                  <p className="pd-opt-app-meta">Delhi NCR · Verified · Open to a relationship</p>
                  <div className="pd-opt-app-why">
                    <p className="pd-index-num">Why you two</p>
                    <p>
                      You both said you&apos;d be happy if this became a relationship, and you both
                      keep Sunday mornings unplanned.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {option.id === "nothere" && (
            <section className="pd-opt-plain">
              <div className="shell-x">
                <div className="pd-opt-with-rail">
                  <span className="pd-vlabel" aria-hidden>
                    Left out
                  </span>
                  <div>
                    <p className="pd-eyebrow">
                      <span className="pd-accent-rule" aria-hidden />
                      Deliberately missing
                    </p>
                    <h3 className="pd-mega pd-opt-heading">What you won&apos;t find on Aynera.</h3>
                    <ul className="pd-opt-nothere-grid">
                      {notHere.map((item, index) => (
                        <li key={item.title}>
                          <span className="pd-index-num">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h4 className="pd-display">{item.title}</h4>
                          <p>{item.body}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}

          {option.id === "faq" && (
            <section className="pd-opt-plain">
              <div className="shell-x">
                <div className="pd-opt-with-rail">
                  <span className="pd-vlabel" aria-hidden>
                    Questions
                  </span>
                  <div className="pd-opt-faq-grid">
                    <div>
                      <p className="pd-eyebrow">
                        <span className="pd-accent-rule" aria-hidden />
                        Questions
                      </p>
                      <h3 className="pd-display pd-opt-heading">The things people ask first.</h3>
                    </div>
                    <div>
                      {faqs.map((item) => (
                        <details key={item.q} className="pd-opt-faq-item">
                          <summary>{item.q}</summary>
                          <p>{item.a}</p>
                        </details>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      ))}
    </main>
  );
}
