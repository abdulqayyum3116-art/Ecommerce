import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/layout/ScrollReveal";

// Two families only. Fraunces is variable with an optical-size axis, so
// display sizes get the high-contrast cut; DM Sans is variable on weight.
// next/font self-hosts them, preloads the latin subset and generates a
// metric-matched fallback (adjustFontFallback) so swapping causes no CLS.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

// Italic is used for a single emphasis line, so it is not preloaded and
// does not compete with the critical fonts. `optional` means a late file is
// never swapped in, so it cannot shift layout (it is used from cache next time).
const frauncesItalic = Fraunces({
  variable: "--font-fraunces-italic",
  subsets: ["latin"],
  axes: ["opsz"],
  style: "italic",
  display: "optional",
  preload: false,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
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
      className={`${fraunces.variable} ${frauncesItalic.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-fg">
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
