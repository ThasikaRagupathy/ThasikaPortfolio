import React from "react";
import { SkillItem } from "@/lib/data";
import { BrandLogo } from "@/components/ui/BrandLogos";
import { CheckCircle2, Layers } from "lucide-react";

interface SkillCardProps {
  skill: SkillItem;
  isSelected: boolean;
  onSelect: () => void;
}

export function SkillCard({ skill, isSelected, onSelect }: SkillCardProps) {
  const isTool = skill.type === "tool";

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`relative w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0D0D0D] ${
        isSelected
          ? "bg-white border-[#0D0D0D] shadow-md ring-1 ring-[#0D0D0D]/10"
          : "bg-white/80 hover:bg-white border-black/8 hover:border-black/20 shadow-2xs"
      }`}
      aria-pressed={isSelected}
    >
      <div className="flex items-start justify-between gap-3">
        {/* Brand Logo or Icon */}
        <div className="w-10 h-10 rounded-lg bg-[#F4F2EE] border border-black/6 flex items-center justify-center shrink-0">
          <BrandLogo id={skill.id} size={22} className="w-5.5 h-5.5" />
        </div>

        {/* Badge: Tool vs Concept */}
        <span
          className={`px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase ${
            isTool
              ? "bg-[#E9E6E0] text-[#3A3A3A]"
              : "bg-black/5 text-[#77756F] border border-black/10"
          }`}
        >
          {isTool ? "Tool" : "Concept"}
        </span>
      </div>

      {/* Skill Name */}
      <div className="mt-3">
        <h4 className="text-sm font-semibold text-[#0D0D0D] tracking-tight">
          {skill.name}
        </h4>
        <p className="text-[11px] text-[#77756F] mt-0.5 font-mono truncate">
          {skill.category}
        </p>
      </div>

      {/* Project References badge if used in projects */}
      {skill.projectsUsed && skill.projectsUsed.length > 0 && (
        <div className="mt-2.5 pt-2 border-t border-black/5 flex items-center gap-1.5 text-[11px] text-[#3A3A3A]">
          <Layers className="w-3 h-3 text-[#77756F]" />
          <span className="truncate">
            {skill.projectsUsed.length} {skill.projectsUsed.length === 1 ? "project" : "projects"}
          </span>
        </div>
      )}
    </button>
  );
}
