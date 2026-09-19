const DEFAULT_API_BASE = "http://localhost:5057";

export function getAyneraApiBaseUrl(): string {
  const raw = import.meta.env["VITE_AYNERA_API_BASE_URL"]?.trim();
  if (!raw) return DEFAULT_API_BASE;
  return raw.replace(/\/+$/, "");
}

/**
 * Live API calls stay off until the backend is deployed and this is set true.
 * Forms use static success / local city options until then.
 */
export function isAyneraApiLive(): boolean {
  const flag = import.meta.env["VITE_AYNERA_API_LIVE"]?.trim().toLowerCase();
  return flag === "1" || flag === "true" || flag === "yes";
}
