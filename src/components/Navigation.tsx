import Link from "next/link";
import { DarkModeBtn } from "./DarkModeBtn";
import { Dictionary, Routes } from "@/utils/interfaces";

export const Navigation = () => {
  return (
    <header className="shadow-md bg-white dark:bg-darkBlue">
      <div className="flex justify-between">
        <div className="p-8">
          <Link href={Routes.COUNTRIES}>
            <span className="font-extrabold text-base text-veryLightBlue dark:text-white">
              {Dictionary.WHEREINTHEWORD}
            </span>
          </Link>
        </div>
        <div className="p-8">
          <DarkModeBtn />
        </div>
      </div>
    </header>
  );
};
