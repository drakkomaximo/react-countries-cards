'use client'
import { CountriesReducerActions, Country } from "@/utils/interfaces";
import { CountriesState } from ".";

type CountriesActionType =
/*   | { type: "[User] Set User Profile"; payload: User }
  | { type: "[User] Set Global Score"; payload: Score }
  | { type: "[User] Add Mistake On Current Score" }
  | { type: "[User] Add Check On Current Score" } */
  | { type: CountriesReducerActions.GETALLCOUNTRIES, payload: Country[] }
  | { type: CountriesReducerActions.GETCOUNTRYBYNAME, payload: Country }
  | { type: CountriesReducerActions.SETCOUNTRIESBYREGION, payload: Country[] };

export const countriesReducers = (
  state: CountriesState,
  action: CountriesActionType
): CountriesState => {
  switch (action.type) {
    case CountriesReducerActions.GETALLCOUNTRIES:
      return {
        ...state,
        countries: action.payload
      };
    case CountriesReducerActions.GETCOUNTRYBYNAME:
      return {
        ...state,
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
