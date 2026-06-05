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
        title="Permeability Test"
        subtitle="Evaluating the ability of soil or concrete to allow water flow through its voids."
      />

      <TestOverview
        description="The Permeability Test is a geotechnical and material testing method used to determine the rate at which water flows through soil or concrete. It helps engineers understand drainage characteristics and suitability for foundation and hydraulic structures."
        importance="This test is conducted to assess seepage behavior and ensure safe water flow management in soil and construction materials."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop"
        safety="Ensures proper drainage design and prevents water pressure buildup that may weaken structures."
      />

      <ProcessTimeline
        steps={[
          {
            id: 1,
            title: "Sample Collection",
            description:
              "Soil or concrete samples are collected carefully to maintain natural structure."
          },
          {
            id: 2,
            title: "Sample Preparation",
            description:
              "Samples are saturated and prepared under controlled laboratory conditions."
          },
          {
            id: 3,
            title: "Test Setup",
            description:
              "The sample is placed in a permeability apparatus such as constant head or falling head setup."
          },
          {
            id: 4,
            title: "Water Flow Measurement",
            description:
              "Water is allowed to pass through the sample and flow rates are recorded."
          },
          {
            id: 5,
            title: "Calculation & Analysis",
            description:
              "Permeability coefficient is calculated using recorded flow and hydraulic conditions."
          }
        ]}
      />

      <EquipmentCarousel
        equipmentList={[
          {
            name: "Permeameter Apparatus",
            image:
              "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used to measure the permeability of soil or granular materials."
          },
          {
            name: "Constant Head/Falling Head Setup",
            image:
              "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used to determine hydraulic conductivity under controlled flow conditions."
          }
        ]}
      />

      <TechnicalSpecs
        specs={[
          { label: "Standard Codes", value: "IS 2720 (Part 17), ASTM D2434" },
          { label: "Test Type", value: "Soil & Material Permeability Test" },
          { label: "Application", value: "Drainage, Foundations & Dams" },
          { label: "Purpose", value: "Determination of Permeability Coefficient (k)" }
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
            question: "What is a Permeability Test?",
            answer:
              "It is a test used to determine how easily water flows through soil or concrete."
          },
          {
            question: "Why is permeability testing important?",
            answer:
              "It helps design proper drainage systems and prevents water-related structural damage."
          },
          {
            question: "What does the test measure?",
            answer:
              "It measures the coefficient of permeability or hydraulic conductivity."
          },
          {
            question: "Where is this test used?",
            answer:
              "It is used in dams, foundations, roads, and hydraulic structures."
          },
          {
            question: "Which soils are suitable for this test?",
            answer:
              "Sandy, silty, and granular soils are commonly tested."
          },
          {
            question: "Is this a field or lab test?",
            answer:
              "Permeability testing is usually conducted in a laboratory environment."
          },
          {
            question: "How long does the test take?",
            answer:
              "The test duration depends on soil type and method but typically takes a few hours."
          }
        ]}
      />

      <CTASection title="Permeability Test" />
    </div>
  );
}