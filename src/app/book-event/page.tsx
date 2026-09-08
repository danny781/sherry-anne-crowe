import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Book Sherry Anne for an Event",
  description:
    "Invite Sherry Anne Crowe to speak, host or bring Take Up Space On Purpose to your community event.",
};

export default function BookEventPage() {
  return (
    <>
      <section className="bg-brand-cream py-24">
        <div className="px-6">
          <SectionHeading
            eyebrow="Let’s take up space together"
            title="Book Sherry Anne for an Event"
            description="Keynotes, hosting, community gatherings and more. Share a few details and Sherry Anne will be in touch to bring the conversation to your audience."
          />
        </div>
      </section>
      <section className="bg-brand-white py-24">
        <div className="px-6">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
