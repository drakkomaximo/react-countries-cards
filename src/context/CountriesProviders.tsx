'use client'
import { FC, useReducer } from "react";
import { CountriesContext, countriesReducers } from ".";
import { CountriesReducerActions, CountryCardAdapter, Dictionary } from "@/utils/interfaces";

export interface CountriesState {
  countries: CountryCardAdapter[];
  countriesFiltered: CountryCardAdapter[];
  regionFilter: string;
}

const COUNTRIES_INITIAL_STATE: CountriesState = {
  countries: [],
  countriesFiltered: [],
  regionFilter: Dictionary.FILTERBYREGION
};

export const CountriesProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [state, dispatch] = useReducer(countriesReducers, COUNTRIES_INITIAL_STATE);

  const setRegionFilterValue = ({ region }: {region: string}) => {
    dispatch({
      type: CountriesReducerActions.SETREGIONFILTERVALUE,
      payload: region,
    });
  };

  const setCountries = ({ countries }: {countries: CountryCardAdapter[] }) => {
    dispatch({
      type: CountriesReducerActions.SETALLCOUNTRIES,
      payload: countries,
    });
  };

  const setCountriesFiltered = ({ countries }: {countries: CountryCardAdapter[] }) => {
    dispatch({
      type: CountriesReducerActions.SETCOUNTRIESBYSEARCHFILTER,
      payload: countries,
    });
  };

  return (
    <CountriesContext.Provider value={{...state, setRegionFilterValue, setCountries, setCountriesFiltered}}>
      {children}
    </CountriesContext.Provider>
  );
};
