import { createFileRoute, Link } from "@tanstack/react-router";
import { ClosingCta, PageHero, Reveal, Section } from "@/components/primitives";
import { chapters } from "@/lib/site-content";

export const Route = createFileRoute("/chapters")({
  head: () => ({
    meta: [
      { title: "The Elaris chapters — Meet, Focus, Together, Era ahead" },
      {
        name: "description",
        content:
          "Four chapters, one optional journey: Meet, Focus, Together, and the era ahead.",
      },
      { property: "og:title", content: "The Elaris chapters" },
      {
        property: "og:description",
        content: "Four chapters — from first introduction to what comes after just us.",
      },
    ],
  }),
  component: Chapters,
});

function Chapters() {
  return (
    <main id="main">
      <PageHero
        eyebrow="The chapters"
        title="One journey, told in four chapters."
        lead="Each chapter has one clear job — from meeting someone worth knowing to what two people build after they choose each other. Focus and Together stay optional."
      />

      <Section>
        <div className="flex flex-col gap-20 lg:gap-28">
          {chapters.map((chapter, i) => (
            <Reveal key={chapter.slug} delay={60}>
              <Link
                to={chapter.slug as never}
                className="group grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={chapter.image}
                    alt=""
                    loading="lazy"
                    className="frame aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:-translate-y-1"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1 lg:pr-6" : "lg:pl-6"}>
                  <span className="text-xs tracking-[0.25em] text-peach-deep">{chapter.index}</span>
                  <h2 className="display mt-5 text-[clamp(2rem,3.4vw,2.9rem)]">{chapter.name}</h2>
                  <div className="seam my-6" />
                  <p className="max-w-md text-base leading-relaxed text-cream-dim">
                    {chapter.summary}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-peach-deep">
                    Read the chapter
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>


      <ClosingCta
        title="The chapters only move when you both agree."
        body="Join the founding circle — Delhi NCR is opening first."
        secondary={{ label: "How it works", to: "/how-it-works" }}
      />
    </main>
  );
}
