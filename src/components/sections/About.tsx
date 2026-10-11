"use client";

import React, { useState } from "react";
import { PROFILE } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import {
  FileText,
  Mail,
  GraduationCap,
  MapPin,
  Cpu,
  RotateCcw,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export function About() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section
      id="about"
      aria-label="About Thasika Ragupathy"
      className="py-24 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto border-t border-black/5"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Profile & Background"
          title="A little about"
          italicWord="me."
          subtitle="Information Technology undergraduate, full-stack developer, and multidisciplinary technology enthusiast."
        />
      </Reveal>

      {/* Three-Column Desktop Grid, Single Column on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Résumé Summary & Core Links (4 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <Reveal delayMs={100}>
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-black/8 shadow-2xs">
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted mb-4">
                Professional Profile
              </h3>
              <p className="text-sm sm:text-base text-primary leading-relaxed font-normal">
                {PROFILE.aboutSummary}
              </p>
              <div className="my-5 h-px bg-black/8" />
              <p className="text-xs sm:text-sm text-secondary leading-relaxed italic">
                {PROFILE.aboutSupporting}
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                <Button
                  href={PROFILE.github}
                  target="_blank"
                  variant="outline"
                  size="sm"
                  icon={<GithubIcon className="w-3.5 h-3.5" />}
                  iconPosition="left"
                >
                  GitHub
                </Button>
                <Button
                  href={PROFILE.linkedin}
                  target="_blank"
                  variant="outline"
                  size="sm"
                  icon={<LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />}
                  iconPosition="left"
                >
                  LinkedIn
                </Button>
                <Button
                  href={PROFILE.resumePdfUrl}
                  download="Thasika_Ragupathy_CV.pdf"
                  variant="secondary"
                  size="sm"
                  icon={<FileText className="w-3.5 h-3.5" />}
                  iconPosition="left"
                >
                  Download CV
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Centre Column: Developer Identity Card (4 cols) */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <Reveal delayMs={200} className="w-full">
            <div className="perspective-1000 w-full max-w-85 mx-auto">
              {/* Card Container with Flip Transition */}
              <div
                className={`relative w-full aspect-9/14 rounded-2xl transition-transform duration-700 transform-style-preserve-3d shadow-xl border border-black/15 ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden bg-surface rounded-2xl p-5 flex flex-col justify-between overflow-hidden">
                  {/* Subtle Card Header */}
                  <div>
                    <div className="flex items-center justify-between border-b border-black/8 pb-3">
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-muted block">
                          Developer Credential
                        </span>
                        <span className="text-xs font-semibold text-primary">
                          University of Vavuniya
                        </span>
                      </div>
                      <div className="w-6 h-6 rounded-md bg-soft border border-black/10 flex items-center justify-center">
                        <Cpu className="w-3.5 h-3.5 text-primary" />
                      </div>
                    </div>

                    {/* Extracted Portrait Frame from Intro Video */}
                    <div className="relative mt-3 w-full aspect-4/3 rounded-xl overflow-hidden bg-soft border border-black/10">
                      <video
                        src={PROFILE.introVideoUrl}
                        playsInline
                        muted
                        autoPlay
                        loop
                        className="w-full h-full object-cover"
                        aria-label="Thasika Ragupathy portrait frame"
                      />
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 text-[9px] font-mono text-white tracking-wider uppercase">
                        Active Profile
                      </div>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="my-2 space-y-1 text-left">
                    <h4 className="text-lg font-bold text-primary tracking-tight">
                      {PROFILE.name}
                    </h4>
                    <p className="text-xs font-mono font-medium text-muted">
                      Frontend Developer & UI/UX Designer
                    </p>
                    <div className="pt-2 text-xs text-secondary space-y-0.5">
                      <p className="font-medium text-primary text-[11px]">
                        {PROFILE.degree}
                      </p>
                      <p className="text-[11px] text-muted">
                        {PROFILE.university} ({PROFILE.educationYears})
                      </p>
                    </div>
                  </div>

                  {/* Barcode & Flip Trigger */}
                  <div className="pt-2 border-t border-black/8 flex items-end justify-between">
                    <div>
                      {/* Monochrome Barcode */}
                      <div
                        className="h-7 flex items-end gap-[1.5px]"
                        aria-hidden="true"
                      >
                        {[3, 1, 4, 1, 5, 2, 6, 2, 1, 4, 3, 2, 5, 1, 3, 2, 4, 1, 5, 2, 4, 1, 3, 5, 2, 1, 4, 2].map(
                          (height, idx) => (
                            <div
                              key={idx}
                              style={{ height: `${height * 5}px` }}
                              className="w-0.5 bg-primary"
                            />
                          )
                        )}
                      </div>
                      <span className="font-mono text-[8px] text-muted tracking-widest uppercase">
                        TR-DEV-PASSPORT
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsFlipped(!isFlipped)}
                      className="px-2.5 py-1 rounded-full bg-soft hover:bg-[#dedad3] text-primary text-[10px] font-mono flex items-center gap-1 transition-colors"
                      aria-label="Flip developer identity card"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Flip</span>
                    </button>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-primary text-warm-bg rounded-2xl p-5 flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="font-mono text-[9px] text-muted uppercase tracking-widest">
                        Technical Specializations
                      </span>
                      <Sparkles className="w-3.5 h-3.5 text-white/60" />
                    </div>

                    <div className="mt-4 space-y-3 text-left">
                      <div>
                        <span className="font-mono text-[10px] text-white/50 uppercase block">
                          Primary Stack
                        </span>
                        <p className="text-xs text-white/90 font-mono mt-0.5">
                          Next.js · React · TypeScript · Node.js
                        </p>
                      </div>

                      <div>
                        <span className="font-mono text-[10px] text-white/50 uppercase block">
                          Databases & APIs
                        </span>
                        <p className="text-xs text-white/90 font-mono mt-0.5">
                          MySQL · MongoDB · RESTful APIs
                        </p>
                      </div>

                      <div>
                        <span className="font-mono text-[10px] text-white/50 uppercase block">
                          Design & Methodology
                        </span>
                        <p className="text-xs text-white/90 font-mono mt-0.5">
                          Figma · UX Design · Agile Coordination
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="font-mono text-[9px] text-white/40">
                      THASIKA RAGUPATHY
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsFlipped(!isFlipped)}
                      className="px-2.5 py-1 rounded-full bg-white/15 hover:bg-white/25 text-white text-[10px] font-mono flex items-center gap-1 transition-colors"
                      aria-label="Flip back"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Front</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Quick Facts (3 cols) */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <Reveal delayMs={300}>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-black/8 shadow-2xs space-y-5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted">
                Quick Facts
              </h3>

              {/* Education */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-soft border border-black/8 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-muted uppercase block">
                    Education
                  </span>
                  <span className="text-xs font-semibold text-primary block">
                    {PROFILE.university}
                  </span>
                  <span className="text-[11px] text-secondary block">
                    {PROFILE.degree}
                  </span>
                </div>
              </div>

              {/* Technical Focus */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-soft border border-black/8 flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-muted uppercase block">
                    Technical Focus
                  </span>
                  <span className="text-xs text-primary leading-snug block">
                    {PROFILE.technicalFocus}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-soft border border-black/8 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-muted uppercase block">
                    Location
                  </span>
                  <span className="text-xs font-medium text-primary block">
                    {PROFILE.location}
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-soft border border-black/8 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-muted uppercase block">
                    Email
                  </span>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-xs font-medium text-primary hover:underline block break-all"
                  >
                    {PROFILE.email}
                  </a>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-2 border-t border-black/8 flex items-center justify-between text-xs font-mono">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary flex items-center gap-1 hover:underline"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-muted" />
                </a>
                <span className="text-black/20">·</span>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary flex items-center gap-1 hover:underline"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-muted" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
