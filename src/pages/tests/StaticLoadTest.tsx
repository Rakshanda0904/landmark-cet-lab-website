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
        title="Static Load Test"
        subtitle="Assessing pile load capacity and settlement behavior under controlled static loading."
      />

      <TestOverview
        description="The Static Load Test is a field testing method used to evaluate the load-bearing capacity and settlement characteristics of foundation piles under gradually applied static loads. It helps verify pile performance and foundation safety as per design requirements."
        importance="This test is conducted to determine the actual load-carrying capacity and settlement behavior of foundation piles."
        image=""
        safety="Ensures foundation piles can safely support structural loads without excessive settlement or failure."
      />

      <ProcessTimeline
        steps={[
          {
            id: 1,
            title: "Test Setup Preparation",
            description:
              "Reaction systems, loading arrangements, and test platforms are installed at the site."
          },
          {
            id: 2,
            title: "Instrumentation Installation",
            description:
              "Dial gauges and settlement measuring instruments are positioned to monitor pile movement."
          },
          {
            id: 3,
            title: "Incremental Load Application",
            description:
              "Static loads are applied gradually using hydraulic jacks in predefined loading stages."
          },
          {
            id: 4,
            title: "Settlement Observation",
            description:
              "Pile settlement readings are continuously recorded during loading and unloading cycles."
          },
          {
            id: 5,
            title: "Analysis & Reporting",
            description:
              "Engineers analyze the load-settlement data to evaluate pile capacity and structural performance."
          }
        ]}
      />

      <TechnicalSpecs
        specs={[
          { label: "Standard Codes", value: "IS 2911 (Part 4), ASTM D1143" },
          { label: "Test Type", value: "Field Load Test" },
          { label: "Application", value: "Pile Foundation Assessment" },
          { label: "Purpose", value: "Determination of Load Capacity & Settlement" }
        ]}
      />

      <FAQAccordion
        faqs={[
          {
            question: "What is a Static Load Test?",
            answer:
              "It is a field test used to evaluate the load-bearing capacity and settlement behavior of foundation piles."
          },
          {
            question: "Why is the Static Load Test important?",
            answer:
              "It helps verify whether piles can safely support the design loads of a structure."
          },
          {
            question: "How is the load applied during the test?",
            answer:
              "Loads are applied gradually in stages using hydraulic jacks under controlled conditions."
          },
          {
            question: "What is measured during the test?",
            answer:
              "The test measures pile settlement and displacement under applied loads."
          },
          {
            question: "Is the test performed on-site?",
            answer:
              "Yes, the Static Load Test is conducted directly at the project site."
          },
          {
            question: "What types of piles can be tested?",
            answer:
              "Concrete, steel, and composite piles can all be evaluated using static load testing."
          },
          {
            question: "How long does the test take?",
            answer:
              "The test duration depends on the loading schedule and project requirements, typically ranging from several hours to one day."
          }
        ]}
      />

      <CTASection title="Static Load Test" />
    </div>
  );
}
