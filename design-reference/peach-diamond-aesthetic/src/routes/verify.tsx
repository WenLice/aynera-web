import { createFileRoute } from "@tanstack/react-router";
import { ClosingCta, Eyebrow, PageHero, Reveal, Section, SideMark } from "@/components/primitives";
import { verificationSteps } from "@/lib/site-content";

export const Route = createFileRoute("/verify")({
  head: () => ({
    meta: [
      { title: "Verification — real adults, checked before discovery | Elaris" },
      {
        name: "description",
        content:
          "Phone and email checks, a short liveness selfie, 18+ age assurance, and human profile review before anyone appears in Elaris introductions.",
      },
      { property: "og:title", content: "Verification at Elaris" },
      {
        property: "og:description",
        content: "Real adults. Clear intent. No discovery until checks pass.",
      },
    ],
  }),
  component: Verify,
});

function Verify() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Trust · Verification"
        title="Verify before you appear."
        lead="Real adults. Clear intent. No discovery until checks pass."
      />

      <Section>
        <Reveal>
          <Eyebrow>How we deliver this</Eyebrow>
        </Reveal>
        <ol className="mt-12 grid gap-4 md:grid-cols-2">
          {verificationSteps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 70} className="surface p-8 lg:p-10">
              <span className="text-xs tracking-[0.25em] text-peach-deep">0{i + 1}</span>
              <h2 className="display mt-6 text-2xl">{step.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-cream-dim">{step.body}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-10">
          <p className="max-w-2xl border-l-2 border-peach pl-6 text-sm leading-relaxed text-cream-dim">
            Verification raises trust. It never guarantees perfect behaviour — report and block stay
            free.
          </p>
        </Reveal>
      </Section>

      <ClosingCta
        title="Checked before you're seen."
        body="Join the founding circle and complete verification inside the app at launch."
        secondary={{ label: "Meet intentionally", to: "/meet" }}
      />
      <SideMark side="left" />
    </main>
  );
}
