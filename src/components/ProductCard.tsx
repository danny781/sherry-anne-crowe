import Image from "next/image";
import { formatPrice, type Product } from "@/content/products";

export function ProductCard({ product }: { product: Product }) {
  const comingSoon = product.price === null;

  return (
    <article className="group flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-brand-cream shadow-luxury">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt=""
              width={1260}
              height={1260}
              className="w-1/2 opacity-90"
            />
          </div>
        )}
        {comingSoon && (
          <span className="absolute left-4 top-4 bg-brand-gold-primary px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-brand-white">
            Coming Soon
          </span>
        )}
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <h2 className="font-serif text-xl leading-snug text-brand-text-main">{product.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-brand-text-muted">{product.description}</p>

        <div className="mt-4">
          {comingSoon ? (
            <p className="text-base text-brand-text-muted">Price TBD</p>
          ) : (
            <>
              <p className="text-lg text-brand-text-main">{formatPrice(product.price!)}</p>
              {product.shipping !== undefined && (
                <p className="mt-1 text-xs text-brand-text-muted">
                  +{formatPrice(product.shipping)} shipping
                </p>
              )}
            </>
          )}
        </div>

        <div className="mt-6">
          {comingSoon ? (
            <button type="button" disabled className="btn-ghost w-full cursor-not-allowed opacity-50">
              Notify Me
            </button>
          ) : (
            <a href="#" className="btn-ghost w-full">
              Add to Cart
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
