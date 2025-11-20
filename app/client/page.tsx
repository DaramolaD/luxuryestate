"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Logo from "@/components/shared/Logo";

/**
 * Client Dashboard Page
 * Main customer dashboard with sidebar navigation, bookmarks, payments, settings, etc.
 */

// Sidebar menu items
const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: "📊" },
  { id: "bookmarks", label: "Bookmarks", icon: "🔖" },
  { id: "properties", label: "My Properties", icon: "🏠" },
  { id: "bookings", label: "My Bookings", icon: "📅" },
  { id: "payments", label: "Payments", icon: "💳" },
  { id: "settings", label: "Settings", icon: "⚙️" },
];

// Sample data
const recentActivity = [
  { id: 1, type: "booking", title: "Tour Booking Confirmed", date: "2024-01-15", status: "confirmed" },
  { id: 2, type: "payment", title: "Payment Received", date: "2024-01-14", amount: "$5,000" },
  { id: 3, type: "property", title: "Property Inquiry Sent", date: "2024-01-13", status: "pending" },
];

const bookmarkedProperties = [
  { id: 1, name: "Luxury Downtown Apartment", location: "Dubai, UAE", price: "$450,000", image: "/img/Dubai.jpg" },
  { id: 2, name: "Modern Beach Villa", location: "Miami, USA", price: "$850,000", image: "/img/usa.jpg" },
  { id: 3, name: "City Center Penthouse", location: "New York, USA", price: "$1,200,000", image: "/img/usa2.jpg" },
];

const myBookings = [
  { id: 1, tour: "Dubai City Explorer", date: "2024-02-15", guests: 2, status: "confirmed", price: "$340" },
  { id: 2, tour: "Miami Beach Tour", date: "2024-02-20", guests: 4, status: "pending", price: "$680" },
];

const invoices = [
  { id: "INV-001", date: "2024-01-15", amount: "$5,000", status: "paid", description: "Property Investment - Dubai Apartment" },
  { id: "INV-002", date: "2024-01-14", amount: "$340", status: "paid", description: "Tour Booking - Dubai City Explorer" },
  { id: "INV-003", date: "2024-01-10", amount: "$850", status: "pending", description: "Property Investment - Miami Villa" },
];

