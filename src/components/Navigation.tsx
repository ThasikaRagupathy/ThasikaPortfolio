"use client";

import React, { useState, useEffect } from "react";
import { NAV, PROFILE } from "@/lib/data";
import { useActiveSection, useScrollProgress } from "@/lib/hooks";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(NAV.map((n) => n.id));
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-black/10 z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-primary transition-[width] duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Navigation Header */}
      <header
        className={`fixed top-3 left-0 right-0 z-40 px-4 sm:px-6 transition-all duration-300 ${
          isScrolled ? "py-1" : "py-3"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <nav
            aria-label="Main Navigation"
            className={`flex items-center justify-between px-4 py-2.5 sm:px-5 sm:py-3 rounded-full transition-all duration-300 ${
              isScrolled
                ? "bg-warm-bg/85 backdrop-blur-md shadow-sm border border-black/10"
                : "bg-transparent border border-transparent"
            }`}
          >
            {/* Brand Logo & Name */}
            <a
              href="#"
              className="flex items-center gap-3 group focus-visible:outline focus-visible:outline-primary rounded-full"
              aria-label={`${PROFILE.name} - Back to top`}
            >
              {/* Outlined Circular Monogram */}
              <div className="w-8 h-8 rounded-full border border-black/30 group-hover:border-black flex items-center justify-center transition-colors bg-white/60">
                <span className="font-mono text-xs font-semibold tracking-wider text-primary">
                  {PROFILE.initials}
                </span>
              </div>
              <span className="text-sm font-semibold tracking-tight text-primary hidden min-[420px]:inline-block">
                {PROFILE.name}
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-soft/70 backdrop-blur-sm px-2 py-1.5 rounded-full border border-black/5">
              {NAV.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`relative px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? "text-primary font-semibold bg-white shadow-xs"
                        : "text-muted hover:text-primary hover:bg-black/5"
                    }`}
                  >
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Right Action / Mobile Menu Trigger */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href={PROFILE.resumePdfUrl}
                download="Thasika_Ragupathy_CV.pdf"
                className="hidden lg:inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full border border-black/20 hover:border-black bg-white/80 hover:bg-white text-primary transition-colors"
              >
                <span>CV</span>
                <ArrowUpRight className="w-3 h-3 text-muted" />
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-9 h-9 rounded-full border border-black/15 bg-white/80 flex items-center justify-center text-primary hover:bg-white transition-colors focus-visible:outline-primary"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 bg-warm-bg flex flex-col justify-between p-6 md:hidden animate-in fade-in duration-200"
        >
          {/* Top Bar inside overlay */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-black/30 flex items-center justify-center bg-white">
                <span className="font-mono text-xs font-semibold">{PROFILE.initials}</span>
              </div>
              <span className="text-sm font-semibold">{PROFILE.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={closeMobileMenu}
                className="w-9 h-9 rounded-full border border-black/20 bg-white flex items-center justify-center text-primary"
                aria-label="Close navigation menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Navigation Links List */}
          <div className="flex flex-col gap-3 my-auto py-8">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={closeMobileMenu}
                className="flex items-baseline justify-between py-2 border-b border-black/5 text-primary hover:text-muted transition-colors"
              >
                <span className="text-2xl font-semibold tracking-tight">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-black/10 flex flex-col gap-3">
            <a
              href={PROFILE.resumePdfUrl}
              download="Thasika_Ragupathy_CV.pdf"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 py-3 rounded-full bg-primary text-warm-bg text-sm font-medium"
            >
              <span>Download Resume (PDF)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="flex items-center justify-between text-xs text-muted pt-1">
              <span>{PROFILE.university}</span>
              <span>{PROFILE.location}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
