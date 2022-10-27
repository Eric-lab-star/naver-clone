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
          {LivingDB.slice(1, 5).map((data) => (
            <HStack {...data} category={category} key={data.id} />
          ))}
        </div>
      ) : null}
      {category === "책방" ? (
        <div className="flex space-y-4 flex-col">
          {BookDB.slice(1, 5).map((data) => (
            <HStack {...data} category={category} key={data.id} />
          ))}
          <div>
            <div className="flex justify-between items-center text-xs text-slate-700">
              <div>
                <span className="text-sm font-bold mr-2">베스트 셀러</span>
                <span>집계기간 </span>
              </div>
              <div>
                <span className="mr-2 ">제공</span>
                <span>인터넷 교보문고</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <Funding />
      <MoreArticles />
    </div>
  );
}
