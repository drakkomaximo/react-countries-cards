import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CustomParagraph } from "@/components";
import { LabelOption } from "@/utils/interfaces";

describe("CustomParagraph component", () => {
  test("Should render the property", () => {
    const LabelProps: LabelOption = LabelOption.CAPITAL;
    const DescriptionProps = "Colombia";
    render(
      <CustomParagraph label={LabelProps} description={DescriptionProps} />
    );
    expect(screen.getByText(DescriptionProps)).toBeInTheDocument();
    expect(screen.getByText(`${LabelProps}:`)).toBeInTheDocument();
  });
});
