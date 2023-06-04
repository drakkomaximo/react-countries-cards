'use client'
import { CountriesReducerActions, CountryCardAdapter, ICountry } from "@/utils/interfaces";
import { CountriesState } from ".";

type CountriesActionType =
  | { type: CountriesReducerActions.SETALLCOUNTRIES, payload: CountryCardAdapter[] }
  | { type: CountriesReducerActions.SETCOUNTRIESBYSEARCHFILTER, payload: CountryCardAdapter[] }
  | { type: CountriesReducerActions.GETCOUNTRYBYNAME, payload: ICountry }
  | { type: CountriesReducerActions.SETREGIONFILTERVALUE, payload: string }
  | { type: CountriesReducerActions.SETCOUNTRIESBYREGION, payload: CountryCardAdapter[] };

export const countriesReducers = (
  state: CountriesState,
  action: CountriesActionType
): CountriesState => {
  switch (action.type) {
    case CountriesReducerActions.SETALLCOUNTRIES:
      return {
        ...state,
        countries: action.payload
      };
    case CountriesReducerActions.SETCOUNTRIESBYSEARCHFILTER:
      return {
        ...state,
        countriesFiltered: action.payload
      };
    case CountriesReducerActions.GETCOUNTRYBYNAME:
      return {
        ...state,
      };
    case CountriesReducerActions.SETREGIONFILTERVALUE:
      return {
        ...state,
        regionFilter: action.payload
      };
    case CountriesReducerActions.SETCOUNTRIESBYREGION:
      return {
        ...state,
        countries: action.payload
      };

    default:
      return state;
  }
};
