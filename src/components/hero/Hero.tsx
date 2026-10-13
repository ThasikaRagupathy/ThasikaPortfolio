"use client";

import React, { useRef, useState, useEffect } from "react";
import { PROFILE } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Volume2, VolumeX, Play, Pause, ArrowDown, FileText } from "lucide-react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isVideoAvailable, setIsVideoAvailable] = useState(true);

  // Autoplay management and IntersectionObserver viewport tracking
  useEffect(() => {
    const video = videoRef.current;
    const hero = heroSectionRef.current;
    if (!video || !hero) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Graceful autoplay attempt (must start muted per browser policy)
    video.muted = true;
    setIsMuted(true);

    if (!prefersReducedMotion) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay was prevented by browser policy; user can play manually
            setIsPlaying(false);
          });
      }
    }

    // Pause when hero is mostly out of view, resume when returned
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;
          if (entry.intersectionRatio < 0.25) {
            if (!videoRef.current.paused) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          } else if (entry.intersectionRatio >= 0.35) {
            if (!prefersReducedMotion && videoRef.current.paused) {
              videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
            }
          }
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    // If unmuting while paused, resume playing
    if (!nextMuted && video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <section
      ref={heroSectionRef}
      id="hero"
      aria-label="Introduction and Video Centrepiece"
      className="relative min-h-[92vh] sm:min-h-screen grid place-items-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden bg-warm-bg"
    >
      {/* Background Large Outlined THASIKA Typography */}
      <div
        className="pointer-events-none absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 select-none md:flex"
        aria-hidden="true"
      >
        <span className="rotate-360 text-[clamp(1rem,3vw,3rem)] font-black uppercase tracking-tight text-outline-subtle opacity-70 [writing-mode:vertical-rl]">
          THASIKA
        </span>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 sm:gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:pr-12 lg:gap-16">

        {/* Video Centrepiece Container */}
        <div className="group relative my-2 w-full max-w-85 sm:my-4 sm:max-w-100 md:max-w-none">
          {/* Subtle Outer Card Border & Backdrop */}
          <div className="relative aspect-4/5 sm:aspect-3/4 w-full rounded-2xl overflow-hidden bg-soft border border-black/15 shadow-xl transition-all duration-300">
            {isVideoAvailable ? (
              <video
                ref={videoRef}
                playsInline
                loop
                muted={isMuted}
                preload="metadata"
                onLoadedData={() => setHasLoaded(true)}
                onError={() => setIsVideoAvailable(false)}
                className="w-full h-full object-cover select-none"
                aria-label="Introduction video featuring Thasika Ragupathy"
              >
                <source src={PROFILE.introVideoUrl} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            ) : (
              /* Fallback if video asset is missing or unsupported */
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-soft">
                <div className="w-16 h-16 rounded-full border border-black/20 flex items-center justify-center mb-4">
                  <span className="font-mono text-xl font-bold">{PROFILE.initials}</span>
                </div>
                <p className="text-sm font-medium text-primary">{PROFILE.name}</p>
                <p className="text-xs text-muted mt-1">{PROFILE.primaryTitle}</p>
              </div>
            )}

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4 pointer-events-none">
              {/* Top Bar with Live Tag */}
              <div className="flex items-center justify-between pointer-events-auto">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Talking Video</span>
                </span>
              </div>

              {/* Bottom Interactive Playback Controls */}
              <div className="flex items-center justify-between pointer-events-auto">
                {/* Play / Pause Toggle */}
                <button
                  type="button"
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-primary flex items-center justify-center shadow-md transition-transform active:scale-90 focus-visible:outline-2 focus-visible:outline-white"
                  aria-label={isPlaying ? "Pause introduction video" : "Play introduction video"}
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                </button>

                {/* Audio Sound Toggle */}
                <button
                  type="button"
                  onClick={toggleSound}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/75 hover:bg-black text-white text-xs font-mono transition-transform active:scale-95 shadow-md focus-visible:outline focus-visible:outline-white"
                  aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-4 h-4 text-white/80" />
                      <span>UNMUTE</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-emerald-300" />
                      <span>MUTED OFF</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Always visible mobile sound pill in bottom corner */}
            <div className="absolute bottom-3 right-3 sm:hidden z-20">
              <button
                type="button"
                onClick={toggleSound}
                className="w-9 h-9 rounded-full bg-black/75 text-white flex items-center justify-center backdrop-blur-sm"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-300" />}
              </button>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left">
        {/* Eyebrow Label */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-secondary shadow-2xs sm:text-xs">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          <span>{PROFILE.eyebrow}</span>
        </div>

        {/* Main Heading */}
        <h1 className="mt-2 max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl font-(family-name:--font-poppins)">
          Building digital experiences with{" "}
          <span className="font-medium text-primary/90">code, creativity,</span>{" "}
          and curiosity.
        </h1>

        {/* Introduction Copy */}
        <p className="mt-5 max-w-2xl text-sm font-normal leading-relaxed text-secondary sm:text-base md:text-lg">
          {PROFILE.heroIntro}
        </p>

        {/* Clear Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 md:justify-start lg:flex-nowrap">
          <Button
            href="#projects"
            variant="primary"
            size="md"
            icon={<ArrowDown className="w-4 h-4" />}
            className="whitespace-nowrap"
          >
            Explore My Work
          </Button>

          <Button
            href="#contact"
            variant="secondary"
            size="md"
            className="whitespace-nowrap"
          >
            Let's Connect
          </Button>

          <Button
            href={PROFILE.resumePdfUrl}
            download="Thasika_Ragupathy_CV.pdf"
            variant="outline"
            size="md"
            icon={<FileText className="w-4 h-4" />}
            className="whitespace-nowrap"
          >
            Download Resume
          </Button>
        </div>
        </div>
      </div>
    </section>
  );
}
