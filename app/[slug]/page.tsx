import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageExperience } from "@/components/page-experience";
import { getMarketingPage, isPageSlug, routeSlugs } from "@/lib/legacy-pages";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return routeSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isPageSlug(slug)) return {};
  const page = getMarketingPage(slug);
  return {
    title: page.title,
    description: page.description,
  };
}

export default async function MarketingRoute({ params }: RouteProps) {
  const { slug } = await params;
  if (!isPageSlug(slug)) notFound();

  const page = getMarketingPage(slug);

  return (
    <>
      <div className="react-page" dangerouslySetInnerHTML={{ __html: page.mainHtml }} />
      <PageExperience bodyClass={page.bodyClass} />
    </>
  );
}
