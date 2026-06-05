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
        title="Pile Lateral Load Test"
        subtitle="Assessing pile resistance against horizontal structural forces."
      />
      <TestOverview
        description="The Pile Lateral Load Test is conducted to evaluate the ability of foundation piles to resist lateral forces and horizontal movements caused by wind, seismic activity, earth pressure, or structural loads."
        importance="This test is conducted to determine the lateral load capacity and deflection behavior of foundation piles."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop"
        safety="Ensures the foundation system can safely resist horizontal forces and maintain structural stability."
      />
      <ProcessTimeline
        steps={[
          { id: 1, title: "Test Setup Preparation", description: "Reaction systems, loading arrangements, and measuring instruments are installed at the test location." },
          { id: 2, title: "Instrument Installation", description: "Dial gauges and displacement sensors are positioned to measure pile movement accurately." },
          { id: 3, title: "Load Application", description: "Lateral loads are applied incrementally using hydraulic jacks in controlled stages." },
          { id: 4, title: "Deflection Monitoring", description: "Pile displacement and behavior are continuously monitored during each loading stage." },
          { id: 5, title: "Data Analysis & Evaluation", description: "Recorded readings are analyzed to determine lateral load capacity and pile performance." }
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
          { question: "How long does the testing process take?", answer: "The duration depends on loading stages and project requirements but is typically completed within one day." },
          { question: "What types of structures require this test?", answer: "Bridges, high-rise buildings, marine structures, and industrial foundations commonly require lateral load testing." },
          { question: "How is the load applied during the test?", answer: "Loads are applied horizontally in controlled increments using hydraulic jacks." },
        ]}
      />
      <CTASection title="Pile Lateral Load Test" />
    </div>
  );
}
