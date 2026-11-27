export type AnalyticsEventName =
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "save_contact"
  | "share_click";

export interface AnalyticsPayload {
  location?: string;
  locale?: "ar" | "en";
  target?: string;
  utm_source?: string;
}

const UTM_STORAGE_KEY = "elbeek_utm_attribution";

export function captureUtmAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");
    const utmMedium = params.get("utm_medium");
    const utmCampaign = params.get("utm_campaign");

    if (utmSource || utmMedium || utmCampaign) {
      const payload = {
        utm_source: utmSource ?? undefined,
        utm_medium: utmMedium ?? undefined,
        utm_campaign: utmCampaign ?? undefined,
        capturedAt: new Date().toISOString(),
      };
      window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(payload));
    }
  } catch {
    // Storage unavailable (private mode / blocked)
  }
}

export function getStoredUtmSource(): string | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw) as { utm_source?: string };
    return parsed.utm_source;
  } catch {
    return undefined;
  }
}

export function trackEvent(name: AnalyticsEventName, payload: AnalyticsPayload = {}): void {
  if (typeof window === "undefined") return;

  const utmSource = payload.utm_source ?? getStoredUtmSource();
  const detail = {
    ...payload,
    ...(utmSource ? { utm_source: utmSource } : {}),
  };

  // Emit standard DOM event for any lightweight listener or QA verification
  window.dispatchEvent(new CustomEvent("elbeek:analytics", { detail: { name, ...detail } }));

  // Forward to Vercel Analytics if mounted on deployment
  const win = window as unknown as {
    va?: (cmd: "event", opts: { name: string; data?: Record<string, string | number | boolean> }) => void;
    dataLayer?: Array<Record<string, unknown>>;
  };

  if (typeof win.va === "function") {
    const cleanData: Record<string, string | number | boolean> = {};
    for (const [k, v] of Object.entries(detail)) {
      if (v !== undefined) cleanData[k] = v;
    }
    win.va("event", { name, data: cleanData });
  }

  if (Array.isArray(win.dataLayer)) {
    win.dataLayer.push({ event: name, ...detail });
  }
}
