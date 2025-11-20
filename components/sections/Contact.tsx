"use client";

import { useState } from "react";
import SectionHeader from "../shared/SectionHeader";

/**
 * Contact section with form and contact information
 * Allows users to reach out with inquiries
 */
interface ContactProps {
  showHeader?: boolean;
}

export default function Contact({ showHeader = true }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {showHeader && (
          <SectionHeader
            title="Schedule Your Investment Consultation"
            subtitle="Get personalized recommendations and detailed financial projections tailored to your investment goals"
          />
        )}

        <div className={`grid md:grid-cols-2 gap-12 max-w-6xl mx-auto ${showHeader ? 'mt-12' : ''}`}>
          {/* Left: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent transition-all"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent transition-all"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent transition-all"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent transition-all resize-none"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                  placeholder="Tell us about your investment goals, budget range, preferred locations, or any specific questions..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#8B4513] text-white px-8 py-4 rounded-full hover:bg-[#6B3410] transition-colors text-base font-medium"
                style={{
                  fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                }}
              >
                Request Investment Consultation
              </button>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div>
              <h3
                className="text-2xl font-semibold text-[rgb(34,17,3)] mb-6"
                style={{
                  fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                  fontWeight: 400,
                }}
              >
                Contact Information
              </h3>
              <p
                className="text-gray-600 mb-6 text-sm"
                style={{
                  fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                }}
              >
                Our investment advisors are available to discuss your goals and answer questions. We respond within 24 hours.
              </p>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#8B4513]/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-[#8B4513]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-sm text-gray-600 mb-1"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:info@luxuryestate.com"
                      className="text-[rgb(34,17,3)] hover:text-[#8B4513] transition-colors"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      info@luxuryestate.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#8B4513]/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-[#8B4513]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-sm text-gray-600 mb-1"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      Phone
                    </p>
                    <a
                      href="tel:+12125550100"
                      className="text-[rgb(34,17,3)] hover:text-[#8B4513] transition-colors"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      +1 (212) 555-0100
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#8B4513]/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-[#8B4513]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-sm text-gray-600 mb-1"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      Address
                    </p>
                    <p
                      className="text-[rgb(34,17,3)]"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      350 Park Avenue<br />
                      Suite 1200<br />
                      New York, NY 10022
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3
                className="text-xl font-semibold text-[rgb(34,17,3)] mb-4"
                style={{
                  fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                  fontWeight: 400,
                }}
              >
                Investment Consultation Hours
              </h3>
              <div
                className="space-y-2 text-gray-700"
                style={{
                  fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                }}
              >
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                <p>Sunday: By appointment only</p>
                <p className="text-sm text-gray-600 mt-3">International investors: We accommodate all time zones. Schedule a call at your convenience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

