import Link from "next/link";

const tracks = [
  {
    id: "fluid", number: "01", label: "Fluid", title: "For connection that stays open", subtitle: "Able to change shape without breaking.",
    lede: "Fluid is for people who want company, conversation and chemistry without a fixed destination attached. Nothing here pretends to be more than it is — and nothing here has to stay small either.",
    promise: "No hidden agenda to decode. Everyone on this track has said, in advance, that they are here for the present tense.",
    options: [
      { name: "Platonic", line: "Friendship and networking, clearly labelled.", body: "Meet people for the conversation, the craft, the city, the work. Romance is off the table by declaration, so the friendship can be real.", signals: "Friendship · Community · Networking" },
      { name: "Spontaneous", line: "Meet in the moment, part with grace.", body: "An evening that is allowed to be exactly one evening. Plans stay light, expectations stay honest, and either person can close the chapter kindly.", signals: "Low stakes · Present tense · No strings" },
    ],
  },
  {
    id: "intent", number: "02", label: "Intent", title: "For connection with a direction", subtitle: "A clear purpose, said out loud.",
    lede: "Intent is for people who already know the shape of the life they are building and would rather say so on day one than discover a mismatch on month six.",
    promise: "Substance over performance. Everyone on this track has committed to clarity about where they hope this goes.",
    options: [
      { name: "Prospect", line: "Dating with the door to more left open.", body: "Short-term and long-term live together here. You are getting to know a person seriously, without pretending you already know the ending.", signals: "Exclusive dating · Long-term open · Real pace" },
      { name: "Legacy", line: "Partnership meant to outlast the season.", body: "Marriage, family, shared plans, shared roots. For people building something they intend to hand forward, matched with people who want the same.", signals: "Life partnership · Family · Long horizon" },
    ],
  },
] as const;

const comparison = [
  ["What you say up front", "I’m open to where this goes.", "I know what I’m building."],
  ["Pace", "Light, unhurried, no timeline.", "Deliberate, with a direction agreed early."],
  ["Who you meet", "People here for the present tense.", "People who have named their horizon."],
  ["How it ends well", "A kind close, whenever either of you wants one.", "A clear yes, or an early, honest no."],
] as const;

const steps = [
  ["01", "Answer one honest question", "During early access we ask what you actually want right now — not what sounds impressive. Your answer places you on Fluid or Intent."],
  ["02", "Pick the shape inside it", "Platonic or Spontaneous on Fluid. Prospect or Legacy on Intent. This is what people see before they ever reach out."],
  ["03", "Move when your life moves", "You can change track. It resets what you’re shown, tells the people you’re already talking to, and never quietly rewrites your past."],
] as const;

const faqs = [
  ["Can I be on both tracks?", "No. One track at a time keeps the promise legible. Half-signals are how people get hurt."],
  ["Is Intent more serious than Fluid?", "It’s more specific, not more valuable. A clearly stated friendship is worth more than a vague romance."],
  ["Will people know if I switch?", "Anyone in an open conversation with you is told. No one gets to discover it accidentally."],
  ["Does my track change what I’m shown?", "Yes — you’re matched inside your track and sub-track, so the first message starts from the same page."],
] as const;

export function TrackPage() {
  return <main id="main" className="pd-track">
    <header className="pd-track-hero"><div className="shell-x"><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Track</p><h1 className="pd-mega">Two tracks.<br />One intention.</h1><p>Most apps make everyone share one lane and then wonder why the conversations misfire. Aynera asks the honest question first, and matches you inside the answer.</p></div></header>
    <section className="pd-track-routes">{tracks.map((track, index) => <article key={track.id} className={`pd-track-route is-${track.id}`}><div className="shell-x pd-track-route-grid"><div className="pd-track-route-intro"><p className="pd-track-index">{track.number} · {track.label}</p><h2 className="pd-display">{track.title}</h2><p className="pd-track-subtitle">{track.subtitle}</p><p className="pd-track-lede">{track.lede}</p><p className="pd-track-promise">{track.promise}</p></div><div className="pd-track-options">{track.options.map((option) => <article key={option.name} className="pd-track-option"><div><h3 className="pd-display">{option.name}</h3><span aria-hidden /></div><p className="pd-track-option-line">{option.line}</p><p>{option.body}</p><p className="pd-track-signals">{option.signals}</p></article>)}</div></div></article>)}</section>
    <section className="pd-track-compare"><div className="shell-x"><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Side by side</p><h2 className="pd-display">The difference, in plain language.</h2><div className="pd-track-table"><div className="pd-track-table-head"><span /><b>Fluid</b><b>Intent</b></div>{comparison.map(([label, fluid, intent]) => <div key={label} className="pd-track-table-row"><h3>{label}</h3><p>{fluid}</p><p>{intent}</p></div>)}</div></div></section>
    <section className="pd-track-choosing"><div className="shell-x"><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Choosing</p><h2 className="pd-display">You are not locked in — you are just being clear.</h2><div>{steps.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="pd-track-standard"><div className="shell-x"><div><h2 className="pd-display">The track changes. The standard does not.</h2></div><div><p>Verification, consent tools, mutual choice and reporting work identically on Fluid and Intent. Your track tells people what you are looking for — it never changes how carefully you are treated.</p><Link href="/safety">How safety works <span aria-hidden>→</span></Link></div></div></section>
    <section className="pd-track-faq"><div className="shell-x"><div><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Questions</p><h2 className="pd-display">Before you pick.</h2></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <section className="pd-track-close"><div className="shell-x"><p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Your starting point</p><h2 className="pd-display">Choose your track.</h2><p>Register interest and tell us whether Fluid or Intent fits where you are right now.</p><div><Link href="/early-access" className="pd-cta-warm">Join the founding circle</Link><Link href="/how-it-works">How it works <span aria-hidden>→</span></Link></div></div></section>
  </main>;
}
