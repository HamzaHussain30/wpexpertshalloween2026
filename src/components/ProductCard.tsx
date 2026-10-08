import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { iconUrl, money, productUrl, SALE, salePrice, type Product } from "@/lib/products";

// These two icons ship without the cream tile the rest have, so give them one.
const NEEDS_TILE = new Set(["b2b-payments-for-woocommerce", "quick-commerce"]);

export function ProductCard({ p, featured = false }: { p: Product; featured?: boolean }) {
  const size = featured ? 64 : 52;
  return (
    <a
      href={productUrl(p.slug)}
      target="_blank"
      rel="noopener"
      className={`group relative flex flex-col rounded-2xl border border-line bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-pumpkin/60 hover:shadow-[0_12px_40px_-12px_rgb(255_122_26/0.45)] ${
        featured ? "sm:p-7" : ""
      }`}
    >
      <span className="absolute right-4 top-4 rounded-full bg-pumpkin px-2.5 py-1 text-xs font-bold text-ink">
        −{SALE.percent}%
      </span>
      {NEEDS_TILE.has(p.slug) ? (
        <span className="flex items-center justify-center rounded-xl bg-[#FCF8F0]" style={{ width: size, height: size }}>
          <Image src={iconUrl(p.slug)} alt="" width={size - 16} height={size - 16} unoptimized />
        </span>
      ) : (
        <Image src={iconUrl(p.slug)} alt="" width={size} height={size} unoptimized className="rounded-xl" />
      )}
      <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
        {p.category}
        {p.tag && <span className="rounded bg-slime/15 px-1.5 py-0.5 text-slime">{p.tag}</span>}
      </div>
      <h3 className={`mt-1 font-semibold leading-snug text-foreground ${featured ? "text-xl" : "text-base"}`}>{p.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.blurb}</p>
      <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
        <div>
          <div className="text-xs text-muted">
            {p.from && "from "}
            <s>{money(p.price)}</s>
          </div>
          <div className="text-2xl font-extrabold leading-none text-pumpkin-hot">
            {money(salePrice(p.price))}
            <span className="font-sans text-xs font-medium text-muted">/mo</span>
          </div>
        </div>
        <span className="flex items-center gap-1 text-sm font-semibold text-foreground transition group-hover:text-pumpkin">
          Get it <ArrowUpRight size={16} aria-hidden />
        </span>
      </div>
    </a>
  );
}
