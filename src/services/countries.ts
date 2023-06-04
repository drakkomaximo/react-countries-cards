import { countryApiUrl } from "@/config";
import { CountryCardFields, CountryInfoFields } from "@/utils/interfaces";
import { countryCardAdapter, countryInfoAdapter } from "./adapters";

export const fecthCountriesList = async () => {
  const res = await fetch(`${countryApiUrl}/all${CountryCardFields}`);
  const data = await res.json()
  return countryCardAdapter({resp: data})
};

export const fecthCountriesByRegionList = async ({
  region,
}: {
  region: string;
}) => {
  const res = await fetch(
    `${countryApiUrl}/region/${region}${CountryCardFields}`
  );
  const data = await res.json()
  return countryCardAdapter({resp: data})
};

export const fecthCountry = async ({ country }: { country: string }) => {
  const res = await fetch(
    `${countryApiUrl}/name/${country}?fullText=true${CountryInfoFields}`
  );
  const data = await res.json()
  return countryInfoAdapter({resp: data})
};
