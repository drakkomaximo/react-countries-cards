import { regionOptions } from "../interfaces";

export const identifyIsCorrectRegion = ({ region }: { region: string }) => {
    return regionOptions.some(regionOption => regionOption.value == region);
  };