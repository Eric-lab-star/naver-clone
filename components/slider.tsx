import { SetterOrUpdater } from "recoil";
import ChevronLeft from "./SVG/ChevronLeftSVG";
import ChevronRight from "./SVG/ChevronRightSVG";
import cls from "../utils/cls";
const Slider: React.FC<{
  children: React.ReactElement;
  setState: SetterOrUpdater<number>;
  maxItem: number;
  sliderBtnPos?: { rt: number; lt: number };
  page: number;
  items: number;
}> = ({
  items,
  page,
  children,
  setState,
  maxItem,
  sliderBtnPos = { rt: 70, lt: 70 },
}) => {
  const setSliderState = (direction: number) => {
    if (page === 0 && direction === -1) {
      return;
    }
    if ((page + 1) * items >= maxItem && direction === 1) {
      return;
    }
    setState((prev) => (prev = prev + direction));
  };
  if (!children) {
    throw Error("children not provided");
  }
  if (!setState) {
    throw Error("SetState not provided");
  }

  return (
    <div className="relative w-full ">
      {children}
      {children ? (
        <>
          <div
            onClick={() => setSliderState(-1)}
            className={cls(
              `w-[30px] hover:cursor-pointer absolute -left-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center`,
              page === 0 ? "hidden" : ""
            )}
            style={{ top: sliderBtnPos.rt }}
          >
            <ChevronLeft className="text-slate-700 w-4" />
          </div>
          <div
            style={{ top: sliderBtnPos.lt }}
            onClick={() => setSliderState(1)}
            className={cls(
              `top-[70px] w-[30px] hover:cursor-pointer absolute  -right-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center`,
              (page + 1) * items >= maxItem ? "hidden" : ""
            )}
          >
            <ChevronRight className="text-slate-700 w-4" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Slider;
