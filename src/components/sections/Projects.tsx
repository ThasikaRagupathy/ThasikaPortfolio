"use client";

import React from "react";
import { PROJECTS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Info } from "lucide-react";

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects Gallery"
      className="py-24 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto border-t border-black/5"
    >
      <Reveal>
        <SectionHeading
          number="03"
          eyebrow="Featured Work"
          title="Interactive project"
          italicWord="gallery."
          subtitle="Responsive web applications, corporate platforms, and full-stack systems designed with modern web technologies."
        />
      </Reveal>

      {/* Projects Grid: 2 columns on lg, 1 column on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {PROJECTS.map((project, idx) => (
          <Reveal key={project.number} delayMs={(idx % 2) * 150}>
            <ProjectCard project={project} isExpandedByDefault={idx === 0} />
          </Reveal>
        ))}
      </div>

      {/* Editorial Transparency Note */}
      <Reveal delayMs={100} className="mt-10">
        <div className="p-4 rounded-xl bg-white/70 border border-black/8 flex items-start gap-3 text-xs text-[#77756F]">
          <Info className="w-4 h-4 text-[#0D0D0D] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Interface previews are bespoke, original illustrative interfaces rendered via CSS and JSX to represent design layouts and system flows. No mock interfaces are presented as actual photographic screenshots.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
