interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
}

type RateEntry = { count: number; resetAt: number };

const submissionsByIp = new Map<string, RateEntry>();
const rateWindowMs = 10 * 60 * 1000;
const maximumSubmissionsPerWindow = 3;

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function isAllowedToSubmit(ip: string) {
  const now = Date.now();
  const entry = submissionsByIp.get(ip);
  if (!entry || entry.resetAt <= now) {
    submissionsByIp.set(ip, { count: 1, resetAt: now + rateWindowMs });
    return true;
  }
  if (entry.count >= maximumSubmissionsPerWindow) return false;
  entry.count += 1;
  return true;
}

function looksLikeSpam(message: string) {
  const links = message.match(/https?:\/\//gi) ?? [];
  const repeatedCharacters = /(.)\1{7,}/.test(message);
  const spamTerms = /\b(?:crypto giveaway|buy followers|casino bonus|seo service)\b/i.test(message);
  return links.length > 2 || repeatedCharacters || spamTerms;
}

export const onRequestPost = async ({ request }: { request: Request }) => {
  const ip = request.headers.get("CF-Connecting-IP") ?? request.headers.get("X-Forwarded-For")?.split(",")[0]?.trim() ?? "unknown";
  if (!isAllowedToSubmit(ip)) {
    return json({ success: false, error: "Too many messages. Please try again in 10 minutes." }, 429);
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return json({ success: false, error: "Invalid message submission." }, 400);
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const website = typeof payload.website === "string" ? payload.website.trim() : "";
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (website || !name || !validEmail || message.length < 10 || message.length > 5000 || looksLikeSpam(message)) {
    return json({ success: false, error: "Your message could not be accepted. Please revise it and try again." }, 400);
  }

  const body = `New message submitted via portfolio from "${name}":\n\n${message}\n\nSender email: ${email}`;
  const formSubmitResponse = await fetch("https://formsubmit.co/ajax/mazimpakamiguel@gmail.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: `New message submitted via portfolio from "${name}"`,
      message: body,
    }),
  });

  if (!formSubmitResponse.ok) {
    return json({ success: false, error: "Unable to deliver your message right now. Please try again shortly." }, 502);
  }

  return json({ success: true });
};
