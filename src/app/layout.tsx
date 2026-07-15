import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const siteUrl = "https://simonmwangi.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Simon Mwangi Waweru — Full-Stack Developer & Designer",
    template: "%s — Simon Mwangi Waweru",
  },
  description:
    "Full-stack developer who ships real products — from USSD marketplaces to AI business tools — with a designer's eye. Based in Nairobi, Kenya.",
  openGraph: {
    title: "Simon Mwangi Waweru — Full-Stack Developer & Designer",
    description:
      "Full-stack developer who ships real products — from USSD marketplaces to AI business tools — with a designer's eye.",
    url: siteUrl,
    siteName: "Simon Mwangi Waweru",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon Mwangi Waweru — Full-Stack Developer & Designer",
    description:
      "Full-stack developer who ships real products — from USSD marketplaces to AI business tools — with a designer's eye.",
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
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-body">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
