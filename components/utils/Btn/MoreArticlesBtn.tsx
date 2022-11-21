export default function MoreArticles() {
  return (
    <div className=" pt-5 pb-24 relative flex items-center">
      <div className="border-t  w-full"></div>
      <div className="w-10 aspect-square rounded-full shadow-md flex items-center justify-center hover:cursor-pointer text-slate-500 absolute right-[350px] bg-white ">
        +
        <div className="absolute text-xs top-12 min-w-max text-slate-800">
          새로운 글 더보기
        </div>
      </div>
    </div>
  );
}
