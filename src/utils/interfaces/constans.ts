export enum Dictionary {
  DARKMODE = "Dark mode",
  LIGHTMODE = "Light mode",
  WHEREINTHEWORD = "Where in the world?",
  DOESNOTHAVE = "Does not have",
  COUNTRYDOESNOTEXIST = "Country does not exist",
  FILTERBYREGION = "Filter by region",
  SEARCHFORACOUNTRY = "Search for a country...",
  SEARCHNOTFOUND = "Search not found",
  YOUAREALONEHERE = "You are all alone here...",
  RETURNTO = "Return to",
  COUNTRIESLIST = "Countries list",
  SYSTEM = "system",
  THEME = 'theme'
}

export enum COLORS {
  DARKBLUE = 'hsl(209, 23%, 22%)',
  VERYDARKBLUE = 'hsl(207, 26%, 17%)',
  VERYLIGHTBLUE = 'hsl(200, 15%, 8%)',
  DARKGRAY = 'hsl(0, 0%, 52%)',
  VERYLIGHTGRAY = 'hsl(0, 0%, 98%)',
  WHITE = 'hsl(0, 0%, 100%)',

}

export enum ThemeMode {
  DARKMODE = 'dark',
  LIGHTMODE = 'light'
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

export enum CountriesReducerActions {
  GETCOUNTRYBYNAME = '[Countries] Get country by name',
  SETALLCOUNTRIES = '[Countries] Set all countries',
  SETCOUNTRIESBYSEARCHFILTER = '[Countries] Set countries by search filter',
  SETCOUNTRIESBYREGION = '[Countries] Set countries by region',
  SETREGIONFILTERVALUE = '[Countries] Set region filter value',
  SETDARKMODE = '[Countries] Set dark mode',
}

export interface CountryCardAdapter {
  commonName: string;
  cca2: string;
  capital: string;
  region: string;
  population: number;
}

export interface CountryInfoAdapter extends CountryCardAdapter {
  nativeName: string;
  tld: string;
  currencies: string[];
  subregion: string;
  languages: string[];
  borders: string[];
}

export const regionOptions: RegionOptions[] = [
  {
    value: 'asia'
  },
  {
    value: 'oceania'
  },
  {
    value: 'europe'
  },
  {
    value: 'americas'
  },
  {
    value: 'africa'
  },
]

export type RegionOptions = {
  value: RegionOption
}
export type RegionOption = 'asia' | 'oceania' | 'europe' | 'americas' | 'africa'
export type ThemeModeType = 'dark' | 'light'

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

export interface BadRequest {
  status: 404;
  message: string;
}

export interface ICountryCard {
  name: {
    common: string;
    official: string;
    nativeName: NativeName;
  };
  cca2: string;
  capital: string[];
  region: string;
  population: number;
}

export interface ICountry extends ICountryCard {
  status?: number;
  tld: string;
  currencies: Currencies;
  subregion: string;
  languages: Languages;
  borders: string[];
}

export const CountryCardFields = `/?fields=name,capital,cca2,region,population`
export const CountryInfoFields = `/?fields=name,capital,cca2,region,population,tld,currencies,subregion,languages,borders`
export const Alpha3Codes: Record<string, string> = {
  ABW: "Aruba",
  AFG: "Afghanistan",
  AGO: "Angola",
  AIA: "Anguilla",
  ALA: "Åland Islands",
  ALB: "Albania",
  AND: "Andorra",
  ARE: "United Arab Emirates",
  ARG: "Argentina",
  ARM: "Armenia",
  ASM: "American Samoa",
  ATA: "Antarctica",
  ATF: "French Southern Territories",
  ATG: "Antigua and Barbuda",
  AUS: "Australia",
  AUT: "Austria",
  AZE: "Azerbaijan",
  BDI: "Burundi",
  BEL: "Belgium",
  BEN: "Benin",
  BES: "Bonaire, Sint Eustatius and Saba",
  BFA: "Burkina Faso",
  BGD: "Bangladesh",
  BGR: "Bulgaria",
  BHR: "Bahrain",
  BHS: "Bahamas",
  BIH: "Bosnia and Herzegovina",
  BLM: "Saint Barthélemy",
  BLR: "Belarus",
  BLZ: "Belize",
  BMU: "Bermuda",
  BOL: "Bolivia (Plurinational State of)",
  BRA: "Brazil",
  BRB: "Barbados",
  BRN: "Brunei Darussalam",
  BTN: "Bhutan",
  BVT: "Bouvet Island",
  BWA: "Botswana",
  CAF: "Central African Republic",
  CAN: "Canada",
  CCK: "Cocos (Keeling) Islands",
  CHE: "Switzerland",
  CHL: "Chile",
  CHN: "China",
  CIV: "Côte d'Ivoire",
  CMR: "Cameroon",
  COD: "Congo, Democratic Republic of the",
  COG: "Congo",
  COK: "Cook Islands",
  COL: "Colombia",
  COM: "Comoros",
  CPV: "Cabo Verde",
  CRI: "Costa Rica",
  CUB: "Cuba",
  CUW: "Curaçao",
  CXR: "Christmas Island",
  CYM: "Cayman Islands",
  CYP: "Cyprus",
  CZE: "Czechia",
  DEU: "Germany",
  DJI: "Djibouti",
  DMA: "Dominica",
  DNK: "Denmark",
  DOM: "Dominican Republic",
  DZA: "Algeria",
  ECU: "Ecuador",
  EGY: "Egypt",
  ERI: "Eritrea",
  ESH: "Western Sahara",
  ESP: "Spain",
  EST: "Estonia",
  ETH: "Ethiopia",
  FIN: "Finland",
  FJI: "Fiji",
  FLK: "Falkland Islands (Malvinas)",
  FRA: "France",
  FRO: "Faroe Islands",
  FSM: "Micronesia (Federated States of)",
  GAB: "Gabon",
  GBR: "United Kingdom of Great Britain and Northern Ireland",
  GEO: "Georgia",
  GGY: "Guernsey",
  GHA: "Ghana",
  GIB: "Gibraltar",
  GIN: "Guinea",
  GLP: "Guadeloupe",
  GMB: "Gambia",
  GNB: "Guinea-Bissau",
  GNQ: "Equatorial Guinea",
  GRC: "Greece",
  GRD: "Grenada",
  GRL: "Greenland",
  GTM: "Guatemala",
  GUF: "French Guiana",
  GUM: "Guam",
  GUY: "Guyana",
  HKG: "Hong Kong",
  HMD: "Heard Island and McDonald Islands",
  HND: "Honduras",
  HRV: "Croatia",
  HTI: "Haiti",
  HUN: "Hungary",
  IDN: "Indonesia",
  IMN: "Isle of Man",
  IND: "India",
  IOT: "British Indian Ocean Territory",
  IRL: "Ireland",
  IRN: "Iran (Islamic Republic of)",
  IRQ: "Iraq",
  ISL: "Iceland",
  ISR: "Israel",
  ITA: "Italy",
  JAM: "Jamaica",
  JEY: "Jersey",
  JOR: "Jordan",
  JPN: "Japan",
  KAZ: "Kazakhstan",
  KEN: "Kenya",
  KGZ: "Kyrgyzstan",
  KHM: "Cambodia",
  KIR: "Kiribati",
  KNA: "Saint Kitts and Nevis",
  KOR: "Korea, Republic of",
  KWT: "Kuwait",
  LAO: "Lao People's Democratic Republic",
  LBN: "Lebanon",
  LBR: "Liberia",
  LBY: "Libya",
  LCA: "Saint Lucia",
  LIE: "Liechtenstein",
  LKA: "Sri Lanka",
  LSO: "Lesotho",
  LTU: "Lithuania",
  LUX: "Luxembourg",
  LVA: "Latvia",
  MAC: "Macao",
  MAF: "Saint Martin (French part)",
  MAR: "Morocco",
  MCO: "Monaco",
  MDA: "Moldova, Republic of",
  MDG: "Madagascar",
  MDV: "Maldives",
  MEX: "Mexico",
  MHL: "Marshall Islands",
  MKD: "North Macedonia",
  MLI: "Mali",
  MLT: "Malta",
  MMR: "Myanmar",
  MNE: "Montenegro",
  MNG: "Mongolia",
  MNP: "Northern Mariana Islands",
  MOZ: "Mozambique",
  MRT: "Mauritania",
  MSR: "Montserrat",
  MTQ: "Martinique",
  MUS: "Mauritius",
  MWI: "Malawi",
  MYS: "Malaysia",
  MYT: "Mayotte",
  NAM: "Namibia",
  NCL: "New Caledonia",
  NER: "Niger",
  NFK: "Norfolk Island",
  NGA: "Nigeria",
  NIC: "Nicaragua",
  NIU: "Niue",
  NLD: "Netherlands, Kingdom of the",
  NOR: "Norway",
  NPL: "Nepal",
  NRU: "Nauru",
  NZL: "New Zealand",
  OMN: "Oman",
  PAK: "Pakistan",
  PAN: "Panama",
  PCN: "Pitcairn",
  PER: "Peru",
  PHL: "Philippines",
  PLW: "Palau",
  PNG: "Papua New Guinea",
  POL: "Poland",
  PRI: "Puerto Rico",
  PRK: "Korea (Democratic People's Republic of)",
  PRT: "Portugal",
  PRY: "Paraguay",
  PSE: "Palestine, State of",
  PYF: "French Polynesia",
  QAT: "Qatar",
  REU: "Réunion",
  ROU: "Romania",
  RUS: "Russian Federation",
  RWA: "Rwanda",
  SAU: "Saudi Arabia",
  SDN: "Sudan",
  SEN: "Senegal",
  SGP: "Singapore",
  SGS: "South Georgia and the South Sandwich Islands",
  SHN: "Saint Helena, Ascension and Tristan da Cunha",
  SJM: "Svalbard and Jan Mayen",
  SLB: "Solomon Islands",
  SLE: "Sierra Leone",
  SLV: "El Salvador",
  SMR: "San Marino",
  SOM: "Somalia",
  SPM: "Saint Pierre and Miquelon",
  SRB: "Serbia",
  SSD: "South Sudan",
  STP: "Sao Tome and Principe",
  SUR: "Suriname",
  SVK: "Slovakia",
  SVN: "Slovenia",
  SWE: "Sweden",
  SWZ: "Eswatini",
  SXM: "Sint Maarten (Dutch part)",
  SYC: "Seychelles",
  SYR: "Syrian Arab Republic",
  TCA: "Turks and Caicos Islands",
  TCD: "Chad",
  TGO: "Togo",
  THA: "Thailand",
  TJK: "Tajikistan",
  TKL: "Tokelau",
  TKM: "Turkmenistan",
  TLS: "Timor-Leste",
  TON: "Tonga",
  TTO: "Trinidad and Tobago",
  TUN: "Tunisia",
  TUR: "Türkiye",
  TUV: "Tuvalu",
  TWN: "Taiwan, Province of China",
  TZA: "Tanzania, United Republic of",
  UGA: "Uganda",
  UKR: "Ukraine",
  UMI: "United States Minor Outlying Islands",
  URY: "Uruguay",
  USA: "United States of America",
  UZB: "Uzbekistan",
  VAT: "Holy See",
  VCT: "Saint Vincent and the Grenadines",
  VEN: "Venezuela (Bolivarian Republic of)",
  VGB: "Virgin Islands (British)",
  VIR: "Virgin Islands (U.S.)",
  VNM: "Viet Nam",
  VUT: "Vanuatu",
  WLF: "Wallis and Futuna",
  WSM: "Samoa",
  YEM: "Yemen",
  ZAF: "South Africa",
  ZMB: "Zambia",
  ZWE: "Zimbabwe",
};
