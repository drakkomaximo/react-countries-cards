"use client";
import {
  CountriesReducerActions,
  CountryCardAdapter,
} from "@/utils/interfaces";
import { CountriesState } from ".";
import { sortCountries } from "@/utils/helpers";

type CountriesActionType =
  | {
      type: CountriesReducerActions.SETALLCOUNTRIES;
      payload: CountryCardAdapter[];
    }
  | {
      type: CountriesReducerActions.SETCOUNTRIESBYSEARCHFILTER;
      payload: CountryCardAdapter[];
    }
  | { type: CountriesReducerActions.SETREGIONFILTERVALUE; payload: string }
  | {
      type: CountriesReducerActions.SETCOUNTRIESBYREGION;
      payload: CountryCardAdapter[];
    }
  | { type: CountriesReducerActions.SETDARKMODE; payload: boolean };

export const countriesReducers = (
  state: CountriesState,
  action: CountriesActionType
): CountriesState => {
  switch (action.type) {
    case CountriesReducerActions.SETALLCOUNTRIES:
      return {
        ...state,
        countries: sortCountries({ countries: action.payload }),
      };
    case CountriesReducerActions.SETCOUNTRIESBYSEARCHFILTER:
      return {
        ...state,
        countriesFiltered: sortCountries({ countries: action.payload }),
      };
    case CountriesReducerActions.SETREGIONFILTERVALUE:
      return {
        ...state,
        regionFilter: action.payload,
      };
    case CountriesReducerActions.SETCOUNTRIESBYREGION:
      return {
        ...state,
        countries: sortCountries({ countries: action.payload }),
      };
    case CountriesReducerActions.SETDARKMODE:
      return {
        ...state,
        isDarkModeActive: action.payload,
      };

    default:
      return state;
  }
};
