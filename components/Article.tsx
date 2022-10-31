import SliderBtn from "./SliderBtn";
import { MouseEvent, useState } from "react";
import CategoryBar from "./CategoryBar";
import Economy from "./Economy";
import Books from "./Books";
import Living from "./Living";
import SectionHeader from "./SectionHeader";
import Cars from "./Cars";
export default function Article() {
  const [category, setCategory] = useState<string>("엔터");
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
    </div>
  );
}
