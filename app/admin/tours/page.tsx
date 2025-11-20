"use client";

/**
 * Admin Tours Page
 * Create and manage tour packages and experiences
 */

export default function ToursPage() {
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
          Tours Management
        </h1>
        <p
          className="text-gray-600"
          style={{
            fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
          }}
        >
          Create and manage tour packages and experiences.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 text-center py-12">
        <p
          className="text-gray-500 mb-4"
          style={{
            fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
          }}
        >
          Tour management features coming soon.
        </p>
        <button className="bg-[#8B4513] text-white px-6 py-3 rounded-full hover:bg-[#6B3410] transition-colors">
          Add New Tour
        </button>
      </div>
    </div>
  );
}

