"use client";
import { useTheme } from "next-themes";
import { Dictionary } from "@/utils/interfaces";

export const DarkModeBtn = () => {
  const { systemTheme, theme, setTheme } = useTheme();


  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex justify-center items-center">
      {currentTheme === "dark" ? (
        <p
          className="flex justify-end items-center text-end cursor-pointer dark:text-white font-extrabold"
          onClick={() => {
            setTheme("light");
          }}
        >
          <i className="ti ti-sun mr-2"></i>
          <span className="hidden xs:block">{Dictionary.LIGHTMODE}</span>
        </p>
      ) : (
        <p
          className="flex justify-end items-center text-end cursor-pointer font-extrabold text-veryLightBlue"
          onClick={() => {
            setTheme("dark");
          }}
        >
          <i className="ti ti-moon-filled mr-2 "></i>
          <span className="hidden xs:block">{Dictionary.DARKMODE}</span>
        </p>
      )}
    </div>
  );
};
