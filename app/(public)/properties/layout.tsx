import type { Metadata } from "next";

/**
 * SEO metadata for properties listing page
 * Layout file for metadata since page.tsx is a client component
 */
export const metadata: Metadata = {
  title: "Properties",
  description: "Browse our premium property investment portfolio. Discover luxury real estate opportunities in Dubai, USA, and other prime locations. Filter by location, price, property type, and more.",
  keywords: ["property listings", "luxury properties", "investment properties", "Dubai real estate", "USA properties", "property search"],
  openGraph: {
    title: "Premium Properties | LuxuryEstate",
    description: "Browse our premium property investment portfolio. Discover luxury real estate opportunities in Dubai, USA, and other prime locations.",
    url: "/properties",
    images: [
      {
        url: "/img/heroBg.png",
        width: 1200,
        height: 630,
        alt: "LuxuryEstate Premium Properties",
      },
    ],
  },
  alternates: {
    canonical: "/properties",
  },
};

export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

