import { IWebtoon } from "../FakeDB/WebToonDB";

export default function WebToonTrendingItem({ data }: { data: IWebtoon }) {
  return (
    <div className="w-[350px] h-[70px] flex items-center hover:cursor-pointer">
      <div className="w-[50px] flex flex-col items-center justify-center">
        <div className="text-sm font-bold">{data.ranking}</div>
        <div>^</div>
      </div>
      <div className="w-[50px] aspect-square bg-slate-200"></div>
      <div className="text-[12.5px] ml-5">
        <div className="hover:underline font-bold text-slate-800">
          {data.title}
        </div>
        <div className="text-slate-500 line-clamp-1">
          <span>{data.author}</span>
          <span>110화</span>
        </div>
      </div>
    </div>
  );
}
