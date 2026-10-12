"use client";

import React from "react";
import { SkillItem } from "@/lib/data";
import { BrandLogo, getSkillTheme } from "@/components/ui/BrandLogos";
import { Sparkles, Layers, ArrowUpRight } from "lucide-react";

interface SkillCardProps {
  skill: SkillItem;
  isSelected: boolean;
  onSelect: () => void;
}

export function SkillCard({ skill, isSelected, onSelect }: SkillCardProps) {
  const isTool = skill.type === "tool";
  const theme = getSkillTheme(skill.id);
  const projectsCount = skill.projectsUsed?.length || 0;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all duration-300 ease-out cursor-pointer overflow-hidden flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-violet-600 ${
        isSelected
          ? "bg-white border-violet-400 shadow-[0_12px_36px_rgba(124,58,237,0.16)] -translate-y-1 ring-2 ring-violet-400/30"
          : "bg-white/75 hover:bg-white border-white/90 hover:border-violet-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_34px_rgba(100,80,160,0.11)] hover:-translate-y-1.5 backdrop-blur-xl"
      }`}
      aria-pressed={isSelected}
    >
      {/* Dynamic ambient brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-6 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundColor: theme.glowColor }}
      />

      {/* Top accent line */}
      <div
        aria-hidden="true"
        className={`absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 ${
          isSelected
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }`}
        style={{
          background: `linear-gradient(90deg, transparent, ${theme.brandColor}, transparent)`,
        }}
      />

      {/* Top row: Brand Logo and Role / Type Badge */}
      <div className="relative z-10 flex items-start justify-between gap-3 w-full">
        {/* Brand Logo Container */}
        <div
          className={`w-12 h-12 rounded-xl sm:rounded-2xl border border-black/6 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-108 group-hover:shadow-sm bg-linear-to-br ${theme.bgGradient}`}
          style={{
            backgroundColor: `${theme.brandColor}14`,
            boxShadow: isSelected ? `0 4px 14px ${theme.glowColor}` : undefined,
          }}
        >
          <BrandLogo id={skill.id} size={28} className="w-7 h-7 shrink-0 drop-shadow-2xs" />
        </div>

        {/* Badge: Role or Tool/Concept */}
        <span
          className={`px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase font-medium border transition-colors ${
            isSelected
              ? "bg-violet-100 text-violet-700 border-violet-200"
              : isTool
              ? "bg-white/80 group-hover:bg-violet-50/70 text-slate-600 group-hover:text-violet-700 border-black/6 group-hover:border-violet-100"
              : "bg-slate-100/80 text-slate-500 border-black/5"
          }`}
        >
          {skill.roleBadge || theme.roleBadge}
        </span>
      </div>

      {/* Center: Skill Name and Category */}
      <div className="relative z-10 mt-3.5 mb-2 w-full">
        <div className="flex items-center justify-between gap-1">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-slate-950 tracking-tight truncate">
            {skill.name}
          </h3>
          <ArrowUpRight
            aria-hidden="true"
            className="w-3.5 h-3.5 text-slate-400 group-hover:text-violet-600 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
          />
        </div>
        <p className="text-[11px] text-slate-500 mt-0.5 font-mono truncate">
          {skill.category}
        </p>
      </div>

      {/* Bottom: Project reference badge if used in projects */}
      <div className="relative z-10 pt-2.5 mt-auto border-t border-slate-100/90 w-full flex items-center justify-between text-[11px]">
        {projectsCount > 0 ? (
          <div className="inline-flex items-center gap-1.5 text-violet-700 font-medium">
            <Sparkles className="w-3 h-3 text-violet-500 shrink-0" />
            <span className="truncate">
              {projectsCount} {projectsCount === 1 ? "project" : "projects"}
            </span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-1.5 text-slate-400 font-mono text-[10px]">
            <Layers className="w-3 h-3 text-slate-300 shrink-0" />
            <span>Tech tool</span>
          </div>
        )}

        <span className="text-[10px] text-slate-400 group-hover:text-violet-600 font-mono transition-colors">
          Inspect →
        </span>
      </div>
    </button>
  );
}
