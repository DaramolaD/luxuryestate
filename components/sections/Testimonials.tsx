"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";

/**
 * Testimonials section with animated carousel
 * Optimized layout with smooth transitions and auto-rotation
 */
interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  { 
    id: 1,
    name: "Jonathan Mitchell", 
    role: "Real Estate Investor, Portfolio: $12M", 
    quote: "I've invested in properties across three continents, and LuxuryEstate stands out. My Dubai property has already appreciated 18% in the first year, and the rental yield exceeds projections. The team's expertise in selecting prime locations is unmatched." 
  },
  { 
    id: 2,
    name: "Sarah Johnson", 
    role: "Investment Advisor, Wealth Management Firm", 
    quote: "After analyzing hundreds of opportunities, I confidently recommend LuxuryEstate to my high-net-worth clients. Their properties offer the perfect balance of luxury lifestyle and strong investment fundamentals. The ROI projections are conservative and realistic." 
  },
  { 
    id: 3,
    name: "Michael Chen", 
    role: "Serial Property Investor, 15+ Properties", 
    quote: "What impressed me most was the transparency and due diligence. Every property comes with comprehensive market analysis and realistic return projections. My New York investment is performing above expectations, and I'm already looking at their California portfolio." 
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Automatic transition every 6 seconds
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 12000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Trusted by Successful Investors Worldwide"
          subtitle="Real testimonials from investors who've built wealth through our carefully curated property portfolio"
        />
        
        {/* Testimonial Carousel */}
        <div 
          className="max-w-4xl mx-auto overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative flex items-center justify-center overflow-hidden py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ 
                  opacity: 0, 
                  x: 200, 
                  rotate: 5,
                  scale: 0.95
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  rotate: 0,
                  scale: 1
                }}
                exit={{ 
                  opacity: 0, 
                  x: -200, 
                  rotate: -5,
                  scale: 0.95
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.4, 0, 0.2, 1] // Smooth cubic-bezier easing
                }}
                className="text-center w-full"
              >
              {/* Quote */}
              <blockquote
                className="text-[rgb(34,17,3)] mb-6 leading-relaxed"
                style={{
                  fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                  fontWeight: 400,
                  fontSize: 'clamp(24px, 2.5vw + 0.75rem, 42px)',
                  lineHeight: '1.3',
                }}
              >
                &quot;{currentTestimonial.quote}&quot;
              </blockquote>

              {/* Author Information */}
              <div className="flex flex-col items-center gap-3">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8B4513] to-[#A0522D] flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    {currentTestimonial.name.charAt(0)}
                  </span>
                </div>
                
                {/* Name and Role */}
                <div className="text-center">
                  <p
                    className="text-base font-semibold text-gray-800 mb-1"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    {currentTestimonial.name}
                  </p>
                  <p 
                    className="text-sm text-gray-600"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? "w-3 h-3 bg-[#8B4513]"
                    : "w-2 h-2 bg-gray-300 hover:bg-[#8B4513]/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

