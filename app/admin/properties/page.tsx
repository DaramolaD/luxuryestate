"use client";

/**
 * Admin Properties Page
 * Manage property availability and pricing
 */

// Sample data
const properties = [
  { id: 1, name: "Dubai Downtown Apartment", location: "Dubai, UAE", status: "available", price: "$450,000", bookings: 12 },
  { id: 2, name: "Miami Beach Villa", location: "Miami, USA", status: "booked", price: "$850,000", bookings: 8 },
  { id: 3, name: "NYC Penthouse", location: "New York, USA", status: "available", price: "$1,200,000", bookings: 15 },
];

interface Property {
  id: number;
  name: string;
  location: string;
  status: string;
  price: string;
  bookings: number;
}

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1
          className="text-3xl font-semibold text-[rgb(34,17,3)] mb-2"
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
            fontWeight: 400,
          }}
        >
          Properties Management
        </h1>
        <p
          className="text-gray-600"
          style={{
            fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
          }}
        >
          Manage property availability and pricing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow"
          >
            <h3
              className="text-lg font-semibold text-[rgb(34,17,3)] mb-2"
              style={{
                fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                fontWeight: 400,
              }}
            >
              {property.name}
            </h3>
            <p
              className="text-sm text-gray-600 mb-4"
              style={{
                fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
              }}
            >
              {property.location}
            </p>
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-lg font-semibold text-[#8B4513]"
                style={{
                  fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                }}
              >
                {property.price}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  property.status === "available"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {property.status}
              </span>
            </div>
            <p
              className="text-sm text-gray-500 mb-4"
              style={{
                fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
              }}
            >
              {property.bookings} bookings
            </p>
            <button className="w-full bg-[#8B4513] text-white px-4 py-2 rounded-lg hover:bg-[#6B3410] transition-colors font-medium">
              Manage Property
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

