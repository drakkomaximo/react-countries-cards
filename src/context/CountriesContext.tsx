'use client'

import { CountryCardAdapter } from "@/utils/interfaces";
import { createContext } from "react";

interface ContextProps {
    countries: CountryCardAdapter[]
    countriesFiltered: CountryCardAdapter[]
    regionFilter: string;
    setRegionFilterValue: ({region}:{region: string}) => void
    setCountries: ({countries}:{countries: CountryCardAdapter[]}) => void
    setCountriesFiltered: ({countries}:{countries: CountryCardAdapter[]}) => void
}

export const CountriesContext = createContext({} as ContextProps);