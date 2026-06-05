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
        title="Building Material Testing"
        subtitle="Comprehensive quality assessment of construction materials for strength, durability, and safety."
      />

      <TestOverview
        description="Building Material Testing involves the evaluation of construction materials such as cement, concrete, steel, aggregates, bricks, and soil to determine their quality, strength, and suitability for construction projects. These tests ensure compliance with engineering standards and long-term structural performance."
        importance="This test is conducted to ensure construction materials meet quality standards and provide safe, durable structures."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop"
        safety="Ensures only tested and approved materials are used for structurally safe construction."
      />

      <ProcessTimeline
        steps={[
          {
            id: 1,
            title: "Material Sampling",
            description:
              "Representative samples of construction materials are collected from the site or supplier."
          },
          {
            id: 2,
            title: "Laboratory Preparation",
            description:
              "Samples are prepared according to standard testing procedures before analysis."
          },
          {
            id: 3,
            title: "Physical & Mechanical Testing",
            description:
              "Tests are conducted to determine strength, durability, density, and other engineering properties."
          },
          {
            id: 4,
            title: "Quality Evaluation",
            description:
              "Test results are compared against IS and ASTM standards for compliance verification."
          },
          {
            id: 5,
            title: "Report Generation",
            description:
              "Detailed technical reports and recommendations are provided for project approval and execution."
          }
        ]}
      />

      <EquipmentCarousel
        equipmentList={[
          {
            name: "Compression Testing Machine",
            image:
              "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used to determine compressive strength of concrete, bricks, and other materials."
          },
          {
            name: "Sieve Shaker",
            image:
              "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used for particle size analysis of aggregates and soil materials."
          }
        ]}
      />

      <TechnicalSpecs
        specs={[
          { label: "Standard Codes", value: "IS Codes, ASTM Standards" },
          { label: "Test Type", value: "Construction Material Quality Testing" },
          { label: "Application", value: "Buildings, Roads & Infrastructure" },
          { label: "Purpose", value: "Verification of Material Strength & Quality" }
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
            question: "What is Building Material Testing?",
            answer:
              "It is the testing and evaluation of construction materials to verify quality, strength, and durability."
          },
          {
            question: "Why is building material testing important?",
            answer:
              "It ensures safe construction by confirming materials meet engineering standards."
          },
          {
            question: "Which materials are commonly tested?",
            answer:
              "Cement, concrete, steel, aggregates, bricks, soil, and water are commonly tested."
          },
          {
            question: "What tests are performed on building materials?",
            answer:
              "Tests include compressive strength, sieve analysis, water absorption, density, and durability tests."
          },
          {
            question: "Which standards are followed?",
            answer:
              "Testing is generally performed according to IS and ASTM standards."
          },
          {
            question: "Where is building material testing used?",
            answer:
              "It is used in residential, commercial, industrial, and infrastructure projects."
          },
          {
            question: "How long does material testing take?",
            answer:
              "The duration depends on the material and test type, ranging from a few hours to several days."
          }
        ]}
      />

      <CTASection title="Building Material Testing" />
    </div>
  );
}