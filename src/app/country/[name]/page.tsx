import { BackBtn, CountryDescription } from "@/components";
import { fecthCountry } from "@/services";
import { ICountry, Dictionary } from "@/utils/interfaces";

const CountryInfo = async ({ params }) => {
  const { name } = params;
  const country: ICountry[] = await fecthCountry({ country: name });

  return (
    <div className="flex flex-col h-[calc(100vh-5.5rem)] flex-wrap w-full justify-center pt-10 bg-veryLightGray dark:bg-veryDarkBlue">
      <div className="px-32">
        <BackBtn />
      </div>
      <div className="flex flex-wrap max-w-7xl justify-between">
        {country && (
          <CountryDescription
            borderCountries={country[0]?.borders || []}
            capital={country[0]?.capital || Dictionary.DOESNOTHAVE}
            countryCode={country[0]?.cca2 || Dictionary.DOESNOTHAVE}
            currencies={
              country[0]?.currencies
                ? [Object.values(country[0]?.currencies)[0].name]
                : [Dictionary.DOESNOTHAVE]
            }
            languages={
              country[0]?.languages
                ? [Object.values(country[0]?.languages).join(", ")]
                : [Dictionary.DOESNOTHAVE]
            }
            nativeName={
              country[0]?.name?.nativeName
                ? Object.values(country[0]?.name?.nativeName)[0].common
                : Dictionary.DOESNOTHAVE
            }
            population={country[0]?.population || 0}
            region={country[0]?.region || Dictionary.DOESNOTHAVE}
            shortName={country[0]?.name?.common || Dictionary.DOESNOTHAVE}
            subRegion={country[0]?.subregion || Dictionary.DOESNOTHAVE}
            topLevelDomain={country[0]?.tld || Dictionary.DOESNOTHAVE}
          />
        )}
      </div>
    </div>
  );
};

export default CountryInfo;
