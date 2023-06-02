import { formatName, formatNumber } from "@/utils/helpers";
import { LabelOption, Routes } from "@/utils/interfaces";
import Link from "next/link";
import { FC } from "react";
import Flag from "react-world-flags";
import { CustomParagraph } from "./CustomParagraph";

interface CountryCardProps {
  common: string;
  cca2: string;
  population: number;
  region: string;
  capital: string;
}

export const CountryCard: FC<CountryCardProps> = ({
  capital,
  cca2,
  common,
  population,
  region,
}) => {
  return (
    <article className="w-72 rounded-sm mb-20 cursor-pointer bg-white dark:bg-darkBlue">
      <Link href={`${Routes.COUNTRY}/[name]`} as={`${Routes.COUNTRY}/${formatName({ name: common })}`}>
        <div className="w-full h-40">
          <Flag
            code={cca2}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div className="m-5">
          <h2 className="text-base font-extrabold text-veryLightBlue dark:text-white">
            {common}
          </h2>
          <div className="mt-3">
            <CustomParagraph label={LabelOption.POPULATION} description={formatNumber({ value: population })}/>
            <CustomParagraph label={LabelOption.REGION} description={region}/>
            <CustomParagraph label={LabelOption.CAPITAL} description={capital || "Does not have"}/>
          </div>
        </div>
      </Link>
    </article>
  );
};
