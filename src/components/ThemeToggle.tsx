"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-indigo-500/50 flex items-center justify-center transition-all duration-300 hover:scale-105"
      aria-label="Toggle theme"
    >
      <svg
        className="w-5 h-5 text-amber-500 transition-all duration-300 absolute"
        style={{ opacity: isDark ? 0 : 1, transform: isDark ? "rotate(-90deg) scale(0)" : "rotate(0) scale(1)" }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
      <svg
        className="w-5 h-5 text-indigo-400 transition-all duration-300 absolute"
        style={{ opacity: isDark ? 1 : 0, transform: isDark ? "rotate(0) scale(1)" : "rotate(90deg) scale(0)" }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
