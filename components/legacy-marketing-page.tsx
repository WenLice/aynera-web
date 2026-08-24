import type { Metadata } from "next";
import { PageExperience } from "@/components/page-experience";
import { getMarketingPage, type PageSlug } from "@/lib/legacy-pages";

export function legacyMetadata(slug: PageSlug): Metadata {
  const page = getMarketingPage(slug);
  return { title: page.title, description: page.description };
}

export function LegacyMarketingPage({ slug }: { slug: PageSlug }) {
  const page = getMarketingPage(slug);
  return <><div className="react-page" dangerouslySetInnerHTML={{ __html: page.mainHtml }} /><PageExperience bodyClass={page.bodyClass} /></>;
}
