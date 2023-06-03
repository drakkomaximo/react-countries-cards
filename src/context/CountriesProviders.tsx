'use client'
import { FC, useReducer } from "react";
import { CountriesContext, countriesReducers } from ".";
import { Country } from "@/utils/interfaces";

export interface CountriesState {
  countries: Country[];
}

const COUNTRIES_INITIAL_STATE: CountriesState = {
  countries: []
};

export const CountriesProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [state, dispatch] = useReducer(countriesReducers, COUNTRIES_INITIAL_STATE);

/*   const setGlobalScore = ({ errors, pairs }: Score) => {
    dispatch({
      type: "[User] Set Global Score",
      payload: {
        errors,
        pairs,
      },
    });
  }; */

  return (
    <CountriesContext.Provider value={{...state}}>
      {children}
    </CountriesContext.Provider>
  );
};
