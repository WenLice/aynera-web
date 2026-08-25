import type { Metadata } from "next";
import { MeetTablePreview } from "@/components/meet-table-preview";

export const metadata: Metadata = {
  title: "Track — Fluid and Intent",
  description: "Two ways to begin on Aynera: Fluid for open connection, Intent for a clear direction.",
};

export default function Track() { return <MeetTablePreview />; }
