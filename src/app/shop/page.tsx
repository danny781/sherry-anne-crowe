import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { SectionHeading } from "@/components/SectionHeading";
import { ctas } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Shop",
  description: "The Take Up Space On Purpose shop is coming soon.",
};

export default function ShopPage() {
  return (
    <>
      <section className="bg-brand-cream py-24">
        <div className="px-6">
          <SectionHeading eyebrow="Take it home" title="Shop" />
        </div>
      </section>

      <section className="bg-brand-white py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <figure className="overflow-hidden bg-brand-cream shadow-luxury">
            <Image
              src="/images/sherry-5.jpg"
              alt="Sherry Anne Crowe smiling in a black dress"
              width={1500}
              height={2100}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-auto w-full object-cover"
            />
          </figure>

          <div className="text-center lg:text-left">
            <span className="inline-block bg-brand-gold-primary px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-brand-white">
              Coming Soon
            </span>
            <h2 className="mt-8 font-serif text-3xl leading-tight tracking-wide text-brand-text-main md:text-4xl">
              Small reminders, created with intention.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-text-muted md:text-lg">
              The <BrandMark /> collection is on its way. Check back soon for pieces designed to
              help you take up space every day.
            </p>
            <div className="mt-10">
              <Link href={ctas.book.href} className="btn-ghost">
                {ctas.book.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
