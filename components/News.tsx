import { MouseEvent, useEffect, useState } from "react";
import cls from "../utils/cls";
import SliderBtn from "./SliderBtn";
import MBCJSON from "../FakeDB/MBCTop.json";
import SBSJSON from "../FakeDB/SBSTop.json";
import KBSJSON from "../FakeDB/KBSTop.json";
import WSJJSON from "../FakeDB/wsjTop.json";
import useSWR from "swr";
import NewsBtn from "./NewsBtn";
import Image from "next/image";
import Link from "next/link";
import naver from "../public/naverTop.png";
import { ScrapeType, StaticType } from "../types/newsTypes";

export default function News() {
  const [news, setNews] = useState<string>("MBC");
  const [DB, setDB] = useState<ScrapeType>();
  const [StaticDB, setStaticDB] = useState<StaticType>(MBCJSON);
  const { data: MBCDB } = useSWR<ScrapeType>("/api/mbcScrapper");
  const { data: SBSDB } = useSWR<ScrapeType>("/api/sbsScrapper");
  const { data: KBSDB } = useSWR<ScrapeType>("/api/kbsScrapper");
  const { data: WSJDB } = useSWR<ScrapeType>("/api/wsjScrapper");
  const clickNews = (event: MouseEvent<HTMLDivElement>) => {
    const text = event.currentTarget.innerHTML;
    setNews((prev) => (prev = text));
  };
  useEffect(() => {
    if (news === "MBC") {
      setDB((prev) => (prev = MBCDB));
      setStaticDB((prev) => (prev = MBCJSON));
    }
    if (news === "SBS") {
      setDB((prev) => (prev = SBSDB));
      setStaticDB((prev) => (prev = SBSJSON));
    }
    if (news === "KBS") {
      setDB((prev) => (prev = KBSDB));
      setStaticDB((prev) => (prev = KBSJSON));
    }
    if (news === "WSJ") {
      setDB((prev) => (prev = WSJDB));
      setStaticDB((prev) => (prev = WSJJSON));
    }
  }, [news, MBCDB, SBSDB, KBSDB, WSJDB]);
  return (
    <div>
      {/* 뉴스 버튼*/}
      <NewsBtn />
      {/** 뉴스 상자*/}
      <div className="h-[260px] border-slate-200 flex relative ">
        {/** 뉴스 구독 리스트 */}
        <div className="w-[165px] flex-none py-4 bg-slate-100 border border-slate-200 text-sm flex flex-col px-4 space-y-3 overflow-scroll">
          {["MBC", "SBS", "KBS", "WSJ"].map((v) => (
            <div
              key={v}
              onClick={clickNews}
              className={cls(
                "hover:cursor-pointer hover:underline  px-5  ",
                news === v ? "bg-blue-800 rounded-3xl text-white py-2" : ""
              )}
            >
              {v}
            </div>
          ))}
        </div>
        {/** 주요 뉴스 */}
        <div className="border-y  w-[570px] px-6 py-4 border-slate-200 ">
          <div className="text-sm  space-y-3">
            <div className="w-[195px] flex justify-between items-center">
              <span className="font-bold text-sm hover:cursor-pointer">
                {news}
              </span>
              <span className="text-slate-500 text-[12px] ">
                {DB?.time
                  ? `${DB.time.year}.${DB.time.month + 1}.${DB.time.date}. ${
                      DB.time.hours
                    }:${DB.time.min} 편집`
                  : `${StaticDB.time.year}.${StaticDB.time.month + 1}.${
                      StaticDB.time.date
                    }. ${StaticDB.time.hours}:${StaticDB.time.min} 편집`}
              </span>
            </div>
            <div className="flex space-x-6">
              {DB?.data ? (
                <Link href={DB.data[0].href + ""}>
                  <div className="w-[195px] space-y-3 hover:cursor-pointer ">
                    <div className="relative h-[132px] w-[195px]">
                      <Image
                        src={DB.data[0].imgSrc || naver}
                        className=" bg-slate-200 h-[132px] w-[195px]"
                        alt={`${DB.data[0].title}`}
                        layout="fill"
                      />
                    </div>
                    <div className="font-bold text-[13px] hover:underline">
                      {DB.data[0].title}
                    </div>
                  </div>
                </Link>
              ) : (
                <Link href={StaticDB.data[0].href || ""}>
                  <div className="w-[195px] space-y-3 hover:cursor-pointer ">
                    <div className="relative h-[132px] w-[195px]">
                      <Image
                        src={StaticDB.data[0].imgSrc || ""}
                        className=" bg-slate-200 h-[132px] w-[195px]"
                        alt={`${StaticDB.data[0].title}`}
                        layout="fill"
                      />
                    </div>
                    <div className="font-bold text-[13px] hover:underline">
                      {StaticDB.data[0].title}
                    </div>
                  </div>
                </Link>
              )}
              <div className="overflow-hidden ">
                <div className="text-[13px] space-y-[0.4em] flex flex-col">
                  {DB?.ok
                    ? DB?.data?.slice(1).map((article, index) => (
                        <a
                          href={article.href || ""}
                          key={article.id}
                          className="truncate hover:cursor-pointer hover:underline"
                        >
                          {article.title}
                        </a>
                      ))
                    : StaticDB.data.map((article) => (
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
