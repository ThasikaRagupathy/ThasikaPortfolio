
"use client";

import { ArrowDown, Sparkles } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Selected projects"
      className="relative isolate overflow-hidden border-t border-violet-100/70 bg-linear-to-br from-[#faf7ff] via-[#fff8fb] to-[#f0fbff] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
    >
      {/* Soft ambient gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-purple-300/25 blur-[100px] sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-[35%] -z-10 h-80 w-80 rounded-full bg-pink-300/25 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-sky-300/20 blur-[100px]"
      />

      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <Reveal>
          <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/65 px-4 py-2 shadow-sm shadow-violet-100/60 backdrop-blur-xl">
                <Sparkles
                  aria-hidden="true"
                  className="h-4 w-4 text-violet-500"
                />
                <span className="text-xs font-semibold tracking-wide text-violet-700">
                  A little creativity, a lot of code
                </span>
              </div>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                Things I&apos;ve brought to life.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                A collection of ideas turned into digital experiences,
                from thoughtful interfaces to useful web applications.
              </p>
            </div>

            <a
              href="#project-gallery"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/80 bg-white/65 px-5 py-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            >
              Explore my work
              <ArrowDown
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-y-1"
              />
            </a>
          </div>
        </Reveal>

        {/* Glass statistics bar */}
        <Reveal delayMs={80}>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/80 bg-white/55 p-4 shadow-sm shadow-violet-100/40 backdrop-blur-xl sm:mb-10 sm:px-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                The collection
              </p>
              <p className="mt-1 text-sm font-medium text-slate-800 sm:text-base">
                Selected projects & experiments
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-100 to-pink-100 text-sm font-bold text-violet-700">
                {String(PROJECTS.length).padStart(2, "0")}
              </span>
              <span className="text-xs text-slate-500 sm:text-sm">
                Projects and counting
              </span>
            </div>
          </div>
        </Reveal>

        {/* Project gallery */}
        <div
          id="project-gallery"
          className="grid min-w-0 auto-rows-fr grid-cols-1 items-stretch gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-8"
        >
          {PROJECTS.map((project, index) => (
            <Reveal
              key={`${String(project.number)}-${index}`}
              delayMs={(index % 2) * 100}
              className="min-w-0"
            >
              <ProjectCard
                project={project}
                accentIndex={index}
              />
            </Reveal>
          ))}
        </div>

        {/* Closing message */}
        <Reveal delayMs={100}>
          <div className="mt-12 rounded-3xl border border-white/80 bg-white/45 px-5 py-8 text-center shadow-sm shadow-violet-100/40 backdrop-blur-xl sm:mt-16 sm:px-8 sm:py-10">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-violet-100 via-pink-100 to-sky-100">
              <Sparkles
                aria-hidden="true"
                className="h-5 w-5 text-violet-600"
              />
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              Every project starts with an idea.
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-600">
              I enjoy exploring new technologies, solving problems,
              and creating digital experiences that feel good to use.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200/60 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-200/70"
            >
              Let&apos;s connect
              <Sparkles aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
