"use client";

import { SearchIcon } from "@/assets/icons";
import { useCountries } from "@/hooks";
import { COLORS, Dictionary } from "@/utils/interfaces";
import React, { ChangeEvent, useEffect, useState } from "react";

export const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { searchHandler, isDarkModeActive } = useCountries();

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setIsActive(true);
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      isActive && searchHandler({ searchValue });
      setIsActive(false)
    }, 500);
    return () => {
      clearTimeout(timer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, isActive]);
  return (
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon
            color={
              isDarkModeActive ? COLORS.WHITE : COLORS.VERYLIGHTBLUE
            }
          />
        </div>
        <input
          data-testId='inputValue'
          type="search"
          id="default-search"
          className="block shadow-md w-full py-4 pl-14 pr-4 text-sm dark:text-white rounded-sm bg-white dark:bg-darkBlue"
          placeholder={Dictionary.SEARCHFORACOUNTRY}
          value={searchValue}
          onChange={handleValue}
          required
        />
      </div>
  );
};
