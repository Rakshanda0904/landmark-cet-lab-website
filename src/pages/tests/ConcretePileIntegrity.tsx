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
        title="Concrete Pile Integrity Test"
        subtitle="Ensuring the strength and continuity of deep foundation piles."
      />
      <TestOverview
        description="The Concrete Pile Integrity Test is a non-destructive testing method used to evaluate the structural integrity and continuity of foundation piles. It helps identify defects such as cracks, voids, necking, or changes in pile geometry."
        importance="This test is conducted to verify the quality and integrity of foundation piles before structural loading."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop"
        safety="Ensures that hidden pile defects do not compromise the stability and safety of the structure."
      />
      <ProcessTimeline
        steps={[
          { id: 1, title: "Surface Preparation", description: "Pile head is cleaned and prepared for accurate signal transmission" },
          { id: 2, title: "Sensor Placement", description: "A sensor or accelerometer is attached to the pile head to record wave responses." },
          { id: 3, title: "Impact Generation", description: "The pile head is lightly struck using a handheld hammer to generate stress waves." },
          { id: 4, title: "Wave Monitoring", description: "Reflected wave signals are captured and analyzed using specialized equipment." },
          { id: 5, title: "Data Interpretation", description: "Engineers evaluate the wave patterns to detect defects or irregularities within the pile." }
        ]}
      />
      <EquipmentCarousel
        equipmentList={[
          { name: "Digital Load Cell", image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop", description: "High-capacity digital load cell for precise force measurement." },
          { name: "LVDT Sensors", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop", description: "Linear Variable Differential Transformers for measuring displacement." },
        ]}
      />
      <TechnicalSpecs
        specs={[
          { label: "Standard Codes", value: "IS 2911 (Part 4), ASTM D1143" },
          { label: "Accuracy", value: "±0.5% of Applied Load" },
        ]}
      />
      <TestGallery
        images={[
          "https://images.unsplash.com/photo-1541888087545-d729d3c19e53?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop",
        ]}
      />
      <FAQAccordion
        faqs={[
          { question: "When is the test performed?", answer: "The test is generally conducted after pile construction and before structural loading." },
          { question: "What defects can this test identify?", answer: "t can identify cracks, voids, necking, honeycombing, and changes in pile cross-section." },
          { question: "How long does the test take?", answer: "Most pile integrity tests can be completed within a few minutes per pile." },
          { question: "Can all piles be tested?", answer: "Yes, the test is suitable for most concrete foundation piles used in construction projects." },
        ]}
      />
      <CTASection title="Concrete Pile Integrity Test" />
    </div>
  );
}
