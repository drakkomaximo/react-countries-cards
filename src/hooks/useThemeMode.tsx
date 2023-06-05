'use client'
import { Dictionary, ThemeMode, ThemeModeType } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import { useCountries } from "./useCountries";

const initialThemeState = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem(Dictionary.THEME)) {
      return localStorage.getItem(Dictionary.THEME) as ThemeModeType;
    }
    return window.matchMedia(`(prefers-color-scheme: ${ThemeMode.DARKMODE})`)
      .matches
      ? ThemeMode.DARKMODE
      : ThemeMode.LIGHTMODE;
  }

  return ThemeMode.LIGHTMODE;
};

export const useThemeMode = () => {
  const [theme, setTheme] = useState<ThemeModeType>(initialThemeState());
  const { setDarkMode } = useCountries();

  const handleTheme = () => {
    setTheme(
      theme === ThemeMode.LIGHTMODE ? ThemeMode.DARKMODE : ThemeMode.LIGHTMODE
    );
  };

  useEffect(() => {
    if (theme === ThemeMode.DARKMODE) {
      document.documentElement.classList.add(ThemeMode.DARKMODE);
      localStorage.setItem(Dictionary.THEME, ThemeMode.DARKMODE);
      setDarkMode({ flag: true });
    } else {
      document.documentElement.classList.remove(ThemeMode.DARKMODE);
      localStorage.setItem(Dictionary.THEME, ThemeMode.LIGHTMODE);
      setDarkMode({ flag: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return {
    theme,
    handleTheme,
  };
};
