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
        title="Marshall Stability Test"
        subtitle="Evaluating the strength and deformation resistance of bituminous mixtures for durable pavement design."
      />

      <TestOverview
        description="The Marshall Stability Test is a laboratory method used to determine the stability, flow value, and optimum bitumen content in bituminous mixtures. It helps assess the performance of asphalt mixes used in road construction."
        importance="This test is conducted to ensure pavement strength, durability, and resistance to deformation under traffic loads."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop"
        safety="Ensures road surfaces can safely withstand heavy traffic without rutting, cracking, or deformation."
      />

      <ProcessTimeline
        steps={[
          {
            id: 1,
            title: "Sample Preparation",
            description:
              "Bitumen and aggregate are heated and mixed in specified proportions."
          },
          {
            id: 2,
            title: "Mould Compaction",
            description:
              "The mixture is placed in Marshall moulds and compacted using a standard compaction hammer."
          },
          {
            id: 3,
            title: "Conditioning",
            description:
              "Prepared samples are conditioned in a water bath at a controlled temperature."
          },
          {
            id: 4,
            title: "Load Application",
            description:
              "Axial load is applied on the specimen using a Marshall testing machine until failure."
          },
          {
            id: 5,
            title: "Stability & Flow Analysis",
            description:
              "Maximum load (stability) and deformation (flow value) are recorded and analyzed."
          }
        ]}
      />

      <EquipmentCarousel
        equipmentList={[
          {
            name: "Marshall Stability Testing Machine",
            image:
              "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used to determine stability and flow of bituminous specimens under load."
          },
          {
            name: "Compaction Hammer",
            image:
              "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used to compact asphalt mixtures in moulds for testing."
          }
        ]}
      />

      <TechnicalSpecs
        specs={[
          { label: "Standard Codes", value: "ASTM D6927, MS-2 (Asphalt Institute)" },
          { label: "Test Type", value: "Bituminous Mix Design Test" },
          { label: "Application", value: "Road Construction & Pavement Design" },
          { label: "Purpose", value: "Determination of Stability, Flow & Bitumen Content" }
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
            question: "What is the Marshall Stability Test?",
            answer:
              "It is a test used to determine the stability and flow characteristics of bituminous mixtures."
          },
          {
            question: "Why is the Marshall Test important?",
            answer:
              "It helps design durable and deformation-resistant road pavements."
          },
          {
            question: "What does the test measure?",
            answer:
              "It measures stability (maximum load) and flow (deformation) of asphalt mixes."
          },
          {
            question: "Where is this test used?",
            answer:
              "It is widely used in highway construction and pavement design."
          },
          {
            question: "What is Marshall Stability?",
            answer:
              "It is the maximum load a bituminous specimen can withstand before failure."
          },
          {
            question: "What is flow value?",
            answer:
              "Flow value is the deformation of the specimen at maximum load."
          },
          {
            question: "How long does the test take?",
            answer:
              "The test typically takes a few hours including sample preparation and analysis."
          }
        ]}
      />

      <CTASection title="Marshall Stability Test" />
    </div>
  );
}