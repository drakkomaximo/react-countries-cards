"use client";

import { CountryCard, CountryNotFound } from "@/components";
import { useCountries } from "@/hooks";
import { useEffect, useState } from "react";

const CountriesByRegionPage = ({ params }) => {
  const [isActive, setIsActive] = useState(true);
  const { region } = params;
  const { countriesFiltered, getCountriesByRegionApi } = useCountries();

  useEffect(() => {
    isActive && getCountriesByRegionApi({ region });
    countriesFiltered.length > 0 && setIsActive(false);
  }, [countriesFiltered, getCountriesByRegionApi, isActive, region]);
  return (
    <div className="flex flex-wrap w-full justify-center pt-10 bg-veryLightGray dark:bg-veryDarkBlue">
      <div className="flex flex-wrap max-w-7xl justify-between">
        {countriesFiltered.length > 0 ? (
          countriesFiltered.map((country: any) => (
            <CountryCard
              key={country.cca2}
              capital={country.capital}
              cca2={country.cca2}
              common={country.name.common}
              population={country.population}
              region={country.region}
            />
          ))
        ) : (
          <CountryNotFound />
        )}
      </div>
    </div>
  );
};

export default CountriesByRegionPage;
