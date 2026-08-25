import type { Metadata } from "next";
import { MeetTablePreview } from "@/components/meet-table-preview";

export const metadata: Metadata = {
  title: "Duos — Design Preview",
  description: "An experimental redesign of the Aynera Duos chapter.",
};

export default function MeetPreviewPage() { return <MeetTablePreview />; }
