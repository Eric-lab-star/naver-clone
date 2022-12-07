import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Advertise() {
  return (
    <div className=" relative bg-slate-100 h-[134px] mb-4 border border-slate-300">
      <Image
        src={
          "https://ssl.pstatic.net/melona/libs/1422/1422164/80e4bce83d95a8e26487_20221114185458628.jpg"
        }
        layout="fill"
        alt="advertisment"
      />
    </div>
  );
}
