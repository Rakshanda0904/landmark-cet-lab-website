import { motion } from 'framer-motion';

interface Spec {
  label: string;
  value: string;
}

interface TechnicalSpecsProps {
  specs: Spec[];
}

export default function TechnicalSpecs({ specs }: TechnicalSpecsProps) {
  return (
    <section className="py-24 bg-[#0a0f16] relative z-10 border-b border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-blue-400 uppercase mb-4"
          >
            Specifications
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-blue-200"
          >
            Technical Details
          </motion.h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {specs.map((spec, index) => (
              <div 
                key={index}
                className="p-6 md:p-8 hover:bg-white/[0.02] transition-colors"
              >
                <p className="text-sm text-blue-400/80 font-medium mb-2 uppercase tracking-wider">{spec.label}</p>
                <p className="text-lg md:text-xl text-white font-light">{spec.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
