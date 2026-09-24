import type { BookingFormValues } from "@/components/BookingForm";

const requiredFields: (keyof BookingFormValues)[] = [
  "firstName",
  "lastName",
  "email",
  "eventDate",
  "eventLocation",
  "eventType",
  "message",
];

function isBookingPayload(value: unknown): value is BookingFormValues {
  if (typeof value !== "object" || value === null) return false;
  const record = value as Record<string, unknown>;
  return requiredFields.every(
    (field) => typeof record[field] === "string" && record[field].trim().length > 0,
  );
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildEmailHtml(b: BookingFormValues): string {
  const rows: [string, string][] = [
    ["Name", `${b.firstName} ${b.lastName}`],
    ["Email", b.email],
    ["Phone", b.phone?.trim() || "—"],
    ["Event Date", b.eventDate],
    ["Event Location", b.eventLocation],
    ["Event Type", b.eventType],
  ];
  const table = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#6E6E6E;font-size:12px;letter-spacing:.1em;text-transform:uppercase">${label}</td><td style="padding:6px 0;color:#2C2C2C">${escapeHtml(value)}</td></tr>`,
    )
    .join("");
  return `<div style="font-family:Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#2C2C2C">
  <h1 style="font-family:Georgia,serif;font-weight:400;font-size:22px;letter-spacing:.05em;margin:0 0 4px">New Event Booking Request</h1>
  <p style="color:#CBB26A;margin:0 0 24px"><span style="font-family:'Bodoni Moda',Georgia,serif;text-transform:uppercase;letter-spacing:.12em">Take Up Space</span> <span style="font-family:Allura,cursive;font-size:1.3em">on Purpose</span><sup style="font-size:.5em">TM</sup></p>
  <table style="border-collapse:collapse">${table}</table>
  <h2 style="font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#6E6E6E;margin:24px 0 8px">Message / Details</h2>
  <p style="white-space:pre-wrap;line-height:1.6;margin:0">${escapeHtml(b.message)}</p>
</div>`;
}

async function sendBookingEmail(booking: BookingFormValues): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_NOTIFY_EMAIL;
  const from = process.env.BOOKING_FROM_EMAIL ?? "Bookings <onboarding@resend.dev>";

  if (!apiKey || !to) {
    throw new Error("RESEND_API_KEY and BOOKING_NOTIFY_EMAIL must be configured");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: to.split(",").map((address) => address.trim()),
      reply_to: booking.email,
      subject: `Booking Request: ${booking.eventType} — ${booking.firstName} ${booking.lastName}`,
      html: buildEmailHtml(booking),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend responded ${response.status}: ${detail}`);
  }
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!isBookingPayload(payload)) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await sendBookingEmail(payload);
  } catch (error) {
    console.error("[book-event] Failed to send booking email", error);
    return Response.json({ error: "Unable to send booking request" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
