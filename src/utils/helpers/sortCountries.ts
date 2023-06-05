import { CountryCardAdapter } from "../interfaces";

export const sortCountries = ({
  countries,
}: {
  countries: CountryCardAdapter[];
}) => {
  let countriesSorted = countries.sort(function (a, b) {
    if (a.commonName > b.commonName) {
      return 1;
    }
    if (a.commonName < b.commonName) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return countriesSorted
};
