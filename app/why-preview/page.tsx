import type { Metadata } from "next";
import { EarlyAccessPreview } from "@/components/early-access-preview";

export const metadata: Metadata = {
  title: "Early Access Preview | Aynera",
  description: "Preview of Aynera's Early Access page.",
};

export default function WhyPreviewPage() {
  return <EarlyAccessPreview />;
}
