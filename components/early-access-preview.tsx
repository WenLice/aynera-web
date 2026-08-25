"use client";

import { useState, type FormEvent } from "react";

const journey = [
  ["Join the list", "Share a few details about yourself, your city, and how you would like to meet."],
  ["Receive your invitation", "When Aynera opens in your city, we will send your personal invitation by email."],
  ["Create your profile", "Complete your profile inside the app and begin meeting with clarity."],
] as const;

export function EarlyAccessPreview() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main id="main" className="access-preview">
      <section className="access-preview-hero shell-x">
        <div className="access-preview-intro">
          <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Three cities, one founding launch</p>
          <h1 className="pd-display">Join the founding Aynera network.</h1>
          <p>Tell us where you are and how you would actually like to meet. We will open access only when your local network is ready.</p>
          <ul>
            <li>No long profile before launch</li>
            <li>Choose Duos, Squads, or both</li>
            <li>Receive an invitation when your city is ready</li>
          </ul>
          <div className="access-preview-cities" aria-label="Launch cities">
            <span><b>Launching together</b><strong>Delhi · Mumbai · Bangalore</strong><small>Join now and receive your invitation when Aynera opens across all three cities.</small></span>
          </div>
        </div>

        <div className="access-preview-form-wrap">
          {submitted ? (
            <div className="access-preview-success" role="status"><span>✓</span><p className="pd-eyebrow">You’re on the list</p><h2 className="pd-display">Your place is saved.</h2><p>We’ll email you when your city’s founding cohort is ready.</p><button type="button" onClick={() => setSubmitted(false)}>Add another response</button></div>
          ) : (
            <form onSubmit={submit} className="access-preview-form">
              <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Founding circle</p>
              <h2 className="pd-display">Save your place.</h2>
              <p>It takes less than a minute. Your full profile comes later, inside the app.</p>
              <div className="access-preview-fields">
                <label>First name<input name="firstName" required autoComplete="given-name" /></label>
                <label>Last name<input name="lastName" required autoComplete="family-name" /></label>
                <label className="access-preview-wide">Email address<input name="email" type="email" required autoComplete="email" /></label>
                <label className="access-preview-wide">City<select name="city" required defaultValue=""><option value="" disabled>Select your city</option><option>Delhi</option><option>Mumbai</option><option>Bangalore</option></select></label>
              </div>
              <fieldset><legend>What are you open to?</legend><div className="access-preview-choices"><label><input type="radio" name="intent" required />Open to meeting</label><label><input type="radio" name="intent" />A relationship</label><label><input type="radio" name="intent" />A life partner</label></div></fieldset>
              <fieldset><legend>How would you prefer to meet?</legend><div className="access-preview-choices"><label><input type="radio" name="meet" required />Duos</label><label><input type="radio" name="meet" />Squads</label><label><input type="radio" name="meet" />Both</label></div></fieldset>
              <label className="access-preview-check"><input type="checkbox" required />I confirm that I am 18 years or older.</label>
              <label className="access-preview-check"><input type="checkbox" required />I agree to receive Aynera launch and early-access emails.</label>
              <button className="pd-cta-warm" type="submit">Join the founding circle</button>
              <small>By joining, you agree to our Privacy Notice. You can unsubscribe anytime.</small>
            </form>
          )}
        </div>
      </section>

      <section className="access-preview-next">
        <div className="shell-x">
          <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />What happens next</p>
          <h2 className="pd-display">Your real journey begins inside the app.</h2>
          <div>{journey.map(([title, description]) => <article key={title}><h3 className="pd-display">{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>
    </main>
  );
}
