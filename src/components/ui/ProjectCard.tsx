"use client";

import React, { useState } from "react";
import { ProjectItem } from "@/lib/data";
import { ProjectIllustration } from "@/components/ui/ProjectIllustrations";
import { Check, ChevronDown, ChevronUp, Layers, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  isExpandedByDefault?: boolean;
}

export function ProjectCard({ project, isExpandedByDefault = false }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(isExpandedByDefault);

  return (
    <article
      className="bg-white rounded-2xl border border-black/10 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
      aria-label={`Project: ${project.title}`}
    >
      {/* Top Illustrative UI Preview */}
      <div className="relative aspect-[16/10] w-full border-b border-black/8 overflow-hidden bg-[#F4F2EE]">
        <ProjectIllustration concept={project.uiConcept} />
      </div>

      {/* Project Content Body */}
      <div className="p-6 sm:p-7 flex flex-col justify-between grow">
        <div>
          {/* Header Row: Number & Status */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="font-mono text-xs font-semibold text-[#77756F]">
              [{project.number}]
            </span>
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase ${
                project.type === "Ongoing"
                  ? "bg-black/5 text-[#0D0D0D] border border-black/10"
                  : "bg-[#E9E6E0] text-[#3A3A3A]"
              }`}
            >
              {project.statusOrYear}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-[#0D0D0D] tracking-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-xs sm:text-sm text-[#3A3A3A] leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-[#F4F2EE] text-[11px] font-mono text-[#0D0D0D] border border-black/6"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Expandable Key Highlights */}
          {isExpanded && (
            <div className="mt-5 pt-4 border-t border-black/8 space-y-2 animate-in fade-in duration-200">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#77756F] block">
                Technical Highlights
              </span>
              <ul className="space-y-1.5">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#3A3A3A]">
                    <Check className="w-3.5 h-3.5 text-[#0D0D0D] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Toggle / Verified Link */}
        <div className="mt-6 pt-4 border-t border-black/8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0D0D0D] hover:text-[#77756F] transition-colors cursor-pointer"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? "Collapse Specs" : "View Architectural Specs"}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {project.verifiedUrl ? (
            <a
              href={project.verifiedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-[#0D0D0D] hover:underline"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3 h-3 text-[#77756F]" />
            </a>
          ) : (
            <span className="text-[10px] font-mono text-[#77756F]">
              Academic / Lab Build
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
