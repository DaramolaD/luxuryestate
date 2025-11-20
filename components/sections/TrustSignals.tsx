import SectionHeader from "../shared/SectionHeader";

/**
 * Trust Signals section displaying credibility markers
 * Builds investor confidence with proven track record and expertise
 * Numbers stand out prominently with descriptive text below
 */
interface TrustSignal {
  id: number;
  number: string;
  text: string;
}

const trustSignals: TrustSignal[] = [
  {
    id: 1,
    number: "15+",
    text: "Years of real estate investment expertise",
  },
  {
    id: 2,
    number: "$500M+",
    text: "In properties successfully placed",
  },
  {
    id: 3,
    number: "100%",
    text: "Transparency with detailed financial projections",
  },
  {
    id: 4,
    number: "24/7",
    text: "Comprehensive property management included",
  },
];

export default function TrustSignals() {
  return (
    <section id="trust-signals" className="py-24 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Why Investors Trust Us"
          subtitle="Proven track record, transparent processes, and comprehensive support—everything you need to invest with confidence"
        />

        {/* Trust Signals Grid - 2x2 Layout */}
        <div className="max-w-7xl mx-auto mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustSignals.map((signal) => (
              <div
                key={signal.id}
                className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Large Number - Stands Out */}
                <div
                  className="text-5xl md:text-6xl font-bold mb-4"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), "Instrument Serif Placeholder", serif',
                    fontWeight: 400,
                    background: "linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #8B4513 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: "1.1",
                  }}
                >
                  {signal.number}
                </div>

                {/* Descriptive Text Below */}
                <p
                  className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xs"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                >
                  {signal.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

