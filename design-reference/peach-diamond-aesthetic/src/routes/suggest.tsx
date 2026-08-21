import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Reveal, SideMark } from "@/components/primitives";

export const Route = createFileRoute("/suggest")({
  head: () => ({
    meta: [
      { title: "Share a suggestion — help shape Elaris" },
      {
        name: "description",
        content:
          "Tell us what would make Elaris better. Ideas about safety, introductions, or the couple experience go straight to the product team.",
      },
      { property: "og:title", content: "Share a suggestion with Elaris" },
      {
        property: "og:description",
        content: "Your idea can shape how introductions, safety, and the journey work.",
      },
    ],
  }),
  component: Suggest,
});

const field =
  "mt-2 w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-cream outline-none transition-colors placeholder:text-cream-dim/60 focus:border-peach";
const label = "text-xs tracking-[0.16em] text-cream-dim uppercase";

const topics = ["Safety", "Introductions", "Focus & Together", "Something else"];

function Suggest() {
  const [done, setDone] = useState(false);

  return (
    <main id="main" className="relative pt-36 pb-28">
      <div className="shell grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal>
          <Eyebrow>Suggestions</Eyebrow>
          <h1 className="display mt-6 text-[clamp(2.4rem,5.4vw,4.2rem)] leading-[1.02]">
            Tell us what would make Elaris better.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream-dim">
            We're building slowly and in public. If something here feels missing, unclear, or unsafe,
            we want to hear it before launch — not after.
          </p>
          <p className="mt-10 border-t border-line pt-8 text-sm text-cream-dim">
            For account or safety issues that need a response, use the{" "}
            <Link to="/$slug" params={{ slug: "grievance" }} className="text-peach-deep underline underline-offset-4">
              grievance channel
            </Link>{" "}
            instead.
          </p>
        </Reveal>

        <Reveal delay={100} className="surface p-8 lg:p-10">
          {done ? (
            <div className="py-6 text-center">
              <span className="facet-mark mx-auto" aria-hidden />
              <h2 className="display mt-6 text-3xl">Thank you — we've got it.</h2>
              <p className="mt-4 text-sm leading-relaxed text-cream-dim">
                Every suggestion is read by the product team. We'll follow up by email if we need
                more detail.
              </p>
              <Link
                to="/early-access"
                className="mt-8 inline-flex rounded-full border border-line px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-peach hover:text-peach-deep"
              >
                Join early access
              </Link>
            </div>
          ) : (
            <form
              className="grid gap-6"
              onSubmit={(event) => {
                event.preventDefault();
                setDone(true);
              }}
            >
              <div>
                <h2 className="display text-2xl">Share your idea</h2>
                <p className="mt-3 text-sm text-cream-dim">
                  Short and specific is perfect. Name is optional.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="suggest-name">
                    Name (optional)
                  </label>
                  <input id="suggest-name" name="name" autoComplete="name" className={field} />
                </div>
                <div>
                  <label className={label} htmlFor="suggest-email">
                    Email
                  </label>
                  <input
                    id="suggest-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={field}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="suggest-topic">
                    Topic
                  </label>
                  <select id="suggest-topic" name="topic" required defaultValue="" className={field}>
                    <option value="" disabled>
                      Choose a topic
                    </option>
                    {topics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="suggest-message">
                    Your suggestion
                  </label>
                  <textarea
                    id="suggest-message"
                    name="message"
                    rows={6}
                    required
                    className={`${field} resize-y`}
                    placeholder="What should we build, change, or remove?"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="cta-warm w-full justify-center rounded-full px-7 py-4 text-sm font-semibold"
              >
                Send suggestion
              </button>

              <p className="text-xs leading-relaxed text-cream-dim">
                We use your email only to follow up on this suggestion. See our{" "}
                <Link to="/$slug" params={{ slug: "privacy" }} className="text-peach-deep underline underline-offset-4">
                  Privacy Notice
                </Link>
                .
              </p>
            </form>
          )}
        </Reveal>
      </div>
      <SideMark side="right" />
    </main>
  );
}
