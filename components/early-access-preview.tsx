"use client";

import { useEffect, useState, type FormEvent } from "react";
import { joinEarlyAccess, listEarlyAccessCities, type EarlyAccessCity } from "@/lib/api";
import { FieldError, clearFieldError, type FieldErrors } from "@/components/form-field-error";
import { focusFirstInvalid, validateContactFields } from "@/lib/form-validation";

const journey = [
  ["Join the list", "Share a few details about yourself, your city, and how you would like to meet."],
  ["Receive your invitation", "When Aynera opens in your city, we will send your personal invitation by email."],
  ["Create your profile", "Complete your profile inside the app and begin meeting with clarity."],
] as const;

export function EarlyAccessPreview() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [cities, setCities] = useState<EarlyAccessCity[]>([]);
  const [citiesLoading, setCitiesLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    listEarlyAccessCities(controller.signal)
      .then(setCities)
      .catch((reason: unknown) => {
        if (!controller.signal.aborted) setError(reason instanceof Error ? reason.message : "Cities could not be loaded.");
      })
      .finally(() => { if (!controller.signal.aborted) setCitiesLoading(false); });
    return () => controller.abort();
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitting(true);
    const form = event.currentTarget;
    const data = new FormData(form);
    const validationErrors = validateContactFields(data);
    if (!String(data.get("city") ?? "").trim()) validationErrors.city = "Select your city.";
    if (!data.get("intent")) validationErrors.intent = "Choose Fluid or Intent.";
    if (!data.get("meetPreference")) validationErrors.meetPreference = "Choose how you prefer to meet.";
    if (data.get("isAdult") !== "on") validationErrors.isAdult = "Confirm that you are 18 or older.";
    if (data.get("marketingConsent") !== "on") validationErrors.marketingConsent = "Consent is required to join the launch list.";
    if (Object.keys(validationErrors).length) {
      setFieldErrors(validationErrors);
      focusFirstInvalid(form, validationErrors);
      setSubmitting(false);
      return;
    }
    setFieldErrors({});
    try {
      await joinEarlyAccess({
        fullName: `${data.get("firstName") ?? ""} ${data.get("lastName") ?? ""}`.trim(),
        email: String(data.get("email") ?? ""),
        phone: String(data.get("phone") ?? ""),
        city: String(data.get("city") ?? ""),
        interest: "Aynera",
        intent: String(data.get("intent") ?? ""),
        meetPreference: String(data.get("meetPreference") ?? ""),
        isAdult: data.get("isAdult") === "on",
        marketingConsent: data.get("marketingConsent") === "on",
      });
      form.reset();
      setSubmitted(true);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "We could not save your place. Please try again.");
    } finally {
      setSubmitting(false);
    }
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
            <form onSubmit={submit} className="access-preview-form" noValidate onChange={(event) => {
              const target = event.target;
              if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement) {
                clearFieldError(target.name, setFieldErrors);
              }
            }}>
              <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Founding circle</p>
              <h2 className="pd-display">Save your place.</h2>
              <p>It takes less than a minute. Your full profile comes later, inside the app.</p>
              <div className="access-preview-fields">
                <label>First name<input name="firstName" maxLength={100} required autoComplete="given-name" aria-invalid={!!fieldErrors.firstName} aria-describedby={fieldErrors.firstName ? "firstName-error" : undefined} /><FieldError name="firstName" message={fieldErrors.firstName} /></label>
                <label>Last name<input name="lastName" maxLength={99} required autoComplete="family-name" aria-invalid={!!fieldErrors.lastName} aria-describedby={fieldErrors.lastName ? "lastName-error" : undefined} /><FieldError name="lastName" message={fieldErrors.lastName} /></label>
                <label className="access-preview-wide">Email address<input name="email" type="email" maxLength={256} required autoComplete="email" aria-invalid={!!fieldErrors.email} aria-describedby={fieldErrors.email ? "email-error" : undefined} /><FieldError name="email" message={fieldErrors.email} /></label>
                <label>Phone number<input name="phone" type="tel" maxLength={32} required autoComplete="tel" aria-invalid={!!fieldErrors.phone} aria-describedby={fieldErrors.phone ? "phone-error" : undefined} /><FieldError name="phone" message={fieldErrors.phone} /></label>
                <label>City<select name="city" required defaultValue="" disabled={citiesLoading || cities.length === 0} aria-invalid={!!fieldErrors.city} aria-describedby={fieldErrors.city ? "city-error" : undefined}><option value="" disabled>{citiesLoading ? "Loading cities…" : "Select your city"}</option>{cities.map((city) => <option key={city.id} value={city.name}>{city.name}</option>)}</select><FieldError name="city" message={fieldErrors.city} /></label>
              </div>
              <fieldset aria-describedby={fieldErrors.intent ? "intent-error" : undefined}><legend>Choose your track</legend><div className="access-preview-choices access-preview-choices-two"><label><input type="radio" name="intent" value="Fluid" required aria-invalid={!!fieldErrors.intent} />Fluid</label><label><input type="radio" name="intent" value="Intent" />Intent</label></div><FieldError name="intent" message={fieldErrors.intent} /></fieldset>
              <fieldset aria-describedby={fieldErrors.meetPreference ? "meetPreference-error" : undefined}><legend>How would you prefer to meet?</legend><div className="access-preview-choices"><label><input type="radio" name="meetPreference" value="Duos" required aria-invalid={!!fieldErrors.meetPreference} />Duos</label><label><input type="radio" name="meetPreference" value="Squads" />Squads</label><label><input type="radio" name="meetPreference" value="Both" />Both</label></div><FieldError name="meetPreference" message={fieldErrors.meetPreference} /></fieldset>
              <label className="access-preview-check"><input name="isAdult" type="checkbox" required aria-invalid={!!fieldErrors.isAdult} aria-describedby={fieldErrors.isAdult ? "isAdult-error" : undefined} />I confirm that I am 18 years or older.</label><FieldError name="isAdult" message={fieldErrors.isAdult} />
              <label className="access-preview-check"><input name="marketingConsent" type="checkbox" required aria-invalid={!!fieldErrors.marketingConsent} aria-describedby={fieldErrors.marketingConsent ? "marketingConsent-error" : undefined} />I agree to receive Aynera launch and early-access emails.</label><FieldError name="marketingConsent" message={fieldErrors.marketingConsent} />
              {error && <p role="alert" className="form-error">{error}</p>}
              <button className="pd-cta-warm" type="submit" disabled={submitting || citiesLoading || cities.length === 0}>{submitting ? "Saving your place…" : "Join the founding circle"}</button>
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
