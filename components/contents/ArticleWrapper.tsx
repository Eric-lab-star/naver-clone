import SliderBtn from "../utils/Btn/SliderBtn";
import { MouseEvent, useState } from "react";
import CategoryBar from "../utils/CategoryBar";
import Economy from "./Articles/Economy";
import Books from "./Articles/Books";
import Living from "./Articles/Living";
import SectionHeader from "../SectionHeader";
import Cars from "./Articles/Cars";
import WebToon from "./Articles/WebToon";
import Fashion from "./Articles/Fashion";
export default function Article() {
  const [category, setCategory] = useState<string>("웹툰");
  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    setCategory(() => target.innerHTML);
  };

  return (
    <div className="mt-9 space-y-3 ">
      <SectionHeader
        title="오늘 읽을만한 글"
        desc="주제별로 분류된 다양한 글 모음"
      />
      <div className="relative">
        <CategoryBar onClick={onClick} category={category} />
        <SliderBtn className="top-[10px]" />
      </div>
      {category === "리빙" ? <Living category={category} /> : null}
      {category === "책방" ? <Books category={category} /> : null}
      {category === "경제" ? <Economy category={category} /> : null}
      {category === "자동차" ? <Cars category={category} /> : null}
      {category === "웹툰" ? <WebToon category={category} /> : null}
      {category === "패션뷰티" ? <Fashion category={category} /> : null}
    </div>
  );
}
