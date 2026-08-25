import type { Metadata } from "next";
import { StartWithClarityPreview } from "@/components/start-with-clarity-preview";

export const metadata: Metadata = {
  title: "Start With Clarity | Aynera",
  description: "Start with clarity about what you are open to right now: explore, a relationship, or a life partner.",
};

export default function Intent() {
  return <StartWithClarityPreview />;
}
