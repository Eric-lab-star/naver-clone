import Image from "next/image";
import { IComic } from "../contents/Articles/WebToon";

export default function WebToonTrendingItem({ data }: { data: IComic }) {
  return (
    <div className="w-[350px] h-[70px] flex items-center hover:cursor-pointer">
      <div className="w-[50px] aspect-square bg-slate-200 relative">
        {data.thumbnail.path ? (
          <Image
            alt="comic thumbnail"
            src={`${data.thumbnail.path}/standard_small.jpg`}
            fill
            sizes="50px"
          />
        ) : null}
      </div>
      <div className="text-[12.5px] ml-5">
        <div className="hover:underline font-bold text-slate-800">
          {data.title}
        </div>
        <div className="text-slate-500 line-clamp-1">
          <span>{data.creators.items[0].name}</span>
        </div>
      </div>
    </div>
  );
}
