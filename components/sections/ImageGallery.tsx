"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";

/**
 * Image gallery carousel section with continuous scrolling
 * Displays all images from public folder in an infinite scrolling carousel
 */
export default function ImageGallery() {
  // All images from public/img folder
  const images = [
    { id: 1, src: "/img/heroBg.png", alt: "Hero Background" },
    { id: 2, src: "/img/usa.jpg", alt: "USA Location" },
    { id: 3, src: "/img/usa1.jpg", alt: "USA Location 1" },
    { id: 4, src: "/img/usa2.jpg", alt: "USA Location 2" },
    { id: 5, src: "/img/usa3.jpg", alt: "USA Location 3" },
    { id: 6, src: "/img/Dubai.jpg", alt: "Dubai Location" },
    { id: 7, src: "/img/Dubai1.jpg", alt: "Dubai Location 1" },
    { id: 8, src: "/img/Dubai2.jpg", alt: "Dubai Location 2" },
    { id: 9, src: "/img/Dubai3-.jpg", alt: "Dubai Location 3" },
    { id: 10, src: "/img/Dubai3.png", alt: "Dubai Location 3 PNG" },
  ];

  // Duplicate images for seamless infinite loop
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-16 bg-[#8B4513] overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="A Visual Journey"
          subtitle="Explore our stunning property through a collection of captivating images"
          titleClassName="text-white"
          subtitleClassName="text-white/90"
        />

        {/* Continuously Scrolling Image Carousel */}
        <div className="relative mt-8">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{
                x: [0, -(images.length * 316)], // Move by width of one set of images (300px + 16px gap per image)
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20, // Adjust speed (higher = slower)
                  ease: "linear",
                },
              }}
            >
              {duplicatedImages.map((image, index) => (
                <div
                  key={`${image.id}-${index}`}
                  className="shrink-0 w-[300px] h-[400px] rounded-lg overflow-hidden relative group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="300px"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for seamless fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#8B4513] to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#8B4513] to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
}
