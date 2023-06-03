'use client'

import { Country } from "@/utils/interfaces";
import { createContext } from "react";

interface ContextProps {
    countries: Country[]
}

export const CountriesContext = createContext({} as ContextProps);