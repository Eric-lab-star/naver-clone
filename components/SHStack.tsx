import cls from "../utils/cls";

interface Idata {
  id?: number;
  title: string;
  author: string;
  category: string;
  categoryColor: string;
  className?: string;
}

export default function SHStack({
  id,
  title,
  author,
  category,
  categoryColor,
  className,
}: Idata) {
  return (
    <div className={className}>
      <div className="flex space-x-4">
        <div className="w-[100px] h-[100px] bg-slate-200 flex-none"></div>
        <div className="text-sm space-y-1">
          <div className={`${categoryColor} font-semibold text-[12.5px]`}>
            {category}
          </div>
          <div className="hover:underline text-slate-800 font-bold text-[13.5px] break-words line-clamp-2">
            {title}
          </div>
          <div className="text-[12.5px]">{author}</div>
        </div>
      </div>
    </div>
  );
}
