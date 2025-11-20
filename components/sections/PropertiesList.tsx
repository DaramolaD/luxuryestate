"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { allProperties, Property } from "@/lib/propertiesData";

/**
 * Properties list section with pagination and filtering
 * Used on the properties page with pagination controls
 */

interface Filters {
  location: string;
  priceRange: string;
  propertyType: string;
  bedrooms: string;
}

interface PropertiesListProps {
  filters: Filters;
}

const ITEMS_PER_PAGE = 6;

export default function PropertiesList({ filters }: PropertiesListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const prevFiltersRef = useRef<Filters>(filters);

  // Reset to page 1 when filters change
  // This is a valid use case for resetting state when props change
  useEffect(() => {
    const filtersChanged = 
      prevFiltersRef.current.location !== filters.location ||
      prevFiltersRef.current.priceRange !== filters.priceRange ||
      prevFiltersRef.current.propertyType !== filters.propertyType ||
      prevFiltersRef.current.bedrooms !== filters.bedrooms;
    
    if (filtersChanged) {
      prevFiltersRef.current = filters;
      // Reset page to 1 when filters change - this is intentional
      setCurrentPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.location, filters.priceRange, filters.propertyType, filters.bedrooms]);

  // Filter properties based on filter criteria
  const filteredProperties = useMemo(() => {
    return allProperties.filter((property: Property) => {
      // Location filter
      if (filters.location) {
        const locationLower = property.location.toLowerCase();
        if (filters.location === "new-york" && !locationLower.includes("new york")) {
          return false;
        }
        if (filters.location === "dubai" && !locationLower.includes("dubai")) {
          return false;
        }
        if (filters.location === "california" && !locationLower.includes("california")) {
          return false;
        }
      }

      // Price range filter
      if (filters.priceRange) {
        const priceNum = parseFloat(property.price.replace(/[^0-9.]/g, "")) * 1000000; // Convert to number
        
        if (filters.priceRange.includes("+")) {
          // Handle "4500000+" case
          const minPrice = parseFloat(filters.priceRange.replace(/[^0-9.]/g, "")) * 1000000;
          if (priceNum < minPrice) {
            return false;
          }
        } else {
          // Handle range like "0-2500000" or "2500000-3500000"
          const [min, max] = filters.priceRange.split("-").map((val) => parseFloat(val) * 1000000);
          if (priceNum < min || priceNum > max) {
            return false;
          }
        }
      }

      // Property type filter
      if (filters.propertyType) {
        const propertyTypeLower = property.investmentDetails.propertyType.toLowerCase();
        if (filters.propertyType === "apartment" && !propertyTypeLower.includes("apartment")) {
          return false;
        }
        if (filters.propertyType === "condominium" && !propertyTypeLower.includes("condominium")) {
          return false;
        }
        if (filters.propertyType === "villa" && !propertyTypeLower.includes("villa")) {
          return false;
        }
      }

      // Bedrooms filter
      if (filters.bedrooms) {
        const bedroomsNum = parseInt(filters.bedrooms);
        if (bedroomsNum === 3) {
          // 3+ bedrooms
          if (property.bedrooms < 3) {
            return false;
          }
        } else {
          // Exact match
          if (property.bedrooms !== bedroomsNum) {
            return false;
          }
        }
      }

      return true;
    });
  }, [filters]);

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProperties = filteredProperties.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of properties section
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate which page numbers to show (max 3 at a time)
  const getVisiblePages = () => {
    const maxVisible = 3;
    const pages: number[] = [];
    
    if (totalPages <= maxVisible) {
      // Show all pages if total is 3 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show 3 pages around current page
      if (currentPage <= 2) {
        // Near the beginning
        pages.push(1, 2, 3);
      } else if (currentPage >= totalPages - 1) {
        // Near the end
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        // In the middle
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <section id="room-types" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* <SectionHeader
          title="Premium Investment Properties"
          subtitle="Discover exceptional real estate opportunities in prime locations worldwide. Each property combines luxury design, strategic investment potential, and strong returns in the world's most promising markets."
        /> */}

        {/* Properties Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {currentProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Property Image */}
              <div className="relative h-[300px] w-full overflow-hidden">
                 <Image
                   src={property.images[0]}
                   alt={property.name}
                   fill
                   className="object-cover transition-transform duration-300 group-hover:scale-105"
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   priority={property.id === 1}
                 />
                {/* Price Badge */}
                <div className="absolute top-4 left-4 bg-[#8B4513] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  {property.price}
                </div>
                {/* Location Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-md font-medium">
                  {property.location}
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6 space-y-4">
                {/* Property Name */}
                <h3
                  className="text-2xl text-[rgb(34,17,3)]"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                    fontWeight: 400,
                    lineHeight: '1.2',
                  }}
                >
                  {property.name}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    fontSize: 'clamp(14px, 1vw + 0.5rem, 16px)',
                  }}
                >
                  {property.description}
                </p>

                {/* Amenities Grid */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#8B4513] text-base">🛏️</span>
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      {property.amenities.beds}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#8B4513] text-base">👤</span>
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      {property.amenities.capacity}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#8B4513] text-base">❄️</span>
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      {property.amenities.ac}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#8B4513] text-base">🛁</span>
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      {property.amenities.bathroom}
                    </span>
                  </div>
                </div>

                {/* View Property Button */}
                <Link
                  href={`/properties/${property.id}`}
                  className="inline-flex items-center justify-center w-full border-2 border-[#8B4513] text-[#8B4513] px-6 py-3 rounded-full hover:bg-[#8B4513] hover:text-white transition-all duration-300 text-sm font-medium group"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                >
                  View Property
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-[#8B4513] hover:text-white hover:border-[#8B4513] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-700"
              style={{
                fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
              }}
            >
              Previous
            </button>

            {/* Page Numbers - Show max 3 at a time */}
            <div className="flex items-center gap-2">
              {/* Show first page if not in visible range */}
              {currentPage > 3 && totalPages > 3 && (
                <>
                  <button
                    onClick={() => handlePageChange(1)}
                    className="w-10 h-10 rounded-lg border border-gray-300 text-gray-700 hover:bg-[#8B4513] hover:text-white hover:border-[#8B4513] transition-colors"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    1
                  </button>
                  {currentPage > 4 && (
                    <span className="text-gray-500 px-2">...</span>
                  )}
                </>
              )}

              {/* Visible page numbers (max 3) */}
              {visiblePages.map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-lg transition-colors ${
                    currentPage === page
                      ? "bg-[#8B4513] text-white"
                      : "border border-gray-300 text-gray-700 hover:bg-[#8B4513] hover:text-white hover:border-[#8B4513]"
                  }`}
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                >
                  {page}
                </button>
              ))}

              {/* Show last page if not in visible range */}
              {currentPage < totalPages - 2 && totalPages > 3 && (
                <>
                  {currentPage < totalPages - 3 && (
                    <span className="text-gray-500 px-2">...</span>
                  )}
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    className="w-10 h-10 rounded-lg border border-gray-300 text-gray-700 hover:bg-[#8B4513] hover:text-white hover:border-[#8B4513] transition-colors"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    {totalPages}
                  </button>
                </>
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-[#8B4513] hover:text-white hover:border-[#8B4513] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-700"
              style={{
                fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
              }}
            >
              Next
            </button>
          </div>

          {/* Page Info */}
          <p
            className="text-sm text-gray-600"
            style={{
              fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
            }}
          >
            Showing {filteredProperties.length > 0 ? startIndex + 1 : 0} - {Math.min(endIndex, filteredProperties.length)} of {filteredProperties.length} properties
          </p>
        </div>
      </div>
    </section>
  );
}

