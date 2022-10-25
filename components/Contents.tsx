import Advertise from "./Advertise";
import NewsHeadLine from "./NewsHeadLine";
import News from "./News";
import CogSVG from "./Cog";
import SliderBtn from "./SliderBtn";
export default function Body() {
  return (
    <div className="min-w-max flex items-center justify-center mt-5 px-8">
      <div className="w-[1133px] flex justify-between">
        <div className="min-h-screen w-[735px] ">
          <Advertise />
          <NewsHeadLine />
          <News />
          <div className="mt-9 space-y-3 ">
            {/* 글 헤더 */}
            <div className=" flex justify-between items-center text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <div className="font-bold text-sm">오늘 읽을만한 글</div>
                <div>주제별로 분류된 다양한 글 모음</div>
              </div>
              <div className="flex items-center space-x-2">
                <div>관심주제 설정 사용중</div>
                <div className=" flex items-center space-x-1 hover:cursor-pointer hover:underline">
                  <CogSVG className="w-4" />
                  <div>관심주제 설정</div>
                </div>
              </div>
            </div>
            {/* 분류 */}
            <div className="relative">
              <div className=" h-[47px]  border grid grid-cols-8 divide-x-[1px] divide-slate-300">
                <div className=" flex items-center justify-center font-bold text-sm hover:text-rose-400 hover:cursor-pointer">
                  엔터
                </div>
                <div className=" flex items-center justify-center font-bold text-sm hover:text-blue-600 hover:cursor-pointer">
                  스포츠
                </div>
                <div className=" flex items-center justify-center font-bold text-sm hover:text-green-600 hover:cursor-pointer">
                  웹툰
                </div>
                <div className=" flex items-center justify-center font-bold text-sm hover:text-blue-600 hover:cursor-pointer">
                  자동차
                </div>
                <div className=" flex items-center justify-center font-bold text-sm hover:text-green-600 hover:cursor-pointer">
                  경제
                </div>
                <div className=" flex items-center justify-center font-bold text-sm hover:text-green-600 hover:cursor-pointer">
                  책방
                </div>
                <div className=" flex items-center justify-center font-bold text-sm hover:text-amber-700 hover:cursor-pointer">
                  리빙
                </div>
                <div className=" flex items-center justify-center font-bold text-sm hover:text-purple-600 hover:cursor-pointer">
                  패션뷰티
                </div>
              </div>
              <SliderBtn top={5} />
            </div>
            {/* 내용물 */}
            <div>
              <div className="flex">
                <div className="w-[170px] h-[114px] bg-slate-200 flex-none"></div>
                <div className="text-sm space-y-1">
                  <div className="text-amber-800 ">리빙</div>
                  <div className="font-bold text-sm">
                    드레스룸, 파우더룸 꾸미기
                  </div>
                  <div className="w-[521px] h-10 bg-slate-300 overflow-hidden blog-content">
                    집꾸미기 안년하세요! 희희희네 입니다. :) 오랜만에 희희희
                    업로드! 오늘은 저희집 공간중에 부부 침실공간! 그리고
                    드레스룸/ 파우더룸을 함께 소개해 보려해요! 안방에 드레스룸 /
                    파우더룸/ 화장실이 너무 예쁘네요
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-screen w-[348px] bg-blue-300 " />
      </div>
    </div>
  );
}