export default function ClientDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive sidebar
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close sidebar on mobile when section changes
  useEffect(() => {
    if (isMobile && sidebarOpen) {
      // Use setTimeout to avoid cascading renders
      const timer = setTimeout(() => {
        setSidebarOpen(false);
      }, 0);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection]);

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardOverview recentActivity={recentActivity} />;
      case "bookmarks":
        return <BookmarksSection bookmarkedProperties={bookmarkedProperties} />;
      case "properties":
        return <MyPropertiesSection />;
      case "bookings":
        return <MyBookingsSection bookings={myBookings} />;
      case "payments":
        return <PaymentsSection invoices={invoices} />;
      case "settings":
        return <SettingsSection />;
      default:
        return <DashboardOverview recentActivity={recentActivity} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-sm z-50 px-4 py-3 flex items-center justify-between">
        <Logo href="/client" variant="small" />
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-[rgb(34,17,3)] hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? "✕" : "☰"}
        </button>
      </div>

      <div className="flex pt-16 lg:pt-0">
        {/* Sidebar */}
        <AnimatePresence>
          {(sidebarOpen || !isMobile) && (
            <>
              {/* Mobile Overlay */}
              {isMobile && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSidebarOpen(false)}
                  className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                />
              )}

              {/* Sidebar */}
              <motion.aside
                initial={isMobile ? { x: -300 } : undefined}
                animate={isMobile ? { x: 0 } : undefined}
                exit={isMobile ? { x: -300 } : undefined}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className={`fixed lg:static inset-y-0 left-0 z-50 bg-white shadow-lg lg:shadow-none lg:border-r border-gray-200 ${
                  sidebarOpen ? "w-64" : "w-fit"
                }`}
              >
                <div className="h-full flex flex-col">
                  {/* Sidebar Header */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      {sidebarOpen && (
                        <h2
                          className="text-xl font-semibold text-[rgb(34,17,3)]"
                          style={{
                            fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                            fontWeight: 400,
                          }}
                        >
                          Dashboard
                        </h2>
                      )}
                      {isMobile && (
                        <button
                          onClick={() => setSidebarOpen(false)}
                          className="p-1 text-gray-500 hover:text-gray-700 ml-auto"
                          aria-label="Close sidebar"
                        >
                          ✕
                        </button>
                      )}
                      {!isMobile && (
                        <button
                          onClick={() => setSidebarOpen(!sidebarOpen)}
                          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors ml-auto"
                          aria-label="Toggle sidebar"
                        >
                          {sidebarOpen ? "←" : "☰"}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* User Profile Card */}
                  {sidebarOpen && (
                    <div className="p-6 border-b border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#8B4513] flex items-center justify-center text-white text-lg font-semibold">
                          JD
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className="font-medium text-[rgb(34,17,3)] truncate"
                            style={{
                              fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                            }}
                          >
                            John Doe
                          </p>
                          <p
                            className="text-sm text-gray-500 truncate"
                            style={{
                              fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                            }}
                          >
                            john.doe@example.com
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {!sidebarOpen && !isMobile && (
                    <div className="p-4 border-b border-gray-200 flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#8B4513] flex items-center justify-center text-white text-sm font-semibold">
                        JD
                      </div>
                    </div>
                  )}

                  {/* Navigation Menu */}
                  <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          activeSection === item.id
                            ? "bg-[#8B4513] text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        style={{
                          fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        }}
                        title={!sidebarOpen ? item.label : undefined}
                      >
                        <span className="text-xl shrink-0">{item.icon}</span>
                        {sidebarOpen && <span>{item.label}</span>}
                      </button>
                    ))}
                  </nav>

                  {/* Logout Button */}
                  <div className="p-4 border-t border-gray-200">
                    <button
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors justify-center"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                      title={!sidebarOpen ? "Logout" : undefined}
                    >
                      <span>🚪</span>
                      {sidebarOpen && <span>Logout</span>}
                    </button>
                  </div>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 transition-all duration-300">
          {/* Content Area */}
          <div className="container mx-auto p-4 md:p-6 lg:p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

// Type definitions
interface Activity {
  id: number;
  type: string;
  title: string;
  date: string;
  status?: string;
  amount?: string;
}

interface BookmarkedProperty {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
}

interface Booking {
  id: number;
  tour: string;
  date: string;
  guests: number;
  status: string;
  price: string;
}

interface Invoice {
  id: string;
  date: string;
  amount: string;
  status: string;
  description: string;
}

