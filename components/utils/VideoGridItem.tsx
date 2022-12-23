import Image from "next/image";
import { IVideo } from "../../FakeDB/VideoDB";

import { IComic } from "../contents/Articles/WebToon";

export default function VideoGridItem({
  videoData,
  comic,
}: {
  videoData?: IVideo;
  comic?: IComic;
}) {
  return (
    <div className="w-[231px] hover:cursor-pointer">
      <div className=" h-[130px] bg-slate-300 relative">
        {videoData?.video}
        {comic ? (
          <Image
            alt="comics"
            fill
            sizes="231px"
            src={`${comic.thumbnail.path}/landscape_medium.jpg`}
          />
        ) : null}
      </div>
      <div className="font-bold text-[12.5px] line-clamp-2 mt-3   ">
        {videoData?.title}
        {comic?.title}
      </div>
      <div className=" text-xs text-slate-500 flex items-center space-x-1">
        {videoData?.profileImg && (
          <div className="w-5 rounded-full bg-slate-600 aspect-square" />
        )}
        <div className="after:content-['_·'] ">
          {videoData?.user}
          {comic?.creators.items[0].name}
        </div>
        <div>
          {videoData?.date}
          {comic?.dates[0].date.slice(0, 10)}
        </div>
      </div>
    </div>
  );
}
