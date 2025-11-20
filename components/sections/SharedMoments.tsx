import SectionHeader from "../shared/SectionHeader";

/**
 * Shared Moments section showcasing curated experiences and activities
 * Grid layout with experience cards
 */
interface Experience {
  id: number;
  name: string;
}

const experiences: Experience[] = [
  { id: 1, name: "The Grand Frame" },
  { id: 2, name: "The Courtyard Lens" },
  { id: 3, name: "The Vista Corner" },
];

export default function SharedMoments() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Shared Moments"
          subtitle="Create unforgettable memories with our curated experiences and activities"
        />

        {/* Experience Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="h-[300px] bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
            >
              <span className="text-white text-2xl font-semibold">{experience.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

