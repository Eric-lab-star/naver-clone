import cls from "../../../utils/cls";
import ChevronLeft from "../../SVG/ChevronLeftSVG";
import ChevronRight from "../../SVG/ChevronRightSVG";

export default function SliderBtn({ className }: { className: string }) {
  return (
    <>
      <div
        id="left"
        className={cls(
          "w-[30px] hover:cursor-pointer absolute -left-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center",
          className
        )}
      >
        <ChevronLeft className="text-slate-700 w-4" />
      </div>
      <div
        id="right"
        className={cls(
          "w-[30px] hover:cursor-pointer absolute  -right-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center",
          className
        )}
      >
        <ChevronRight className="text-slate-700 w-4" />
      </div>
    </>
  );
}
