const API_BASE_URL = (process.env.NEXT_PUBLIC_AYNERA_API_BASE_URL ?? "http://localhost:5057").replace(/\/$/, "");

type ApiEnvelope<T> = {
  success: boolean;
  data: T | null;
  statusCode: number;
  errorCode?: string | null;
  errors?: Record<string, string[]> | null;
  correlationId?: string | null;
};

export type EarlyAccessCity = {
  id: string;
  name: string;
  wave: number;
  sortOrder: number;
  isActive: boolean;
};

function readableError(payload: ApiEnvelope<unknown> | null, fallback: string) {
  const validationMessage = payload?.errors && Object.values(payload.errors).flat()[0];
  if (validationMessage) return validationMessage;

  const messages: Record<string, string> = {
    early_access_city_not_open: "Early access is not open for that city yet.",
    early_access_rate_limited: "Too many requests. Please try again later.",
    suggestion_rate_limited: "Too many requests. Please try again later.",
    feedback_rate_limited: "Too many requests. Please try again later.",
    internal_error: "Something went wrong on our side. Please try again shortly.",
  };

  return (payload?.errorCode && messages[payload.errorCode]) || fallback;
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...init,
      headers: { "Content-Type": "application/json", ...init?.headers },
    });
  } catch {
    throw new Error("We could not reach Aynera right now. Please check your connection and try again.");
  }

  let payload: ApiEnvelope<T> | null = null;
  try {
    payload = (await response.json()) as ApiEnvelope<T>;
  } catch {
    // A proxy or hosting error may return HTML instead of the API envelope.
  }

  if (!response.ok || !payload?.success || payload.data === null) {
    throw new Error(readableError(payload, "We could not submit your request. Please try again."));
  }

  return payload.data;
}

export function listEarlyAccessCities(signal?: AbortSignal) {
  return request<EarlyAccessCity[]>("/early-access/cities", { signal, cache: "no-store" });
}

export function joinEarlyAccess(body: {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  interest: "Aynera";
  intent: string;
  meetPreference: string;
  isAdult: boolean;
  marketingConsent: boolean;
}) {
  return request("/early-access/register", { method: "POST", body: JSON.stringify(body) });
}

export function submitSuggestion(body: { fullName: string; email: string; phone: string; message: string }) {
  return request("/public/suggestions", { method: "POST", body: JSON.stringify(body) });
}

export function submitFeedback(body: { fullName: string; email: string; phone: string; message: string }) {
  return request("/public/feedback", { method: "POST", body: JSON.stringify(body) });
}
