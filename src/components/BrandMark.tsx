type BrandMarkProps = {
  /** `inline` flows within running text; `display` stacks the two lines like the logo. */
  variant?: "inline" | "display";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const displaySizes = {
  sm: { serif: "text-[0.7rem] tracking-[0.22em]", script: "text-xl" },
  md: { serif: "text-sm tracking-[0.22em]", script: "text-3xl" },
  lg: { serif: "text-xl tracking-[0.22em] md:text-2xl", script: "text-4xl md:text-5xl" },
  xl: { serif: "text-3xl tracking-[0.2em] md:text-4xl", script: "text-6xl md:text-7xl" },
} as const;

/**
 * Renders the trademarked "Take Up Space on Purpose" wordmark per the brand guide:
 * Bodoni Moda uppercase for "TAKE UP SPACE", Allura script for "on Purpose",
 * a reduced TM aligned with the script, all in primary brand gold #CBB26A.
 */
export function BrandMark({ variant = "inline", size = "md", className = "" }: BrandMarkProps) {
  if (variant === "display") {
    const s = displaySizes[size];
    return (
      <span
        className={`inline-flex flex-col items-center text-brand-gold-primary ${className}`}
      >
        <span className={`font-brand-serif leading-none uppercase ${s.serif}`}>Take Up Space</span>
        <span className={`relative font-script leading-[1.1] ${s.script}`}>
          on Purpose
          <span
            className="absolute -right-[1.1em] top-[0.15em] font-sans text-[0.28em] uppercase tracking-wider"
            aria-label="trademark"
          >
            TM
          </span>
        </span>
      </span>
    );
  }

  return (
    <span className={`whitespace-nowrap text-brand-gold-primary ${className}`}>
      <span className="font-brand-serif text-[0.8em] uppercase tracking-[0.12em]">
        Take Up Space
      </span>{" "}
      <span className="font-script text-[1.15em]">on Purpose</span>
      <span className="relative -top-[0.55em] ml-px font-sans text-[0.4em] uppercase tracking-wider">
        TM
      </span>
    </span>
  );
}

const PHRASE = /take up space on purpose/i;

/** Splits text around the brand phrase and renders the wordmark inline. */
export function withBrandMark(text: string, key?: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let rest = text;
  let i = 0;
  for (;;) {
    const match = PHRASE.exec(rest);
    if (!match) break;
    parts.push(rest.slice(0, match.index));
    parts.push(<BrandMark key={`${key ?? "bm"}-${i++}`} />);
    rest = rest.slice(match.index + match[0].length);
  }
  parts.push(rest);
  return parts;
}
