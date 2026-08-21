export type ChapterItem = { title: string; body: string };

export type Chapter = {
  slug: string;
  index: string;
  name: string;
  kicker: string;
  heading: string;
  lead: string;
  summary: string;
  image: string;
  items: ChapterItem[];
  next?: { label: string; to: string };
};

export const chapters: Chapter[] = [
  {
    slug: "/meet",
    index: "01",
    name: "Meet",
    kicker: "01 · Meet",
    heading: "Meet people worth knowing.",
    lead: "A few thoughtful 1:1 introductions. Limited, explained, and meant to become real conversation — without an endless feed.",
    summary: "A small number of relevant introductions, each with a reason.",
    image: "/media/elaris-meet-gallery.webp",
    items: [
      {
        title: "Fewer introductions on purpose",
        body: "In the pilot you get a small set of thoughtful intros. Scarcity protects attention — so you actually read someone, instead of training your brain to discard faces in under a second.",
      },
      {
        title: "A reason you might connect",
        body: "Intent, location, Taste and reciprocal eligibility inform who you see, and every introduction comes with plain-language context. We will never display a compatibility percentage.",
      },
      {
        title: "Conversation before contact",
        body: "Conversation opens through controlled, mutual interaction — not unlimited cold inbound messaging. Share numbers and socials only when it feels right.",
      },
      {
        title: "Meet safely, online and off",
        body: "Prefer recommended public places and partner venues where available. Use a date plan, an optional check-in, and Share Date with someone you trust.",
      },
    ],
    next: { label: "Another way to meet: Taste Gatherings", to: "/gatherings" },
  },
  {
    slug: "/focus",
    index: "02",
    name: "Focus",
    kicker: "02 · Focus",
    heading: "Give one person your full attention.",
    lead: "Focus is a protected window for two people who want to explore seriously — without new faces pulling you away. It only starts when both of you agree.",
    summary: "An optional, mutual pause on new discovery for one connection.",
    image: "/media/elaris-focus-gallery-one.webp",
    items: [
      {
        title: "Mutual or it doesn't exist",
        body: "One person can ask to Focus. Nothing changes until the other independently accepts. No silent lock-ins. No pressure traps dressed as romance.",
      },
      {
        title: "A clear window of time",
        body: "Choose 14, 30, or 60 days. For that stretch, new introductions pause for both of you. Unrelated chats move aside so this connection can breathe without the noise of options.",
      },
      {
        title: "Enforced in the product",
        body: "Focus is not a soft status badge. Eligibility for new intros and likes is paused for both accounts. You get the calm of commitment-in-progress — without pretending exclusivity yet.",
      },
      {
        title: "Optional, always",
        body: "Extend Focus, step into Together, return to discovery, or close with care. Not every Elaris story has to reach this state — and ending Focus is allowed anytime.",
      },
    ],
    next: { label: "Optional next: Together", to: "/together" },
  },
  {
    slug: "/together",
    index: "03",
    name: "Together",
    kicker: "03 · Together",
    heading: "When you choose each other, we stop the search.",
    lead: "Together is the promise made real. Both of you confirm exclusivity — and Elaris stops showing either of you anyone else.",
    summary: "Both people confirm exclusivity — discovery stops for both of you.",
    image: "/media/elaris-together-gallery.webp",
    items: [
      {
        title: "Two yeses, never one",
        body: "Exclusivity is a shared decision. Each person confirms on their own. Until both say yes, discovery stays available — so no one gets trapped in a one-sided \u201cwe're exclusive.\u201d",
      },
      {
        title: "Discovery ends for both",
        body: "Once Together begins, introductions, likes, and new matches stop for both of you. Success is not churn here — it's the moment the product gets out of the way.",
      },
      {
        title: "A door you can still open",
        body: "Leaving is allowed. Cooling-off and a respectful close stay available. Together is a commitment chapter, not a cage — honesty matters more than optics.",
      },
      {
        title: "Your relationship isn't ours",
        body: "Your relationship does not have to live inside Elaris. The search ends so the relationship can begin, wherever it actually happens.",
      },
    ],
    next: { label: "Back to Meet", to: "/meet" },
  },
  {
    slug: "/era-ahead",
    index: "04",
    name: "Era ahead",
    kicker: "04 · Era ahead",
    heading: "What comes after just us.",
    lead: "Elaris begins with meeting done differently. The era ahead is everything that can grow after two people choose each other — designed slowly, with the people living it.",
    summary: "Future relationship tools shaped with the founding cohort.",
    image: "/media/elaris-era-ahead-gallery.webp",
    items: [
      {
        title: "Not a matrimony marketplace",
        body: "Era ahead is not a wedding funnel in disguise. Elaris will not split into a dating app and a matrimony app — we stay one journey for people who want depth first.",
      },
      {
        title: "Future chapters, earned",
        body: "Shared milestones, deeper relationship tools, and optional life-stage support may come later — only when the core path (Meet → Focus → Together) is trusted and loved.",
      },
      {
        title: "Built with the cohort",
        body: "Early members in Delhi NCR and Bangalore help decide what \u201cafter just us\u201d should feel like. We listen before we expand. Ambition without rushing the foundation.",
      },
      {
        title: "The era of togetherness",
        body: "The long promise stays simple: help two people find each other with care, then help them stay — in a product that knows when to stop selling options and start protecting a bond.",
      },
    ],
    next: { label: "Back to Meet", to: "/meet" },
  },
];

