import { useState } from "react";
import { LivingDB } from "../FakeDB/LivingDB";
import Funding from "./Funding";
import HStack from "./HStack";
import MoreArticles from "./MoreArticles";

export default function Living({ category }: { category: string }) {
  const [page, setPage] = useState<number>(10);

  const onClick = () => {
    setPage((prev) => (prev = prev + 10));
  };
  return (
    <>
      <div className="flex space-y-4 flex-col">
        {LivingDB.slice(0, 10).map((data, index) => {
          return (
            <HStack
              categoryColor="text-amber-800"
              {...data}
              category={category}
              key={data.id}
              className={index === 3 ? "border-b border-slate-200 pb-4" : ""}
            />
          );
        })}
      </div>
      <Funding />
      <div className="flex space-y-4 flex-col">
        {LivingDB.slice(10, page).map((data, index) => {
          return (
            <HStack
              categoryColor="text-amber-800"
              {...data}
              category={category}
              key={data.id}
              className={index === 3 ? "border-b border-slate-200 pb-4" : ""}
            />
          );
        })}
      </div>
      <div onClick={onClick}>
        {page <= LivingDB.length - 1 ? <MoreArticles /> : null}
      </div>
    </>
  );
}
