"use client";

import React, { useState } from "react";
import { PROFILE } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import {
  Mail,
  Phone,
  Copy,
  Check,
  ArrowUp,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      aria-label="Contact and Footer"
      className="bg-primary text-warm-bg pt-24 sm:pt-32 pb-12 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Subtle Geometric Decorative Watermark in background */}
      <div
        className="absolute top-0 right-0 w-96 h-96 border border-white/5 rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 border border-white/5 rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warm-bg/10 text-warm-bg/70 text-xs font-mono tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Collaborations & Roles</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-warm-bg leading-[1.12]">
              Let's build something{" "}
              <span className="font-serif italic font-normal text-warm-bg/90">
                meaningful
              </span>{" "}
              together.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-warm-bg/70 leading-relaxed font-normal max-w-2xl">
              {PROFILE.contactSupporting}
            </p>
          </div>
        </Reveal>

        {/* Contact Links Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Email Direct Block */}
          <Reveal delayMs={100}>
            <div className="bg-warm-bg/5 hover:bg-warm-bg/10 border border-white/10 rounded-2xl p-6 sm:p-8 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-warm-bg/60">
                  Direct Email
                </span>
                <Mail className="w-4 h-4 text-warm-bg/70" />
              </div>

              <a
                href={`mailto:${PROFILE.email}`}
                className="text-lg sm:text-2xl font-semibold text-warm-bg hover:text-warm-bg/80 transition-colors block break-all tracking-tight"
              >
                {PROFILE.email}
              </a>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary text-xs font-mono font-medium hover:bg-white/90 transition-all cursor-pointer active:scale-95"
                  aria-live="polite"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </Reveal>

          {/* Telephone & Professional Socials */}
          <Reveal delayMs={200}>
            <div className="bg-warm-bg/5 hover:bg-warm-bg/10 border border-white/10 rounded-2xl p-6 sm:p-8 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-warm-bg/60">
                    Phone & Networks
                  </span>
                  <Phone className="w-4 h-4 text-warm-bg/70" />
                </div>

                <a
                  href={`tel:${PROFILE.phone}`}
                  className="text-lg sm:text-2xl font-semibold text-warm-bg hover:text-warm-bg/80 transition-colors block tracking-tight"
                >
                  {PROFILE.phoneDisplay}
                </a>
              </div>

              {/* Profiles */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-4">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-bg/10 hover:bg-warm-bg/20 text-warm-bg text-xs font-mono transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-warm-bg/60" />
                </a>

                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-bg/10 hover:bg-warm-bg/20 text-warm-bg text-xs font-mono transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-warm-bg/60" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Footer Bar */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-warm-bg/60">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-warm-bg">{PROFILE.name}</span>
            <span>·</span>
            <span>{new Date().getFullYear()}</span>
            <span>·</span>
            <span>University of Vavuniya</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-warm-bg transition-colors cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
