import { Macbook } from './animated-3d-mac-book-air';

export default function MacbookShowcase() {
  return (
    <section className="relative w-full py-24 bg-[#05070a] border-t border-white/5 overflow-hidden flex flex-col items-center justify-center">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-3 text-xl mb-4">
          <span className="text-blue-500 animate-pulse text-xs">●</span>
          <span className="text-xs tracking-[0.2em] font-medium text-white/50 uppercase">
            State-of-the-Art Analysis
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-20 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-blue-200">
          Precision Digital Infrastructure
        </h2>

        {/* Macbook Wrapper */}
        <div className="relative w-[300px] h-[220px] flex items-center justify-center scale-125 sm:scale-[1.5] md:scale-[2] lg:scale-[2.2] transition-transform duration-500">
          <Macbook />
        </div>
      </div>
    </section>
  );
}
