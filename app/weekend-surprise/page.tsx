import type { Metadata } from "next";
import { MeetChildPage } from "@/components/meet-child-page";

export const metadata: Metadata = {
  title: "Weekend Surprise | Aynera",
  description: "A new small Squad gathering drops each Saturday and happens on Sunday.",
};

const moments = [
  { number: "01", label: "Saturday", title: "A surprise appears", body: "Every Saturday, one small local gathering is revealed in each live city—a simple plan designed to make leaving the house feel worthwhile." },
  { number: "02", label: "Your choice", title: "Raise your hand", body: "See the idea, the partner place, and why the gathering may suit you. Request a place only when the plan genuinely feels right." },
  { number: "03", label: "Sunday", title: "The plan becomes real", body: "Meet at a familiar public venue with a small group of people who independently chose the same way to spend their Sunday." },
  { number: "04", label: "The standard", title: "Public, small, and never forced", body: "A visible host, clear expectations, trusted venues, and the freedom to arrive and leave on your own terms.", safety: true },
] as const;

export default function WeekendSurprise() { return <MeetChildPage chapter="Weekend Surprise" eyebrow="Weekend Surprise" title={<>Saturday reveals.<br />Sunday happens.</>} lead="One small local plan each week for people who want to cross paths naturally. No formal date or crowded calendar—just one good reason to leave the house." image="/media/aynera-squads-hero-v4.png" imageAlt="People enjoying a lively shared weekend experience" caption={["One weekly plan", "Small local group", "A little mystery"]} sectionTitle={<>One plan. A little mystery.<br />A real Sunday.</>} sectionLead="Every gathering is small, local, and built around something easy to share. You choose whether the idea, setting, and people feel right for your weekend." moments={moments} closeEyebrow="Your next Sunday" closeTitle={<>Be there when the<br />next plan drops.</>} closeBody="Join the founding circle to hear about Weekend Surprise in Delhi, Mumbai, and Bangalore." siblingHref="/meet" siblingLabel="Explore ways to meet" />; }
