import type { Metadata } from "next";

/**
 * SEO metadata for tours page
 * Layout file for metadata since page.tsx is a client component
 */
export const metadata: Metadata = {
  title: "Tours & Experiences",
  description: "Explore premium property investment opportunities through our guided tours. Experience luxury properties in Dubai, USA, and other prime locations. Book your tour today.",
  keywords: ["property tours", "investment tours", "real estate tours", "property viewing", "Dubai property tours", "USA property tours"],
  openGraph: {
    title: "Tours & Experiences | LuxuryEstate",
    description: "Explore premium property investment opportunities through our guided tours. Experience luxury properties in Dubai, USA, and other prime locations.",
    url: "/tours",
    images: [
      {
        url: "/img/usa1.jpg",
        width: 1200,
        height: 630,
        alt: "LuxuryEstate Property Tours",
      },
    ],
  },
  alternates: {
    canonical: "/tours",
  },
};

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

