import {
  CountryCardAdapter,
  CountryInfoAdapter,
  Dictionary,
  ICountry,
  ICountryCard,
} from "@/utils/interfaces";

export const countryCardAdapter = async ({
  resp,
}: {
  resp: ICountryCard[];
}) => {
  let adapter: CountryCardAdapter[] = [];
  resp.forEach((country, index) => {
    adapter[index] = {
      capital: country.capital[0] || Dictionary.DOESNOTHAVE,
      cca2: country.cca2 || Dictionary.DOESNOTHAVE,
      commonName: country.name.common || Dictionary.DOESNOTHAVE,
      population: country.population || 0,
      region: country.region || Dictionary.DOESNOTHAVE,
    };
  });
  return adapter;
};

export const countryInfoAdapter = async ({
  resp,
}: {
  resp: ICountry[];
}) => {
  let adapter: CountryInfoAdapter[] = [];
  resp.forEach((country, index) => {
    adapter[index] = {
      capital: country.capital[0] || Dictionary.DOESNOTHAVE,
      cca2: country.cca2 || Dictionary.DOESNOTHAVE,
      commonName: country.name.common || Dictionary.DOESNOTHAVE,
      population: country.population || 0,
      region: country.region || Dictionary.DOESNOTHAVE,
      borders: country.borders || [],
      currencies: country.currencies
        ? [Object.values(country.currencies)[0].name]
        : [Dictionary.DOESNOTHAVE],
      languages: country.languages
        ? [Object.values(country.languages).join(", ")]
        : [Dictionary.DOESNOTHAVE],
      subregion: country.subregion || Dictionary.DOESNOTHAVE,
      tld: country.tld || Dictionary.DOESNOTHAVE,
      nativeName: country.name.nativeName
        ? Object.values(country.name?.nativeName)[0].common
        : Dictionary.DOESNOTHAVE,
    };
  });
  return adapter[0];
};
