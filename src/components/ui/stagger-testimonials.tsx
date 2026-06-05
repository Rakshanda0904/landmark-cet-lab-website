"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Their NABL accredited facility provided us with the most accurate concrete mix design we've ever used.",
    by: "Rajesh, Project Manager at L&T Construction",
  },
  {
    tempId: 1,
    testimonial: "The pile integrity tests were handled with extreme professionalism. We trust Landmark for all our marine projects.",
    by: "Siddharth, Lead Engineer at Afcons Infrastructure",
  },
  {
    tempId: 2,
    testimonial: "Accuracy and zero delays. Their chemical analysis reports for our steel reinforcements were impeccable.",
    by: "Ananya, Quality Lead at Shapoorji Pallonji",
  },
  {
    tempId: 3,
    testimonial: "Landmark's soil investigation gave our architects the confidence to design a robust foundation for the new bridge.",
    by: "Vikram, Structural Consultant at MVR",
  },
  {
    tempId: 4,
    testimonial: "NABL certification matters to us. Their service standards in accordance with ISO 9001:2015 are world-class.",
    by: "Meera, Operations Head at Adani Infrastructure",
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border p-8 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
        "flex flex-col justify-center", // Added flex for automatic spacing
        isCenter
          ? "z-30 bg-blue-900/60 backdrop-blur-xl text-white border-blue-500/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          : "z-10 bg-white/[0.03] backdrop-blur-sm text-white border-white/5 opacity-30 hover:opacity-50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize * 0.85) * position}px)
          translateY(${isCenter ? -40 : (Math.abs(position) * 15) * (position % 2 ? 1 : -1)}px)
          rotate(${isCenter ? 0 : position * 2}deg)
          scale(${isCenter ? 1.1 : Math.max(0.8, 1 - Math.abs(position) * 0.1)})
        `,
      }}
    >
      <span
        className={cn(
          "absolute block origin-top-right rotate-45",
          isCenter ? "bg-blue-500/50" : "bg-white/10"
        )}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />

      <div className="space-y-6"> {/* Container to manage flow spacing */}
        <h3 className={cn(
          "text-lg sm:text-xl font-medium tracking-tight leading-relaxed",
          isCenter ? "text-white" : "text-white/80"
        )}>
          "{testimonial.testimonial}"
        </h3>

        <p className={cn(
          "text-sm md:text-base font-semibold tracking-wide border-l-2 pl-3 transition-colors",
          isCenter ? "text-blue-300 border-blue-400" : "text-blue-400/40 border-white/10"
        )}>
          — {testimonial.by}
        </p>
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section id="testimonials" className="relative w-full overflow-hidden bg-[#05070a] border-t border-white/5 py-12 h-[750px]">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-20 w-full px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-blue-500 animate-pulse text-xs">●</span>
          <span className="text-blue-400 uppercase tracking-widest text-sm font-bold">TESTIMONIALS</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Trusted by Industry Giants
        </h2>
        <p className="text-white/60 mt-4 md:text-lg max-w-2xl mx-auto">
          Providing high-quality testing services for major infrastructure projects since 2012.
        </p>
      </div>

      <div className="relative w-full h-[500px] mt-32">
        {testimonialsList.map((testimonial, index) => {
          const position = index - Math.floor(testimonialsList.length / 2);
          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
      </div>

      <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-4 z-40">
        <button
          onClick={() => handleMove(-1)}
          className="flex h-14 w-14 items-center justify-center text-white/50 bg-white/5 border border-white/10 rounded-full hover:bg-blue-600/20 hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-xl"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="flex h-14 w-14 items-center justify-center text-white/50 bg-white/5 border border-white/10 rounded-full hover:bg-blue-600/20 hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-xl"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};