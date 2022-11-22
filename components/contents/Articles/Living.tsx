import { useState } from "react";
import { LivingDB } from "../../../FakeDB/LivingDB";
import Funding from "../../Funding";
import HStack from "../../utils/HStack";
import MoreArticles from "../../utils/Btn/MoreArticlesBtn";

export default function Living({ category }: { category: string }) {
  const [page, setPage] = useState<number[]>([0]);

  const onClick = () => {
    setPage((prev) => {
      return [...page, page[page.length - 1] + 1];
    });
  };

  return (
    <>
      {page.map((pageIndex) => (
        <div key={pageIndex}>
          <div className="flex space-y-4 flex-col">
            {LivingDB.slice(pageIndex * 10, pageIndex * 10 + 10).map(
              (data, index) => {
                return (
                  <HStack
                    categoryColor="text-amber-800"
                    {...data}
                    category={category}
                    key={data.id}
                    className={
                      index === 3 ? "border-b border-slate-200 pb-4" : ""
                    }
                  />
                );
              }
            )}
          </div>
          {pageIndex === 0 ? (
            <Funding isFirst={page.length === 1 ? true : false} />
          ) : null}
        </div>
      ))}
      <div onClick={onClick}>
        {page[page.length - 1] * 10 + 10 <= LivingDB.length - 1 ? (
          <MoreArticles />
        ) : null}
      </div>
    </>
  );
}
