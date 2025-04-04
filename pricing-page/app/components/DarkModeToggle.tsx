"use client";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle({
  isDark,
  toggleDarkMode,
}: {
  isDark: boolean;
  toggleDarkMode: () => void;
}) {
  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-full shadow transition-all duration-300 hover:scale-105"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
      <span className="text-sm font-medium">
        {isDark ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}
