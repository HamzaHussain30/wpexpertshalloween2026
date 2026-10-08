"use client";

import { useState } from "react";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function ProductBrowser() {
  const [cat, setCat] = useState<string>("All");
  const list = cat === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);

  return (
    <div>
      <div role="tablist" aria-label="Plugin categories" className="mb-8 flex flex-wrap justify-center gap-2">
        {["All", ...CATEGORIES].map((c) => {
          const on = c === cat;
          const n = c === "All" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === c).length;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={on}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                on ? "bg-pumpkin text-ink" : "border border-line bg-surface text-muted hover:border-pumpkin/50 hover:text-foreground"
              }`}
            >
              {c} <span className={on ? "opacity-70" : "opacity-60"}>{n}</span>
            </button>
          );
        })}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </div>
    </div>
  );
}
