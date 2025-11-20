"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/shared/Logo";

/**
 * Admin Layout Component
 * Provides sidebar navigation for all admin pages
 * Sidebar is shared across all admin routes
 */

// Sidebar menu items for admin
const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: "📊", href: "/admin" },
  { id: "bookings", label: "Bookings", icon: "📅", href: "/admin/bookings" },
  { id: "properties", label: "Properties", icon: "🏠", href: "/admin/properties" },
  { id: "tours", label: "Tours", icon: "🎫", href: "/admin/tours" },
  { id: "guests", label: "Guests", icon: "👥", href: "/admin/guests" },
  { id: "content", label: "Content", icon: "📝", href: "/admin/content" },
  { id: "reports", label: "Reports", icon: "📈", href: "/admin/reports" },
  { id: "settings", label: "Settings", icon: "⚙️", href: "/admin/settings" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

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

  // Close sidebar on mobile when route changes
  useEffect(() => {
    if (isMobile && sidebarOpen) {
      // Use setTimeout to avoid cascading renders
      const timer = setTimeout(() => {
        setSidebarOpen(false);
      }, 0);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Determine active section based on pathname
  const getActiveSection = () => {
    if (pathname === "/admin") return "dashboard";
    return pathname.split("/").pop() || "dashboard";
  };

  const activeSection = getActiveSection();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-sm z-50 px-4 py-3 flex items-center justify-between">
        <Logo href="/admin" variant="small" />
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
                          Admin Panel
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
                          AD
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className="font-medium text-[rgb(34,17,3)] truncate"
                            style={{
                              fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                            }}
                          >
                            Admin User
                          </p>
                          <p
                            className="text-sm text-gray-500 truncate"
                            style={{
                              fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                            }}
                          >
                            admin@luxuryestate.com
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {!sidebarOpen && !isMobile && (
                    <div className="p-4 border-b border-gray-200 flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#8B4513] flex items-center justify-center text-white text-sm font-semibold">
                        AD
                      </div>
                    </div>
                  )}

                  {/* Navigation Menu */}
                  <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                    {menuItems.map((item) => {
                      const isActive = activeSection === item.id || (item.id === "dashboard" && pathname === "/admin");
                      return (
                        <Link
                          key={item.id}
                          href={item.href}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                            isActive
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
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Footer Links */}
                  <div className="p-4 border-t border-gray-200 space-y-2">
                    <Link
                      href="/"
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                      title={!sidebarOpen ? "Back to Home" : undefined}
                    >
                      <span>🏠</span>
                      {sidebarOpen && <span>Back to Home</span>}
                    </Link>
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
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

