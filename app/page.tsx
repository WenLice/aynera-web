import type { Metadata } from "next";
import { HomeAppPreviewSection } from "@/components/home-app-preview-section";
import { HomeClicksSection } from "@/components/home-clicks-section";
import { HomeCohortSection } from "@/components/home-cohort-section";
import { HomeIntentSection } from "@/components/home-intent-section";
import { HomeMasthead } from "@/components/home-masthead";
import { HomePrinciplesSection } from "@/components/home-principles-section";
import { HomeProfilesSection } from "@/components/home-profiles-section";
import { HomeReturnSection } from "@/components/home-return-section";
import { HomeSaturdaySection } from "@/components/home-saturday-section";
import { HomeWaysSection } from "@/components/home-ways-section";
import { HomeWhySection } from "@/components/home-why-section";
import { PageExperience } from "@/components/page-experience";
import { getMarketingPage } from "@/lib/legacy-pages";

export function generateMetadata(): Metadata {
  const page = getMarketingPage("home");
  return {
    title: page.title,
    description: page.description,
  };
}

function withoutMigratedSections(mainHtml: string) {
  return mainHtml
    .replace(/<section class="hero"[\s\S]*?<\/section>/i, "")
    .replace(/<section class="section section-difference"[\s\S]*?<\/section>/i, "")
    .replace(/<section class="section section-why"[\s\S]*?<\/section>/i, "")
    .replace(/<section class="section section-collage"[\s\S]*?<\/section>/i, "")
    .replace(/<section class="section section-difference" id="intent"[\s\S]*?<\/section>/i, "")
    .replace(
      /<section class="section section-difference section-return" id="return"[\s\S]*?<\/section>/i,
      "",
    )
    .replace(/<section class="section section-principles"[\s\S]*?<\/section>/i, "")
    .replace(/<section class="section section-difference" id="if-it-clicks"[\s\S]*?<\/section>/i, "")
    .replace(/<section class="section section-cohort"[\s\S]*?<\/section>/i, "");
}

export default function HomePage() {
  const page = getMarketingPage("home");

  return (
    <>
      <HomeMasthead />
      <HomeWhySection />
      <HomeWaysSection />
      <HomeAppPreviewSection />
      <HomeIntentSection />
      <HomePrinciplesSection />
      <HomeReturnSection />
      <HomeSaturdaySection showEventDetails />
      <HomeCohortSection />
      <HomeClicksSection />
      <HomeProfilesSection />
      <div
        className="react-page"
        dangerouslySetInnerHTML={{ __html: withoutMigratedSections(page.mainHtml) }}
      />
      <PageExperience bodyClass="home-page" />
    </>
  );
}
