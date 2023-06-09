"use client";
import { CountryCard, SearchNotFound, Loader } from "@/components";
import { useCountries } from "@/hooks";
import { useEffect, useState } from "react";

const CountriesPage = () => {
  const [isActive, setIsActive] = useState(true);
  const { countriesFiltered, countries, getCountriesByApi } = useCountries();

  useEffect(() => {
    isActive && getCountriesByApi();
    countriesFiltered.length > 0 && setIsActive(false);
  }, [countriesFiltered, getCountriesByApi, isActive]);

  return (
    <>
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
      ) : countriesFiltered.length === 0 && countries.length === 0 ? (
        <Loader />
      ) : (
        <SearchNotFound />
      )}
    </>
  );
};

export default CountriesPage;
