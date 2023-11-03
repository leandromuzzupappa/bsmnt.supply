import type { Metadata } from "next";
import localFont from "next/font/local";

import { Providers } from "@/providers";

import { Header } from "@molecules/Header/Header";
import { Footer } from "@molecules/Footer/Footer";
import "@assets/styles/globals.css";

const grotesque = localFont({
  src: "../assets/fonts/BasementGrotesque-Black.woff2",
  weight: "bold",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bsmnt-supply.vercel.app/"),
  title: "Basement Supply",
  description: "Wholesome pepitos page",
  keywords: ["next.js", "typescript"],
  authors: [
    {
      name: "Leandro Muzzupappa",
      url: "https://lmuzzupappa.vercel.app/",
    },
  ],
  creator: "facuperezm",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/OG.png",
    title: "Basement Supply",
    description: "Wholesome pepitos page",
    siteName: "Basement Supply",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basement Supply",
    description: "Wholesome pepitos page",
    images: ["https://bsmnt-supply.vercel.app/OG.png"],
  },
  icons: {
    icon: "https://bsmnt-supply.vercel.app/b-favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={grotesque.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
