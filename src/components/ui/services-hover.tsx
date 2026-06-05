"use client";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    color: "#0a0f16",
    src: "/assets/pile-integrity-test.png",
    title: "Concrete Pile Integrity Test",
    description: "Provides information about continuity, defects such as cracks, necking, soil incursions, etc",
  },
  {
    color: "#0c121b",
    src: "/assets/dynamic-load-testing.png",
    title: "Dynamic load testing",
    description: "Method to assess a pile's bearing capacity by applying a dynamic load to the pile head while recording acceleration and strain on the pile",
  },
  {
    color: "#0c121b",
    src: "/assets/lateral-load-test.png",
    title: "Pile Lateral Load Test",
    description: "Method used to assess the behaviour and capacity of deep foundation piles under horizontal or lateral loads",
  },
  {
    color: "#0c121b",
    src: "/assets/bridge-load-test.png",
    title: "Bridge Load Test",
    description: "Carried out for the purpose of the evaluation of the load carrying capacity of an existing bridge",
  },
  {
    color: "#0f1621",
    src: "/assets/load-test.png",
    title: "Plate Load Testing",
    description: "Performed to determine the ultimate bearing capacity of the soil and the probable settlement under a given load",
  },
  {
    color: "#0f1621",
    src: "/assets/static-load-test.png",
    title: "Static Load Test",
    description: "Measure the response of a pile under an applied load and are among the methods for determining pile capacities",
  },
  {
    color: "#0f1621",
    src: "/assets/anchor-pullout-test.png",
    title: "Anchor Pullout Test",
    description: "A procedure that evaluates the strength of an anchor installation and its ability to resist pull out forces",
  },
  {
    color: "#111827",
    src: "/assets/EV2-Load-Test.png",
    title: "EV2 Load Testing",
    description: "A pavement testing instrument that measures the settlement value of roadbeds under static load",
  },
  {
    color: "#161e2e",
    src: "/assets/ndt-test.png",
    title: "NDT testing",
    description: "USPV, R.Hammer, Halfcell, Carbonation, Water",
  },
  {
    color: "#161e2e",
    src: "/assets/soil-test.png",
    title: "Soil Testing",
    description: "Required to evaluate an area for the construction of a project or evaluate local material as a construction material",
  },
  {
    color: "#161e2e",
    src: "/assets/spt-test.png",
    title: "SPT Testing",
    description: "Used to determine the relative density, bearing capacity, and settlement of granular soil",
  },
  {
    color: "#161e2e",
    src: "/assets/permeability-test.png",
    title: "Permeability Test",
    description: "Evaluate how well concrete resists water penetration",
  },
  {
    color: "#161e2e",
    src: "/assets/marshal-stability-test.png",
    title: "Marshal Stability Test",
    description: "Performance prediction measure conducted on the bituminous mix",
  },
  {
    color: "#161e2e",
    src: "/assets/ductility-test.png",
    title: "Ductility Test",
    description: "Measures the distance in centimetres to which a binder sample could be elongated before breaking at a specific speed and temperature",
  },
  {
    color: "#161e2e",
    src: "/assets/aggregate-test.png",
    title: "Aggregate Testing",
    description: "Evaluates the physical and chemical properties of construction materials to ensure they meet required standards for strength, durability, and performance",
  },
  {
    color: "#161e2e",
    src: "/assets/cement-test.png",
    title: "Cement Testing",
    description: "Systematic evaluation of physical, chemical, and performance properties such as strength, setting time, fineness, and soundness",
  },
  {
    color: "#161e2e",
    src: "/assets/chemical-test.png",
    title: "Chemical Testing",
    description: "Testing of aggregates, soils, water needed in construction",
  },
  {
    color: "#161e2e",
    src: "/assets/concrete-mix-design.png",
    title: "Concrete Mix Design",
    description: "Preparation of a mix of ingredients to create the required strength and durability for the concrete structure",
  },
  {
    color: "#161e2e",
    src: "/assets/building-material-test.png",
    title: "Building Material Testing",
    description: "Testing of materials involved in construction projects",
  },
  {
    color: "#161e2e",
    src: "/assets/water-test.png",
    title: "Water Testing",
    description: "Testing of Construction and Drinking Water",
  },
];

