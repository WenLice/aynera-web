import type { FieldErrors } from "@/components/form-field-error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneCharacters = /^[+()\-\s\d]+$/;

/**
 * Shared by the early-access, suggestion and grievance forms.
 *
 * The early-access form asks for a single `name`, matching the app and the API, which have
 * only ever stored one. The other two still split it; they post to different entities and were
 * left alone. A form is treated as single-name when it has a `name` field.
 */
export function validateContactFields(data: FormData, messageField?: string): FieldErrors {
  const errors: FieldErrors = {};
  const singleName = data.has("name");
  const name = String(data.get("name") ?? "").trim();
  const firstName = String(data.get("firstName") ?? "").trim();
  const lastName = String(data.get("lastName") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const phoneDigits = phone.replace(/\D/g, "");

  if (singleName) {
    if (!name) errors.name = "Enter your name.";
  } else {
    if (!firstName) errors.firstName = "Enter your first name.";
    if (!lastName) errors.lastName = "Enter your last name.";
  }
  if (!email) errors.email = "Enter your email address.";
  else if (!emailPattern.test(email)) errors.email = "Enter a valid email address.";
  if (!phone) errors.phone = "Enter your phone number.";
  else if (!phoneCharacters.test(phone) || phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = "Enter a valid phone number with 7 to 15 digits.";
  }

  if (messageField) {
    const message = String(data.get(messageField) ?? "").trim();
    if (!message) errors[messageField] = "Please enter a message.";
  }
  return errors;
}

export function focusFirstInvalid(form: HTMLFormElement, errors: FieldErrors) {
  const firstName = Object.keys(errors)[0];
  const control = firstName ? form.elements.namedItem(firstName) : null;
  if (control instanceof HTMLElement) requestAnimationFrame(() => control.focus());
  else if (control instanceof RadioNodeList) {
    const first = control[0];
    if (first instanceof HTMLElement) requestAnimationFrame(() => first.focus());
  }
}
