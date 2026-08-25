import Link from "next/link";

const paths = [
  { label: "Explore", title: "Open to meeting someone.", body: "Meet people and see what develops. Your pace stays open, without pressure to promise a destination before a connection exists.", image: "/media/elaris-intent-explore.png", alt: "Two people exploring a market together" },
  { label: "Relationship", title: "Looking for something meaningful.", body: "You are open to building a relationship when the connection is right—with enough clarity that neither person has to guess the direction.", image: "/media/elaris-intent-relationship.png", alt: "A meaningful conversation over a quiet table" },
  { label: "Life partner", title: "Ready for a shared horizon.", body: "Long-term partnership is a real goal. Say it plainly and meet people who are genuinely open to building toward the same future.", image: "/media/elaris-intent-partner.png", alt: "Two people walking a shared path" },
] as const;

export function StartWithClarityPreview() {
  return <main id="main" className="clarity-preview">
    <header className="clarity-preview-hero shell-x"><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Start With Clarity</p><h1 className="pd-display">Say where you are.<br />Meet from there.</h1><p>You do not need to predict the ending. You only need to be honest about the beginning.</p></header>

    <section className="clarity-path" aria-labelledby="clarity-path-title"><div className="shell-x"><div className="clarity-path-intro"><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />One honest starting point</p><h2 id="clarity-path-title" className="pd-display">What would you be happy<br />if this became?</h2><p>There is no better answer—only the answer that reflects your life now.</p></div><div className="clarity-path-line" aria-hidden /><div className="clarity-path-list">{paths.map((path) => <article key={path.label}><div className="clarity-path-image"><img src={path.image} alt={path.alt} width={1100} height={880} /></div><div className="clarity-path-copy"><span>{path.label}</span><h3 className="pd-display">{path.title}</h3><p>{path.body}</p></div></article>)}</div></div></section>

    <section className="clarity-change"><div className="shell-x"><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Clarity can move</p><h2 className="pd-display">Life changes.<br />Your answer can too.</h2><p>Update what you are open to whenever your circumstances change. It shapes future introductions without rewriting the connections already made.</p><Link href="/track" className="pd-cta-warm">See how tracks work <span aria-hidden>→</span></Link></div></section>

    <section className="clarity-close"><div className="shell-x"><p className="pd-eyebrow">Begin honestly</p><h2 className="pd-display">A clearer beginning makes room for a kinder journey.</h2><div><Link href="/early-access" className="pd-cta-warm">Join the founding circle</Link><Link href="/meet">Explore ways to meet <span aria-hidden>→</span></Link></div></div></section>
  </main>;
}
