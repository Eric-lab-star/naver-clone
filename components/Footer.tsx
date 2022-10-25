import ChevronLeft from "./ChevronRight";

export default function Footer() {
  return (
    <div className="px-8 min-w-max flex justify-center items-center  ">
      <div className="w-[1133px]  h-[423px] divide-y-[1.7px] flex flex-col">
        <div className="h-[135px] py-5 flex w-full">
          <div className="w-1/3 h-full flex">
            <div className="w-[160px] bg-amber-200 h-full"></div>
            <div className="flex-1 text-xs h-full pl-4 flex flex-col justify-between py-1">
              <div className="text-green-500  font-bold">
                탄소녹색중립 성장 위원회
              </div>
              <div className=" font-semibold text-sm">경제의 새로운 발견!</div>
              <div>
                <p>환경도 경제도 살리는</p>
                <p>우리 위한 우리 다운 선택</p>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-full flex">
            <div className="w-[160px] bg-amber-200 h-full"></div>
            <div className="flex-1 text-xs h-full pl-4 flex flex-col justify-between py-1">
              <div className="text-green-500  font-bold">네이버 커넥트재단</div>
              <div className=" font-semibold text-sm">연구 과제 공모</div>
              <div>
                <p>공모에 선정된 연구자에게</p>
                <p>교육 데이터와 연구비 지원</p>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-full flex">
            <div className="w-[160px] bg-amber-200 h-full"></div>
            <div className="flex-1 text-xs h-full pl-4 flex flex-col justify-between py-1">
              <div className="text-green-500  font-bold">주니어 네이버</div>
              <div className=" font-semibold text-sm">
                우리아이 취향 저격 이벤트
              </div>
              <div>
                <p>기대평 작성하고</p>
                <p>공룡 뮤지컬 초대권 받자!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 w-full flex justify-between items-center text-xs font-bold">
          <div>공지 사항</div>
          <div className="flex justify-center items-center">
            <div className="mr-2">서비스 전체보기</div>
            <ChevronLeft />
          </div>
        </div>
        <div className="h-[135px] flex justify-between items-center w-full text-xs text-slate-500">
          <div className="space-y-2">
            <div className="flex">
              <span className="font-bold text-slate-700 w-[90px]">
                Creators
              </span>
              <div className="divide-x-[1px] divide-slate-300 space-x-2 flex justify-start">
                <span className="hover:underline hover:cursor-pointer ">
                  크리에이터
                </span>
                <span className="hover:underline hover:cursor-pointer pl-2">
                  스몰비즈니스
                </span>
              </div>
            </div>
            <div className="flex">
              <span className="font-bold text-slate-700 w-[90px] divide-x-[1px] ">
                Parners
              </span>
              <div className="flex divide-x-[1px] divide-slate-300 space-x-2">
                <span>SME 풀케어 시스템 </span>
                <span className="pl-2">비즈니스 광고</span>
                <span className="pl-2">스토어 개설</span>
                <span className="pl-2">지역업체 등록</span>
                <span className="pl-2">엑스퍼트 등록</span>
              </div>
            </div>
            <div className="flex">
              <span className="font-bold text-slate-700 w-[90px] divide-x-[1px] ">
                Developers
              </span>
              <div className="space-x-2 divide-x-[1px] divide-slate-300">
                <span>네이버 개발자 센터</span>
                <span className="pl-2">오픈 API</span>
                <span className="pl-2">오픈 소스</span>
                <span className="pl-2">네이버 D2</span>
                <span className="pl-2">네이버 D2SF</span>
                <span className="pl-2">네이버 랩스</span>
              </div>
            </div>
          </div>
          <div className="flex mr-6">
            <div className="flex items-center mr-10">
              <div className="min-w-max mr-3">
                <div className="font-bold text-[13px] text-slate-700 pb-1">
                  웨일 브라우저
                </div>
                <div className="">다운 받기</div>
              </div>
              <div className="bg-slate-600 h-12 aspect-square rounded-full"></div>
            </div>
            <div className="flex items-center mr-10">
              <div className="min-w-max mr-3">
                <div className="font-bold text-[13px] text-slate-700 pb-1">
                  프로젝트 꽃
                </div>
                <div>바로 가기</div>
              </div>
              <div className=" bg-slate-700 h-12 aspect-square rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="h-[135px] 0 w-full">
          <div className="flex  max-h-min pt-3 text-slate-500 text-xs ">
            <div className="divide-x-[1px] flex space-x-2 divide-slate-300">
              <div className="pl-2 hover:underline hover:cursor-pointer">
                회사 소개
              </div>
              <div className="pl-2 hover:underline hover:cursor-pointer">
                인재 채용
              </div>
              <div className="pl-2 hover:underline hover:cursor-pointer">
                제휴약관
              </div>
              <div className="pl-2 hover:underline hover:cursor-pointer">
                이용약관
              </div>
              <div className="pl-2 hover:underline hover:cursor-pointer">
                개인정보처리방침
              </div>
              <div className="pl-2 hover:underline hover:cursor-pointer">
                청소년보호정책
              </div>
              <div className="pl-2 hover:underline hover:cursor-pointer">
                네이버 정책
              </div>
              <div className="pl-2 hover:underline hover:cursor-pointer">
                고객센터
              </div>
            </div>
            <div>
              <div className="pl-2 font-bold text-black">
                &copy; Naver Corp.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
