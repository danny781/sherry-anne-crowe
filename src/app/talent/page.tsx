import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Acting & Modeling",
  description:
    "Sherry Anne Crowe — model, actor and host. Represented by AAM (Aspiring Artists Management).",
};

const portfolio = [
  { src: "/images/model-dg.jpg", alt: "Sherry Anne Crowe on the runway in a lilac fringe dress", width: 512, height: 640 },
  { src: "/images/model-khush-paris.jpg", alt: "Sherry Anne Crowe walking a Paris street show in a purple silk coat", width: 512, height: 640 },
  { src: "/images/model-iab.jpg", alt: "Sherry Anne Crowe in a black jumpsuit and printed kimono jacket", width: 496, height: 640 },
  { src: "/images/model-drunkgirl.jpg", alt: "Sherry Anne Crowe on the runway in a champagne beaded gown", width: 512, height: 640 },
  { src: "/images/model-khush-sari.jpg", alt: "Sherry Anne Crowe in a red and gold sari", width: 430, height: 640 },
  { src: "/images/model-mw.jpg", alt: "Sherry Anne Crowe in a sequined It Girl top with green feather shoulders", width: 512, height: 640 },
  { src: "/images/model-khush-bd.jpg", alt: "Sherry Anne Crowe in a black sculpted gown and beret", width: 428, height: 640 },
  { src: "/images/sherry-5.jpg", alt: "Sherry Anne Crowe smiling in a black dress", width: 1500, height: 2100 },
  { src: "/images/sherry-8.jpg", alt: "Sherry Anne Crowe standing with arms crossed in a grey knit and denim", width: 1333, height: 2000 },
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
            eyebrow="Modelling · Acting"
            title="Acting & Modeling"
            description="For casting, campaign and commercial inquiries, please reach out directly to Sherry Anne’s representation."
          />
        </div>
      </section>

      <section className="bg-brand-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.5fr_1fr] lg:items-start lg:px-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {portfolio.map((photo) => (
              <figure
                key={photo.src}
                className="aspect-[4/5] overflow-hidden bg-brand-cream shadow-luxury"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, 50vw"
                  className="h-full w-full object-cover object-top"
                />
              </figure>
            ))}
          </div>

          <aside className="border border-brand-gold-primary bg-brand-cream p-8 shadow-luxury lg:sticky lg:top-28">
            <h2 className="font-serif text-2xl tracking-wide text-brand-text-main md:text-3xl">
              Representation
            </h2>
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
