import { RegionOptions } from "../interfaces";

export const sortRegions = ({
  regions,
}: {
  regions: RegionOptions[];
}) => {
  let regionsSorted = regions.sort(function (a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return regionsSorted
};
