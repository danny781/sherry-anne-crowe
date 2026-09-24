import type { Metadata } from "next";
import Image from "next/image";
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
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[2fr_3fr] lg:items-start lg:px-10">
          <figure className="mx-auto w-full max-w-sm overflow-hidden bg-brand-cream shadow-luxury lg:sticky lg:top-28 lg:max-w-none">
            <Image
              src="/images/sherry-6.jpg"
              alt="Sherry Anne Crowe standing in a gold satin blouse and white trousers"
              width={1333}
              height={2000}
              sizes="(min-width: 1024px) 35vw, 24rem"
              className="h-auto w-full object-cover"
            />
          </figure>
          <BookingForm />
        </div>
      </section>
    </>
  );
}
