export enum Dictionary {
  DOESNOTHAVE = "Does not have",
}

export enum Routes {
  COUNTRY = "/country",
  COUNTRIES = "/countries",
}

export enum LabelOption {
  BORDERCOUNTRIES = "border countries",
  CAPITAL = "capital",
  CURRENCIES = "currencies",
  LANGUAGES = "languages",
  NATIVENAME = "native name",
  POPULATION = "population",
  REGION = "region",
  SHORTNAME = "shortName",
  SUBREGION = "sub Region",
  TOPLEVELDOMAIN = "top level domain",
}

interface NativeName {
  [x: string]: {
    official: string;
    common: string;
  };
}

interface Currencies {
  [x: string]: {
    name: string;
    symbol: string;
  };
}

interface Languages {
  [x: string]: string;
}

export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: NativeName;
  };
  tld: string;
  cca2: string;
  currencies: Currencies;
  capital: string;
  region: string;
  subregion: string;
  languages: Languages;
  borders: string[];
  population: number;
}
