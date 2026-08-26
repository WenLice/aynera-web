import type { Metadata } from "next";
import { GrievancePreview } from "@/components/grievance-preview";

export const metadata: Metadata = {
  title: "Grievance | Aynera",
  description: "Contact Aynera for support, safety concerns, or formal grievances.",
};

export default function Grievance() {
  return <GrievancePreview />;
}
