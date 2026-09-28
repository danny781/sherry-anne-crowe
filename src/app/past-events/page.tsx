import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { pastEvents } from "@/content/events";
import { ctas } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Past Events",
  description: "Events Sherry Anne Crowe has hosted and co-hosted.",
};

export default function PastEventsPage() {
  return (
    <>
      <section className="bg-brand-cream py-24">
        <div className="px-6">
          <SectionHeading
            eyebrow="Where we’ve taken up space"
            title="Past Events"
            description="A selection of stages, runways and community gatherings Sherry Anne has hosted."
          />
        </div>
      </section>

      <section className="bg-brand-white py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:px-10">
          <figure className="overflow-hidden bg-brand-cream shadow-luxury">
            <Image
              src="/images/sherry-4.jpg"
              alt="Sherry Anne Crowe seated in a gold satin blouse"
              width={1333}
              height={2000}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-auto w-full object-cover"
            />
          </figure>

          <ol className="relative border-l border-brand-gold-light/70 pl-10">
            {pastEvents.map((event) => (
              <li key={`${event.date}-${event.title}`} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[2.85rem] top-2 h-2.5 w-2.5 rounded-full bg-brand-gold-primary" aria-hidden />
                <p className="text-xs uppercase tracking-[0.2em] text-brand-text-muted">
                  {event.date}
                </p>
                <h2 className="mt-2 font-serif text-2xl tracking-wide text-brand-text-main">
                  {event.title}
                </h2>
                {event.detail && (
                  <p className="mt-1 text-sm text-brand-text-muted">{event.detail}</p>
                )}
                <p className="mt-2 font-script text-2xl text-brand-gold-primary">{event.role}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="font-script text-3xl text-brand-gold-primary md:text-4xl">
            Let’s make your event next
          </p>
          <Link href={ctas.book.href} className="btn-primary mt-8">
            {ctas.book.label}
          </Link>
        </div>
      </section>
    </>
  );
}
