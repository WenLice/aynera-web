"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const routes = [
  ["Safety or community concern", "Something about an interaction, a person, or an Aynera space does not feel right."],
  ["Account or pilot support", "You need help with access, a profile, or another part of the Aynera experience."],
  ["Formal grievance", "You are making a request under applicable intermediary rules in India."],
] as const;

export function GrievancePreview() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main id="main" className="grievance-preview">
      <section className="grievance-preview-hero shell-x">
        <div className="grievance-preview-intro">
          <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Support with care</p>
          <h1 className="pd-display">When something needs attention, tell us.</h1>
          <p>This is a direct route to the Aynera team for support, safety concerns, and formal grievances. We will review what you share with care and respond through your email.</p>
          <div className="grievance-preview-urgent"><span aria-hidden><i>!</i></span><p><strong>In immediate danger?</strong> Contact local emergency services first. This form is not an emergency service.</p></div>
        </div>

        <div className="grievance-preview-form-wrap">
          {submitted ? (
            <div className="grievance-preview-success" role="status"><span>✓</span><p className="pd-eyebrow">Message received</p><h2 className="pd-display">We will look into it.</h2><p>Thank you for telling us. We will respond using the email you provided.</p><button type="button" onClick={() => setSubmitted(false)}>Send another message</button></div>
          ) : (
            <form className="grievance-preview-form" onSubmit={submit}>
              <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Direct message</p>
              <h2 className="pd-display">Tell us what happened.</h2>
              <p>Include dates and relevant account details when useful. Do not include passwords.</p>
              <div className="grievance-preview-fields">
                <label>First name<input name="firstName" required autoComplete="given-name" /></label>
                <label>Last name<input name="lastName" required autoComplete="family-name" /></label>
                <label className="grievance-preview-wide">Phone number<input name="phone" type="tel" required autoComplete="tel" /></label>
                <label className="grievance-preview-wide">Email address<input name="email" type="email" required autoComplete="email" /></label>
                <label className="grievance-preview-wide">Your message<textarea name="message" rows={6} maxLength={2000} required placeholder="What should we know?" /></label>
              </div>
              <p className="grievance-preview-hint">Have a product idea instead? <Link href="/suggest">Suggest an idea</Link>.</p>
              <button className="pd-cta-warm" type="submit">Send message</button>
              <small>By sending, you agree to our <Link href="/privacy">Privacy Notice</Link>.</small>
            </form>
          )}
        </div>
      </section>

      <section className="grievance-preview-routes">
        <div className="shell-x">
          <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />What we can help with</p>
          <div>{routes.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h2 className="pd-display">{title}</h2><p>{copy}</p></article>)}</div>
          <p className="grievance-preview-email">Or write directly to <a href="mailto:grievance@aynera.in">grievance@aynera.in</a></p>
        </div>
      </section>
    </main>
  );
}
