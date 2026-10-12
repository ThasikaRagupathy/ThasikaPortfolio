import React from "react";

interface SectionHeadingProps {
  title: string;
  italicWord?: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  italicWord,
  subtitle,
  className = "",
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-3xl"} ${className}`}>
      {/* Eyebrow & Index */}
      <div className={`flex items-center gap-2 mb-3 text-xs tracking-wider uppercase font-mono text-muted ${centered ? "justify-center" : ""}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary leading-[1.15]">
        {title}{" "}
        {italicWord && (
          <span className="font-serif italic font-normal text-primary/90">
            {italicWord}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-secondary font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
