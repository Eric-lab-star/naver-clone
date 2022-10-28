import cls from "../utils/cls";
import CogSVG from "./Cog";
import Funding from "./Funding";
import MoreArticles from "./MoreArticles";
import SliderBtn from "./SliderBtn";
import { LivingDB } from "../FakeDB/LivingDB";
import { MouseEvent, useState } from "react";
import HStack from "./HStack";
import { CategoryDB, ICategoryDB } from "../FakeDB/CategoryDB";
import CategoryBar from "./CategoryBar";
import { BookDB } from "../FakeDB/BookDB";
import StarSVG from "./StarSVG";
export default function Article() {
  const [category, setCategory] = useState<string>("엔터");
  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    setCategory(() => target.innerHTML);
  };

  return (
    <div className="mt-9 space-y-3 ">
      {/* 글 헤더 */}
      <div className=" flex justify-between items-center text-xs text-slate-600">
        <div className="flex items-center space-x-2">
          <div className="font-bold text-sm">오늘 읽을만한 글</div>
          <div>주제별로 분류된 다양한 글 모음</div>
        </div>
        <div className="flex items-center space-x-2">
          <div>관심주제 설정 사용중</div>
          <div className=" flex items-center space-x-1 hover:cursor-pointer hover:underline">
            <CogSVG className="w-4" />
            <div>관심주제 설정</div>
          </div>
        </div>
      </div>
      {/* 분류 */}
      <div className="relative">
        <CategoryBar onClick={onClick} category={category} />
        <SliderBtn className="top-[10px]" />
      </div>
      {/* 내용물 */}
      {category === "리빙" ? (
        <div className="flex space-y-4 flex-col">
          {LivingDB.slice(1, 9).map((data) => (
            <HStack {...data} category={category} key={data.id} />
          ))}
        </div>
      ) : null}
      {category === "책방" ? (
        <div className="flex space-y-4 flex-col">
          {/* 책 소개 */}
          {BookDB.slice(1, 5).map((data) => (
            <HStack {...data} category={category} key={data.id} />
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
            <div className="grid grid-cols-5 gap-8 relative ">
              {[1, 2, 3, 4, 5].map((v) => (
                <div key={v} className="w-[120px]">
                  <div className=" h-[180px] bg-slate-300"></div>
                  <div className="">
                    <div className="font-bold my-3 text-[12.5px]">
                      1. 트렌드 코리아 2032
                    </div>
                    <div className=" text-xs text-slate-500">
                      <div className="space-x-1 line-clamp-1">
                        <span>저자</span>
                        <span className="">김난도, 전미영, 최재영</span>
                      </div>
                      <div className="space-x-1">
                        <span>출판</span>
                        <span>미래의 창</span>
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
              <SliderBtn className="top-[80px]" />
            </div>
          </div>
          {/* 책 소개 */}
          {BookDB.slice(5, 10).map((data) => (
            <HStack {...data} category={category} key={data.id} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
