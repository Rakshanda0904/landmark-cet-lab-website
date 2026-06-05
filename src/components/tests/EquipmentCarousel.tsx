import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { motion } from 'framer-motion';

interface Equipment {
  name: string;
  image: string;
  description: string;
}

interface EquipmentCarouselProps {
  equipmentList: Equipment[];
}

export default function EquipmentCarousel({ equipmentList }: EquipmentCarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ speed: 1 }),
  ]);

  return (
    <section className="py-24 bg-[#05070a] relative z-10 border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 uppercase mb-4">
            Technology
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-blue-200">
            Equipment Used
          </h3>
        </motion.div>
      </div>

      <div className="w-full relative" ref={emblaRef}>
        <div className="flex touch-pan-y" style={{ backfaceVisibility: 'hidden' }}>
          {equipmentList.map((item, index) => (
            <div
              key={index}
              className="relative flex-[0_0_80%] sm:flex-[0_0_40%] lg:flex-[0_0_25%] min-w-0 pl-6 lg:pl-8"
            >
              <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f16] shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] h-full">
                <div className="aspect-[4/3] w-full overflow-hidden relative bg-white/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16] via-transparent to-transparent opacity-90" />
                </div>
                <div className="flex flex-col p-6 flex-1">
                  <h4 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-sm text-white/60 font-light flex-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
