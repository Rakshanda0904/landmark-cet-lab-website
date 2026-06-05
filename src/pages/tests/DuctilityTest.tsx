
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
        title="Ductility Test"
        subtitle="Evaluating the flexibility and elongation properties of bituminous materials under tensile stress."
      />

      <TestOverview
        description="The Ductility Test is used to determine the ability of bitumen to deform under tensile stress before breaking. It measures the elongation characteristics of bituminous materials, helping assess their flexibility and suitability for pavement construction."
        importance="This test is conducted to evaluate the flexibility and adhesive properties of bitumen used in road construction."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop"
        safety="Ensures bituminous pavements can withstand traffic loads and temperature variations without cracking."
      />

      <ProcessTimeline
        steps={[
          {
            id: 1,
            title: "Sample Preparation",
            description:
              "Bitumen samples are heated and poured into standard moulds for specimen preparation."
          },
          {
            id: 2,
            title: "Cooling & Conditioning",
            description:
              "Prepared specimens are cooled and conditioned in a water bath at controlled temperature."
          },
          {
            id: 3,
            title: "Specimen Mounting",
            description:
              "The specimen is placed in the ductility testing machine with proper alignment."
          },
          {
            id: 4,
            title: "Elongation Testing",
            description:
              "The specimen is stretched gradually at a specified speed until it breaks."
          },
          {
            id: 5,
            title: "Result Measurement",
            description:
              "The elongation length at the breaking point is recorded as the ductility value."
          }
        ]}
      />

      <EquipmentCarousel
        equipmentList={[
          {
            name: "Ductility Testing Machine",
            image:
              "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used to determine the elongation properties of bituminous materials."
          },
          {
            name: "Water Bath Unit",
            image:
              "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
            description:
              "Maintains controlled temperature conditions during testing."
          }
        ]}
      />

      <TechnicalSpecs
        specs={[
          { label: "Standard Codes", value: "IS 1208, ASTM D113" },
          { label: "Test Type", value: "Bitumen Property Test" },
          { label: "Application", value: "Road & Pavement Construction" },
          { label: "Purpose", value: "Determination of Bitumen Ductility" }
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
            question: "What is the Ductility Test?",
            answer:
              "It is a test used to measure the elongation and flexibility properties of bitumen."
          },
          {
            question: "Why is the Ductility Test important?",
            answer:
              "It helps determine whether bitumen can withstand deformation without cracking."
          },
          {
            question: "What does the test measure?",
            answer:
              "The test measures the distance a bitumen specimen stretches before breaking."
          },
          {
            question: "Where is this test used?",
            answer:
              "It is commonly used in highway and pavement construction projects."
          },
          {
            question: "Why is ductility important in bitumen?",
            answer:
              "Good ductility ensures flexibility and resistance to cracking under traffic and temperature changes."
          },
          {
            question: "At what temperature is the test conducted?",
            answer:
              "The test is generally conducted at standard controlled temperatures using a water bath."
          },
          {
            question: "How long does the test take?",
            answer:
              "The complete testing process including conditioning and elongation usually takes a few hours."
          }
        ]}
      />

      <CTASection title="Ductility Test" />
    </div>
  );
}