export const chapterBySlug = (slug: string) => chapters.find((c) => c.slug === slug)!;

export const journeySteps = [
  {
    step: "Join a local network",
    title: "Start where there are enough people nearby.",
    body: "Choose the founding market, share what you are open to, and join when there is enough relevant local activity. Delhi NCR is opening first. Bangalore and Mumbai stay next-city interest until each is ready.",
    gain: "Honest waitlists and no fake countdowns",
    link: null as null | { label: string; to: string },
  },
  {
    step: "Build context",
    title: "Profile, Taste and intent — with clear privacy.",
    body: "Review, profile, Taste and intent help Elaris understand how you like to meet. We explain what is public, what stays private, and what is used only for recommendations.",
    gain: "Context without a compatibility score",
    link: { label: "How intent works", to: "/intent" },
  },
  {
    step: "Discover your way",
    title: "1:1 introductions and/or small Taste gatherings.",
    body: "Receive curated introductions, see relevant small gatherings, or both. A gathering is an activation of the same local network — not a separate events product.",
    gain: "More than one way to cross paths",
    link: { label: "Taste Gatherings", to: "/gatherings" },
  },
  {
    step: "Meet safely",
    title: "Talk here first — meet when it feels right.",
    body: "For 1:1, chat in-app and use public-place and date-plan tools. Gathering participants follow host and community rules. Safety tools stay free.",
    gain: "Control before, during, and after the offline step",
    link: { label: "Explore the Safety centre", to: "/safety" },
  },
  {
    step: "Keep exploring or focus",
    title: "The network refreshes. Mutual states stay optional.",
    body: "If nothing clicks, new people and opportunities appear. If one connection does, Focus and Together remain optional mutual states — not a required journey.",
    gain: "A reason to return without infinite swiping",
    link: { label: "Why come back", to: "/return" },
  },
];

export const safetyPillars = [
  {
    title: "Verification before discovery",
    body: "Phone, email, and liveness checks before anyone appears in introductions. Badges explain what was verified — they raise trust, they never guarantee behaviour.",
  },
  {
    title: "Recommended public places",
    body: "For first meets, prefer busy public spots and partner venues where available — places with people around, clear hours, and a safer vibe than isolated spots. These are recommendations, not surveillance. You still choose where to go.",
  },
  {
    title: "Date plan & optional check-in",
    body: "Set venue and time before you go. Check in when you arrive if you want — so your plan is clear and a trusted person knows you're okay. No continuous live tracking. No forced location trail.",
  },
  {
    title: "Share Date with someone you trust",
    body: "One tap sends venue and time to a friend or family member. They know where you planned to be — without Elaris following your every move.",
  },
  {
    title: "Report & block — in-app or after",
    body: "Report a profile, message, or offline incident in a few taps. Blocking ends contact immediately. You can still report after a date — safety does not end when the chat ends.",
  },
  {
    title: "Human review when it matters",
    body: "Automated filters help triage. Trained people handle severe cases, appeals, underage concerns, and offline safety reports — so serious issues are not left to a bot alone.",
  },
];

