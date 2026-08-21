import { createFileRoute, Link } from "@tanstack/react-router";
import { ClosingCta, Eyebrow, Reveal, Section } from "@/components/primitives";

export const Route = createFileRoute("/track")({
  head: () => ({
    meta: [
      { title: "Elaris Track — Fluid and Intent, two ways to begin" },
      {
        name: "description",
        content:
          "Two tracks on Elaris. Fluid for open, low-pressure connection. Intent for clear purpose and lasting partnership. Choose the shape that matches where you are.",
      },
      { property: "og:title", content: "Elaris Track — Fluid and Intent" },
      {
        property: "og:description",
        content:
          "Two relationship tracks. One intentional platform. Choose the shape that matches where you are.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Track,
});

type Tone = "plum" | "peach";

type TrackItem = {
  id: string;
  label: string;
  tone: Tone;
  title: string;
  subtitle: string;
  lede: string;
  promise: string;
  subs: { name: string; line: string; body: string; signals: string[] }[];
};

const tone: Record<
  Tone,
  { line: string; soft: string; text: string; bloom: string }
> = {
  plum: {
    line: "var(--plum)",
    soft: "color-mix(in oklab, var(--plum) 16%, transparent)",
    text: "var(--plum-deep)",
    bloom:
      "radial-gradient(58% 70% at 12% 0%, color-mix(in oklab, var(--plum) 26%, transparent), transparent 68%)",
  },
  peach: {
    line: "var(--peach)",
    soft: "color-mix(in oklab, var(--peach) 16%, transparent)",
    text: "var(--peach-deep)",
    bloom:
      "radial-gradient(58% 70% at 88% 0%, color-mix(in oklab, var(--peach) 26%, transparent), transparent 68%)",
  },
};

const tracks: TrackItem[] = [
  {
    id: "fluid",
    label: "Fluid",
    tone: "plum",
    title: "For connection that stays open",
    subtitle: "Able to change shape without breaking.",
    lede:
      "Fluid is for people who want company, conversation and chemistry without a fixed destination attached. Nothing here pretends to be more than it is — and nothing here has to stay small either.",
    promise:
      "No hidden agenda to decode. Everyone on this track has said, in advance, that they are here for the present tense.",
    subs: [
      {
        name: "Platonic",
        line: "Friendship and networking, clearly labelled.",
        body:
          "Meet people for the conversation, the craft, the city, the work. Romance is off the table by declaration, so the friendship can be real.",
        signals: ["Friendship", "Community", "Networking"],
      },
      {
        name: "Spontaneous",
        line: "Meet in the moment, part with grace.",
        body:
          "An evening that is allowed to be exactly one evening. Plans stay light, expectations stay honest, and either person can close the chapter kindly.",
        signals: ["Low stakes", "Present tense", "No strings"],
      },
    ],
  },
  {
    id: "intent",
    label: "Intent",
    tone: "peach",
    title: "For connection with a direction",
    subtitle: "A clear purpose, said out loud.",
    lede:
      "Intent is for people who already know the shape of the life they are building and would rather say so on day one than discover a mismatch on month six.",
    promise:
      "Substance over performance. Everyone on this track has committed to clarity about where they hope this goes.",
    subs: [
      {
        name: "Prospect",
        line: "Dating with the door to more left open.",
        body:
          "Short-term and long-term live together here. You are getting to know a person seriously, without pretending you already know the ending.",
        signals: ["Exclusive dating", "Long-term open", "Real pace"],
      },
      {
        name: "Legacy",
        line: "Partnership meant to outlast the season.",
        body:
          "Marriage, family, shared plans, shared roots. For people building something they intend to hand forward, matched with people who want the same.",
        signals: ["Life partnership", "Family", "Long horizon"],
      },
    ],
  },
];

function TrackSection({ track, index }: { track: TrackItem; index: number }) {
  const c = tone[track.tone];
  const flip = index % 2 === 1;

  return (
    <Section className={index === 0 ? "pt-10" : "pt-6 lg:pt-10"}>
      <div className="shell-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-24">
          <div className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
            <Reveal>
              <span
                className="text-[0.68rem] font-bold uppercase tracking-[0.22em]"
                style={{ color: c.text }}
              >
                {`0${index + 1} — ${track.label}`}
              </span>
              <h2 className="display mt-7 text-[clamp(2rem,4vw,3.1rem)]">
                {track.title}
              </h2>
              <p
                className="mt-5 font-display text-lg"
                style={{ color: c.text }}
              >
                {track.subtitle}
              </p>
              <p className="mt-8 text-lg leading-relaxed text-cream-dim">
                {track.lede}
              </p>
              <p className="mt-8 max-w-md text-base leading-relaxed text-cream">
                {track.promise}
              </p>
            </Reveal>
          </div>

          <div className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
            <div className="flex flex-col">
              {track.subs.map((sub, i) => (
                <Reveal key={sub.name} delay={i * 90}>
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="block h-px w-full"
                      style={{
                        background: `linear-gradient(90deg, color-mix(in oklab, ${c.line} 24%, transparent), transparent 88%)`,
                      }}
                    />
                  )}
                  <div className="py-12">
                    <div className="flex items-baseline gap-5">
                      <h3 className="display text-[clamp(1.5rem,2.4vw,2rem)]">
                        {sub.name}
                      </h3>
                      <span
                        aria-hidden
                        className="h-px flex-1"
                        style={{
                          background: `linear-gradient(90deg, color-mix(in oklab, ${c.line} 32%, transparent), transparent)`,
                        }}
                      />
                    </div>
                    <p
                      className="mt-4 font-display text-lg"
                      style={{ color: c.text }}
                    >
                      {sub.line}
                    </p>
                    <p className="mt-5 max-w-xl leading-relaxed text-cream-dim">
                      {sub.body}
                    </p>
                    <p
                      className="mt-5 text-sm"
                      style={{ color: c.text }}
                    >
                      {sub.signals.join("  ·  ")}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const compare = [
  {
    q: "What you say up front",
    fluid: "I'm open to where this goes.",
    intent: "I know what I'm building.",
  },
  {
    q: "Pace",
    fluid: "Light, unhurried, no timeline.",
    intent: "Deliberate, with a direction agreed early.",
  },
  {
    q: "Who you meet",
    fluid: "People here for the present tense.",
    intent: "People who have named their horizon.",
  },
  {
    q: "How it ends well",
    fluid: "A kind close, whenever either of you wants one.",
    intent: "A clear yes, or an early, honest no.",
  },
];

const steps = [
  {
    n: "01",
    t: "Answer one honest question",
    b: "During early access we ask what you actually want right now — not what sounds impressive. Your answer places you on Fluid or Intent.",
  },
  {
    n: "02",
    t: "Pick the shape inside it",
    b: "Platonic or Spontaneous on Fluid. Prospect or Legacy on Intent. This is what people see before they ever reach out.",
  },
  {
    n: "03",
    t: "Move when your life moves",
    b: "You can change track. It resets what you're shown, tells the people you're already talking to, and never quietly rewrites your past.",
  },
];

const faqs = [
  {
    q: "Can I be on both tracks?",
    a: "No. One track at a time keeps the promise legible. Half-signals are how people get hurt.",
  },
  {
    q: "Is Intent more serious than Fluid?",
    a: "It's more specific, not more valuable. A clearly stated friendship is worth more than a vague romance.",
  },
  {
    q: "Will people know if I switch?",
    a: "Anyone in an open conversation with you is told. No one gets to discover it accidentally.",
  },
  {
    q: "Does my track change what I'm shown?",
    a: "Yes — you're matched inside your track and sub-track, so the first message starts from the same page.",
  },
];

function Track() {
  return (
    <main id="main">
      <header className="shell-x pt-32 pb-16 lg:pt-44 lg:pb-24">
        <Reveal>
          <Eyebrow>Track</Eyebrow>
          <h1 className="display mt-8 max-w-3xl text-[clamp(2.4rem,5.4vw,4.4rem)]">
            Two tracks.
            <br />
            One intention.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream-dim">
            Most apps make everyone share one lane and then wonder why the
            conversations misfire. Elaris asks the honest question first, and
            matches you inside the answer.
          </p>
        </Reveal>
      </header>

      {tracks.map((track, i) => (
        <TrackSection key={track.id} track={track} index={i} />
      ))}

      <Section className="pt-10">
        <div className="shell-x">
          <Reveal>
            <Eyebrow>Side by side</Eyebrow>
            <h2 className="display mt-6 max-w-2xl text-[clamp(1.8rem,3.4vw,2.7rem)]">
              The difference, in plain language.
            </h2>
          </Reveal>
          <div className="mt-14">
            <div className="hidden grid-cols-12 gap-10 pb-5 lg:grid">
              <span className="col-span-4" />
              <span
                className="col-span-4 text-[0.68rem] font-bold uppercase tracking-[0.22em]"
                style={{ color: tone.plum.text }}
              >
                Fluid
              </span>
              <span
                className="col-span-4 text-[0.68rem] font-bold uppercase tracking-[0.22em]"
                style={{ color: tone.peach.text }}
              >
                Intent
              </span>
            </div>
            {compare.map((row, i) => (
              <Reveal key={row.q} delay={i * 70}>
                <span
                  aria-hidden
                  className="block h-px w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, color-mix(in oklab, var(--plum) 20%, transparent), color-mix(in oklab, var(--peach) 20%, transparent) 60%, transparent)",
                  }}
                />
                <div className="grid gap-3 py-8 lg:grid-cols-12 lg:gap-10">
                  <p className="font-display text-lg lg:col-span-4">{row.q}</p>
                  <p className="leading-relaxed text-cream-dim lg:col-span-4">
                    {row.fluid}
                  </p>
                  <p className="leading-relaxed text-cream-dim lg:col-span-4">
                    {row.intent}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-6">
        <div className="shell-x">
          <Reveal>
            <Eyebrow>Choosing</Eyebrow>
            <h2 className="display mt-6 max-w-2xl text-[clamp(1.8rem,3.4vw,2.7rem)]">
              You are not locked in — you are just being clear.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-14 lg:grid-cols-3 lg:gap-16">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <span className="font-display text-3xl text-peach-deep">
                  {s.n}
                </span>
                <h3 className="display mt-5 text-xl">{s.t}</h3>
                <p className="mt-4 leading-relaxed text-cream-dim">{s.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>


      <Section className="pt-10">
        <div className="shell-x">
          <Reveal>
            <span
              aria-hidden
              className="block h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, color-mix(in oklab, var(--plum) 22%, transparent) 30%, transparent)",
              }}
            />
            <div className="grid gap-10 pt-16 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-5">
                <h2 className="display text-[clamp(1.8rem,3.4vw,2.7rem)]">
                  The track changes. The standard does not.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-lg leading-relaxed text-cream-dim">
                  Verification, consent tools, mutual choice and reporting work
                  identically on Fluid and Intent. Your track tells people what
                  you are looking for — it never changes how carefully you are
                  treated.
                </p>
                <Link
                  to="/safety"
                  className="mt-8 inline-flex items-center gap-2 font-display text-base font-semibold text-peach-deep hover:opacity-80"
                >
                  How safety works <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-6">
        <div className="shell-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>Questions</Eyebrow>
                <h2 className="display mt-6 text-[clamp(1.8rem,3.4vw,2.7rem)]">
                  Before you pick.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 70}>
                  <span
                    aria-hidden
                    className="block h-px w-full"
                    style={{
                      background:
                        "linear-gradient(90deg, color-mix(in oklab, var(--plum) 20%, transparent), transparent 88%)",
                    }}
                  />
                  <div className="py-8">
                    <h3 className="font-display text-lg">{f.q}</h3>
                    <p className="mt-3 max-w-2xl leading-relaxed text-cream-dim">
                      {f.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <ClosingCta
        title="Choose your track."
        body="Register interest and tell us whether Fluid or Intent fits where you are right now."
        secondary={{ label: "How it works", to: "/how-it-works" }}
      />
    </main>
  );
}
