import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Experiences from "@/components/sections/Experiences";
import ImageGallery from "@/components/sections/ImageGallery";
import RoomTypes from "@/components/sections/RoomTypes";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import TrustSignals from "@/components/sections/TrustSignals";
import Offers from "@/components/sections/Offers";
import SharedMoments from "@/components/sections/SharedMoments";

/**
 * SEO metadata for home page
 */
export const metadata: Metadata = {
  title: "Premium Real Estate Investment Opportunities | LuxuryEstate",
  description: "Invest in hand-selected luxury properties in Dubai, New York, and California. Exceptional ROI potential, prime locations, and comprehensive property management. Join successful investors building wealth through premium real estate.",
  openGraph: {
    title: "LuxuryEstate - Premium Real Estate Investment Platform",
    description: "Join elite investors securing premium properties in Dubai, New York, and California. Hand-selected opportunities with exceptional ROI potential, prime locations, and full-service property management.",
    url: "/",
    images: [
      {
        url: "/img/heroBg.png",
        width: 1200,
        height: 630,
        alt: "LuxuryEstate Premium Property Investment",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

/**
 * Home page - Public-facing landing page
 * Composed of modular section components
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <Hero />
      <RoomTypes />
      <TrustSignals />
      <Experiences />
      <ImageGallery />
      <Testimonials />
      {/* <SharedMoments />
      <Offers /> */}
      <FAQ />
      <Contact />
      <CTA />
      {/* <Footer /> */}
    </div>
  );
}
