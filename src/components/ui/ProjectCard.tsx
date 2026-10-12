
"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ExternalLink,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";
import { ProjectIllustration } from "@/components/ui/ProjectIllustrations";

type ProjectCardProps<T extends object> = {
  project: T;
  isExpandedByDefault?: boolean;
  accentIndex?: number;
};

const accents = [
  {
    card: "from-violet-100/90 via-purple-50/80 to-white/80",
    border: "hover:border-violet-200",
    orb: "bg-violet-300/40",
    badge: "border-violet-200/80 bg-violet-100/80 text-violet-700",
    icon: "bg-gradient-to-br from-violet-500 to-purple-600",
    link: "text-violet-700 hover:text-violet-900",
    dot: "bg-violet-500",
  },
  {
    card: "from-pink-100/90 via-rose-50/80 to-white/80",
    border: "hover:border-pink-200",
    orb: "bg-pink-300/40",
    badge: "border-pink-200/80 bg-pink-100/80 text-pink-700",
    icon: "bg-gradient-to-br from-pink-500 to-rose-500",
    link: "text-pink-700 hover:text-pink-900",
    dot: "bg-pink-500",
  },
  {
    card: "from-sky-100/90 via-blue-50/80 to-white/80",
    border: "hover:border-sky-200",
    orb: "bg-sky-300/40",
    badge: "border-sky-200/80 bg-sky-100/80 text-sky-700",
    icon: "bg-gradient-to-br from-sky-500 to-blue-600",
    link: "text-sky-700 hover:text-sky-900",
    dot: "bg-sky-500",
  },
  {
    card: "from-emerald-100/90 via-teal-50/80 to-white/80",
    border: "hover:border-emerald-200",
    orb: "bg-emerald-300/40",
    badge: "border-emerald-200/80 bg-emerald-100/80 text-emerald-700",
    icon: "bg-gradient-to-br from-emerald-500 to-teal-600",
    link: "text-emerald-700 hover:text-emerald-900",
    dot: "bg-emerald-500",
  },
  {
    card: "from-amber-100/90 via-orange-50/80 to-white/80",
    border: "hover:border-amber-200",
    orb: "bg-amber-300/40",
    badge: "border-amber-200/80 bg-amber-100/80 text-amber-700",
    icon: "bg-gradient-to-br from-amber-500 to-orange-500",
    link: "text-amber-700 hover:text-amber-900",
    dot: "bg-amber-500",
  },
];

function asRecord(value: object): Record<string, unknown> {
  return value as Record<string, unknown>;
}

function getText(
  data: Record<string, unknown>,
  keys: string[],
  fallback = "",
): string {
  for (const key of keys) {
    const value = data[key];

    if (typeof value === "string" && value.trim()) {
      return value;
    }

    if (typeof value === "number") {
      return String(value);
    }
  }

  return fallback;
}

function getArray(
  data: Record<string, unknown>,
  keys: string[],
): string[] {
  for (const key of keys) {
    const value = data[key];

    if (Array.isArray(value)) {
      return value.filter(
        (item): item is string =>
          typeof item === "string" && item.trim().length > 0,
      );
    }
  }

  return [];
}

function getLink(
  data: Record<string, unknown>,
  directKeys: string[],
  nestedKeys: string[],
): string {
  const direct = getText(data, directKeys);

  if (direct) return direct;

  const links = data.links;

  if (links && typeof links === "object") {
    return getText(links as Record<string, unknown>, nestedKeys);
  }

  return "";
}

function isWebUrl(value: string): boolean {
  return /^https?:\/\//i.test(value);
}

