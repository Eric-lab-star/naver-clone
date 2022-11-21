import { useState } from "react";
import { FundingDB } from "../FakeDB/FundingDB";
import cls from "../utils/cls";
import ChevronLeft from "./SVG/ChevronLeftSVG";
import ChevronRight from "./SVG/ChevronRightSVG";

interface FundingProps {
  isFirst: boolean;
}

export default function Funding({ isFirst }: FundingProps) {
  const [{ page, direction }, setPage] = useState<{
    page: number;
    direction: number;
  }>({ page: 0, direction: 1 });
  const onClick = (direction: number) => {
    if ((page + 1) * 3 > FundingDB.length - 1 && direction === 1) {
      return;
    }
    if (page === 0 && direction === -1) {
      return;
    }
    setPage((prev) => ({
      page: prev.page + direction,
      direction: prev.direction,
    }));
  };

  return (
    <div
      className={cls(
        "border-slate-300 pb-7 my-5 select-none",
        isFirst ? "border-t" : "border-y"
      )}
    >
      <div className="my-5 flex items-center text-sm font-bold ">
        <div className="mr-1">오늘 가장 따뜻한 클릭</div>
        <ChevronRight className="text-slate-800 w-4" />
      </div>
      <div className=" relative ">
        <div className="grid grid-cols-3  gap-4" key={page}>
          {FundingDB.slice(page * 3, (page + 1) * 3).map((item) => (
            <div key={item.id} className="text-[13px] space-y-1">
              <div className="bg-slate-300  h-[130px] relative">
                <div className="absolute bg-yellow-600 h-[30px] w-[40px] text-white flex justify-center items-center text-xs">
                  펀딩
                </div>
              </div>
              <div className=" font-semibold line-clamp-1">{item.title}</div>
              <div className="space-x-1">
                <span className="after:content-['_·']">{item.user}</span>
                <span className="text-yellow-600 after:content-['%']">
                  {item.percent}
                </span>
                <span>달성</span>
              </div>
            </div>
          ))}
        </div>

        {page !== 0 ? (
          <div
            onClick={() => onClick(-1)}
            id="left"
            className={cls(
              "w-[30px] hover:cursor-pointer absolute -left-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center",
              "top-14"
            )}
          >
            <ChevronLeft className="text-slate-700 w-4" />
          </div>
        ) : null}
        {(page + 1) * 3 <= FundingDB.length - 1 ? (
          <div
            onClick={() => onClick(1)}
            id="right"
            className={cls(
              "w-[30px] hover:cursor-pointer absolute  -right-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center",
              "top-14"
            )}
          >
            <ChevronRight className="text-slate-700 w-4" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
