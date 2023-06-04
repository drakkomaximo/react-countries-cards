import { CountriesContext } from "@/context";
import { fecthCountriesByRegionList, fecthCountriesList } from "@/services";
import { ICountryCard } from "@/utils/interfaces";
import { useCallback, useContext } from "react";

export const useCountries = () => {
  const {
    countries,
    regionFilter,
    countriesFiltered,
    setCountriesFiltered,
    setRegionFilterValue,
    setCountries,
  } = useContext(CountriesContext);

  const getCountriesByApi = useCallback(async () => {
    try {
      const resp: ICountryCard[] = await fecthCountriesList();
      setCountries({ countries: resp.length > 0 ? resp : [] });
      setCountriesFiltered({ countries: resp.length > 0 ? resp : [] });
    } catch (error) {
      setCountries({ countries: [] });
    }
  }, [setCountries, setCountriesFiltered]);

  const getCountriesByRegionApi = useCallback(
    async ({ region }: { region: string }) => {
      try {
        const resp: ICountryCard[] = await fecthCountriesByRegionList({
          region,
        });
        setCountries({ countries: resp.length > 0 ? resp : [] });
        setCountriesFiltered({ countries: resp.length > 0 ? resp : [] });
      } catch (error) {
        setCountries({ countries: [] });
      }
    },
    [setCountries, setCountriesFiltered]
  );

  const searchHandler = useCallback(
    ({ searchValue }: { searchValue: string }) => {
      const filteredCountries = countries.filter((country) => {
        return country.name.common.toLowerCase().includes(searchValue);
      });
      setCountriesFiltered({ countries: filteredCountries });
    },
    [countries, setCountriesFiltered]
  );

  return {
    countries,
    regionFilter,
    setRegionFilterValue,
    setCountries,
    getCountriesByApi,
    getCountriesByRegionApi,
    countriesFiltered,
    setCountriesFiltered,
    searchHandler,
  };
};
