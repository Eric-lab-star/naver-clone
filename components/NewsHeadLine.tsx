import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { ScrapeType } from "../types/newsTypes";
import ChevronLeft from "./ChevronRight";

export default function NewsHeadLine() {
  const { data: DB } = useSWR<ScrapeType>("/api/ytnScraper");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timerId = setInterval(() => {
      if (index >= 6) {
        setIndex((prev) => (prev = 0));
      }
      setIndex((prev) => (prev = prev + 1));
    }, 3000);
    return () => clearInterval(timerId);
  }, [index]);
  console.log(index);

  return (
    <div className="bg-slate-100 px-3 flex items-center justify-between border border-slate-300">
      <div className=" relative text-sm h-[50px] flex items-center">
        <div className="flex items-center">
          <div className="font-bold ">연합뉴스</div>
          <ChevronLeft className="w-[13.5px] text-slate-600" />
        </div>
        <div className="w-[320px] absolute left-20 truncate bg-amber-100">
          {DB?.data ? (
            <Link href={DB.data[index].href || ""} key={DB.data[index].id}>
              <div>{DB.data[index].title}</div>
            </Link>
          ) : null}
        </div>
      </div>
      <div className="flex font-bold text-sm space-x-2">
        <div className="text-blue-600">뉴스홈</div>
        <div>연예</div>
        <div>스포츠</div>
        <div>경제</div>
      </div>
    </div>
  );
}
