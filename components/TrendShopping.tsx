import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";
import PlusSVG from "./Plus";

export default function TrendShopping() {
  return (
    <div>
      <div className="flex justify-between text-sm font-semibold">
        <span className="space-x-1">
          <span className="px-1 py-[1px] font-bold text-xs text-white bg-green-500 ">
            N
          </span>
          <span className="hover:cursor-pointer hover:underline">
            트렌드 쇼핑
          </span>
          <ChevronRight className="inline w-3" />
        </span>
        <span className="space-x-3">
          <span>상품</span>
          <span>쇼핑몰</span>
          <span>MEN</span>
        </span>
      </div>
      <div className="h-[70px] text-[13px] p-3 flex flex-col justify-center bg-slate-100 mt-3 border">
        <div className="space-x-[0.7rem] flex items-center">
          <span className="hover:cursor-pointer hover:underline">쿠팡</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 inline-block"></span>
          <span className="hover:cursor-pointer hover:underline">옥션</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 inline-block"></span>
          <span className="hover:cursor-pointer hover:underline">11번가</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 inline-block"></span>
          <span className="hover:cursor-pointer hover:underline">G마켓</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 inline-block"></span>
          <span className="hover:cursor-pointer hover:underline">SSG닷컴</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 inline-block"></span>
          <span className="hover:cursor-pointer hover:underline">티몬</span>
        </div>
        <div className="space-x-2 flex items-center">
          <span className="hover:cursor-pointer hover:underline">올리브영</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 inline-block"></span>
          <span className="hover:cursor-pointer hover:underline">위메프</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 inline-block"></span>
          <span className="hover:cursor-pointer hover:underline">GS샵</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 inline-block"></span>
          <span className="hover:cursor-pointer hover:underline">
            CJ온스타일
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300 inline-block"></span>
          <span className="hover:cursor-pointer hover:underline">
            패션플러스
          </span>
        </div>
      </div>
      <div className="border-x border-b flex flex-col justify-center items-center">
        <div className="flex items-center self-end mr-2 mt-3">
          <div className="text-[12px] text-slate-600 flex mr-2 space-x-1">
            <div className="font-bold">5</div>
            <div>/</div>
            <div>6</div>
          </div>
          <div className="border p-2">
            <ChevronLeft className="w-3" />
          </div>
          <div className="border-y border-r p-2">
            <ChevronRight className="w-3" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1 pt-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => (
            <div
              className="text-xs  mb-5 w-[108px] flex flex-col items-center justify-center"
              key={v}
            >
              <div className="h-[146px] w-full bg-slate-100"></div>
              <div className="text-black font-bold pt-2">
                대학생 필수 노트북
              </div>
              <div>무려20%쿠폰받아!</div>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-5 mb-5 mr-2 mt-3">
          <div className="border p-2">
            <ChevronLeft className="w-3" />
          </div>
          <div className="text-[12px] text-slate-600 flex mr-2 space-x-1">
            <div className="font-bold">5</div>
            <div>/</div>
            <div>6</div>
          </div>
          <div className="border p-2">
            <ChevronRight className="w-3" />
          </div>
        </div>
        <div className="bg-slate-200 h-[0.5px] w-11/12"></div>
        <div className=" text-sm self-start flex justify-between w-full my-3 px-2">
          <div className="flex items-center space-x-1 font-bold">
            <div>PLAY</div>
            <div className="w-[2px] aspect-square bg-black rounded-full"></div>
            <div>FUN</div>
          </div>
          <div className="flex items-center self-end mr-2 mt-3">
            <div className="text-[12px] text-slate-600 flex mr-2 space-x-1">
              <div className="font-bold">5</div>
              <div>/</div>
              <div>6</div>
            </div>
            <div className="border p-2">
              <ChevronLeft className="w-3" />
            </div>
            <div className="border-y border-r p-2">
              <ChevronRight className="w-3" />
            </div>
          </div>
        </div>
        <div className="space-y-2 self-start px-2 pb-5">
          {[1, 2, 3].map((v) => (
            <div key={v} className="flex space-x-3">
              <div className="h-[97px] w-[140px] border bg-slate-100"></div>
              <div className="text-xs">
                <div className="font-bold text-blue-700 text-sm">Q 월드샵</div>
                <div className="font-bold mt-3">이거면 손목 팔 부상 안녕</div>
                <div>튼튼한 내구성 까지</div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-slate-200 h-[1px] w-11/12"></div>
        <div className=" text-sm self-start flex justify-between w-full my-2 px-2">
          <div className="flex items-center space-x-1 font-bold">
            <div>오늘의 특가ZONE</div>
          </div>
          <div className="flex items-center self-end mr-2 mt-3">
            <div className="text-[12px] text-slate-600 flex mr-2 space-x-1">
              <div className="font-bold">5</div>
              <div>/</div>
              <div>14</div>
            </div>
            <div className="border p-2">
              <ChevronLeft className="w-3" />
            </div>
            <div className="border-y border-r p-2">
              <ChevronRight className="w-3" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          {[1, 2].map((v) => (
            <div key={v} className=" w-[163px] ">
              <div className="h-[164px] w-full bg-slate-200"></div>
              <div className="text-xs mt-2">
                <div>깔끔한 주방 이렇게쉬웠나?</div>
                <div>
                  <span className="text-red-500 font-bold">17%</span>
                  <span className="ml-2 font-bold text-xs">49,000원</span>
                  <span className="line-through text-slate-400 ml-1">
                    {" "}
                    60,000원
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-slate-200 h-[1px] w-11/12 my-5"></div>
        <div className=" text-sm self-start flex justify-between w-full my-2 px-2">
          <div className="flex items-center space-x-1 font-bold">
            <span>원뿔딜 전상품 무료 배송</span>
          </div>
          <div className="flex items-center self-end mr-2 mt-3">
            <div className="text-[12px] text-slate-600 flex mr-2 space-x-1">
              <div className="font-bold">5</div>
              <div>/</div>
              <div>14</div>
            </div>
            <div className="border p-2">
              <ChevronLeft className="w-3" />
            </div>
            <div className="border-y border-r p-2">
              <ChevronRight className="w-3" />
            </div>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          {[1, 2, 3].map((v) => (
            <div key={v} className="flex self-start px-2 space-x-2 relative">
              <div className="h-[60px] w-[86px] bg-slate-200 rounded-md"></div>
              <div className="absolute top-5 left-[80px] bg-white  rounded-full">
                <PlusSVG />
              </div>
              <div className="w-[60px] h-[60px] bg-slate-200 rounded-md"></div>
              <div className="w-[160px] text-xs">
                <div>그릭오 그릭요거트 크리미 플레인</div>
                <div>320g + 스테비아 스위트 240g</div>
                <div className="mt-2">
                  <span className="text-red-500 font-bold">22%</span>
                  <span className="font-bold ml-2">13,900원</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
