"use client";

import { PlanetIcon } from "@/assets/icons";
import { useCountries } from "@/hooks";
import { COLORS, Dictionary, Routes } from "@/utils/interfaces";
import Link from "next/link";

export const SearchNotFound = () => {
  const { isDarkModeActive } = useCountries();

  return (
    <div className="flex flex-wrap flex-col w-full h-[calc(100vh-14rem)] items-center justify-center bg-veryLightGray dark:bg-veryDarkBlue">
      <PlanetIcon
        color={isDarkModeActive ? COLORS.WHITE : COLORS.VERYLIGHTBLUE}
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
