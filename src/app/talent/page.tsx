import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Talent & Modeling",
  description:
    "Sherry Anne Crowe — model, actor and host. Represented by AAM (Aspiring Artists Management).",
};

const portfolio = [
  { src: "/images/sherry-1.jpg", alt: "Sherry Anne Crowe in a gold satin blouse", width: 1047, height: 1571 },
  { src: "/images/sherry-2.jpg", alt: "Sherry Anne Crowe full-length in a grey wrap and leather trousers", width: 1047, height: 1571 },
  { src: "/images/sherry-3.jpg", alt: "Sherry Anne Crowe laughing in a grey knit and denim", width: 1047, height: 1571 },
];

const mailto =
  "mailto:aspiringartistsmanagement@outlook.com?subject=" +
  encodeURIComponent("Booking Inquiry: Sherry Anne Crowe");

export default function TalentPage() {
  return (
    <>
      <section className="bg-brand-cream py-24">
        <div className="px-6">
          <SectionHeading
            eyebrow="Modelling · Acting · Hosting"
            title="Talent & Modeling"
            description="For casting, campaign and commercial inquiries, please reach out directly to Sherry Anne’s representation."
          />
        </div>
      </section>

      <section className="bg-brand-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.5fr_1fr] lg:items-start lg:px-10">
          <div className="columns-2 gap-6 [&>*]:mb-6 md:gap-8 md:[&>*]:mb-8">
            {portfolio.map((photo) => (
              <figure
                key={photo.src}
                className="break-inside-avoid overflow-hidden bg-brand-cream shadow-luxury"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 30vw, 50vw"
                  className="h-auto w-full object-cover"
                />
              </figure>
            ))}
            <div className="flex aspect-[2/3] break-inside-avoid items-center justify-center border border-brand-gold-light/60 bg-brand-cream">
              <Image
                src="/images/logo.png"
                alt=""
                width={1260}
                height={1260}
                className="w-2/3 opacity-80"
              />
            </div>
          </div>

          <aside className="border border-brand-gold-primary bg-brand-cream p-8 shadow-luxury lg:sticky lg:top-28">
            <h2 className="font-serif text-2xl tracking-wide text-brand-text-main md:text-3xl">
              Representation
            </h2>
            <span className="mt-4 block text-brand-gold-primary" aria-hidden>
              ✦
            </span>
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-brand-text-muted">Agency</dt>
                <dd className="mt-1 font-sans font-semibold text-brand-text-main">
                  AAM (Aspiring Artists Management)
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-brand-text-muted">Agent</dt>
                <dd className="mt-1 font-sans text-brand-text-muted">Delinda Therrien</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-col gap-3">
              <a href={mailto} className="btn-primary">
                Email Representation
              </a>
              <a href="#" className="btn-ghost">
                View Agency Facebook
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
