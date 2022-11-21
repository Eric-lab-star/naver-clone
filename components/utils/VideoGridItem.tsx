import { IVideo } from "../../FakeDB/VideoDB";
import { IWebtoon } from "../../FakeDB/WebToonDB";

export default function VideoGridItem({
  videoData,
  webToonData,
}: {
  videoData?: IVideo;
  webToonData?: IWebtoon;
}) {
  return (
    <div className="w-[231px] hover:cursor-pointer">
      <div className=" h-[130px] bg-slate-300">
        {videoData?.video}
        {webToonData?.img}
      </div>
      <div className="font-bold text-[12.5px] line-clamp-2 mt-3   ">
        {videoData?.title}
        {webToonData?.title}
      </div>
      <div className=" text-xs text-slate-500 flex items-center space-x-1">
        {videoData?.profileImg && (
          <div className="w-5 rounded-full bg-slate-600 aspect-square" />
        )}
        <div className="after:content-['_·'] ">
          {videoData?.user}
          {webToonData?.author}
        </div>
        <div>
          {videoData?.date}
          {webToonData?.uploadDate}
        </div>
      </div>
    </div>
  );
}
