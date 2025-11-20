"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Inquiry Modal Component
 * Opens when user clicks "Inquire Now" button
 * Allows users to submit inquiries about specific properties
 */

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyName?: string;
  propertyId?: number;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  property: string;
  message: string;
}

export default function InquiryModal({
  isOpen,
  onClose,
  propertyName = "",
  propertyId,
}: InquiryModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    property: propertyName,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Update property name when prop changes
  useEffect(() => {
    if (propertyName) {
      setFormData((prev) => ({ ...prev, property: propertyName }));
    }
  }, [propertyName]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        property: propertyName,
        message: "",
      });
      setSubmitStatus("idle");
    }
  }, [isOpen, propertyName]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission (replace with actual API call)
    try {
      // TODO: Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Here you would typically send the data to your backend
      console.log("Inquiry submitted:", {
        ...formData,
        propertyId,
        timestamp: new Date().toISOString(),
      });

      setSubmitStatus("success");
      setIsSubmitting(false);

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          property: propertyName,
          message: "",
        });
        setSubmitStatus("idle");
        onClose();
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-lg">
                <h2
                  className="text-2xl font-semibold text-[rgb(34,17,3)]"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                    fontWeight: 400,
                  }}
                >
                  Property Inquiry
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors text-2xl leading-none"
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {submitStatus === "success" ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 text-3xl">✓</span>
                    </div>
                    <h3
                      className="text-xl font-semibold text-[rgb(34,17,3)] mb-2"
                      style={{
                        fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                        fontWeight: 400,
                      }}
                    >
                      Thank You!
                    </h3>
                    <p
                      className="text-gray-600"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      Your inquiry has been submitted successfully. We&apos;ll get back to you soon.
                    </p>
                  </div>
                ) : submitStatus === "error" ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-red-600 text-3xl">✕</span>
                    </div>
                    <h3
                      className="text-xl font-semibold text-[rgb(34,17,3)] mb-2"
                      style={{
                        fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                        fontWeight: 400,
                      }}
                    >
                      Error
                    </h3>
                    <p
                      className="text-gray-600 mb-4"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      Something went wrong. Please try again.
                    </p>
                    <button
                      onClick={() => setSubmitStatus("idle")}
                      className="bg-[#8B4513] text-white px-6 py-2 rounded-full hover:bg-[#6B3410] transition-colors"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{
                          fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                        style={{
                          fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        }}
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{
                          fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                        style={{
                          fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        }}
                        placeholder="Enter your email address"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{
                          fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        }}
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                        style={{
                          fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        }}
                        placeholder="Enter your phone number"
                      />
                    </div>

                    {/* Property */}
                    <div>
                      <label
                        htmlFor="property"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{
                          fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        }}
                      >
                        Property of Interest *
                      </label>
                      <input
                        type="text"
                        id="property"
                        name="property"
                        value={formData.property}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent bg-gray-50"
                        style={{
                          fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        }}
                        placeholder="Property name"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{
                          fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        }}
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent resize-none"
                        style={{
                          fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        }}
                        placeholder="Tell us about your investment interest..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                        style={{
                          fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-[#8B4513] text-white px-6 py-3 rounded-full hover:bg-[#6B3410] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                          fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        }}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

