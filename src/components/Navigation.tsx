import { DarkModeBtn } from "./DarkModeBtn";
import { Dictionary } from "@/utils/interfaces";

export const Navigation = () => {
  return (
    <header className="flex w-full justify-center shadow-md bg-white dark:bg-darkBlue">
      <div className="flex justify-between py-8 px-10 w-full max-w-[1440px]">
        <div className="flex justify-start">
          <span className="font-extrabold text-base text-veryLightBlue dark:text-white">
            {Dictionary.WHEREINTHEWORD}
          </span>
        </div>
        <div className="flex justify-end">
          <DarkModeBtn />
        </div>
      </div>
    </header>
  );
};
