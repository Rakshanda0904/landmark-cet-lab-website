import { motion } from 'framer-motion';
import { ArrowRight, Download, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
}

export default function CTASection({ title }: CTASectionProps) {
  return (
    <section className="py-24 bg-[#0a0f16] relative z-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 backdrop-blur-md shadow-2xl text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to test your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{title}</span>?
          </h2>
          <p className="text-lg text-white/60 font-light mb-12 max-w-2xl mx-auto">
            Get accurate, NABL-accredited results with our state-of-the-art testing facility. Schedule a consultation or book your test today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Book a Test
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600/20 text-blue-400 font-semibold rounded-full flex items-center justify-center gap-2 border border-blue-500/30 hover:bg-blue-600/30 transition-colors"
              >
                Request Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white/80 font-semibold rounded-full flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 transition-colors mt-4 sm:mt-0">
              <Download className="w-5 h-5" />
              Tech Sheet
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
