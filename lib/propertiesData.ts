/**
 * Shared property data used across properties list and detail pages
 * Centralized data source for consistency
 */

export interface Property {
  id: number;
  name: string;
  location: string;
  description: string;
  longDescription: string;
  price: string;
  size: string;
  bedrooms: number;
  bathrooms: number;
  amenities: {
    beds: string;
    capacity: string;
    ac: string;
    bathroom: string;
  };
  images: string[];
  investmentDetails: {
    roi: string;
    expectedReturn: string;
    location: string;
    propertyType: string;
  };
  features: string[];
}

export const allProperties: Property[] = [
  {
    id: 1,
    name: "Heritage Suite",
    location: "New York, USA",
    description: "Prime location investment with exceptional rental yield potential and strong appreciation history. Perfect for investors seeking stable returns in established luxury markets.",
    longDescription: "This exceptional property offers a perfect blend of luxury living and investment potential. Located in one of New York's most prestigious neighborhoods, the Heritage Suite represents a unique opportunity to own a piece of premium real estate. With projected annual returns of 8-12% and strong rental demand, this property is ideal for investors seeking both immediate cash flow and long-term capital appreciation. The property features state-of-the-art amenities, breathtaking views, and is designed with the discerning investor in mind. Market analysis shows consistent appreciation and high occupancy rates, making this a low-risk, high-reward investment opportunity.",
    price: "$2,500,000",
    size: "2,500 sq ft",
    bedrooms: 2,
    bathrooms: 1,
    amenities: {
      beds: "2 King Bed",
      capacity: "4 Person",
      ac: "Air Conditioned",
      bathroom: "1 Spacious Bathroom",
    },
    images: ["/img/usa.jpg", "/img/usa1.jpg", "/img/usa2.jpg", "/img/usa3.jpg"],
    investmentDetails: {
      roi: "8-12%",
      expectedReturn: "15-20 years",
      location: "New York, USA",
      propertyType: "Luxury Apartment",
    },
    features: [
      "Premium Location",
      "Modern Architecture",
      "Smart Home Technology",
      "High-End Finishes",
      "Investment Grade",
      "Rental Potential"
    ],
  },
  {
    id: 2,
    name: "Skyline Executive Suite",
    location: "Dubai, UAE",
    description: "Prime location investment with exceptional rental yield potential and strong appreciation history. Perfect for investors seeking stable returns in established luxury markets.",
    longDescription: "Experience the pinnacle of luxury living in the heart of Dubai. The Skyline Executive Suite offers unparalleled views of the city skyline and features world-class amenities that define modern luxury. This property represents an exceptional investment opportunity in one of the world's fastest-growing real estate markets. With projected ROI of 10-15% annually and Dubai's tax-free status, this property offers international investors exceptional returns. The location in Dubai's financial district ensures strong rental demand from corporate executives and high-net-worth individuals, providing stable, passive income while benefiting from the city's rapid economic growth.",
    price: "$3,200,000",
    size: "3,000 sq ft",
    bedrooms: 2,
    bathrooms: 1,
    amenities: {
      beds: "2 King Bed",
      capacity: "4 Person",
      ac: "Air Conditioned",
      bathroom: "1 Spacious Bathroom",
    },
    images: ["/img/Dubai.jpg", "/img/Dubai1.jpg", "/img/Dubai2.jpg", "/img/Dubai3.png"],
    investmentDetails: {
      roi: "10-15%",
      expectedReturn: "12-18 years",
      location: "Dubai, UAE",
      propertyType: "Luxury Condominium",
    },
    features: [
      "Prime Dubai Location",
      "Panoramic City Views",
      "Luxury Amenities",
      "Premium Finishes",
      "Strong ROI Potential",
      "International Appeal"
    ],
  },
  {
    id: 3,
    name: "Sunset Pool Villa",
    location: "California, USA",
    description: "Prime location investment with exceptional rental yield potential and strong appreciation history. Perfect for investors seeking stable returns in established luxury markets.",
    longDescription: "A stunning luxury villa that combines California's relaxed lifestyle with sophisticated design. The Sunset Pool Villa offers expansive living spaces, private outdoor areas, and premium finishes throughout. This property is ideal for investors seeking both rental income and long-term appreciation in a desirable location. California's coastal properties have historically shown strong appreciation, and this villa's premium amenities ensure high rental demand year-round. With projected returns of 7-11% and the property's prime location, investors benefit from both immediate rental income and long-term capital growth in one of America's most stable real estate markets.",
    price: "$4,500,000",
    size: "4,200 sq ft",
    bedrooms: 2,
    bathrooms: 1,
    amenities: {
      beds: "2 King Bed",
      capacity: "4 Person",
      ac: "Air Conditioned",
      bathroom: "1 Spacious Bathroom",
    },
    images: ["/img/usa2.jpg", "/img/usa.jpg", "/img/usa1.jpg", "/img/usa3.jpg"],
    investmentDetails: {
      roi: "7-11%",
      expectedReturn: "18-25 years",
      location: "California, USA",
      propertyType: "Luxury Villa",
    },
    features: [
      "Coastal California Location",
      "Private Pool",
      "Expansive Outdoor Space",
      "Luxury Villa Design",
      "High Rental Demand",
      "Premium Lifestyle"
    ],
  },
  {
    id: 4,
    name: "Metropolitan Loft",
    location: "New York, USA",
    description: "Modern urban living with stunning city views and contemporary design",
    longDescription: "A sophisticated urban loft in the heart of Manhattan, featuring open-concept living, high ceilings, and floor-to-ceiling windows. This property offers investors a unique opportunity in one of the world's most stable real estate markets with strong rental yields and appreciation potential.",
    price: "$1,800,000",
    size: "1,800 sq ft",
    bedrooms: 1,
    bathrooms: 1,
    amenities: {
      beds: "1 King Bed",
      capacity: "2 Person",
      ac: "Air Conditioned",
      bathroom: "1 Modern Bathroom",
    },
    images: ["/img/usa1.jpg", "/img/usa.jpg", "/img/usa2.jpg", "/img/usa3.jpg"],
    investmentDetails: {
      roi: "9-13%",
      expectedReturn: "12-18 years",
      location: "New York, USA",
      propertyType: "Luxury Apartment",
    },
    features: [
      "Prime Manhattan Location",
      "Modern Loft Design",
      "High Ceilings",
      "City Views",
      "Strong Rental Market",
      "Urban Lifestyle"
    ],
  },
  {
    id: 5,
    name: "Desert Oasis Villa",
    location: "Dubai, UAE",
    description: "Luxury desert retreat with private pool and panoramic desert views",
    longDescription: "An exclusive desert villa offering the ultimate in luxury and privacy. This property features expansive grounds, private pool, and stunning desert vistas. Perfect for investors seeking a premium property in Dubai's luxury real estate market with exceptional rental income potential.",
    price: "$5,200,000",
    size: "5,500 sq ft",
    bedrooms: 3,
    bathrooms: 2,
    amenities: {
      beds: "3 King Bed",
      capacity: "6 Person",
      ac: "Air Conditioned",
      bathroom: "2 Spacious Bathroom",
    },
    images: ["/img/Dubai1.jpg", "/img/Dubai.jpg", "/img/Dubai2.jpg", "/img/Dubai3.png"],
    investmentDetails: {
      roi: "11-16%",
      expectedReturn: "10-15 years",
      location: "Dubai, UAE",
      propertyType: "Luxury Villa",
    },
    features: [
      "Exclusive Desert Location",
      "Private Pool & Grounds",
      "Luxury Villa Design",
      "Desert Views",
      "Premium Rental Income",
      "High-End Finishes"
    ],
  },
  {
    id: 6,
    name: "Coastal Paradise",
    location: "California, USA",
    description: "Oceanfront property with breathtaking views and beach access",
    longDescription: "A stunning oceanfront property offering direct beach access and panoramic ocean views. This coastal gem combines luxury living with exceptional investment potential in one of California's most sought-after locations. Perfect for investors seeking both lifestyle and returns.",
    price: "$3,800,000",
    size: "3,600 sq ft",
    bedrooms: 2,
    bathrooms: 1,
    amenities: {
      beds: "2 King Bed",
      capacity: "4 Person",
      ac: "Air Conditioned",
      bathroom: "1 Spacious Bathroom",
    },
    images: ["/img/usa3.jpg", "/img/usa.jpg", "/img/usa1.jpg", "/img/usa2.jpg"],
    investmentDetails: {
      roi: "8-12%",
      expectedReturn: "15-22 years",
      location: "California, USA",
      propertyType: "Luxury Villa",
    },
    features: [
      "Oceanfront Location",
      "Direct Beach Access",
      "Ocean Views",
      "Coastal Design",
      "Strong Rental Demand",
      "Premium Lifestyle"
    ],
  },
  {
    id: 7,
    name: "Urban Penthouse",
    location: "New York, USA",
    description: "Stunning penthouse with panoramic city views and rooftop terrace",
    longDescription: "A magnificent penthouse apartment located in the heart of Manhattan, featuring floor-to-ceiling windows, private rooftop terrace, and breathtaking city views. This property represents the pinnacle of urban luxury living with exceptional investment potential.",
    price: "$6,500,000",
    size: "4,800 sq ft",
    bedrooms: 3,
    bathrooms: 2,
    amenities: {
      beds: "3 King Bed",
      capacity: "6 Person",
      ac: "Air Conditioned",
      bathroom: "2 Spacious Bathroom",
    },
    images: ["/img/usa.jpg", "/img/usa1.jpg", "/img/usa2.jpg", "/img/usa3.jpg"],
    investmentDetails: {
      roi: "9-14%",
      expectedReturn: "12-18 years",
      location: "New York, USA",
      propertyType: "Luxury Penthouse",
    },
    features: [
      "Manhattan Penthouse",
      "Rooftop Terrace",
      "City Views",
      "Premium Location",
      "High-End Finishes",
      "Exclusive Access"
    ],
  },
  {
    id: 8,
    name: "Marina Bay Residence",
    location: "Dubai, UAE",
    description: "Waterfront luxury residence with marina access and stunning views",
    longDescription: "An exclusive waterfront property in Dubai Marina, offering direct marina access, private yacht berth, and stunning views of the Arabian Gulf. This property combines luxury living with exceptional investment returns in one of Dubai's most prestigious locations.",
    price: "$4,800,000",
    size: "3,800 sq ft",
    bedrooms: 2,
    bathrooms: 2,
    amenities: {
      beds: "2 King Bed",
      capacity: "4 Person",
      ac: "Air Conditioned",
      bathroom: "2 Spacious Bathroom",
    },
    images: ["/img/Dubai.jpg", "/img/Dubai1.jpg", "/img/Dubai2.jpg", "/img/Dubai3.png"],
    investmentDetails: {
      roi: "10-15%",
      expectedReturn: "11-16 years",
      location: "Dubai, UAE",
      propertyType: "Luxury Condominium",
    },
    features: [
      "Marina Location",
      "Yacht Berth Access",
      "Waterfront Views",
      "Premium Amenities",
      "Strong Rental Yield",
      "International Appeal"
    ],
  },
  {
    id: 9,
    name: "Mountain View Estate",
    location: "California, USA",
    description: "Luxury estate with mountain views and expansive grounds",
    longDescription: "A magnificent estate nestled in the California hills, featuring panoramic mountain views, expansive private grounds, and world-class amenities. This property offers investors a rare combination of luxury living and strong appreciation potential.",
    price: "$7,200,000",
    size: "6,000 sq ft",
    bedrooms: 4,
    bathrooms: 3,
    amenities: {
      beds: "4 King Bed",
      capacity: "8 Person",
      ac: "Air Conditioned",
      bathroom: "3 Spacious Bathroom",
    },
    images: ["/img/usa2.jpg", "/img/usa.jpg", "/img/usa1.jpg", "/img/usa3.jpg"],
    investmentDetails: {
      roi: "7-11%",
      expectedReturn: "18-25 years",
      location: "California, USA",
      propertyType: "Luxury Estate",
    },
    features: [
      "Mountain Views",
      "Expansive Grounds",
      "Private Estate",
      "Luxury Design",
      "Premium Location",
      "Exclusive Lifestyle"
    ],
  },
  {
    id: 10,
    name: "Downtown Loft",
    location: "New York, USA",
    description: "Modern industrial loft in trendy SoHo district",
    longDescription: "A beautifully converted industrial loft in the heart of SoHo, featuring high ceilings, exposed brick, and contemporary design. This property offers investors strong rental yields in one of New York's most desirable neighborhoods.",
    price: "$2,200,000",
    size: "2,200 sq ft",
    bedrooms: 1,
    bathrooms: 1,
    amenities: {
      beds: "1 King Bed",
      capacity: "2 Person",
      ac: "Air Conditioned",
      bathroom: "1 Modern Bathroom",
    },
    images: ["/img/usa1.jpg", "/img/usa.jpg", "/img/usa2.jpg", "/img/usa3.jpg"],
    investmentDetails: {
      roi: "10-14%",
      expectedReturn: "12-17 years",
      location: "New York, USA",
      propertyType: "Luxury Loft",
    },
    features: [
      "SoHo Location",
      "Industrial Design",
      "High Ceilings",
      "Modern Finishes",
      "Strong Rental Market",
      "Urban Lifestyle"
    ],
  },
  {
    id: 11,
    name: "Palm Jumeirah Villa",
    location: "Dubai, UAE",
    description: "Exclusive villa on the iconic Palm Jumeirah with beachfront access",
    longDescription: "A stunning beachfront villa on the world-famous Palm Jumeirah, offering direct beach access, private pool, and panoramic views of the Arabian Gulf. This property represents the ultimate in Dubai luxury living with exceptional investment potential.",
    price: "$8,500,000",
    size: "7,200 sq ft",
    bedrooms: 5,
    bathrooms: 4,
    amenities: {
      beds: "5 King Bed",
      capacity: "10 Person",
      ac: "Air Conditioned",
      bathroom: "4 Spacious Bathroom",
    },
    images: ["/img/Dubai1.jpg", "/img/Dubai.jpg", "/img/Dubai2.jpg", "/img/Dubai3.png"],
    investmentDetails: {
      roi: "12-18%",
      expectedReturn: "8-12 years",
      location: "Dubai, UAE",
      propertyType: "Luxury Villa",
    },
    features: [
      "Palm Jumeirah Location",
      "Beachfront Access",
      "Private Pool",
      "Iconic Views",
      "Premium Rental Income",
      "World-Class Amenities"
    ],
  },
  {
    id: 12,
    name: "Wine Country Estate",
    location: "California, USA",
    description: "Luxury estate in Napa Valley with vineyard views",
    longDescription: "An exquisite estate in California's famous wine country, featuring vineyard views, private wine cellar, and expansive outdoor entertaining areas. This property offers investors a unique opportunity in one of the world's most prestigious wine regions.",
    price: "$5,800,000",
    size: "5,400 sq ft",
    bedrooms: 4,
    bathrooms: 3,
    amenities: {
      beds: "4 King Bed",
      capacity: "8 Person",
      ac: "Air Conditioned",
      bathroom: "3 Spacious Bathroom",
    },
    images: ["/img/usa3.jpg", "/img/usa.jpg", "/img/usa1.jpg", "/img/usa2.jpg"],
    investmentDetails: {
      roi: "8-12%",
      expectedReturn: "15-20 years",
      location: "California, USA",
      propertyType: "Luxury Estate",
    },
    features: [
      "Napa Valley Location",
      "Vineyard Views",
      "Wine Cellar",
      "Expansive Grounds",
      "Premium Lifestyle",
      "Unique Investment"
    ],
  },
  {
    id: 13,
    name: "Tribeca Penthouse",
    location: "New York, USA",
    description: "Exclusive penthouse in trendy Tribeca with private terrace",
    longDescription: "A stunning penthouse in Tribeca featuring a private rooftop terrace, floor-to-ceiling windows, and contemporary luxury finishes. This property offers investors strong returns in one of Manhattan's most sought-after neighborhoods.",
    price: "$9,200,000",
    size: "5,600 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    amenities: {
      beds: "3 King Bed",
      capacity: "6 Person",
      ac: "Air Conditioned",
      bathroom: "3 Spacious Bathroom",
    },
    images: ["/img/usa.jpg", "/img/usa1.jpg", "/img/usa2.jpg", "/img/usa3.jpg"],
    investmentDetails: {
      roi: "9-13%",
      expectedReturn: "12-18 years",
      location: "New York, USA",
      propertyType: "Luxury Penthouse",
    },
    features: [
      "Tribeca Location",
      "Private Terrace",
      "City Views",
      "Luxury Design",
      "Strong Rental Demand",
      "Exclusive Access"
    ],
  },
  {
    id: 14,
    name: "Burj Khalifa Residence",
    location: "Dubai, UAE",
    description: "Luxury residence in the world's tallest building",
    longDescription: "An exclusive residence in the iconic Burj Khalifa, offering breathtaking views of Dubai from the world's tallest building. This property represents the ultimate in luxury living with unparalleled investment prestige and rental potential.",
    price: "$12,000,000",
    size: "6,800 sq ft",
    bedrooms: 4,
    bathrooms: 4,
    amenities: {
      beds: "4 King Bed",
      capacity: "8 Person",
      ac: "Air Conditioned",
      bathroom: "4 Spacious Bathroom",
    },
    images: ["/img/Dubai2.jpg", "/img/Dubai.jpg", "/img/Dubai1.jpg", "/img/Dubai3.png"],
    investmentDetails: {
      roi: "13-19%",
      expectedReturn: "7-11 years",
      location: "Dubai, UAE",
      propertyType: "Luxury Condominium",
    },
    features: [
      "Burj Khalifa Location",
      "Iconic Views",
      "World-Class Amenities",
      "Premium Status",
      "Exceptional Rental Yield",
      "Global Recognition"
    ],
  },
  {
    id: 15,
    name: "Malibu Beach House",
    location: "California, USA",
    description: "Stunning beachfront property in exclusive Malibu",
    longDescription: "An exceptional beachfront property in Malibu, offering direct beach access, private deck, and stunning Pacific Ocean views. This property combines the ultimate California lifestyle with strong investment returns in one of the world's most desirable locations.",
    price: "$15,500,000",
    size: "8,400 sq ft",
    bedrooms: 5,
    bathrooms: 5,
    amenities: {
      beds: "5 King Bed",
      capacity: "10 Person",
      ac: "Air Conditioned",
      bathroom: "5 Spacious Bathroom",
    },
    images: ["/img/usa2.jpg", "/img/usa.jpg", "/img/usa1.jpg", "/img/usa3.jpg"],
    investmentDetails: {
      roi: "9-14%",
      expectedReturn: "12-18 years",
      location: "California, USA",
      propertyType: "Luxury Beach House",
    },
    features: [
      "Malibu Location",
      "Beachfront Access",
      "Ocean Views",
      "Private Deck",
      "Premium Rental Income",
      "Exclusive Lifestyle"
    ],
  },
  {
    id: 16,
    name: "Park Avenue Apartment",
    location: "New York, USA",
    description: "Classic pre-war apartment on prestigious Park Avenue",
    longDescription: "A beautifully restored pre-war apartment on Park Avenue, featuring classic architecture, high ceilings, and elegant finishes. This property offers investors a rare opportunity in one of New York's most prestigious addresses with strong historical appreciation.",
    price: "$4,500,000",
    size: "3,200 sq ft",
    bedrooms: 2,
    bathrooms: 2,
    amenities: {
      beds: "2 King Bed",
      capacity: "4 Person",
      ac: "Air Conditioned",
      bathroom: "2 Spacious Bathroom",
    },
    images: ["/img/usa1.jpg", "/img/usa.jpg", "/img/usa2.jpg", "/img/usa3.jpg"],
    investmentDetails: {
      roi: "8-12%",
      expectedReturn: "15-20 years",
      location: "New York, USA",
      propertyType: "Luxury Apartment",
    },
    features: [
      "Park Avenue Location",
      "Pre-War Architecture",
      "Classic Design",
      "Prestigious Address",
      "Strong Rental Market",
      "Historical Value"
    ],
  },
  {
    id: 17,
    name: "Emirates Hills Villa",
    location: "Dubai, UAE",
    description: "Luxury villa in exclusive Emirates Hills with golf course views",
    longDescription: "An exceptional villa in Emirates Hills, featuring golf course views, private pool, and expansive landscaped gardens. This property offers investors a premium opportunity in one of Dubai's most exclusive residential communities.",
    price: "$6,800,000",
    size: "6,500 sq ft",
    bedrooms: 5,
    bathrooms: 4,
    amenities: {
      beds: "5 King Bed",
      capacity: "10 Person",
      ac: "Air Conditioned",
      bathroom: "4 Spacious Bathroom",
    },
    images: ["/img/Dubai3.png", "/img/Dubai.jpg", "/img/Dubai1.jpg", "/img/Dubai2.jpg"],
    investmentDetails: {
      roi: "11-16%",
      expectedReturn: "10-15 years",
      location: "Dubai, UAE",
      propertyType: "Luxury Villa",
    },
    features: [
      "Emirates Hills Location",
      "Golf Course Views",
      "Private Pool",
      "Expansive Gardens",
      "Premium Community",
      "Exclusive Lifestyle"
    ],
  },
  {
    id: 18,
    name: "Beverly Hills Mansion",
    location: "California, USA",
    description: "Magnificent mansion in prestigious Beverly Hills",
    longDescription: "A stunning mansion in Beverly Hills, featuring Hollywood glamour, private grounds, and world-class amenities. This property represents the pinnacle of California luxury living with exceptional investment prestige and rental potential.",
    price: "$18,500,000",
    size: "12,000 sq ft",
    bedrooms: 6,
    bathrooms: 6,
    amenities: {
      beds: "6 King Bed",
      capacity: "12 Person",
      ac: "Air Conditioned",
      bathroom: "6 Spacious Bathroom",
    },
    images: ["/img/usa3.jpg", "/img/usa.jpg", "/img/usa1.jpg", "/img/usa2.jpg"],
    investmentDetails: {
      roi: "10-15%",
      expectedReturn: "12-18 years",
      location: "California, USA",
      propertyType: "Luxury Mansion",
    },
    features: [
      "Beverly Hills Location",
      "Hollywood Prestige",
      "Private Grounds",
      "World-Class Amenities",
      "Premium Rental Income",
      "Iconic Status"
    ],
  },
];

