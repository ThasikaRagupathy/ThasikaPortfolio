"use client";

import React, { useState, useMemo } from "react";
import { EDUCATION, LEADERSHIP, VOLUNTEERING } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { Reveal } from "@/components/ui/Reveal";
import { Sparkles, ArrowRight } from "lucide-react";

type JourneyCategory = "All" | "Leadership" | "Volunteering" | "Education";

interface UnifiedJourneyItem {
  id: string;
  category: "Leadership" | "Volunteering" | "Education";
  titleOrRole: string;
  organizationOrInst: string;
  period: string;
  description: string;
}

export function Experience() {
  const [activeTab, setActiveTab] = useState<JourneyCategory>("All");

  const unifiedJourney: UnifiedJourneyItem[] = useMemo(() => {
    const list: UnifiedJourneyItem[] = [];

    // Leadership entries
    LEADERSHIP.forEach((item, idx) => {
      list.push({
        id: `lead-${idx}`,
        category: "Leadership",
        titleOrRole: item.role,
        organizationOrInst: item.organization,
        period: item.period,
        description: item.description,
      });
    });

    // Volunteering entries
    VOLUNTEERING.forEach((item, idx) => {
      list.push({
        id: `vol-${idx}`,
        category: "Volunteering",
        titleOrRole: item.role,
        organizationOrInst: item.event,
        period: item.period,
        description: item.description,
      });
    });

    // Education entries
    EDUCATION.forEach((item, idx) => {
      list.push({
        id: `edu-${idx}`,
        category: "Education",
        titleOrRole: item.degree,
        organizationOrInst: item.institution,
        period: item.period,
        description: item.description || "",
      });
    });

    return list;
  }, []);

  const filteredItems = useMemo(() => {
    if (activeTab === "All") return unifiedJourney;
    return unifiedJourney.filter((item) => item.category === activeTab);
  }, [activeTab, unifiedJourney]);

  return (
    <section
      id="experience"
      aria-label="Experience, Leadership & Journey"
      className="py-24 sm:py-32 px-4 sm:px-6 max-w-5xl mx-auto border-t border-black/5"
    >
      <Reveal>
        <SectionHeading
          title="Experience, leadership & activities"
          subtitle="A clear chronological record of university leadership, student representation, conference volunteering, and foundational education."
        />
      </Reveal>

      {/* Filter Tabs */}
      <Reveal delayMs={100}>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-10">
          {(["All", "Leadership", "Volunteering", "Education"] as JourneyCategory[]).map(
            (tab) => {
              const count =
                tab === "All"
                  ? unifiedJourney.length
                  : unifiedJourney.filter((i) => i.category === tab).length;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all shrink-0 cursor-pointer ${
                    activeTab === tab
                      ? "bg-primary text-warm-bg shadow-xs font-semibold"
                      : "bg-white/80 hover:bg-white text-muted hover:text-primary border border-black/8"
                  }`}
                >
                  {tab === "All" ? "Complete Timeline" : tab} ({count})
                </button>
              );
            }
          )}
        </div>
      </Reveal>

      {/* Vertical Timeline with Central Spine */}
      <div className="relative border-l border-black/15 ml-3 sm:ml-4">
        {filteredItems.map((item, index) => (
          <Reveal key={item.id} delayMs={(index % 4) * 80}>
            <TimelineItem
              index={String(index + 1).padStart(2, "0")}
              category={item.category}
              titleOrRole={item.titleOrRole}
              organizationOrInst={item.organizationOrInst}
              period={item.period}
              description={item.description}
            />
          </Reveal>
        ))}
      </div>

      {/* What's Next Invitation Banner */}
      <Reveal delayMs={150} className="mt-14">
        <div className="bg-primary text-warm-bg p-8 sm:p-10 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-warm-bg/60 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-warm-bg/80" />
              <span>Looking Forward</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-warm-bg">
              What's next?
            </h3>
            <p className="text-sm text-warm-bg/70 leading-relaxed font-normal">
              Seeking undergraduate internships, junior software development positions, and collaborative tech initiatives where I can contribute full-stack engineering, UX design, and diligent problem-solving.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary text-xs font-mono font-semibold hover:bg-white/90 transition-all shrink-0 active:scale-95"
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
