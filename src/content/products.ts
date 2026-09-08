export type Product = {
  slug: string;
  title: string;
  price: number | null;
  shipping?: number;
  description: string;
  image?: string;
};

export const products: Product[] = [
  {
    slug: "luxury-air-freshener",
    title: "Take Up Space On Purpose Luxury Air Freshener",
    price: 9.99,
    shipping: 3.0,
    description: "A daily reminder to breathe deep and take up space — wherever you go.",
    image: "/images/air-freshener.png",
  },
  {
    slug: "premium-puzzle",
    title: "Take Up Space On Purpose Premium Puzzle",
    price: null,
    description: "A 500-piece, 18\" x 24\" keepsake puzzle of affirmations — slow down, piece by piece.",
    image: "/images/puzzle.png",
  },
  {
    slug: "self-love-colouring-book",
    title: "Self-Love Colouring Book (Edition 1 & 2)",
    price: null,
    description: "Two editions of gentle, creative affirmation — designed to be coloured with kindness.",
  },
];

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
}
