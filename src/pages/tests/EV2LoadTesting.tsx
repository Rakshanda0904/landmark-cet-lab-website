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
        title="EV2 Load Testing"
        subtitle="Evaluating soil compaction and deformation characteristics for pavement and foundation stability."
      />

      <TestOverview
        description="The EV2 Load Test is a plate bearing test used to determine the deformation modulus and compaction quality of soil and granular layers. It helps evaluate the load-bearing behavior of subgrade and base layers used in roads, railways, and foundation works."
        importance="This test is conducted to assess soil stiffness, compaction quality, and load-bearing performance."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop"
        safety="Ensures properly compacted ground conditions for safe and durable infrastructure performance."
      />

      <ProcessTimeline
        steps={[
          {
            id: 1,
            title: "Surface Preparation",
            description:
              "The testing area is leveled and prepared to ensure accurate plate placement and loading conditions."
          },
          {
            id: 2,
            title: "Plate Installation",
            description:
              "A rigid loading plate is positioned on the prepared surface at the designated test location."
          },
          {
            id: 3,
            title: "Incremental Load Application",
            description:
              "Loads are applied in stages using a hydraulic loading system under controlled conditions."
          },
          {
            id: 4,
            title: "Settlement Measurement",
            description:
              "Surface deformation and settlement readings are continuously recorded during loading cycles."
          },
          {
            id: 5,
            title: "Analysis & Reporting",
            description:
              "The collected data is analyzed to determine EV1 and EV2 deformation modulus values and compaction quality."
          }
        ]}
      />

      <EquipmentCarousel
        equipmentList={[
          {
            name: "Hydraulic Loading Jack",
            image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used to apply controlled loads during EV2 plate testing."
          },
          {
            name: "Settlement Measuring Gauges",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
            description:
              "Provides accurate measurement of surface settlement and deformation."
          }
        ]}
      />

      <TechnicalSpecs
        specs={[
          { label: "Standard Codes", value: "DIN 18134" },
          { label: "Test Type", value: "Plate Bearing Test" },
          { label: "Application", value: "Roads, Railways & Foundation Layers" },
          { label: "Purpose", value: "Determination of EV2 Deformation Modulus" }
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
            question: "What is an EV2 Load Test?",
            answer:
              "It is a plate bearing test used to evaluate soil deformation modulus and compaction quality."
          },
          {
            question: "Why is EV2 testing important?",
            answer:
              "It helps verify whether the soil or granular layer is properly compacted for construction purposes."
          },
          {
            question: "Where is EV2 testing commonly used?",
            answer:
              "The test is widely used in roads, highways, railways, airports, and foundation preparation works."
          },
          {
            question: "What does the test measure?",
            answer:
              "The test measures settlement behavior and calculates EV1 and EV2 deformation modulus values."
          },
          {
            question: "Is the test conducted on-site?",
            answer:
              "Yes, EV2 Load Testing is performed directly at the construction site."
          },
          {
            question: "What is the significance of the EV2 value?",
            answer:
              "The EV2 value indicates the stiffness and load-bearing quality of the tested ground layer."
          },
          {
            question: "How long does the test take?",
            answer:
              "The test is generally completed within a few hours depending on site conditions and testing requirements."
          }
        ]}
      />

      <CTASection title="EV2 Load Testing" />
    </div>
  );
}