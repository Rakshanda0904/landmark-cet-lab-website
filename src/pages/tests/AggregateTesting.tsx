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
        title="Aggregate Testing"
        subtitle="Comprehensive evaluation of aggregate quality, strength, durability, and water absorption properties."
      />

      <TestOverview
        description="Aggregate Testing is performed to determine the physical and mechanical properties of aggregates used in construction. The testing includes water content, specific gravity, point load test, and aggregate impact value to ensure material quality and structural performance."
        importance="This test is conducted to verify the strength, durability, and suitability of aggregates for construction applications."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop"
        safety="Ensures only high-quality aggregates are used to improve structural stability and long-term durability."
      />

      <ProcessTimeline
        steps={[
          {
            id: 1,
            title: "Sample Collection",
            description:
              "Representative aggregate samples are collected from the site or stockpile."
          },
          {
            id: 2,
            title: "Moisture & Specific Gravity Testing",
            description:
              "Water content and specific gravity of aggregates are determined using laboratory procedures."
          },
          {
            id: 3,
            title: "Point Load Testing",
            description:
              "Point load tests are performed to evaluate aggregate strength under concentrated loads."
          },
          {
            id: 4,
            title: "Impact Value Testing",
            description:
              "Aggregate impact value tests measure resistance to sudden impact and shock."
          },
          {
            id: 5,
            title: "Result Analysis",
            description:
              "All test results are analyzed to assess aggregate quality and suitability for construction."
          }
        ]}
      />

      <EquipmentCarousel
        equipmentList={[
          {
            name: "Aggregate Impact Testing Machine",
            image:
              "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used to determine the impact resistance and toughness of aggregates."
          },
          {
            name: "Specific Gravity Apparatus",
            image:
              "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used for determining water absorption and specific gravity of aggregates."
          }
        ]}
      />

      <TechnicalSpecs
        specs={[
          { label: "Standard Codes", value: "IS 2386, ASTM C127/C128" },
          { label: "Test Type", value: "Aggregate Quality & Strength Testing" },
          { label: "Application", value: "Concrete, Roads & Infrastructure" },
          { label: "Purpose", value: "Determination of Strength, Durability & Water Absorption" }
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
            question: "What is Aggregate Testing?",
            answer:
              "It is a series of laboratory tests used to evaluate the quality and engineering properties of aggregates."
          },
          {
            question: "Why is aggregate testing important?",
            answer:
              "It ensures aggregates are strong, durable, and suitable for construction purposes."
          },
          {
            question: "What is the water content test?",
            answer:
              "It determines the amount of moisture present in aggregate samples."
          },
          {
            question: "What is specific gravity in aggregates?",
            answer:
              "Specific gravity indicates the density and strength characteristics of aggregates."
          },
          {
            question: "What is the point load test?",
            answer:
              "It measures the strength of aggregate particles under concentrated loading conditions."
          },
          {
            question: "What is the aggregate impact value test?",
            answer:
              "It evaluates the toughness and resistance of aggregates against sudden impact loads."
          },
          {
            question: "Where are aggregate tests used?",
            answer:
              "These tests are used in concrete production, road construction, bridges, and infrastructure projects."
          }
        ]}
      />

      <CTASection title="Aggregate Testing" />
    </div>
  );
}