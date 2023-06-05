"use client";
import { useCountries } from "@/hooks";
import { Dictionary, Routes } from "@/utils/interfaces";
import Link from "next/link";
import React from "react";

export const BackBtn = () => {
  const { regionFilter, countries, setCountriesFiltered } = useCountries();
  return (
    <div className="flex w-screen justify-center items-start">
      <div className="flex w-1/2 px-10 md:pl-16 lg:pl-32 justify-start items-start">
        <button
          className="flex justify-center items-center px-4 py-2 rounded-md text-sm font-light dark:text-white text-veryLightBlue bg-white dark:bg-darkBlue"
          onClick={() => setCountriesFiltered({ countries })}
        >
          <Link
            href={`${Routes.COUNTRIES}${
              regionFilter !== Dictionary.FILTERBYREGION ? "/[region]" : ""
            }`}
            as={`${Routes.COUNTRIES}${
              regionFilter !== Dictionary.FILTERBYREGION
                ? `/${regionFilter}`
                : ""
            }`}
          >
            <i className="ti ti-arrow-narrow-left mr-2"></i>
            Back
          </Link>
        </button>
      </div>
      <div className="flex w-1/2 justify-end items-center"></div>
    </div>
  );
};
