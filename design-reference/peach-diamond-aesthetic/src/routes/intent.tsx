import { createFileRoute } from "@tanstack/react-router";
import { ClosingCta, Eyebrow, Reveal, Section, SideMark } from "@/components/primitives";
import { intents } from "@/lib/site-content";

export const Route = createFileRoute("/intent")({
  head: () => ({
    meta: [
      { title: "Intent, without a split — dating or partnership, your call | Elaris" },
      {
        name: "description",
        content:
          "You don't have to choose between a dating app and a matrimony app. Say what you'd genuinely be open to right now — and change it whenever life changes.",
      },
      { property: "og:title", content: "Intent, without a split — Elaris" },
      {
        property: "og:description",
        content: "Say what you'd be happy for a connection to become. Change it whenever you like.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Intent,
});

function Intent() {
  return (
    <main id="main">
      <header className="shell-x pt-32 pb-16 lg:pt-44 lg:pb-24">
        <Reveal>
          <Eyebrow>Intent, without a split</Eyebrow>
          <h1 className="display mt-7 max-w-4xl text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[1.05]">
            What would you be happy if this became?
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream-dim">
            You do not have to pick “casual dating” or “matrimony” before you meet anyone. Say what
            you are genuinely open to right now. You can change it later.
          </p>
        </Reveal>
      </header>

      <Section className="pt-0">
        <div className="max-w-4xl">
          {intents.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <article className="relative grid gap-6 py-12 md:grid-cols-[12rem_1fr]">
                <span className="seam absolute inset-x-0 top-0 block" aria-hidden />
                <p className="text-xs font-bold tracking-[0.22em] text-peach-deep uppercase">
                  {item.kicker}
                </p>
                <div>
                  <h2 className="display text-[clamp(1.6rem,2.8vw,2.2rem)]">{item.title}</h2>
                  <p className="mt-4 leading-relaxed text-cream-dim">{item.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <ClosingCta
        title="Say it once. Change it whenever life changes."
        body="Join the founding circle and set your intent inside the app at launch."
        secondary={{ label: "See how Meet works", to: "/meet" }}
      />
      <SideMark side="right" />
    </main>
  );
}
