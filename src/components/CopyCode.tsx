"use client";

import { Check, Scissors } from "lucide-react";
import { useState } from "react";
import { SALE } from "@/lib/products";

export function CopyCode() {
  const [done, setDone] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(SALE.code);
      setDone(true);
      setTimeout(() => setDone(false), 2000);
    } catch {
      /* clipboard blocked: the code is still visible to type by hand */
    }
  }

  return (
    <button
      onClick={copy}
      aria-label={`Copy coupon code ${SALE.code}`}
      className="inline-flex items-center gap-4 rounded-md border-2 border-dashed border-pumpkin bg-[#0b0620] px-5 py-3 transition hover:bg-[#150c34]"
    >
      <Scissors size={18} className="-rotate-90 text-pumpkin" aria-hidden />
      <span className="font-mono text-xl font-bold tracking-widest text-foreground">{SALE.code}</span>
      <span aria-live="polite" className="flex items-center gap-1 text-sm font-semibold text-pumpkin-hot">
        {done && <Check size={16} aria-hidden />}
        {done ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
