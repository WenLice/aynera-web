import type { Metadata } from "next";
import { SuggestPreview } from "@/components/suggest-preview";

export const metadata: Metadata = {
  title: "Suggest an Idea | Aynera",
  description: "Share ideas and feedback that can help shape Aynera.",
};

export default function Suggest() {
  return <SuggestPreview />;
}
