import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CountryDescription } from "@/components";
import { formatCountryNameByCode, formatNumber } from "@/utils/helpers";

describe("CountryDescription component", () => {
  test("Should render the property", () => {
    const country = {
      shortName: "colombia",
      countryCode: "co",
      capital: "bogota",
      region: "americas",
      population: 58000000,
      nativeName: "colombiaaa",
      topLevelDomain: ".jh",
      currencies: ["cop"],
      subRegion: "sur america",
      languages: ["español"],
      borderCountries: ["ARG", "ARM", "ASM"],
    };
    render(<CountryDescription {...country} />);
    expect(screen.getByText(`${country.shortName}`)).toBeInTheDocument();
    expect(screen.getByText(`${country.capital}`)).toBeInTheDocument();
    expect(screen.getByText(`${country.region}`)).toBeInTheDocument();
    expect(screen.getByText(`${formatNumber({value: country.population})}`)).toBeInTheDocument();
    expect(screen.getByText(`${country.nativeName}`)).toBeInTheDocument();
    expect(screen.getByText(`${country.topLevelDomain}`)).toBeInTheDocument();
    expect(screen.getByText(`${country.currencies}`)).toBeInTheDocument();
    expect(screen.getByText(`${country.subRegion}`)).toBeInTheDocument();
    expect(screen.getByText(`${country.languages}`)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${formatCountryNameByCode({ alpha3Code: country.borderCountries[0] })}`
      )
    ).toBeInTheDocument();
  });
});
