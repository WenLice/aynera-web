import Link from "next/link";
import type { Metadata } from "next";
import { HomeSaturdaySection } from "@/components/home-saturday-section";

export const metadata: Metadata = {
  title: "Weekend Surprise preview",
  robots: { index: false, follow: false },
};

/**
 * Single preview of the Weekend Surprise section as it appears on the homepage.
 */
export default function FlowEyebrowOptionsPage() {
  return (
    <main className="pd-flow-preview-page">
      <header className="shell-x pd-flow-preview-hero">
        <p className="pd-eyebrow">
          <span className="pd-accent-rule" aria-hidden />
          Preview · one section
        </p>
        <h1 className="pd-mega pd-flow-preview-hero-title">Weekend Surprise</h1>
        <p className="pd-flow-preview-lede">
          Same Weekend Surprise section as on the homepage — weekly city gatherings at partner
          places.
        </p>
        <p className="pd-flow-preview-back">
          <Link href="/">← Back to homepage</Link>
          {" · "}
          <Link href="/section-options">Other section ideas</Link>
        </p>
      </header>

      <HomeSaturdaySection />
    </main>
  );
}
