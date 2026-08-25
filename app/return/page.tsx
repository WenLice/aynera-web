import { LegacyMarketingPage, legacyMetadata } from "@/components/legacy-marketing-page";

export const metadata = legacyMetadata("return");

export default function ReturnPage() {
  return <LegacyMarketingPage slug="return" />;
}
