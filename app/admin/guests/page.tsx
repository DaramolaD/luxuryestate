"use client";

/**
 * Admin Guests Page
 * View and manage guest information
 */

// Sample data
const guests = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "+1 (555) 123-4567", bookings: 3, status: "active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "+1 (555) 234-5678", bookings: 2, status: "active" },
  { id: 3, name: "Robert Johnson", email: "robert@example.com", phone: "+1 (555) 345-6789", bookings: 5, status: "vip" },
];

interface Guest {
  id: number;
  name: string;
  email: string;
  phone: string;
  bookings: number;
  status: string;
}

export default function GuestsPage() {
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
          Guests Management
        </h1>
        <p
          className="text-gray-600"
          style={{
            fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
          }}
        >
          View and manage guest information.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Bookings</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {guests.map((guest) => (
                <tr key={guest.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[rgb(34,17,3)]">{guest.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{guest.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{guest.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{guest.bookings}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        guest.status === "vip"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {guest.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-[#8B4513] hover:text-[#6B3410] font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

