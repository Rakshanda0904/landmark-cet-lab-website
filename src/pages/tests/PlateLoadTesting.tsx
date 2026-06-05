import { useEffect } from 'react';
import TestHero from '../../components/tests/TestHero';
import TestOverview from '../../components/tests/TestOverview';
import ProcessTimeline from '../../components/tests/ProcessTimeline';
import TechnicalSpecs from '../../components/tests/TechnicalSpecs';
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
        title="Plate Load Test"
        subtitle="Evaluating soil bearing capacity and settlement characteristics for safe foundation design."
      />

      <TestOverview
        description="The Plate Load Test is a field testing method used to determine the bearing capacity and settlement behavior of soil under applied loads. It helps engineers assess foundation performance and design safe and stable structures."
        importance="This test is conducted to evaluate the safe bearing capacity and load-settlement characteristics of soil."
        image=""
        safety="Ensures the foundation soil can safely support structural loads without excessive settlement or failure."
      />

      <ProcessTimeline
        steps={[
          {
            id: 1,
            title: "Site Preparation",
            description:
              "The test location is excavated and leveled to prepare a stable surface for the loading plate."
          },
          {
            id: 2,
            title: "Plate Placement",
            description:
              "A steel bearing plate is carefully positioned at the center of the prepared test area."
          },
          {
            id: 3,
            title: "Load Application",
            description:
              "Loads are applied incrementally using hydraulic systems under controlled conditions."
          },
          {
            id: 4,
            title: "Settlement Monitoring",
            description:
              "Settlement readings are recorded at each loading stage using precision measuring instruments."
          },
          {
            id: 5,
            title: "Analysis & Reporting",
            description:
              "Engineers analyze load-settlement data to determine soil bearing capacity and foundation suitability."
          }
        ]}
      />

      <TechnicalSpecs
        specs={[
          { label: "Standard Codes", value: "IS 1888, ASTM D1194" },
          { label: "Test Type", value: "Field Load Test" },
          { label: "Application", value: "Foundation & Soil Investigation" },
          { label: "Purpose", value: "Determination of Safe Bearing Capacity" }
        ]}
      />

      <FAQAccordion
        faqs={[
          {
            question: "What is a Plate Load Test?",
            answer:
              "It is a field test used to determine the bearing capacity and settlement behavior of soil."
          },
          {
            question: "Why is the Plate Load Test important?",
            answer:
              "It helps engineers design safe and stable foundations based on actual soil performance."
          },
          {
            question: "Where is the Plate Load Test used?",
            answer:
              "The test is commonly used for buildings, bridges, towers, industrial structures, and road projects."
          },
          {
            question: "What does the test measure?",
            answer:
              "The test measures soil settlement under different loading conditions."
          },
          {
            question: "Is the test conducted on-site?",
            answer:
              "Yes, the Plate Load Test is performed directly at the project site."
          },
          {
            question: "How long does the test take?",
            answer:
              "The duration depends on soil conditions and loading stages, but it is generally completed within one day."
          },
          {
            question: "Which soils can be tested using this method?",
            answer:
              "The test can be conducted on cohesive soils, granular soils, and compacted fills."
          }
        ]}
      />

      <CTASection title="Plate Load Test" />
    </div>
  );
}