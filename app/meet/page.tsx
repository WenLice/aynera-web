import type { Metadata } from "next";
import { MeetOverview } from "@/components/meet-overview";

export const metadata: Metadata = {
  title: "Meet — Duos and Squads",
  description: "Meet through a direct introduction or a shared local experience on Aynera.",
};

export default function MeetPage() { return <MeetOverview />; }
