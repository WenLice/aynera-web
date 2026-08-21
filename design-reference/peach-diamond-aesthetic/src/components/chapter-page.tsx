import { ClosingCta, Eyebrow, Reveal, Section } from "./primitives";
import { chapters, type Chapter } from "@/lib/site-content";
import { Link } from "@tanstack/react-router";

export function ChapterPage({ chapter }: { chapter: Chapter }) {
  const others = chapters.filter((c) => c.slug !== chapter.slug);

  return (
    <main id="main">
      <header className="pt-32 lg:pt-44">
        <div className="shell-x grid items-end gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24">
          <Reveal>
            <Eyebrow>{chapter.kicker}</Eyebrow>
            <h1 className="display mt-8 text-[clamp(2.6rem,6vw,4.8rem)]">{chapter.heading}</h1>
            <p className="lede mt-8 max-w-xl">{chapter.lead}</p>
          </Reveal>
          <Reveal delay={120} className="relative">
            <span className="index-num">Chapter {chapter.index}</span>
            <img
              src={chapter.image}
              alt=""
              loading="lazy"
              className="frame mt-5 aspect-4/3 w-full object-cover"
            />
          </Reveal>
        </div>
        <div className="shell-x">
          <span className="seam block" aria-hidden />
        </div>
      </header>

      <Section>
        <Reveal>
          <Eyebrow>Inside this chapter</Eyebrow>
        </Reveal>
        <div className="mt-12 grid gap-x-14 md:grid-cols-2">
          {chapter.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className="relative py-9">
              <span className="seam absolute inset-x-0 top-0 block" aria-hidden />
              <p className="index-num">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="display mt-4 text-2xl">{item.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-cream-dim">{item.body}</p>
            </Reveal>
          ))}
        </div>

        {chapter.next && (
          <Reveal className="mt-12">
            <Link
              to={chapter.next.to as never}
              className="group inline-flex items-center gap-2 border-b border-line pb-1 text-sm font-bold text-plum-deep transition-colors hover:border-peach-deep hover:text-peach-deep"
            >
              {chapter.next.label}
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </Reveal>
        )}
      </Section>

      <Section>
        <Reveal>
          <Eyebrow>Other chapters</Eyebrow>
        </Reveal>
        <ul className="mt-10 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((other, i) => (
            <Reveal as="li" key={other.slug} delay={i * 60} className="relative">
              <span className="seam absolute inset-x-0 top-0 block" aria-hidden />
              <Link
                to={other.slug as never}
                className="row-hover group flex h-full flex-col py-8"
              >
                <span className="index-num">{other.index}</span>
                <span className="display mt-4 text-xl transition-colors group-hover:text-peach-deep">
                  {other.name}
                </span>
                <span className="mt-3 text-sm leading-relaxed text-cream-dim">{other.summary}</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <ClosingCta
        title="The search pauses when you both decide."
        body="Join the founding circle — Delhi NCR opens first, Bangalore follows."
        secondary={{ label: "How it works", to: "/how-it-works" }}
      />
    </main>
  );
}
