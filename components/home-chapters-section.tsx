import Link from "next/link";

const chapters = [
  {
    name: "Meet",
    href: "/meet",
    summary: "A small number of relevant introductions, each with a reason.",
  },
  {
    name: "Focus",
    href: "/focus",
    summary: "An optional, mutual pause on new discovery for one connection.",
  },
  {
    name: "Together",
    href: "/together",
    summary: "Both people confirm exclusivity — discovery stops for both of you.",
  },
  {
    name: "Era ahead",
    href: "/era-ahead",
    summary: "Future relationship tools shaped with the founding cohort.",
  },
] as const;

/**
 * Chapters — Meet → Focus → Together → Era ahead (Site B framing, product context).
 */
export function HomeChaptersSection() {
  return (
    <section className="pd-chapters" id="chapters" aria-labelledby="chapters-heading">
      <span className="pd-seam shell-x" aria-hidden />
      <div className="shell-x">
        <div className="pd-chapters-layout">
          <div className="pd-chapters-rail">
            <span className="pd-vlabel pd-chapters-vlabel" aria-hidden>
              Chapters
            </span>
            <span className="pd-chapters-rail-mobile">Chapters</span>
          </div>

          <div className="pd-chapters-body">
            <div className="pd-chapters-grid">
              <ol className="pd-chapters-list">
                {chapters.map((chapter) => (
                  <li key={chapter.href} className="pd-index-row pd-chapters-row">
                    <span className="pd-flow-mark" aria-hidden>
                      <span className="pd-flow-mark-dot" />
                    </span>
                    <Link href={chapter.href} className="pd-chapters-row-copy">
                      <span className="pd-display pd-chapters-name">{chapter.name}</span>
                      <span className="pd-chapters-summary">{chapter.summary}</span>
                    </Link>
                  </li>
                ))}
              </ol>

              <header className="pd-chapters-head">
                <h2 id="chapters-heading" className="pd-mega pd-chapters-title">
                  One journey, told in four chapters.
                </h2>
                <p className="pd-chapters-lead">
                  Each chapter has one clear job — from meeting someone worth knowing to what two
                  people build after they choose each other. Focus and Together stay optional.
                </p>
                <Link href="/chapters" className="pd-text-link pd-chapters-cta">
                  Explore the chapters
                  <span aria-hidden>&rarr;</span>
                </Link>
              </header>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