export const gatheringSafety = [
  {
    title: "Host presence",
    body: "A visible host, public venue, conduct expectations, and an easy report route during the gathering.",
  },
  {
    title: "Consent and contact",
    body: "Photo consent before pictures. No forced pairings. No forced contact-sharing. Harassment and unwanted repeated approaches can be reported.",
  },
  {
    title: "After the gathering",
    body: "Event removal when needed. Post-event reporting stays open. No continuous live tracking. Trusted-person sharing stays optional.",
  },
];

export const verificationSteps = [
  {
    title: "Phone + email",
    body: "OTP and verified email before profile approval. Rate limits stop spam and fake signup storms.",
  },
  {
    title: "Video selfie / liveness",
    body: "A short liveness check confirms you're a real person matching your photos — not a scraped gallery.",
  },
  {
    title: "Age assurance",
    body: "18+ only. Uncertain cases go to manual review. Minors never enter discovery.",
  },
  {
    title: "Human review",
    body: "During the pilot, every profile is reviewed for quality, authenticity, and policy before introductions begin.",
  },
];

export const principles = [
  {
    title: "Reviewed access, not a guarantee.",
    body: "Elaris reviews access and uses verification to raise confidence around who enters the network — but no check can guarantee how another person will behave.",
  },
  {
    title: "Get a real read first.",
    body: "Start inside Elaris while you understand someone's pace, intent and vibe. Your phone number and social handles stay private until you decide to share them.",
  },
  {
    title: "Make the first meet easy to plan safely.",
    body: "For first meetings, Elaris encourages busy public places and recommended venues. Share meeting details with someone you trust and use simple check-in tools. Core safety tools stay free.",
  },
  {
    title: "Nothing changes unless it's mutual.",
    body: "Focus and Together begin only after both people confirm independently. No silent lock-ins, and either person can still leave respectfully.",
  },
];

export const meetWays = [
  {
    kicker: "01 / 1:1",
    title: "1:1 Introductions",
    body: "A small number of relevant introductions — with enough context to understand why meeting each other could be worth exploring.",
    to: "/meet",
    link: "Inside 1:1 Meet",
  },
  {
    kicker: "02 / Taste",
    title: "Meet through Taste",
    body: "Small social experiences around shared interests, energy and lifestyle — a more natural way to meet than starting everything with a formal date.",
    to: "/gatherings",
    link: "See Taste Gatherings",
  },
];

export const intents = [
  {
    kicker: "01 / Explore",
    title: "Open to meeting someone",
    body: "You want to meet people and see what develops. Introductions and gatherings should respect that pace — not push you toward a label you did not choose.",
  },
  {
    kicker: "02 / Relationship",
    title: "Looking for a relationship",
    body: "You want something meaningful if the connection is right. Pace, intent and context stay visible so you are not read as someone looking for something entirely different. Still no compatibility score.",
  },
  {
    kicker: "03 / Partner",
    title: "Ready for a life partner",
    body: "Long-term partnership is a real goal — without turning your profile into a biodata form. You can say so clearly. Elaris will not split into a dating app and a matrimony app.",
  },
];

