import { createFileRoute } from "@tanstack/react-router";
import { ClosingCta, Eyebrow, Reveal, Section, TextLink } from "@/components/primitives";
import { gatheringFormats } from "@/lib/site-content";

export const Route = createFileRoute("/gatherings")({
  head: () => ({
    meta: [
      { title: "Taste Gatherings — a smaller, social way to meet | Elaris" },
      {
        name: "description",
        content:
          "Coffee circles, food walks and culture meets: small public gatherings inside the same local Elaris network, with a visible host and no forced pairings.",
      },
      { property: "og:title", content: "Taste Gatherings — Elaris" },
      {
        property: "og:description",
        content: "Small, low-pressure gatherings around a shared Taste — public by default.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gatherings,
});

function Gatherings() {
  return (
    <main id="main">
      <header className="shell-x pt-32 pb-14 lg:pt-44 lg:pb-24">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <Eyebrow>02 · Gatherings</Eyebrow>
            <h1 className="display mt-7 text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[1.05]">
              Meet through a shared Taste.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream-dim">
              Prefer a smaller, social way to meet? Start with coffee circles, food walks and
              culture meets — labelled examples until host, venue and capacity are real.
            </p>
          </Reveal>
          <Reveal delay={90} className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-cream-dim">
              Grouped by compatible age band, geography, intent and the purpose of the gathering.
              Taste is a context signal, not the only admission rule — and we never promise romance
              from an event.
            </p>
          </Reveal>
        </div>
      </header>

      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <h2 className="display text-[clamp(1.7rem,3vw,2.4rem)]">
              Same network. Another way to cross paths.
            </h2>
            <p className="mt-5 leading-relaxed text-cream-dim">
              A gathering is an activation of the local singles network — not a separate product.
              Published only when host, venue, capacity and a safety owner are real.
            </p>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-6">
            <h2 className="display text-[clamp(1.7rem,3vw,2.4rem)]">
              Low pressure. Public by default.
            </h2>
            <p className="mt-5 leading-relaxed text-cream-dim">
              Visible host. No forced pairings. Photo consent before pictures. We prefer recommended
              public places and partner venues where available.
            </p>
            <div className="mt-7">
              <TextLink to="/safety">Safety at gatherings</TextLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <Eyebrow>What a founding week could feel like</Eyebrow>
        </Reveal>
        <div className="mt-12 grid gap-x-16 md:grid-cols-2">
          {gatheringFormats.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 60} className="relative list-none py-9">
              <span className="seam absolute inset-x-0 top-0 block" aria-hidden />
              <h3 className="display text-xl">{item.title}</h3>
              <p className="mt-3.5 text-sm leading-relaxed text-cream-dim">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <ClosingCta
        title="Gatherings open when the logistics are real."
        body="Join the founding circle and we'll invite you when your city's network is ready."
        secondary={{ label: "1:1 Meet", to: "/meet" }}
      />
    </main>
  );
}
