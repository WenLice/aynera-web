import Link from "next/link";

const examples = [
  { title: "Market Evening", city: "Delhi", tags: "Markets · Tea · Walking", image: "/media/elaris-collage-market.png" },
  { title: "Courtyard Jazz", city: "Bangalore", tags: "Live music · Slow evenings · Small circles", image: "/media/elaris-gatherings-circle.png" },
  { title: "Gallery after hours", city: "Mumbai", tags: "Art walks · Design chats · City nights", image: "/media/elaris-gatherings-cafe.png" },
] as const;

const steps = [
  ["01", "A surprise appears", "Every Saturday, one small Squad gathering is revealed in each live city."],
  ["02", "You raise your hand", "See the idea, the partner place, and why it may suit you. Request a place if it feels right."],
  ["03", "Sunday happens", "Meet at a familiar public venue with a small group of people who chose the same plan."],
] as const;

export function SundayPage() {
  return <main id="main" className="pd-sunday-page">
    <header className="pd-sunday-hero"><div className="shell-x"><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Weekend Surprise</p><h1 className="pd-mega">Saturday reveals.<br />Sunday happens.</h1><p>A small, local plan each week for people who want to cross paths more naturally. No formal date, no crowded event calendar — just one good reason to leave the house.</p></div></header>

    <section className="pd-sunday-steps" aria-labelledby="sunday-steps-title"><div className="shell-x"><div><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />How it works</p><h2 id="sunday-steps-title" className="pd-display">One plan. A little mystery. A real Sunday.</h2></div><div className="pd-sunday-step-grid">{steps.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

    <section className="pd-sunday-examples" aria-labelledby="sunday-examples-title"><div className="shell-x"><div className="pd-sunday-examples-head"><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />What might appear</p><h2 id="sunday-examples-title" className="pd-display">A different reason to gather each week.</h2><p>Every gathering stays small, local, and based around something easy to share.</p></div><div className="pd-sunday-example-grid">{examples.map((event) => <article key={event.title}><img src={event.image} alt="" width={1000} height={750} /><div><p>Sunday · {event.city}</p><h3 className="pd-display">{event.title}</h3><span>{event.tags}</span></div></article>)}</div></div></section>

    <section className="pd-sunday-standard"><div className="shell-x"><div><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />The standard</p><h2 className="pd-display">Public places. Small groups. Nothing forced.</h2></div><p>Gatherings happen at trusted partner venues and are always optional. You can talk first, arrive on your own terms, and leave whenever you need to. It is a gentler way to make your city feel more open.</p></div></section>

    <section className="pd-sunday-close"><div className="shell-x"><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Your next Sunday</p><h2 className="pd-display">Be there when the next plan drops.</h2><p>Join the founding circle to hear about Weekend Surprise in Delhi, Mumbai, and Bangalore.</p><div><Link href="/early-access" className="pd-cta-warm">Join the founding circle</Link><Link href="/meet">Explore ways to meet <span aria-hidden>→</span></Link></div></div></section>
  </main>;
}
