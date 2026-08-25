import type { Metadata } from "next";
import { EraOverview } from "@/components/era-overview";
export const metadata: Metadata = { title: "Era — What Comes After Just Us", description: "The future of Aynera after two people choose each other, built slowly with the people living it." };
export default function EraAhead() { return <EraOverview />; }
