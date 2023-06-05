import { FC } from "react";
import { CustomParagraph } from "./CustomParagraph";
import { LabelOption } from "@/utils/interfaces";
import { formatCountryNameByCode } from "@/utils/helpers";

interface BorderCountriesList {
  borderCountries: string[];
}

export const BorderCountriesList: FC<BorderCountriesList> = ({
  borderCountries,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center">
      <div className="w-full sm:w-3/12">
        <CustomParagraph label={LabelOption.BORDERCOUNTRIES} />{' '}
      </div>
      <div className="flex flex-wrap w-full sm:w-9/12 mt-4 sm:m-0">
        {borderCountries.map((country) => (
          <p
            key={country}
            className="text-sm font-light dark:text-white bg-white dark:bg-darkBlue py-0.5 px-2 ml-0 mr-1 mb-1 sm:m-1"
          >
            {formatCountryNameByCode({ alpha3Code: country })}
          </p>
        ))}
      </div>
    </div>
  );
};
