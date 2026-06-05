import { motion } from 'framer-motion';
import { Target, ShieldCheck } from 'lucide-react';

interface TestOverviewProps {
  description: string;
  importance: string;
  image: string;
  safety?: string;
}

export default function TestOverview({ description, importance, image, safety = "Ensures compliance with national safety standards and prevents catastrophic structural failures." }: TestOverviewProps) {
  return (
    <section className="py-24 bg-[#05070a] relative z-10 border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 uppercase mb-4">
              Overview
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-blue-200 mb-8">
              What is this test?
            </h3>

            <div className="prose prose-invert prose-lg text-white/60 font-light mb-12">
              <p>{description}</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 shrink-0">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Why it Matters</h4>
                  <p className="text-white/60 font-light leading-relaxed">{importance}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20 shrink-0">
                  <ShieldCheck className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Structural Safety</h4>
                  <p className="text-white/60 font-light leading-relaxed">
                    {safety}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative">
              <img
                src={image}
                alt="Test Overview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#05070a]/80 via-transparent to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -inset-4 bg-gradient-to-br from-blue-500/20 to-transparent blur-3xl rounded-full opacity-50" />
            <div className="absolute -left-8 top-1/4 w-px h-32 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent hidden lg:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
