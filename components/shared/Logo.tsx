"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

/**
 * Logo Component
 * Reusable logo component for Luxury Estate
 * Styled to look like a professional branded logo
 * Shows "LE" on mobile, "luxuryestate" on desktop
 */

interface LogoProps {
  href?: string;
  className?: string;
  variant?: "default" | "small" | "large";
  light?: boolean; // For light backgrounds (white text)
}

export default function Logo({ href = "/", className = "", variant = "default", light = false }: LogoProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Size classes based on variant
  const sizeClasses = {
    small: "text-xl",
    default: "text-2xl",
    large: "text-3xl md:text-4xl",
  };

  const logoContent = (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {/* Logo text with gradient effect - Shows LE on mobile, luxuryestate on desktop */}
      <span
        className={`${sizeClasses[variant]} font-bold tracking-tight ${
          light
            ? "text-white"
            : "bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#8B4513] bg-clip-text text-transparent"
        }`}
        style={{
          fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
          fontWeight: 600,
          letterSpacing: "0.03em",
        }}
      >
        {isMobile ? (
          // Mobile: Show LE
          <>
            L
            <span className={light ? "text-white/90" : "text-[rgb(34,17,3)]"}>E</span>
          </>
        ) : (
          // Desktop: Show luxuryestate
          <>
            <span className={light ? "text-white" : "text-[rgb(34,17,3)]"}>LuxuryEstate</span>
          </>
        )}
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="hover:opacity-80 transition-opacity">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}

