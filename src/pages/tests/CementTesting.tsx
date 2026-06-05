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
        title="Cement Testing"
        subtitle="Comprehensive evaluation of cement quality, strength, consistency, and durability for construction safety."
      />

      <TestOverview
        description="Cement Testing is performed to determine the physical and mechanical properties of cement used in construction. The tests evaluate parameters such as fineness, consistency, setting time, compressive strength, and soundness to ensure quality and compliance with standards."
        importance="This test is conducted to verify cement quality and ensure safe, durable, and long-lasting construction."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop"
        safety="Ensures cement used in construction provides adequate strength, stability, and structural durability."
      />

      <ProcessTimeline
        steps={[
          {
            id: 1,
            title: "Sample Collection",
            description:
              "Representative cement samples are collected and prepared for laboratory analysis."
          },
          {
            id: 2,
            title: "Physical Property Testing",
            description:
              "Tests such as fineness, consistency, and setting time are conducted on the cement sample."
          },
          {
            id: 3,
            title: "Strength Testing",
            description:
              "Cement mortar cubes are prepared and tested for compressive strength after curing."
          },
          {
            id: 4,
            title: "Soundness Evaluation",
            description:
              "Soundness tests are performed to determine volume stability and expansion characteristics."
          },
          {
            id: 5,
            title: "Result Analysis",
            description:
              "All results are analyzed to verify compliance with IS standards and project requirements."
          }
        ]}
      />

      <EquipmentCarousel
        equipmentList={[
          {
            name: "Vicat Apparatus",
            image:
              "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used to determine consistency and setting time of cement."
          },
          {
            name: "Compression Testing Machine",
            image:
              "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used to determine the compressive strength of cement mortar cubes."
          }
        ]}
      />

      <TechnicalSpecs
        specs={[
          { label: "Standard Codes", value: "IS 4031, ASTM C109" },
          { label: "Test Type", value: "Cement Quality Testing" },
          { label: "Application", value: "Buildings, Roads & Infrastructure" },
          { label: "Purpose", value: "Determination of Cement Properties & Strength" }
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
            question: "What is Cement Testing?",
            answer:
              "It is a series of laboratory tests used to evaluate the quality and engineering properties of cement."
          },
          {
            question: "Why is cement testing important?",
            answer:
              "It ensures cement quality, strength, and durability for safe construction."
          },
          {
            question: "What properties are tested in cement?",
            answer:
              "Properties such as fineness, setting time, consistency, soundness, and compressive strength are tested."
          },
          {
            question: "What is the setting time test?",
            answer:
              "It determines the time required for cement paste to begin and complete hardening."
          },
          {
            question: "What is the soundness test?",
            answer:
              "It evaluates the volume stability of cement after setting."
          },
          {
            question: "Where is cement testing used?",
            answer:
              "It is used in buildings, bridges, highways, and all construction projects."
          },
          {
            question: "How long does cement testing take?",
            answer:
              "Basic tests take a few hours, while strength testing may require curing periods of up to 28 days."
          }
        ]}
      />

      <CTASection title="Cement Testing" />
    </div>
  );
}