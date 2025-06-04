import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata : Metadata = {
  title: "Next-Store | Modern E-Commerce",
  description:
    "Next-Store is a sleek, modern e-commerce platform built with Next.js. Shop top-quality products with a fast, secure, and seamless experience.",
  keywords: [
    "Next.js",
    "e-commerce",
    "online store",
    "modern shop",
    "Next-Store",
    "React shopping site",
    "web store",
    "buy online",
  ],
  authors: [{ name: "Caleb" }],
  creator: "Caleb",
  openGraph: {
    title: "Next-Store | Modern E-Commerce",
    description:
      "Discover the future of shopping at Next-Store. Lightning-fast checkout, beautiful UI, and unbeatable products.",
    url: "https://next-store-green-rho.vercel.app/",
    siteName: "Next-Store",
    images: [
      {
        url: "https://next-store-green-rho.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Next-Store Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next-Store | Modern E-Commerce",
    description:
      "Experience modern e-commerce with speed and style. Built with Next.js and love.",
    images: ["https://next-store-green-rho.vercel.app/og-image.png"],
    creator: "@yourTwitterHandle", // optional
  },
  metadataBase: new URL("https://next-store-green-rho.vercel.app/"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
