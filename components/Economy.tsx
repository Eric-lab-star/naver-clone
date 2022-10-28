import { BookDB } from "../FakeDB/BookDB";
import { VideoDB } from "../FakeDB/VideoDB";
import HStack from "./HStack";
import MoreArticles from "./MoreArticles";
import VideoGrid from "./VideoGrid";

export default function Economy({ category }: { category: string }) {
  return (
    <div className="flex space-y-4 flex-col pb-16">
      {/* 글 소개 */}
      {BookDB.slice(1, 5).map((data) => (
        <HStack
          categoryColor="text-green-500"
          {...data}
          category={category}
          key={data.id}
        />
      ))}
      <div className="grid grid-cols-3 gap-8 relative border-y pb-6 pt-6">
        {VideoDB.slice(1, 4).map((v, i) => (
          <VideoGrid data={v} key={i} />
        ))}
      </div>
      {/* 글 소개 */}
      {BookDB.slice(5, 10).map((data) => (
        <HStack
          categoryColor="text-green-500"
          {...data}
          category={category}
          key={data.id}
        />
      ))}
      <div className="grid grid-cols-3 gap-8 relative border-t pb-6 pt-6">
        {VideoDB.slice(1, 4).map((v, i) => (
          <VideoGrid data={v} key={i} />
        ))}
      </div>
      <MoreArticles />
    </div>
  );
}
