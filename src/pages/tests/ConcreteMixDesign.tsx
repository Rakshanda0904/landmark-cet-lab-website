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
        title="Concrete Mix Design"
        subtitle="Optimizing concrete proportions to achieve the required strength, durability, and workability."
      />

      <TestOverview
        description="Concrete Mix Design is the process of selecting suitable ingredients and determining their proportions to produce concrete with the desired strength, durability, and workability. It ensures efficient material usage and compliance with construction standards."
        importance="This test is conducted to develop cost-effective and durable concrete mixes suitable for specific construction requirements."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop"
        safety="Ensures concrete structures achieve the required strength and long-term structural stability."
      />

      <ProcessTimeline
        steps={[
          {
            id: 1,
            title: "Material Selection",
            description:
              "Cement, aggregates, water, and admixtures are selected based on project requirements."
          },
          {
            id: 2,
            title: "Laboratory Testing",
            description:
              "Materials are tested for physical and mechanical properties before mix preparation."
          },
          {
            id: 3,
            title: "Trial Mix Preparation",
            description:
              "Different trial concrete mixes are prepared with varying proportions."
          },
          {
            id: 4,
            title: "Workability & Strength Testing",
            description:
              "Tests such as slump test and compressive strength test are conducted on trial mixes."
          },
          {
            id: 5,
            title: "Final Mix Recommendation",
            description:
              "The optimum mix proportion is finalized based on performance and standards."
          }
        ]}
      />

      <EquipmentCarousel
        equipmentList={[
          {
            name: "Concrete Mixer",
            image:
              "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used to prepare uniform concrete mixes during trial testing."
          },
          {
            name: "Compression Testing Machine",
            image:
              "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used to determine the compressive strength of concrete specimens."
          }
        ]}
      />

      <TechnicalSpecs
        specs={[
          { label: "Standard Codes", value: "IS 10262, IS 456" },
          { label: "Test Type", value: "Concrete Mix Proportioning" },
          { label: "Application", value: "Buildings, Roads & Infrastructure" },
          { label: "Purpose", value: "Optimization of Concrete Strength & Workability" }
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
            question: "What is Concrete Mix Design?",
            answer:
              "It is the process of determining the correct proportions of concrete ingredients for required performance."
          },
          {
            question: "Why is concrete mix design important?",
            answer:
              "It ensures concrete achieves the desired strength, durability, and workability."
          },
          {
            question: "Which materials are used in concrete mix design?",
            answer:
              "Cement, aggregates, water, and admixtures are commonly used."
          },
          {
            question: "What is a trial mix?",
            answer:
              "A trial mix is a sample concrete mix prepared to evaluate performance before final approval."
          },
          {
            question: "What tests are conducted on concrete mixes?",
            answer:
              "Slump tests, compressive strength tests, and durability tests are commonly performed."
          },
          {
            question: "Which standards are followed for mix design?",
            answer:
              "Concrete mix design is generally carried out according to IS 10262 and IS 456 standards."
          },
          {
            question: "Where is concrete mix design used?",
            answer:
              "It is used in residential, commercial, industrial, and infrastructure projects."
          }
        ]}
      />

      <CTASection title="Concrete Mix Design" />
    </div>
  );
}