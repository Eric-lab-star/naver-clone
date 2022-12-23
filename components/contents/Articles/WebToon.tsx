import Image from "next/image";
import { MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import useSWR from "swr";
import { comicState, newComicState } from "../../../atoms";
import { ICategory } from "../../../types/categoryTypes";
import cls from "../../../utils/cls";
import Slider from "../../slider";
import SHStack from "../../utils/SHStack";
import VideoGridItem from "../../utils/VideoGridItem";
import WebToonTrendingItem from "../../utils/WebToonTrendItem";

export interface IComic {
  id: number;
  digitalId: number;
  title: string;
  description: string;
  modified: Date;
  textObjects: {
    text: string;
  }[];
  resourceURI: string;
  urls: {
    type: string;
    url: string;
  }[];
  series: {
    resourceURI: string;
    name: string;
  };
  dates: {
    type: string;
    date: string;
  }[];
  thumbnail: {
    path: string;
    extension: string;
  };
  images: {
    path: string;
    extension: string;
  }[];
  creators: {
    items: {
      resourceURI: string;
      name: string;
      role: string;
    }[];
  };
  characters: {
    items: {
      resourceURI: string;
      name: string;
    }[];
  };
  stories: {
    items: {
      resourceURI: string;
      name: string;
      type: string;
    }[];
  };
}

interface IComics {
  code: number;
  status: string;
  data: {
    results: IComic[];
  };
}

export default function WebToon({ name, color }: ICategory) {
  const [trendingItem, setTrendingItem] = useState<string>("웹툰");
  const [newComicpage, setNewComicState] = useRecoilState(newComicState);
  const [comicPage, setComicState] = useRecoilState(comicState);
  const { data: Comics } = useSWR<IComics>("/api/marvel");

  const handleTrendingItem = (event: MouseEvent<HTMLDivElement>) => {
    const text = event.currentTarget.innerText;
    setTrendingItem(text);
  };
  return (
    <>
      <div className=" h-[340px] w-[750px] grid grid-cols-2 gap-6">
        <div className="w-[366px] space-y-2">
          <div className=" bg-slate-100 border h-[180px] relative">
            <Image
              fill
              sizes="366px"
              alt={"thumbnail"}
              src={
                Comics
                  ? `${Comics?.data.results[0].thumbnail.path}/landscape_medium.jpg`
                  : ""
              }
            />
          </div>
          <div className="text-[12.5px] space-y-1">
            <div className="text-green-500  font-bold">{name}</div>
            <div className="text-slate-800 font-bold ">
              {Comics ? Comics.data.results[0].title : "Comics"}
            </div>
            <div>{Comics ? Comics.data.results[0].description : "Detail"}</div>
            <div>
              {Comics
                ? Comics.data.results[0].creators.items[0].name
                : "Creator"}
            </div>
          </div>
        </div>
        <div className="w-[335px] h-[325px] grid grid-rows-3 gap-3">
          {Comics?.data.results.slice(1, 4).map((comic) => (
            <div key={comic.id}>
              <SHStack
                imgSrc={`${comic.thumbnail.path}/standard_medium.jpg`}
                title={comic.title}
                author="Marvel Comics"
                category={name}
                categoryColor={color}
                className="hover:cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
      {/* 웹툰 네비 바 */}
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
            {Comics
              ? Comics.data.results
                  .slice(0, 5)
                  .map((comic) => (
                    <WebToonTrendingItem data={comic} key={comic.id} />
                  ))
              : "Loading"}
          </div>
          <div className="divide-y space-y-2">
            {Comics
              ? Comics.data.results
                  .slice(5, 10)
                  .map((comic) => (
                    <WebToonTrendingItem data={comic} key={comic.id} />
                  ))
              : "Loading"}
          </div>
        </div>
      </div>
      {/* 큰 썸네일 */}
      <div className="grid grid-cols-3 grid-rows-3 border-y py-5 gap-5">
        {Comics?.data.results.slice(0, 9).map((comic) => (
          <VideoGridItem comic={comic} key={comic.id} />
        ))}
      </div>
      {/* 실시간 랭킹 노블 슬라이더 */}
      <div className="text-sm font-bold py-4">시리즈 실시간 랭킹 COMIC</div>
      <Slider setState={setComicState} maxItem={10} page={comicPage} items={5}>
        <div key={comicPage} className="grid grid-cols-5 gap-8 pb-10">
          {Comics
            ? Comics.data.results
                .slice(comicPage * 5, (comicPage + 1) * 5)
                .map((comic) => (
                  <div key={comic.id} className="w-[120px] ">
                    <div className="h-[175px] bg-slate-100 mb-3 relative">
                      <Image
                        alt="comics book cover"
                        sizes="175px"
                        fill
                        src={`${comic.thumbnail.path}/portrait_medium.jpg`}
                      />
                    </div>
                    <div className="text-[11px] space-y-1">
                      <div className="font-semibold text-[13px] line-clamp-2 h-10">
                        {comic.title}
                      </div>
                      <div className="text-xs text-slate-700 before:content-['출시일_']">
                        {comic.dates[0].date.slice(0, 10)}
                      </div>
                      <div className="text-xs text-slate-700 before:content-['작가_']">
                        {comic.creators.items[0].name}
                      </div>
                    </div>
                  </div>
                ))
            : "Loading"}
        </div>
      </Slider>
      {/* 이번주 가장 많이 본 신작 TOP 10 */}
      <div className="border-y ">
        <div className="text-black font-bold text-[14px] py-6">
          이번주 가장 많이 본 신작 TOP 10
        </div>
        <Slider
          setState={setNewComicState}
          sliderBtnPos={{ lt: 35, rt: 35 }}
          maxItem={10}
          items={4}
          page={newComicpage}
        >
          <div className="grid grid-cols-4 relative  pb-6  place-items-center">
            {Comics?.data.results
              .slice(newComicpage * 4, (newComicpage + 1) * 4)
              .map((comic) => (
                <div key={comic.id} className="w-[140px] ">
                  <div className=" h-[100px] bg-slate-200 relative">
                    <Image
                      alt="comics"
                      sizes="100px"
                      fill
                      src={`${comic.thumbnail.path}/standard_medium.jpg`}
                    />
                  </div>
                  <div className="mt-3">
                    <div className="text-[13px] font-semibold text-black line-clamp-1">
                      {comic.title}
                    </div>
                    <div className="text-xs text-slate-500">
                      {comic.creators.items[0].name}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </Slider>
      </div>
    </>
  );
}
