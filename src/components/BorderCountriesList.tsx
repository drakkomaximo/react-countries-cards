import { FC } from "react";
import { CustomParagraph } from "./CustomParagraph";
import { LabelOption } from "@/utils/interfaces";

interface BorderCountriesList {
  borderCountries: string[];
}

export const BorderCountriesList: FC<BorderCountriesList> = ({
  borderCountries,
}) => {
  return (
    <div className="flex">
      <CustomParagraph label={LabelOption.BORDERCOUNTRIES} />
      {borderCountries.map((country) => (
        <p
          key={country}
          className="text-sm font-light dark:text-white bg-white dark:bg-darkBlue py-0.5 px-2 mx-1"
        >
          {country}
        </p>
      ))}
    </div>
  );
};
