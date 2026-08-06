const API_URL =
  import.meta.env.VITE_MAIL_API_URL || "https://mail.satz.co.in/api/v1/send";
const API_KEY = import.meta.env.VITE_MAIL_API_KEY;

const REQUEST_TIMEOUT_MS = 20000;

// The app's spam guard is configured with these two field names. The API strips both
// out of the body before checking the declared fields, so they never reach the email
// — but the timing one is mandatory: with a minimum fill time set, a body without it
// is refused as `timing_missing`.
export const HONEYPOT_FIELD = "comapny_url";
export const TIMING_FIELD = "form_elapsed";

/** Minimum seconds the form must be on screen, matching the app's Spam guard setting. */
export const MIN_SUBMIT_SECONDS = 30;

// Machine-readable codes from the API turned into something a visitor can act on. The
// guard failures deliberately don't say which guard fired — that is a lesson for a bot
// author, not help for a person.
const MESSAGES = {
  honeypot_filled: "That submission looked automated. Please try again.",
  too_fast: "That was submitted a little too quickly — please try again.",
  timing_missing: "That was submitted a little too quickly — please try again.",
  spam_rejected:
    "The message was flagged by our spam filter. Try again with fewer links, or email us directly.",
  daily_limit_exceeded:
    "We've hit today's message limit. Please call us, or try again tomorrow.",
  destination_unverified:
    "Our contact inbox isn't confirmed yet. Please call us in the meantime.",
  payload_too_large: "That message is too long. Please shorten it.",
  send_failed: "Our mail server refused it. Please try again, or call us directly.",
};

// The API returns errors under different keys depending on the failure type,
// so check the common ones before falling back to the status code.
const extractErrorMessage = (payload, status) => {
  const code = payload?.error;
  if (typeof code === "string" && MESSAGES[code]) return MESSAGES[code];
  return code || payload?.message || payload?.detail || `Request failed (${status})`;
};

/**
 * Sends a contact enquiry through the mail.satz.co.in API.
 *
 * @param {{name: string, email: string, phone: string, message: string, service: string, elapsedMs: number, honeypot: string}} data
 * @returns {Promise<object>} parsed response body
 */
export const sendContactMessage = async ({
  name,
  email,
  phone,
  message,
  service,
  elapsedMs,
  honeypot = "",
}) => {
  if (!API_KEY) {
    throw new Error("Mail API key is not configured (VITE_MAIL_API_KEY).");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
        service,
        // An elapsed duration rather than a timestamp: the server accepts either, but
        // a duration survives a client clock that is set wrong.
        [TIMING_FIELD]: elapsedMs,
        [HONEYPOT_FIELD]: honeypot,
      }),
      signal: controller.signal,
    });

    const payload = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(extractErrorMessage(payload, response.status));
    }

    return payload;
  } finally {
    clearTimeout(timeout);
  }
};
