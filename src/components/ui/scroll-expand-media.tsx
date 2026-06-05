import {
  useEffect,
  useRef,
  useState,
} from 'react';
import type { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [isMobileState, setIsMobileState] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // useScroll tracks scroll within our 200vh wrapper
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Map scroll progress to animations
  const mediaWidth = useTransform(
    scrollYProgress,
    [0, 1],
    [300, 300 + 1 * (isMobileState ? 650 : 1250)]
  );

  const mediaHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [400, 400 + 1 * (isMobileState ? 200 : 400)]
  );

  const textTranslateX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobileState ? 100 : 80]
  );

  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const mediaOverlayOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 0.4]);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div className='bg-[#05070a] relative'>
      {/* 200vh container gives us 100vh of scrolling distance to complete the animation */}
      <div ref={containerRef} className='h-[200vh] w-full relative'>
        {/* Sticky element stays in view while we scroll through the 200vh container */}
        <div className='sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center'>

          {/* Background */}
          <motion.div
            className='absolute inset-0 z-0 h-full'
            style={{ opacity: bgOpacity }}
          >
            <img
              src={bgImageSrc}
              alt='Background'
              className='w-screen h-screen'
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/60 to-transparent mix-blend-overlay' />
            <div className='absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20' />
          </motion.div>

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10 h-full'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>

              {/* Expanding Media Box */}
              <motion.div
                className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden'
                style={{
                  width: mediaWidth,
                  height: mediaHeight,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 50px rgba(59, 130, 246, 0.15)',
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') ? (
                    <div className='relative w-full h-full pointer-events-none'>
                      <iframe
                        width='100%'
                        height='100%'
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc + (mediaSrc.includes('?') ? '&' : '?') + 'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                            : mediaSrc.replace('watch?v=', 'embed/') + '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' + mediaSrc.split('v=')[1]
                        }
                        className='w-full h-full'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      />
                      <div className='absolute inset-0 z-10' style={{ pointerEvents: 'none' }} />
                      <motion.div
                        className='absolute inset-0 bg-[#05070a]/30'
                        style={{ opacity: mediaOverlayOpacity }}
                      />
                    </div>
                  ) : (
                    <div className='relative w-full h-full pointer-events-none'>
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload='auto'
                        className='w-full h-full object-cover'
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                      <div className='absolute inset-0 z-10' style={{ pointerEvents: 'none' }} />
                      <motion.div
                        className='absolute inset-0 bg-[#05070a]/30'
                        style={{ opacity: mediaOverlayOpacity }}
                      />
                    </div>
                  )
                ) : (
                  <div className='relative w-full h-full'>
                    <img
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      className='w-full h-full object-cover mix-blend-luminosity opacity-80'
                    />
                    <motion.div
                      className='absolute inset-0 bg-[#05070a]/50'
                      style={{ opacity: mediaOverlayOpacity }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-blue-900/20 to-transparent mix-blend-overlay"></div>
                  </div>
                )}

                <div className='flex flex-col items-center text-center relative z-10 mt-4'>
                  {date && (
                    <motion.p
                      className='text-2xl text-blue-400'
                      style={{ x: useTransform(textTranslateX, v => -v) }}
                    >
                      {date}
                    </motion.p>
                  )}
                  {scrollToExpand && (
                    <motion.p
                      className='text-purple-400 font-medium text-center tracking-[0.2em] uppercase text-sm mt-4'
                      style={{ x: textTranslateX }}
                    >
                      {scrollToExpand}
                    </motion.p>
                  )}
                </div>
              </motion.div>

              {/* Title that splits apart */}
              <div
                className={`flex flex-row flex-nowrap items-center justify-center text-center gap-x-2 sm:gap-x-3 md:gap-x-4 w-full relative z-10 whitespace-nowrap ${textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                  }`}
              >
                <motion.h2
                  className='text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-blue-200 drop-shadow-[0_0_30px_rgba(59,130,246,0.15)] pb-1'
                  style={{ x: useTransform(textTranslateX, v => -v) }}
                >
                  {firstWord}
                </motion.h2>
                <motion.h2
                  className='text-4xl md:text-5xl lg:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-blue-200 drop-shadow-[0_0_30px_rgba(59,130,246,0.15)] pb-1'
                  style={{ x: textTranslateX }}
                >
                  {restOfTitle}
                </motion.h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Children content that flows normally after the sticky section */}
      <section className='w-full relative z-20 pb-20'>
        {children}
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
