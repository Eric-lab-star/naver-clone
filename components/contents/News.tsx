import { MouseEvent, useEffect, useMemo, useState } from "react";
import cls from "../../utils/cls";
import MBCJSON from "../../FakeDB/MBCTop.json";
import SBSJSON from "../../FakeDB/SBSTop.json";
import KBSJSON from "../../FakeDB/KBSTop.json";
import WSJJSON from "../../FakeDB/wsjTop.json";
import JTBCJSON from "../../FakeDB/JTBCTop.json";
import YTNJSON from "../../FakeDB/YTNTop.json";

import NewsBtn from "../utils/Btn/NewsBtn";
import Image from "next/image";
import Link from "next/link";
import { StaticType } from "../../types/newsTypes";
import ChevronLeft from "../SVG/ChevronLeftSVG";
import ChevronRight from "../SVG/ChevronRightSVG";

export default function News() {
  const [page, setPage] = useState<number>(0);
  const [StaticDB, setStaticDB] = useState<StaticType>(MBCJSON);
  const clickNews = (event: MouseEvent<HTMLDivElement>) => {
    const text = event.currentTarget.innerHTML;
    const index = newsList.findIndex((v, i, a) => {
      return a[i] === text;
    });
    setPage(index);
  };
  const handlePage = (direction: number) => {
    if (page === 0 && direction === -1) {
      return;
    }
    if (page === newsList.length - 1 && direction === 1) {
      return;
    }
    setPage((prev) => (prev = prev + direction));
  };
  const newsList = useMemo(
    () => ["MBC", "SBS", "KBS", "WSJ", "JTBC", "YTN"],
    []
  );

  useEffect(() => {
    switch (newsList[page]) {
      case "MBC":
        setStaticDB(MBCJSON);
        break;
      case "SBS":
        setStaticDB(SBSJSON);
        break;
      case "KBS":
        setStaticDB(KBSJSON);
        break;
      case "WSJ":
        setStaticDB(WSJJSON);
        break;
      case "YTN":
        setStaticDB(YTNJSON);
        break;
      case "JTBC":
        setStaticDB(JTBCJSON);
        break;
      default:
        setStaticDB(MBCJSON);
        break;
    }
  }, [page, newsList]);
  return (
    <div>
      {/* 뉴스 버튼*/}
      <NewsBtn />
      {/** 뉴스 상자*/}
      <div className="h-[260px] border-slate-200 flex relative ">
        {/** 뉴스 구독 리스트 */}
        <div className="w-[165px] flex-none py-4 bg-slate-100 border border-slate-200 text-sm flex flex-col px-4 space-y-3 overflow-scroll">
          {newsList.map((news) => (
            <div
              key={news}
              onClick={clickNews}
              className={cls(
                "hover:cursor-pointer hover:underline  px-5  ",
                newsList[page] === news
                  ? "bg-blue-800 rounded-3xl text-white py-2"
                  : ""
              )}
            >
              {news}
            </div>
          ))}
        </div>
        {/** 주요 뉴스 */}
        <div className="border-y  w-[570px] px-6 py-4 border-slate-200 ">
          <div className="text-sm  space-y-3">
            <div className="w-[195px] flex justify-between items-center">
              <span className="font-bold text-sm hover:cursor-pointer">
                {newsList[page]}
              </span>
              <span className="text-slate-500 text-[12px] ">
                {`${StaticDB.time.year}.${StaticDB.time.month + 1}.${
                  StaticDB.time.date
                }. ${StaticDB.time.hours}:${StaticDB.time.min} 편집`}
              </span>
            </div>
            <div className="flex space-x-6">
              {
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
              }
              <div className="overflow-hidden ">
                <div className="text-[13px] space-y-[0.4em] flex flex-col">
                  {StaticDB.data.slice(1).map((article) => (
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
                  {newsList[page]} 언론사에서 직접 편집한 뉴스입니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => handlePage(-1)}
          id="left"
          className="w-[30px] top-[114px] hover:cursor-pointer absolute -left-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center"
        >
          <ChevronLeft className="text-slate-700 w-4" />
        </div>
        <div
          onClick={() => handlePage(1)}
          id="right"
          className="w-[30px] top-[114px] hover:cursor-pointer absolute  -right-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center"
        >
          <ChevronRight className="text-slate-700 w-4" />
        </div>
      </div>
    </div>
  );
}
