"use client";

import { CountryCard, SearchNotFound } from "@/components";
import { useCountries } from "@/hooks";
import { FC, useEffect, useState } from "react";

interface CountriesByRegionPageProps {
  params: { region: string };
}

const CountriesByRegionPage: FC<CountriesByRegionPageProps> = ({ params }) => {
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
          countriesFiltered.map((country) => (
            <CountryCard
              key={country.cca2}
              capital={country.capital}
              cca2={country.cca2}
              common={country.commonName}
              population={country.population}
              region={country.region}
            />
          ))
        ) : (
          <SearchNotFound />
        )}
      </div>
    </div>
  );
};

export default CountriesByRegionPage;
