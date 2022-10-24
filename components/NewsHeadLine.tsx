import ChevronLeft from "./ChevronLeft";

export default function NewsHeadLine() {
  return (
    <div className="bg-slate-100 px-3 flex items-center justify-between border-[1px] border-slate-300">
      <div className=" text-sm h-[50px] flex items-center">
        <div className="flex items-center">
          <div className="font-bold ">연합뉴스</div>
          <ChevronLeft />
        </div>
        <div className="w-[305px]  truncate">
          정기석, &quot;실내 마스크, 지금은 벗을 상황 아니야 3개월은
          참아야&quot;
        </div>
      </div>
      <div className="flex font-bold text-sm space-x-2">
        <div className="text-blue-600">뉴스홈</div>
        <div>연예</div>
        <div>스포츠</div>
        <div>경제</div>
      </div>
    </div>
  );
}
