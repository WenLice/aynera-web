import type { Metadata } from "next";
import { WhyExistPreview } from "@/components/why-exist-preview";

export const metadata: Metadata = {
  title: "Why Aynera exists",
  description:
    "Aynera expands your real-world circle with relevant people and more natural opportunities to meet.",
};

export default function WhyAyneraPage() {
  return <WhyExistPreview />;
}
