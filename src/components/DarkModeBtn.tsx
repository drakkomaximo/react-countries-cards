"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <p
          className="flex items-center h-6 cursor-pointer dark:text-white font-extrabold"
          onClick={() => {
            setTheme("light");
          }}
        >
          <FontAwesomeIcon
            icon={faSun}
            style={{ fontSize: 20, color: "hsl(0, 0%, 100%)", marginRight: '0.5rem' }}
          />{" "}
          Light mode
        </p>
      ) : (
        <p
          className="h-6 cursor-pointer font-extrabold text-veryLightBlue"
          onClick={() => {
            setTheme("dark");
          }}
        >
          <FontAwesomeIcon
            icon={faMoon}
            style={{ fontSize: 20, color: "hsl(200, 15%, 8%)", marginRight: '0.5rem' }}
          />{" "}
          Dark mode
        </p>
      )}
    </div>
  );
};
