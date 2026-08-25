import type { Metadata } from "next";
import { FocusOverview } from "@/components/focus-overview";
export const metadata: Metadata = { title: "Focus — Give One Person Your Attention", description: "A mutual, protected window for two people who want to explore one connection seriously." };
export default function Focus() { return <FocusOverview />; }
