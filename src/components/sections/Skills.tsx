"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { SKILL_GROUPS, SkillItem } from "@/lib/data";
import { SkillCard } from "@/components/ui/SkillCard";
import { Reveal } from "@/components/ui/Reveal";
import { BrandLogo, getSkillTheme } from "@/components/ui/BrandLogos";
import {
  Sparkles,
  Search,
  X,
  Layers,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Filter,
  CheckCircle2,
  FolderGit2,
  Cpu,
} from "lucide-react";

export function Skills() {
  const [selectedGroupId, setSelectedGroupId] = useState<string>("all");
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [onlyProjectsFilter, setOnlyProjectsFilter] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"grid" | "grouped">("grid");

  const modalRef = useRef<HTMLDivElement>(null);

  // Flatten all skills for "all" view
  const allSkills = useMemo(() => {
    return SKILL_GROUPS.flatMap((group) => group.skills);
  }, []);

  // Spotlight featured stack
  const featuredStackIds = useMemo(
    () => [
      "react",
      "nextjs",
      "typescript",
      "tailwind",
      "nodejs",
      "figma",
      "mysql",
      "mongodb",
      "python",
      "git",
    ],
    []
  );

  const featuredSkills = useMemo(() => {
    return featuredStackIds
      .map((id) => allSkills.find((s) => s.id === id))
      .filter((s): s is SkillItem => Boolean(s));
  }, [allSkills, featuredStackIds]);

  // Filter skills based on tab, search query, and project toggle
  const displayedSkills = useMemo(() => {
    let result = allSkills;

    // Filter by group tab
    if (selectedGroupId !== "all") {
      const group = SKILL_GROUPS.find((g) => g.id === selectedGroupId);
      result = group ? group.skills : allSkills;
    }

    // Filter by project usage
    if (onlyProjectsFilter) {
      result = result.filter(
        (skill) => skill.projectsUsed && skill.projectsUsed.length > 0
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (skill) =>
          skill.name.toLowerCase().includes(q) ||
          skill.category.toLowerCase().includes(q) ||
          (skill.description && skill.description.toLowerCase().includes(q)) ||
          (skill.projectsUsed &&
            skill.projectsUsed.some((p) => p.toLowerCase().includes(q)))
      );
    }

    return result;
  }, [allSkills, selectedGroupId, onlyProjectsFilter, searchQuery]);

  // Count of skills used in real projects
  const skillsWithProjectsCount = useMemo(() => {
    return allSkills.filter(
      (s) => s.projectsUsed && s.projectsUsed.length > 0
    ).length;
  }, [allSkills]);

  // Keyboard navigation for modal (Escape to close, arrows to cycle)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedSkill) return;

      if (e.key === "Escape") {
        setSelectedSkill(null);
      } else if (e.key === "ArrowLeft") {
        const currentIndex = displayedSkills.findIndex(
          (s) => s.id === selectedSkill.id
        );
        if (currentIndex > 0) {
          setSelectedSkill(displayedSkills[currentIndex - 1]);
        } else if (displayedSkills.length > 0) {
          setSelectedSkill(displayedSkills[displayedSkills.length - 1]);
        }
      } else if (e.key === "ArrowRight") {
        const currentIndex = displayedSkills.findIndex(
          (s) => s.id === selectedSkill.id
        );
        if (currentIndex >= 0 && currentIndex < displayedSkills.length - 1) {
          setSelectedSkill(displayedSkills[currentIndex + 1]);
        } else if (displayedSkills.length > 0) {
          setSelectedSkill(displayedSkills[0]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedSkill, displayedSkills]);

  const handleNextSkill = () => {
    if (!selectedSkill) return;
    const currentIndex = displayedSkills.findIndex(
      (s) => s.id === selectedSkill.id
    );
    if (currentIndex >= 0 && currentIndex < displayedSkills.length - 1) {
      setSelectedSkill(displayedSkills[currentIndex + 1]);
    } else if (displayedSkills.length > 0) {
      setSelectedSkill(displayedSkills[0]);
    }
  };

  const handlePrevSkill = () => {
    if (!selectedSkill) return;
    const currentIndex = displayedSkills.findIndex(
      (s) => s.id === selectedSkill.id
    );
    if (currentIndex > 0) {
      setSelectedSkill(displayedSkills[currentIndex - 1]);
    } else if (displayedSkills.length > 0) {
      setSelectedSkill(displayedSkills[displayedSkills.length - 1]);
    }
  };

  return (
    <section
      id="skills"
      aria-label="Technologies and Skills"
      className="relative isolate overflow-hidden border-t border-violet-100/70 bg-linear-to-br from-[#faf7ff] via-[#fff8fb] to-[#f0fbff] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
    >
      {/* Soft ambient gradient blur orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-purple-300/25 blur-[100px] sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-[40%] -z-10 h-80 w-80 rounded-full bg-sky-300/25 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-pink-300/20 blur-[100px]"
      />

      <div className="mx-auto w-full max-w-7xl">
        {/* Header Section */}
        <Reveal>
          <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/65 px-4 py-2 shadow-sm shadow-violet-100/60 backdrop-blur-xl">
                <Sparkles aria-hidden="true" className="h-4 w-4 text-violet-500" />
                <span className="text-xs font-semibold tracking-wide text-violet-700">
                  Technical Toolkit & Capabilities
                </span>
              </div>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                The technologies master &amp; build with.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                A multidisciplinary toolkit bridging responsive full-stack engineering,
                interactive UI/UX design, database architectures, and emerging AI technologies.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/80 bg-white/65 px-5 py-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                <span>Applied in Projects</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">
                  {skillsWithProjectsCount}
                </span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Featured Tech Stack Spotlight Bar */}
        <Reveal delayMs={80}>
          <div className="mb-10 rounded-2xl border border-white/90 bg-white/60 p-4 shadow-sm shadow-violet-100/40 backdrop-blur-xl sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5 pb-3 border-b border-slate-100/80">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                  Core Daily Drivers &amp; Primary Stack
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">
                Click any tool to inspect workflow
              </span>
            </div>

            <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1">
              {featuredSkills.map((skill) => {
                const theme = getSkillTheme(skill.id);
                const isSelected = selectedSkill?.id === skill.id;
                return (
                  <button
                    key={skill.id}
                    type="button"
                    onClick={() => setSelectedSkill(skill)}
                    className={`inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-medium shrink-0 transition-all cursor-pointer border ${
                      isSelected
                        ? "bg-white border-violet-400 shadow-sm ring-1 ring-violet-400/40 text-slate-900 font-semibold -translate-y-0.5"
                        : "bg-white/85 hover:bg-white border-black/6 hover:border-violet-200 text-slate-700 hover:text-slate-950 hover:-translate-y-0.5 shadow-2xs"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 bg-linear-to-br ${theme.bgGradient}`}
                    >
                      <BrandLogo id={skill.id} size={16} className="w-4 h-4" />
                    </div>
                    <span>{skill.name}</span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase bg-slate-100 text-slate-500">
                      {skill.roleBadge || theme.roleBadge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Interactive Controls & Filters Bar */}
        <Reveal delayMs={120}>
          <div className="mb-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search
                aria-hidden="true"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools, languages, concepts, or projects..."
                aria-label="Search skills"
                className="w-full pl-10 pr-9 py-2.5 rounded-full border border-white/90 bg-white/70 backdrop-blur-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-violet-400 focus:bg-white shadow-2xs transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Quick Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Only Project-Used Skills Filter */}
              <button
                type="button"
                onClick={() => setOnlyProjectsFilter(!onlyProjectsFilter)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono transition-all cursor-pointer border ${
                  onlyProjectsFilter
                    ? "bg-violet-600 text-white border-violet-600 shadow-sm font-semibold"
                    : "bg-white/75 hover:bg-white text-slate-700 border-white/90 shadow-2xs hover:border-violet-200"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>In Projects Only ({skillsWithProjectsCount})</span>
              </button>

              {/* View Mode Switcher */}
              <div className="inline-flex items-center p-1 rounded-full border border-white/90 bg-white/70 backdrop-blur-xl shadow-2xs">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    viewMode === "grid"
                      ? "bg-slate-900 text-white font-medium shadow-2xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Bento Grid
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("grouped")}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    viewMode === "grouped"
                      ? "bg-slate-900 text-white font-medium shadow-2xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  By Category
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Category Tabs (Active in Grid Mode) */}
        {viewMode === "grid" && (
          <Reveal delayMs={140}>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
              <button
                type="button"
                onClick={() => setSelectedGroupId("all")}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all shrink-0 cursor-pointer border ${
                  selectedGroupId === "all"
                    ? "bg-linear-to-r from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-200/60 font-semibold border-transparent"
                    : "bg-white/75 hover:bg-white text-slate-600 hover:text-slate-950 border-white/90 hover:border-violet-200 shadow-2xs"
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
                    className={`px-4 py-2 rounded-full text-xs font-mono transition-all shrink-0 cursor-pointer border ${
                      isActive
                        ? "bg-linear-to-r from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-200/60 font-semibold border-transparent"
                        : "bg-white/75 hover:bg-white text-slate-600 hover:text-slate-950 border-white/90 hover:border-violet-200 shadow-2xs"
                    }`}
                  >
                    {group.title} ({group.skills.length})
                  </button>
                );
              })}
            </div>
          </Reveal>
        )}

        {/* Content Display: Bento Grid or Categorized Sections */}
        {viewMode === "grid" ? (
          <div>
            {displayedSkills.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4.5">
                {displayedSkills.map((skill, index) => (
                  <Reveal key={skill.id} delayMs={(index % 5) * 40}>
                    <SkillCard
                      skill={skill}
                      isSelected={selectedSkill?.id === skill.id}
                      onSelect={() => setSelectedSkill(skill)}
                    />
                  </Reveal>
                ))}
              </div>
            ) : (
              /* Empty Search / Filter State */
              <div className="text-center py-16 px-4 rounded-3xl border border-white/80 bg-white/45 backdrop-blur-xl">
                <div className="mx-auto w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-600 mb-3">
                  <Filter className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-800">
                  No matching technologies found
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Try adjusting your search terms or toggling the project filter off.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedGroupId("all");
                    setOnlyProjectsFilter(false);
                  }}
                  className="mt-4 px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-xs font-mono transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Categorized View */
          <div className="space-y-12">
            {SKILL_GROUPS.map((group) => {
              // Apply search and project filters within category
              const categorySkills = group.skills.filter((skill) => {
                if (onlyProjectsFilter && (!skill.projectsUsed || skill.projectsUsed.length === 0)) {
                  return false;
                }
                if (searchQuery.trim()) {
                  const q = searchQuery.toLowerCase().trim();
                  return (
                    skill.name.toLowerCase().includes(q) ||
                    skill.category.toLowerCase().includes(q) ||
                    (skill.description && skill.description.toLowerCase().includes(q)) ||
                    (skill.projectsUsed && skill.projectsUsed.some((p) => p.toLowerCase().includes(q)))
                  );
                }
                return true;
              });

              if (categorySkills.length === 0) return null;

              return (
                <div key={group.id} className="relative">
                  <div className="mb-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200/70 pb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                        {group.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {group.description}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-violet-700 font-semibold bg-violet-50 border border-violet-100 px-3 py-1 rounded-full self-start sm:self-auto">
                      {categorySkills.length} {categorySkills.length === 1 ? "Technology" : "Technologies"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4.5">
                    {categorySkills.map((skill, index) => (
                      <Reveal key={skill.id} delayMs={(index % 5) * 40}>
                        <SkillCard
                          skill={skill}
                          isSelected={selectedSkill?.id === skill.id}
                          onSelect={() => setSelectedSkill(skill)}
                        />
                      </Reveal>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Selected Skill Detail Inspector Modal / Drawer */}
        {selectedSkill && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
            onClick={(e) => {
              if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                setSelectedSkill(null);
              }
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="skill-modal-title"
          >
            <div
              ref={modalRef}
              className="relative w-full max-w-2xl rounded-3xl border border-white/90 bg-white/95 p-6 sm:p-8 shadow-[0_24px_60px_rgba(30,15,60,0.18)] backdrop-blur-2xl transition-all animate-in zoom-in-95 duration-200"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedSkill(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                aria-label="Close skill modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Navigation Arrows for Previous / Next */}
              <div className="absolute top-5 right-16 flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrevSkill}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                  aria-label="Previous skill"
                  title="Previous (Left arrow key)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextSkill}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                  aria-label="Next skill"
                  title="Next (Right arrow key)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              {(() => {
                const theme = getSkillTheme(selectedSkill.id);
                return (
                  <div>
                    {/* Top Header with Brand Badge */}
                    <div className="flex items-start gap-4 sm:gap-5 pr-20">
                      <div
                        className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl border border-black/8 flex items-center justify-center shrink-0 shadow-sm bg-linear-to-br ${theme.bgGradient}`}
                        style={{
                          backgroundColor: `${theme.brandColor}18`,
                          boxShadow: `0 8px 24px ${theme.glowColor}`,
                        }}
                      >
                        <BrandLogo
                          id={selectedSkill.id}
                          size={40}
                          className="w-10 h-10 drop-shadow-sm"
                        />
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3
                            id="skill-modal-title"
                            className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
                          >
                            {selectedSkill.name}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-violet-100 text-violet-700 font-semibold">
                            {selectedSkill.roleBadge || theme.roleBadge}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm font-mono text-slate-500 mt-1">
                          {selectedSkill.category}
                        </p>
                      </div>
                    </div>

                    {/* Skill Description */}
                    <div className="mt-6 rounded-2xl bg-slate-50/80 border border-slate-100 p-4 sm:p-5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5 font-semibold">
                        Practical Implementation &amp; Workflow
                      </span>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {selectedSkill.description ||
                          "Core technology leveraged across personal and academic software engineering projects."}
                      </p>
                    </div>

                    {/* Associated Projects Section */}
                    {selectedSkill.projectsUsed &&
                    selectedSkill.projectsUsed.length > 0 ? (
                      <div className="mt-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-violet-500" />
                            <span>
                              Applied in {selectedSkill.projectsUsed.length}{" "}
                              {selectedSkill.projectsUsed.length === 1
                                ? "Project"
                                : "Projects"}
                            </span>
                          </span>
                          <span className="text-[11px] font-mono text-violet-600">
                            Click to view project details
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {selectedSkill.projectsUsed.map((proj) => (
                            <a
                              key={proj}
                              href="#projects"
                              onClick={() => setSelectedSkill(null)}
                              className="group flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-white hover:border-violet-300 hover:bg-violet-50/40 shadow-2xs transition-all"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div className="w-7 h-7 rounded-lg bg-violet-100/70 text-violet-700 flex items-center justify-center shrink-0">
                                  <FolderGit2 className="w-4 h-4" />
                                </div>
                                <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-violet-700 truncate">
                                  {proj}
                                </span>
                              </div>
                              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-violet-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="mt-6 flex items-center gap-2 text-xs text-slate-500 font-mono bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>
                          Standard engineering environment &amp; continuous skill development.
                        </span>
                      </div>
                    )}

                    {/* Bottom Action / Footer */}
                    <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>Use ← / → arrow keys to navigate</span>
                      <button
                        type="button"
                        onClick={() => setSelectedSkill(null)}
                        className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition-colors cursor-pointer"
                      >
                        Done Exploring
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Closing Statistics Bar & Call to Action */}
      </div>
    </section>
  );
}
