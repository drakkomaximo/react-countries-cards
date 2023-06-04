"use client";
import { useTheme } from "next-themes";
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
          <i className="ti ti-sun mr-2"></i>
          {Dictionary.LIGHTMODE}
        </p>
      ) : (
        <p
          className="h-6 cursor-pointer font-extrabold text-veryLightBlue"
          onClick={() => {
            setTheme("dark");
          }}
        >
          <i className="ti ti-moon-filled mr-2"></i>
          {Dictionary.DARKMODE}
        </p>
      )}
    </div>
  );
};
