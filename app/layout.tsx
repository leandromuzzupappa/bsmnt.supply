import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const grotesque = localFont({
  src: "../assets/fonts/BasementGrotesque-Black.woff2",
  weight: "bold",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Pepitos",
  description: "Wholesome pepitos page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={grotesque.className}>{children}</body>
    </html>
  );
}
