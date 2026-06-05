import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Award, ChevronDown } from 'lucide-react';
import TubesCursor from '../ui/tubes-cursor';

interface TestHeroProps {
  title: string;
  subtitle: string;
}

export default function TestHero({ title, subtitle }: TestHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#030407]">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <TubesCursor>
          {/* Empty fragment to disable default TubesCursor text */}
          <></>
        </TubesCursor>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#030407]/40 to-[#05070a] z-10 pointer-events-none" />
      </motion.div>

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 mb-6"
        >
          <Award className="w-5 h-5 text-blue-400" />
          <span className="text-blue-400 uppercase tracking-[0.2em] text-sm font-bold">
            NABL Accredited Testing
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-blue-200 mb-6 max-w-5xl leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/60 font-light max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 uppercase tracking-widest text-xs font-semibold">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-blue-400/80" />
        </motion.div>
      </motion.div>
    </div>
  );
}