export default function ProjectCard<T extends object>({
  project,
  isExpandedByDefault = false,
  accentIndex = 0,
}: ProjectCardProps<T>) {
  const [expanded, setExpanded] = useState(isExpandedByDefault);
  const [imageFailed, setImageFailed] = useState(false);

  const data = asRecord(project);
  const accent = accents[accentIndex % accents.length];

  const number = getText(data, ["number", "id"], String(accentIndex + 1));
  const title = getText(
    data,
    ["title", "name", "projectName"],
    "Untitled Project",
  );
  const description = getText(
    data,
    ["description", "summary", "overview"],
    "A project focused on creating useful and thoughtful digital experiences.",
  );
  const category = getText(
    data,
    ["category", "type", "label"],
    "Selected project",
  );

  const technologies = getArray(data, [
    "technologies",
    "techStack",
    "tech",
    "stack",
  ]);

  const features = getArray(data, [
    "features",
    "highlights",
    "keyFeatures",
  ]);

  const previewImage = getText(data, [
    "image",
    "imageUrl",
    "previewImage",
    "thumbnail",
    "preview",
  ]);

  const githubUrl = getLink(
    data,
    ["githubUrl", "github", "repoUrl", "repositoryUrl"],
    ["github", "githubUrl", "repository", "repo"],
  );

  const liveUrl = getLink(
    data,
    ["liveUrl", "demoUrl", "websiteUrl", "deploymentUrl"],
    ["live", "demo", "website", "liveUrl"],
  );

  const validGithub = isWebUrl(githubUrl) ? githubUrl : "";
  const validLive = isWebUrl(liveUrl) ? liveUrl : "";
  const validImage = !imageFailed && isWebUrl(previewImage) ? previewImage : "";
  const imageAlt = getText(data, ["imageAlt"], `${title} project photo`);
  const imageCredit = getText(data, ["imageCredit"]);
  const imageSourceUrl = getText(data, ["imageSourceUrl"]);
  const uiConcept = getText(data, ["uiConcept"], "event");

  return (
    <article
      className={`
        group relative flex h-full min-w-0 flex-col
        overflow-hidden rounded-[1.75rem]
        border border-white/90
        bg-linear-to-br ${accent.card}
        shadow-[0_8px_35px_rgba(100,80,160,0.07)]
        backdrop-blur-2xl
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-[0_18px_50px_rgba(100,80,160,0.13)]
        ${accent.border}
      `}
    >
      {/* Decorative glass orbs */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-12 -top-12 z-0 h-36 w-36 rounded-full blur-3xl ${accent.orb}`}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -left-12 z-0 h-36 w-36 rounded-full bg-white/80 blur-3xl"
      />

      {/* Project header */}
      <div className="relative z-10 flex items-center justify-between gap-3 px-5 pb-3 pt-5 sm:px-7 sm:pt-7">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-bold text-white shadow-md ${accent.icon}`}
          >
            {String(number).padStart(2, "0")}
          </span>

          <div className="min-w-0">
            <p className="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              {category}
            </p>
            <div className="mt-1 flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
              <span className="text-[10px] text-slate-500">
                Project showcase
              </span>
            </div>
          </div>
        </div>

        <Sparkles
          aria-hidden="true"
          className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
        />
      </div>

      {/* Preview area */}
      <div className="relative z-10 mx-4 mt-2 overflow-hidden rounded-2xl border border-white/90 bg-white/45 shadow-sm backdrop-blur-xl sm:mx-6">
        <div className="relative aspect-16/10 w-full overflow-hidden sm:aspect-video">
          {validImage ? (
            <img
              src={validImage}
              alt={imageAlt}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <>
              <div className="relative h-full overflow-hidden bg-warm-bg p-2 sm:p-3">
                <ProjectIllustration concept={uiConcept} />
              </div>
            <div className="hidden relative h-full items-center justify-center overflow-hidden bg-linear-to-br from-white/70 via-white/40 to-violet-100/50 p-4 sm:p-8">
              <div
                aria-hidden="true"
                className={`absolute -right-10 -top-10 h-36 w-36 rounded-full blur-2xl ${accent.orb}`}
              />

              <div className="relative w-full max-w-sm rounded-2xl border border-white/90 bg-white/65 p-4 shadow-[0_10px_35px_rgba(80,70,130,0.09)] backdrop-blur-xl sm:p-6">
                <div className="flex items-center gap-1.5 border-b border-slate-100 pb-3">
                  <span className="h-2 w-2 rounded-full bg-rose-300" />
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />

                  <span className="ml-auto font-mono text-[9px] text-slate-400">
                    PROJECT / {String(number).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white ${accent.icon}`}
                  >
                    <Layers3 aria-hidden="true" className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="wrap-break-word text-base font-semibold leading-snug text-slate-800 sm:text-lg">
                      {title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {technologies.slice(0, 4).map((technology) => (
                    <span
                      key={technology}
                      className={`rounded-full border px-2.5 py-1 text-[9px] font-medium ${accent.badge}`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                  <span className="text-[10px] text-slate-400">
                    Crafted with care
                  </span>
                  <ArrowDownRight
                    aria-hidden="true"
                    className="h-4 w-4 text-slate-500"
                  />
                </div>
              </div>
            </div>
            </>
          )}

          {validImage && imageCredit && isWebUrl(imageSourceUrl) && (
            <a
              href={imageSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 left-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/75"
            >
              Photo: {imageCredit}
            </a>
          )}

          {validLive && (
            <a
              href={validLive}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} live demo`}
              className={`absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-2xl text-white shadow-lg transition-transform hover:scale-105 sm:bottom-4 sm:right-4 ${accent.icon}`}
            >
              <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      {/* Project information */}
      <div className="relative z-10 flex min-w-0 flex-1 flex-col p-5 sm:p-7">
        <h3 className="wrap-break-word text-xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-2xl">
          {title}
        </h3>

        <p className="mt-3 line-clamp-3 min-h-21 wrap-break-word text-sm leading-7 text-slate-600">
          {description}
        </p>

        {/* Technology tags */}
        {technologies.length > 0 && (
          <div className="mt-5">
            <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Built with
            </p>

            <div className="flex min-h-12 flex-wrap content-start gap-2">
              {technologies.slice(0, 4).map((technology) => (
                <span
                  key={technology}
                  className={`max-w-full wrap-break-word rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${accent.badge}`}
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Expandable features */}
        {features.length > 0 && (
          <div className="mt-5 border-t border-white/90 pt-4">
            <button
              type="button"
              onClick={() => setExpanded((current) => !current)}
              aria-expanded={expanded}
              className="flex w-full items-center justify-between gap-3 rounded-xl py-1 text-left text-sm font-medium text-slate-700 transition-colors hover:text-slate-950"
            >
              <span>
                {expanded ? "Hide project details" : "Explore project details"}
              </span>

              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white bg-white/70 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              >
                <ChevronDown aria-hidden="true" className="h-4 w-4" />
              </span>
            </button>

            {expanded && (
              <ul className="mt-4 space-y-3">
                {features.map((feature, index) => (
                  <li
                    key={`${index}-${feature}`}
                    className="flex min-w-0 items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${accent.icon}`}
                    >
                      <Check aria-hidden="true" className="h-3 w-3" />
                    </span>

                    <span className="min-w-0 wrap-break-word">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Links */}
        {(validGithub || validLive) && (
          <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-white/90 pt-5">
            {validGithub && (
              <a
                href={validGithub}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white bg-white/65 px-4 py-2 text-xs font-semibold shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white sm:text-sm ${accent.link}`}
              >
                <Code2 aria-hidden="true" className="h-4 w-4" />
                Source code
                <ExternalLink aria-hidden="true" className="h-3 w-3" />
              </a>
            )}

            {validLive && (
              <a
                href={validLive}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 sm:text-sm ${accent.icon}`}
              >
                Live preview
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
