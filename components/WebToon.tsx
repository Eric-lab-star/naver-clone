import { MouseEvent, useState } from "react";
import { VideoDB } from "../FakeDB/VideoDB";
import { WebToonDB } from "../FakeDB/WebToonDB";
import cls from "../utils/cls";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";
import SHStack from "./SHStack";
import VideoGridItem from "./VideoGridItem";
import WebToonTrendingItem from "./WebToonTrendItem";

export default function WebToon({ category }: { category: string }) {
  const [trendingItem, setTrendingItem] = useState<string>("웹툰");
  const [sliderPage, setSliderPage] = useState<number>(1);
  const [novelPage, setNovelPage] = useState<number>(0);
  const onSliderBtnClick = (direction: number) => {
    if (direction === -1 && sliderPage === 0) {
      return;
    }
    if (direction === 1 && (sliderPage + 1) * 4 >= VideoDB.length - 1) {
      return;
    }
    setSliderPage((prev) => (prev = prev + direction));
  };
  const handleTrendingItem = (event: MouseEvent<HTMLDivElement>) => {
    const text = event.currentTarget.innerText;
    setTrendingItem(text);
  };

  const onTrendingBtnClick = (direction: number) => {
    if (direction === -1 && novelPage === 0) {
      return;
    }
    if (direction === 1 && (novelPage + 1) * 5 >= WebToonDB.length - 1) {
      return;
    }
    setNovelPage((prev) => (prev = prev + direction));
  };
  return (
    <>
      <div className=" h-[340px] w-[750px] grid grid-cols-2 gap-6">
        <div className="w-[366px] space-y-2">
          <div className=" bg-slate-100 border h-[180px]"></div>
          <div className="text-[12.5px] space-y-1">
            <div className="text-green-500  font-bold">{category}</div>
            <div className="text-slate-800 font-bold ">
              신작 &lt;고교흥신소&gt;1화 보러가기
            </div>
            <div>김성모 작가의 화려한 귀환! 고등학생이... 흥신소?!</div>
            <div>김성모</div>
          </div>
        </div>
        <div className="w-[335px] h-[325px] grid grid-rows-3 gap-3">
          {[0, 1, 2].map((v) => (
            <SHStack
              key={v}
              title="너 피어싱 빼지 않았었나?"
              author="요일별 웹툰"
              category={category}
              categoryColor="text-green-500"
              className="hover:cursor-pointer"
            />
          ))}
        </div>
      </div>
      <div className="h-[48px] bg-slate-100 border flex items-center p-5 space-x-5 text-sm font-bold text-slate-800">
        <div className="text-green-500 border-r border-slate-300 pr-4 hover:cursor-pointer hover:underline">
          웹툰 홈 바로가기
        </div>
        {[
          "요일별 웹툰",
          "베스트 도전",
          "도전 만화",
          "시리즈 장르소설",
          "시리즈 만화",
          "웹소설",
        ].map((item) => (
          <div key={item} className="hover:cursor-pointer hover:underline">
            {item}
          </div>
        ))}
      </div>
      {/* 인기 급상승 */}
      <div className="h-[440px] ">
        <div className="flex text-[12.5px] space-x-5  font-semibold items-center">
          <div className="border-r text-sm  border-slate-200 pr-2">
            인기 급상승
          </div>
          {["웹툰", "시리즈 장르소설", "시리즈 만화", "웹소설"].map((item) => (
            <div
              key={item}
              onClick={handleTrendingItem}
              className={cls(
                "hover:underline hover:cursor-pointer",
                trendingItem === item
                  ? "text-white bg-green-500 py-1 px-2 rounded-2xl"
                  : ""
              )}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="pt-4 grid grid-cols-2 gap-10">
          <div className="divide-y space-y-2">
            {WebToonDB.slice(0, 5).map((webtoon) => (
              <WebToonTrendingItem data={webtoon} key={webtoon.id} />
            ))}
          </div>
          <div className="divide-y space-y-2">
            {WebToonDB.slice(5, 10).map((webtoon, index) => (
              <WebToonTrendingItem data={webtoon} key={webtoon.id} />
            ))}
          </div>
        </div>
      </div>
      {/* 썸네일 */}
      <div className="grid grid-cols-3 grid-rows-3 border-y py-5 gap-5">
        {WebToonDB.slice(0, 9).map((data, i) => (
          <VideoGridItem webToonData={data} key={i} />
        ))}
      </div>

      <div className="text-sm font-bold py-4">시리즈 실시간 랭킹 NOVEL</div>
      <div className="relative">
        <div key={novelPage} className="grid grid-cols-5 gap-8 pb-10">
          {WebToonDB.slice(novelPage * 5, (novelPage + 1) * 5).map((novel) => (
            <div key={novel.id} className="w-[120px] ">
              <div className="h-[175px] bg-slate-100 mb-3"></div>
              <div className="text-[11px] space-y-1">
                <div className="font-semibold text-sm">
                  {novel.ranking} {novel.title}
                </div>
                <div className="text-xs text-slate-700 before:content-['장르_']">
                  {novel.category}
                </div>
                <div className="text-xs text-slate-700 before:content-['작가_']">
                  {novel.author}
                </div>
                <div className="text-xs text-slate-700 before:content-['다운로드_']">
                  71만
                </div>
                <div className="text-green-600 text-xs">25화 무료</div>
              </div>
            </div>
          ))}
        </div>
        <div
          onClick={() => onTrendingBtnClick(-1)}
          className="top-[70px] w-[30px] hover:cursor-pointer absolute -left-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center"
        >
          <ChevronLeft className="text-slate-700 w-4" />
        </div>
        <div
          onClick={() => onTrendingBtnClick(1)}
          className="top-[70px] w-[30px] hover:cursor-pointer absolute  -right-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center"
        >
          <ChevronRight className="text-slate-700 w-4" />
        </div>
      </div>
      {/* 슬라이드 */}
      <div className="border-y ">
        <div className="text-black font-bold text-[14px] py-6">
          이번주 가장 많이 본 신작 TOP 10
        </div>
        <div className="relative" key={sliderPage}>
          <div className="grid grid-cols-4 relative  pb-6  place-items-center">
            {WebToonDB.slice(sliderPage * 4, (sliderPage + 1) * 4).map(
              (webtoon, webtoonIndex) => (
                <div key={webtoonIndex} className="w-[140px] ">
                  <div className=" h-[100px] bg-slate-200"></div>
                  <div className="mt-3">
                    <div className="text-[13px] font-semibold text-black">
                      {webtoon.title}
                    </div>
                    <div className="text-xs text-slate-500">
                      {webtoon.author}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div
            onClick={() => onSliderBtnClick(-1)}
            className="top-[30px] w-[30px] hover:cursor-pointer absolute -left-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center"
          >
            <ChevronLeft className="text-slate-700 w-4" />
          </div>
          <div
            onClick={() => onSliderBtnClick(1)}
            className="top-[30px] w-[30px] hover:cursor-pointer absolute  -right-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center"
          >
            <ChevronRight className="text-slate-700 w-4" />
          </div>
        </div>
      </div>
      <div className="text-sm font-bold py-4">시리즈 실시간 랭킹 COMIX</div>
      <div className="relative">
        <div key={novelPage} className="grid grid-cols-5 gap-8 pb-10">
          {WebToonDB.slice(novelPage * 5, (novelPage + 1) * 5).map((novel) => (
            <div key={novel.id} className="w-[120px] ">
              <div className="h-[175px] bg-slate-100 mb-3"></div>
              <div className="text-[11px] space-y-1">
                <div className="font-semibold text-sm">
                  {novel.ranking} {novel.title}
                </div>
                <div className="text-xs text-slate-700 before:content-['장르_']">
                  {novel.category}
                </div>
                <div className="text-xs text-slate-700 before:content-['작가_']">
                  {novel.author}
                </div>
                <div className="text-xs text-slate-700 before:content-['다운로드_']">
                  71만
                </div>
                <div className="text-green-600 text-xs">25화 무료</div>
              </div>
            </div>
          ))}
        </div>
        <div
          onClick={() => onTrendingBtnClick(-1)}
          className="top-[70px] w-[30px] hover:cursor-pointer absolute -left-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center"
        >
          <ChevronLeft className="text-slate-700 w-4" />
        </div>
        <div
          onClick={() => onTrendingBtnClick(1)}
          className="top-[70px] w-[30px] hover:cursor-pointer absolute  -right-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center"
        >
          <ChevronRight className="text-slate-700 w-4" />
        </div>
      </div>
      <div className="border-y ">
        <div className="text-black font-bold text-[14px] py-6">
          이번주 가장 많이 본 완결작 TOP 10
        </div>
        <div className="relative" key={sliderPage}>
          <div className="grid grid-cols-4 relative  pb-6  place-items-center">
            {WebToonDB.slice(sliderPage * 4, (sliderPage + 1) * 4).map(
              (webtoon, webtoonIndex) => (
                <div key={webtoonIndex} className="w-[140px] ">
                  <div className=" h-[100px] bg-slate-200"></div>
                  <div className="mt-3">
                    <div className="text-[13px] font-semibold text-black">
                      {webtoon.title}
                    </div>
                    <div className="text-xs text-slate-500">
                      {webtoon.author}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div
            onClick={() => onSliderBtnClick(-1)}
            className="top-[30px] w-[30px] hover:cursor-pointer absolute -left-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center"
          >
            <ChevronLeft className="text-slate-700 w-4" />
          </div>
          <div
            onClick={() => onSliderBtnClick(1)}
            className="top-[30px] w-[30px] hover:cursor-pointer absolute  -right-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center"
          >
            <ChevronRight className="text-slate-700 w-4" />
          </div>
        </div>
      </div>
      <div className="pb-32 ">
        <div className="text-black font-bold text-[14px] py-6">
          추천 베스트리그 웹소설
        </div>
        <div className="relative" key={sliderPage}>
          <div className="grid grid-cols-4 relative  pb-6  place-items-center">
            {WebToonDB.slice(sliderPage * 4, (sliderPage + 1) * 4).map(
              (webtoon, webtoonIndex) => (
                <div key={webtoonIndex} className="w-[140px] ">
                  <div className=" h-[100px] bg-slate-200"></div>
                  <div className="mt-3">
                    <div className="text-[13px] font-semibold text-black">
                      {webtoon.title}
                    </div>
                    <div className="text-xs text-slate-500">
                      {webtoon.author}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div
            onClick={() => onSliderBtnClick(-1)}
            className="top-[30px] w-[30px] hover:cursor-pointer absolute -left-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center"
          >
            <ChevronLeft className="text-slate-700 w-4" />
          </div>
          <div
            onClick={() => onSliderBtnClick(1)}
            className="top-[30px] w-[30px] hover:cursor-pointer absolute  -right-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center"
          >
            <ChevronRight className="text-slate-700 w-4" />
          </div>
        </div>
      </div>
    </>
  );
}
