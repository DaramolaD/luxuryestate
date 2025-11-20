"use client";

import { useState } from "react";

/**
 * Admin Settings Page
 * Configure system and hotel settings
 */

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    hotelName: "LuxuryEstate",
    email: "admin@luxuryestate.com",
    phone: "+1 (555) 000-0000",
    notifications: true,
    emailAlerts: true,
    smsAlerts: false,
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
          Configure system and hotel settings.
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
          General Settings
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Hotel Name</label>
            <input
              type="text"
              name="hotelName"
              value={formData.hotelName}
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
                  name="emailAlerts"
                  checked={formData.emailAlerts}
                  onChange={handleChange}
                  className="w-5 h-5 text-[#8B4513] rounded focus:ring-[#8B4513]"
                />
                <span>Email alerts</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="smsAlerts"
                  checked={formData.smsAlerts}
                  onChange={handleChange}
                  className="w-5 h-5 text-[#8B4513] rounded focus:ring-[#8B4513]"
                />
                <span>SMS alerts</span>
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

