"use client";

import React, { useState, useMemo } from "react";
import { SKILL_GROUPS, SkillItem } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillCard } from "@/components/ui/SkillCard";
import { Reveal } from "@/components/ui/Reveal";
import { BrandLogo } from "@/components/ui/BrandLogos";
import { Layers, ArrowRight, X, Info } from "lucide-react";

export function Skills() {
  const [selectedGroupId, setSelectedGroupId] = useState<string>("all");
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  // Flatten all skills for "all" view
  const allSkills = useMemo(() => {
    return SKILL_GROUPS.flatMap((group) => group.skills);
  }, []);

  // Filter skills based on tab
  const displayedSkills = useMemo(() => {
    if (selectedGroupId === "all") return allSkills;
    const group = SKILL_GROUPS.find((g) => g.id === selectedGroupId);
    return group ? group.skills : allSkills;
  }, [selectedGroupId, allSkills]);

  return (
    <section
      id="skills"
      aria-label="Technologies and Skills"
      className="py-24 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto border-t border-black/5"
    >
      <Reveal>
        <SectionHeading
          number="02"
          eyebrow="Technical Stack"
          title="The technologies I"
          italicWord="work with."
          subtitle="My interests span development, design, data, and emerging technologies."
        />
      </Reveal>

      {/* Category Filter Tabs */}
      <Reveal delayMs={100}>
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-3 mb-8">
          <button
            type="button"
            onClick={() => setSelectedGroupId("all")}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all shrink-0 cursor-pointer ${
              selectedGroupId === "all"
                ? "bg-[#0D0D0D] text-white shadow-xs font-semibold"
                : "bg-white/80 hover:bg-white text-[#77756F] hover:text-[#0D0D0D] border border-black/8"
            }`}
          >
            All Technologies ({allSkills.length})
          </button>

          {SKILL_GROUPS.map((group) => {
            const isActive = selectedGroupId === group.id;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setSelectedGroupId(group.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#0D0D0D] text-white shadow-xs font-semibold"
                    : "bg-white/80 hover:bg-white text-[#77756F] hover:text-[#0D0D0D] border border-black/8"
                }`}
              >
                {group.title} ({group.skills.length})
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {displayedSkills.map((skill, index) => (
          <Reveal key={skill.id} delayMs={(index % 5) * 50}>
            <SkillCard
              skill={skill}
              isSelected={selectedSkill?.id === skill.id}
              onSelect={() => setSelectedSkill(skill)}
            />
          </Reveal>
        ))}
      </div>

      {/* Selected Skill Detail Panel */}
      {selectedSkill && (
        <Reveal className="mt-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-black/15 shadow-md flex flex-col md:flex-row items-start justify-between gap-6 relative">
            <button
              type="button"
              onClick={() => setSelectedSkill(null)}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#F4F2EE] hover:bg-[#E9E6E0] flex items-center justify-center text-[#77756F] hover:text-[#0D0D0D] transition-colors"
              aria-label="Close skill details"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#F4F2EE] border border-black/10 flex items-center justify-center shrink-0">
                <BrandLogo id={selectedSkill.id} size={32} className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-[#0D0D0D]">
                    {selectedSkill.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#E9E6E0] text-[#0D0D0D]">
                    {selectedSkill.type === "tool" ? "Specific Tool" : "Technical Concept"}
                  </span>
                </div>
                <p className="text-xs font-mono text-[#77756F] mt-0.5">
                  Category: {selectedSkill.category}
                </p>
                {selectedSkill.description && (
                  <p className="text-sm text-[#3A3A3A] mt-2 max-w-2xl leading-relaxed">
                    {selectedSkill.description}
                  </p>
                )}
              </div>
            </div>

            {/* Projects referencing this skill */}
            {selectedSkill.projectsUsed && selectedSkill.projectsUsed.length > 0 && (
              <div className="w-full md:w-auto shrink-0 pt-4 md:pt-0 border-t md:border-t-0 md:border-l md:pl-6 border-black/10">
                <span className="text-[11px] font-mono text-[#77756F] uppercase tracking-wider block mb-2">
                  Applied in Projects
                </span>
                <div className="flex flex-wrap md:flex-col gap-1.5">
                  {selectedSkill.projectsUsed.map((proj) => (
                    <a
                      key={proj}
                      href="#projects"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0D0D0D] hover:underline bg-[#F4F2EE] px-2.5 py-1 rounded-md"
                    >
                      <Layers className="w-3 h-3 text-[#77756F]" />
                      <span>{proj}</span>
                      <ArrowRight className="w-3 h-3 text-[#77756F]" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Reveal>
      )}

      {/* Note about authentic evaluation */}
      <div className="mt-8 flex items-center gap-2 text-xs font-mono text-[#77756F]">
        <Info className="w-3.5 h-3.5 shrink-0" />
        <span>
          Skills are organized by résumé categories without arbitrary percentage ratings or self-assigned skill scores.
        </span>
      </div>
    </section>
  );
}
