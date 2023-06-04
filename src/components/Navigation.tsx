import { DarkModeBtn } from "./DarkModeBtn";
import { Dictionary } from "@/utils/interfaces";

export const Navigation = () => {
  return (
    <header className="shadow-md bg-white dark:bg-darkBlue">
      <div className="flex justify-between">
        <div className="p-8">
          <span className="font-extrabold text-base text-veryLightBlue dark:text-white">
            {Dictionary.WHEREINTHEWORD}
          </span>
        </div>
        <div className="p-8">
          <DarkModeBtn />
        </div>
      </div>
    </header>
  );
};
