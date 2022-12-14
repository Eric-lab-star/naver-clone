interface Idata {
  id: number;
  title: string;
  desc: string;
  author: string;
  date: string;
  category: string;
  categoryColor: string;
  className?: string;
}

export default function HStack({
  id,
  title,
  desc,
  author,
  date,
  category,
  categoryColor,
  className,
}: Idata) {
  return (
    <div className={className}>
      <div className="flex space-x-4">
        <div className="w-[170px] h-[114px] bg-slate-200 flex-none"></div>
        <div className="text-sm">
          <div
            style={{ color: `${categoryColor}` }}
            className={`text-[12.5px] font-semibold`}
          >
            {category}
          </div>
          <div className="hover:underline font-bold text-sm">{title}</div>
          <div className=" w-[521px] text-[12.5px] h-10 line-clamp-2">
            {desc}
          </div>
          <div className="text-[12.5px]">
            <span>{author}</span>
            <span className="text-slate-500 ml-2">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
