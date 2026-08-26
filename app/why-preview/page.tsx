import type { Metadata } from "next";
import { GrievancePreview } from "@/components/grievance-preview";

export const metadata: Metadata = {
  title: "Grievance Preview | Aynera",
  description: "Preview of Aynera's Grievance page.",
};

export default function WhyPreviewPage() {
  return <GrievancePreview />;
}
