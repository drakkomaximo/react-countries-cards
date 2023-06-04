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
    <div className="flex w-screen justify-center items-start">
      {shortName === Dictionary.COUNTRYDOESNOTEXIST ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-veryDarkBlue dark:text-white font-extrabold text-base my-4">{Dictionary.COUNTRYDOESNOTEXIST}</h1>
          <Image src={CountryDoesNotExistImage} alt="CountryDoesNotExistImage" className="w-3/4 h-auto shadow-sm" />
        </div>
      ) : (
        <>
          <div className="w-1/2 h-96 py-20 px-32">
            <Flag
              code={countryCode}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div className="w-1/2 py-20 px-10">
            <h1 className="text-veryDarkBlue dark:text-white font-extrabold text-base mt-4">
              {shortName}
            </h1>
            <div className="flex justify-between mt-4">
              <div className="w-2/3">
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
              <div className="w-1/3">
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
        </>
      )}
    </div>
  );
};
