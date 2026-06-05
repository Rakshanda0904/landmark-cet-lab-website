import { useEffect, useRef, useState } from 'react';
import { useScroll, useSpring, useTransform, motion, MotionValue } from 'framer-motion';

const TOTAL_FRAMES = 128;

const TextBeat = ({
  progress,
  start,
  end,
  title,
  subtitle,
}: {
  progress: MotionValue<number>;
  start: number;
  end: number;
  title: string;
  subtitle: string;
}) => {
  // Motion polish: Fade
  const opacity = useTransform(
    progress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0]
  );

  // Motion polish: y 20px -> 0
  const y = useTransform(
    progress,
    [start, start + 0.05, end - 0.05, end],
    [20, 0, 0, -20]
  );

  // Motion polish: scale 0.98 -> 1
  const scale = useTransform(
    progress,
    [start, start + 0.05, end - 0.05, end],
    [0.98, 1, 1, 1.02]
  );

  // Motion polish: blur-in
  const filter = useTransform(
    progress,
    [start, start + 0.05, end - 0.05, end],
    ['blur(12px)', 'blur(0px)', 'blur(0px)', 'blur(12px)']
  );

  return (
    <motion.div
      style={{ opacity, y, scale, filter }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none z-10"
    >
      <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight leading-none mb-4 text-transparent bg-clip-text bg-gradient-to-br from-primary via-white to-accent drop-shadow-[0_0_30px_rgba(59,130,246,0.15)] pb-2">
        {title}
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl text-white/50 uppercase tracking-[0.2em] max-w-2xl font-medium mt-2">
        {subtitle}
      </p>
    </motion.div>
  );
};

export const LabScrollAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadedFrames, setLoadedFrames] = useState(0);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  // Preload images
  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = [];

    const preloadNext = (index: number) => {
      if (!isMounted) return;
      if (index >= TOTAL_FRAMES) {
        setImages(loadedImages);
        return;
      }

      const img = new Image();
      const paddedIndex = index.toString().padStart(3, '0');
      img.src = `/sequence/frame_${paddedIndex}.webp`;

      img.onload = () => {
        if (!isMounted) return;
        loadedImages[index] = img;
        setLoadedFrames((prev) => prev + 1);
        preloadNext(index + 1);
      };
      img.onerror = () => {
        if (!isMounted) return;
        preloadNext(index + 1);
      }
    };

    preloadNext(0);

    return () => {
      isMounted = false;
    };
  }, []);

  // Update canvas
  useEffect(() => {
    if (images.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false }); // optimization
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const p = Math.max(0, Math.min(1, smoothProgress.get()));

      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(p * TOTAL_FRAMES)
      );

      const img = images[frameIndex];

      if (img) {
        // To guarantee original resolution without compression or downscaling artifacts,
        // set the canvas pixel resolution to EXACTLY the native image resolution.
        if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
        }

        // Smooth rendering
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        // Draw the image 1:1, avoiding any canvas-level rescaling math.
        // CSS 'object-fit: cover' will handle the viewport downscaling flawlessly.
        ctx.drawImage(img, 0, 0);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [images, smoothProgress]);

  const loadingPercentage = Math.round((loadedFrames / TOTAL_FRAMES) * 100);
  const isLoading = loadedFrames < TOTAL_FRAMES;

  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full h-[400vh] bg-background text-white selection:bg-primary/30">

      {/* Loading Screen */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ pointerEvents: isLoading ? 'auto' : 'none' }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      >
        <div className="w-64 max-w-full">
          <div className="flex justify-between text-white/50 text-xs mb-3 font-mono tracking-widest">
            <span>LOADING SEQUENCE</span>
            <span>{loadingPercentage}%</span>
          </div>
          <div className="h-[1px] w-full bg-white/10 overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-primary to-accent shadow-[0_0_10px_rgba(59,130,246,0.6)]"
              initial={{ width: 0 }}
              animate={{ width: `${loadingPercentage}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Sticky Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-background">

        {/* Canvas Engine */}
        <canvas
          ref={canvasRef}
          style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
          className="absolute inset-0 z-0"
        />

        {/* Visual Overlays: Vignette & Noise */}
        <div className="absolute inset-0 vignette z-0" />
        <div className="absolute inset-0 noise-overlay z-0" />

        {/* Text Overlays */}
        {images.length > 0 && !isLoading && (
          <>
            <TextBeat
              progress={smoothProgress}
              start={0.0}
              end={0.2}
              title="ENGINEERED STRENGTH"
              subtitle="Precision begins at the surface"
            />
            <TextBeat
              progress={smoothProgress}
              start={0.25}
              end={0.45}
              title="BEYOND THE SURFACE"
              subtitle="We analyze what others can't see"
            />
            <TextBeat
              progress={smoothProgress}
              start={0.5}
              end={0.7}
              title="NABL Accredited"
              subtitle="Structured testing. Measurable results."
            />
            <TextBeat
              progress={smoothProgress}
              start={0.75}
              end={0.95}
              title="TESTED. TRUSTED."
              subtitle="LANDMARK CONSULTING LABS OPC PVT. LTD."
            />
          </>
        )}

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        >
          <span className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-medium">Scroll to Explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};
