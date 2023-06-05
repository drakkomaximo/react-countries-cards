import { Dictionary, Routes } from "@/utils/interfaces";
import Image from "next/image";
import Link from "next/link";
import PageNotFound from "@/assets/images/404.webp"

export default function NotFound() {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-[calc(100vh-5.5rem)]">
      <Image src={PageNotFound} alt="404 image" className="absolute h-full w-full object-cover" />
      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-4 sm:py-32 xl:py-2">
        <div className="w-full flex flex-col items-center justify-center relative z-10">
          <h1 className="font-extrabold text-base sm:text-5xl text-center text-white leading-tight mt-4">
            {Dictionary.YOUAREALONEHERE}
          </h1>
          <h1 className="flex font-extrabold text-base sm:text-5xl text-center text-white leading-tight mt-4">
            {Dictionary.RETURNTO} <Link href={Routes.COUNTRIES}><p className="ml-1 animate-pulse">{Dictionary.COUNTRIESLIST}</p></Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
