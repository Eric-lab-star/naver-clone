import Advertise from "./Advertise";
import NewsHeadLine from "./NewsHeadLine";
import News from "./News";
import Article from "./Article";
import LoginForm from "./LoginForm";
import TrendShopping from "./TrendShopping";

export default function Body() {
  return (
    <div className="min-w-max flex items-center justify-center mt-5 px-8">
      <div className="w-[1133px] flex justify-center space-x-8 ">
        <div className="min-h-screen w-[735px] ">
          <Advertise />
          <NewsHeadLine />
          <News />
          <Article />
        </div>
        <div className="min-h-screen w-[348px] space-y-5 ">
          <LoginForm />
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
