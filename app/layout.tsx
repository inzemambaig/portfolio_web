import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description:
    "Full-stack developer building accessible, performant, and delightful experiences for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`} data-scroll-behavior="smooth">
      {/* suppressHydrationWarning prevents false positives from browser extensions
          (e.g. Grammarly) that inject data-* attributes into <body> before React hydrates. */}
      <body
        className="min-h-full bg-[#0f172a] font-sans text-slate-400 antialiased selection:bg-teal-300/20 selection:text-teal-300"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
