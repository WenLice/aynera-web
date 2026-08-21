import { createFileRoute, Link } from "@tanstack/react-router";
import { ClosingCta, Eyebrow, PageHero, Reveal, Section } from "@/components/primitives";
import { journeySteps } from "@/lib/site-content";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How Elaris works — join, build context, discover, meet" },
      {
        name: "description",
        content:
          "Five steps through a living local network: join when it's ready, build context, discover through 1:1 intros or Taste gatherings, meet safely, and keep exploring.",
      },
      { property: "og:title", content: "How Elaris works" },
      {
        property: "og:description",
        content: "Join a local network and meet in more than one way — Focus and Together stay optional.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowItWorks,
});

function HowItWorks() {
  return (
    <main id="main">
      <PageHero
        eyebrow="How it works"
        title={
          <>
            Join a local network.
            <br />
            Meet in more than one way.
          </>
        }
        lead="Not every Elaris session has to end in Focus or Together. You may simply meet new people, exchange contact details, return next week, or leave after finding someone."
        tags={["No endless feed", "No unilateral relationship mode", "No fake urgency"]}
      />

      <Section>
        <Reveal>
          <Eyebrow>The use path</Eyebrow>
          <h2 className="display mt-6 max-w-3xl text-[clamp(2rem,4.2vw,3.2rem)]">
            Five steps through a living local network.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-cream-dim">
            Join when there is enough relevant local activity. Discover through 1:1 introductions
            and/or small Taste gatherings. Keep exploring if nothing clicks — Focus and Together
            stay optional.
          </p>
        </Reveal>


        <ol className="mt-16 border-t border-line">
          {journeySteps.map((step, i) => (
            <Reveal as="li" key={step.step} delay={i * 60}>
              <div className="grid gap-6 border-b border-line py-12 md:grid-cols-[10rem_1fr]">
                <div>
                  <span className="display text-5xl text-plum/15">0{i + 1}</span>
                  <p className="mt-2 text-xs tracking-[0.22em] text-peach-deep uppercase">{step.step}</p>
                </div>
                <div className="max-w-2xl">
                  <h3 className="display text-[clamp(1.5rem,2.6vw,2.1rem)]">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream-dim">{step.body}</p>
                  <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs text-cream-dim">
                    <span className="facet-mark" aria-hidden /> You get · {step.gain}
                  </p>
                  {step.link && (
                    <div className="mt-6">
                      <Link
                        to={step.link.to as never}
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-peach-deep hover:text-plum"
                      >
                        {step.link.label}
                        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section>
        <Reveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>The rule underneath every step</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2rem,4vw,3.2rem)]">
              If it isn't mutual, nothing changes.
            </h2>
          </div>
          <p className="self-end text-lg leading-relaxed text-cream-dim">
            A request never becomes a relationship state by itself. Focus and Together begin only
            after both people choose them independently — and either person can still leave
            respectfully.
          </p>
        </Reveal>
      </Section>

      <ClosingCta
        title="Ready to move through it?"
        body="Join the founding circle and we'll invite you when your local network is ready."
        secondary={{ label: "See how Meet works", to: "/meet" }}
      />

    </main>
  );
}
