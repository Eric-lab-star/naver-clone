import cls from "../utils/cls";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";

export default function SliderBtn({ top }: { top: number }) {
  return (
    <>
      <div
        className={cls(
          "w-[30px] absolute -left-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center",
          `top-[${top}px]`
        )}
      >
        <ChevronLeft />
      </div>
      <div
        className={cls(
          "w-[30px] absolute  -right-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center",
          `top-[${top}px]`
        )}
      >
        <ChevronRight />
      </div>
    </>
  );
}
