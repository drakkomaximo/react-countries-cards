'use client'
import { CountriesReducerActions, ICountry, ICountryCard } from "@/utils/interfaces";
import { CountriesState } from ".";

type CountriesActionType =
  | { type: CountriesReducerActions.SETALLCOUNTRIES, payload: ICountryCard[] }
  | { type: CountriesReducerActions.SETCOUNTRIESBYSEARCHFILTER, payload: ICountryCard[] }
  | { type: CountriesReducerActions.GETCOUNTRYBYNAME, payload: ICountry }
  | { type: CountriesReducerActions.SETREGIONFILTERVALUE, payload: string }
  | { type: CountriesReducerActions.SETCOUNTRIESBYREGION, payload: ICountry[] };

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
