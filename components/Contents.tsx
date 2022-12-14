import Advertise from "./contents/Advertise";
import NewsHeadLine from "./contents/NewsHeadLine";
import News from "./contents/News";
import ArticleWrapper from "./contents/ArticleWrapper";
import LoginSection from "./contents/LoginBox";
import TrendShopping from "./contents/TrendShopping";
import useSWR from "swr";

export default function Body() {
  return (
    <div className="min-w-max flex items-center justify-center mt-5 px-8">
      <div className="w-[1133px] flex justify-center space-x-8 ">
        <div className="min-h-screen w-[735px] ">
          <Advertise />
          <NewsHeadLine />
          <News />
          <ArticleWrapper />
        </div>
        <div className="min-h-screen w-[348px] space-y-5 ">
          <LoginSection />
          <div className="h-[50px] w-full border flex text-sm p-4 items-center">
            <div>증시</div>
            <div>코스피</div>
          </div>
          <div className="h-[200px] w-full border">광고</div>
          <TrendShopping />
        </div>
      </div>
    </div>
  );
}
