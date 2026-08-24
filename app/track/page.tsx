import type { Metadata } from "next";
import { TrackPage } from "@/components/track-page";

export const metadata: Metadata = {
  title: "Track — Fluid and Intent",
  description: "Two ways to begin on Aynera: Fluid for open connection, Intent for a clear direction.",
};

export default function Track() { return <TrackPage />; }
