import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { OrganizationSchema, WebsiteSchema } from "@/components/shared/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://luxuryestate.com'),
  title: {
    default: "LuxuryEstate - Premium Property Investment Platform",
    template: "%s | LuxuryEstate"
  },
  description: "Invest in premium properties across the world's fastest-growing cities. LuxuryEstate offers luxury real estate investments blending innovation, elegance, and lasting returns.",
  keywords: ["property investment", "real estate", "luxury properties", "property investment platform", "real estate investment", "premium properties", "Dubai properties", "USA properties"],
  authors: [{ name: "LuxuryEstate" }],
  creator: "LuxuryEstate",
  publisher: "LuxuryEstate",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "LuxuryEstate",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "LuxuryEstate",
    title: "LuxuryEstate - Premium Property Investment Platform",
    description: "Invest in premium properties across the world's fastest-growing cities. LuxuryEstate offers luxury real estate investments blending innovation, elegance, and lasting returns.",
    images: [
      {
        url: "/img/heroBg.png",
        width: 1200,
        height: 630,
        alt: "LuxuryEstate Premium Property Investment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxuryEstate - Premium Property Investment Platform",
    description: "Invest in premium properties across the world's fastest-growing cities.",
    images: ["/img/heroBg.png"],
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
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://luxuryestate.com";
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <OrganizationSchema siteUrl={siteUrl} />
        <WebsiteSchema siteUrl={siteUrl} />
        {children}
      </body>
    </html>
  );
}
