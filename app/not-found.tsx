import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pd-not-found">
      <div className="shell-x">
        <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />404</p>
        <p className="pd-not-found-number" aria-hidden>404</p>
        <h1 className="pd-mega">This page has moved on.</h1>
        <p>It may no longer exist, or the link may be incomplete. Let’s take you somewhere useful.</p>
        <div>
          <Link href="/" className="pd-cta-warm">Back home</Link>
        </div>
      </div>
    </main>
  );
}
