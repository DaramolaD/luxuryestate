"use client";

/**
 * Admin Bookings Page
 * View, manage, and process reservations
 */

// Sample data
const bookings = [
  { id: 1, guest: "John Doe", property: "Dubai Apartment", checkIn: "2024-02-15", checkOut: "2024-02-20", status: "confirmed", amount: "$2,500" },
  { id: 2, guest: "Jane Smith", property: "Miami Villa", checkIn: "2024-02-18", checkOut: "2024-02-25", status: "pending", amount: "$3,500" },
  { id: 3, guest: "Robert Johnson", property: "NYC Penthouse", checkIn: "2024-02-20", checkOut: "2024-02-27", status: "confirmed", amount: "$4,200" },
];

interface Booking {
  id: number;
  guest: string;
  property: string;
  checkIn: string;
  checkOut: string;
  status: string;
  amount: string;
}

export default function BookingsPage() {
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
          Bookings Management
        </h1>
        <p
          className="text-gray-600"
          style={{
            fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
          }}
        >
          View, manage, and process reservations.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Guest</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Property</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Check-in</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Check-out</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[rgb(34,17,3)]">{booking.guest}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.property}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.checkIn}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.checkOut}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[rgb(34,17,3)]">{booking.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        booking.status === "confirmed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {booking.status}
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

