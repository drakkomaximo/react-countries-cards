import { countryApiUrl } from "@/config";
import { CountryCardFields, CountryInfoFields } from "@/utils/interfaces";

export const fecthCountriesList = async () => {
  const res = await fetch(`${countryApiUrl}/all${CountryCardFields}`);
  return await res.json();
};

export const fecthCountriesByRegionList = async ({
  region,
}: {
  region: string;
}) => {
  const res = await fetch(
    `${countryApiUrl}/region/${region}${CountryCardFields}`
  );
  return await res.json();
};

export const fecthCountry = async ({ country }: { country: string }) => {
  const res = await fetch(
    `${countryApiUrl}/name/${country}?fullText=true${CountryInfoFields}`
  );
  return await res.json();
};
