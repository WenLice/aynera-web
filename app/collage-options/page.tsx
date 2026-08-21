import type { Metadata } from "next";
import {
  CollageOptionFeatured,
  CollageOptionGrid,
  CollageOptionPromptIndex,
  CollageOptionQuoteRail,
} from "@/components/collage-options";

export const metadata: Metadata = {
  title: "Collage options — pick one",
  robots: { index: false, follow: false },
};

const options = [
  {
    id: "option-1",
    name: "Option 1 · Prompt index",
    note: "Numbered prompts on the left, photo + answer on the right. Closest to Site B.",
  },
  {
    id: "option-2",
    name: "Option 2 · Quote rail",
    note: "Horizontal scroll of equal framed photos with quiet captions. All six faces visible.",
  },
  {
    id: "option-3",
    name: "Option 3 · Featured story",
    note: "One large photo + quote at a time, with arrows and dots.",
  },
  {
    id: "option-4",
    name: "Option 4 · Equal grid",
    note: "Clean 2×3 / responsive grid. Same content, no rope or clips.",
  },
] as const;

export default function CollageOptionsPage() {
  return (
    <main id="main" className="pd-collage-preview">
      <div className="shell-x pd-collage-preview-hero">
        <p className="pd-eyebrow">
          <span className="pd-accent-rule" aria-hidden />
          Preview only
        </p>
        <h1 className="pd-mega pd-collage-preview-title">Profiles section — four ways</h1>
        <p className="pd-collage-lede">
          Same Site A photos and captions. Peach theme. Scroll each option, then tell me which number
          to put on the homepage.
        </p>
        <nav className="pd-collage-preview-nav" aria-label="Options">
          {options.map((option) => (
            <a key={option.id} href={`#${option.id}`}>
              {option.name}
            </a>
          ))}
        </nav>
      </div>

      <section id="option-1" className="pd-collage-preview-block">
        <div className="shell-x pd-collage-preview-label">
          <h2>{options[0].name}</h2>
          <p>{options[0].note}</p>
        </div>
        <CollageOptionPromptIndex />
      </section>

      <section id="option-2" className="pd-collage-preview-block">
        <div className="shell-x pd-collage-preview-label">
          <h2>{options[1].name}</h2>
          <p>{options[1].note}</p>
        </div>
        <CollageOptionQuoteRail />
      </section>

      <section id="option-3" className="pd-collage-preview-block">
        <div className="shell-x pd-collage-preview-label">
          <h2>{options[2].name}</h2>
          <p>{options[2].note}</p>
        </div>
        <CollageOptionFeatured />
      </section>

      <section id="option-4" className="pd-collage-preview-block">
        <div className="shell-x pd-collage-preview-label">
          <h2>{options[3].name}</h2>
          <p>{options[3].note}</p>
        </div>
        <CollageOptionGrid />
      </section>
    </main>
  );
}
