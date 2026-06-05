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
        title="Bridge Load Test"
        subtitle="Verifying bridge strength, stability, and real-world load performance."
      />
      <TestOverview
        description="The Bridge Load Test is conducted to evaluate the structural behavior, load-carrying capacity, and overall performance of a bridge under controlled loading conditions. The test helps confirm that the bridge performs safely as per design specifications."
        importance="This test is conducted to verify the safety, strength, and serviceability of bridge structures before or during operation."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop"
        safety="Ensures the bridge can safely support design loads, traffic conditions, and environmental forces throughout its lifespan."
      />
      <ProcessTimeline
        steps={[
          { id: 1, title: "Test Planning & Inspection", description: "The bridge structure is inspected and testing locations are finalized before loading begins." },
          { id: 2, title: "Instrument Installation", description: "Sensors, strain gauges, and displacement measuring devices are installed to monitor structural response." },
          { id: 3, title: "Controlled Load Placement", description: "Predefined test loads such as trucks or concrete blocks are positioned on the bridge." },
          { id: 4, title: "Structural Monitoring", description: "Deflection, strain, vibration, and structural behavior are continuously recorded during loading." },
          { id: 5, title: "Data Analysis & Reporting", description: "Engineers analyze test results to evaluate bridge performance and structural safety." }
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
          { question: "What types of bridges can be tested?", answer: "Concrete, steel, cable-stayed, girder, and composite bridges can all undergo load testing." },
          { question: "How is the bridge loaded during testing?", answer: "Controlled loads are applied using vehicles, weights, or hydraulic systems." },
          { question: "Is the test safe for the bridge?", answer: "Yes, the test is carefully planned and performed within safe loading limits." },
          { question: "What parameters are measured during the test?", answer: "Deflection, strain, vibration, settlement, and structural response are commonly measured." },
          { question: "When is bridge load testing performed?", answer: "It is usually conducted after construction, during rehabilitation, or for periodic structural assessment." },
        ]}
      />
      <CTASection title="Bridge Load Test" />
    </div>
  );
}
