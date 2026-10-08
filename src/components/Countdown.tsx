"use client";

import { useEffect, useState } from "react";
import { SALE } from "@/lib/products";

const end = () => new Date(SALE.endsAt.year, SALE.endsAt.monthIndex, SALE.endsAt.day).getTime();

export function Countdown({ compact = false, align = "center", divided = false }: { compact?: boolean; align?: "left" | "center"; divided?: boolean }) {
  // null until mounted so server and client markup match
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setLeft(Math.max(0, end() - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const s = left === null ? null : Math.floor(left / 1000);
  const units = [
    ["Days", s === null ? null : Math.floor(s / 86400)],
    ["Hours", s === null ? null : Math.floor(s / 3600) % 24],
    ["Mins", s === null ? null : Math.floor(s / 60) % 60],
    ["Secs", s === null ? null : s % 60],
  ] as const;

  return (
    <div
      role="timer"
      aria-label="Time left in the sale"
      className={`flex items-start gap-3 sm:gap-5 ${align === "left" ? "justify-start" : "justify-center"}`}
    >
      {units.map(([label, v], i) => (
        <div key={label} className="flex items-start gap-3 sm:gap-5">
          <div className="flex flex-col items-center">
            <span className={`font-extrabold tabular-nums leading-none text-foreground ${compact ? "text-4xl" : "text-5xl sm:text-6xl"}`}>
              {v === null ? "--" : String(v).padStart(2, "0")}
            </span>
            <span className="mt-1.5 text-[0.65rem] font-semibold uppercase tracking-widest text-muted">{label}</span>
          </div>
          {i < units.length - 1 &&
            (divided ? (
              <span aria-hidden className="h-10 w-px self-center bg-white/15" />
            ) : (
              <span aria-hidden className={`font-extrabold leading-none text-pumpkin ${compact ? "text-4xl" : "text-5xl sm:text-6xl"}`}>
                :
              </span>
            ))}
        </div>
      ))}
    </div>
  );
}
