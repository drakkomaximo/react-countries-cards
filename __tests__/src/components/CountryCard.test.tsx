import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CountryCard } from "@/components";
import { formatNumber } from "@/utils/helpers";

describe("CountryDescription component", () => {
  test("Should render the property", () => {
    const country = {
      common: "colombia",
      cca2: "co",
      capital: "bogota",
      region: "americas",
      population: 58000000,
    };
    render(<CountryCard {...country} />);
    expect(screen.getByText(`${country.common}`)).toBeInTheDocument();
    expect(screen.getByText(`${country.capital}`)).toBeInTheDocument();
    expect(screen.getByText(`${country.region}`)).toBeInTheDocument();
    expect(screen.getByText(`${formatNumber({value: country.population})}`)).toBeInTheDocument();
  });
});
