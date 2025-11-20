import RoomTypes from "@/components/sections/RoomTypes";
import CTA from "@/components/sections/CTA";

/**
 * Rooms page - Public page showcasing available rooms
 * Demonstrates modular component reuse
 */
export default function RoomsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-40 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Rooms & Suites</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover our exquisite rooms and suites, designed for ultimate comfort and relaxation.
          </p>
        </div>
      </section>
      {/* Room Types Section */}
      <RoomTypes />
      <CTA />
    </div>
  );
}

