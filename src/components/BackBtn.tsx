"use client";
import { Routes } from "@/utils/interfaces";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

export const BackBtn = () => {
  const { systemTheme, theme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <Link href={`${Routes.COUNTRIES}`} as={`${Routes.COUNTRIES}`}>
      <button className="flex justify-center items-center px-4 py-2 rounded-md text-sm font-light dark:text-white text-veryLightBlue bg-white dark:bg-darkBlue">
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{
            fontSize: 15,
            color:
              currentTheme === "dark"
                ? "hsl(0, 0%, 100%)"
                : "hsl(200, 15%, 8%)",
            marginRight: "0.5rem",
          }}
        />{" "}
        Back
      </button>
    </Link>
  );
};
