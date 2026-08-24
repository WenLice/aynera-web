import Link from "next/link";
import { HomeJourneyCta } from "@/components/home-journey-cta";

const ways = [
  {
    kicker: "01 / Duos",
    title: "Duos",
    body: [
      "A small number of relevant introductions .. with enough context to understand why meeting each other could be worth exploring.",
      "You talk first in a considered way .. so the next step feels clearer when you decide to meet.",
    ],
    href: "/duos",
    link: "Inside Duos",
    image: "/media/elaris-meet-module.png",
    alt: "A first introduction as someone walks over to connect",
    meetMode: "1:1",
  },
  {
    kicker: "02 / Squads",
    title: "Squads",
    body: [
      "Small social experiences around shared interests, energy and lifestyle .. a more natural way to meet than a formal date.",
      "You join a few people nearby .. so conversation can start without one-to-one pressure.",
    ],
    href: "/squads",
    link: "See Squads",
    image: "/media/elaris-gatherings-circle.png",
    alt: "A mixed group of friends sharing coffee in a cafe",
    meetMode: "gatherings",
  },
] as const;

/**
 * Section — Meet your way (Duos / Squads).
 */
export function HomeWaysSection() {
  return (
    <section className="pd-ways" id="meet-ways" aria-labelledby="ways-heading">
      <span className="pd-seam shell-x" aria-hidden />
      <div className="shell-x">
        <div className="pd-ways-layout pd-rail-right">
          <div className="pd-ways-rail">
            <span className="pd-vlabel pd-ways-vlabel" aria-hidden>
              Meet your way
            </span>
            <span className="pd-ways-rail-mobile">Meet your way</span>
          </div>

          <h2 id="ways-heading" className="pd-mega pd-ways-title">
            Meet directly .. or let something in common bring you together
          </h2>

          <div className="pd-ways-main">
            <div className="pd-ways-intro">
              <p className="pd-ways-lead">
                Some people prefer a direct introduction .. others connect more naturally while
                doing something they already enjoy
              </p>
            </div>

            <div className="pd-ways-rows">
              {ways.map((way, index) => (
                <article
                  key={way.href}
                  className={`pd-way-row${index % 2 === 1 ? " pd-way-row-flip" : ""}`}
                >
                  <div className="pd-way-copy">
                    <p className="pd-way-kicker-inline">{way.kicker}</p>
                    <h3 className="pd-display pd-way-title">{way.title}</h3>
                    <div className="pd-way-body">
                      {way.body.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    <Link
                      href={way.href}
                      className="pd-text-link"
                      data-analytics-view="meet_mode_view"
                      data-meet-mode={way.meetMode}
                    >
                      {way.link}
                      <span aria-hidden>&rarr;</span>
                    </Link>
                  </div>

                  <div className="pd-way-frame">
                    <img src={way.image} alt={way.alt} width={1100} height={880} loading="lazy" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <HomeJourneyCta />
    </section>
  );
}
