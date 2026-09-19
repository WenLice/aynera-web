import type { Metadata } from "next";
import { EarlyAccessPreview } from "@/components/early-access-preview";

export const metadata: Metadata = {
  title: "Early Access | Aynera",
  description: "Join Aynera's founding network in Bangalore.",
};

export default function EarlyAccess() {
  return <EarlyAccessPreview />;
}
