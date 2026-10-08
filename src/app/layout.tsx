import type { Metadata } from "next";
import { Abril_Fatface, DM_Sans } from "next/font/google";
import "./globals.css";
import { SALE } from "@/lib/products";

const body = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const display = Abril_Fatface({ variable: "--font-fraunces", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: `WPExperts Halloween Sale — ${SALE.percent}% off every WooCommerce plugin`,
  description:
    "Spooky season savings on all 43 WPExperts WooCommerce plugins. Limited time, no tricks, 14-day money-back guarantee.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} antialiased`}>
      {/* extensions like ColorZilla add attributes to <body> before hydration */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
