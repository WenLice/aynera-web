import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Aynera exists",
  description:
    "Aynera expands your real-world circle with relevant people and more natural opportunities to meet.",
};

export default function WhyAyneraPage() {
  return (
    <main className="react-page">
      <section className="step-hero">
        <div className="shell">
          <p className="eyebrow">Why Aynera exists</p>
          <h1>More people is not the same as more possibility.</h1>
          <p className="step-lead">
            A bigger feed does not necessarily create a bigger life. Aynera is built to widen your real circle—and make meeting feel natural again.
          </p>
        </div>
      </section>

      <section className="section section-difference">
        <div className="shell split">
          <div className="split-copy reveal">
            <p className="eyebrow">Beyond the usual circle</p>
            <h2>More profiles do not always create better opportunities.</h2>
            <p>
              Your everyday circle only takes you so far. Dating apps can show you more people than ever, but endless choice can still leave you meeting no one new.
            </p>
            <p>
              Aynera expands your circle with people you may genuinely want to know—and gives you more natural ways to cross paths.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/how-it-works">See how Aynera works</Link>
              <Link className="btn btn-plum" href="/early-access">Join early access</Link>
            </div>
          </div>
          <div className="split-visual reveal delay-1">
            <img
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=80"
              alt="Two people sharing a quiet conversation outdoors"
              width="1400"
              height="1600"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
