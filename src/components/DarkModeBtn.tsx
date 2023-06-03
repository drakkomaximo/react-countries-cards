"use client";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Dictionary } from "@/utils/interfaces";

export const DarkModeBtn = () => {
  const { systemTheme, theme, setTheme } = useTheme();


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
          {Dictionary.LIGHTMODE}
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
          {Dictionary.DARKMODE}
        </p>
      )}
    </div>
  );
};
