"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { ZoomIn, X, Award, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

type Certificate = {
  id: string;
  title: string;
  authority: string;
  image: string;
  tag?: string;
};

const certificates: Certificate[] = [
  {
    id: "1",
    title: "NABL Accreditation",
    authority: "National Accreditation Board for Testing and Calibration",
    image: "/assets/nabl.jpg",
  },
  {
    id: "2",
    title: "Zilla Parishad Approval",
    authority: "Maharashtra Zilla Parishad",
    image: "/assets/zp.jpg"
  },
  {
    id: "3",
    title: "BMC Approval",
    authority: "Brihanmumbai Municipal Corporation",
    image: "/assets/bmc.jpg"
  },
  {
    id: "4",
    title: "PWD Approval",
    authority: "State PWD Department",
    image: "/assets/pwd.jpg"
  },
  {
    id: "5",
    title: "CIDCO Approval",
    authority: "City and Industrial Development Corporation",
    image: "/assets/cidco.jpg"
  },
  {
    id: "6",
    title: "VVCMC Approval",
    authority: "Vasai-Virar City Municipal Corporation",
    image: "/assets/vvcmc.jpg"
  },
];

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Maximum number of visible items on large screens
  const itemsPerPage = 4;

  const nextSlide = () => {
    if (currentIndex < certificates.length - itemsPerPage) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Close modal on escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Framer Motion variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  // Dynamic slice to only display current window of certificates
  const visibleCertificates = certificates.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="certifications" className="py-24 bg-[#05070a] relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header Section with Navigation Control Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 max-w-7xl mx-auto gap-6">
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 uppercase mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Certifications & Approvals
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-blue-200 drop-shadow-[0_0_30px_rgba(59,130,246,0.15)] max-w-2xl">
                Recognized by Leading Authorities
              </h3>
            </motion.div>
          </div>

          {/* Slider Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-3 rounded-xl border border-white/10 transition-all duration-300 bg-[#0a0f16] text-white dynamic-button
                ${currentIndex === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-blue-500/10 hover:border-blue-500/40 hover:text-blue-400"
                }`}
              aria-label="Previous certificates"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= certificates.length - itemsPerPage}
              className={`p-3 rounded-xl border border-white/10 transition-all duration-300 bg-[#0a0f16] text-white dynamic-button
                ${currentIndex >= certificates.length - itemsPerPage
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-blue-500/10 hover:border-blue-500/40 hover:text-blue-400"
                }`}
              aria-label="Next certificates"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Grid Layout Wrapper */}
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {visibleCertificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative flex flex-col cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f16] shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                  onClick={() => setSelectedCert(cert)}
                >
                  {/* Image Thumbnail */}
                  <div className="aspect-[4/3] w-full overflow-hidden relative bg-white/5">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16] via-transparent to-transparent opacity-90" />

                    {/* Zoom Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-blue-500/80 backdrop-blur-sm p-3 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Badge */}
                    {cert.tag && (
                      <div className="absolute top-4 left-4 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-md shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {cert.tag}
                      </div>
                    )}
                  </div>

                  {/* Content (Removed year/validity metadata footer) */}
                  <div className="flex flex-col p-6 flex-1 justify-center min-h-[140px]">
                    <h4 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400 mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed">
                      {cert.authority}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
              onClick={() => setSelectedCert(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-[#0a0f16] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header without the validity badge */}
              <div className="bg-white/5 p-6 md:px-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{selectedCert.title}</h3>
                  <p className="text-blue-400 text-sm font-medium">{selectedCert.authority}</p>
                </div>
              </div>
              <div className="flex-1 overflow-auto bg-[#030407] p-4 md:p-8 flex justify-center items-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[60vh] object-contain rounded-lg border border-white/5"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
