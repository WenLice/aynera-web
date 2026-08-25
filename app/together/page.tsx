import type { Metadata } from "next";
import { TogetherOverview } from "@/components/together-overview";
export const metadata: Metadata = { title: "Together — When You Choose Each Other", description: "A mutual exclusivity chapter where discovery stops for both people and the relationship can begin." };
export default function Together() { return <TogetherOverview />; }
