import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Reveal, SideMark } from "@/components/primitives";

export const Route = createFileRoute("/early-access")({
  head: () => ({
    meta: [
      { title: "Join Elaris early access — Delhi, Bangalore, Mumbai" },
      {
        name: "description",
        content:
          "Save your place on the Elaris early-access list. We'll email your download invitation when the app launches in your city.",
      },
      { property: "og:title", content: "Join Elaris early access" },
      {
        property: "og:description",
        content: "Be there when something intentional begins — launching in Delhi, Bangalore, Mumbai.",
      },
    ],
  }),
  component: EarlyAccess,
});

const field =
  "mt-2 w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-cream outline-none transition-colors placeholder:text-cream-dim/60 focus:border-peach";
const label = "text-xs tracking-[0.16em] text-cream-dim uppercase";

function EarlyAccess() {
  const [done, setDone] = useState(false);
  const [city, setCity] = useState("");

  return (
    <main id="main" className="relative pt-36 pb-28">
      <div className="shell grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal>
          <Eyebrow>Delhi · Bangalore · Mumbai · launching soon</Eyebrow>
          <h1 className="display mt-6 text-[clamp(2.4rem,5.4vw,4.2rem)] leading-[1.02]">
            Be there when something intentional begins.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream-dim">
            Join the early-access list today. When the Elaris app launches, we'll email your
            invitation so you can download it and create your profile there.
          </p>
          <ul className="mt-10 space-y-4 border-t border-line pt-8 text-sm text-cream-dim">
            {[
              "No long profile or verification before launch",
              "Choose Standard or register interest in Professionals",
              "Get launch news and your download invitation by email",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="facet-mark mt-1 shrink-0" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="surface p-8 lg:p-10">
          {done ? (
            <div className="py-6 text-center">
              <span className="facet-mark mx-auto" aria-hidden />
              <h2 className="display mt-6 text-3xl">You're on the early-access list.</h2>
              <p className="mt-4 text-sm leading-relaxed text-cream-dim">
                {city
                  ? `We'll email your invitation when Elaris opens in ${city}.`
                  : "We'll email your invitation when the Elaris app is ready to download."}{" "}
                Check spam or promotions if you don't see us.
              </p>
              <Link
                to="/"
                className="mt-8 inline-flex rounded-full border border-line px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-peach hover:text-peach-deep"
              >
                Return home
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
                <h2 className="display text-2xl">Save your place</h2>
                <p className="mt-3 text-sm text-cream-dim">
                  It takes less than a minute. Your complete profile is created inside the app after
                  launch.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="first-name">
                    First name
                  </label>
                  <input id="first-name" name="firstName" autoComplete="given-name" required className={field} />
                </div>
                <div>
                  <label className={label} htmlFor="last-name">
                    Last name
                  </label>
                  <input id="last-name" name="lastName" autoComplete="family-name" required className={field} />
                </div>
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="phone">
                    Phone number
                  </label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" required className={field} />
                </div>
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="email">
                    Email address
                  </label>
                  <input id="email" name="email" type="email" autoComplete="email" required className={field} />
                </div>
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="launch-city">
                    Launch city
                  </label>
                  <select
                    id="launch-city"
                    name="city"
                    required
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    className={field}
                  >
                    <option value="" disabled>
                      Select your city
                    </option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Mumbai">Mumbai</option>
                  </select>
                </div>
                <fieldset className="sm:col-span-2">
                  <legend className={label}>I'm interested in</legend>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {["Standard", "Professionals"].map((option) => (
                      <label
                        key={option}
                        className="flex cursor-pointer items-center gap-3 rounded-lg border border-line px-4 py-3 text-sm text-cream-dim transition-colors hover:border-peach has-checked:border-peach has-checked:text-cream"
                      >
                        <input type="radio" name="interest" value={option} required className="accent-peach" />
                        {option}
                      </label>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-cream-dim">
                    This only records your interest. Professional verification happens later inside
                    the app.
                  </p>
                </fieldset>
                <div className="grid gap-3 text-sm text-cream-dim sm:col-span-2">
                  <label className="flex items-start gap-3">
                    <input type="checkbox" name="adult" required className="mt-1 accent-peach" />I
                    confirm that I am 18 years or older.
                  </label>
                  <label className="flex items-start gap-3">
                    <input type="checkbox" name="consent" required className="mt-1 accent-peach" />I
                    agree to receive Elaris launch and early-access emails. I can unsubscribe
                    anytime.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="cta-warm w-full justify-center rounded-full px-7 py-4 text-sm font-semibold"
              >
                Join early access
              </button>

              <p className="text-xs leading-relaxed text-cream-dim">
                By joining, you agree to our{" "}
                <Link to="/$slug" params={{ slug: "privacy" }} className="text-peach-deep underline underline-offset-4">
                  Privacy Notice
                </Link>
                . Have an idea for Elaris?{" "}
                <Link to="/suggest" className="text-peach-deep underline underline-offset-4">
                  Share a suggestion
                </Link>
                .
              </p>
            </form>
          )}
        </Reveal>
      </div>
      <SideMark side="left" />
    </main>
  );
}
