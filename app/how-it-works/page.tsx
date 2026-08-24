import type { Metadata } from "next";
import { HowItWorksAtlas } from "@/components/how-it-works-atlas";
import { PageExperience } from "@/components/page-experience";
import { getMarketingPage } from "@/lib/legacy-pages";

export function generateMetadata(): Metadata {
  const page = getMarketingPage("how-it-works");
  return {
    title: page.title,
    description: page.description,
  };
}

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksAtlas />
      <PageExperience />
    </>
  );
}
