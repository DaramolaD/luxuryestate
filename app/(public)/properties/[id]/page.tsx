"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import CTA from "@/components/sections/CTA";
import InquiryModal from "@/components/shared/InquiryModal";
import { PropertySchema } from "@/components/shared/StructuredData";
import { allProperties } from "@/lib/propertiesData";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function PropertyDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const propertyId = parseInt(id);
  const property = allProperties.find((p) => p.id === propertyId);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <PropertySchema property={property} />
      
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={property.images[0]}
            alt={property.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-12 text-white">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                style={{
                  fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                  fontWeight: 400,
                  lineHeight: '1.1',
                }}
              >
                {property.name}
              </h1>
              <p
                className="text-xl md:text-2xl text-white/90"
                style={{
                  fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                }}
              >
                {property.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <h2
                  className="text-3xl font-semibold text-[rgb(34,17,3)] mb-4"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                    fontWeight: 400,
                  }}
                >
                  Investment Opportunity Overview
                </h2>
                <p
                  className="text-gray-600 mb-4 text-sm"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                >
                  This property has been carefully selected for its exceptional investment potential, prime location, and strong fundamentals. Below you'll find comprehensive details to help you make an informed investment decision.
                </p>
                <p
                  className="text-gray-700 leading-relaxed text-lg"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                >
                  {property.longDescription}
                </p>
              </div>

              {/* Image Gallery */}
              <div>
                <h2
                  className="text-3xl font-semibold text-[rgb(34,17,3)] mb-6"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                    fontWeight: 400,
                  }}
                >
                  Property Showcase
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {property.images.map((image, index) => (
                    <div key={index} className="relative h-[300px] rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${property.name} - Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2
                  className="text-3xl font-semibold text-[rgb(34,17,3)] mb-6"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                    fontWeight: 400,
                  }}
                >
                  Investment Advantages & Property Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {property.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                    >
                      <span className="text-[#8B4513] text-xl">✓</span>
                      <span
                        className="text-gray-700"
                        style={{
                          fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-[#8B4513]">
                <div className="mb-6">
                  <p
                    className="text-sm text-gray-600 mb-2"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    Investment Price
                  </p>
                  <p
                    className="text-4xl font-bold text-[rgb(34,17,3)]"
                    style={{
                      fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                      fontWeight: 400,
                    }}
                  >
                    {property.price}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span
                      className="text-gray-600"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      Size
                    </span>
                    <span
                      className="font-semibold text-[rgb(34,17,3)]"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      {property.size}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span
                      className="text-gray-600"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      Bedrooms
                    </span>
                    <span
                      className="font-semibold text-[rgb(34,17,3)]"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      {property.bedrooms}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span
                      className="text-gray-600"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      Bathrooms
                    </span>
                    <span
                      className="font-semibold text-[rgb(34,17,3)]"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      {property.bathrooms}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsInquiryModalOpen(true)}
                  className="w-full bg-[#8B4513] text-white px-6 py-4 rounded-full hover:bg-[#6B3410] transition-colors text-center font-medium"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                >
                  Schedule Investment Consultation
                </button>
              </div>

              {/* Investment Details */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3
                  className="text-xl font-semibold text-[rgb(34,17,3)] mb-4"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                    fontWeight: 400,
                  }}
                >
                  Financial Projections & Investment Metrics
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span
                      className="text-gray-600"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      Expected ROI
                    </span>
                    <span
                      className="font-semibold text-[rgb(34,17,3)]"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      {property.investmentDetails.roi}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span
                      className="text-gray-600"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      Return Period
                    </span>
                    <span
                      className="font-semibold text-[rgb(34,17,3)]"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      {property.investmentDetails.expectedReturn}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span
                      className="text-gray-600"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      Property Type
                    </span>
                    <span
                      className="font-semibold text-[rgb(34,17,3)]"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      {property.investmentDetails.propertyType}
                    </span>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3
                  className="text-xl font-semibold text-[rgb(34,17,3)] mb-4"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                    fontWeight: 400,
                  }}
                >
                  Amenities
                </h3>
                <ul className="space-y-2">
                  <li
                    className="flex items-center gap-2 text-gray-700"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    <span className="text-[#8B4513]">•</span>
                    {property.amenities.beds}
                  </li>
                  <li
                    className="flex items-center gap-2 text-gray-700"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    <span className="text-[#8B4513]">•</span>
                    {property.amenities.capacity}
                  </li>
                  <li
                    className="flex items-center gap-2 text-gray-700"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    <span className="text-[#8B4513]">•</span>
                    {property.amenities.ac}
                  </li>
                  <li
                    className="flex items-center gap-2 text-gray-700"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    <span className="text-[#8B4513]">•</span>
                    {property.amenities.bathroom}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        propertyName={property.name}
        propertyId={property.id}
      />
    </div>
  );
}

