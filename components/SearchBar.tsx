import Link from "next/link";
import SearchSvg from "./SearchSvg";

export default function SearchBar() {
  return (
    <div className="min-w-max flex justify-center items-center pt-2 pb-5 px-8">
      <div className="w-[1133px] h-[54px] my-[39px] flex">
        <div className="bg-green-500  mr-2 w-[60px] h-[60px] rounded-full text-white flex items-center justify-center font-bold text-5xl">
          N
        </div>
        <Link href={"/"}>
          <a className="text-green-400 mr-[24px] font-extrabold text-5xl cursor-pointer select-none">
            NAVER
          </a>
        </Link>
        <div className="flex ">
          <input
            className="border-green-500 border-2 focus:border-green-500 focus:ring-0 w-[526px] font-bold text-lg"
            type={"text"}
          />
          <button className="bg-green-500 w-[57px] flex justify-center items-center">
            <SearchSvg />
          </button>
        </div>
      </div>
    </div>
  );
}
