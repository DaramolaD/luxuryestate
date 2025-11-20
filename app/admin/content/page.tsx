"use client";

/**
 * Admin Content Page
 * Update website content and media
 */

export default function ContentPage() {
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
          Content Management
        </h1>
        <p
          className="text-gray-600"
          style={{
            fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
          }}
        >
          Update website content and media.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-[rgb(34,17,3)] mb-2">Manage Pages</h3>
          <p className="text-sm text-gray-600 mb-4">Edit homepage, about, and other pages.</p>
          <button className="bg-[#8B4513] text-white px-4 py-2 rounded-lg hover:bg-[#6B3410] transition-colors">
            Edit Pages
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-[rgb(34,17,3)] mb-2">Media Library</h3>
          <p className="text-sm text-gray-600 mb-4">Upload and manage images and videos.</p>
          <button className="bg-[#8B4513] text-white px-4 py-2 rounded-lg hover:bg-[#6B3410] transition-colors">
            Manage Media
          </button>
        </div>
      </div>
    </div>
  );
}

