import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

/**
 * Reusable component for consistent section titles and subtitles.
 * Applies Instrument Serif for titles and Geist for subtitles with responsive sizing.
 * Creates a luxury feel with consistent typography across all sections.
 */
export default function SectionHeader({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-8 md:mb-12 ${className || ''}`}>
      <h2
        className={`mb-4 ${titleClassName || 'text-[rgb(34,17,3)]'}`}
        style={{
          fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
          fontWeight: 400,
          fontSize: 'clamp(32px, 4vw + 1rem, 64px)',
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-6xl mx-auto ${subtitleClassName || 'text-gray-700'}`}
          style={{
            fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(16px, 1.5vw + 0.5rem, 20px)',
            lineHeight: '1.6',
            opacity: 0.9,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

