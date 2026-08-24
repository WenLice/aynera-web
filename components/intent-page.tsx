import Link from "next/link";

const intentions = [
  {
    number: "01", label: "Explore", title: "Open to meeting someone.",
    body: "You want to meet people and see what develops. Introductions and gatherings should respect that pace, not push you toward a label you did not choose.",
    image: "/media/elaris-intent-explore.png", alt: "Two people exploring a market together",
  },
  {
    number: "02", label: "Relationship", title: "Looking for a relationship.",
    body: "You want something meaningful if the connection is right. Pace, intent, and context stay clear, so you are not read as someone looking for something entirely different.",
    image: "/media/elaris-intent-relationship.png", alt: "A meaningful conversation over a quiet table",
  },
  {
    number: "03", label: "Life partner", title: "Ready for a life partner.",
    body: "Long-term partnership is a real goal, without turning your profile into a biodata form. You can say so clearly and meet people who are open to the same horizon.",
    image: "/media/elaris-intent-partner.png", alt: "Two people walking a shared path",
  },
] as const;

export function IntentPage() {
  return <main id="main" className="pd-intent-page">
    <header className="pd-intent-page-hero"><div className="shell-x"><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Intent</p><h1 className="pd-mega">What would you be happy if this became?</h1><p>You do not have to choose between casual dating and matrimony before you meet anyone. Just say what you are genuinely open to right now.</p></div></header>

    <section className="pd-intent-page-choices" aria-labelledby="intent-choices-title"><div className="shell-x"><div className="pd-intent-page-intro"><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Your answer, in plain language</p><h2 id="intent-choices-title" className="pd-display">Choose the honest starting point.</h2><p>There is no better answer. Intent simply gives every introduction a little more context from the start.</p></div><div className="pd-intent-page-grid">{intentions.map((intent) => <article key={intent.label}><img src={intent.image} alt={intent.alt} width={1100} height={880} /><div><p><span>{intent.number}</span>{intent.label}</p><h3 className="pd-display">{intent.title}</h3><span className="pd-intent-page-rule" aria-hidden /><p>{intent.body}</p></div></article>)}</div></div></section>

    <section className="pd-intent-page-change"><div className="shell-x"><div><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Nothing is fixed</p><h2 className="pd-display">Life changes. Your intent can too.</h2></div><div><p>You can update what you are open to as your circumstances change. It simply changes the context for future introductions — not the story you have already lived.</p><Link href="/track">See how tracks work <span aria-hidden>→</span></Link></div></div></section>

    <section className="pd-intent-page-close"><div className="shell-x"><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Start with clarity</p><h2 className="pd-display">Say where you are. Meet from there.</h2><p>Join the founding circle and be part of a more intentional local network.</p><div><Link href="/early-access" className="pd-cta-warm">Join the founding circle</Link><Link href="/meet">Explore ways to meet <span aria-hidden>→</span></Link></div></div></section>
  </main>;
}
