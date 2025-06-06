import type { Metadata } from "next";
import { satoshi, integral } from "./fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";


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
    url: "https://nextjs-store-ivory.vercel.app/",
    siteName: "Next-Store",
    images: [
      {
        url: "https://nextjs-store-ivory.vercel.app/og-image.png",
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
    images: ["https://nextjs-store-ivory.vercel.app/og-image.png"],
    creator: "@yourTwitterHandle", // optional
  },
  metadataBase: new URL("https://nextjs-store-ivory.vercel.app/"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${integral.variable} antialiased `}
      >
        <Navbar />
        <div className="mt-20">

        {children}
        </div>
      </body>
    </html>
  );
}
