import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Take Up Space On Purpose merchandise and self-love colouring books.",
};

export default function ShopPage() {
  return (
    <>
      <section className="bg-brand-cream py-24">
        <div className="px-6">
          <SectionHeading
            eyebrow="Take it home"
            title="Shop"
            description="Small reminders, created with intention, to help you take up space every day."
          />
        </div>
      </section>
      <section className="bg-brand-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
