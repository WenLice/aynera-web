import Link from "next/link";

/**
 * If something clicks — Focus / Together (Site A content, Peach scaffold).
 * Left rail — continues L/R alternation after Saturday surprise (right).
 */
export function HomeClicksSection() {
  return (
    <section className="pd-why pd-clicks" id="if-it-clicks" aria-labelledby="clicks-heading">
      <span className="pd-seam shell-x" aria-hidden />
      <div className="shell-x">
        <div className="pd-why-layout">
          <div className="pd-why-rail">
            <span className="pd-vlabel pd-why-vlabel" aria-hidden>
              If something clicks
            </span>
            <span className="pd-why-rail-mobile">If something clicks</span>
          </div>

          <div className="pd-why-body">
            <div className="pd-why-split">
              <div className="pd-why-copy">
                <h2 id="clicks-heading" className="pd-mega pd-why-title">
                  When you choose each other, we stop the search
                </h2>
                <p className="pd-why-text">
                  If one connection starts becoming more important, Focus lets both people mutually
                  pause new discovery and give that connection more attention
                </p>
                <p className="pd-why-text">
                  If you later choose exclusivity, Together removes both of you from discovery .. both
                  states are optional and your relationship does not have to stay inside Aynera
                </p>
                <div className="pd-why-actions">
                  <Link href="/focus" className="pd-text-link">
                    Focus
                    <span aria-hidden>&rarr;</span>
                  </Link>
                  <Link href="/together" className="pd-text-link">
                    Together
                    <span aria-hidden>&rarr;</span>
                  </Link>
                </div>
              </div>

              <div className="pd-why-visual">
                <img
                  src="/media/together-hands.png"
                  alt="Two people choosing each other, hand in hand"
                  width={1400}
                  height={1600}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
