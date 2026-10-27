import type { Metadata } from "next";
import { Fraunces, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ecommerce.codesquad.ai"),
  title: {
    default: "CodeSquad Ecommerce | We Build & Grow Online Stores",
    template: "%s | CodeSquad Ecommerce",
  },
  description:
    "Specialist ecommerce growth partner. Store builds, CRO & UX, product SEO & GEO, paid ads, email retention, and order automations for modern D2C brands.",
  openGraph: {
    title: "CodeSquad Ecommerce | Store Builds, CRO, SEO & Retention",
    description:
      "We build and grow online stores — store builds, CRO, SEO, ads and automation for ecommerce brands.",
    url: "https://ecommerce.codesquad.ai",
    siteName: "CodeSquad Ecommerce",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0F1A] text-slate-900 selection:bg-blue-900 selection:text-blue-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
