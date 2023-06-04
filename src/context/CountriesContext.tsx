'use client'

import { ICountryCard } from "@/utils/interfaces";
import { createContext } from "react";

interface ContextProps {
    countries: ICountryCard[]
    countriesFiltered: ICountryCard[]
    regionFilter: string
    setRegionFilterValue: ({region}:{region: string}) => void
    setCountries: ({countries}:{countries: ICountryCard[]}) => void
    setCountriesFiltered: ({countries}:{countries: ICountryCard[]}) => void
}

export const CountriesContext = createContext({} as ContextProps);