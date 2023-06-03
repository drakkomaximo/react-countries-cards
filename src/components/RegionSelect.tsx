"use client";
import { Dictionary, Routes, regionOptions } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export const RegionSelect = () => {
  const router = useRouter();

  const goToRegion = (e: ChangeEvent<HTMLSelectElement>) => {
    const resp = e.target.value
    router.push(`${Routes.COUNTRIES}${resp === Dictionary.FILTERBYREGION ? '' : `/${resp}`}`);
  };

  return (
    <select
      id="countries"
      className="block w-full p-4 text-sm dark:text-white rounded-sm bg-white dark:bg-darkBlue"
      onChange={goToRegion}
    >
      <option
        className="capitalize text-sm font-light dark:text-white text-veryLightBlue"
        value={Dictionary.FILTERBYREGION}
      >
        {Dictionary.FILTERBYREGION}
      </option>
      {regionOptions.map((region) => (
        <option
          className="capitalize text-sm font-light dark:text-white text-veryLightBlue p-6"
          key={region.value}
          value={region.value}
        >
          {region.value}
        </option>
      ))}
    </select>
  );
};
