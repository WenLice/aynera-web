import { createFileRoute } from "@tanstack/react-router";
import { ClosingCta, Eyebrow, Reveal, Section, SideMark } from "@/components/primitives";
import { returnReasons } from "@/lib/site-content";

export const Route = createFileRoute("/return")({
  head: () => ({
    meta: [
      { title: "Why come back — a living local network | Elaris" },
      {
        name: "description",
        content:
          "If nothing clicks this week, your world doesn't stay the same. New reviewed people, new gatherings, and honest waitlists instead of an infinite feed.",
      },
      { property: "og:title", content: "Why come back — Elaris" },
      {
        property: "og:description",
        content: "A living local network, not the same stack of profiles waiting for a swipe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyReturn,
});

function WhyReturn() {
  return (
    <main id="main">
      <header className="shell-x pt-32 pb-16 lg:pt-44 lg:pb-24">
        <Reveal>
          <Eyebrow>Why come back</Eyebrow>
          <h1 className="display mt-7 max-w-4xl text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[1.05]">
            If nothing clicks this week, your world does not stay the same.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream-dim">
            Elaris should feel like a living local network — not the same stack of profiles waiting
            for another swipe.
          </p>
        </Reveal>
      </header>

      <Section className="pt-0">
        <div className="grid gap-x-16 md:grid-cols-3">
          {returnReasons.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="relative py-10">
              <span className="seam absolute inset-x-0 top-0 block md:hidden" aria-hidden />
              <p className="text-xs font-bold tracking-[0.22em] text-peach-deep uppercase">
                {item.kicker}
              </p>
              <p className="mt-6 text-xs tracking-wide text-cream-dim">{item.label}</p>
              <h2 className="display mt-2 text-2xl">{item.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-cream-dim">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <ClosingCta
        title="Density is the product."
        body="Join the founding circle and we'll open your city when the local network is genuinely ready."
        secondary={{ label: "See how Meet works", to: "/meet" }}
      />
      <SideMark side="left" />
    </main>
  );
}
