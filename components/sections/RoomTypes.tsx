import Link from "next/link";
import Image from "next/image";
import SectionHeader from "../shared/SectionHeader";

/**
 * Room types section showcasing different room options
 * Grid layout with room cards featuring images, descriptions, and features
 */
interface Room {
  id: number;
  name: string;
  description: string;
  amenities: {
    beds: string;
    capacity: string;
    ac: string;
    bathroom: string;
  };
  imageSrc: string;
}

const rooms: Room[] = [
  {
    id: 1,
    name: "Heritage Suite",
    description: "Prime location investment with exceptional rental yield potential and strong appreciation history. Perfect for investors seeking stable returns in established luxury markets.",
    amenities: {
      beds: "2 King Bed",
      capacity: "4 Person",
      ac: "Air Conditioned",
      bathroom: "1 Spacious Bathroom",
    },
    imageSrc: "/img/usa.jpg",
  },
  {
    id: 2,
    name: "Skyline Executive Suite",
    description: "High-growth market opportunity with projected 12%+ annual returns. Ideal for investors looking to capitalize on emerging luxury real estate trends in premium urban centers.",
    amenities: {
      beds: "2 King Bed",
      capacity: "4 Person",
      ac: "Air Conditioned",
      bathroom: "1 Spacious Bathroom",
    },
    imageSrc: "/img/Dubai.jpg",
  },
  {
    id: 3,
    name: "Sunset Pool Villa",
    description: "Exclusive lifestyle investment combining luxury living with exceptional capital appreciation. Premium amenities and prime location ensure strong rental demand and long-term value growth.",
    amenities: {
      beds: "2 King Bed",
      capacity: "4 Person",
      ac: "Air Conditioned",
      bathroom: "1 Spacious Bathroom",
    },
    imageSrc: "/img/usa2.jpg",
  },
];

export default function RoomTypes() {
  return (
    <section id="room-types" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Hand Selected Investment Properties"
          subtitle="Each property in our portfolio has been carefully vetted for exceptional ROI potential, prime location, and luxury lifestyle appeal. Limited availability secure your position in the world's most promising real estate markets."
        />

        {/* Room Cards Grid - Optimized layout */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Room Image - Optimized with Next.js Image */}
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src={room.imageSrc}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={room.id === 1} // Prioritize first image for better LCP
                />
                {/* Image count indicator - subtle overlay */}
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-md font-medium">
                  3
                </div>
              </div>

              {/* Room Details - Optimized Content */}
              <div className="p-6 space-y-4">
                {/* Room Name */}
                <h3
                  className="text-2xl text-[rgb(34,17,3)]"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                    fontWeight: 400,
                    lineHeight: '1.2',
                  }}
                >
                  {room.name}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    fontSize: 'clamp(14px, 1vw + 0.5rem, 16px)',
                  }}
                >
                  {room.description}
                </p>

                {/* Amenities Grid - Compact and clean */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#8B4513] text-base">🛏️</span>
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      {room.amenities.beds}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#8B4513] text-base">👤</span>
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      {room.amenities.capacity}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#8B4513] text-base">❄️</span>
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      {room.amenities.ac}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#8B4513] text-base">🛁</span>
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                      }}
                    >
                      {room.amenities.bathroom}
                    </span>
                  </div>
                </div>

                {/* View Property Button - Optimized */}
                <Link
                  href={`/properties/${room.id}`}
                  className="inline-flex items-center justify-center w-full border-2 border-[#8B4513] text-[#8B4513] px-6 py-3 rounded-full hover:bg-[#8B4513] hover:text-white transition-all duration-300 text-sm font-medium group"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                >
                  View Property
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/properties" className="text-gray-500 border border-gray-500 hover:bg-[#8B4513] hover:text-white px-6 py-3 rounded-full transition-colors text-xl" style={{
            fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
          }}>
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}

