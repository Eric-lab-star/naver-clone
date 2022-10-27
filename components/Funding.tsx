import ChevronRight from "./ChevronRight";
import SliderBtn from "./SliderBtn";

export default function Funding() {
  return (
    <div className="">
      <div className="mt-5 flex items-center text-sm font-bold">
        <div>오늘 가장 따뜻한 클릭</div>
        <ChevronRight className="text-slate-800" />
      </div>
      <div className="grid grid-cols-3  gap-4 relative ">
        {[1, 2, 3].map((v) => (
          <div key={v} className="text-[13px] space-y-1">
            <div className="bg-slate-300  h-[130px] relative">
              <div className="absolute bg-yellow-600 h-[30px] w-[40px] text-white flex justify-center items-center text-xs">
                펀딩
              </div>
            </div>
            <div className=" font-semibold line-clamp-1">
              자립준비 청년들에게 햇살이 되어 줄 응원템 자립준비
            </div>
            <div className="space-x-1">
              <span className="after:content-['_·']">소이프</span>
              <span className="text-yellow-600">536%</span>
              <span>달성</span>
            </div>
          </div>
        ))}
        <SliderBtn className="top-14" />
      </div>
    </div>
  );
}
