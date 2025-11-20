import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";

/**
 * SEO metadata for contact page
 */
export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with LuxuryEstate for property investment inquiries. Our team is ready to help you find the perfect investment opportunity. Contact us today for personalized assistance.",
  openGraph: {
    title: "Contact Us | LuxuryEstate",
    description: "Get in touch with LuxuryEstate for property investment inquiries. Our team is ready to help you find the perfect investment opportunity.",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

/**
 * Contact page - Dedicated contact page with form and information
 * Allows users to reach out with inquiries
 */
export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="py-40 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="mb-4"
            style={{
              fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
              fontWeight: 400,
              fontSize: 'clamp(36px, 5vw + 1rem, 64px)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
            }}
          >
            Start Your Investment Journey Today
          </h1>
          <p
            className="text-xl text-white/90 max-w-6xl mx-auto"
            style={{
              fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
              fontSize: 'clamp(16px, 1.5vw + 0.5rem, 20px)',
            }}
          >
            Our investment specialists are ready to provide personalized guidance, answer your questions, and help you find the perfect property to meet your financial goals. Schedule a confidential consultation and receive a complimentary investment analysis.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <Contact showHeader={false} />
      
      <CTA />
    </div>
  );
}

