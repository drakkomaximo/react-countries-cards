import { BackBtn, CountryDescription } from "@/components";
import { fecthCountry } from "@/services";

const CountryInfo = async ({ params }: { params: { name: string } }) => {
  const { name } = params;
  const country = await fecthCountry({ country: name });

  return (
    <div className="flex flex-col h-[calc(100vh-5.5rem)] flex-wrap w-full items-start justify-start pt-10 bg-veryLightGray dark:bg-veryDarkBlue">
      <div className="px-32">
        <BackBtn />
      </div>
      <div className="flex flex-wrap max-w-7xl justify-between">
        {country && (
          <CountryDescription
            borderCountries={country.borders}
            capital={country.capital}
            countryCode={country.cca2}
            currencies={country.currencies}
            languages={country.languages}
            nativeName={country.nativeName}
            population={country.population}
            region={country.region}
            shortName={country.commonName}
            subRegion={country.subregion}
            topLevelDomain={country.tld}
          />
        )}
      </div>
    </div>
  );
};

export default CountryInfo;
