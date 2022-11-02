import { useState } from "react";
import { BookDB } from "../FakeDB/BookDB";
import { VideoDB } from "../FakeDB/VideoDB";
import cls from "../utils/cls";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";
import HStack from "./HStack";
import MoreArticles from "./MoreArticles";
import SHStack from "./SHStack";
import VideoGridItem from "./VideoGridItem";

export default function Cars({ category }: { category: string }) {
  const [{ pageIndex, page }, setPageIndex] = useState<{
    pageIndex: number;
    page: number[];
  }>({ pageIndex: 0, page: [0] });

  const [sliderPage, setSliderPage] = useState<number>(1);

  const onClick = () => {
    setPageIndex((prev) => {
      return {
        pageIndex: prev.pageIndex + 1,
        page: [...page, prev.pageIndex + 1],
      };
    });
  };

  const onSliderBtnClick = (direction: number) => {
    if (direction === -1 && sliderPage === 0) {
      return;
    }
    if (direction === 1 && (sliderPage + 1) * 4 >= VideoDB.length - 1) {
      return;
    }
    setSliderPage((prev) => (prev = prev + direction));
  };
  return (
    <>
      <div className=" h-[340px] w-[750px] grid grid-cols-2 gap-6">
        <div className="w-[366px] space-y-2">
          <div className=" bg-slate-100 border h-[180px]"></div>
          <div className="text-[12.5px] space-y-1">
            <div className="text-blue-500  font-bold">
              네이버 마이카 오너 평가
            </div>
            <div className="text-slate-800 font-bold ">
              &quot;내차는 내가 평가한다!&quot;
            </div>
            <div>오너 평가 하면 ! 네이버 페이포인트 500원을 적립</div>
            <div>네이버 MY CAR</div>
          </div>
        </div>
        <div className="w-[335px] h-[325px] grid grid-rows-3 gap-3">
          {[0, 1, 2].map((v) => (
            <SHStack
              key={v}
              title="강력 그리고 화끈, 랜드로버 100 P400X"
              author="무브브로"
              category="자동차 소식"
              categoryColor="text-blue-500"
              className="hover:cursor-pointer"
            />
          ))}
        </div>
      </div>
      {page.map((v, index) => (
        <div key={index} className="flex space-y-4 flex-col">
          {BookDB.slice(v * 5, v * 5 + 5).map((data) => (
            <HStack
              categoryColor="text-blue-500"
              {...data}
              category={category}
              key={data.id}
              className="hover:cursor-pointer"
            />
          ))}
          {/* 슬라이드 */}
          {index === 0 ? (
            <div className="border-t ">
              <div className="text-black font-bold text-[14px] py-6">
                주목할만한 신차
              </div>
              <div className="relative" key={sliderPage}>
                <div className="grid grid-cols-4 relative  pb-6  place-items-center">
                  {VideoDB.slice(sliderPage * 4, (sliderPage + 1) * 4).map(
                    (video, videoIndex) => (
                      <div key={videoIndex} className="w-[140px] ">
                        <div className=" h-[100px] bg-slate-200"></div>
                        <div className="mt-3">
                          <div className="text-[13px] font-semibold text-black">
                            {video.title}
                          </div>
                          <div className="text-xs text-slate-500">포드</div>
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
          ) : null}

          <div
            className={cls(
              "grid grid-cols-3 gap-8 relative  pb-6 pt-6",
              index === page.length - 1 ? "border-t" : "border-y"
            )}
          >
            {VideoDB.slice(v * 3, v * 3 + 3).map((video, videoIndex) => (
              <VideoGridItem videoData={video} key={videoIndex} />
            ))}
          </div>
        </div>
      ))}
      <div onClick={onClick}>
        {(pageIndex + 1) * 5 <= BookDB.length &&
        (pageIndex + 1) * 3 <= VideoDB.length ? (
          <MoreArticles />
        ) : null}
      </div>
    </>
  );
}
