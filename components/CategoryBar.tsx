import { MouseEvent } from "react";
import { CategoryDB } from "../FakeDB/CategoryDB";
export default function CategoryBar({
  category,
  onClick,
}: {
  category: string;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}) {
  return (
    <div className=" h-[47px]  border grid grid-cols-8 divide-x-[1px] divide-slate-300">
      {CategoryDB.map((data) => (
        <div
          onClick={(event) => onClick(event)}
          key={data.name}
          style={{
            backgroundColor: category === data.name ? data.color : undefined,
            color: category === data.name ? "white" : undefined,
          }}
          onMouseOver={(event) => {
            if (category === data.name) return;
            event.currentTarget.style.color = `${data.color}`;
          }}
          onMouseOut={(event) => {
            if (category === data.name) return;
            event.currentTarget.style.color = "";
          }}
          className="flex items-center justify-center font-bold text-sm  hover:cursor-pointer"
        >
          {data.name}
        </div>
      ))}
    </div>
  );
}
