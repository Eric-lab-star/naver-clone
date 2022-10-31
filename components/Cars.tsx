import { useState } from "react";
import { BookDB } from "../FakeDB/BookDB";
import { VideoDB } from "../FakeDB/VideoDB";
import cls from "../utils/cls";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";
import HStack from "./HStack";
import MoreArticles from "./MoreArticles";
import SectionHeader from "./SectionHeader";
import VideoGridItem from "./VideoGridItem";

export default function Cars({ category }: { category: string }) {
  const [{ pageIndex, page }, setPageIndex] = useState<{
    pageIndex: number;
    page: number[];
  }>({ pageIndex: 0, page: [0] });

  const [sliderPage, setSliderPage] = useState(0);

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
      <div className="bg-slate-100 h-[340px] w-[750px]"></div>
      {page.map((v, i) => (
        <div key={i} className="flex space-y-4 flex-col">
          {BookDB.slice(v * 5, v * 5 + 5).map((data) => (
            <HStack
              categoryColor="text-green-500"
              {...data}
              category={category}
              key={data.id}
            />
          ))}
          <div className="border-y ">
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
          {BookDB.slice(v * 5 + 5, v * 5 + 10).map((data) => (
            <HStack
              categoryColor="text-green-500"
              {...data}
              category={category}
              key={data.id}
            />
          ))}
          <div className="grid grid-cols-3 gap-8 relative border-t pb-6 pt-6">
            {VideoDB.slice(v * 6 + 3, v * 6 + 6).map((video, videoIndex) => (
              <VideoGridItem data={video} key={videoIndex} />
            ))}
          </div>
        </div>
      ))}
      <div onClick={onClick}>
        {pageIndex * 8 + 8 <= BookDB.length &&
        pageIndex * 6 + 6 <= VideoDB.length ? (
          <MoreArticles />
        ) : null}
      </div>
    </>
  );
}
