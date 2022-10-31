import { IVideo } from "../FakeDB/VideoDB";

export default function VideoGridItem({ data }: { data: IVideo }) {
  return (
    <div className="w-[231px] hover:cursor-pointer">
      <div className=" h-[130px] bg-slate-300">{data.video}</div>
      <div className="font-bold text-[12.5px] line-clamp-2 mt-3   ">
        {data.title}
      </div>
      <div className=" text-xs text-slate-500 flex items-center space-x-1">
        <div className="w-5 rounded-full bg-slate-600 aspect-square" />
        <div className="after:content-['_·'] ">{data.user}</div>
        <div>{data.date}</div>
      </div>
    </div>
  );
}
