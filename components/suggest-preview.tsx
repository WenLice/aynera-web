"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const prompts = [
  "What would make meeting people feel more human?",
  "What would help you feel safer or more at ease?",
  "What should Aynera never become?",
] as const;

export function SuggestPreview() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main id="main" className="suggest-preview">
      <section className="suggest-preview-hero shell-x">
        <div className="suggest-preview-intro">
          <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />A note for what comes next</p>
          <h1 className="pd-display">Help us make room for better meetings.</h1>
          <p>Aynera is still taking shape. Your lived experience can sharpen what we build, protect what matters, and keep the experience grounded in real life.</p>

          <div className="suggest-preview-notes" aria-label="Ideas we are listening for">
            {prompts.map((prompt, index) => <article key={prompt} className={`suggest-preview-note suggest-preview-note-${index + 1}`}><p>{prompt}</p></article>)}
          </div>

          <div className="suggest-preview-aside"><span aria-hidden>!</span><p>Product ideas, honest feedback, concerns, and questions are all welcome. For a formal safety or support issue, please use the grievance channel.</p></div>
        </div>

        <div className="suggest-preview-form-wrap">
          {submitted ? (
            <div className="suggest-preview-success" role="status">
              <span>✓</span>
              <p className="pd-eyebrow">Received with care</p>
              <h2 className="pd-display">Thank you for writing in.</h2>
              <p>We will read your note as we shape Aynera&apos;s founding experience.</p>
              <button type="button" onClick={() => setSubmitted(false)}>Share another idea</button>
            </div>
          ) : (
            <form className="suggest-preview-form" onSubmit={submit}>
              <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Suggestion box</p>
              <h2 className="pd-display">Leave a note.</h2>
              <p>A few thoughtful lines are enough. We are listening for the details that make a difference.</p>
              <div className="suggest-preview-fields">
                <label>First name<input name="firstName" required autoComplete="given-name" /></label>
                <label>Last name<input name="lastName" required autoComplete="family-name" /></label>
                <label className="suggest-preview-wide">Phone number<input name="phone" type="tel" required autoComplete="tel" /></label>
                <label className="suggest-preview-wide">Email address<input name="email" type="email" required autoComplete="email" /></label>
                <label className="suggest-preview-wide">Your suggestion<textarea name="suggestion" rows={6} maxLength={2000} required placeholder="What should we know, improve, or build?" /></label>
              </div>
              <p className="suggest-preview-hint">Please do not include passwords. For safety or grievances, use <Link href="/grievance">Grievance</Link>.</p>
              <button className="pd-cta-warm" type="submit">Send your suggestion</button>
              <small>By sending, you agree to our <Link href="/privacy">Privacy Notice</Link>.</small>
            </form>
          )}
        </div>
      </section>

      <section className="suggest-preview-routes">
        <div className="shell-x">
          <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />The right place for your note</p>
          <div className="suggest-preview-routes-grid">
            <article><span>Ideas</span><h2 className="pd-display">Shape<br />what we<br />build.</h2><p>Feature requests, observations, and thoughts about the Aynera experience belong here.</p></article>
            <article><span>Support</span><h2 className="pd-display">Keep concerns clear.</h2><p>For a safety report, privacy request, or formal complaint, our grievance channel is the right route.</p><Link href="/grievance">Go to grievance <b>→</b></Link></article>
          </div>
        </div>
      </section>
    </main>
  );
}
