import type { Metadata } from "next";
import { allProperties } from "@/lib/propertiesData";

/**
 * Generate dynamic metadata for property detail pages
 * Uses generateMetadata to create SEO-friendly metadata for each property
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const propertyId = parseInt(id);
  const property = allProperties.find((p) => p.id === propertyId);

  if (!property) {
    return {
      title: "Property Not Found",
      description: "The requested property could not be found.",
    };
  }

  const propertyImage = property.images?.[0] || "/img/heroBg.png";
  const priceFormatted = property.price || "Price on request";
  const location = property.location || "Premium Location";

  return {
    title: `${property.name} - ${location}`,
    description: `${property.description || property.longDescription || `Premium property investment in ${location}. ${property.name} offers luxury living with exceptional returns.`} Starting from ${priceFormatted}.`,
    keywords: [
      property.name,
      location,
      "property investment",
      "luxury property",
      property.investmentDetails?.propertyType || "premium property",
      `${location} real estate`,
    ],
    openGraph: {
      title: `${property.name} | LuxuryEstate`,
      description: `${property.description || property.longDescription || `Premium property investment in ${location}.`} Starting from ${priceFormatted}.`,
      url: `/properties/${id}`,
      type: "website",
      images: [
        {
          url: propertyImage,
          width: 1200,
          height: 630,
          alt: `${property.name} - ${location}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${property.name} - ${location}`,
      description: `${property.description || `Premium property investment in ${location}.`} Starting from ${priceFormatted}.`,
      images: [propertyImage],
    },
    alternates: {
      canonical: `/properties/${id}`,
    },
  };
}

export default function PropertyDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