const scaleAnimation = {
  closed: {
    scale: 0,
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] as [number, number, number, number] },
    x: "-50%",
    y: "-50%",
  },
  enter: {
    scale: 1,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
    x: "-50%",
    y: "-50%",
  },
  initial: { scale: 0, x: "-50%", y: "-50%" },
};

export default function Services() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div id="services" className="py-24 overflow-hidden bg-[#05070a] text-white border-t border-white/5 relative z-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 uppercase tracking-widest text-sm font-bold">NABL Accredited</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-blue-200">
              Testing Modules
            </h2>
          </div>
          <p className="max-w-md font-light text-white/60 text-lg">
            Providing thorough examined analyses for building materials, soil,
            steel, and water under one roof with uncompromised accuracy.
          </p>
        </div>

        {/* Desktop List Area */}
        <div className="relative flex items-center justify-center min-h-[500px]">
          <div className="flex w-full flex-col items-center justify-center">
            {projects.map((project, index) => (
              <Project
                index={index}
                key={project.title}
                setModal={setModal}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>

          {/* Modal Overlay explicitly hidden on touch/mobile */}
          <div className="hidden md:block">
            <Modal modal={modal} projects={projects} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Project({ index, title, description, setModal }: any) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    const slug = title.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
    navigate(`/tests/${slug}`);
  };

  return (
    <div
      className="group flex w-full cursor-pointer flex-col md:flex-row items-start md:items-center justify-between border-t border-white/10 px-4 py-8 md:py-10 transition-all duration-300 last:border-b hover:bg-white/[0.02]"
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      onClick={handleNavigate}
    >
      <h2 className="m-0 font-medium text-3xl md:text-5xl transition-transform duration-500 md:group-hover:-translate-x-4 text-white/90 group-hover:text-white">
        {title}
      </h2>
      <p className="font-light text-blue-300/80 mt-2 md:mt-0 transition-transform duration-500 md:group-hover:translate-x-4 text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}

function Modal({ modal, projects }: any) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    // Check if device supports hover and pointer correctly
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });
    const xMoveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      xMoveContainer(clientX);
      yMoveContainer(clientY);
      xMoveCursor(clientX);
      yMoveCursor(clientY);
      xMoveCursorLabel(clientX);
      yMoveCursorLabel(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        animate={active ? "enter" : "closed"}
        className="pointer-events-none fixed z-[50] flex h-[350px] w-[400px] items-center justify-center overflow-hidden shadow-2xl shadow-blue-500/10 rounded-lg"
        initial="initial"
        ref={modalContainer}
        variants={scaleAnimation}
      >
        <div
          className="absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ top: `${index * -100}%` }}
        >
          {projects.map((project: any) => (
            <div
              className="flex h-full w-full items-center justify-center relative"
              key={project.title}
              style={{ backgroundColor: project.color }}
            >
              <img
                alt={project.title}
                className="object-cover w-full h-full absolute inset-0 opacity-80"
                src={project.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070a]/50 to-transparent mix-blend-overlay"></div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        animate={active ? "enter" : "closed"}
        className="pointer-events-none fixed z-[60] flex h-20 w-20 items-center justify-center rounded-full bg-blue-500"
        initial="initial"
        ref={cursor}
        variants={scaleAnimation}
        style={{
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
        }}
      />
      <motion.div
        animate={active ? "enter" : "closed"}
        className="pointer-events-none fixed z-[60] flex h-20 w-20 items-center justify-center rounded-full bg-transparent text-white font-bold tracking-wider text-xs uppercase"
        initial="initial"
        ref={cursorLabel}
        variants={scaleAnimation}
      >
        Explore
      </motion.div>
    </>
  );
}
