'use client'

import { PlanetIcon } from "@/assets/icons";
import { Dictionary } from "@/utils/interfaces";
import { useTheme } from "next-themes";
import React from "react";

export const CountryNotFound = () => {
  const { systemTheme, theme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex flex-wrap flex-col w-full h-[calc(100vh-14rem)] items-center justify-center bg-veryLightGray dark:bg-veryDarkBlue">
      <PlanetIcon
        color={
          currentTheme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
        }
      />
      <h1 className="dark:text-white text-veryLightBlue font-extrabold text-base">
        {Dictionary.COUNTRYNOTFOUND}
      </h1>
    </div>
  );
};
