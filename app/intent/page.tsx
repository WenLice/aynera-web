import type { Metadata } from "next";
import { IntentPage } from "@/components/intent-page";
import { PageExperience } from "@/components/page-experience";

export const metadata: Metadata = {
  title: "Intent | Aynera",
  description: "Say what you are open to right now: explore, a relationship, or a life partner.",
};

export default function Intent() {
  return <><IntentPage /><PageExperience /></>;
}
