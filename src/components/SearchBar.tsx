"use client";

import { useCountries } from "@/hooks";
import { Dictionary } from "@/utils/interfaces";
import React, { ChangeEvent, useEffect, useState } from "react";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { searchHandler } = useCountries();

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      searchHandler({ searchValue });
    }, 500);
    return () => {
      clearTimeout(timer);
    };
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);
  return (
    <form>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block shadow-md w-full py-4 pl-14 pr-4 text-sm dark:text-white rounded-sm bg-white dark:bg-darkBlue"
          placeholder={Dictionary.SEARCHFORACOUNTRY}
          value={searchValue}
          onChange={handleValue}
          required
        />
      </div>
    </form>
  );
};
