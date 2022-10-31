import Advertise from "./Advertise";
import NewsHeadLine from "./NewsHeadLine";
import News from "./News";
import Article from "./Article";

export default function Body() {
  return (
    <div className="min-w-max flex items-center justify-center mt-5 px-8">
      <div className="w-[1133px] flex justify-between">
        <div className="min-h-screen w-[735px] ">
          <Advertise />
          <NewsHeadLine />
          <News />
          <Article />
        </div>
        <div className="min-h-screen w-[348px] bg-blue-300 " />
      </div>
    </div>
  );
}
