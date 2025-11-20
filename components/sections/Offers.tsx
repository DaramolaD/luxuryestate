import Link from "next/link";
import SectionHeader from "../shared/SectionHeader";

/**
 * Offers section displaying exclusive deals and packages
 * Grid layout with offer cards including pricing and inclusions
 */
interface Offer {
  id: number;
  name: string;
  description: string;
  inclusions: string[];
  price: string;
}

const offers: Offer[] = [
  {
    id: 1,
    name: "Golden Hour Escape",
    description: "Experience the magic of golden hour with exclusive dining and relaxation",
    inclusions: ["Breakfast", "Spa Access", "Sunset Dining", "Welcome Drink"],
    price: "$299/night",
  },
  {
    id: 2,
    name: "Secret Garden Romance",
    description: "Perfect romantic getaway in our private garden suite",
    inclusions: ["Romantic Dinner", "Flower Arrangement", "Champagne", "Late Checkout"],
    price: "$399/night",
  },
  {
    id: 3,
    name: "Rooftop Cinema Escape",
    description: "Unique rooftop cinema experience with luxury accommodations",
    inclusions: ["Movie Night", "Popcorn & Drinks", "Blankets", "Private Viewing"],
    price: "$349/night",
  },
];

export default function Offers() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Travel Smarter With Exclusive Deals"
          subtitle="Unlock special savings and perks when you book directly with us"
        />

        {/* Offer Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Offer Image */}
              <div className="h-[200px] bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                <span className="text-white text-lg font-medium">{offer.name}</span>
              </div>

              {/* Offer Details */}
              <div className="p-6">
                <h3
                  className="text-2xl font-bold text-[rgb(34,17,3)] mb-2"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                    fontWeight: 400,
                  }}
                >
                  {offer.name}
                </h3>
                <p
                  className="text-gray-600 mb-4"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                >
                  {offer.description}
                </p>

                {/* Inclusions List */}
                <ul className="space-y-2 mb-4">
                  {offer.inclusions.map((inclusion, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-[#8B4513] rounded-full mr-2"></span>
                      {inclusion}
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="flex items-center justify-between mt-6">
                  <span className="text-2xl font-bold text-[#8B4513]">{offer.price}</span>
                  <Link
                    href={`/offers/${offer.id}`}
                    className="bg-[#8B4513] text-white px-6 py-2 rounded-full hover:bg-[#6B3410] transition-colors"
                  >
                    Book Your Stay
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

