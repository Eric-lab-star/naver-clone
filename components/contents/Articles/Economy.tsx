import { useState } from "react";
import { BookDB } from "../../../FakeDB/BookDB";
import { VideoDB } from "../../../FakeDB/VideoDB";
import HStack from "../../utils/HStack";
import MoreArticles from "../../utils/Btn/MoreArticlesBtn";
import VideoGridItem from "../../utils/VideoGridItem";
import { ICategory } from "../../../types/categoryTypes";

export default function Economy({ name, color }: ICategory) {
  const [{ pageIndex, page }, setPageIndex] = useState<{
    pageIndex: number;
    page: number[];
  }>({ pageIndex: 0, page: [0] });

  const onClick = () => {
    setPageIndex((prev) => {
      return {
        pageIndex: prev.pageIndex + 1,
        page: [...page, prev.pageIndex + 1],
      };
    });
  };

  return (
    <>
      {page.map((v, i) => (
        <div key={i} className="flex space-y-4 flex-col">
          {BookDB.slice(v * 8, v * 8 + 4).map((data) => (
            <HStack
              className="hover:cursor-pointer"
              categoryColor={color}
              {...data}
              category={name}
              key={data.id}
            />
          ))}
          <div className="grid grid-cols-3 gap-8 relative border-y pb-6 pt-6">
            {VideoDB.slice(v * 6, v * 6 + 3).map((video, videoIndex) => (
              <VideoGridItem videoData={video} key={videoIndex} />
            ))}
          </div>
          {BookDB.slice(v * 8 + 4, v * 8 + 8).map((data) => (
            <HStack
              className="hover:cursor-pointer"
              categoryColor={color}
              {...data}
              category={name}
              key={data.id}
            />
          ))}
          <div className="grid grid-cols-3 gap-8 relative border-t pb-6 pt-6">
            {VideoDB.slice(v * 6 + 3, v * 6 + 6).map((video, videoIndex) => (
              <VideoGridItem videoData={video} key={videoIndex} />
            ))}
          </div>
        </div>
      ))}
      <div onClick={onClick}>
        {pageIndex * 8 + 8 <= BookDB.length &&
        pageIndex * 6 + 6 <= VideoDB.length ? (
          <MoreArticles />
        ) : null}
      </div>
    </>
  );
}
