"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";

/**
 * Experiences section with animated carousel
 * Image on one side, expanding content on the other with smooth transitions
 */
interface Experience {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  details: string;
}

const experiences: Experience[] = [
  { 
    id: 1,
    name: "Prime Location Access", 
    description: "Live where the elite invest",
    imageSrc: "/img/usa1.jpg",
    details: "Your property investment grants you access to the world's most prestigious neighborhoods. Walk to Michelin-starred restaurants, luxury shopping districts, and cultural landmarks. Experience the lifestyle that comes with prime real estate ownership in globally recognized destinations."
  },
  { 
    id: 2,
    name: "Exclusive Concierge Services", 
    description: "Luxury living, fully managed",
    imageSrc: "/img/Dubai1.jpg",
    details: "As a property owner, enjoy access to premium concierge services including private dining reservations, event planning, transportation coordination, and personalized lifestyle management. Experience the convenience and prestige that comes with luxury property ownership."
  },
  { 
    id: 3,
    name: "World-Class Amenities", 
    description: "Resort-style living year-round",
    imageSrc: "/img/usa3.jpg",
    details: "Your investment includes access to state-of-the-art fitness centers, infinity pools, private beach clubs, spa facilities, and exclusive member lounges. These premium amenities not only enhance your lifestyle but also increase property value and rental appeal."
  },
  { 
    id: 4,
    name: "Investment Community Access", 
    description: "Network with like-minded investors",
    imageSrc: "/img/Dubai2.jpg",
    details: "Join an exclusive community of successful property investors. Attend private events, investment seminars, and networking opportunities. Benefit from shared insights, market intelligence, and collaborative investment strategies with other high-net-worth property owners."
  },
];

export default function Experiences() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Automatic transition every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);


  const currentExperience = experiences[currentIndex];

  return (
    <section id="experiences" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Exclusive Lifestyle Experiences"
          subtitle="Beyond investment returns, discover the extraordinary lifestyle that comes with owning premium properties in the world's most desirable destinations"
        />
        
        {/* Animated Carousel Container */}
        <div 
          className="grid md:grid-cols-2 gap-8 items-start"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left: Image Side - Instant transition */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentExperience.imageSrc}
                  alt={currentExperience.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={currentIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Accordion-style - Compact inactive items, active expands */}
          <div className="relative w-full flex flex-col justify-center">
            {experiences.map((experience, index) => {
              const isActive = currentIndex === index;
              
              return (
                <div
                  key={experience.id}
                  className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ${
                    isActive ? "mb-2" : "mb-1"
                  }`}
                >
                  {/* Title Button - Compact when inactive */}
                  <button
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsPaused(true);
                      setTimeout(() => setIsPaused(false), 10000);
                    }}
                    className={`w-full text-left flex justify-between items-center transition-all duration-300 ${
                      isActive 
                        ? "px-6 py-4 hover:bg-gray-50" 
                        : "px-4 py-2 hover:bg-gray-50"
                    }`}
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    <h3
                      className={`font-medium transition-all duration-300 ${
                        isActive ? "text-[rgb(34,17,3)]" : "text-gray-600"
                      }`}
                      style={{
                        fontSize: isActive ? "clamp(24px, 2vw + 0.5rem, 32px)" : "16px",
                        fontFamily: isActive 
                          ? 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif'
                          : 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                        fontWeight: isActive ? 400 : 400,
                      }}
                    >
                      {experience.name}
                    </h3>
                  </button>

                  {/* Expandable Content - Only visible when active */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.4, ease: "easeInOut" },
                          opacity: { duration: 0.2, ease: "easeInOut" }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 space-y-3">
                          {/* Experience Description */}
                          <p
                            className="text-base text-gray-600"
                            style={{
                              fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                            }}
                          >
                            {experience.description}
                          </p>

                          {/* Experience Details */}
                          <p
                            className="text-gray-700 leading-relaxed text-sm"
                            style={{
                              fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                            }}
                          >
                            {experience.details}
                          </p>

                          {/* CTA Button */}
                          <Link
                            href={`/tours#tour-${experience.id}`}
                            className="inline-flex items-center gap-2 border-2 border-[#8B4513] text-[#8B4513] px-6 py-3 rounded-full hover:bg-[#8B4513] hover:text-white transition-all duration-300 text-sm font-medium group mt-2"
                            style={{
                              fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                            }}
                          >
                            View Details
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

