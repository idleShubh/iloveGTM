import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ilovegtm.com"),
  title: "iloveGTM — GTM tools and ideas that actually drive growth",
  description:
    "Where builders, founders, and GTM leaders find, test, and share the go-to-market plays that actually move the needle. Join the waitlist.",
  keywords: [
    "GTM",
    "go-to-market",
    "growth",
    "startups",
    "marketing",
    "sales",
    "founders",
    "iloveGTM",
  ],
  authors: [{ name: "Shubh", url: "https://x.com/idleshubh" }],
  creator: "Shubh",
  openGraph: {
    type: "website",
    url: "https://ilovegtm.com",
    title: "iloveGTM — GTM tools and ideas that actually drive growth",
    description:
      "Where builders, founders, and GTM leaders find, test, and share the go-to-market plays that actually move the needle. Join the waitlist.",
    siteName: "iloveGTM",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "iloveGTM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iloveGTM — GTM tools and ideas that actually drive growth",
    description:
      "Where builders, founders, and GTM leaders find, test, and share the go-to-market plays that actually move the needle. Join the waitlist.",
    images: ["/opengraph-image.png"],
    creator: "@idleshubh",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
