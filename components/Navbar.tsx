import Link from "next/link";
import React from "react";
import MailSvg from "./SVG/MailSvg";
import NavbarItem from "./utils/NavBarItems";

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
    <div className="border-y min-w-max  shadow-sm px-8 ">
      <div className="w-[1133px] relative flex items-center justify-between m-auto ">
        <div className="flex flex-nowrap space-x-3 py-[13px]">
          <Link href={"/"} title="메일">
            <MailSvg />
          </Link>
          {navList.map((value, index) => (
            <NavbarItem key={value} value={value} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
