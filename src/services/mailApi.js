const API_URL =
  import.meta.env.VITE_MAIL_API_URL || "https://mail.satz.co.in/api/v1/send";
const API_KEY = import.meta.env.VITE_MAIL_API_KEY;

const REQUEST_TIMEOUT_MS = 20000;

// The API returns errors under different keys depending on the failure type,
// so check the common ones before falling back to the status code.
const extractErrorMessage = (payload, status) =>
  payload?.error || payload?.message || payload?.detail || `Request failed (${status})`;

/**
 * Sends a contact enquiry through the mail.satz.co.in API.
 *
 * @param {{name: string, email: string, phone: string, message: string, service: string}} data
 * @returns {Promise<object>} parsed response body
 */
export const sendContactMessage = async ({
  name,
  email,
  phone,
  message,
  service,
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
      body: JSON.stringify({ name, email, phone, message, service }),
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
