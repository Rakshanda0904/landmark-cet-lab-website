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
        title="Dynamic load testing"
        subtitle="Evaluating pile load capacity through dynamic impact analysis."
      />
      <TestOverview
        description="Dynamic Load Testing is a high-strain testing method used to assess the load-bearing capacity and structural performance of foundation piles by applying controlled impact forces and analyzing pile response data."
        importance="This test is conducted to determine the actual load capacity and driving performance of foundation piles."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop"
        safety="Ensures foundation piles can safely withstand design loads without structural failure or excessive settlement."
      />
      <ProcessTimeline
        steps={[
          { id: 1, title: "Sensor Installation", description: "Strain transducers and accelerometers are mounted on the pile surface to record impact data." },
          { id: 2, title: "Equipment Calibration", description: "Testing instruments are calibrated to ensure accurate measurement and signal capture." },
          { id: 3, title: "Impact Application", description: "A controlled hammer impact is applied to the pile head to generate stress waves." },
          { id: 4, title: "Data Acquisition", description: "Wave signals generated during impact are recorded using specialized monitoring equipment." },
          { id: 5, title: "Analysis & Reporting", description: "Engineers analyze the collected data to calculate pile capacity, stresses, and integrity." }
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
          { question: "How long does the test take?", answer: "Testing is usually completed quickly, often within a few hours depending on site conditions." },
          { question: "What types of piles can be tested?", answer: "The test can be used for concrete, steel, timber, and composite foundation piles." },
          { question: "How accurate is Dynamic Load Testing?", answer: "When properly conducted and analyzed, it provides highly reliable estimates of pile capacity" },
          { question: "What parameters are measured during the test?", answer: "The test measures force, velocity, stress, displacement, and pile capacity." },
        ]}
      />
      <CTASection title="Dynamic load testing" />
    </div>
  );
}
