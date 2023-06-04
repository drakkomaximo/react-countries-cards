import React, { FC } from "react";

export const PlanetIcon: FC<{ color: string }> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-world-cancel"
      width={128}
      height={128}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M21 12a9 9 0 1 0 -8.985 9"></path>
      <path d="M3.6 9h16.8"></path>
      <path d="M3.6 15h9.9"></path>
      <path d="M11.5 3a17 17 0 0 0 0 18"></path>
      <path d="M12.5 3a16.991 16.991 0 0 1 2.53 10.275"></path>
      <path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M17 21l4 -4"></path>
    </svg>
  );
};