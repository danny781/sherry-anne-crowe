type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-4 font-script text-2xl text-brand-gold-primary md:text-3xl">
          {eyebrow}
        </p>
      )}
      <h1 className="font-serif text-3xl tracking-wide text-brand-text-main md:text-5xl">
        {title}
      </h1>
      <span className="mt-6 block text-brand-gold-primary" aria-hidden>
        ✦
      </span>
      {description && (
        <p className="mt-6 text-base leading-relaxed text-brand-text-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
