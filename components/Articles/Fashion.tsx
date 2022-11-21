import { useState } from "react";
import { BookDB } from "../../FakeDB/BookDB";
import { VideoDB } from "../../FakeDB/VideoDB";
import HStack from "../utils/HStack";
import MoreArticles from "../utils/Btn/MoreArticlesBtn";
import VideoGridItem from "../utils/VideoGridItem";

export default function Fashion({ category }: { category: string }) {
  const [{ pageIndex, page }, setPageIndex] = useState<{
    pageIndex: number;
    page: number[];
  }>({ pageIndex: 0, page: [0] });

  const onClick = () => {
    setPageIndex((prev) => {
      return {
        pageIndex: prev.pageIndex + 1,
        page: [...page, prev.pageIndex + 1],
      };
    });
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-[21px]">
        <div className="w-[360px] space-y-1">
          <div className="bg-slate-100 h-[180px] mb-4"></div>
          <div className="text-xs text-purple-700 font-bold">
            뷰티위크 오늘 단 하루만
          </div>
          <div className="text-[13px] font-bold">
            글린트 브랜드 데이, N포인트 10% 추립
          </div>
          <div className="text-[12px]">
            내츄럴 글로우의 고급스러운 쉬머광 하이라이터 + 브러쉬
          </div>
          <div className="text-[12px]">
            어디서나 빛나는 글로우 립밤 하나사면 하나더 증정
          </div>
          <div className="text-xs">글린트</div>
        </div>
        <div className="w-[360px] space-y-1">
          <div className="bg-slate-100 h-[180px] mb-4"></div>
          <div className="text-xs text-purple-700 font-bold">
            뷰티 레드 위크 19% off
          </div>
          <div className="text-[13px] font-bold">
            VLD 커버스테인 큐션 한정판 리필 기획 출시
          </div>
          <div className="text-[12px]">
            구름 처럼 얇고 촘촘하게 밀착되는 고화질 퍼펙팅 베이스
          </div>
          <div className="text-[12px]">
            덧발라도 뭉침 없이 물들듯 차곡차곡 쌓이는 메이크업
          </div>
          <div className="text-xs">VDL</div>
        </div>
      </div>
      {page.map((v, i) => (
        <div key={i} className="flex space-y-4 flex-col">
          {BookDB.slice(v * 8, v * 8 + 4).map((data) => (
            <HStack
              className="hover:cursor-pointer"
              categoryColor="text-purple-700"
              {...data}
              category={category}
              key={data.id}
            />
          ))}
          <div className="grid grid-cols-3 gap-8 relative border-y pb-6 pt-6">
            {VideoDB.slice(v * 6, v * 6 + 3).map((video, videoIndex) => (
              <VideoGridItem videoData={video} key={videoIndex} />
            ))}
          </div>
          {BookDB.slice(v * 8 + 4, v * 8 + 8).map((data) => (
            <HStack
              className="hover:cursor-pointer"
              categoryColor="text-purple-700"
              {...data}
              category={category}
              key={data.id}
            />
          ))}
          <div className="grid grid-cols-3 gap-8 relative border-t pb-6 pt-6">
            {VideoDB.slice(v * 6 + 3, v * 6 + 6).map((video, videoIndex) => (
              <VideoGridItem videoData={video} key={videoIndex} />
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
