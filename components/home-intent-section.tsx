import Link from "next/link";

/**
 * Intent section — same scaffold as Why: rail + split + matched image size.
 */
export function HomeIntentSection() {
  return (
    <section className="pd-why pd-intent" id="intent" aria-labelledby="intent-heading">
      <span className="pd-seam shell-x" aria-hidden />
      <div className="shell-x">
        <div className="pd-why-layout pd-rail-right">
          <div className="pd-why-body">
            <div className="pd-why-split">
              <div className="pd-why-copy">
                <h2 id="intent-heading" className="pd-mega pd-why-title">
                  What would you be happy if this became?
                </h2>
                <p className="pd-why-text">
                  You do not need to decide whether you belong in a dating app or a matrimony app
                  before meeting someone
                </p>
                <p className="pd-why-text">
                  Tell Aynera what you would genuinely be open to if the right connection came along
                  .. and change it whenever life changes
                </p>
                <Link href="/start-with-clarity" className="pd-text-link">
                  Explore intent
                  <span aria-hidden>&rarr;</span>
                </Link>
              </div>

              <div className="pd-why-visual">
                <img
                  src="/media/elaris-focus-gallery-two.png"
                  alt="Two people in a calm conversation — open to what this could become"
                  width={1400}
                  height={1600}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="pd-why-rail">
            <span className="pd-vlabel pd-why-vlabel" aria-hidden>
              Intent, without a split
            </span>
            <span className="pd-why-rail-mobile">Intent, without a split</span>
          </div>
        </div>
      </div>
    </section>
  );
}
