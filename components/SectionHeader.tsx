import CogSVG from "./Cog";

interface IHeader {
  title: string;
  desc?: string;
}

export default function SectionHeader({ title, desc }: IHeader) {
  return (
    <div className=" flex justify-between items-center text-[12px] text-slate-600">
      <div className="flex items-center space-x-2">
        <div className="font-bold text-slate-900 text-sm">{title}</div>
        <div>{desc}</div>
      </div>
      <div className="flex items-center space-x-2">
        <div>관심주제 설정 사용중</div>
        <div className=" flex items-center space-x-1 hover:cursor-pointer hover:underline hover:text-slate-800">
          <CogSVG className="w-[15.5px]" />
          <div>관심주제 설정</div>
        </div>
      </div>
    </div>
  );
}
