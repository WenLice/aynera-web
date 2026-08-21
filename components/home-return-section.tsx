import Link from "next/link";

/**
 * Why come back — image left + content right, side label on the left.
 */
export function HomeReturnSection() {
  return (
    <section className="pd-why pd-return" id="return" aria-labelledby="return-heading">
      <span className="pd-seam shell-x" aria-hidden />
      <div className="shell-x">
        <div className="pd-why-layout">
          <div className="pd-why-rail">
            <span className="pd-vlabel pd-why-vlabel" aria-hidden>
              Why come back
            </span>
            <span className="pd-why-rail-mobile">Why come back</span>
          </div>

          <div className="pd-why-body">
            <div className="pd-why-split pd-why-split-flip">
              <div className="pd-why-visual">
                <img
                  src="/media/elaris-meet-gallery.png"
                  alt="People sharing a warm conversation in a public place"
                  width={1400}
                  height={1600}
                  loading="lazy"
                />
              </div>

              <div className="pd-why-copy">
                <h2 id="return-heading" className="pd-mega pd-why-title">
                  Still single next week? Your circle has already changed
                </h2>
                <p className="pd-why-text">
                  New people join .. new introductions become relevant .. new Squads appear
                </p>
                <p className="pd-why-text">
                  Aynera is designed to feel like a changing social world .. not the same pile of
                  profiles waiting for another swipe
                </p>
                <Link href="/early-access" className="pd-text-link">
                  Join the founding circle
                  <span aria-hidden>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
