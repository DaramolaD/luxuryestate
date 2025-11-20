"use client";

import { useState } from "react";
import PropertiesList from "@/components/sections/PropertiesList";

/**
 * Properties page - Public page showcasing available properties
 * Demonstrates modular component reuse with filtering functionality
 */
export default function PropertiesPage() {
  const [filters, setFilters] = useState({
    location: "",
    priceRange: "",
    propertyType: "",
    bedrooms: "",
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handleReset = () => {
    setFilters({
      location: "",
      priceRange: "",
      propertyType: "",
      bedrooms: "",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
            Curated Investment Properties for Discerning Investors
          </h1>
          <p
            className="text-xl text-white/90 max-w-6xl mx-auto"
            style={{
              fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
              fontSize: 'clamp(16px, 1.5vw + 0.5rem, 20px)',
            }}
          >
            Each property in our portfolio has been meticulously vetted for exceptional ROI potential, prime location, and luxury lifestyle appeal. Limited availability in Dubai, New York, and California secure your position in the world&apos;s most promising real estate markets.
          </p>
        </div>
      </section>

      {/* Filter Section - Overlapping Hero and Properties */}
      <section className="relative -mt-16 mb-8 z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                {/* Location Filter */}
                <div className="relative">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    Location
                  </label>
                  <div className="relative">
                    <select
                      value={filters.location}
                      onChange={(e) => handleFilterChange("location", e.target.value)}
                      className="w-full px-4 py-3 pr-10 rounded-lg bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-[#8B4513] transition-all appearance-none cursor-pointer hover:border-gray-400 text-base"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        fontSize: '15px',
                      }}
                    >
                      <option value="" className="py-2">All Locations</option>
                      <option value="new-york" className="py-2">New York, USA</option>
                      <option value="dubai" className="py-2">Dubai, UAE</option>
                      <option value="california" className="py-2">California, USA</option>
                    </select>
                    {/* Custom Dropdown Icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="relative">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    Price Range
                  </label>
                  <div className="relative">
                    <select
                      value={filters.priceRange}
                      onChange={(e) => handleFilterChange("priceRange", e.target.value)}
                      className="w-full px-4 py-3 pr-10 rounded-lg bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-[#8B4513] transition-all appearance-none cursor-pointer hover:border-gray-400 text-base"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        fontSize: '15px',
                      }}
                    >
                      <option value="" className="py-2">All Prices</option>
                      <option value="0-2500000" className="py-2">Under $2.5M</option>
                      <option value="2500000-3500000" className="py-2">$2.5M - $3.5M</option>
                      <option value="3500000-4500000" className="py-2">$3.5M - $4.5M</option>
                      <option value="4500000+" className="py-2">$4.5M+</option>
                    </select>
                    {/* Custom Dropdown Icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Property Type Filter */}
                <div className="relative">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    Property Type
                  </label>
                  <div className="relative">
                    <select
                      value={filters.propertyType}
                      onChange={(e) => handleFilterChange("propertyType", e.target.value)}
                      className="w-full px-4 py-3 pr-10 rounded-lg bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-[#8B4513] transition-all appearance-none cursor-pointer hover:border-gray-400 text-base"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        fontSize: '15px',
                      }}
                    >
                      <option value="" className="py-2">All Types</option>
                      <option value="apartment" className="py-2">Luxury Apartment</option>
                      <option value="condominium" className="py-2">Luxury Condominium</option>
                      <option value="villa" className="py-2">Luxury Villa</option>
                    </select>
                    {/* Custom Dropdown Icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bedrooms Filter */}
                <div className="relative">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    Bedrooms
                  </label>
                  <div className="relative">
                    <select
                      value={filters.bedrooms}
                      onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
                      className="w-full px-4 py-3 pr-10 rounded-lg bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-[#8B4513] transition-all appearance-none cursor-pointer hover:border-gray-400 text-base"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        fontSize: '15px',
                      }}
                    >
                      <option value="" className="py-2">All</option>
                      <option value="1" className="py-2">1 Bedroom</option>
                      <option value="2" className="py-2">2 Bedrooms</option>
                      <option value="3" className="py-2">3+ Bedrooms</option>
                    </select>
                    {/* Custom Dropdown Icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reset Button */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleReset}
                  className="px-6 py-2 text-[#8B4513] hover:text-[#6B3410] border border-[#8B4513] rounded-lg hover:bg-[#8B4513]/5 transition-colors"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section with Pagination */}
      <PropertiesList filters={filters} />
    </div>
  );
}

