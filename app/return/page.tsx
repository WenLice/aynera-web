import type { Metadata } from "next";
import { ReturnOverview } from "@/components/return-overview";

export const metadata: Metadata = {
  title: "Reasons to Return | Aynera",
  description: "Why Aynera keeps moving: new reviewed people, new opportunities, and honest waitlists.",
};

export default function ReturnPage() {
  return <ReturnOverview />;
}
