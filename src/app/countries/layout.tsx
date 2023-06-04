import { RegionSelect, SearchBar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-wrap w-full justify-center bg-veryLightGray dark:bg-veryDarkBlue pt-10">
      <div className="flex justify-center w-full max-w-7xl">
        <div className="flex justify-start w-1/2">
          <div className="w-3/4">
            <SearchBar />
          </div>
        </div>
        <div className="flex justify-end w-1/2">
          <div className="w-1/4">
            <RegionSelect />
          </div>
        </div>
      </div>
      </div>
      {children}
    </>
  );
}
