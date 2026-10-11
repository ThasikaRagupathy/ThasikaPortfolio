"use client";

import React from "react";
import { CERTIFICATIONS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Award, CheckCircle } from "lucide-react";

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="Certifications & Learning"
      className="py-24 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto border-t border-black/5"
    >
      <Reveal>
        <SectionHeading
          number="04"
          eyebrow="Credentials & Learning"
          title="Professional learning &"
          italicWord="certifications."
          subtitle="Accredited certifications spanning user experience design, API architectures, artificial intelligence, and web technologies."
        />
      </Reveal>

      {/* Certifications List */}
      <div className="space-y-4">
        {CERTIFICATIONS.map((cert, index) => (
          <Reveal key={cert.number} delayMs={index * 80}>
            <div className="group bg-white/80 hover:bg-white p-6 sm:p-7 rounded-2xl border border-black/8 hover:border-black/20 transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              {/* Left Side: Number, Badge, Title & Issuer */}
              <div className="flex items-start gap-4 sm:gap-5">
                <span className="font-mono text-xs font-semibold text-[#77756F] group-hover:text-[#0D0D0D] transition-colors shrink-0 mt-1">
                  [{cert.number}]
                </span>

                <div className="w-10 h-10 rounded-xl bg-[#F4F2EE] border border-black/8 flex items-center justify-center shrink-0 group-hover:bg-[#0D0D0D] group-hover:text-white transition-colors duration-300">
                  <Award className="w-5 h-5 text-current" />
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0D0D0D] tracking-tight group-hover:translate-x-0.5 transition-transform">
                    {cert.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-[#77756F]">
                    <span className="font-medium text-[#3A3A3A]">{cert.issuer}</span>
                    <span className="text-black/20">·</span>
                    <span className="font-mono bg-[#F4F2EE] px-2 py-0.5 rounded text-[11px] text-[#0D0D0D]">
                      {cert.year}
                    </span>
                  </div>

                  {cert.description && (
                    <p className="mt-2.5 text-xs sm:text-sm text-[#3A3A3A] max-w-2xl leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Right Side: Verified Completion Badge */}
              <div className="shrink-0 self-end md:self-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4F2EE] group-hover:bg-[#E9E6E0] border border-black/6 text-xs font-mono text-[#0D0D0D] transition-colors">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Credential Verified</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
