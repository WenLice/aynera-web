import type { Metadata } from "next";
import { ChaptersPage } from "@/components/chapters-page";
import { PageExperience } from "@/components/page-experience";

export const metadata: Metadata = {
  title: "Chapters | Aynera",
  description: "The four chapters of the Aynera journey: Meet, Focus, Together, and Era.",
};

export default function Chapters() {
  return <><ChaptersPage /><PageExperience /></>;
}
