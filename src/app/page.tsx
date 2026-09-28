import Image from "next/image";
import { withBrandMark } from "@/components/BrandMark";
import { bioParagraphs, mantraIntro, mantraLead } from "@/content/bio";

export default function HomePage() {
  return (
    <>
      <section className="bg-brand-cream py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
          <Image
            src="/images/logo.png"
            alt="Take Up Space on Purpose — Sherry Anne Crowe"
            width={1254}
            height={1254}
            priority
            className="w-64 rounded-full shadow-luxury sm:w-80 md:w-96"
          />
          <h1 className="sr-only">Sherry Anne Crowe — Take Up Space on Purpose</h1>
        </div>
      </section>

      <section className="bg-brand-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-lg leading-loose text-brand-text-main lg:px-10">
          <h2 className="font-serif text-2xl tracking-wide md:text-3xl">
            My Story
          </h2>
          <div className="mt-8 flow-root space-y-8">
            <figure className="mb-6 w-full max-w-sm overflow-hidden bg-brand-cream shadow-luxury sm:float-left sm:mr-10 sm:mb-4 sm:w-72 lg:w-80">
              <Image
                src="/images/sherry-1.jpg"
                alt="Sherry Anne Crowe in a gold satin blouse"
                width={1333}
                height={2000}
                sizes="(min-width: 1024px) 20rem, (min-width: 640px) 18rem, 24rem"
                className="h-auto w-full object-cover"
              />
            </figure>
            {bioParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-brand-gold-primary"
                    : undefined
                }
              >
                {withBrandMark(paragraph, `bio-${i}`)}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-brand-text-main">
            {mantraIntro}
          </p>
          <blockquote className="mt-12">
            <p className="font-script text-4xl leading-snug text-brand-gold-primary md:text-5xl">
              {mantraLead}
            </p>
            <p className="mt-6 font-brand-serif text-2xl uppercase leading-none tracking-[0.2em] text-brand-gold-primary md:text-3xl">
              Take Up Space
            </p>
            <p className="relative mt-2 inline-block font-script text-5xl leading-[1.1] text-brand-gold-primary md:text-6xl">
              on Purpose
              <span className="absolute -right-[0.9em] top-[0.2em] font-sans text-[0.2em] uppercase tracking-wider">
                TM
              </span>
            </p>
          </blockquote>
        </div>
      </section>
    </>
  );
}
