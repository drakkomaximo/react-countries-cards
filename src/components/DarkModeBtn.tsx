"use client";
import { Dictionary } from "@/utils/interfaces";
import { useCountries, useThemeMode } from "@/hooks";

export const DarkModeBtn = () => {
  const { handleTheme } = useThemeMode();
  const {isDarkModeActive} = useCountries()

  return (
    <div className="flex justify-center items-center">
      <button
        className="flex justify-end items-center text-end dark:text-white font-extrabold"
        onClick={handleTheme}
      >
        {isDarkModeActive ? (
          <>
            <i className="ti ti-sun mr-2"></i>
            <span className="hidden xs:block">{Dictionary.LIGHTMODE}</span>
          </>
        ) : (
          <>
            <i className="ti ti-moon-filled mr-2 "></i>
            <span className="hidden xs:block">{Dictionary.DARKMODE}</span>
          </>
        )}
      </button>
    </div>
  );
};
