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

  // TODO: forward to email provider / CRM. Logged server-side for now.
  console.info("[book-event] New booking request", {
    name: `${payload.firstName} ${payload.lastName}`,
    email: payload.email,
    eventType: payload.eventType,
    eventDate: payload.eventDate,
  });

  return Response.json({ ok: true });
}
