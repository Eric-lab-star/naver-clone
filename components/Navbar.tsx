import Link from "next/link";
import cls from "../utils/cls";
import MailSvg from "./MailSvg";

export default function Navbar() {
  const navList = [
    "메일",
    "카페",
    "블로그",
    "지식iN",
    "쇼핑",
    "쇼핑라이브",
    "Pay",
    "Tv",
    "사전",
    "뉴스",
    "증권",
    "부동산",
    "지도",
    "VIBE",
    "도서",
    "웹툰",
  ];
  return (
    <div className="border-y min-w-max  shadow-[0px_10px_10px_-13px_rgba(0,0,0,0.5)] px-8 ">
      <div className="w-[1133px] flex items-center justify-between m-auto ">
        <ul className="flex flex-nowrap space-x-3 py-[13px]">
          <Link href={"/메일"}>
            <MailSvg />
          </Link>
          {navList.map((value, index) => (
            <Link key={value} href={`/${value}`}>
              <a
                className={cls(
                  "font-bold",
                  index <= 7 ? "text-green-500" : "text-slate-800"
                )}
              >
                {value}
              </a>
            </Link>
          ))}
        </ul>
        <div>미세 | 좋음 | 초미세 |좋음</div>
      </div>
    </div>
  );
}
