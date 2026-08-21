import { useState } from "react";
import { Eyebrow, Reveal, Section, SectionHead } from "@/components/primitives";
import { faqs, notHere, profilePrompts } from "@/lib/site-content";

/** Scrolling keyword ticker — a full-bleed band between chapters. */
export function Ticker({ items }: { items: string[] }) {
  const row = (
    <div className="ticker__track" aria-hidden>
      {items.map((item) => (
        <span key={item} className="flex items-center gap-3.5 whitespace-nowrap">
          <span className="facet-mark shrink-0" />
          <span className="display text-[clamp(1.1rem,2.4vw,1.9rem)] font-medium opacity-70">
            {item}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="bleed relative border-y border-line py-6">
      <div className="ticker">
        {row}
        {row}
      </div>
    </div>
  );
}

/** Prompts as a hover-driven editorial index with a live answer panel. */
export function PromptGallery() {
  const [active, setActive] = useState(0);
  const current = profilePrompts[active] ?? profilePrompts[0]!;

  return (
    <Section index="04" label="Profiles">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
        <div>
          <SectionHead
            kicker="Profiles with a voice"
            title="Prompts, not just pretty photos."
            body="Every Elaris profile answers written prompts about intent, pace and how you actually spend your time. You reply to a specific line — so the first message is never “hey”."
          />

          <ul className="mt-12">
            {profilePrompts.map((item, i) => (
              <li key={item.prompt}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`index-row w-full text-left ${i === active ? "text-plum-deep" : "text-cream-dim"}`}
                >
                  <span className="index-num">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="display block text-lg leading-snug lg:text-xl">
                      {item.prompt}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-cream-dim lg:hidden">
                      {item.answer}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="rail-sticky hidden lg:block">
          <div className="border-l border-line pl-8">
            <p className="index-num">Answer {String(active + 1).padStart(2, "0")}</p>
            <p className="mt-5 text-xs font-bold tracking-[0.16em] text-cream-dim uppercase">
              {current.prompt}
            </p>
            <p className="display mt-4 text-2xl leading-snug font-medium">{current.answer}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/** The app moment, as a full-bleed split: dark rail + a single card. */
export function AppPreview() {
  return (
    <section className="band bleed relative overflow-hidden py-24 lg:py-32">
      <div className="shell-x grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-20">
        <Reveal>
          <p className="eyebrow-rule flex items-center gap-3 text-parchment-dim">
            <span className="accent-rule inline-block" aria-hidden />
            Inside the app
          </p>
          <h2 className="mega mt-8 max-w-2xl text-[clamp(2rem,5vw,3.8rem)] text-parchment">
            Every introduction comes with a reason.
          </h2>
          <p className="mt-8 max-w-xl leading-relaxed text-parchment-dim">
            No score, no ranking, no mystery algorithm bragging. You see why you were introduced,
            what you share, and one clear next step.
          </p>
          <ul className="mt-10 max-w-xl">
            {[
              "A small, considered set — never an endless feed",
              "Focus pauses discovery only when both people choose it",
              "Date-safety share built into the chat",
            ].map((line, i) => (
              <li
                key={line}
                className="flex items-start gap-5 border-t border-parchment/15 py-4 text-sm text-parchment-dim"
              >
                <span className="index-num">{String(i + 1).padStart(2, "0")}</span>
                {line}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-xl border border-parchment/15 bg-parchment/5 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between text-[0.62rem] tracking-[0.24em] text-parchment-dim uppercase">
              <span>Today's introduction</span>
              <span>1 / 3</span>
            </div>

            <div className="frame mt-5">
              <img
                src="/media/elaris-meet-gallery.webp"
                alt="A relaxed introduction over coffee"
                loading="lazy"
                className="duo h-52 w-full object-cover"
              />
            </div>

            <p className="display mt-6 text-2xl text-parchment">Ananya, 29</p>
            <p className="mt-1.5 text-xs text-parchment-dim">
              Delhi NCR · Verified · Open to a relationship
            </p>

            <div className="mt-6 border-t border-parchment/15 pt-5">
              <p className="index-num">Why you two</p>
              <p className="mt-2.5 text-sm leading-relaxed text-parchment-dim">
                You both said you'd be happy if this became a relationship, and you both keep Sunday
                mornings unplanned.
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              <span className="flex-1 rounded-full bg-parchment px-4 py-2.5 text-center text-xs font-bold text-plum-deep">
                Say hello
              </span>
              <span className="flex-1 rounded-full border border-parchment/35 px-4 py-2.5 text-center text-xs font-bold text-parchment">
                Not now
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** What we deliberately left out — a two-column ledger. */
export function NotHere() {
  return (
    <Section index="08" label="Left out">
      <SectionHead kicker="Deliberately missing" title="What you won't find on Elaris." />

      <ul className="mt-12 grid gap-x-16 md:grid-cols-2">
        {notHere.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 60} className="border-t border-line py-8">
            <span className="index-num">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="display mt-4 text-xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-cream-dim">{item.body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export function Faq() {
  return (
    <Section index="09" label="Questions">
      <div className="grid gap-12 lg:grid-cols-[20rem_minmax(0,1fr)] lg:gap-16">
        <Reveal className="rail-sticky">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="display mt-6 text-[clamp(1.9rem,3.4vw,2.6rem)]">
            The things people ask first.
          </h2>
        </Reveal>

        <div>
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 50}>
              <details className="group relative border-t border-line py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                  <span className="display text-lg transition-colors group-open:text-peach-deep">
                    {item.q}
                  </span>
                  <span className="text-peach-deep transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cream-dim">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
