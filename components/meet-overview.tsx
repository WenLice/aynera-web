import Link from "next/link";

const ways = [
  { number: "01", name: "Duos", title: "One good introduction at a time.", body: "A small number of relevant one-to-one introductions, with enough context to understand why meeting each other could be worth exploring.", href: "/duos", action: "Explore Duos", image: "/media/elaris-meet-table.png", alt: "Two people in a warm first conversation across a table" },
  { number: "02", name: "Squads", title: "A shared way to cross paths.", body: "Small social experiences around shared interests, energy and lifestyle — a more natural way to meet than a formal date.", href: "/squads", action: "Explore Squads", image: "/media/elaris-gatherings-cafe.png", alt: "A small group gathering around a shared table" },
] as const;

export function MeetOverview() {
  return <main id="main" className="pd-meet-overview">
    <header className="pd-meet-hero"><div className="shell-x"><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Meet</p><h1 className="pd-mega">Two ways to meet.<br />The same local network.</h1><p>Choose a direct introduction, a shared experience, or keep both open. Aynera gives you a little more context before the next step.</p></div></header>
    <section className="pd-meet-ways" aria-labelledby="meet-ways-heading"><div className="shell-x"><div className="pd-meet-ways-intro"><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Choose your way</p><h2 id="meet-ways-heading" className="pd-display">Start with the kind of connection that feels natural to you.</h2></div><div className="pd-meet-ways-grid">{ways.map((way) => <article key={way.href}><div className="pd-meet-way-copy"><p>{way.number} · {way.name}</p><h3 className="pd-display">{way.title}</h3><span className="pd-meet-way-rule" aria-hidden /><p>{way.body}</p><Link href={way.href}>{way.action} <span aria-hidden>→</span></Link></div><img src={way.image} alt={way.alt} width={1000} height={750} /></article>)}</div></div></section>
    <section className="pd-meet-note"><div className="shell-x"><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />The common ground</p><h2 className="pd-display">Whether you meet in a Duo or a Squad, control stays with you.</h2><p>Talk first when you need to. Meet in public when you choose to. Nothing becomes more than a conversation unless it is mutual.</p><div className="pd-meet-note-actions"><Link href="/focus">Explore Focus <span aria-hidden>→</span></Link><Link href="/safety">How safety works <span aria-hidden>→</span></Link></div></div></section>
  </main>;
}
