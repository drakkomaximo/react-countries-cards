import { CountryCard } from "@/components";

const fecthCountriesByRegionList = async ({region}: {region: string}) => {
  const res = await fetch(`${process.env.countryApi}/region/${region}`);
  return await res.json();
};

const CountriesByRegionPage = async ({params}) => {
  const { region } = params;
  const countriesByRegion = await fecthCountriesByRegionList({ region });
  return (
    <div className="flex flex-wrap w-full justify-center pt-10 bg-veryLightGray dark:bg-veryDarkBlue">
      <div className="flex flex-wrap max-w-7xl justify-between">
        {countriesByRegion.map(
          (country: any) => (
            <CountryCard
              key={country.cca2}
              capital={country.capital}
              cca2={country.cca2}
              common={country.name.common}
              population={country.population}
              region={country.region}
            />
          )
        )}
      </div>
    </div>
  );
};

export default CountriesByRegionPage;
