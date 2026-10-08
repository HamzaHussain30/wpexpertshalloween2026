import { Globe2, Plus, ShieldCheck, Undo2 } from "lucide-react";
import Image from "next/image";
import { Countdown } from "@/components/Countdown";
import { CopyCode } from "@/components/CopyCode";
import { ProductBrowser } from "@/components/ProductBrowser";
import { ProductCard } from "@/components/ProductCard";
import { Graveyard, Pumpkin, Spider, Web } from "@/components/Scenery";
import { PRODUCTS, SALE } from "@/lib/products";

const featured = PRODUCTS.filter((p) => p.tag === "Best seller");

const WHY = [
  {
    title: "Where the holiday rush begins",
    body: "Halloween is the first big shopping moment of the final quarter. Shoppers are already in a buying mood, and stores that are ready early carry that momentum through Black Friday.",
  },
  {
    title: "The smartest time to upgrade",
    body: "A store tuned now is a store that is ready for the busiest weeks of the year. Pick up the tools you have been eyeing at a spooky price and have them live before the crowds arrive.",
  },
  {
    title: "Tradition built on treats",
    body: "It started as Samhain, an old Celtic harvest festival. Today it is about costumes, candy and giving, which makes it a natural fit for offers, rewards and a bit of fun at checkout.",
  },
];

const STEPS = [
  ["Pick your plugins", "Browse the graveyard below and open any plugin you want."],
  ["Add it to your cart", "Choose your plan and head to checkout."],
  ["Use the code", `Enter ${SALE.code} at checkout to take ${SALE.percent}% off.`],
];

const FAQ = [
  [
    "When does the Halloween sale end?",
    "The sale runs until the end of October 31. After that, prices return to normal, so the countdown above is the real deadline.",
  ],
  ["Which plugins are included?", `All ${PRODUCTS.length} WooCommerce plugins in the WPExperts store. No exclusions, no tricks.`],
  ["How do I apply the discount?", `Add your plugins to the cart and enter the code ${SALE.code} at checkout. The ${SALE.percent}% discount is applied instantly.`],
  ["Do I get a refund if it's not right for me?", "Yes. Every plugin is covered by our 14-day money-back guarantee, sale or not."],
];

const PERKS = [
  [Undo2, "14-day money-back", "Not the right fit? Get your money back within 14 days."],
  [Globe2, "Support around the world", "Our team is on hand across time zones."],
  [ShieldCheck, "Safe and secure", "Trusted by 1.5 million+ active installations."],
] as const;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-pumpkin">{children}</p>;
}

