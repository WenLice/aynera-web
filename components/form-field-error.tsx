export type FieldErrors = Record<string, string>;

export function FieldError({ name, message }: { name: string; message?: string }) {
  return message ? <span id={`${name}-error`} className="field-error" role="alert">{message}</span> : null;
}

export function clearFieldError(
  name: string,
  setErrors: (update: (current: FieldErrors) => FieldErrors) => void,
) {
  setErrors((current) => {
    if (!current[name]) return current;
    const next = { ...current };
    delete next[name];
    return next;
  });
}
