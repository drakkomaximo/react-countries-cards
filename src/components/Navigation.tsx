import { DarkModeBtn } from "./DarkModeBtn";
import { Dictionary } from "@/utils/interfaces";

export const Navigation = () => {
  return (
    <header className="shadow-md bg-white dark:bg-darkBlue">
      <div className="flex justify-between p-8">
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
