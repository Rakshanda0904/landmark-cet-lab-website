"use client";
import ScrollExpandMedia from "./scroll-expand-media";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

export default function AboutSection() {
  return (
    <div id="about">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/assets/video.mp4"
        bgImageSrc="/assets/asset.png"
        title="Engineering Trust"
        scrollToExpand="Scroll down to explore"
      >
        <div className="max-w-6xl mx-auto w-full text-white mt-12">
          {/* Header - small intro */}
          <div className="flex justify-between items-center mb-8 w-full z-10">
            <div className="flex items-center gap-3 text-xl">
              <span className="text-blue-500 animate-pulse text-xs">●</span>
              <span className="text-xs tracking-[0.2em] font-medium text-white/50 uppercase">
                ABOUT LANDMARK LAB
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap lg:justify-start justify-between items-center py-6 text-sm mb-16 border-b border-t border-white/10">
            <div className="flex gap-6 items-center flex-wrap">
              <div className="flex items-center gap-2 sm:text-base text-xs">
                <span className="text-blue-400 font-bold text-xl md:text-2xl">
                  <AnimatedCounter value={15} />+
                </span>
                <span className="text-white/60 tracking-wider">YEARS EXPERTISE</span>
                <span className="text-white/20 mx-2 hidden md:inline">|</span>
              </div>
              <div className="flex items-center gap-2 sm:text-base text-xs">
                <span className="text-purple-400 font-bold text-xl md:text-2xl">
                  <AnimatedCounter value={10000} format={true} />+
                </span>
                <span className="text-white/60 tracking-wider">SAMPLES TESTED</span>
              </div>
            </div>

            <div className="flex lg:flex-row flex-row gap-6 lg:ml-auto mt-4 lg:mt-0 items-center">
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-bold text-xl md:text-2xl">
                  <AnimatedCounter value={1500} format={true} />+
                </span>
                <span className="text-white/60 uppercase tracking-wider text-xs sm:text-base">CLIENTS SERVED</span>
                <span className="text-white/20 mx-2 hidden md:inline">|</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400 font-bold text-xl md:text-2xl">
                  <AnimatedCounter value={800} />+
                </span>
                <span className="text-white/60 tracking-wider text-xs sm:text-base">TEST PARAMETERS</span>
              </div>
            </div>
          </div>


          {/* Main Content */}
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="md:col-span-7 lg:col-span-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl !leading-[1.1] font-bold tracking-tight text-white mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-blue-200">
                Engineering Trust Through Precision Testing
              </h1>

              <div className="grid sm:grid-cols-2 gap-8 text-white/60 mt-12">
                <div className="text-lg leading-relaxed font-light">
                  <p>
                    Landmark Consulting Labs (OPC) Pvt. Ltd. is a leading material testing laboratory specializing in concrete, soil, steel, and structural analysis. We combine advanced equipment with scientific expertise to deliver accurate and reliable results.
                  </p>
                </div>
                <div className="text-lg leading-relaxed font-light">
                  <p>
                    Our process goes beyond surface-level inspection. Through detailed testing and data-driven analysis, we ensure every material meets the highest standards of safety, strength, and performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col pt-4">
              <div className="border border-white/5 bg-white/[0.02] backdrop-blur-md rounded-2xl p-8 relative overflow-hidden group">
                {/* Hover glow effect background layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors duration-700 pointer-events-none" />

                <div className="text-blue-400 text-xs tracking-widest uppercase font-bold mb-4">
                  Comprehensive Analysis
                </div>
                <div className="mb-8">
                  <p className="text-white/90 text-2xl font-light mb-4 leading-snug">
                    Validate your materials with uncompromising scientific precision.
                  </p>
                </div>

                <button className="bg-blue-600/10 hover:bg-blue-600/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] border border-blue-600/20 w-full flex items-center justify-between text-blue-300 px-6 py-4 rounded-xl cursor-pointer font-medium tracking-wide transition-all duration-500 group/btn">
                  <span>View Our Capabilities</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300 text-blue-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}