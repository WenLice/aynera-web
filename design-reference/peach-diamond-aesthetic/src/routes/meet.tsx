import { createFileRoute } from "@tanstack/react-router";
import { ChapterPage } from "@/components/chapter-page";
import { SideMark } from "@/components/primitives";
import { chapterBySlug } from "@/lib/site-content";

const chapter = chapterBySlug("/meet");

export const Route = createFileRoute("/meet")({
  head: () => ({
    meta: [
      { title: "Meet — introductions with a reason | Elaris" },
      { name: "description", content: chapter.lead.slice(0, 158) },
      { property: "og:title", content: "Meet — introductions with a reason" },
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
