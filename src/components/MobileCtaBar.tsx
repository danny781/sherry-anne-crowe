import Link from "next/link";
import { ctas } from "@/lib/navigation";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-gold-light/40 bg-brand-white/80 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 backdrop-blur-md md:hidden">
      <div className="flex gap-3">
        <Link href={ctas.shop.href} className="btn-ghost flex-1">
          {ctas.shop.label}
        </Link>
        <Link href={ctas.book.href} className="btn-primary flex-[2] px-3 text-center">
          {ctas.book.label}
        </Link>
      </div>
    </div>
  );
}
