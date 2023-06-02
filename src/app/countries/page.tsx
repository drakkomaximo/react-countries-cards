import { CountryCard } from "@/components";

const fecthCountriesList = async () => {
  const res = await fetch(`${process.env.countryApi}/all`);
  return await res.json();
};

const CountriesPage = async () => {
  const countries = await fecthCountriesList();
  return (
    <div className="flex flex-wrap w-full justify-center pt-10 bg-veryLightGray dark:bg-veryDarkBlue">
      <div className="flex flex-wrap max-w-7xl justify-between">
        {countries.map((country: any) => (
          <CountryCard
            key={country.cca2}
            capital={country.capital}
            cca2={country.cca2}
            common={country.name.common}
            population={country.population}
            region={country.region}
          />
        ))}
      </div>
    </div>
  );
};

export default CountriesPage;
