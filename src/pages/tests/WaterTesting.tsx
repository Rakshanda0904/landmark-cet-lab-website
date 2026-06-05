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
        title="Water testing"
        subtitle="Advanced structural analysis and integrity verification using NABL-accredited methodologies."
      />
      <TestOverview 
        description="The Water testing is a critical procedure used to evaluate the structural integrity, capacity, and safety of construction materials. Using high-precision equipment, we deliver accurate insights that guide engineering decisions and ensure compliance with strict industry standards."
        importance="Identifying defects or weaknesses early in the construction phase prevents costly repairs and structural failures in the future."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop"
      />
      <ProcessTimeline 
        steps={[
          { id: 1, title: "Site Preparation", description: "Our team secures the testing area and calibrates all necessary equipment according to standard protocols." },
          { id: 2, title: "Sensor Installation", description: "High-precision sensors and gauges are strategically placed on the subject material to capture real-time data." },
          { id: 3, title: "Load Application", description: "Controlled forces are applied incrementally, simulating real-world stress conditions." },
          { id: 4, title: "Data Acquisition", description: "Continuous monitoring records the material's response, identifying yield points and potential defects." },
          { id: 5, title: "Analysis & Reporting", description: "Data is analyzed in our lab to generate a comprehensive NABL-accredited technical report." }
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
          { question: "How long does the testing process take?", answer: "Depending on the scale and type of test, field execution typically takes 1-3 days, followed by 2 days for comprehensive data analysis and report generation." },
          { question: "Are your reports accepted by government authorities?", answer: "Yes, our NABL-accredited reports are widely accepted by PWD, Zilla Parishad, Municipal Corporations, and other regulatory bodies." },
        ]} 
      />
      <CTASection title="Water testing" />
    </div>
  );
}
