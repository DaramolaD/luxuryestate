"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

/**
 * Hero section with large background image, headline, and CTA
 * Main banner section for home page with automatic and manual image toggle functionality
 */
export default function Hero() {
  // Image carousel with USA and Dubai images
  const images = [
    { id: 0, src: "/img/heroBg.png", alt: "Hero Background" },
    { id: 1, src: "/img/usa.jpg", alt: "USA Location" },
    { id: 2, src: "/img/Dubai3.png", alt: "Dubai Location" }
    // { id: 3, src: "/img/usa1.jpg", alt: "USA Location 2" },
    // { id: 4, src: "/img/Dubai1.jpg", alt: "Dubai Location 2" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Automatic transition every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, images.length]);


  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center pt-0 overflow-hidden">
      {/* Background Images - Smooth crossfade transition with Framer Motion */}
      {/* Render all images but only show the current one with smooth fade */}
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={false}
          animate={{
            opacity: currentImageIndex === index ? 1 : 0,
            zIndex: currentImageIndex === index ? 1 : 0,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image.src})`,
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      ))}

      {/* Content - padding top to account for fixed header */}
      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="max-w-4xl">
          {/* Main Heading - Dynamic size with proper hierarchy */}
          {/* Responsive line-height: 1.2 for mobile (48px), 1.05 for desktop (80px) */}
          <h1 
            className="text-white mb-4 md:mb-6 hero-heading"
            style={{
              fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
              fontWeight: 400,
              fontSize: 'clamp(48px, 5vw + 1rem, 80px)',
              letterSpacing: '-0.02em',
            }}
          >
           Own Your Future in the World&apos;s Most Exclusive Destinations
          </h1>
          
          {/* Subtitle - Dynamic size with Geist font, optimized hierarchy */}
          <p 
            className="text-white mb-6 md:mb-8"
            style={{
              fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(20px, 1.5vw + 0.5rem, 20px)',
              lineHeight: '1.6',
              opacity: 0.95,
            }}
          >
            Join elite investors who are securing premium real estate assets in Dubai, New York, and California. Each property is hand-selected for exceptional ROI potential, world-class amenities, and unparalleled lifestyle returns. Limited availability in prime locations.
          </p>
          
          {/* CTA Button - Dynamic size */}
          <Link
            href="/properties"
            className="inline-block bg-[#8B4513] text-white px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-[#6B3410] transition-all text-base md:text-lg font-medium shadow-lg hover:shadow-xl"
            style={{
              fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
            }}
          >
            Explore Investment Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
}

