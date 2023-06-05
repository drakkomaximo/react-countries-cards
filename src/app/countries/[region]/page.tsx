"use client";

import { CountryCard, SearchNotFound } from "@/components";
import { useCountries } from "@/hooks";
import { identifyIsCorrectRegion } from "@/utils/helpers";
import { RegionOption, Routes } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

interface CountriesByRegionPageProps {
  params: { region: RegionOption };
}

const CountriesByRegionPage: FC<CountriesByRegionPageProps> = ({ params }) => {
  const router = useRouter();
  const { region } = params;
  const [isActive, setIsActive] = useState(true);
  const { countriesFiltered, getCountriesByRegionApi } = useCountries();

  useEffect(() => {
    if (identifyIsCorrectRegion({ region })) {
      isActive && getCountriesByRegionApi({ region });
      countriesFiltered.length > 0 && setIsActive(false);
    } else {
      router.push(Routes.COUNTRIES);
    }
  }, [countriesFiltered, getCountriesByRegionApi, isActive, region, router]);
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
      ) : (
        <SearchNotFound />
      )}
    </>
  );
};

export default CountriesByRegionPage;