export const returnReasons = [
  {
    kicker: "01 / People",
    label: "Coming to the founding cohort",
    title: "New reviewed people",
    body: "A local network changes as new members become available nearby. That is the reason to return — not an infinite feed.",
  },
  {
    kicker: "02 / Opportunities",
    label: "What a founding week could look like",
    title: "New opportunities",
    body: "A 1:1 introduction, a coffee circle, or a food walk. These are labelled as examples until host, venue and capacity are real.",
  },
  {
    kicker: "03 / Honesty",
    label: "No fake counts",
    title: "Honest waitlists",
    body: "We will not invent attendee numbers, urgency, or local activity that is not happening yet. Density is the product. Scattered registrations are not.",
  },
];

export const gatheringFormats = [
  {
    title: "Coffee circle",
    body: "A small public-table meetup. Visible host. No forced pairings. One picture of what a founding week could feel like — not a live listing.",
  },
  {
    title: "Food walk",
    body: "A short neighbourhood walk with a clear start point, capacity and cancellation policy. Coming to the founding cohort when the logistics are real.",
  },
  {
    title: "Run + breakfast",
    body: "Movement first, then a public breakfast. Photo consent before any pictures. An example only, until a host and venue are confirmed.",
  },
  {
    title: "Book / culture meet",
    body: "A low-pressure circle around a book, film or live-music night. Published only when the logistics are real.",
  },
  {
    title: "Taste as context, not a score",
    body: "Shared interests, energy and lifestyle help us group people. Enough signal to meet well — never a compatibility percentage.",
  },
  {
    title: "If you want to reconnect",
    body: "After a gathering, mark it privately. A connection opens only when it is mutual. No public attendee ratings.",
  },
];

export const navLinks = [
  { label: "How it works", to: "/how-it-works" },
  { label: "Gatherings", to: "/gatherings" },
  { label: "Safety", to: "/safety" },
  { label: "Track", to: "/track" },
];

export const profilePrompts = [
  {
    prompt: "Sunday, in one line",
    answer: "Chai, a long walk and nowhere to rush.",
  },
  {
    prompt: "Worth crossing the city for",
    answer: "Genuinely good momos. I will travel across town for them, no negotiation.",
  },
  {
    prompt: "My social setting",
    answer: "Small groups over loud clubs. Six people and one long table beats a guest list.",
  },
  {
    prompt: "What I'm building",
    answer: "Something I actually care about — and a life with room left in it.",
  },
  {
    prompt: "A spontaneous weekend",
    answer: "A road trip usually wins over a plan made three weeks ago.",
  },
  {
    prompt: "My two speeds",
    answer: "Gym in the morning, street food by evening.",
  },
];

export const notHere = [
  {
    title: "No endless feed",
    body: "You get a small set of considered introductions and real local gatherings — not a slot machine designed to keep your thumb moving.",
  },
  {
    title: "No unilateral relationship mode",
    body: "A request never becomes a relationship state by itself. Focus and Together need two independent yeses.",
  },
  {
    title: "No safety behind a paywall",
    body: "Reporting, blocking, and date-safety sharing stay free for everyone.",
  },
  {
    title: "No invented match scores",
    body: "We never fake a compatibility percentage. We show why an introduction was made, in plain words.",
  },
];

export const faqs = [
  {
    q: "How is Elaris different from a swipe app?",
    a: "Introductions are limited and explained, and you can also meet through small Taste gatherings. When two people choose Focus, discovery pauses for both — the product actively stops selling you other options.",
  },
  {
    q: "What exactly is Taste?",
    a: "Taste is the way you actually live — what you enjoy, how you spend your time, your social rhythm, food, movement, culture and hobbies. We use it for context around people and experiences, never as a percentage.",
  },
  {
    q: "Do I have to pick dating or matrimony?",
    a: "No. You say what you would genuinely be happy for a connection to become, and you can change it whenever life changes. Elaris will not split into two apps.",
  },
  {
    q: "Which cities are open?",
    a: "Delhi NCR is opening first, with Bangalore and Mumbai as next-city interest. We open a market only when there is enough relevant local activity.",
  },
  {
    q: "Are gatherings live right now?",
    a: "Not yet. Coffee circles, food walks and culture meets are labelled examples until a host, venue, capacity and safety owner are real.",
  },
];
