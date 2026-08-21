import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, Reveal, Section } from "@/components/primitives";
import { gatheringSafety, safetyPillars } from "@/lib/site-content";

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Safety centre — free tools before, during and after a date | Elaris" },
      {
        name: "description",
        content:
          "Verification before discovery, partner cafés for first meets, date plans, share-date, report and block, and human review of serious cases.",
      },
      { property: "og:title", content: "Elaris Safety centre" },
      {
        property: "og:description",
        content: "Safety tools stay free — from first chat to offline dates and beyond.",
      },
    ],
  }),
  component: Safety,
});

function Safety() {
  return (
    <main id="main">
      <header className="shell-x pt-32 pb-14 lg:pt-40 lg:pb-20">
        <Reveal>
          <Eyebrow>Safety centre</Eyebrow>
          <h1 className="display mt-6 max-w-4xl text-[clamp(2.4rem,5.4vw,4.4rem)]">
            Your safety matters — here and offline.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream-dim">
            From first chat to offline dates, Focus, and Together — safety tools stay free. Serious reports get human review. If you're in immediate danger, contact local emergency services.
          </p>
        </Reveal>
      </header>

      <Section className="pt-6">
        <Reveal>
          <Eyebrow>What we build in</Eyebrow>
        </Reveal>
        <div className="mt-12 max-w-3xl">
          {safetyPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 60}>
              <article className={`relative pb-10 ${i === 0 ? "pt-0" : "pt-10"}`}>
                {i > 0 && <span className="seam absolute inset-x-0 top-0 block" aria-hidden />}
                <h2 className="display text-xl">{pillar.title}</h2>
                <p className="mt-4 leading-relaxed text-cream-dim">{pillar.body}</p>
              </article>
            </Reveal>
          ))}

        </div>
      </Section>

      <Section className="pt-6">
        <Reveal>
          <Eyebrow>Safety at Taste Gatherings</Eyebrow>
          <h2 className="display mt-6 max-w-3xl text-[clamp(2rem,4vw,3rem)]">
            A gathering is published only when it is real.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-cream-dim">
            Host, venue, capacity and a safety owner must be confirmed before anything goes live.
            Verification raises confidence; it never guarantees behaviour.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-x-14 md:grid-cols-3">
          {gatheringSafety.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className="relative py-9">
              <span className="seam absolute inset-x-0 top-0 block" aria-hidden />
              <h3 className="display text-xl">{item.title}</h3>
              <p className="mt-3.5 text-sm leading-relaxed text-cream-dim">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>



      <Section className="pt-6">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>Safety across every chapter</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2rem,4vw,3rem)]">
              Commitment should feel safer, not locked in.
            </h2>
          </div>
          <div className="self-end">
            <p className="text-lg leading-relaxed text-cream-dim">
              Focus and Together pause discovery — they never remove your exits. Report, block,
              respectful close, and cooling-off stay available after Together too.
            </p>
            <p className="mt-8 text-sm text-cream-dim">
              Need support?{" "}
              <Link
                to="/$slug"
                params={{ slug: "grievance" }}
                className="text-peach-deep underline underline-offset-4"
              >
                Contact our grievance channel
              </Link>{" "}
              or{" "}
              <Link
                to="/$slug"
                params={{ slug: "delete-account" }}
                className="text-peach-deep underline underline-offset-4"
              >
                request account deletion
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </Section>

      <section className="shell-x py-20 lg:py-28">
        <Reveal className="text-center">
          <h2 className="display mx-auto max-w-2xl text-[clamp(1.9rem,3.6vw,2.9rem)]">
            Safety tools are never behind a paywall.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-cream-dim">
            Join the founding circle and help us shape the pilot in your city.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/early-access"
              className="cta-warm inline-flex items-center justify-center rounded-full px-6 py-3 text-sm"
            >
              Join the founding circle
            </Link>
            <Link
              to="/verify"
              className="cta-ghost inline-flex items-center justify-center rounded-full px-6 py-3 text-sm"
            >
              How verification works
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
