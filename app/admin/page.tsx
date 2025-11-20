"use client";

import { motion } from "framer-motion";

/**
 * Admin Dashboard Page
 * Main overview page for admin panel
 */

// Sample data
const recentActivity = [
  { id: 1, type: "booking", title: "New booking received", date: "2024-01-15", status: "pending", details: "Room 201 - Sunset Pool Villa" },
  { id: 2, type: "checkin", title: "Guest checked in", date: "2024-01-14", status: "active", details: "Room 305 - Royal Phenomenal" },
  { id: 3, type: "offer", title: "New offer published", date: "2024-01-13", status: "published", details: "Golden Hour Escape" },
];

export default function AdminDashboard() {
  return <DashboardOverview recentActivity={recentActivity} />;
}

// Type definitions
interface Activity {
  id: number;
  type: string;
  title: string;
  date: string;
  status: string;
  details: string;
}

// Dashboard Overview Component
function DashboardOverview({ recentActivity }: { recentActivity: Activity[] }) {
  const stats = [
    { label: "Total Bookings", value: "1,234", icon: "📅", change: "+12% from last month" },
    { label: "Active Reservations", value: "89", icon: "🏨", change: "Currently checked in" },
    { label: "Revenue", value: "$45,678", icon: "💰", change: "This month" },
    { label: "Occupancy Rate", value: "78%", icon: "📊", change: "Average this month" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1
          className="text-3xl font-semibold text-[rgb(34,17,3)] mb-2"
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
            fontWeight: 400,
          }}
        >
          Dashboard Overview
        </h1>
        <p
          className="text-gray-600"
          style={{
            fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
          }}
        >
          Manage your hotel operations, bookings, and content.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{stat.icon}</span>
              <span
                className="text-xs text-gray-500"
                style={{
                  fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                }}
              >
                {stat.change}
              </span>
            </div>
            <h3
              className="text-2xl font-semibold text-[rgb(34,17,3)] mb-1"
              style={{
                fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                fontWeight: 400,
              }}
            >
              {stat.value}
            </h3>
            <p
              className="text-sm text-gray-600"
              style={{
                fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
              }}
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2
          className="text-xl font-semibold text-[rgb(34,17,3)] mb-4"
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
            fontWeight: 400,
          }}
        >
          Recent Activity
        </h2>
        <div className="space-y-3">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#8B4513]/10 flex items-center justify-center">
                  {activity.type === "booking" && "📅"}
                  {activity.type === "checkin" && "🏨"}
                  {activity.type === "offer" && "🎁"}
                </div>
                <div>
                  <p
                    className="font-medium text-[rgb(34,17,3)]"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    {activity.title}
                  </p>
                  <p
                    className="text-sm text-gray-500"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    {activity.details} • {activity.date}
                  </p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activity.status === "active" || activity.status === "published"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
                style={{
                  fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                }}
              >
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

