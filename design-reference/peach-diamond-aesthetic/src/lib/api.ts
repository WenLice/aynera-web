const DEFAULT_API_BASE = "http://localhost:5057";

export function getElarisApiBaseUrl(): string {
  const raw = import.meta.env["VITE_ELARIS_API_BASE_URL"]?.trim();
  if (!raw) return DEFAULT_API_BASE;
  return raw.replace(/\/+$/, "");
}

/**
 * Live API calls stay off until the backend is deployed and this is set true.
 * Forms use static success / local city options until then.
 */
export function isElarisApiLive(): boolean {
  const flag = import.meta.env["VITE_ELARIS_API_LIVE"]?.trim().toLowerCase();
  return flag === "1" || flag === "true" || flag === "yes";
}
