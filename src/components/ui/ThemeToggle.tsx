"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ size = "default" }: { size?: "default" | "large" }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const syncThemeState = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    syncThemeState();
    window.addEventListener("portfolio-theme-change", syncThemeState);
    return () => window.removeEventListener("portfolio-theme-change", syncThemeState);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    document.documentElement.style.colorScheme = nextIsDark ? "dark" : "light";
    try {
      window.localStorage.setItem("portfolio-theme", nextIsDark ? "dark" : "light");
    } catch {
      // Keep the control usable when storage is disabled.
    }
    window.dispatchEvent(new Event("portfolio-theme-change"));
    setIsDark(nextIsDark);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={`flex shrink-0 items-center justify-center rounded-full border border-border-subtle bg-surface text-primary transition-colors hover:bg-soft focus-visible:outline-primary ${size === "large" ? "h-11 w-11" : "h-9 w-9"}`}
    >
      {isDark ? <Sun aria-hidden="true" className={size === "large" ? "h-5 w-5" : "h-4 w-4"} /> : <Moon aria-hidden="true" className={size === "large" ? "h-5 w-5" : "h-4 w-4"} />}
    </button>
  );
}
