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
        title="Soil Testing"
        subtitle="Evaluating soil properties to ensure safe, stable, and efficient foundation design."
      />

      <TestOverview
        description="Soil Testing is a geotechnical investigation process used to determine the physical and engineering properties of soil. It helps engineers understand soil behavior under load and ensures safe foundation design for construction projects."
        importance="This test is conducted to determine soil strength, composition, and suitability for construction."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2022&auto=format&fit=crop"
        safety="Ensures that soil conditions are suitable to safely support structural loads without excessive settlement or failure."
      />

      <ProcessTimeline
        steps={[
          {
            id: 1,
            title: "Site Investigation",
            description:
              "The site is surveyed and borehole locations are marked for soil sampling."
          },
          {
            id: 2,
            title: "Soil Sampling",
            description:
              "Soil samples are collected from different depths using drilling or excavation methods."
          },
          {
            id: 3,
            title: "Laboratory Testing",
            description:
              "Samples are analyzed in the lab for properties like moisture content, density, and shear strength."
          },
          {
            id: 4,
            title: "Field Testing",
            description:
              "In-situ tests such as SPT or plate load tests are conducted to assess soil behavior."
          },
          {
            id: 5,
            title: "Report Analysis",
            description:
              "All collected data is analyzed to prepare a detailed geotechnical investigation report."
          }
        ]}
      />

      <EquipmentCarousel
        equipmentList={[
          {
            name: "Standard Penetration Test (SPT) Kit",
            image:
              "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used to determine soil resistance and in-situ strength characteristics."
          },
          {
            name: "Soil Sampling Auger",
            image:
              "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
            description:
              "Used for extracting soil samples from different depths."
          }
        ]}
      />

      <TechnicalSpecs
        specs={[
          { label: "Standard Codes", value: "IS 2720, ASTM D420" },
          { label: "Test Type", value: "Geotechnical Investigation" },
          { label: "Application", value: "Buildings, Roads & Infrastructure" },
          { label: "Purpose", value: "Soil Strength & Suitability Analysis" }
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
            question: "What is Soil Testing?",
            answer:
              "It is a geotechnical process used to determine the physical and engineering properties of soil."
          },
          {
            question: "Why is soil testing important?",
            answer:
              "It ensures that the soil can safely support the proposed structure."
          },
          {
            question: "What properties are tested in soil testing?",
            answer:
              "Moisture content, density, shear strength, compaction, and bearing capacity are commonly tested."
          },
          {
            question: "Where is soil testing used?",
            answer:
              "It is used in buildings, roads, bridges, dams, and all types of infrastructure projects."
          },
          {
            question: "Is soil testing done in the field or lab?",
            answer:
              "It involves both field and laboratory testing for accurate results."
          },
          {
            question: "What is SPT in soil testing?",
            answer:
              "SPT (Standard Penetration Test) is a field test used to measure soil resistance and strength."
          },
          {
            question: "How long does soil testing take?",
            answer:
              "The duration depends on project size but typically ranges from a few days to a week."
          }
        ]}
      />

      <CTASection title="Soil Testing" />
    </div>
  );
}