import { MouseEvent, useMemo, useState } from "react";
import CategoryBar from "../utils/CategoryBar";
import SectionHeader from "../SectionHeader";
import ChevronLeft from "../SVG/ChevronLeftSVG";
import ChevronRight from "../SVG/ChevronRightSVG";
import { CategoryDB } from "../../FakeDB/CategoryDB";

import dynamic from "next/dynamic";

const WebToon = dynamic(() => import("./Articles/WebToon"));
const Test = dynamic(
  () =>
    new Promise<any>((resolve) =>
      setTimeout(
        () =>
          resolve(function () {
            return <div>test</div>;
          }),
        3000
      )
    ),
  { ssr: false, loading: () => <div>loading big component</div> }
);
const Cars = dynamic(() => import("./Articles/Cars"));
const Fashion = dynamic(() => import("./Articles/Fashion"));
const Living = dynamic(() => import("./Articles/Living"));
const Books = dynamic(() => import("./Articles/Books"));
const Economy = dynamic(() => import("./Articles/Economy"));
export default function ArticleWrapper() {
  const [page, setPage] = useState(0);
  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    const text = event.currentTarget.innerHTML;
    const index = CategoryDB.findIndex((v, i, a) => {
      return a[i].name === text;
    });
    setPage(index);
  };
  const { name, color } = CategoryDB[page];
  const handlePage = (direction: number) => {
    if (direction === -1 && page === 0) {
      return;
    }
    if (direction === 1 && page === CategoryDB.length - 1) {
      return;
    }
    setPage((prev) => (prev = prev + direction));
  };
  return (
    <div className="mt-9 space-y-3 ">
      <Test />
      <SectionHeader
        title="오늘 읽을만한 글"
        desc="주제별로 분류된 다양한 글 모음"
      />

      {/* sliderbtn */}
      <div className="relative">
        <CategoryBar onClick={onClick} category={name} />
        <div
          onClick={() => handlePage(-1)}
          id="left"
          className="top-[10px] w-[30px] hover:cursor-pointer absolute -left-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center"
        >
          <ChevronLeft className="text-slate-700 w-4" />
        </div>
        <div
          onClick={() => handlePage(1)}
          id="right"
          className="top-[10px] w-[30px] hover:cursor-pointer absolute  -right-5 aspect-square rounded-full shadow-slate-300 shadow-md bg-white flex justify-center items-center"
        >
          <ChevronRight className="text-slate-700 w-4" />
        </div>
      </div>
      {/* articles */}
      {name === "리빙" ? <Living name={name} color={color} /> : null}
      {name === "책방" ? <Books name={name} color={color} /> : null}
      {name === "경제" ? <Economy name={name} color={color} /> : null}
      {name === "자동차" ? <Cars name={name} color={color} /> : null}
      {name === "웹툰" ? <WebToon name={name} color={color} /> : null}
      {name === "패션뷰티" ? <Fashion name={name} color={color} /> : null}
    </div>
  );
}
