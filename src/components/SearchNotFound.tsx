"use client";

import { PlanetIcon } from "@/assets/icons";
import { Dictionary, Routes } from "@/utils/interfaces";
import { useTheme } from "next-themes";
import Link from "next/link";

export const SearchNotFound = () => {
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
        {Dictionary.SEARCHNOTFOUND}
      </h1>
      <p className="dark:text-white text-veryLightBlue font-extrabold text-base animate-pulse">
        <Link href={Routes.COUNTRIES}>
          {Dictionary.RETURNTO} {Dictionary.COUNTRIESLIST}
        </Link>
      </p>
    </div>
  );
};
