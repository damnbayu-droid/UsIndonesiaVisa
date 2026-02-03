import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "US Indonesia Visa | Official United States to Indonesia Visa Agency",
  description: "Official United States to Indonesia visa services. Fast, reliable processing for E-VOA, Business (C2), and Tourist (C1) visas. Serving US citizens with 16+ years of expertise. Learn about US-Indonesia strategic partnership and tourism relations.",
  keywords: [
    "United States Indonesia Visa",
    "US Indonesia Visa Agency",
    "Indonesia Visa for US Citizens",
    "Bali Visa for Americans",
    "Indonesian E-VOA from USA",
    "Business Visa Indonesia US",
    "Tourist Visa Indonesia USA",
    "US Indonesia Strategic Partnership 2026",
    "Indonesia US Tourism Cooperation",
    "Visa Extension Bali for Americans",
    "Official Indonesia Visa Services US"
  ],
  authors: [{ name: "US Indonesia Visa Agency" }],
  metadataBase: new URL("https://usindonesiavisa.online"),
  alternates: {
    canonical: "https://usindonesiavisa.online",
  },
  openGraph: {
    title: "US Indonesia Visa | Professional United States to Indonesia Visa Services",
    description: "Your trusted gateway to Indonesian visas from the United States. Fast, professional, and secure processing.",
    url: "https://usindonesiavisa.online",
    siteName: "US Indonesia Visa",
    images: [
      {
        url: "/images/us_indonesia_relationship.png",
        width: 1200,
        height: 630,
        alt: "US Indonesia Strategic Partnership",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "US Indonesia Visa | Official US-Indonesia Visa Gateway",
    description: "Professional Indonesian visa services for US citizens with 16+ years experience. Fast, reliable, and secure.",
    images: ["/images/us_indonesia_relationship.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased h-full w-full bg-slate-50`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