// Dashboard Overview Component
function DashboardOverview({ recentActivity }: { recentActivity: Activity[] }) {
  const stats = [
    { label: "Total Investments", value: "$2,500,000", icon: "💰", change: "+12%" },
    { label: "Active Bookings", value: "2", icon: "📅", change: "2 pending" },
    { label: "Saved Properties", value: "3", icon: "🔖", change: "View all" },
    { label: "Total Spent", value: "$5,340", icon: "💳", change: "This month" },
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
          Welcome back! Here&apos;s what&apos;s happening with your investments.
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
                  {activity.type === "payment" && "💳"}
                  {activity.type === "property" && "🏠"}
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
                    {activity.date}
                  </p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activity.status === "confirmed" || activity.status === "paid"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
                style={{
                  fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                }}
              >
                {activity.status === "confirmed" && "Confirmed"}
                {activity.status === "paid" && "Paid"}
                {activity.status === "pending" && "Pending"}
                {activity.amount && activity.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Bookmarks Section Component
function BookmarksSection({ bookmarkedProperties }: { bookmarkedProperties: BookmarkedProperty[] }) {
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
          My Bookmarks
        </h1>
        <p
          className="text-gray-600"
          style={{
            fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
          }}
        >
          Properties and tours you&apos;ve saved for later.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookmarkedProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image
                src={property.image}
                alt={property.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3
                className="text-lg font-semibold text-[rgb(34,17,3)] mb-1"
                style={{
                  fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                  fontWeight: 400,
                }}
              >
                {property.name}
              </h3>
              <p
                className="text-sm text-gray-600 mb-2"
                style={{
                  fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                }}
              >
                {property.location}
              </p>
              <div className="flex items-center justify-between">
                <span
                  className="text-lg font-semibold text-[#8B4513]"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                >
                  {property.price}
                </span>
                <button className="text-red-500 hover:text-red-700" title="Remove bookmark">
                  🔖
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// My Properties Section Component
function MyPropertiesSection() {
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
          My Properties
        </h1>
        <p
          className="text-gray-600"
          style={{
            fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
          }}
        >
          Your investment portfolio and property details.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 text-center py-12">
        <p
          className="text-gray-500 mb-4"
          style={{
            fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
          }}
        >
          You haven&apos;t invested in any properties yet.
        </p>
        <button className="bg-[#8B4513] text-white px-6 py-3 rounded-full hover:bg-[#6B3410] transition-colors">
          Browse Properties
        </button>
      </div>
    </div>
  );
}

// My Bookings Section Component
function MyBookingsSection({ bookings }: { bookings: Booking[] }) {
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
          My Bookings
        </h1>
        <p
          className="text-gray-600"
          style={{
            fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
          }}
        >
          Manage your tour bookings and reservations.
        </p>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3
                  className="text-lg font-semibold text-[rgb(34,17,3)] mb-1"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                    fontWeight: 400,
                  }}
                >
                  {booking.tour}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span>📅 {booking.date}</span>
                  <span>👥 {booking.guests} Guests</span>
                  <span>💰 {booking.price}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    booking.status === "confirmed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                >
                  {booking.status === "confirmed" ? "Confirmed" : "Pending"}
                </span>
                <button className="text-[#8B4513] hover:text-[#6B3410] font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Payments Section Component
function PaymentsSection({ invoices }: { invoices: Invoice[] }) {
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
          Payments & Invoices
        </h1>
        <p
          className="text-gray-600"
          style={{
            fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
          }}
        >
          View and manage your payment history and invoices.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Invoice ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[rgb(34,17,3)]">{invoice.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{invoice.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{invoice.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[rgb(34,17,3)]">{invoice.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        invoice.status === "paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {invoice.status === "paid" ? "Paid" : "Pending"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-[#8B4513] hover:text-[#6B3410] font-medium">
                      Download
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

// Settings Section Component
function SettingsSection() {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    notifications: true,
    emailUpdates: true,
    smsUpdates: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Settings saved successfully!");
  };

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
          Settings
        </h1>
        <p
          className="text-gray-600"
          style={{
            fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
          }}
        >
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2
          className="text-xl font-semibold text-[rgb(34,17,3)] mb-4"
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
            fontWeight: 400,
          }}
        >
          Profile Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
            />
          </div>

          <div className="pt-4 border-t border-gray-200">
            <h3
              className="text-lg font-semibold text-[rgb(34,17,3)] mb-4"
              style={{
                fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                fontWeight: 400,
              }}
            >
              Notification Preferences
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="notifications"
                  checked={formData.notifications}
                  onChange={handleChange}
                  className="w-5 h-5 text-[#8B4513] rounded focus:ring-[#8B4513]"
                />
                <span>Enable notifications</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="emailUpdates"
                  checked={formData.emailUpdates}
                  onChange={handleChange}
                  className="w-5 h-5 text-[#8B4513] rounded focus:ring-[#8B4513]"
                />
                <span>Email updates</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="smsUpdates"
                  checked={formData.smsUpdates}
                  onChange={handleChange}
                  className="w-5 h-5 text-[#8B4513] rounded focus:ring-[#8B4513]"
                />
                <span>SMS updates</span>
              </label>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="bg-[#8B4513] text-white px-6 py-3 rounded-full hover:bg-[#6B3410] transition-colors font-medium"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

