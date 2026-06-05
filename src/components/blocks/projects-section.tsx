import { ProjectCard } from "@/components/ui/project-card";

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-[#05070a] border-y border-white/5 relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 uppercase mb-4">
            OUR PROJECTS
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-blue-200 drop-shadow-[0_0_30px_rgba(59,130,246,0.15)] max-w-2xl">
            Recent Case Studies
          </h3>
        </div>
        
        <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <ProjectCard
            title="Aero Landing Page"
            description="A comprehensive AI chatbot platform. This project focuses on the design and development of a user-friendly and visually appealing landing page."
            imgSrc="https://framerusercontent.com/images/hynA7mpUiyBRDcssvVKCDBT14IM.jpg"
            link="#"
          />
          <ProjectCard
            title="Dreamland App Concept"
            description="A dreamy mobile app prototype designed for mindfulness and relaxation, featuring calming animations and a serene user interface."
            imgSrc="https://framerusercontent.com/images/D4M3JTkvSAJaqyRe9AzUnHvL8Ao.jpg"
            link="#"
            linkText="Explore Concept"
          />
          <ProjectCard
            title="Quantum Analytics Dashboard"
            description="A data visualization tool for quantum computing experiments, providing real-time insights and complex data analysis."
            imgSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            link="#"
          />
        </div>
      </div>
    </section>
  );
}
