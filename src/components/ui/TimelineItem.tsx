import React from "react";

interface TimelineItemProps {
  index: string;
  category: "Leadership" | "Volunteering" | "Education";
  titleOrRole: string;
  organizationOrInst: string;
  period: string;
  description: string;
}

export function TimelineItem({
  index,
  category,
  titleOrRole,
  organizationOrInst,
  period,
  description,
}: TimelineItemProps) {
  const categoryStyles = {
    Leadership: "bg-primary text-warm-bg",
    Volunteering: "bg-soft text-primary",
    Education: "bg-white text-primary border border-black/10",
  };

  return (
    <div className="relative pl-8 sm:pl-10 pb-10 sm:pb-12 group last:pb-0">
      {/* Small Numbered Marker on the timeline spine */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border border-black/25 flex items-center justify-center font-mono text-[10px] font-bold text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-warm-bg transition-all shadow-2xs -translate-x-2.75">
        {index}
      </div>

      {/* Item Card */}
      <div className="bg-white/80 hover:bg-white p-5 sm:p-6 rounded-2xl border border-black/8 hover:border-black/20 transition-all duration-300 shadow-2xs hover:shadow-md">
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span
            className={`px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase font-medium ${categoryStyles[category]}`}
          >
            {category}
          </span>
          <span className="font-mono text-xs font-semibold text-muted">
            {period}
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-base sm:text-lg font-bold text-primary tracking-tight">
          {titleOrRole}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-muted mt-0.5">
          {organizationOrInst}
        </p>

        {/* Responsibilities */}
        <p className="mt-3 text-xs sm:text-sm text-secondary leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
