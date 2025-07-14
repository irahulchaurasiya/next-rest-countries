"use client";

import React, { useEffect, useState } from "react";
import BedtimeSharpIcon from "@mui/icons-material/BedtimeSharp";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <header className="bg-[#f3f3f3] dark:bg-[#59545480] text-black dark:text-white w-full section-padding-x py-5 lg:py-10 text-base lg:text-2xl">
      <div className="max-w-[1920px] mx-auto flex justify-between items-center">
        <a href="/" className="font-bold cursor-pointer">
          Where in the World?
        </a>
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="flex items-center gap-1 text-xs lg:text-base cursor-pointer"
          role="switch"
          aria-checked={isDark}
          aria-label="Toggle dark mode"
        >
          {isDark ? <BedtimeSharpIcon /> : <BedtimeOutlinedIcon />}
          <span>Dark Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
