import { CountriesContext } from "@/context";
import { fecthCountriesByRegionList, fecthCountriesList } from "@/services";
import { CountryCardAdapter, Dictionary } from "@/utils/interfaces";
import { useCallback, useContext } from "react";

export const useCountries = () => {
  const {
    countries,
    regionFilter,
    countriesFiltered,
    setCountriesFiltered,
    setRegionFilterValue,
    setCountries,
    setDarkMode,
    isDarkModeActive,
  } = useContext(CountriesContext);

  const getCountriesByApi = useCallback(async () => {
    try {
      const resp = await fecthCountriesList();
      setCountries({ countries: resp.length > 0 ? resp : [] });
      setCountriesFiltered({ countries: resp.length > 0 ? resp : [] });
    } catch (error) {
      setCountries({ countries: [] });
      setCountriesFiltered({ countries: [] });
    }
  }, [setCountries, setCountriesFiltered]);

  const getCountriesByRegionApi = useCallback(
    async ({ region }: { region: string }) => {
      try {
        const resp: CountryCardAdapter[] = await fecthCountriesByRegionList({
          region,
        });
        setCountries({ countries: resp.length > 0 ? resp : [] });
        setCountriesFiltered({ countries: resp.length > 0 ? resp : [] });
        setRegionFilterValue({ region });
      } catch (error) {
        setCountries({ countries: [] });
        setCountriesFiltered({ countries: [] });
        setRegionFilterValue({ region: Dictionary.FILTERBYREGION });
      }
    },
    [setCountries, setCountriesFiltered, setRegionFilterValue]
  );

  const searchHandler = useCallback(
    ({ searchValue }: { searchValue: string }) => {
      const filteredCountries = countries.filter((country) => {
        return country.commonName.toLowerCase().includes(searchValue);
      });
      setCountriesFiltered({ countries: filteredCountries });
    },
    [countries, setCountriesFiltered]
  );

  return {
    countries,
    regionFilter,
    isDarkModeActive,
    setRegionFilterValue,
    setCountries,
    getCountriesByApi,
    getCountriesByRegionApi,
    countriesFiltered,
    setCountriesFiltered,
    searchHandler,
    setDarkMode,
  };
};
