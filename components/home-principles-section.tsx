/**
 * Trust / principles — Site A content, Peach numbered heading rail.
 */
export function HomePrinciplesSection() {
  return (
    <section className="pd-principles" id="principles" aria-labelledby="principles-heading">
      <span className="pd-seam shell-x" aria-hidden />
      <div className="shell-x">
        <div className="pd-principles-body">
          <p className="pd-eyebrow pd-principles-eyebrow">
            <span className="pd-eyebrow-dot" aria-hidden />
            Trust before access
          </p>
          <h2 id="principles-heading" className="pd-mega pd-principles-title">
            Meet more people without giving up control
          </h2>

          <div className="pd-principle-list">
            <article className="pd-principle-row">
              <div className="pd-principle-icon" aria-hidden="true">
                <svg viewBox="0 0 120 120" fill="none">
                  <path
                    d="M28 86c0-4 2-8 8-12 8 14 40 14 48 0 6 4 8 8 8 12v6H28v-6Z"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinejoin="round"
                  />
                  <circle cx="60" cy="48" r="18" stroke="currentColor" strokeWidth="7" />
                  <path d="M78 78l16 12" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
                  <circle cx="96" cy="94" r="10" stroke="currentColor" strokeWidth="7" />
                  <path
                    d="M92 94l3 3 6-7"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="pd-principle-copy">
                <h3 className="pd-display">Reviewed access, not a guarantee</h3>
                <p>
                  Aynera reviews access and uses verification to increase confidence around who
                  enters the network .. but no check can guarantee how another person will behave
                </p>
              </div>
            </article>

            <article className="pd-principle-row pd-principle-row-reverse">
              <div className="pd-principle-icon" aria-hidden="true">
                <svg viewBox="0 0 120 120" fill="none">
                  <path
                    d="M28 38c0-8 8-16 20-16h32c12 0 20 8 20 16v28c0 8-8 16-20 16H58l-18 16v-16c-12 0-12-8-12-16V38Z"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinejoin="round"
                  />
                  <circle cx="60" cy="48" r="10" fill="currentColor" />
                  <path
                    d="M46 72c6-8 22-8 28 0"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="pd-principle-copy">
                <h3 className="pd-display">Get a real read first</h3>
                <p>
                  Start inside Aynera while you understand someone’s pace, intent and vibe .. your
                  phone number and social handles stay private until you decide to share them
                </p>
              </div>
            </article>

            <article className="pd-principle-row">
              <div className="pd-principle-icon" aria-hidden="true">
                <svg viewBox="0 0 120 120" fill="none">
                  <path
                    d="M38 78c0-18 14-30 22-30s22 12 22 30"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M48 48c0-10 6-16 12-16s12 6 12 16"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M44 34c4-10 12-14 16-8"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M76 34c-4-10-12-14-16-8"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <path d="M52 88h16" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
                </svg>
              </div>
              <div className="pd-principle-copy">
                <h3 className="pd-display">Make the first meet easier to plan safely</h3>
                <p>
                  For first meetings, Aynera encourages busy public places and recommended venues
                  where available .. you can share meeting details with someone you trust and use
                  simple check in tools
                </p>
                <p>Core safety tools stay free</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
