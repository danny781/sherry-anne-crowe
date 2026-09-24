import Image from "next/image";
import { withBrandMark } from "@/components/BrandMark";
import { bioParagraphs, mantra, mantraIntro } from "@/content/bio";

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
                src="/images/sherry-3.jpg"
                alt="Sherry Anne Crowe laughing in a grey knit and denim"
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
          <p className="text-base uppercase tracking-[0.2em] text-brand-text-muted">
            {mantraIntro}
          </p>
          <blockquote className="mt-12">
            <span
              className="block text-2xl text-brand-gold-primary"
              aria-hidden
            >
              ✦
            </span>
            <p className="my-8 font-script text-4xl leading-snug text-brand-gold-primary md:text-5xl">
              {withBrandMark(mantra, "mantra")}
            </p>
            <span
              className="block text-2xl text-brand-gold-primary"
              aria-hidden
            >
              ✦
            </span>
          </blockquote>
        </div>
      </section>
    </>
  );
}
