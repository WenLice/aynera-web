"use client";

import Link from "next/link";
import { useState } from "react";

const ways = [
  { number: "01", name: "Duos", mode: "Direct · One to one · Local", title: "One good introduction at a time.", body: "A small number of relevant one-to-one introductions, with enough context to understand why meeting each other could be worth exploring.", href: "/duos", action: "Explore Duos", image: "/media/aynera-meet-hero-v2.png", alt: "Two people enjoying a warm first conversation over coffee" },
  { number: "02", name: "Squads", mode: "Social · Small group · Local", title: "A shared way to cross paths.", body: "Small social experiences around shared interests, energy and lifestyle — a more natural way to meet than a formal date.", href: "/squads", action: "Explore Squads", image: "/media/aynera-squads-hero-v5.png", alt: "Four people connecting naturally around a café table" },
] as const;

type WayId = typeof ways[number]["name"];

export function MeetWaysIndex() {
  const [open, setOpen] = useState<WayId>("Duos");
  return <div className="meet-index-list pd-meet-index-list" aria-label="Ways to meet">
    {ways.map((way) => {
      const active = open === way.name;
      return <article className={active ? "meet-index-item is-open" : "meet-index-item"} key={way.href}>
        <button type="button" aria-expanded={active} onClick={() => setOpen(way.name)}>
          <span className="meet-index-no">{way.number}</span><span className="meet-index-name">{way.name}</span>
          <span className="meet-index-note">{way.name === "Duos" ? "One to one" : "Small group"}</span><span className="meet-index-symbol" aria-hidden>{active ? "−" : "+"}</span>
        </button>
        <div className="meet-index-reveal" aria-hidden={!active}>
          <div className="meet-index-reveal-inner shell-x">
            <figure><img src={way.image} alt={way.alt} width="1536" height="1024" /></figure>
            <div className="meet-index-copy"><span>{way.mode}</span><h3 className="pd-display">{way.title}</h3><p>{way.body}</p><Link href={way.href}>{way.action} <span aria-hidden>↗</span></Link></div>
          </div>
        </div>
      </article>;
    })}
  </div>;
}
