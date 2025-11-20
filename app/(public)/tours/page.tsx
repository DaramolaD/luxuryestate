"use client";

import { useState } from "react";
import Image from "next/image";
import CTA from "@/components/sections/CTA";
import TourBookingModal from "@/components/shared/TourBookingModal";

/**
 * Tours page - Showcasing available tours and experiences
 * Each tour is displayed as a detailed section with alternating left/right layouts
 */

interface Tour {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  details: string;
  features: string[];
  duration: string;
  price: string;
}

const tours: Tour[] = [
  {
    id: 1,
    name: "Prime Location Discovery Tour",
    description: "See why these neighborhoods command premium prices",
    imageSrc: "/img/usa1.jpg",
    details: "Experience firsthand why these locations are investment goldmines. Tour the neighborhoods, see the infrastructure development, understand the demographic trends, and witness the lifestyle that drives property values. This comprehensive tour helps you make informed investment decisions by showing you exactly what you're investing in.",
    features: [
      "Expert Local Guides",
      "Private Transportation",
      "Iconic Landmarks Visit",
      "Cultural Insights",
      "Photo Opportunities",
      "Flexible Scheduling"
    ],
    duration: "4-6 Hours",
    price: "From $150"
  },
  {
    id: 2,
    name: "Dubai Market & Lifestyle Tour",
    description: "Understand Dubai's investment landscape",
    imageSrc: "/img/Dubai1.jpg",
    details: "Explore Dubai's booming real estate market through the lens of an investor. Visit key development areas, understand the tax advantages, see the infrastructure projects driving growth, and experience the luxury lifestyle that attracts global investors. Learn why Dubai offers some of the world's best real estate investment opportunities.",
    features: [
      "Dune Bashing Adventure",
      "Camel Riding Experience",
      "Traditional Entertainment",
      "Sunset Photography",
      "Bedouin Camp Visit",
      "BBQ Dinner Included"
    ],
    duration: "6-8 Hours",
    price: "From $200"
  },
  {
    id: 3,
    name: "Coastal Investment Property Tour",
    description: "Discover premium beachfront investment opportunities",
    imageSrc: "/img/usa3.jpg",
    details: "Tour exclusive coastal properties and understand why beachfront real estate consistently outperforms the market. See the amenities, understand the rental demand patterns, and experience the lifestyle that makes these properties highly sought after. Learn about the unique investment characteristics of coastal real estate.",
    features: [
      "Private Beach Access",
      "Water Sports Activities",
      "Beachside Dining",
      "Relaxation Areas",
      "Snorkeling Gear",
      "Professional Safety"
    ],
    duration: "Full Day",
    price: "From $180"
  },
  {
    id: 4,
    name: "Market Analysis & Investment Strategy Session",
    description: "Deep dive into investment fundamentals",
    imageSrc: "/img/Dubai2.jpg",
    details: "Join our investment analysts for an in-depth session covering market trends, ROI projections, rental yield analysis, and long-term appreciation potential. Understand the economic drivers, demographic shifts, and infrastructure developments that make these markets prime investment destinations. This session helps you make data-driven investment decisions.",
    features: [
      "Historical Site Visits",
      "Museum Tours",
      "Local Market Experience",
      "Cultural Workshops",
      "Traditional Cuisine",
      "Expert Commentary"
    ],
    duration: "5-7 Hours",
    price: "From $170"
  },
];

export default function ToursPage() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookTour = (tour: Tour) => {
    setSelectedTour(tour);
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
    setSelectedTour(null);
  };

  return (
    <div className="min-h-screen">
      <section className="py-40 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="mb-4"
            style={{
              fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
              fontWeight: 400,
              fontSize: 'clamp(36px, 5vw + 1rem, 64px)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
            }}
          >
            Experience Your Investment Destinations Firsthand
          </h1>
          <p
            className="text-xl text-white/90 max-w-6xl mx-auto"
            style={{
              fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
              fontSize: 'clamp(16px, 1.5vw + 0.5rem, 20px)',
            }}
          >
            Before you invest, experience the lifestyle and culture of your potential property locations. Our exclusive tours give you insider access to the neighborhoods, amenities, and lifestyle that make these destinations prime investment opportunities.
          </p>
        </div>
      </section>

      {/* Individual Tour Sections - Alternating Layout */}
      {tours.map((tour, index) => {
        const isOdd = index % 2 === 1;

        return (
          <section
            key={tour.id}
            id={`tour-${tour.id}`}
            className={`py-20 px-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container mx-auto px-4">
              <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center ${isOdd ? 'md:grid-flow-dense' : ''
                }`}>
                {/* Image - Left side for even, Right side for odd */}
                <div className={`relative h-[500px] rounded-lg overflow-hidden ${isOdd ? 'md:col-start-2' : ''
                  }`}>
                  <Image
                    src={tour.imageSrc}
                    alt={tour.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content - Right side for even, Left side for odd */}
                <div className={`space-y-6 ${isOdd ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  {/* Tour Name */}
                  <h2
                    className="text-4xl font-semibold text-[rgb(34,17,3)]"
                    style={{
                      fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                      fontWeight: 400,
                      lineHeight: '1.2',
                    }}
                  >
                    {tour.name}
                  </h2>

                  {/* Description */}
                  <p
                    className="text-lg text-gray-600"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    {tour.description}
                  </p>

                  {/* Details */}
                  <p
                    className="text-gray-700 leading-relaxed"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    {tour.details}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    {tour.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <span className="text-[#8B4513] text-lg">✓</span>
                        <span
                          className="text-gray-700 text-sm"
                          style={{
                            fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Duration and Price */}
                  <div className="flex items-center gap-40 pt-4 border-t border-gray-200">
                    <div>
                      <span
                        className="text-sm text-gray-600"
                        style={{
                          fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        }}
                      >
                        Duration
                      </span>
                      <p
                        className="text-lg font-semibold text-[rgb(34,17,3)]"
                        style={{
                          fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        }}
                      >
                        {tour.duration}
                      </p>
                    </div>
                    <div>
                      <span
                        className="text-sm text-gray-600"
                        style={{
                          fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        }}
                      >
                        Starting From
                      </span>
                      <p
                        className="text-lg font-semibold text-[#8B4513]"
                        style={{
                          fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                          fontWeight: 400,
                        }}
                      >
                        {tour.price}
                      </p>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <button
                    onClick={() => handleBookTour(tour)}
                    className="mt-6 bg-[#8B4513] text-white px-8 py-3 rounded-full hover:bg-[#6B3410] transition-colors font-medium"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    Schedule Property Tour
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
        })}
      <CTA />

      {/* Tour Booking Modal */}
      <TourBookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseModal}
        tour={selectedTour}
      />
    </div>
  );
}

