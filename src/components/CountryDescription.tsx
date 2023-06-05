import { FC } from "react";
import Flag from "react-world-flags";
import { CustomParagraph } from "./CustomParagraph";
import { Dictionary, LabelOption } from "@/utils/interfaces";
import { formatNumber } from "@/utils/helpers";
import { BorderCountriesList } from "./BorderCountriesList";
import Image from "next/image";
import CountryDoesNotExistImage from "@/assets/images/country_not_exist.png";

interface CountryDescriptionProps {
  countryCode: string;
  shortName: string;
  nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  topLevelDomain: string;
  currencies: string[];
  languages: string[];
  borderCountries: string[];
}

export const CountryDescription: FC<CountryDescriptionProps> = ({
  borderCountries,
  capital,
  countryCode,
  currencies,
  languages,
  nativeName,
  population,
  region,
  shortName,
  subRegion,
  topLevelDomain,
}) => {
  return (
    <>
      {shortName === Dictionary.COUNTRYDOESNOTEXIST ? (
        <div className="flex w-screen justify-center items-start h-[calc(100vh-10.3rem)] md:h-auto">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-veryDarkBlue dark:text-white font-extrabold text-base my-4">
              {Dictionary.COUNTRYDOESNOTEXIST}
            </h1>
            <Image
              src={CountryDoesNotExistImage}
              alt="CountryDoesNotExistImage"
              className="w-3/4 h-auto shadow-sm"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row w-screen justify-center items-start">
          <div className="px-10 md:pl-16 lg:pl-32 flex w-full md:w-1/2 justify-center md:justify-start items-center">
            <div className="w-full mt-10">
              <Flag
                code={countryCode}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:pl-32 py-5 md:py-5 lg:py-10 px-8">
            <h1 className="text-veryDarkBlue dark:text-white font-extrabold text-base mt-4">
              {shortName}
            </h1>
            <div className="flex flex-col sm:flex-row justify-between mt-4">
              <div className="w-full sm:w-1/2">
                <CustomParagraph
                  label={LabelOption.NATIVENAME}
                  description={nativeName}
                />
                <CustomParagraph
                  label={LabelOption.POPULATION}
                  description={formatNumber({ value: population })}
                />
                <CustomParagraph
                  label={LabelOption.REGION}
                  description={region}
                />
                <CustomParagraph
                  label={LabelOption.SUBREGION}
                  description={subRegion}
                />
                <CustomParagraph
                  label={LabelOption.CAPITAL}
                  description={capital}
                />
              </div>
              <div className="mt-8 sm:mt-0 w-full sm:w-1/2">
                <CustomParagraph
                  label={LabelOption.TOPLEVELDOMAIN}
                  description={topLevelDomain}
                />
                <CustomParagraph
                  label={LabelOption.CURRENCIES}
                  description={currencies.join(",")}
                />
                <CustomParagraph
                  label={LabelOption.LANGUAGES}
                  description={languages.join(",")}
                />
              </div>
            </div>
            {borderCountries && borderCountries.length > 0 && (
              <div className="mt-4">
                <BorderCountriesList borderCountries={borderCountries} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
