import { motion } from 'framer-motion';

interface Step {
  id: number;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: Step[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <section className="py-24 bg-[#0a0f16] relative z-10 border-b border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-blue-400 uppercase mb-4"
          >
            Methodology
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-blue-200"
          >
            How the Test is Performed
          </motion.h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 md:-translate-x-1/2 hidden sm:block" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col sm:flex-row items-start md:items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Number Circle */}
                <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 w-12 h-12 -translate-x-1/2 md:-translate-y-1/2 bg-[#0a0f16] border border-blue-500/30 rounded-full flex items-center justify-center text-blue-400 font-bold text-xl z-10 shadow-[0_0_15px_rgba(59,130,246,0.2)] hidden sm:flex">
                  {step.id}
                </div>

                {/* Mobile Number (shown when line is hidden) */}
                <div className="w-10 h-10 shrink-0 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-400 font-bold sm:hidden">
                  {step.id}
                </div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h4 className="text-2xl font-semibold text-white mb-4">
                    {step.title}
                  </h4>
                  <p className="text-white/60 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Empty space for alternate layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
