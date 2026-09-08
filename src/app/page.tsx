import Image from "next/image";
import Link from "next/link";
import { bioParagraphs, mantra, mantraIntro } from "@/content/bio";
import { ctas } from "@/lib/navigation";

export default function HomePage() {
  return (
    <>
      <section className="bg-brand-cream py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
          <Image
            src="/images/logo.png"
            alt="Take Up Space on Purpose — Sherry Anne Crowe"
            width={1260}
            height={1260}
            priority
            className="w-64 drop-shadow-[0_4px_20px_rgba(195,157,84,0.15)] sm:w-80 md:w-96"
          />
          <h1 className="mt-12 font-serif text-3xl tracking-[0.15em] uppercase text-brand-text-main md:text-4xl">
            Sherry Anne Crowe
          </h1>
          <p className="mt-4 font-script text-3xl text-brand-gold-primary md:text-4xl">
            Take Up Space on Purpose
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={ctas.book.href} className="btn-primary">
              {ctas.book.label}
            </Link>
            <Link href={ctas.shop.href} className="btn-ghost">
              {ctas.shop.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-24">
        <div className="mx-auto max-w-prose space-y-8 px-6 text-lg leading-loose text-brand-text-main">
          <h2 className="text-center font-serif text-2xl tracking-wide md:text-3xl">
            My Story
          </h2>
          <span className="block text-center text-brand-gold-primary" aria-hidden>
            ✦
          </span>
          {bioParagraphs.map((paragraph, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-brand-gold-primary"
                  : undefined
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-brand-cream py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-base uppercase tracking-[0.2em] text-brand-text-muted">
            {mantraIntro}
          </p>
          <blockquote className="mt-12">
            <span className="block text-2xl text-brand-gold-primary" aria-hidden>
              ✦
            </span>
            <p className="my-8 font-script text-4xl leading-snug text-brand-gold-primary md:text-5xl">
              {mantra}
            </p>
            <span className="block text-2xl text-brand-gold-primary" aria-hidden>
              ✦
            </span>
          </blockquote>
        </div>
      </section>
    </>
  );
}
