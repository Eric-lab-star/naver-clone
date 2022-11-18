import CalendarDays from "./CalendarDays";
import ChevronRight from "./ChevronRight";
import CogSVG from "./Cog";
import Grid from "./Grid";
import ListSVG from "./ListSVG";

export default function NewsBtn() {
  return (
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
  );
}
