import { useEffect } from 'react';
import TestHero from '../../components/tests/TestHero';
import TestOverview from '../../components/tests/TestOverview';
import ProcessTimeline from '../../components/tests/ProcessTimeline';
import EquipmentCarousel from '../../components/tests/EquipmentCarousel';
import TechnicalSpecs from '../../components/tests/TechnicalSpecs';
/*import TestGallery from '../../components/tests/TestGallery';*/
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
        title="Chemical Testing"
        subtitle="Accurate chemical analysis of construction materials to ensure quality, compliance, and durability."
      />

      <TestOverview
        description="Chemical Testing is performed on aggregates, soil, water, and construction materials to determine their chemical composition and suitability for civil engineering applications. These tests help identify harmful substances, assess material quality, and ensure compliance with national standards for safe and durable construction."
        importance="This test is conducted to evaluate material quality, detect contaminants, and ensure compliance with construction standards."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop"
        safety="Ensures construction materials are chemically stable and safe for long-term structural performance."
      />

      <ProcessTimeline
        steps={[
          {
            id: 1,
            title: "Sample Collection",
            description:
              "Representative samples of soil, aggregates, or water are collected from the project site."
          },
          {
            id: 2,
            title: "Laboratory Preparation",
            description:
              "Samples are prepared and conditioned according to testing standards before analysis."
          },
          {
            id: 3,
            title: "Chemical Analysis",
            description:
              "Laboratory tests are conducted to identify chemical composition and harmful substances."
          },
          {
            id: 4,
            title: "Data Evaluation",
            description:
              "Results are evaluated to determine compliance with construction and environmental standards."
          },
          {
            id: 5,
            title: "Reporting & Recommendations",
            description:
              "Detailed reports are prepared with findings and recommendations for material usage."
          }
        ]}
      />

      <EquipmentCarousel
        equipmentList={[
          {
            name: "pH Meter",
            image:
              "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used to determine acidity or alkalinity levels in water and soil samples."
          },
          {
            name: "Chemical Analysis Apparatus",
            image:
              "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used for detecting chlorides, sulphates, and other chemical contents in materials."
          }
        ]}
      />

      <TechnicalSpecs
        specs={[
          { label: "Standard Codes", value: "IS 3025, IS 2720, ASTM Standards" },
          { label: "Test Type", value: "Chemical Material Analysis" },
          { label: "Application", value: "Construction Materials & Environmental Testing" },
          { label: "Purpose", value: "Determination of Chemical Composition & Contaminants" }
        ]}
      />

      <FAQAccordion
        faqs={[
          {
            question: "What is Chemical Testing in construction?",
            answer:
              "It is the analysis of soil, water, aggregates, and other materials to determine their chemical properties and suitability for construction."
          },
          {
            question: "Why is chemical testing important?",
            answer:
              "It helps identify harmful substances that may affect structural durability and safety."
          },
          {
            question: "Which materials are tested?",
            answer:
              "Soil, aggregates, water, concrete materials, and industrial by-products are commonly tested."
          },
          {
            question: "What chemicals are usually tested?",
            answer:
              "Tests commonly include chlorides, sulphates, pH value, organic content, and dissolved salts."
          },
          {
            question: "Where is chemical testing used?",
            answer:
              "It is used in infrastructure, foundations, roads, bridges, and environmental projects."
          },
          {
            question: "Do chemical tests comply with standards?",
            answer:
              "Yes, testing is performed according to relevant IS and ASTM standards."
          },
          {
            question: "How long does chemical testing take?",
            answer:
              "The testing duration depends on the type of analysis but usually takes a few days."
          }
        ]}
      />
      <CTASection title="Chemical Testing" />
    </div>
  );
}
