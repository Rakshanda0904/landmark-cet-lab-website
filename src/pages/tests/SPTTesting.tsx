import { useEffect } from 'react';
import TestHero from '../../components/tests/TestHero';
import TestOverview from '../../components/tests/TestOverview';
import ProcessTimeline from '../../components/tests/ProcessTimeline';
import EquipmentCarousel from '../../components/tests/EquipmentCarousel';
import TechnicalSpecs from '../../components/tests/TechnicalSpecs';
import TestGallery from '../../components/tests/TestGallery';
import FAQAccordion from '../../components/tests/FAQAccordion';
import CTASection from '../../components/tests/CTASection';

export default function Page() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#030407] min-h-screen text-white">
      <TestHero
        title="Standard Penetration Test (SPT)"
        subtitle="Determining soil strength and density through in-situ penetration resistance testing."
      />

      <TestOverview
        description="The Standard Penetration Test (SPT) is a widely used geotechnical field test that measures the resistance of soil to penetration. It helps determine soil strength, density, and bearing capacity for foundation design."
        importance="This test is conducted to evaluate soil resistance and support safe foundation design for construction projects."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop"
        safety="Ensures that soil conditions are properly evaluated to avoid foundation failure and excessive settlement."
      />

      <ProcessTimeline
        steps={[
          {
            id: 1,
            title: "Borehole Drilling",
            description:
              "A borehole is drilled to the required depth at the test location."
          },
          {
            id: 2,
            title: "Sampler Positioning",
            description:
              "A standard split-spoon sampler is placed at the bottom of the borehole."
          },
          {
            id: 3,
            title: "Hammer Dropping",
            description:
              "A standard weight hammer is dropped repeatedly to drive the sampler into the soil."
          },
          {
            id: 4,
            title: "N-Value Recording",
            description:
              "The number of hammer blows required for penetration is recorded as the SPT N-value."
          },
          {
            id: 5,
            title: "Soil Analysis",
            description:
              "Collected data is analyzed to determine soil strength and engineering properties."
          }
        ]}
      />

      <EquipmentCarousel
        equipmentList={[
          {
            name: "Split Spoon Sampler",
            image:
              "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used to collect disturbed soil samples during penetration testing."
          },
          {
            name: "Standard Hammer System",
            image:
              "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used to deliver controlled energy blows for penetration measurement."
          }
        ]}
      />

      <TechnicalSpecs
        specs={[
          { label: "Standard Codes", value: "IS 2131, ASTM D1586" },
          { label: "Test Type", value: "In-situ Geotechnical Test" },
          { label: "Application", value: "Foundation Design & Soil Analysis" },
          { label: "Purpose", value: "Soil Resistance (N-Value) Determination" }
        ]}
      />

      <TestGallery
        images={[
          "https://images.unsplash.com/photo-1541888087545-d729d3c19e53?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop"
        ]}
      />

      <FAQAccordion
        faqs={[
          {
            question: "What is the Standard Penetration Test (SPT)?",
            answer:
              "It is a field test used to measure soil resistance to penetration and determine soil strength."
          },
          {
            question: "Why is SPT important?",
            answer:
              "It helps engineers design safe foundations by understanding soil behavior."
          },
          {
            question: "What is the SPT N-value?",
            answer:
              "It is the number of hammer blows required to drive the sampler into the soil, indicating soil strength."
          },
          {
            question: "Where is SPT used?",
            answer:
              "It is widely used in buildings, bridges, highways, and geotechnical investigations."
          },
          {
            question: "Is SPT performed in the lab or field?",
            answer:
              "SPT is an in-situ field test conducted directly at the site."
          },
          {
            question: "What soils can be tested using SPT?",
            answer:
              "It is suitable for sandy, silty, and some clayey soil conditions."
          },
          {
            question: "How long does SPT take?",
            answer:
              "Each borehole test typically takes a few hours depending on depth and soil conditions."
          }
        ]}
      />

      <CTASection title="Standard Penetration Test (SPT)" />
    </div>
  );
}