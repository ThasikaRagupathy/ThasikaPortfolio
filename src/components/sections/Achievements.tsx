"use client";

import { useRef } from "react";
import { ACHIEVEMENTS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

export function Achievements() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (offset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="achievements"
      aria-label="Milestones and Achievements"
      className="py-24 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto border-t border-black/5"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
        <Reveal>
          <SectionHeading
            title="Achievements"
            subtitle="Verified participations, innovation challenge triumphs, and community service honors."
            className="mb-0"
          />
        </Reveal>

        {/* Desktop Horizontal Scroll Controls */}
        <div className="hidden lg:flex items-center gap-2 mt-4 md:mt-0">
          <button
            type="button"
            onClick={() => scrollBy(-380)}
            className="w-10 h-10 rounded-full border border-black/15 bg-white hover:bg-soft text-primary flex items-center justify-center transition-colors active:scale-95 cursor-pointer"
            aria-label="Scroll achievements left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(380)}
            className="w-10 h-10 rounded-full border border-black/15 bg-white hover:bg-soft text-primary flex items-center justify-center transition-colors active:scale-95 cursor-pointer"
            aria-label="Scroll achievements right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Gallery on Desktop, Stacked Cards on Mobile */}
      <div
        ref={scrollContainerRef}
        className="flex flex-col lg:flex-row gap-6 lg:overflow-x-auto lg:pb-6 lg:snap-x lg:snap-mandatory no-scrollbar"
      >
        {ACHIEVEMENTS.map((item, index) => (
          <div
            key={item.number}
            className="flex h-120 w-full lg:w-95 lg:shrink-0 lg:snap-start"
          >
            <Reveal delayMs={index * 100} className="h-full w-full">
              <div className="flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-black/8 bg-white/80 p-7 shadow-2xs transition-all duration-300 hover:border-black/20 hover:bg-white hover:shadow-md sm:p-8">
                <div>
                  {/* Top Bar with Number & Year */}
                  <div className="flex items-center justify-between pb-4 border-b border-black/8">
                    <span className="font-mono text-2xl font-black text-primary/20">
                      {item.number}
                    </span>
                    <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-warm-bg text-primary border border-black/5">
                      {item.year}
                    </span>
                  </div>

                  {/* Context Badge */}
                  <div className="mt-5 mb-2">
                    <span className="line-clamp-2 min-h-8 text-[11px] font-mono uppercase tracking-wider text-muted">
                      {item.roleOrContext}
                    </span>
                    <h3 className="mt-1 line-clamp-2 min-h-14 text-lg font-bold leading-snug tracking-tight text-primary sm:text-xl">
                      {item.title}
                    </h3>
                  </div>

                  {/* Issuer */}
                  <p className="line-clamp-2 min-h-8 text-xs font-medium text-muted">
                    {item.issuer}
                  </p>

                  {/* Description */}
                  <p className="mt-4 line-clamp-5 min-h-26 text-xs font-normal leading-relaxed text-secondary sm:text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Highlight Stats Pill */}
                {item.stats && (
                  <div className="mt-6 pt-4 border-t border-black/8 flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs font-mono font-medium text-primary">
                      {item.stats}
                    </span>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
