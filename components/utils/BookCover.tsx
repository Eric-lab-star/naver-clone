import StarSVG from "../SVG/StarSVG";

interface IBookCoverProp {
  title: string;
  author: string;
  company?: string;
  rating: number;
}

export default function BookCover({
  title,
  author,
  company,
  rating,
}: IBookCoverProp) {
  return (
    <div className="w-[120px]">
      <div className=" h-[180px] bg-slate-300"></div>
      <div>
        <div className="font-bold my-3 text-[12.5px]">{title}</div>
        <div className=" text-xs text-slate-500">
          <div className="space-x-1 line-clamp-1">
            <span>저자</span>
            <span>{author}</span>
          </div>
          <div className="space-x-1">
            <span>출판</span>
            <span>{company}</span>
          </div>
          {rating ? (
            <div className="flex space-x-1 items-center">
              <span>평점</span>
              <StarSVG />
              <span className="text-red-500">{rating}</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
