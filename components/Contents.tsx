import CalendarDays from "./CalendarDays";
import ChevronLeft from "./ChevronLeft";
import CogSVG from "./Cog";
import ListSVG from "./ListSVG";
import SquareSVG from "./SquareSVG";

export default function Body() {
  return (
    <div className="min-w-max flex items-center justify-center mt-5 px-8">
      <div className="w-[1133px] flex justify-between">
        <div className="min-h-screen w-[735px] ">
          <div className="bg-white h-[134px] mb-4 border-[1px] border-slate-300">
            광고
          </div>
          <div className="bg-slate-100 px-3 flex items-center justify-between border-[1px] border-slate-300">
            <div className=" text-sm h-[50px] flex items-center">
              <div className="flex items-center">
                <div className="font-bold ">연합뉴스</div>
                <ChevronLeft />
              </div>
              <div className="w-[305px]  truncate">
                정기석, "실내 마스크, 지금은 벗을 상황 아니야 3개월은 참아야"
              </div>
            </div>
            <div className="flex font-bold text-sm space-x-2">
              <div className="text-blue-600">뉴스홈</div>
              <div>연예</div>
              <div>스포츠</div>
              <div>경제</div>
            </div>
          </div>
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
          <div className="h-[260px] bg-slate-300"></div>
        </div>
        <div className="min-h-screen w-[348px] bg-blue-300 " />
      </div>
    </div>
  );
}
