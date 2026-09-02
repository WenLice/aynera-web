import type { Metadata } from "next";
import { SafetyPreview } from "@/components/safety-preview";

export const metadata: Metadata = {
  title: "Safety centre | Aynera",
  description: "Safety tools, support, and human review for every stage of meeting through Aynera.",
};

export default function Safety() {
  return <SafetyPreview showVerificationExplainer />;
}
