export type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

type AnalyticsSink = (event: string, payload: AnalyticsPayload) => void;

declare global {
  interface Window {
    ayneraAnalytics?: {
      track?: AnalyticsSink;
    };
  }
}

export function track(event: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  const detail = {
    event,
    path: window.location.pathname,
    ...payload,
  };

  window.dispatchEvent(new CustomEvent("aynera:analytics", { detail }));
  window.ayneraAnalytics?.track?.(event, detail);
}
