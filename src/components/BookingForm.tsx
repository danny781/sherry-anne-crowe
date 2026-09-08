"use client";

import { useForm } from "react-hook-form";

const eventTypes = ["Keynote", "Hosting", "Community", "Other"] as const;

export type BookingFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  eventDate: string;
  eventLocation: string;
  eventType: (typeof eventTypes)[number] | "";
  message: string;
};

async function submitBooking(values: BookingFormValues): Promise<void> {
  const response = await fetch("/api/book-event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  if (!response.ok) {
    throw new Error("Unable to submit booking request");
  }
}

export function BookingForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<BookingFormValues>({
    defaultValues: { eventType: "" },
  });

  const onSubmit = async (values: BookingFormValues) => {
    try {
      await submitBooking(values);
    } catch {
      setError("root", {
        message: "Something went wrong. Please try again or email us directly.",
      });
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div
        role="status"
        className="mx-auto max-w-xl border border-brand-gold-primary bg-brand-cream p-10 text-center shadow-luxury md:p-14"
      >
        <span className="block text-2xl text-brand-gold-primary" aria-hidden>
          ✦
        </span>
        <p className="mt-6 font-script text-4xl text-brand-gold-primary md:text-5xl">
          Thank you
        </p>
        <h2 className="mt-4 font-serif text-xl tracking-wide text-brand-text-main md:text-2xl">
          Your request has been received
        </h2>
        <p className="mt-6 leading-relaxed text-brand-text-muted">
          Sherry Anne will be in touch shortly to discuss your event. In the meantime, keep
          taking up space on purpose.
        </p>
        <span className="mt-8 block text-2xl text-brand-gold-primary" aria-hidden>
          ✦
        </span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2"
    >
      <Field label="First Name" error={errors.firstName?.message}>
        <input
          type="text"
          autoComplete="given-name"
          {...register("firstName", { required: "First name is required" })}
        />
      </Field>

      <Field label="Last Name" error={errors.lastName?.message}>
        <input
          type="text"
          autoComplete="family-name"
          {...register("lastName", { required: "Last name is required" })}
        />
      </Field>

      <Field label="Email" error={errors.email?.message}>
        <input
          type="email"
          autoComplete="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
          })}
        />
      </Field>

      <Field label="Phone" hint="Optional" error={errors.phone?.message}>
        <input type="tel" autoComplete="tel" {...register("phone")} />
      </Field>

      <Field label="Event Date" error={errors.eventDate?.message}>
        <input
          type="date"
          {...register("eventDate", { required: "Event date is required" })}
        />
      </Field>

      <Field label="Event Location" error={errors.eventLocation?.message}>
        <input
          type="text"
          placeholder="City, venue or virtual"
          {...register("eventLocation", { required: "Event location is required" })}
        />
      </Field>

      <Field label="Event Type" error={errors.eventType?.message} className="md:col-span-2">
        <div className="relative">
          <select
            {...register("eventType", { required: "Please select an event type" })}
            className="pr-8"
          >
            <option value="" disabled>
              Select an event type
            </option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <span
            className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-brand-gold-primary"
            aria-hidden
          >
            ▾
          </span>
        </div>
      </Field>

      <Field label="Message / Details" error={errors.message?.message} className="md:col-span-2">
        <textarea
          rows={5}
          placeholder="Tell us about your event, audience and vision."
          {...register("message", { required: "Please share a few details about your event" })}
        />
      </Field>

      {errors.root && (
        <p role="alert" className="text-sm text-red-700 md:col-span-2">
          {errors.root.message}
        </p>
      )}

      <div className="pt-4 md:col-span-2 md:text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 md:w-auto md:min-w-64"
        >
          {isSubmitting ? "Sending…" : "Send Booking Request"}
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  hint?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
};

function Field({ label, hint, error, className = "", children }: FieldProps) {
  return (
    <label className={`block ${className}`}>
      <span className="flex items-baseline justify-between text-xs uppercase tracking-[0.2em] text-brand-text-muted">
        {label}
        {hint && <span className="normal-case tracking-normal">{hint}</span>}
      </span>
      <span className="mt-1 block">{children}</span>
      {error && <span className="mt-2 block text-xs text-red-700">{error}</span>}
    </label>
  );
}
