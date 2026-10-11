import React from "react";

interface SectionHeadingProps {
  number: string;
  eyebrow: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  italicWord,
  subtitle,
  className = "",
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-3xl"} ${className}`}>
      {/* Eyebrow & Index */}
      <div className={`flex items-center gap-2 mb-3 text-xs tracking-wider uppercase font-mono text-[#77756F] ${centered ? "justify-center" : ""}`}>
        <span className="font-semibold text-[#0D0D0D]">[{number}]</span>
        <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
        <span>{eyebrow}</span>
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0D0D0D] leading-[1.15]">
        {title}{" "}
        {italicWord && (
          <span className="font-serif italic font-normal text-[#0D0D0D]/90">
            {italicWord}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#3A3A3A] font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
