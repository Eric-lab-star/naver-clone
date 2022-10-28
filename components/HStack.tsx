import cls from "../utils/cls";

interface Idata {
  id: number;
  title: string;
  desc: string;
  author: string;
  date: string;
  category: string;
}

export default function HStack({
  id,
  title,
  desc,
  author,
  date,
  category,
}: Idata) {
  return (
    <div className={cls("flex space-x-4")}>
      <div className="w-[170px] h-[114px] bg-slate-200 flex-none"></div>
      <div className="text-sm">
        <div className="text-amber-700 text-[12.5px] ">{category}</div>
        <div className="font-bold text-sm">{title}</div>
        <div className="w-[521px] text-[12.5px] h-10 line-clamp-2">{desc}</div>
        <div className="text-[12.5px]">
          <span>{author}</span>
          <span className="text-slate-500 ml-2">{date}</span>
        </div>
      </div>
    </div>
  );
}
