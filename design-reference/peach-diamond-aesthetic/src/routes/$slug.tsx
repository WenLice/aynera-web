import { createFileRoute, notFound } from "@tanstack/react-router";
import { getMarketingPage, isLegalSlug } from "@/lib/marketing-pages";
import { PageHero, Reveal } from "@/components/primitives";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    if (!isLegalSlug(params.slug)) throw notFound();
    return getMarketingPage(params.slug);
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.title },
          { name: "description", content: loaderData.description.slice(0, 158) },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.description.slice(0, 158) },
        ]
      : [{ title: "Not found — Elaris" }, { name: "robots", content: "noindex" }],
  }),
  component: LegalRoute,
});

const headings: Record<string, { eyebrow: string; title: string }> = {
  privacy: { eyebrow: "Legal", title: "Privacy Notice" },
  terms: { eyebrow: "Legal", title: "Terms of Use" },
  "delete-account": { eyebrow: "Your data", title: "Delete your account" },
  grievance: { eyebrow: "Support", title: "Grievance channel" },
};

function LegalRoute() {
  const page = Route.useLoaderData();
  const heading = headings[page.slug] ?? { eyebrow: "Elaris", title: page.title };

  return (
    <main id="main">
      <PageHero eyebrow={heading.eyebrow} title={heading.title} />
      <section className="shell pb-28">
        <Reveal className="legal-prose max-w-3xl">
          <div dangerouslySetInnerHTML={{ __html: page.mainHtml }} />
        </Reveal>
      </section>
    </main>
  );
}
