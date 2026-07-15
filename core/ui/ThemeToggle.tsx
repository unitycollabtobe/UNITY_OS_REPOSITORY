"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;

    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";

    setTheme(next);

    localStorage.setItem("theme", next);

    document.documentElement.setAttribute("data-theme", next);
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}