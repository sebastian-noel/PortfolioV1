'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroContent } from '@/data';
import { AnimatePresence, motion } from 'framer-motion';

export default function ImageCarousel() {
  const slides = heroContent.carousel;
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: true,
      skipSnaps: true,
      containScroll: 'trimSnaps',
    },
    [autoplay.current]
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeSlide = activeIndex !== null ? slides[activeIndex] : null;

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const openSlide = useCallback((idx: number) => {
    autoplay.current?.stop?.();
    setActiveIndex(idx);
  }, []);

  const closeSlide = useCallback(() => {
    setActiveIndex(null);
    autoplay.current?.reset?.();
  }, []);

  if (!slides?.length) return null;

  return (
    <section className="bg-[color:var(--color-background)] py-10 text-[color:var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Photos</h2>
          <h4 className="text-sm text-[color:var(--color-text)]/70">Click the photos learn more!</h4>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              className="rounded-full border border-[color:var(--color-secondary)] bg-[color:var(--color-background)] p-2 shadow-sm transition hover:-translate-y-[1px] hover:shadow hover:border-[color:var(--color-accent)]"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-[color:var(--color-accent)]" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="rounded-full border border-[color:var(--color-secondary)] bg-[color:var(--color-background)] p-2 shadow-sm transition hover:-translate-y-[1px] hover:shadow hover:border-[color:var(--color-accent)]"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-[color:var(--color-accent)]" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -mx-2">
            {slides.map((src, idx) => (
              <div
                className="relative aspect-[4/3] min-w-[320px] flex-[0_0_75%] sm:flex-[0_0_55%] lg:flex-[0_0_40%] px-2 cursor-pointer"
                key={`${src.src}-${idx}`}
                onClick={() => openSlide(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') openSlide(idx);
                }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl group">
                  <Image
                    src={src.src}
                    alt={src.alt}
                    fill
                    className="object-cover transition-transform duration-450 group-hover:scale-105"
                    sizes="(max-width: 640px) 75vw, (max-width: 1024px) 55vw, 40vw"
                    priority={idx === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeSlide ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSlide}
          >
            <motion.div
              className="relative w-full max-w-4xl space-y-4"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-[color:var(--color-secondary)]/60">
                <Image
                  src={activeSlide.src}
                  alt={activeSlide.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
              {activeSlide.description ? (
                <p className="text-center text-[color:var(--color-text)]/85 text-sm md:text-base">
                  {activeSlide.description}
                </p>
              ) : null}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