export default function Page() {
  return (
    <>
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-30">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:grid md:grid-cols-[1fr_auto_1fr] md:px-12 lg:px-24 xl:px-32">
          <a href={SALE.storeUrl} aria-label="WPExperts store" className="justify-self-start">
            <Image src="/brand/logo-white.svg" alt="WPExperts" width={200} height={40} priority unoptimized className="h-8 w-auto sm:h-9" />
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-muted md:flex">
            <a href="#why" className="hover:text-foreground">Why Halloween</a>
            <a href="#deals" className="hover:text-foreground">Deals</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
          </div>
          <a
            href={SALE.storeUrl}
            className="justify-self-end rounded-full border border-white/20 bg-ink/70 px-4 py-2 text-sm font-semibold backdrop-blur transition hover:border-pumpkin hover:text-pumpkin"
          >
            Visit store
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section
          className="relative isolate flex min-h-svh min-[1440px]:min-h-[720px] flex-col items-center justify-center overflow-hidden bg-[#1b123c] bg-cover bg-center px-6 pb-16 pt-28 text-center md:px-12"
          style={{ backgroundImage: "linear-gradient(rgb(0 0 0 / 0.6), rgb(0 0 0 / 0.6)), url(/hero/forest.png)" }}
        >
          <h1 className="max-w-[1100px] text-balance font-medium leading-[1.2] tracking-[1px] text-[#f4eefb] [font-size:clamp(2.25rem,5vw,4rem)]">
            Treats, not tricks: {SALE.percent}% off every <span className="text-pumpkin-hot">WooCommerce</span> plugin
          </h1>
          <p className="mt-5 max-w-[780px] text-balance text-lg leading-[1.4] text-[#cfc4f0] sm:text-xl">
            From <strong className="font-semibold text-white">October 30 to 31</strong>. Every premium WPExperts plugin, one simple code at checkout.
          </p>

          <div className="mt-5">
            <Countdown compact />
          </div>

          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row">
            <CopyCode />
            <a
              href="#deals"
              className="inline-flex h-14 items-center justify-center rounded-md bg-pumpkin px-7 font-bold text-[#1c1054] transition hover:bg-pumpkin-hot"
            >
              Shop the sale
            </a>
          </div>
        </section>

        {/* TICKER */}
        <div className="overflow-hidden border-y border-line bg-pumpkin py-3 text-ink" aria-hidden>
          <div className="marquee flex w-max gap-10 whitespace-nowrap text-sm font-extrabold uppercase tracking-widest">
            {[0, 1].map((k) => (
              <div key={k} className="flex gap-10">
                {["Code " + SALE.code, `${SALE.percent}% off everything`, "Ends Oct 31", "14-day money-back", "No tricks", "Code " + SALE.code, `${SALE.percent}% off everything`, "Ends Oct 31", "14-day money-back", "No tricks"].map((t, i) => (
                  <span key={i} className="flex items-center gap-10">
                    {t} <span>✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* WHY HALLOWEEN */}
        <section id="why" className="mx-auto max-w-6xl scroll-mt-8 px-6 md:px-12 lg:px-16 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Why Halloween matters</Eyebrow>
            <h2 className="text-3xl font-medium tracking-[1px] text-balance sm:text-[3.375rem] sm:leading-[1.3]">More than costumes and candy</h2>
            <p className="mt-4 text-lg text-muted">
              For centuries it has been a night of gathering, giving and getting ready for the dark months ahead. For online stores, it is the perfect cue to do the same.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {WHY.map((w, i) => (
              <div key={w.title} className="relative overflow-hidden rounded-2xl border border-line bg-surface p-7">
                <span className="text-6xl font-semibold tracking-[1.2px] text-violet/40">0{i + 1}</span>
                <h3 className="mt-2 text-xl font-bold">{w.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{w.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED */}
        <section id="deals" className="relative scroll-mt-8 bg-gradient-to-b from-transparent via-violet/[0.07] to-transparent py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Crowd favourites</Eyebrow>
              <h2 className="text-3xl font-medium tracking-[1px] text-balance sm:text-[3.375rem] sm:leading-[1.3]">Best-selling treats</h2>
              <p className="mt-4 text-lg text-muted">The plugins our customers reach for first, now {SALE.percent}% cheaper.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {featured.map((p) => (
                <ProductCard key={p.slug} p={p} featured />
              ))}
            </div>
          </div>
        </section>

        {/* ALL PRODUCTS */}
        <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pb-24">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Eyebrow>The full graveyard</Eyebrow>
            <h2 className="text-3xl font-medium tracking-[1px] text-balance sm:text-[3.375rem] sm:leading-[1.3]">All {PRODUCTS.length} plugins on sale</h2>
          </div>
          <ProductBrowser />
        </section>

        {/* HOW TO */}
        <section className="relative overflow-hidden border-y border-line bg-surface py-24">
          <Web className="absolute right-0 top-0 w-56 -scale-x-100 text-violet-soft/15" />
          <div className="mx-auto max-w-5xl px-6 md:px-12 lg:px-16">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Three easy steps</Eyebrow>
              <h2 className="text-3xl font-medium tracking-[1px] text-balance sm:text-[3.375rem] sm:leading-[1.3]">How to claim your discount</h2>
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-3">
              {STEPS.map(([t, d], i) => (
                <li key={t} className="rounded-2xl border border-line bg-ink/60 p-6">
                  <span className="flex size-10 items-center justify-center rounded-full bg-pumpkin text-xl font-extrabold text-ink">{i + 1}</span>
                  <h3 className="mt-4 text-lg font-bold">{t}</h3>
                  <p className="mt-2 text-muted">{d}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex justify-center">
              <CopyCode />
            </div>
          </div>
        </section>

        {/* PERKS */}
        <section className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {PERKS.map(([Icon, t, d]) => (
              <div key={t} className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-slime/10 text-slime ring-1 ring-slime/30">
                  <Icon size={22} aria-hidden />
                </span>
                <div>
                  <h3 className="font-bold">{t}</h3>
                  <p className="mt-1 text-sm text-muted">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl scroll-mt-8 px-6 md:px-12 lg:px-16 pb-24">
          <div className="mb-10 text-center">
            <Eyebrow>Got questions?</Eyebrow>
            <h2 className="text-3xl font-medium tracking-[1px] text-balance sm:text-[3.375rem] sm:leading-[1.3]">No need to be scared</h2>
          </div>
          <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
            {FAQ.map(([q, a], i) => (
              <details key={q} open={i === 0} className="group px-6 py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                  {q}
                  <Plus className="plus shrink-0 text-pumpkin transition-transform" size={20} aria-hidden />
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{a}</p>
              </details>
            ))}
          </div>
        </section>

      </main>

      <footer className="sky relative isolate flex min-h-svh flex-col overflow-hidden">
        <div className="stars absolute inset-0 -z-10" />
        <Web className="absolute right-0 top-0 -z-10 w-48 -scale-x-100 text-violet-soft/25 sm:w-72" />
        <Spider className="dangle absolute right-[14%] top-0 -z-10 hidden h-32 text-violet-soft sm:block" />

        <div className="relative flex flex-1 flex-col items-center justify-center px-6 pb-[24vh] pt-[10vh] text-center md:px-12">
          <h2 className="max-w-4xl text-balance font-medium tracking-[1px] leading-[1.1] [font-size:clamp(2rem,min(6.5vh,6vw),4.75rem)]">
            Don&apos;t get ghosted by this deal
          </h2>
          <p className="mt-[2vh] text-lg text-muted sm:text-xl">
            <strong className="text-pumpkin-hot">{SALE.percent}% off</strong> every plugin ends October 31.
          </p>
          <div className="mt-[4vh]">
            <Countdown />
          </div>
          <div className="mt-[4vh] flex flex-col items-center gap-3 sm:flex-row">
            <CopyCode />
            <a
              href={SALE.storeUrl}
              className="inline-flex h-14 items-center justify-center rounded-md bg-pumpkin px-7 font-bold text-[#1c1054] transition hover:bg-pumpkin-hot"
            >
              Shop the sale
            </a>
          </div>

          <Pumpkin className="flicker absolute bottom-[1vh] left-[7%] z-10 w-24 sm:w-auto sm:h-[17vh]" />
          <Pumpkin className="flicker absolute bottom-[1vh] left-[26%] z-10 hidden sm:block sm:h-[9vh]" style={{ animationDelay: "-1s" }} />
          <Pumpkin className="flicker absolute bottom-[1vh] right-[24%] z-10 hidden sm:block sm:h-[11vh]" style={{ animationDelay: "-2s" }} />
          <Pumpkin className="flicker absolute bottom-[1vh] right-[7%] z-10 w-20 sm:w-auto sm:h-[16vh]" style={{ animationDelay: "-1.5s" }} />
          <Graveyard className="absolute inset-x-0 bottom-0 h-[22vh] min-h-28 w-full" />
        </div>

        <div className="relative z-20 border-t border-white/10 bg-[#07040b] px-6 py-6 text-sm text-muted md:px-12 lg:px-16">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
            <Image src="/brand/logo-white.svg" alt="WPExperts" width={200} height={40} unoptimized className="h-7 w-auto" />
            <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-medium">
              <a href="#why" className="hover:text-foreground">Why Halloween</a>
              <a href="#deals" className="hover:text-foreground">Deals</a>
              <a href="#faq" className="hover:text-foreground">FAQ</a>
              <a href={SALE.storeUrl} className="hover:text-foreground">Store</a>
            </nav>
            <p className="text-center md:text-right">© 2026 WPExperts. Prices are monthly, before tax.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
