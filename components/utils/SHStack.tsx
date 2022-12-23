import Image from "next/image";

interface Idata {
  [key: string]: string;
}

export default function SHStack({
  key,
  title,
  author,
  category,
  categoryColor,
  className,
  imgSrc,
}: Idata) {
  return (
    <div className={className}>
      <div className="flex space-x-4">
        <div className="w-[100px] h-[100px] bg-slate-200 flex-none relative">
          <Image
            fill
            sizes="100px"
            alt="thumbnail"
            src={imgSrc ? `${imgSrc}` : "/"}
          />
        </div>
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
