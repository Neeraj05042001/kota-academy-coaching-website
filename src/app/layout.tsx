/**
 * KOTA ACADEMY — app/layout.tsx
 * Root layout. Wires the stylesheet, font, and theme system.
 *
 *   - ThemeScript   runs in <head> pre-paint → no theme flash
 *   - suppressHydrationWarning on <html>     → expected: the script
 *       mutates data-theme before React hydrates
 *   - ThemeProvider wraps the tree           → useTheme() anywhere
 */

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider, ThemeScript } from "@/components/theme/ThemeProvider";
import "./globals.css";

// Self-hosted via next/font — no layout shift, no extra network round-trip.
// (Drop the @import url(...Manrope...) line from base.css when you adopt this;
//  keep it only if you prefer the plain CSS import over next/font.)
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kota Academy — IIT-JEE, NEET & Foundation Coaching",
  description:
    "Premier coaching for IIT-JEE, NEET & Classes 8–12. Personalized mentorship. Proven results.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}