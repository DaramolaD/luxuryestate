import Link from "next/link";
import Logo from "@/components/shared/Logo";

/**
 * Header component with navigation links and call-to-action button
 * Reusable across public pages
 */
export default function Header() {
  return (
    <header className="fixed container mx-auto pt-4 md:pt-5 px-4 sm:px-10 md:px-20 top-0 left-0 right-0 z-50">
      {/* White header background with dark brown text */}
      <div className="bg-white shadow-sm rounded-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo href="/" />

            {/* Navigation Links - dark brown text */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-[rgb(34,17,3)] hover:text-[rgb(34,17,3)]/80 transition-colors">
                Home
              </Link>
              <Link href="/properties" className="text-[rgb(34,17,3)] hover:text-[rgb(34,17,3)]/80 transition-colors">
                Properties
              </Link>
              <Link href="/tours" className="text-[rgb(34,17,3)] hover:text-[rgb(34,17,3)]/80 transition-colors">
                Tours
              </Link>
              <Link href="/contact" className="text-[rgb(34,17,3)] hover:text-[rgb(34,17,3)]/80 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Call to Action Button */}
            <Link
              href="/#cta"
              className="bg-[#8B4513] text-white px-6 py-2 rounded-full hover:bg-[#6B3410] transition-colors"
            >
              Explore Properties
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

