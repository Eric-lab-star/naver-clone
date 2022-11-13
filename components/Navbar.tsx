import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import { IWeatherData } from "../pages/api/weather/[...location]";
import cls from "../utils/cls";
import MailSvg from "./MailSvg";
export default function Navbar() {
  const [counter, setCounter] = useState(0);
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

  const [{ lat, long }, setPosition] = useState<{
    lat: number;
    long: number;
  }>({ lat: 36, long: 127 });

  useEffect(() => {
    const geo = window.navigator.geolocation;
    geo.getCurrentPosition((pos) =>
      setPosition({ lat: pos.coords.latitude, long: pos.coords.longitude })
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev += 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  //@ts-ignore
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR<IWeatherData>("/api/weather");
  const { data: test } = useSWR("/api/hello");

  console.log(test);
  // useEffect(() => {
  //   fetch("/api/weather")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTest(data);
  //     });
  // }, []);
  // console.log(test);

  return (
    <div className="border-y min-w-max  shadow-sm px-8 ">
      <div className="w-[1133px] flex items-center justify-between m-auto ">
        <ul className="flex flex-nowrap space-x-3 py-[13px]">
          <Link href={"/"}>
            <a>
              <MailSvg />
            </a>
          </Link>
          {navList.map((value, index) => (
            <Link key={value} href={`/${value}`} legacyBehavior>
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
        <div>
          {counter % 2 === 1 && (
            <div className="flex text-[15px] text-slate-800 items-center font-semibold space-x-1">
              <div>
                <span className="mr-1">습도</span>
                {data?.main.humidity}
              </div>
              <div>
                <span className="mr-1">풍속</span>
                {data?.wind.speed}
              </div>
            </div>
          )}
          {counter % 2 === 0 && (
            <div className="flex text-[15px] text-slate-800 items-center font-semibold space-x-1">
              <div className=" w-[40px] h-[40px] relative">
                {data?.weather[0]?.icon && (
                  <Image
                    src={` http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                    alt="icon"
                    layout="fill"
                  />
                )}
              </div>
              <div>{data?.main?.temp}&#8451;</div>
              <div>{data?.weather[0]?.description}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
