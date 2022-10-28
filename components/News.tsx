import { useState } from "react";
import cls from "../utils/cls";
import CalendarDays from "./CalendarDays";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";
import CogSVG from "./Cog";
import Grid from "./Grid";
import ListSVG from "./ListSVG";
import SliderBtn from "./SliderBtn";
import SquareSVG from "./SquareSVG";

export default function News() {
  const [isClicked, setClicked] = useState<boolean>(true);
  return (
    <div>
      {/* 뉴스 버튼*/}
      <div className="flex justify-between items-center py-3">
        <div className="flex items-center space-x-2 text-sm font-bold ">
          <div className="flex items-center hover:cursor-pointer">
            <CalendarDays />
            <div className="ml-1">뉴스스탠드</div>
          </div>
          <ChevronRight className="w-4 text-slate-500" />
          <div className="hover:cursor-pointer">구독한 언론사</div>
          <div className="font-normal hover:cursor-pointer">| 전체 언론사</div>
        </div>
        <div className="flex items-center space-x-2">
          <ListSVG className="text-blue-600 font-bold w-5" />
          <Grid className="w-3 fill-slate-500 hover:fill-slate-700" />
          <CogSVG className=" text-slate-500 w-5" />
        </div>
      </div>
      {/** 뉴스 상자*/}
      <div className="h-[260px] border-slate-200 flex relative ">
        {/** 뉴스 구독 리스트 */}
        <div className="w-[165px] flex-none py-4 bg-slate-100 border border-slate-200 text-sm flex flex-col px-4 space-y-3 overflow-scroll">
          <div
            className={cls(
              "hover:cursor-pointer hover:underline  px-5  ",
              isClicked ? "bg-blue-800 rounded-3xl text-white py-2" : ""
            )}
          >
            MBC
          </div>
          <div className="hover:cursor-pointer hover:underline px-5">SBS</div>
          <div className="hover:cursor-pointer hover:underline px-5">KBS</div>
          <div className="hover:cursor-pointer hover:underline px-5">YTN</div>
          <div className="hover:cursor-pointer hover:underline px-5">
            매일경제
          </div>
          <div className="hover:cursor-pointer hover:underline px-5">
            디지털타임즈
          </div>
          <div className="hover:cursor-pointer hover:underline px-5">
            넥스트데일리
          </div>
          <div className="hover:cursor-pointer hover:underline px-5">
            디지털투데이
          </div>
          <div className="hover:cursor-pointer hover:underline px-5">
            보안뉴스
          </div>
        </div>
        {/** 주요 뉴스 */}
        <div className="border-y  w-[570px] px-6 py-4 border-slate-200 ">
          <div className="text-sm  space-y-3">
            <div className="w-[195px] flex justify-between items-center">
              <span className="font-bold text-sm hover:cursor-pointer">
                SBS
              </span>
              <span className="text-slate-500 ">2022.10.24 18:57 편집</span>
            </div>
            <div className="flex space-x-6">
              <div className="w-[195px] space-y-3 hover:cursor-pointer ">
                <div className="w-[195px] h-[132px] bg-slate-200"></div>
                <div className="font-bold text-[13px] hover:underline">
                  [단독영상] 소속사 대표, 아픔 멘버 밀치고 &quot;연기해? 똑바로
                  안서&quot;
                </div>
              </div>
              <div className="overflow-hidden ">
                <div className="text-[13px] space-y-[0.4em]  ">
                  <div className="truncate hover:cursor-pointer hover:underline">
                    멜론, &apos;인디 대표 페스티벌&apos; 홍대 라이브클럽데이
                    참여 외식 특화 공간 메타버스 트윈 코리아, 3차원 가상 건축물
                    투가 업데이트
                  </div>
                  <div className="truncate hover:cursor-pointer hover:underline">
                    외식 특화 공간 메타버스 트윈 코리아, 3차원 가상 건축물 투가
                    업데이트
                  </div>
                  <div className="truncate hover:cursor-pointer hover:underline">
                    서비스나우-데이터독, 27일 클라우드 운영 혁신 웨비나 개최
                  </div>
                  <div>막 내린 과방위 국감.. 국감장 달군 핵심 이슈는?</div>
                  <div className="truncate hover:cursor-pointer hover:underline">
                    NHN, 기술 컨퍼런스 &apos;포워드&apos; 3년만에 오프라인 개최
                  </div>
                  <div className="truncate hover:cursor-pointer hover:underline">
                    르노코리아 QM6, 경찰청 SUV 차량을 납품.. &quot;현장서 선호도
                    높아&quot;
                  </div>
                </div>
                <div className="text-slate-400 text-xs mt-5">
                  SBS 언론사에서 test 직접 편집한 뉴스입니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <SliderBtn className="top-[114px]" />
      </div>
    </div>
  );
}
