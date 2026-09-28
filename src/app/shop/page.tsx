import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Shop",
  description: "Take Up Space On Purpose merch is coming soon.",
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
        <div className="mx-auto max-w-3xl px-6">
          <figure className="overflow-hidden bg-brand-cream shadow-luxury">
            <Image
              src="/images/merch-coming-soon.jpg"
              alt="Take Up Space on Purpose cream t-shirt with gold logo — Merch coming soon. It's more than merch, it's an experience."
              width={1024}
              height={1536}
              priority
              sizes="(min-width: 768px) 48rem, 100vw"
              className="h-auto w-full"
            />
          </figure>
        </div>
      </section>
    </>
  );
}
