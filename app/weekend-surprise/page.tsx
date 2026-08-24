import type { Metadata } from "next";
import { PageExperience } from "@/components/page-experience";
import { SundayPage } from "@/components/sunday-page";

export const metadata: Metadata = {
  title: "Weekend Surprise | Aynera",
  description: "A new small Squad gathering drops each Saturday and happens on Sunday.",
};

export default function WeekendSurprise() {
  return <><SundayPage /><PageExperience /></>;
}
