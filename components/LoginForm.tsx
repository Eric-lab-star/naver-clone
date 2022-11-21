import ChevronRight from "./SVG/ChevronRightSVG";
import LockSVG from "./SVG/LockSVG";

export default function LoginForm() {
  return (
    <div className=" h-[130px] bg-slate-100">
      <div className="h-[90px] border-x border-t flex justify-evenly items-center ">
        <div className="w-[60px] h-[60px] bg-slate-200  rounded-full"></div>
        <div className="text-[12px] flex flex-col justify-between text-slate-700 w-[180px] h-[60px]">
          <div className="space-x-1">
            <span className="font-bold border-r-2 border-slate-200 pr-1 mr-1 text-[13px]">
              King님
            </span>
            <span>네이버ID</span>
            <LockSVG />
          </div>
          <div>cyon256@icloud.com</div>
          <div className="space-x-4">
            <span className="space-x-1">
              <span>메일</span>
              <span className="text-green-500 font-bold">39</span>
            </span>
            <span className="space-x-1">
              <span>쪽지</span>
              <span className="text-green-500 font-bold">1</span>
            </span>
            <span className="space-x-1">
              <span>시작하기</span>
              <ChevronRight className=" w-2 inline text-slate-400" />
            </span>
          </div>
        </div>
        <div className="h-[60px]">
          <div className=" text-white bg-slate-300 rounded-full px-2 py-1  text-xs">
            로그아웃
          </div>
        </div>
      </div>
      <div className="h-[40px] grid grid-cols-5 divide-x-[1px] border">
        {["블로그", "포스트", "카페", "메일", "알림"].map((item) => (
          <div
            className="flex justify-center items-center text-sm font-semibold hover:cursor-pointer"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
