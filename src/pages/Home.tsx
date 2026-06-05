import { LabScrollAnimation } from '../components/LabScrollAnimation';
import AboutSection from '../components/ui/AboutSection';
import Services from '../components/ui/services-hover';
import ProjectsSection from '../components/blocks/projects-section';
import CertificationsSection from '../components/blocks/certifications-section';
import { StaggerTestimonials } from '../components/ui/stagger-testimonials';
import ContactSection from '../components/ui/contact';
import LogosMarquee from '../components/blocks/logos3';

export default function Home() {
  return (
    <>
      <LabScrollAnimation />
      <AboutSection />
      <Services />
      <ProjectsSection />
      <CertificationsSection />
      <StaggerTestimonials />
      <LogosMarquee />
      <ContactSection />
    </>
  );
}

