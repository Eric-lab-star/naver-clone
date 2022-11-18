import { MouseEvent, useState } from "react";
import cls from "../utils/cls";
import SliderBtn from "./SliderBtn";
import MBCJSON from "../mbcTop.json";
import useSWR from "swr";
import { IMBC } from "../pages/api/scrapper";
import NewsBtn from "./NewsBtn";
import Image from "next/image";
import Link from "next/link";
export default function News() {
  const [news, setNews] = useState<string>("MBC");
  const { data: MBCDB } = useSWR<IMBC>("/api/scrapper");
  const clickNews = (event: MouseEvent<HTMLDivElement>) => {
    const text = event.currentTarget.innerHTML;
    setNews((prev) => (prev = text));
  };
  return (
    <div>
      {/* 뉴스 버튼*/}
      <NewsBtn />
      {/** 뉴스 상자*/}
      <div className="h-[260px] border-slate-200 flex relative ">
        {/** 뉴스 구독 리스트 */}
        <div className="w-[165px] flex-none py-4 bg-slate-100 border border-slate-200 text-sm flex flex-col px-4 space-y-3 overflow-scroll">
          <div
            onClick={clickNews}
            className={cls(
              "hover:cursor-pointer hover:underline  px-5  ",
              news === "MBC" ? "bg-blue-800 rounded-3xl text-white py-2" : ""
            )}
          >
            MBC
          </div>
          <div
            onClick={clickNews}
            className={cls(
              "hover:cursor-pointer hover:underline  px-5  ",
              news === "SBS" ? "bg-blue-800 rounded-3xl text-white py-2" : ""
            )}
          >
            SBS
          </div>
          <div
            onClick={clickNews}
            className={cls(
              "hover:cursor-pointer hover:underline  px-5  ",
              news === "KBS" ? "bg-blue-800 rounded-3xl text-white py-2" : ""
            )}
          >
            KBS
          </div>
        </div>
        {/** 주요 뉴스 */}
        <div className="border-y  w-[570px] px-6 py-4 border-slate-200 ">
          <div className="text-sm  space-y-3">
            <div className="w-[195px] flex justify-between items-center">
              <span className="font-bold text-sm hover:cursor-pointer">
                {news}
              </span>
              <span className="text-slate-500 text-[12px] ">
                2022.10.24 18:57 편집
              </span>
            </div>
            <div className="flex space-x-6">
              {MBCDB?.data ? (
                <Link href={MBCDB.data[0].href + ""}>
                  <div className="w-[195px] space-y-3 hover:cursor-pointer ">
                    <div className="relative h-[132px] w-[195px]">
                      <Image
                        src={`https:${MBCDB.data[0].imgSrc}`}
                        className=" bg-slate-200 h-[132px] w-[195px]"
                        alt={`${MBCDB.data[0].title}`}
                        layout="fill"
                      />
                    </div>
                    <div className="font-bold text-[13px] hover:underline">
                      {`https:${MBCDB.data[0].title}`}
                    </div>
                  </div>
                </Link>
              ) : (
                <Link href={MBCJSON[0].href}>
                  <div className="w-[195px] space-y-3 hover:cursor-pointer ">
                    <div className="relative h-[132px] w-[195px]">
                      <Image
                        src={`https:${MBCJSON[0].imgSrc}`}
                        className=" bg-slate-200 h-[132px] w-[195px]"
                        alt={`${MBCJSON[0].title}`}
                        layout="fill"
                      />
                    </div>
                    <div className="font-bold text-[13px] hover:underline">
                      {`https:${MBCJSON[0].title}`}
                    </div>
                  </div>
                </Link>
              )}
              <div className="overflow-hidden ">
                <div className="text-[13px] space-y-[0.4em] flex flex-col">
                  {MBCDB?.ok
                    ? MBCDB?.data?.slice(1).map((article, index) => (
                        <a
                          href={article.href || ""}
                          key={article.id}
                          className="truncate hover:cursor-pointer hover:underline"
                        >
                          {article.title}
                        </a>
                      ))
                    : MBCJSON.map((article, index) => (
                        <a
                          href={article.href || ""}
                          key={article.id}
                          className="truncate hover:cursor-pointer hover:underline"
                        >
                          {article.title}
                        </a>
                      ))}
                </div>
                <div className="text-slate-400 text-xs mt-5">
                  {news} 언론사에서 직접 편집한 뉴스입니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <SliderBtn className="top-[114px]" />
      </div>
    </div>
  );
}
