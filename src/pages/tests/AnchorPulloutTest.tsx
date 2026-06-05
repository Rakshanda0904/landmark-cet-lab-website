
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
        title="Anchor Pullout Test"
        subtitle="Evaluating anchor strength and pullout resistance for secure structural performance."
      />

      <TestOverview
        description="The Anchor Pullout Test is a field testing method used to determine the load-carrying capacity and pullout resistance of anchors installed in concrete, rock, or soil. The test helps verify anchor performance, installation quality, and structural reliability."
        importance="This test is conducted to assess the strength and pullout capacity of installed anchors under tensile loading."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop"
        safety="Ensures anchors can safely resist tensile forces without failure or excessive displacement."
      />

      <ProcessTimeline
        steps={[
          {
            id: 1,
            title: "Test Setup Preparation",
            description:
              "The anchor location is inspected and testing equipment is properly installed according to standard procedures."
          },
          {
            id: 2,
            title: "Instrumentation Installation",
            description:
              "Load measuring devices and displacement gauges are attached to monitor anchor behavior during testing."
          },
          {
            id: 3,
            title: "Incremental Load Application",
            description:
              "Tensile loads are applied gradually using hydraulic jacks under controlled loading conditions."
          },
          {
            id: 4,
            title: "Displacement Monitoring",
            description:
              "Anchor movement and elongation are continuously recorded at each loading stage."
          },
          {
            id: 5,
            title: "Analysis & Reporting",
            description:
              "Engineers analyze the recorded data to evaluate anchor capacity, performance, and structural safety."
          }
        ]}
      />

      <EquipmentCarousel
        equipmentList={[
          {
            name: "Hydraulic Pullout Jack",
            image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used to apply controlled tensile loads during pullout testing."
          },
          {
            name: "Digital Load Cell",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
            description:
              "Provides accurate measurement of applied pullout forces."
          }
        ]}
      />

      <TechnicalSpecs
        specs={[
          { label: "Standard Codes", value: "ASTM E488, BS 5080" },
          { label: "Test Type", value: "Field Pullout Test" },
          { label: "Application", value: "Anchors & Fastening Systems" },
          { label: "Purpose", value: "Determination of Pullout Capacity" }
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
            question: "What is an Anchor Pullout Test?",
            answer:
              "It is a field test used to determine the pullout resistance and tensile strength of installed anchors."
          },
          {
            question: "Why is the Anchor Pullout Test important?",
            answer:
              "It helps verify that anchors can safely withstand design loads and tensile forces."
          },
          {
            question: "Where is this test commonly used?",
            answer:
              "The test is widely used in bridges, retaining walls, industrial structures, and fastening systems."
          },
          {
            question: "What does the test measure?",
            answer:
              "The test measures anchor displacement, pullout resistance, and load-carrying capacity."
          },
          {
            question: "Is the test conducted on-site?",
            answer:
              "Yes, Anchor Pullout Testing is generally performed directly at the project location."
          },
          {
            question: "What types of anchors can be tested?",
            answer:
              "Mechanical anchors, rock anchors, soil anchors, and chemical anchors can all be tested."
          },
          {
            question: "How long does the test take?",
            answer:
              "The testing duration depends on project requirements and loading stages, but is typically completed within a few hours."
          }
        ]}
      />

      <CTASection title="Anchor Pullout Test" />
    </div>
  );
}

