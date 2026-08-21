import { createFileRoute } from "@tanstack/react-router";
import {
  ClosingCta,
  Eyebrow,
  Reveal,
  Section,
  SectionHead,
  TextLink,
} from "@/components/primitives";
import { Ticker } from "@/components/home-sections";
import { journeySteps, meetWays } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elaris — a better way to meet beyond your usual circle" },
      {
        name: "description",
        content:
          "Meet people you may not have crossed paths with otherwise — through thoughtful 1:1 introductions and small Taste gatherings in your local Elaris network.",
      },
      { property: "og:title", content: "Elaris — your circle could be bigger" },
      {
        property: "og:description",
        content:
          "Thoughtful 1:1 introductions and small Taste-based gatherings inside one local network.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const tickerItems = [
  "Coffee circles",
  "Verified people",
  "Taste, not scores",
  "Food walks",
  "Intent you can change",
  "Small rooms",
  "Delhi NCR",
  "No endless feed",
  "Bangalore next",
];

const explore = [
  { label: "Safety centre", to: "/safety", note: "Verification, public places, human review" },
  { label: "Track", to: "/track", note: "Fluid or Intent — pick your pace" },
  { label: "Chapters", to: "/chapters", note: "Meet · Focus · Together · Era ahead" },
  { label: "Why come back", to: "/return", note: "A network that keeps changing" },
];

function Home() {
  return (
    <main id="main">
      {/* ── Masthead ─────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 lg:pt-40">
        <div className="rule-grid hidden lg:block" aria-hidden />
        <div className="shell-x">
          <div className="grid gap-8 lg:grid-cols-[6rem_minmax(0,1fr)] lg:gap-0">
            <span className="vlabel hidden self-start lg:inline-block" aria-hidden>
              Est. Delhi NCR
            </span>
            <Reveal>
              <Eyebrow>A better way to meet beyond your usual circle</Eyebrow>
              <h1 className="mega mt-9 text-[clamp(3rem,10.5vw,8.5rem)]">
                Your circle
                <br />
                could be <span className="text-peach-deep">bigger.</span>
              </h1>
            </Reveal>
          </div>

          <div className="mt-14 lg:mt-20">
            <Ticker items={tickerItems} />
          </div>
        </div>
      </section>

      {/* ── 01 · Why ─────────────────────────────── */}
      <Section index="01" label="Why Elaris" divider={false} className="py-28 lg:py-40">
        <Reveal>
          <p className="mega max-w-4xl text-[clamp(2rem,5vw,3.8rem)]">
            More people is not the same as{" "}
            <span className="text-peach-deep">more possibility.</span>
          </p>
          <p className="lede mt-10 max-w-xl">
            So Elaris keeps the circle small, local and explained.
          </p>
        </Reveal>
      </Section>

      {/* ── 02 · Two ways in ─────────────────────── */}
      <Section id="ways" index="02" label="Two ways in" className="py-28 lg:py-40">
        <SectionHead kicker="Meet your way" title="Two ways to cross paths." />

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-10">
          {meetWays.map((way, i) => (
            <Reveal key={way.title} delay={i * 90} className="group">
              <div className="frame relative">
                <img
                  src={
                    i === 0 ? "/media/elaris-meet-module.webp" : "/media/elaris-collage-sunday.webp"
                  }
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="duo h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] lg:h-80"
                />
                <div className="grain-veil absolute inset-0" aria-hidden />
                <p className="absolute bottom-5 left-6 z-10 text-xs font-bold tracking-[0.22em] text-parchment uppercase">
                  {way.kicker}
                </p>
              </div>
              <h3 className="display mt-8 text-[clamp(1.5rem,2.6vw,2.1rem)]">{way.title}</h3>
              <div className="mt-6">
                <TextLink to={way.to}>{way.link}</TextLink>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── 03 · The flow ────────────────────────── */}
      <Section index="03" label="The flow" className="py-28 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-[20rem_minmax(0,1fr)] lg:gap-20">
          <Reveal className="rail-sticky">
            <Eyebrow>How it moves</Eyebrow>
            <h2 className="display mt-6 text-[clamp(1.9rem,3.4vw,2.7rem)]">
              One network, five honest steps.
            </h2>
            <div className="mt-10">
              <TextLink to="/how-it-works">Read the full walkthrough</TextLink>
            </div>
          </Reveal>

          <ol>
            {journeySteps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 60} className="index-row">
                <span className="index-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="display text-xl lg:text-2xl">{step.title}</h3>
                  <p className="mt-2.5 text-xs font-semibold tracking-[0.16em] text-cream-dim uppercase">
                    {step.gain}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* ── 04 · Taste ───────────────────────────── */}
      <Section index="04" label="Taste" className="py-28 lg:py-40">
        <Reveal>
          <Eyebrow>What is Taste?</Eyebrow>
          <h2 className="mega mt-8 max-w-3xl text-[clamp(2rem,4.8vw,3.6rem)]">
            The way you actually live.
          </h2>
          <p className="lede mt-10 max-w-xl">
            Food, movement, culture, social rhythm — context around people, never a compatibility
            score.
          </p>
          <div className="mt-10">
            <TextLink to="/gatherings">How Taste brings people together</TextLink>
          </div>
        </Reveal>
      </Section>

      {/* ── Cities band ──────────────────────────── */}
      <section className="bleed relative">
        <img
          src="/media/elaris-collage-market.webp"
          alt="Evening street life in an Indian city"
          loading="lazy"
          className="duo h-[24rem] w-full object-cover lg:h-[32rem]"
        />
        <div className="grain-veil absolute inset-0" aria-hidden />
        <div className="absolute inset-0 z-10 flex items-end">
          <div className="shell-x pb-12 lg:pb-16">
            <p className="text-xs font-bold tracking-[0.2em] text-parchment-dim uppercase">
              Building one strong circle first
            </p>
            <h2 className="mega mt-5 max-w-3xl text-[clamp(2rem,5.4vw,4rem)] text-parchment">
              Delhi NCR and Bangalore first.
            </h2>
          </div>
        </div>
      </section>

      {/* ── 06 · Explore ─────────────────────────── */}
      <Section index="06" label="Explore" className="py-28 lg:py-40">
        <SectionHead kicker="Keep reading" title="Everything else, in its own place." />
        <ul className="mt-14">
          {explore.map((item, i) => (
            <Reveal as="li" key={item.to} delay={i * 60} className="index-row">
              <span className="index-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <TextLink to={item.to}>{item.label}</TextLink>
                <p className="mt-3 text-sm text-cream-dim">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <ClosingCta
        title="Be there when something intentional begins."
        body="Join the founding circle. When Elaris opens your city, your invitation arrives first."
        secondary={{ label: "Read the safety centre", to: "/safety" }}
      />
    </main>
  );
}
