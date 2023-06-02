import { LabelOption } from "@/utils/interfaces";
import { FC } from "react";

interface CustomParagraphProps {
  label: LabelOption;
  description?: string;
}

export const CustomParagraph: FC<CustomParagraphProps> = ({
  label,
  description = "",
}) => {
  return (
    <p className="text-sm text-veryLightBlue dark:text-white">
      <span className="font-semibold capitalize">{label}:</span>{" "}
      {description !== "" && <span className="font-light">{description}</span>}
    </p>
  );
};
