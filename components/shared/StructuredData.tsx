/**
 * Structured Data (JSON-LD) component for SEO
 * Provides schema.org markup for better search engine understanding
 */

interface OrganizationSchemaProps {
  siteUrl?: string;
}

export function OrganizationSchema({ siteUrl = "https://luxuryestate.com" }: OrganizationSchemaProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LuxuryEstate",
    url: siteUrl,
    logo: `${siteUrl}/img/heroBg.png`,
    description: "Premium property investment platform offering luxury real estate opportunities across the world's fastest-growing cities.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English"],
    },
    sameAs: [
      // Add social media links here when available
      // "https://www.facebook.com/luxuryestate",
      // "https://www.twitter.com/luxuryestate",
      // "https://www.linkedin.com/company/luxuryestate",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

interface PropertySchemaProps {
  property: {
    id: number;
    name: string;
    description: string;
    location: string;
    price: string;
    images: string[];
    bedrooms?: number;
    bathrooms?: number;
    size?: string;
    propertyType?: string;
  };
  siteUrl?: string;
}

export function PropertySchema({ property, siteUrl = "https://luxuryestate.com" }: PropertySchemaProps) {
  const propertyImage = property.images?.[0] || `${siteUrl}/img/heroBg.png`;
  
  const propertySchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: property.name,
    description: property.description,
    image: property.images?.map(img => `${siteUrl}${img}`) || [propertyImage],
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "USD", // Adjust based on your currency
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/properties/${property.id}`,
    },
    brand: {
      "@type": "Brand",
      name: "LuxuryEstate",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
    },
    // Additional property details
    ...(property.bedrooms && { numberOfRooms: property.bedrooms }),
    ...(property.size && { floorSize: property.size }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(propertySchema) }}
    />
  );
}

interface WebsiteSchemaProps {
  siteUrl?: string;
}

export function WebsiteSchema({ siteUrl = "https://luxuryestate.com" }: WebsiteSchemaProps) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LuxuryEstate",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/properties?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}

