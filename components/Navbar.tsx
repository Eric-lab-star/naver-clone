import Link from "next/link";
import cls from "../utils/cls";

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
    <div className="flex w-full py-4 justify-between">
      <ul className="space-x-2 ">
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
  );
}
