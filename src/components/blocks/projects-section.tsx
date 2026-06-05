import { ProjectCard } from "@/components/ui/project-card";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 bg-[#05070a] border-y border-white/5 relative z-10"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 uppercase mb-4">
            OUR PROJECTS
          </h2>

          <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-blue-200 drop-shadow-[0_0_30px_rgba(59,130,246,0.15)] max-w-2xl">
            Landmark Projects
          </h3>

          <p className="mt-6 text-gray-400 max-w-2xl">
            Supporting India's next generation of transportation, maritime,
            and infrastructure development through advanced material testing
            and engineering consultancy services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">

          <ProjectCard
            title="Mumbai–Ahmedabad Bullet Train Project"
            description="Material testing and quality assurance services provided for India's first high-speed rail corridor under NHSRCL (National High Speed Rail Corporation Limited), ensuring compliance with stringent engineering and construction standards."
            imgSrc="/assets/projects/bullet-train.jpg"
            link="#"
            linkText="View Project"
          />

          <ProjectCard
            title="Vadhvan Port Project"
            description="Comprehensive construction material testing and laboratory services for the Vadhvan Port development project under VPPL (Vadhvan Port Project Ltd.), supporting one of India's largest upcoming deep-sea port developments."
            imgSrc="/assets/projects/vadhvan-port.jpg"
            link="#"
            linkText="View Project"
          />

          <ProjectCard
            title="Infrastructure Testing & Consultancy"
            description="Delivering soil investigation, concrete testing, highway engineering, non-destructive testing, and geotechnical consultancy services across major public and private infrastructure projects."
            imgSrc="/assets/bridge%20load/one.jpeg"
            link="#"
            linkText="Our Services"
          />
        </div>
      </div>
    </section>
  );
}