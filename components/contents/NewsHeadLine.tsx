import Link from "next/link";
import { useEffect, useState } from "react";
import ChevronLeft from "../SVG/ChevronRightSVG";
import YTNJSON from "../../FakeDB/YTNTop.json";

const NewsHeadLine = () => {
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

  return (
    <div className="bg-slate-100 px-3 flex items-center justify-between border border-slate-300">
      <div className=" relative text-sm h-[50px] flex items-center">
        <Link href={"https://ytn.co.kr"}>
          <div className="flex items-center hover:cursor-pointer">
            <div className="font-bold ">연합뉴스</div>
            <ChevronLeft className="w-[13.5px] text-slate-600" />
          </div>
        </Link>
        <div className="w-[320px] absolute left-20 hover:cursor-pointer line-clamp-1">
          {
            <Link
              href={YTNJSON.data[index].href || ""}
              key={YTNJSON.data[index].id}
            >
              <div className="truncate">{YTNJSON.data[index].title}</div>
            </Link>
          }
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
};

export default NewsHeadLine;
