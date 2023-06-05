import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BorderCountriesList } from "@/components";
import { LabelOption } from "@/utils/interfaces";
import { formatCountryNameByCode } from "@/utils/helpers";

describe("BorderCountriesList component", () => {
  test("Should render the property", () => {
    const borderTitle: LabelOption = LabelOption.BORDERCOUNTRIES
    const borderCountriesProps: string[] = ['ABW', 'AFG', 'AGO'];
    render(
      <BorderCountriesList borderCountries={borderCountriesProps} />
    )
    expect(screen.getByText(`${borderTitle}:`)).toBeInTheDocument();
    expect(screen.getByText(formatCountryNameByCode({alpha3Code: borderCountriesProps[0]}))).toBeInTheDocument();
    expect(screen.getByText(formatCountryNameByCode({alpha3Code: borderCountriesProps[1]}))).toBeInTheDocument();
    expect(screen.getByText(formatCountryNameByCode({alpha3Code: borderCountriesProps[2]}))).toBeInTheDocument();
  });
});
