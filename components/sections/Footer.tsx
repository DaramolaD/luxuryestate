"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "@/components/shared/Logo";

/**
 * Footer component with logo, navigation, newsletter signup, and social links
 * Reusable across all pages
 */
export default function Footer() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "LuxuryEstate";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval: NodeJS.Timeout | null = null;
    let restartTimeout: NodeJS.Timeout | null = null;
    
    const startTyping = () => {
      setDisplayText("");
      currentIndex = 0;
      setIsTyping(true);
      
      if (typingInterval) {
        clearInterval(typingInterval);
        typingInterval = null;
      }
      
      typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTyping(false);
          if (typingInterval) {
            clearInterval(typingInterval);
            typingInterval = null;
          }
          // Restart typing after a delay
          if (restartTimeout) clearTimeout(restartTimeout);
          restartTimeout = setTimeout(() => {
            startTyping();
          }, 3000);
        }
      }, 100);
    };
    
    startTyping();
    
    return () => {
      if (typingInterval) clearInterval(typingInterval);
      if (restartTimeout) clearTimeout(restartTimeout);
    };
  }, []);

  return (
    <footer className="bg-[#8B4513] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left Column: Contact Info */}
          <div>
            <div className="mb-4">
              <Logo href="/" variant="large" light={true} />
            </div>
            <p className="text-white mb-2" style={{ fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif' }}>
              350 Park Avenue
            </p>
            <p className="text-white mb-2" style={{ fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif' }}>
              Suite 1200
            </p>
            <p className="text-white mb-2" style={{ fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif' }}>
              New York, NY 10022
            </p>
            <p className="text-white mb-2" style={{ fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif' }}>
              Phone: +1 (212) 555-0100
            </p>
            <p className="text-white" style={{ fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif' }}>
              Email: info@luxuryestate.com
            </p>
          </div>

          {/* Middle Column: Navigation Links */}
          <div>
            <h4 
              className="text-xl md:text-2xl font-semibold mb-4 text-white"
              style={{
                fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                fontWeight: 400,
                fontSize: 'clamp(20px, 2vw + 0.5rem, 24px)',
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-white hover:text-white/80 transition-colors"
                  style={{ fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif' }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/properties" 
                  className="text-white hover:text-white/80 transition-colors"
                  style={{ fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif' }}
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link 
                  href="/tours" 
                  className="text-white hover:text-white/80 transition-colors"
                  style={{ fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif' }}
                >
                  Tours
                </Link>
              </li>
              {/* <li>
                <Link 
                  href="/testimonials" 
                  className="text-white hover:text-white/80 transition-colors"
                  style={{ fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif' }}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-white hover:text-white/80 transition-colors"
                  style={{ fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif' }}
                >
                  FAQ
                </Link>
              </li> */}
              <li>
                <Link 
                  href="/contact" 
                  className="text-white hover:text-white/80 transition-colors"
                  style={{ fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: Newsletter */}
          <div>
            <h4 
              className="text-xl md:text-2xl font-semibold mb-4 text-white"
              style={{
                fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                fontWeight: 400,
                fontSize: 'clamp(20px, 2vw + 0.5rem, 24px)',
              }}
            >
              Get Investment Updates
            </h4>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all"
                style={{ fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif' }}
              />
              <button
                type="submit"
                className="w-full bg-white text-[#8B4513] px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                style={{ fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif' }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Social Links */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p 
            className="text-white text-sm"
            style={{ fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif' }}
          >
            © {new Date().getFullYear()} LuxuryEstate. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {["Facebook", "Instagram", "Twitter", "YouTube", "Pinterest"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white hover:text-white/80 transition-colors"
                style={{ fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif' }}
                aria-label={social}
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Typewriter Animation Section */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="text-center">
            <p 
              className="text-2xl md:text-7xl font-bold text-white tracking-wider"
              style={{
                fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                fontWeight: 400,
                minHeight: '2rem',
              }}
            >
              {displayText}
              {isTyping && (
                <span className="animate-pulse ml-1">|</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

