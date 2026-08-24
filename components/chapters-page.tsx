import Link from "next/link";

const chapters = [
  {
    number: "01",
    name: "Meet",
    title: "Meet people worth knowing.",
    body: "A few thoughtful introductions with a clear reason to pay attention. There is no endless feed: just enough context to begin a real conversation, at your own pace.",
    detail: "Fewer people. Deeper starts.",
    href: "/meet",
    image: "/media/elaris-meet-module.png",
    alt: "A person walking over for a first introduction",
  },
  {
    number: "02",
    name: "Focus",
    title: "Give one person your full attention.",
    body: "Focus is a protected window for two people who want to explore seriously, without new faces pulling their attention away. It begins only when both people agree.",
    detail: "Mutual, time-bound, and easy to leave with care.",
    href: "/focus",
    image: "/media/elaris-focus-gallery-two.png",
    alt: "Two people in a calm conversation",
  },
  {
    number: "03",
    name: "Together",
    title: "When you choose each other, the search stops.",
    body: "Both people confirm exclusivity, and discovery pauses for real. The product steps aside so the relationship has room to begin — with a respectful way forward if either person changes their mind.",
    detail: "A commitment chapter, never a cage.",
    href: "/together",
    image: "/media/elaris-together-us.png",
    alt: "A couple sharing a quiet moment at home",
  },
  {
    number: "04",
    name: "Era",
    title: "What comes after just us.",
    body: "Aynera starts with dating done differently. Era is the space for what can grow after two people choose each other, shaped slowly with the people living that next chapter.",
    detail: "Future tools, earned over time.",
    href: "/era-ahead",
    image: "/media/elaris-era-ahead-gallery.png",
    alt: "A couple looking toward a shared horizon",
  },
] as const;

export function ChaptersPage() {
  return (
    <main id="main" className="pd-chapters-page">
      <header className="pd-chapters-page-hero">
        <div className="shell-x">
          <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Chapters</p>
          <h1 className="pd-mega">One journey.<br />Four chapters.</h1>
          <p>
            A more intentional path from the first conversation to what two people choose to build.
            Each chapter has a clear purpose; Focus and Together always remain mutual and optional.
          </p>
        </div>
      </header>

      <section className="pd-chapters-page-list" aria-label="The four chapters">
        {chapters.map((chapter) => (
          <article id={chapter.name.toLowerCase()} key={chapter.name} className="pd-chapter-panel">
            <div className="shell-x pd-chapter-panel-grid">
              <div className="pd-chapter-panel-image"><img src={chapter.image} alt={chapter.alt} width={1200} height={900} /></div>
              <div className="pd-chapter-panel-copy">
                <p className="pd-chapter-panel-mark"><span>{chapter.number}</span>{chapter.name}</p>
                <h2 className="pd-display">{chapter.title}</h2>
                <span className="pd-chapter-panel-rule" aria-hidden />
                <p>{chapter.body}</p>
                <p className="pd-chapter-panel-detail">{chapter.detail}</p>
                <Link href={chapter.href}>Explore {chapter.name} <span aria-hidden>→</span></Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="pd-chapters-page-close">
        <div className="shell-x">
          <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Your pace, your choice</p>
          <h2 className="pd-display">A different way to begin.</h2>
          <p>Register your interest to be part of Aynera’s founding circle in Delhi, Mumbai, or Bangalore.</p>
          <Link href="/early-access" className="pd-cta-warm">Join the founding circle</Link>
        </div>
      </section>
    </main>
  );
}
