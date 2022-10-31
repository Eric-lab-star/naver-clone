import { useState } from "react";
import { BookDB } from "../FakeDB/BookDB";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";
import HStack from "./HStack";
import StarSVG from "./StarSVG";

export default function Books({ category }: { category: string }) {
  const [page, setPage] = useState<number>(0);

  const onClick = (direction: number) => {
    if (page === 0 && direction === -1) {
      return;
    }
    if ((page + 1) * 3 === BookDB.length - 1 && direction === 1) {
      return;
    }
    setPage((prev) => (prev = prev + direction));
  };

  return (
    <div className="flex space-y-4 flex-col pb-16">
      {/* 책 소개 */}
      {BookDB.slice(1, 5).map((data) => (
        <HStack
          categoryColor="text-green-500"
          {...data}
          category={category}
          key={data.id}
        />
      ))}
      <div className="border-y pb-16 pt-6">
        {/* 제목 */}
        <div className="flex justify-between items-center text-xs mb-4 text-slate-700">
          <div>
            <span className="text-sm font-bold mr-2 text-black">
              베스트 셀러
            </span>
            <span>집계기간 </span>
            <span>2022.10.24 ~ 2022.10.30</span>
          </div>
          <div className="space-x-1">
            <span>제공</span>
            <span>·</span>
            <span>인터넷 교보문고</span>
          </div>
        </div>
        {/* 책표지 그리드 */}
        <div className="relative ">
          <div className="grid grid-cols-5 gap-8 " key={page}>
            {BookDB.slice(page * 5, (page + 1) * 5).map((book) => (
              <div key={book.id} className="w-[120px]">
                <div className=" h-[180px] bg-slate-300"></div>
                <div className="">
                  <div className="font-bold my-3 text-[12.5px]">
                    {book.title}
                  </div>
                  <div className=" text-xs text-slate-500">
                    <div className="space-x-1 line-clamp-1">
                      <span>저자</span>
                      <span>{book.author}</span>
                    </div>
                    <div className="space-x-1">
                      <span>출판</span>
                      <span>{book?.company}</span>
                    </div>
                    <div className="flex space-x-1 items-center">
                      <span>평점</span>
                      <StarSVG />
                      <span className="text-red-500">4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {page !== 0 ? (
            <div
              onClick={() => onClick(-1)}
              className="w-[30px] hover:cursor-pointer absolute -left-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center top-[80px]"
            >
              <ChevronLeft className="text-slate-700 w-4" />
            </div>
          ) : null}
          {(page + 1) * 5 < BookDB.length - 1 ? (
            <div
              onClick={() => onClick(1)}
              className="w-[30px] hover:cursor-pointer absolute  -right-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center top-[80px]"
            >
              <ChevronRight className="text-slate-700 w-4" />
            </div>
          ) : null}
        </div>
      </div>
      {/* 책 소개 */}
      {BookDB.slice(5, 10).map((data) => (
        <HStack
          categoryColor="text-green-500"
          {...data}
          category={category}
          key={data.id}
        />
      ))}
    </div>
  );
}
