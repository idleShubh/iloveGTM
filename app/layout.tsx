import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iloveGTM — where builders find GTM tools and ideas that actually work",
  description:
    "iloveGTM is where builders find, test, and share real go-to-market tools that actually drive growth. Join the waitlist.",
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
