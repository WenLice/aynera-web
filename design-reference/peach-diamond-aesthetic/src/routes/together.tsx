import { createFileRoute } from "@tanstack/react-router";
import { ChapterPage } from "@/components/chapter-page";
import { SideMark } from "@/components/primitives";
import { chapterBySlug } from "@/lib/site-content";

const chapter = chapterBySlug("/together");

export const Route = createFileRoute("/together")({
  head: () => ({
    meta: [
      { title: `${chapter.name} — ${chapter.heading} | Aynera` },
      { name: "description", content: chapter.lead.slice(0, 158) },
      { property: "og:title", content: `${chapter.name} — Aynera` },
      { property: "og:description", content: chapter.lead.slice(0, 158) },
    ],
  }),
  component: () => (
    <>
      <ChapterPage chapter={chapter} />
      <SideMark side="right" />
    </>
  ),
});
