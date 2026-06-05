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
        title="Non-Destructive Testing (NDT)"
        subtitle="Assessing material integrity and structural safety without causing damage to the component."
      />

      <TestOverview
        description="Non-Destructive Testing (NDT) refers to a range of techniques used to evaluate the properties, integrity, and internal condition of materials and structures without causing any damage. It is widely used in construction, civil engineering, and industrial quality control."
        importance="This test is conducted to detect hidden defects and ensure structural reliability without damaging the component."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop"
        safety="Ensures structural safety by identifying flaws early while keeping the material intact and usable."
      />

      <ProcessTimeline
        steps={[
          {
            id: 1,
            title: "Surface Inspection",
            description:
              "The structure is visually examined to identify accessible defects and testing zones."
          },
          {
            id: 2,
            title: "Equipment Setup",
            description:
              "Appropriate NDT equipment such as ultrasonic or rebound hammer devices is calibrated and prepared."
          },
          {
            id: 3,
            title: "Test Execution",
            description:
              "Non-destructive methods such as ultrasonic pulse velocity, rebound hammer, or radiography are applied."
          },
          {
            id: 4,
            title: "Data Collection",
            description:
              "Signals, readings, or imaging data are recorded for analysis of internal conditions."
          },
          {
            id: 5,
            title: "Result Interpretation",
            description:
              "Engineers analyze results to identify cracks, voids, or inconsistencies in the material."
          }
        ]}
      />

      <EquipmentCarousel
        equipmentList={[
          {
            name: "Ultrasonic Pulse Velocity Tester",
            image:
              "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used to detect internal flaws and measure material quality using ultrasonic waves."
          },
          {
            name: "Rebound Hammer",
            image:
              "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
            description:
              "Measures surface hardness of concrete to estimate compressive strength."
          }
        ]}
      />

      <TechnicalSpecs
        specs={[
          { label: "Standard Codes", value: "IS 13311 (Part 1 & 2), ASTM C597" },
          { label: "Test Type", value: "Non-Destructive Evaluation (NDE)" },
          { label: "Application", value: "Concrete, Steel & Structural Elements" },
          { label: "Purpose", value: "Detection of Internal Defects & Quality Assessment" }
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
            question: "What is Non-Destructive Testing (NDT)?",
            answer:
              "It is a method used to evaluate material properties and detect defects without damaging the structure."
          },
          {
            question: "Why is NDT important?",
            answer:
              "It helps ensure structural safety and quality without affecting the usability of the material."
          },
          {
            question: "What methods are used in NDT?",
            answer:
              "Common methods include ultrasonic testing, rebound hammer, radiography, and magnetic particle testing."
          },
          {
            question: "Where is NDT used?",
            answer:
              "It is widely used in construction, bridges, pipelines, aerospace, and industrial structures."
          },
          {
            question: "Is NDT safe for structures?",
            answer:
              "Yes, NDT is completely non-invasive and does not damage the structure being tested."
          },
          {
            question: "What defects can NDT detect?",
            answer:
              "It can detect cracks, voids, corrosion, honeycombing, and material inconsistencies."
          },
          {
            question: "How long does NDT take?",
            answer:
              "The duration depends on the method and structure size, but most tests are completed within a few hours."
          }
        ]}
      />

      <CTASection title="Non-Destructive Testing (NDT)" />
    </div>
  );
}