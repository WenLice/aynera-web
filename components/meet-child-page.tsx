import Link from "next/link";

type Moment = { number: string; label: string; title: string; body: string; safety?: boolean };
type Props = { chapter: "Duos" | "Squads" | "Weekend Surprise"; eyebrow: string; title: React.ReactNode; lead: string; image: string; imageAlt: string; caption: readonly string[]; sectionTitle: React.ReactNode; sectionLead: string; moments: readonly Moment[]; closeEyebrow: string; closeTitle: React.ReactNode; closeBody: string; siblingHref: string; siblingLabel: string };

export function MeetChildPage(props: Props) {
  const isSquads = props.chapter === "Squads";
  const isWeekend = props.chapter === "Weekend Surprise";
  const symbolCount = isWeekend ? 3 : isSquads ? 4 : 2;
  return <main id="main" className={`duos-preview meet-child-page ${isWeekend ? "is-weekend" : isSquads ? "is-squads" : "is-duos"}`}>
    <header className="duos-preview-hero shell-x"><div className="duos-preview-hero-copy"><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />{props.eyebrow}</p><h1 className="pd-display">{props.title}</h1><p>{props.lead}</p><a href="#inside-chapter">Inside {props.chapter} <span aria-hidden>↓</span></a></div><figure className="duos-preview-hero-photo"><img src={props.image} alt={props.imageAlt} width="1536" height="1024" /><figcaption>{props.caption.map(item => <span key={item}>{item}</span>)}</figcaption></figure></header>
    <section id="inside-chapter" className="duos-preview-story" aria-labelledby="child-story-title"><div className="shell-x duos-preview-story-head"><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Inside this chapter</p><h2 id="child-story-title" className="pd-display">{props.sectionTitle}</h2><p>{props.sectionLead}</p></div><div className="duos-preview-thread shell-x"><span className="duos-preview-line" aria-hidden />{props.moments.map(moment => <article className="duos-preview-moment" key={moment.number}><div className="duos-preview-node" aria-hidden>{moment.number}</div><div className="duos-preview-note"><p>{moment.label}</p><h3 className="pd-display">{moment.title}</h3><p>{moment.body}</p>{moment.safety && <Link href="/safety">See the Safety centre <span aria-hidden>→</span></Link>}</div></article>)}</div></section>
    <section className="duos-preview-close"><div className="shell-x"><span className={`duos-preview-pair ${isWeekend ? "is-weekend" : isSquads ? "is-group" : ""}`} aria-hidden>{Array.from({ length: symbolCount }, (_, index) => <i key={index} />)}</span><p className="pd-eyebrow">{props.closeEyebrow}</p><h2 className="pd-display">{props.closeTitle}</h2><p>{props.closeBody}</p><div><Link className="pd-cta-warm" href="/early-access">Join the founding circle</Link><Link href={props.siblingHref}>{props.siblingLabel} <span aria-hidden>→</span></Link></div></div></section>
  </main>;
}
