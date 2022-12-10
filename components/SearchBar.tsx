import Link from "next/link";
import SearchSvg from "./SVG/SearchSvg";
import NaverLogo from "../public/naverTop.png";
import Image from "next/image";
import React from "react";
function SearchBar() {
  return (
    <div className="min-w-max flex justify-center items-center pt-2 pb-5 px-8">
      <div className="w-[1133px] my-[39px] flex items-center">
        <Link
          href={"/"}
          className="text-green-500 mr-[24px] font-extrabold text-5xl cursor-pointer select-none"
        >
          <Image
            className="h-auto w-auto"
            alt="Naver Logo"
            src={NaverLogo}
            height={54}
            width={215}
            priority
          />
        </Link>
        <form className="flex h-[57px]">
          <input
            name="search"
            aria-label="search"
            className="border-green-500 border-2 focus:border-green-500 focus:ring-0 w-[526px] font-bold text-lg"
            type={"text"}
          />
          <button
            title="search"
            className="bg-green-500 w-[57px] flex justify-center items-center"
          >
            <SearchSvg />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
