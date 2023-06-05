import { RegionSelect, SearchBar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-wrap w-full justify-center bg-veryLightGray dark:bg-veryDarkBlue pt-10 px-8">
      <div className="flex flex-col sm:flex-row justify-center w-full max-w-7xl ">
        <div className="flex justify-start sm:w-1/2 w-full pb-8 sm:pb-0">
          <div className="lg:w-3/4 w-full">
            <SearchBar />
          </div>
        </div>
        <div className="flex justify-start sm:justify-end w-full sm:w-1/2">
          <div className="2xl:w-1/4 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 w-3/5">
            <RegionSelect />
          </div>
        </div>
      </div>
      </div>
      {children}
    </>
  );
}
