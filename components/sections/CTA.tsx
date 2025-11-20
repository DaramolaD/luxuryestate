import Link from "next/link";
import SectionHeader from "../shared/SectionHeader";

/**
 * Call-to-action section for booking
 * Prominent CTA banner encouraging reservations
 */
export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-[rgb(34,17,3)]">
      <div className="container mx-auto px-4 text-center">
        <SectionHeader
          title="Secure Your Legacy Investment Today"
          subtitle="Don't let prime opportunities slip away. Join successful investors who've already secured their future with premium properties in the world's fastest-growing markets. Limited properties available act now to lock in your investment."
          titleClassName="text-white"
          subtitleClassName="text-white/90"
        />
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Link
            href="/properties"
            className="inline-block bg-white text-[#8B4513] px-8 py-4 rounded-full hover:bg-gray-100 transition-all text-lg font-medium shadow-lg hover:shadow-xl"
          >
            View Available Properties
          </Link>
          <Link
            href="/contact"
            className="inline-block border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#8B4513] transition-all text-lg font-medium"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

