import { CountriesContext } from "@/context";
import { useContext } from "react";

export const useCountries = () => {
  const { countries } = useContext(CountriesContext);
  return {
    countries,
  };
};
