"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { submitFeedback } from "@/lib/api";
import { FieldError, clearFieldError, type FieldErrors } from "@/components/form-field-error";
import { focusFirstInvalid, validateContactFields } from "@/lib/form-validation";

const routes = [
  ["Safety or community concern", "Something about an interaction, a person, or an Aynera space does not feel right."],
  ["Account or pilot support", "You need help with access, a profile, or another part of the Aynera experience."],
  ["A formal grievance request", "You are making a request under applicable intermediary rules in India."],
] as const;

export function GrievancePreview() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const validationErrors = validateContactFields(data, "message");
    if (Object.keys(validationErrors).length) {
      setFieldErrors(validationErrors);
      focusFirstInvalid(form, validationErrors);
      setSubmitting(false);
      return;
    }
    setFieldErrors({});
    try {
      await submitFeedback({
        fullName: `${data.get("firstName") ?? ""} ${data.get("lastName") ?? ""}`.trim(),
        phone: String(data.get("phone") ?? ""),
        email: String(data.get("email") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      form.reset();
      setSubmitted(true);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "We could not send your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
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
            <form className="grievance-preview-form" onSubmit={submit} noValidate onChange={(event) => {
              const target = event.target;
              if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement) {
                clearFieldError(target.name, setFieldErrors);
              }
            }}>
              <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />Direct message</p>
              <h2 className="pd-display">Tell us what happened.</h2>
              <p>Include dates and relevant account details when useful. Do not include passwords.</p>
              <div className="grievance-preview-fields">
                <label>First name<input name="firstName" maxLength={100} required autoComplete="given-name" aria-invalid={!!fieldErrors.firstName} aria-describedby={fieldErrors.firstName ? "firstName-error" : undefined} /><FieldError name="firstName" message={fieldErrors.firstName} /></label>
                <label>Last name<input name="lastName" maxLength={99} required autoComplete="family-name" aria-invalid={!!fieldErrors.lastName} aria-describedby={fieldErrors.lastName ? "lastName-error" : undefined} /><FieldError name="lastName" message={fieldErrors.lastName} /></label>
                <label className="grievance-preview-wide">Phone number<input name="phone" type="tel" maxLength={32} required autoComplete="tel" aria-invalid={!!fieldErrors.phone} aria-describedby={fieldErrors.phone ? "phone-error" : undefined} /><FieldError name="phone" message={fieldErrors.phone} /></label>
                <label className="grievance-preview-wide">Email address<input name="email" type="email" maxLength={256} required autoComplete="email" aria-invalid={!!fieldErrors.email} aria-describedby={fieldErrors.email ? "email-error" : undefined} /><FieldError name="email" message={fieldErrors.email} /></label>
                <label className="grievance-preview-wide">Your message<textarea name="message" rows={6} maxLength={2000} required placeholder="What should we know?" aria-invalid={!!fieldErrors.message} aria-describedby={fieldErrors.message ? "message-error" : undefined} /><FieldError name="message" message={fieldErrors.message} /></label>
              </div>
              <p className="grievance-preview-hint">Have a product idea instead? <Link href="/suggest">Suggest an idea</Link>.</p>
              {error && <p role="alert" className="form-error">{error}</p>}
              <button className="pd-cta-warm" type="submit" disabled={submitting}>{submitting ? "Sending…" : "Send message"}</button>
              <small>By sending, you agree to our <Link href="/privacy">Privacy Notice</Link>.</small>
            </form>
          )}
        </div>
      </section>

      <section className="grievance-preview-routes">
        <div className="shell-x">
          <p className="pd-eyebrow"><span className="pd-accent-rule" aria-hidden />What we can help with</p>
          <div>{routes.map(([title, copy]) => <article key={title}><h2 className="pd-display">{title}</h2><p>{copy}</p></article>)}</div>
          <p className="grievance-preview-email">Or write directly to <a href="mailto:grievance@aynera.in">grievance@aynera.in</a></p>
        </div>
      </section>
    </main>
  );
}
