"use client";
import { CountriesProvider } from "@/context";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CountriesProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        {children}
      </ThemeProvider>
    </CountriesProvider>
  );
};

export default Providers;
