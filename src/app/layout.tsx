import type { Metadata } from "next";
import {
  Allura,
  Bodoni_Moda,
  Cormorant_Garamond,
  Montserrat,
  Playfair_Display,
} from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sherry Anne Crowe | Take Up Space on Purpose",
    template: "%s | Sherry Anne Crowe",
  },
  description:
    "Sherry Anne Crowe — speaker, host, model and creator of Take Up Space On Purpose, a community where self-love becomes the strength we share.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${bodoni.variable} ${allura.variable} ${cormorant.variable} ${montserrat.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1 pb-24 md:pb-0">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
