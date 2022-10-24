import Advertise from "./Advertise";
import CalendarDays from "./CalendarDays";
import ChevronLeft from "./ChevronLeft";
import CogSVG from "./Cog";
import ListSVG from "./ListSVG";
import NewsHeadLine from "./NewsHeadLine";
import SquareSVG from "./SquareSVG";

export default function Body() {
  return (
    <div className="min-w-max flex items-center justify-center mt-5 px-8">
      <div className="w-[1133px] flex justify-between">
        <div className="min-h-screen w-[735px] ">
          <Advertise />
          <NewsHeadLine />
          <div>
            <div className="flex justify-between items-center py-3">
              <div className="flex items-center space-x-2 text-sm font-bold ">
                <div className="flex items-center hover:cursor-pointer">
                  <CalendarDays />
                  <div className="ml-1">뉴스스탠드</div>
                </div>
                <ChevronLeft />
                <div className="hover:cursor-pointer">구독한 언론사</div>
                <div className="font-normal hover:cursor-pointer">
                  | 전체 언론사
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <ListSVG className="text-blue-600 font-bold" />
                <SquareSVG className=" text-slate-500" />
                <CogSVG className=" text-slate-500" />
              </div>
            </div>
            <div className=" h-[260px] border-slate-200 flex">
              <div className="w-[165px] bg-slate-100 border-[1px] border-slate-200 text-sm flex flex-col py-2 px-4 space-y-3 overflow-scroll">
                <div>MBC</div>
                <div>SBS</div>
                <div>KBS</div>
                <div>YTN</div>
                <div>매일경제</div>
                <div>디지털타임즈</div>
                <div>넥스트데일리</div>
                <div>디지털투데이</div>
                <div>보안뉴스</div>
              </div>
              <div className="border-y-[1px] w-full border-slate-200 ">
                <div>
                  <div>SBS</div>
                  <div>2022.10.24 18:57</div>
                </div>
                <div>
                  <div className="w-[195px]">
                    <div className="w-[195px] h-[132px] bg-slate-200"></div>
                    <div>
                      [단독영상] 소속사 대표, 아픔 멘버 밀치고 &quot;연기해?
                      똑바로 안서&quot;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-screen w-[348px] bg-blue-300 " />
      </div>
    </div>
  );
}
